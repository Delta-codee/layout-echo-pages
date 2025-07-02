
# Clerk Authentication Setup

## Overview
This project now uses Clerk for authentication instead of the custom AuthContext. Clerk provides a more robust and secure authentication solution.

## Key Changes Made

1. **Installed Clerk React SDK** - Added @clerk/clerk-react package
2. **Wrapped App in ClerkProvider** - Updated main.tsx to include Clerk provider
3. **Clerk Publishable Key** - Added your provided key to the app

## Next Steps

To complete the Clerk integration, you'll need to:

1. **Update Login Component** - Replace custom login form with Clerk's SignIn component
2. **Update Register Component** - Replace custom register form with Clerk's SignUp component
3. **Update AuthContext** - Replace custom auth logic with Clerk's useAuth hook
4. **Update Protected Routes** - Use Clerk's SignedIn/SignedOut components
5. **Update Profile Components** - Use Clerk's UserButton and user data

## Clerk Dashboard Configuration

Make sure to configure the following in your Clerk dashboard:
- Allowed redirect URLs
- Sign-in/Sign-up settings
- Social login providers (if needed)
- User profile fields

## Environment Variables

The Clerk publishable key is now embedded in the code:
- VITE_CLERK_PUBLISHABLE_KEY=pk_test_YWN0dWFsLW1heWZseS05OC5jbGVyay5hY2NvdW50cy5kZXYk

## Components to Update

The following components need to be updated to use Clerk:
- src/pages/Login.tsx
- src/pages/Register.tsx
- src/contexts/AuthContext.tsx
- src/components/Header.tsx
- src/components/ProfileDropdown.tsx
- src/components/Sidebar.tsx
