-- Jalankan di Supabase > SQL Editor
create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "baca progress sendiri" on public.progress
  for select using (auth.uid() = user_id);
create policy "tambah progress sendiri" on public.progress
  for insert with check (auth.uid() = user_id);
create policy "ubah progress sendiri" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "hapus progress sendiri" on public.progress
  for delete using (auth.uid() = user_id);
