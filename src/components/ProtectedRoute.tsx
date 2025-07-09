
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireInstitute?: boolean;
  requireTeacher?: boolean;
  requireStudent?: boolean;
  requirePermission?: string;
}

const ProtectedRoute = ({ 
  children, 
  requireAdmin = false,
  requireInstitute = false,
  requireTeacher = false,
  requireStudent = false,
  requirePermission
}: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { isAdmin, isInstitute, isTeacher, isStudent, permissions } = useRole();
  const location = useLocation();
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-[#F1F1F1]">Loading...</div>
      </div>
    );
  }
  
  if (!isSignedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check specific permissions if required
  if (requirePermission && !permissions[requirePermission as keyof typeof permissions]) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  // Role-based route protection
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  if (requireInstitute && !isInstitute) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  if (requireTeacher && !isTeacher) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  if (requireStudent && !isStudent) {
    return <Navigate to="/dashboard-redirect" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
