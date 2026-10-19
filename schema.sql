-- =====================================================================
-- PYTHON ODYSSEY - schema.sql
-- Skema Supabase untuk cloud.js + leaderboard.
-- Cara pakai: Supabase > SQL Editor > New query > tempel > Run.
-- Aman dijalankan berulang kali (idempoten) dan TIDAK menghapus data user.
--
-- Ringkasan:
--   progress          : sumber kebenaran, 1 baris/pengguna (blob JSON dari app.js)
--   task_completions  : turunan otomatis (trigger) dari progress.data.done
--   profiles          : nama tampilan + persetujuan tampil di leaderboard
--   leaderboard(), leaderboard_mingguan() : peringkat lintas pengguna
--
-- Bentuk progress.data (app.js -> serialize()):
--   { "version": 2, "savedAt": 1760000000000,
--     "done": { "1": [0,1,2], "2": [0] },
--     "drafts": { "1-0": "kode..." },
--     "settings": { "lockOrder": false, "dailyGoal": 3, "track": "all" },
--     "activity": { "2026-10-18": 3 },
--     "last": { "levelId": 1, "taskIndex": 0 } }
-- =====================================================================

-- 1. progress ---------------------------------------------------------
create table if not exists public.progress (
    user_id    uuid primary key references auth.users (id) on delete cascade,
    data       jsonb       not null default '{}'::jsonb,
    updated_at timestamptz not null default now(),
    constraint progress_data_is_object check (jsonb_typeof(data) = 'object')
);

comment on table public.progress is
    'Progress belajar Python Odyssey: satu baris per pengguna (dipakai cloud.js).';

alter table public.progress enable row level security;

drop policy if exists "progress_select_own" on public.progress;
drop policy if exists "progress_insert_own" on public.progress;
drop policy if exists "progress_update_own" on public.progress;
drop policy if exists "progress_delete_own" on public.progress;

create policy "progress_select_own" on public.progress
    for select to authenticated
    using ((select auth.uid()) = user_id);

-- upsert() butuh insert DAN update; tanpa salah satunya sinkron gagal.
create policy "progress_insert_own" on public.progress
    for insert to authenticated
    with check ((select auth.uid()) = user_id);

create policy "progress_update_own" on public.progress
    for update to authenticated
    using ((select auth.uid()) = user_id)
    with check ((select auth.uid()) = user_id);

create policy "progress_delete_own" on public.progress
    for delete to authenticated
    using ((select auth.uid()) = user_id);

revoke all on public.progress from anon;
grant select, insert, update, delete on public.progress to authenticated;

-- Fungsi umum: jaga updated_at tetap benar di sisi server
create or replace function public.progress_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists progress_touch_updated_at on public.progress;
create trigger progress_touch_updated_at
    before update on public.progress
    for each row execute function public.progress_touch_updated_at();

-- 2. task_completions (turunan; diisi trigger, bukan oleh aplikasi) ----
-- is_estimated = true  : waktu selesai TIDAK akurat (hasil backfill data lama,
--                        memakai updated_at progress).
-- is_estimated = false : tercatat otomatis oleh trigger saat sinkron.
create table if not exists public.task_completions (
    user_id      uuid        not null references auth.users (id) on delete cascade,
    level_id     int         not null,
    task_index   int         not null,
    completed_at timestamptz not null default now(),
    is_estimated boolean     not null default false,
    primary key (user_id, level_id, task_index)
);

-- Tabel yang dibuat oleh versi skema sebelumnya belum punya kolom is_estimated.
-- Semua baris yang sudah ada saat itu berasal dari backfill => ditandai estimasi.
do $$
begin
    if not exists (
        select 1 from information_schema.columns
        where table_schema = 'public' and table_name = 'task_completions'
          and column_name = 'is_estimated'
    ) then
        alter table public.task_completions
            add column is_estimated boolean not null default false;
        update public.task_completions set is_estimated = true;
    end if;
end $$;

create index if not exists task_completions_level_idx
    on public.task_completions (level_id, task_index);
create index if not exists task_completions_time_idx
    on public.task_completions (completed_at) where not is_estimated;

alter table public.task_completions enable row level security;

drop policy if exists "task_completions_select_own" on public.task_completions;
create policy "task_completions_select_own" on public.task_completions
    for select to authenticated
    using ((select auth.uid()) = user_id);

-- Klien hanya boleh MEMBACA barisnya sendiri; yang menulis hanya trigger.
revoke all on public.task_completions from anon;
revoke insert, update, delete on public.task_completions from authenticated;
grant select on public.task_completions to authenticated;

-- 2a. Backfill dari data yang SUDAH ada (progress tidak diubah/dihapus).
-- Batas wajar: level 1..200, indeks soal 0..19 (kurikulum saat ini: level <= 139,
-- soal <= 10 per level). Naikkan angkanya bila kurikulum bertambah besar.
insert into public.task_completions (user_id, level_id, task_index, completed_at, is_estimated)
select r.user_id, r.level_id, r.task_index, r.stamp, true
from (
    select p.user_id, p.updated_at as stamp,
           case when l.key ~ '^\d{1,3}$' then l.key::int end as level_id,
           case when t.val ~ '^\d{1,2}$' then t.val::int end as task_index
    from public.progress p
    cross join lateral jsonb_each(
        case when jsonb_typeof(p.data -> 'done') = 'object' then p.data -> 'done' else '{}'::jsonb end
    ) as l(key, value)
    cross join lateral jsonb_array_elements_text(
        case when jsonb_typeof(l.value) = 'array' then l.value else '[]'::jsonb end
    ) as t(val)
) r
where r.level_id between 1 and 200 and r.task_index between 0 and 19
on conflict do nothing;

-- 2b. Trigger: tiap progress disimpan, task_completions ikut disesuaikan.
--  - soal baru di `done`  -> ditambah (is_estimated = false)
--  - soal yang hilang (mis. tombol Reset) -> dihapus dari tabel turunan saja
--  - angka di luar batas wajar diabaikan (mencegah skor palsu dengan id ngawur)
--  - data malformed dilewati supaya tidak pernah menggagalkan simpan progress
create or replace function public.sync_task_completions()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    with wanted as (
        select r.level_id, r.task_index
        from (
            select case when l.key ~ '^\d{1,3}$' then l.key::int end as level_id,
                   case when t.val ~ '^\d{1,2}$' then t.val::int end as task_index
            from jsonb_each(
                case when jsonb_typeof(new.data -> 'done') = 'object' then new.data -> 'done' else '{}'::jsonb end
            ) as l(key, value)
            cross join lateral jsonb_array_elements_text(
                case when jsonb_typeof(l.value) = 'array' then l.value else '[]'::jsonb end
            ) as t(val)
        ) r
        where r.level_id between 1 and 200 and r.task_index between 0 and 19
    ), ins as (
        insert into public.task_completions (user_id, level_id, task_index)
        select new.user_id, w.level_id, w.task_index from wanted w
        on conflict do nothing
    )
    delete from public.task_completions c
    where c.user_id = new.user_id
      and not exists (
          select 1 from wanted w
          where w.level_id = c.level_id and w.task_index = c.task_index
      );
    return null;
end;
$$;

drop trigger if exists progress_sync_task_completions on public.progress;
create trigger progress_sync_task_completions
    after insert or update of data on public.progress
    for each row execute function public.sync_task_completions();

-- 3. profiles: nama tampilan + persetujuan (opt-in) -------------------
-- Nama di auth.users tidak bisa dibaca klien, dan tidak semua orang mau
-- tampil di leaderboard, jadi pengguna memilih sendiri. Default: TIDAK tampil.
create table if not exists public.profiles (
    user_id             uuid primary key references auth.users (id) on delete cascade,
    display_name        text,
    show_on_leaderboard boolean     not null default false,
    created_at          timestamptz not null default now(),
    updated_at          timestamptz not null default now(),
    constraint profiles_name_length
        check (display_name is null or char_length(btrim(display_name)) between 2 and 30)
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
drop policy if exists "profiles_delete_own" on public.profiles;

create policy "profiles_select_own" on public.profiles
    for select to authenticated using ((select auth.uid()) = user_id);
create policy "profiles_insert_own" on public.profiles
    for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "profiles_update_own" on public.profiles
    for update to authenticated
    using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "profiles_delete_own" on public.profiles
    for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.profiles from anon;
grant select, insert, update, delete on public.profiles to authenticated;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
    before update on public.profiles
    for each row execute function public.progress_touch_updated_at();

-- 4. Leaderboard (security definer: membaca lintas pengguna tanpa membuka
--    tabel mentah). Hanya pengguna yang opt-in dan punya nama yang tampil.
--
-- Pengamanan dasar anti-curang: pengguna yang pernah mencatat LEBIH dari 100
-- soal baru dalam SATU kali sinkron (batas di bawah, ubah sesuai kebutuhan)
-- tidak ditampilkan. Ini hanya menyaring kecurangan kasar; skor tetap berasal
-- dari browser, jadi bukan jaminan penuh.
create or replace function public.leaderboard(limit_n int default 20)
returns table (peringkat bigint, display_name text, soal_selesai bigint, ini_saya boolean)
language sql
stable
security definer
set search_path = public
as $$
    with batch as (
        select user_id, completed_at, count(*) as n
        from task_completions
        where not is_estimated
        group by user_id, completed_at
    ), flagged as (
        select distinct user_id from batch where n > 100   -- << batas curiga
    ), totals as (
        select user_id, count(*) as soal from task_completions group by user_id
    ), ranked as (
        select t.user_id, p.display_name, t.soal,
               rank() over (order by t.soal desc) as peringkat
        from totals t
        join profiles p on p.user_id = t.user_id
        where p.show_on_leaderboard and p.display_name is not null
          and t.user_id not in (select user_id from flagged)
    )
    select r.peringkat, btrim(r.display_name), r.soal, r.user_id = (select auth.uid())
    from ranked r
    order by r.peringkat, r.display_name
    limit least(greatest(limit_n, 1), 100);
$$;

-- Mingguan: hanya soal dengan waktu AKURAT (bukan hasil backfill) 7 hari terakhir.
create or replace function public.leaderboard_mingguan(limit_n int default 20)
returns table (peringkat bigint, display_name text, soal_minggu_ini bigint, ini_saya boolean)
language sql
stable
security definer
set search_path = public
as $$
    with batch as (
        select user_id, completed_at, count(*) as n
        from task_completions
        where not is_estimated
        group by user_id, completed_at
    ), flagged as (
        select distinct user_id from batch where n > 100   -- << batas curiga
    ), totals as (
        select user_id, count(*) as soal
        from task_completions
        where not is_estimated and completed_at >= now() - interval '7 days'
        group by user_id
    ), ranked as (
        select t.user_id, p.display_name, t.soal,
               rank() over (order by t.soal desc) as peringkat
        from totals t
        join profiles p on p.user_id = t.user_id
        where p.show_on_leaderboard and p.display_name is not null
          and t.user_id not in (select user_id from flagged)
    )
    select r.peringkat, btrim(r.display_name), r.soal, r.user_id = (select auth.uid())
    from ranked r
    order by r.peringkat, r.display_name
    limit least(greatest(limit_n, 1), 100);
$$;

revoke all on function public.leaderboard(int) from public, anon;
revoke all on function public.leaderboard_mingguan(int) from public, anon;
grant execute on function public.leaderboard(int) to authenticated;
grant execute on function public.leaderboard_mingguan(int) to authenticated;

-- 5. Hapus tabel lama user_progress HANYA bila kosong ------------------
-- Bila ada isinya, tabel dibiarkan dan muncul NOTICE (tidak ada data hilang).
do $$
begin
    if to_regclass('public.user_progress') is not null then
        if not exists (select 1 from public.user_progress) then
            drop table public.user_progress;
            raise notice 'user_progress kosong -> dihapus';
        else
            raise notice 'user_progress berisi data -> DIBIARKAN, periksa manual';
        end if;
    end if;
end $$;

-- 6. Pemeriksaan (jalankan terpisah bila perlu) -----------------------
-- Jumlah soal selesai per pengguna: di_blob harus sama dengan di_tabel
-- select p.user_id,
--        (select coalesce(sum(jsonb_array_length(v)), 0) from jsonb_each(p.data -> 'done') as d(k, v)) as di_blob,
--        (select count(*) from public.task_completions c where c.user_id = p.user_id) as di_tabel
--   from public.progress p;
--
-- Policy aktif:
-- select tablename, policyname, cmd from pg_policies where schemaname = 'public' order by 1, 3;
--
-- Pengguna Auth tanpa baris progress (terbuat otomatis saat login berikutnya):
-- select u.id, u.email from auth.users u left join public.progress p on p.user_id = u.id where p.user_id is null;
--
-- Contoh pemakaian dari aplikasi (supabase-js):
--   await sb.rpc("leaderboard", { limit_n: 20 });
--   await sb.from("profiles").upsert({ user_id: user.id, display_name: "Budi", show_on_leaderboard: true });
