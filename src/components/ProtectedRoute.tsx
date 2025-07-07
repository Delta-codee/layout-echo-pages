
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireStudent?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  requireAdmin = false, 
  requireStudent = false 
}: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { isAdmin, isStudent } = useRole();
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

  // Admin route protection
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  // Student route protection
  if (requireStudent && !isStudent) {
    return <Navigate to="/admin" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
