
import { useAuth } from '@/contexts/AuthContext';

export const useRole = () => {
  const { user } = useAuth();
  
  // Define role hierarchy - only specific emails can be admin
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

  // Admin-only permissions
  const canManageCourses = isAdmin;
  const canManageTeachers = isAdmin;
  const canManageCohorts = isAdmin;
  const canManageStudents = isAdmin;
  const canViewAnalytics = isAdmin;
  const canViewAllData = isAdmin;

  // Teacher permissions (read-only)
  const canViewAssignedCourses = isTeacher || isAdmin;
  const canViewAssignedStudents = isTeacher || isAdmin;

  // Student permissions (read-only, own data)
  const canViewOwnProgress = isStudent || isAdmin;

  return {
    isAdmin,
    isInstitute,
    isTeacher,
    isStudent,
    role: getRole(),
    permissions: {
      canManageCourses,
      canManageTeachers,
      canManageCohorts,
      canManageStudents,
      canViewAnalytics,
      canViewAllData,
      canViewAssignedCourses,
      canViewAssignedStudents,
      canViewOwnProgress
    }
  };
};
