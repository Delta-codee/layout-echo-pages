
import { useAuth } from '@/contexts/AuthContext';

export const useRole = () => {
  const { user } = useAuth();
  
  // Define role hierarchy based on email patterns
  const isAdmin = user?.email === '5@example.com' || user?.email === '6@example.com';
  const isInstitute = user?.email?.endsWith('@institute.com') || user?.email?.startsWith('institute_');
  const isTeacher = user?.email?.endsWith('@teacher.com') || user?.email?.startsWith('teacher_');
  const isStudent = !isAdmin && !isInstitute && !isTeacher && !!user;

  const getRole = () => {
    if (isAdmin) return 'admin';
    if (isInstitute) return 'institute';
    if (isTeacher) return 'teacher';
    if (isStudent) return 'student';
    return null;
  };

  return {
    isAdmin,
    isInstitute,
    isTeacher,
    isStudent,
    role: getRole()
  };
};
