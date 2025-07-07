
# Admin Login Credentials

## Demo Admin Accounts

Use these credentials to access the Admin Dashboard:

### Admin Account 1
- **Email:** `5@example.com`
- **Password:** Use any password (Clerk handles authentication)

### Admin Account 2
- **Email:** `6@example.com`
- **Password:** Use any password (Clerk handles authentication)

## Access Notes

- These email addresses are hardcoded in the role detection system
- Any user with these email addresses will be automatically redirected to the Admin Dashboard
- All other email addresses will be treated as students and redirected to the Student Dashboard
- The role detection is handled in `src/hooks/useRole.ts`

## Authentication Flow

1. Navigate to `/login`
2. Use one of the admin email addresses above
3. Enter any password (Clerk manages the actual authentication)
4. You'll be automatically redirected to `/admin` upon successful login
5. Students with other email addresses are redirected to `/dashboard`

## Role-Based Access

- **Admin Users:** Can access `/admin` route with full admin dashboard
- **Student Users:** Can access `/dashboard`, `/blogs`, `/peer-reviews`, etc.
- **Protected Routes:** Configured in `src/components/ProtectedRoute.tsx`
