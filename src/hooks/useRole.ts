
import { useUser } from '@clerk/clerk-react';

export const useRole = () => {
  const { user, isLoaded } = useUser();
  
  // Wait for user data to load
  if (!isLoaded || !user) {
    return {
      isAdmin: false,
      isInstitute: false,
      isTeacher: false,
      isStudent: false,
      role: null,
      isLoaded,
      permissions: {
        canManageCourses: false,
        canManageTeachers: false,
        canManageCohorts: false,
        canManageStudents: false,
        canViewAnalytics: false,
        canViewAllData: false,
        canViewAssignedCourses: false,
        canViewAssignedStudents: false,
        canViewOwnProgress: false
      }
    };
  }

  const email = user.primaryEmailAddress?.emailAddress || '';
  
  // Define role hierarchy based on email patterns
  const isAdmin = email.endsWith('@example.com');
  const isInstitute = email.endsWith('@institute.com') || email.startsWith('institute_');
  const isTeacher = email.endsWith('@teacher.com') || email.startsWith('teacher_');
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
    isLoaded,
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
