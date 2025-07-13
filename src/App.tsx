
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-[#F1F1F1]">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
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

// Main App Component with Role-Based Rendering
const AppContent = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-[#F1F1F1]">Loading...</div>
      </div>
    );
  }

  // Check if user is admin
  const userEmail = user?.primaryEmailAddress?.emailAddress || '';
  const isAdmin = userEmail.endsWith('@example.com');

  // If user is signed in and is admin, show only admin routes
  if (isSignedIn && isAdmin) {
    return (
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/landing" element={<AdminLanding />} />
        <Route path="/admin/edit-profile" element={<AdminEditProfile />} />
        <Route path="/super-admin/dashboard" element={<SuperAdminDashboard />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    );
  }

  // For regular users and non-signed-in users, show normal website
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes for Regular Users */}
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

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
