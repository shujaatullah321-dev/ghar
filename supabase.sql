-- Ghar.com: Supabase SQL Editor mein yeh poora paste karke "Run" dabayein.
create table if not exists public.listings (
  id text primary key default gen_random_uuid()::text,
  data jsonb not null,
  created_at timestamptz not null default now()
);
alter table public.listings enable row level security;
-- Har koi listings dekh sakta hai
create policy "Anyone can read listings" on public.listings for select using (true);
-- Har koi free ad daal sakta hai (size limit ke saath)
create policy "Anyone can post a listing" on public.listings for insert
  with check (pg_column_size(data) < 800000);
-- Ads delete/edit sirf aap Supabase dashboard (Table Editor) se kar sakte hain.
