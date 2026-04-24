-- ============================================================
-- AI för utbildningsledare – Supabase schema
-- Kör detta i Supabase SQL Editor efter att projektet skapats
-- ============================================================

-- Profiles (synkroniseras med auth.users via trigger)
create table if not exists public.profiles (
  id         uuid references auth.users on delete cascade primary key,
  full_name  text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Module progress
create table if not exists public.module_progress (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid references auth.users on delete cascade not null,
  module_id    integer not null,
  section_id   text not null,
  completed_at timestamptz default now(),
  unique(user_id, module_id, section_id)
);

alter table public.module_progress enable row level security;

create policy "Users can manage own progress"
  on public.module_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Exam submissions
create table if not exists public.exam_submissions (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid references auth.users on delete cascade not null unique,
  part1        text not null default '',
  part2        text not null default '',
  part3        text not null default '',
  part4        text not null default '',
  approved     boolean not null default false,
  submitted_at timestamptz default now()
);

alter table public.exam_submissions enable row level security;

create policy "Users can manage own submission"
  on public.exam_submissions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Diplomas
create table if not exists public.diplomas (
  id                uuid default gen_random_uuid() primary key,
  user_id           uuid references auth.users on delete cascade not null unique,
  user_name         text not null,
  issued_at         timestamptz default now(),
  verification_code text unique not null
);

alter table public.diplomas enable row level security;

create policy "Users can view own diploma"
  on public.diplomas for select
  using (auth.uid() = user_id);

create policy "Users can insert own diploma"
  on public.diplomas for insert
  with check (auth.uid() = user_id);

create policy "Users can update own diploma"
  on public.diplomas for update
  using (auth.uid() = user_id);
