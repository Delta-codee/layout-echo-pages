
# Authentication Migration Guide

## Current State
The project currently uses a custom AuthContext with mock authentication. We need to migrate to Clerk.

## Migration Steps

### 1. Update AuthContext to use Clerk
Replace the custom AuthContext with Clerk's authentication hooks.

### 2. Update Login Page
Replace the custom login form with Clerk's SignIn component or use Clerk's useSignIn hook.

### 3. Update Register Page
Replace the custom register form with Clerk's SignUp component or use Clerk's useSignUp hook.

### 4. Update Protected Components
Use Clerk's SignedIn and SignedOut components to protect routes and show/hide content.

### 5. Update User Profile
Use Clerk's useUser hook to get user information and UserButton for profile management.

## Clerk Hooks Available
- `useAuth()` - Authentication state and methods
- `useUser()` - Current user data
- `useSignIn()` - Sign in methods
- `useSignUp()` - Sign up methods
- `useSession()` - Session information

## Clerk Components Available
- `<SignIn />` - Complete sign-in form
- `<SignUp />` - Complete sign-up form
- `<UserButton />` - User profile button
- `<SignedIn>` - Wrapper for authenticated content
- `<SignedOut>` - Wrapper for unauthenticated content
- `<SignInButton />` - Sign in button
- `<SignUpButton />` - Sign up button
