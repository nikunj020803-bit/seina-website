-- Run this FULL script in your Supabase project: SQL Editor → New query → paste and run

-- 1. Create tables (skip if already created)
create table if not exists demo_requests (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null,
  company text not null,
  role text not null,
  team_size text not null,
  demo_focus text,
  timeslot text,
  created_at timestamptz default now() not null
);

create table if not exists contact_messages (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now() not null
);

-- 2. Disable Row Level Security (so anon key can write)
alter table demo_requests disable row level security;
alter table contact_messages disable row level security;

-- 3. Grant full access to anon and authenticated roles
grant usage on schema public to anon, authenticated;
grant all privileges on demo_requests to anon, authenticated;
grant all privileges on contact_messages to anon, authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;

-- 4. Reload PostgREST schema cache so the tables become accessible via the API
notify pgrst, 'reload schema';
