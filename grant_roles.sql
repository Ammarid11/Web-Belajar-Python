-- Beri / cabut peran tester atau admin (Supabase > SQL Editor).
-- Peran disimpan di app_metadata: tidak bisa diubah pengguna lewat API klien.
-- Pengguna harus keluar lalu masuk lagi (atau menunggu token diperbarui) agar peran terbaca.

-- Beri peran:
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role": "tester"}'::jsonb   -- atau "admin"
where email = 'tester@contoh.com';

-- Cabut peran:
-- update auth.users set raw_app_meta_data = raw_app_meta_data - 'role' where email = 'tester@contoh.com';

-- Daftar pemegang peran:
-- select email, raw_app_meta_data ->> 'role' as role from auth.users where raw_app_meta_data ? 'role';
