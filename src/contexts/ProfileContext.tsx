
import React, { createContext, useContext, ReactNode } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface ProfileData {
  fullName: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}

interface ProfileContextType {
  profileData: ProfileData | null;
  isLoading: boolean;
  error: Error | null;
  updateProfile: (data: ProfileData) => Promise<void>;
  refetchProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to fetch profile data
  const { data: profileData, isLoading, error, refetch } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      // In a real app, this would be an API call
      // For now, we'll use localStorage as a simple persistence layer
      const stored = localStorage.getItem(`profile_${user?.id}`);
      if (stored) {
        return JSON.parse(stored) as ProfileData;
      }
      
      // Default profile data based on user info
      return {
        fullName: user?.name || '',
        username: user?.name?.toLowerCase().replace(/\s+/g, '') || '',
        email: user?.email || '',
        bio: user?.name ? `Hi, I'm ${user.name}! I'm excited to start my learning journey with MasterJi.` : '',
        location: '',
        socialLinks: {
          github: '',
          linkedin: '',
          instagram: '',
          twitter: ''
        }
      } as ProfileData;
    },
    enabled: !!user?.id,
  });

  // Mutation to update profile
  const updateProfileMutation = useMutation({
    mutationFn: async (data: ProfileData) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be an API call to update the profile
      // For now, we'll store in localStorage
      localStorage.setItem(`profile_${user?.id}`, JSON.stringify(data));
      
      return data;
    },
    onSuccess: (data) => {
      // Update the cache immediately
      queryClient.setQueryData(['profile', user?.id], data);
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    },
    onError: () => {
      toast({
        title: "Update Failed",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateProfile = async (data: ProfileData) => {
    await updateProfileMutation.mutateAsync(data);
  };

  const refetchProfile = () => {
    refetch();
  };

  return (
    <ProfileContext.Provider value={{
      profileData,
      isLoading,
      error,
      updateProfile,
      refetchProfile
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
