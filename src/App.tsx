
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Courses from '@/pages/Courses';
import Pricing from '@/pages/Pricing';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import EditProfile from '@/pages/EditProfile';
import AdminLanding from '@/pages/admin/AdminLanding';
import AdminDashboard from '@/pages/AdminDashboard';
import AdminEditProfile from '@/pages/admin/AdminEditProfile';
import SuperAdminDashboard from '@/pages/SuperAdminDashboard';

// Protected Route Component
const ProtectedRoute = ({ children, requireRole }: { children: React.ReactNode, requireRole?: string }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
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

  if (requireRole) {
    const userEmail = user?.primaryEmailAddress?.emailAddress || '';
    const isAdmin = userEmail.endsWith('@example.com');
    
    if (requireRole === 'admin' && !isAdmin) {
      return <Navigate to="/dashboard" replace />;
    }
    
    if (requireRole === 'super-admin' && !isAdmin) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

// Smart Dashboard Redirect Component
const DashboardRedirect = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!isLoaded || hasRedirected) return;

    if (!isSignedIn) {
      navigate('/login', { replace: true });
      setHasRedirected(true);
      return;
    }

    if (user?.primaryEmailAddress?.emailAddress) {
      const email = user.primaryEmailAddress.emailAddress;
      
      if (email.endsWith('@example.com')) {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
      
      setHasRedirected(true);
    }
  }, [isSignedIn, isLoaded, user, navigate, hasRedirected]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="text-[#F1F1F1]">Redirecting...</div>
    </div>
  );
};

// Auto-redirect wrapper for authenticated users
const AuthenticatedRedirect = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    if (!isLoaded || hasChecked) return;

    // Only redirect if we're on the home page and user is signed in
    if (isSignedIn && user?.primaryEmailAddress?.emailAddress && location.pathname === '/') {
      const email = user.primaryEmailAddress.emailAddress;
      
      if (email.endsWith('@example.com')) {
        navigate('/admin/dashboard', { replace: true });
        return;
      }
    }
    
    setHasChecked(true);
  }, [isSignedIn, isLoaded, user, navigate, location.pathname, hasChecked]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-[#F1F1F1]">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            <AuthenticatedRedirect>
              <Home />
            </AuthenticatedRedirect>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/edit-profile" 
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } 
        />

        {/* Admin Routes */}
        <Route 
          path="/admin/landing" 
          element={
            <ProtectedRoute requireRole="admin">
              <AdminLanding />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requireRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/edit-profile" 
          element={
            <ProtectedRoute requireRole="admin">
              <AdminEditProfile />
            </ProtectedRoute>
          } 
        />

        {/* Super Admin Routes */}
        <Route 
          path="/super-admin/dashboard" 
          element={
            <ProtectedRoute requireRole="super-admin">
              <SuperAdminDashboard />
            </ProtectedRoute>
          } 
        />

        {/* Dashboard Redirect */}
        <Route path="/dashboard-redirect" element={<DashboardRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
