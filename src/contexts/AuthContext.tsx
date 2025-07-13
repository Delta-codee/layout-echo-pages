
import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth as useClerkAuth, useUser } from '@clerk/clerk-react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'admin' | 'teacher' | 'institute';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoaded: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isSignedIn, signOut, isLoaded: clerkIsLoaded } = useClerkAuth();
  const { user: clerkUser, isLoaded: userIsLoaded } = useUser();

  const isLoaded = clerkIsLoaded && userIsLoaded;

  // Convert Clerk user to our User interface with proper role detection
  const user: User | null = clerkUser ? {
    id: clerkUser.id,
    name: clerkUser.fullName || clerkUser.firstName || clerkUser.username || 'User',
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    avatar: clerkUser.imageUrl,
    role: clerkUser.primaryEmailAddress?.emailAddress?.endsWith('@example.com') ? 'admin' : 'student'
  } : null;

  // These functions are kept for compatibility but won't be used with Clerk
  const login = async (email: string, password: string) => {
    // Redirect to Clerk sign-in instead
    window.location.href = '/login';
  };

  const register = async (name: string, email: string, password: string) => {
    // Redirect to Clerk sign-up instead
    window.location.href = '/register';
  };

  const logout = () => {
    signOut();
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: isSignedIn || false,
      isLoaded
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
