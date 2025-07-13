
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
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
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requireRole && user?.publicMetadata?.role !== requireRole) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  return children;
};

// Dashboard Redirect Component
const DashboardRedirect = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      const role = user?.publicMetadata?.role;
      switch (role) {
        case 'admin':
          window.location.href = '/admin/dashboard';
          break;
        case 'super-admin':
          window.location.href = '/super-admin/dashboard';
          break;
        default:
          window.location.href = '/dashboard';
          break;
      }
    } else {
      window.location.href = '/login';
    }
  }, [isSignedIn, user]);

  return <div>Redirecting...</div>;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
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
  );
}

export default App;
