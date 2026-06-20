-- ==========================================
-- MarutiDigital.in — Supabase Schema Script
-- Copy and paste this script into the Supabase SQL Editor
-- ==========================================

-- Enable pgcrypto for random UUID generation
create extension if not exists pgcrypto;

-- 1. Profiles Table (Linked to Supabase Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  email text,
  avatar_url text,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS on Profiles
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can update their own profile." on public.profiles
  for update using (auth.uid() = id);

-- Trigger to automatically create profile on Auth signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', 'New Builder'),
    new.email,
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Blog Posts Table
create table public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  category text not null,
  excerpt text,
  content text,
  author_name text not null,
  read_time text not null,
  featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.blog_posts enable row level security;

create policy "Blog posts are viewable by everyone." on public.blog_posts
  for select using (true);

create policy "Only admin can write/modify blog posts." on public.blog_posts
  for all using (
    exists (
      select 1 from auth.users 
      where auth.users.id = auth.uid() 
      and auth.users.email = 'marutidigitalweb@gmail.com' -- Admin check
    )
  );

-- Insert Mock Posts
insert into public.blog_posts (title, slug, category, excerpt, author_name, read_time, featured) values
('How to Build a ₹2L/Month Freelance System in India Using Automation', 'freelance-automation-india', 'Case Study', 'A complete step-by-step walkthrough of leveraging n8n automation, Supabase databases, and Next.js interfaces to run a one-person digital agency without hiring admin staff.', 'Shikha Dev', '8 min read', true),
('Designing Custom n8n Nodes: A Practical Developer''s Guide', 'custom-n8n-nodes-guide', 'Tutorial', 'Learn the exact typescript structures required to build, test, and publish custom node plugins for self-hosted n8n instances.', 'Aman Kumar', '6 min read', false),
('Top 5 Headless CMS Alternatives for Indian SaaS Products in 2026', 'headless-cms-saas-india', 'Guide', 'Comparing Sanity.io, Strapi, Decap, and local markdown layouts for pricing, latency, and INR payment gateway integrations.', 'Shikha Dev', '5 min read', false);


-- 3. Invoices Table
create table public.invoices (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete set null,
  invoice_no text not null,
  sender text not null,
  client text not null,
  date date not null,
  subtotal numeric not null,
  gst numeric not null,
  total numeric not null,
  items jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.invoices enable row level security;

create policy "Users can view their own generated invoices." on public.invoices
  for select using (auth.uid() = user_id or auth.uid() is null); -- allows public tests

create policy "Anyone can insert an invoice." on public.invoices
  for insert with check (true);


-- 4. Shop Orders Table
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete set null,
  items jsonb not null,
  total numeric not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.orders enable row level security;

create policy "Users can view their own orders." on public.orders
  for select using (auth.uid() = user_id);

create policy "Anyone can create an order." on public.orders
  for insert with check (true);


-- 5. Forum Threads Table
create table public.forum_threads (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null,
  author_name text not null default 'Anonymous Builder',
  replies_count integer default 0,
  views_count integer default 1,
  likes_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.forum_threads enable row level security;

create policy "Forum threads are viewable by everyone." on public.forum_threads
  for select using (true);

create policy "Anyone can create forum threads." on public.forum_threads
  for insert with check (true);


-- 6. Forum Likes (Unique tracker)
create table public.forum_likes (
  id bigint generated by default as identity primary key,
  thread_id uuid references public.forum_threads(id) on delete cascade,
  ip_address text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.forum_likes enable row level security;

create policy "Likes are viewable by everyone." on public.forum_likes
  for select using (true);

create policy "Anyone can like forum threads." on public.forum_likes
  for insert with check (true);


-- ==========================================
-- SERVICE MARKETPLACE EXTENSION
-- ==========================================

-- 7. GIGS TABLE (Service Catalog)
create table public.gigs (
  id uuid default gen_random_uuid() primary key,
  category text not null, -- 'vercel', 'supabase', 'wordpress', 'shopify', 'wix', 'ssl_domain', 'nocode', 'cloud_api', 'websites', 'ecommerce', 'design', 'ai_content', 'seo_content', 'automation', 'misc'
  title text not null,
  description text not null,
  price_usd numeric not null,
  delivery_days integer not null,
  slug text unique not null,
  tier text not null default 'standard', -- 'quick_fix', 'standard', 'build', 'design', 'ai_content', 'retainer', 'emergency'
  is_active boolean default true,
  is_emergency boolean default false,
  avg_rating numeric default 0,
  review_count integer default 0,
  order_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.gigs enable row level security;
create policy "Gigs are viewable by everyone." on public.gigs for select using (true);
create policy "Only admin can manage gigs." on public.gigs for all using (
  exists (select 1 from auth.users where auth.users.id = auth.uid() and auth.users.email = 'marutidigitalweb@gmail.com')
);

-- 8. SERVICE ORDERS TABLE
create table public.service_orders (
  id uuid default gen_random_uuid() primary key,
  gig_id uuid references public.gigs(id) on delete set null,
  client_name text not null,
  client_email text not null,
  client_phone text,
  project_details text,
  gig_title text not null,
  gig_category text not null,
  total_amount_usd numeric not null,
  deposit_amount_usd numeric not null,
  balance_amount_usd numeric not null,
  deposit_stripe_session_id text,
  balance_stripe_session_id text,
  deposit_paid_at timestamp with time zone,
  balance_paid_at timestamp with time zone,
  status text default 'submitted', -- 'submitted', 'deposit_paid', 'in_progress', 'delivered', 'balance_paid', 'complete', 'cancelled'
  assigned_to text,
  delivery_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.service_orders enable row level security;
create policy "Anyone can create a service order." on public.service_orders for insert with check (true);
create policy "Users can view their own service orders." on public.service_orders for select using (client_email = (select email from public.profiles where id = auth.uid()) or auth.uid() is null);
create policy "Admin can manage all service orders." on public.service_orders for all using (
  exists (select 1 from auth.users where auth.users.id = auth.uid() and auth.users.email = 'marutidigitalweb@gmail.com')
);

-- 9. GIG REVIEWS TABLE
create table public.gig_reviews (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.service_orders(id) on delete cascade,
  gig_id uuid references public.gigs(id) on delete cascade,
  reviewer_name text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  is_verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.gig_reviews enable row level security;
create policy "Reviews are viewable by everyone." on public.gig_reviews for select using (true);
create policy "Anyone can submit a review." on public.gig_reviews for insert with check (true);

-- Function to update gig avg_rating when review inserted
create or replace function public.update_gig_rating()
returns trigger as $$
begin
  update public.gigs set
    avg_rating = (select avg(rating) from public.gig_reviews where gig_id = new.gig_id),
    review_count = (select count(*) from public.gig_reviews where gig_id = new.gig_id)
  where id = new.gig_id;
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_review_created
  after insert on public.gig_reviews
  for each row execute procedure public.update_gig_rating();

-- 10. CUSTOM REQUESTS TABLE
create table public.custom_requests (
  id uuid default gen_random_uuid() primary key,
  client_name text not null,
  client_email text not null,
  client_phone text,
  problem_description text not null,
  budget_range text,
  timeline text,
  ai_suggested_gig_ids jsonb,
  status text default 'new', -- 'new', 'quoted', 'converted', 'declined'
  admin_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.custom_requests enable row level security;
create policy "Anyone can submit a custom request." on public.custom_requests for insert with check (true);
create policy "Admin can view and manage custom requests." on public.custom_requests for all using (
  exists (select 1 from auth.users where auth.users.id = auth.uid() and auth.users.email = 'marutidigitalweb@gmail.com')
);

-- 11. GIG TEAM ASSIGNMENTS TABLE
create table public.gig_team_assignments (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.service_orders(id) on delete cascade,
  assigned_to_name text not null,
  assigned_at timestamp with time zone default timezone('utc'::text, now()),
  notes text,
  status text default 'assigned' -- 'assigned', 'in_progress', 'done'
);

alter table public.gig_team_assignments enable row level security;
create policy "Admin can manage team assignments." on public.gig_team_assignments for all using (
  exists (select 1 from auth.users where auth.users.id = auth.uid() and auth.users.email = 'marutidigitalweb@gmail.com')
);
