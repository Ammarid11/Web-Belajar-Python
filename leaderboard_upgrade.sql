-- =====================================================================
-- PYTHON ODYSSEY - leaderboard_upgrade.sql
-- Jalankan SETELAH schema.sql (Supabase > SQL Editor). Idempoten.
-- Menggantikan bagian "4. Leaderboard" di schema.sql:
--   * fungsi baru leaderboard(periode, limit_n) dan leaderboard_saya(periode)
--     (sesuai pemanggilan di cloud.js; versi lama leaderboard(int) dihapus)
--   * soal yang dihitung divalidasi terhadap katalog level (id ngawur diabaikan)
--   * deteksi kecurangan permanen (tabel flag, tidak hilang saat Reset)
--   * impor massal / sinkron pertama tidak lagi dianggap curang
--   * nama tampilan unik, bersih dari karakter kontrol/bidi, bukan nama terlarang
--   * ukuran blob progress dibatasi
-- =====================================================================

-- 1. Katalog level -----------------------------------------------------
-- Jumlah soal per level. SAMAKAN dengan curriculum.js. Untuk membuat ulang,
-- jalankan di konsol browser:
--   copy(levelsData.map(l => `(${l.id}, ${l.tasks.length})`).join(',\n'))
create table if not exists public.task_catalog (
    level_id int primary key,
    n_tasks  int not null check (n_tasks between 1 and 20)
);
alter table public.task_catalog enable row level security;
revoke all on public.task_catalog from anon, authenticated;

insert into public.task_catalog (level_id, n_tasks)
select g, 10 from generate_series(1, 106) g
union all
select * from (values
    (107,6),(108,6),(109,6),(110,6),(111,6),(112,6),(113,6),
    (114,5),(115,5),(116,5),(117,5),(118,5),(119,5),
    (120,8),(121,8),(122,9),(123,8),(124,8),(125,7),(126,8),(127,8),
    (128,5),(129,5),(130,5),(131,5),(132,5),(133,5),(134,5),(135,5),(136,5),(137,5),(138,5),(139,5)
) v
on conflict (level_id) do update set n_tasks = excluded.n_tasks;

-- Buang baris turunan yang id-nya tidak ada di katalog (mis. hasil data ngawur)
delete from public.task_completions c
where not exists (
    select 1 from public.task_catalog k
    where k.level_id = c.level_id and c.task_index < k.n_tasks
);

-- 2. Flag kecurangan (hanya bisa dibaca/ditulis server) -----------------
create table if not exists public.leaderboard_flags (
    user_id    uuid primary key references auth.users (id) on delete cascade,
    reason     text not null,
    flagged_at timestamptz not null default now()
);
alter table public.leaderboard_flags enable row level security;
revoke all on public.leaderboard_flags from anon, authenticated;
-- Moderasi manual:  delete from public.leaderboard_flags where user_id = '...';
--                   insert into public.leaderboard_flags (user_id, reason) values ('...', 'manual');

-- 3. Batas ukuran blob progress ------------------------------------------
do $$
begin
    if not exists (select 1 from pg_constraint where conname = 'progress_data_size') then
        alter table public.progress
            add constraint progress_data_size check (octet_length(data::text) < 2000000) not valid;
    end if;
end $$;

-- 4. Trigger sinkronisasi (versi aman) ------------------------------------
create or replace function public._wanted_completions(p jsonb)
returns table (level_id int, task_index int)
language sql stable
set search_path = public
as $$
    select distinct r.level_id, r.task_index
    from (
        select case when l.key ~ '^\d{1,3}$' then l.key::int end as level_id,
               case when t.val ~ '^\d{1,2}$' then t.val::int end as task_index
        from jsonb_each(
            case when jsonb_typeof(p -> 'done') = 'object' then p -> 'done' else '{}'::jsonb end
        ) as l(key, value)
        cross join lateral jsonb_array_elements_text(
            case when jsonb_typeof(l.value) = 'array' then l.value else '[]'::jsonb end
        ) as t(val)
    ) r
    join public.task_catalog k on k.level_id = r.level_id and r.task_index < k.n_tasks;
$$;
revoke all on function public._wanted_completions(jsonb) from public, anon, authenticated;

create or replace function public.sync_task_completions()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
    v_new  int;
    v_hour int;
begin
    -- berapa soal yang benar-benar baru pada sinkron ini
    select count(*) into v_new
    from public._wanted_completions(new.data) w
    where not exists (
        select 1 from public.task_completions c
        where c.user_id = new.user_id and c.level_id = w.level_id and c.task_index = w.task_index
    );

    -- Lonjakan besar (> 25 soal sekaligus) = impor file / login perangkat baru.
    -- Waktunya tidak bisa dipercaya, jadi ditandai estimasi: masuk "Semua waktu",
    -- tidak masuk "Minggu ini", dan TIDAK dianggap curang.
    insert into public.task_completions (user_id, level_id, task_index, is_estimated)
    select new.user_id, w.level_id, w.task_index, (v_new > 25)
    from public._wanted_completions(new.data) w
    on conflict do nothing;

    -- soal yang hilang (mis. tombol Reset) dihapus dari tabel turunan
    delete from public.task_completions c
    where c.user_id = new.user_id
      and not exists (
          select 1 from public._wanted_completions(new.data) w
          where w.level_id = c.level_id and w.task_index = c.task_index
      );

    -- Kecepatan tak masuk akal: > 60 soal bertanda waktu akurat dalam 1 jam.
    select count(*) into v_hour
    from public.task_completions
    where user_id = new.user_id and not is_estimated
      and completed_at > now() - interval '1 hour';
    if v_hour > 60 then
        insert into public.leaderboard_flags (user_id, reason)
        values (new.user_id, v_hour || ' soal dalam 1 jam')
        on conflict do nothing;
    end if;
    return null;
exception when others then
    -- data malformed tidak boleh menggagalkan penyimpanan progress
    raise warning 'sync_task_completions: %', sqlerrm;
    return null;
end;
$$;
revoke all on function public.sync_task_completions() from public, anon, authenticated;

drop trigger if exists progress_sync_task_completions on public.progress;
create trigger progress_sync_task_completions
    after insert or update of data on public.progress
    for each row execute function public.sync_task_completions();

-- 5. Profil: nama unik, bersih, bukan nama terlarang ------------------------
create unique index if not exists profiles_display_name_uq
    on public.profiles (lower(btrim(display_name))) where display_name is not null;

do $$
begin
    if not exists (select 1 from pg_constraint where conname = 'profiles_name_clean') then
        alter table public.profiles add constraint profiles_name_clean check (
            display_name is null or (
                display_name !~ '[[:cntrl:]]'
                and display_name !~ '[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]'
                and lower(btrim(display_name)) not in
                    ('admin', 'administrator', 'moderator', 'owner', 'staff', 'python odyssey', 'system', 'anonim')
            )
        ) not valid;
    end if;
end $$;

-- 6. Fungsi peringkat ---------------------------------------------------------
drop function if exists public.leaderboard(int);
drop function if exists public.leaderboard_mingguan(int);
drop function if exists public.leaderboard(text, int);
drop function if exists public.leaderboard_saya(text);

-- Inti peringkat. Tidak bisa dipanggil klien; hanya oleh dua fungsi di bawah.
create or replace function public._lb_ranked(p_periode text)
returns table (user_id uuid, display_name text, soal bigint, peringkat bigint)
language sql stable security definer
set search_path = public
as $$
    with totals as (
        select c.user_id, count(*) as soal
        from task_completions c
        where p_periode = 'semua'
           or (p_periode = 'minggu' and not c.is_estimated and c.completed_at >= now() - interval '7 days')
        group by c.user_id
    )
    select t.user_id, btrim(p.display_name), t.soal,
           rank() over (order by t.soal desc)
    from totals t
    join profiles p on p.user_id = t.user_id
    where p.show_on_leaderboard and p.display_name is not null
      and not exists (select 1 from leaderboard_flags f where f.user_id = t.user_id);
$$;
revoke all on function public._lb_ranked(text) from public, anon, authenticated;

create or replace function public.leaderboard(periode text default 'semua', limit_n int default 20)
returns table (peringkat bigint, display_name text, soal bigint, ini_saya boolean)
language sql stable security definer
set search_path = public
as $$
    select r.peringkat, r.display_name, r.soal, r.user_id = (select auth.uid())
    from public._lb_ranked(periode) r
    order by r.peringkat, r.display_name
    limit least(greatest(limit_n, 1), 100);
$$;

create or replace function public.leaderboard_saya(periode text default 'semua')
returns table (peringkat bigint, total_peserta bigint, soal bigint)
language sql stable security definer
set search_path = public
as $$
    select r.peringkat, (select count(*) from public._lb_ranked(periode)), r.soal
    from public._lb_ranked(periode) r
    where r.user_id = (select auth.uid());
$$;

revoke all on function public.leaderboard(text, int) from public, anon;
revoke all on function public.leaderboard_saya(text) from public, anon;
grant execute on function public.leaderboard(text, int) to authenticated;
grant execute on function public.leaderboard_saya(text) to authenticated;

-- 7. Pemeriksaan -----------------------------------------------------------
-- select * from public.leaderboard('semua', 10);
-- select * from public.leaderboard_saya('minggu');
-- select * from public.leaderboard_flags;
