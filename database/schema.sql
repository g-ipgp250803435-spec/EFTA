create table if not exists profiles (
 id uuid references auth.users on delete cascade primary key,
 full_name text,
 institution text,
 role text default 'siswa_guru',
 language text default 'MY',
 created_at timestamp default now()
);

alter table profiles enable row level security;

create policy "Users can view own profile"
on profiles for select
using (auth.uid() = id);

create policy "Users can update own profile"
on profiles for update
using (auth.uid() = id);
