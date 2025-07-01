
# Backend Setup Guide

This guide provides step-by-step instructions for setting up a full backend for your Learning Management System project using Supabase integration with Lovable.

## Prerequisites

- Lovable project (current project)
- Supabase account (free tier available)
- Basic understanding of SQL and database concepts

## Step 1: Connect Supabase to Lovable

1. **Click the green Supabase button** in the top-right corner of your Lovable interface
2. **Sign up/Login to Supabase** if you don't have an account
3. **Create a new Supabase project** or select an existing one
4. **Connect your project** - Lovable will automatically configure the connection

## Step 2: Database Schema Setup

Once connected, you'll need to create the following tables in your Supabase database:

### Users Table (Enhanced)
```sql
-- Extend the default auth.users with a profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role TEXT CHECK (role IN ('student', 'instructor', 'admin')) DEFAULT 'student',
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (id)
);
```

### Courses Table
```sql
CREATE TABLE public.courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  instructor_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  category TEXT,
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  duration_hours INTEGER,
  thumbnail_url TEXT,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Projects Table
```sql
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('not_started', 'in_progress', 'completed', 'submitted')) DEFAULT 'not_started',
  due_date TIMESTAMPTZ,
  submitted_at TIMESTAMPTZ,
  grade DECIMAL(5,2),
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Blog Posts Table
```sql
CREATE TABLE public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  category TEXT,
  tags TEXT[],
  status TEXT CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
  featured_image_url TEXT,
  read_time_minutes INTEGER,
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Peer Reviews Table
```sql
CREATE TABLE public.peer_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  reviewee_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  feedback TEXT,
  status TEXT CHECK (status IN ('pending', 'completed', 'overdue')) DEFAULT 'pending',
  due_date TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Enrollments Table
```sql
CREATE TABLE public.enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  completed_at TIMESTAMPTZ,
  UNIQUE(student_id, course_id)
);
```

## Step 3: Row Level Security (RLS) Policies

Enable RLS on all tables and create appropriate policies:

```sql
-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.peer_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Example policies for profiles table
CREATE POLICY "Users can view all profiles" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## Step 4: Database Functions

Create useful database functions:

```sql
-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## Step 5: Edge Functions

Create Supabase Edge Functions for backend logic:

### 1. User Management Function
```typescript
// supabase/functions/manage-user/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { action, userData } = await req.json()
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  switch (action) {
    case 'create_user':
      // Handle user creation logic
      break
    case 'update_role':
      // Handle role updates
      break
    default:
      return new Response('Invalid action', { status: 400 })
  }
})
```

### 2. Course Management Function
```typescript
// supabase/functions/manage-courses/index.ts
// Handle course CRUD operations, enrollment, progress tracking
```

### 3. Notification Function
```typescript
// supabase/functions/send-notifications/index.ts
// Handle email notifications, deadlines, etc.
```

## Step 6: Authentication Setup

1. **Configure Auth Providers** in Supabase Dashboard:
   - Email/Password (enabled by default)
   - OAuth providers (Google, GitHub, etc.) if needed

2. **Set up Email Templates**:
   - Customize signup confirmation emails
   - Password reset emails
   - Magic link emails

## Step 7: Storage Setup

1. **Create Storage Buckets**:
   - `avatars` - for user profile pictures
   - `course-materials` - for course files
   - `project-submissions` - for student project files
   - `blog-images` - for blog post images

2. **Configure Storage Policies**:
```sql
-- Allow users to upload their own avatars
CREATE POLICY "Users can upload own avatar" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
```

## Step 8: Frontend Integration

Update your React components to use Supabase:

1. **Install Supabase client** (if not already done):
```bash
npm install @supabase/supabase-js
```

2. **Create Supabase client**:
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

3. **Update AuthContext** to use Supabase Auth
4. **Create data fetching hooks** for each entity
5. **Implement real-time subscriptions** for live updates

## Step 9: API Integration

Create custom hooks for data operations:

```typescript
// src/hooks/useCourses.ts
export const useCourses = () => {
  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*, profiles(*)')
      .eq('is_published', true)
    
    if (error) throw error
    return data
  }
  
  // Add more course operations...
}
```

## Step 10: Testing and Deployment

1. **Test all functionality** in Supabase Test Mode
2. **Set up proper indexes** for performance
3. **Configure backups** and monitoring
4. **Deploy edge functions**
5. **Test with real data**

## Security Checklist

- ✅ RLS enabled on all tables
- ✅ Proper authentication policies
- ✅ Input validation in edge functions
- ✅ Secure storage policies
- ✅ API rate limiting (if needed)
- ✅ Environment variables secured

## Additional Features

### Real-time Features
- Live notifications
- Real-time collaboration
- Progress tracking updates

### Analytics
- User engagement tracking
- Course completion rates  
- Popular content analytics

### Integrations
- Email service (SendGrid, Resend)
- File processing (for submissions)
- Video streaming (for course content)

## Troubleshooting

### Common Issues
1. **RLS blocking queries**: Check your policies
2. **CORS errors**: Configure allowed origins
3. **Auth flow issues**: Verify redirect URLs
4. **Performance issues**: Add database indexes

### Debugging Tools
- Supabase logs and monitoring
- Edge function logs
- Database performance insights

## Next Steps

1. Start with basic authentication and user profiles
2. Implement core entities (courses, projects, blogs)
3. Add advanced features (peer reviews, notifications)
4. Optimize performance and add monitoring
5. Deploy and test in production

This backend setup will provide a robust foundation for your Learning Management System with all the features your frontend requires.
