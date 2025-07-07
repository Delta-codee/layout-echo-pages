
import { useAuth } from '@/contexts/AuthContext';

export const useRole = () => {
  const { user } = useAuth();
  
  const isAdmin = user?.email === '5@example.com' || user?.email === '6@example.com';
  const isStudent = !isAdmin && !!user;

  return {
    isAdmin,
    isStudent,
    role: isAdmin ? 'admin' : isStudent ? 'student' : null
  };
};
