
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProfileProvider } from './contexts/ProfileContext';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Community from './pages/Community';
import PeerReviews from './pages/PeerReviews';
import Evaluations from './pages/Evaluations';
import ThemeSettings from './pages/ThemeSettings';
import NotFound from './pages/NotFound';
import StudentDashboard from './pages/StudentDashboard';
import MyClassroom from './pages/MyClassroom';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import InstituteDashboard from './pages/InstituteDashboard';
import TeacherDashboard from './pages/TeacherDashboard';

import ProtectedRoute from './components/ProtectedRoute';
import { useRole } from './hooks/useRole';
import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient();

// Role-based redirect component
const RoleBasedRedirect = () => {
  const { isAdmin, isInstitute, isTeacher, isStudent } = useRole();
  
  if (isAdmin) {
    return <Navigate to="/super-admin" replace />;
  }
  
  if (isInstitute) {
    return <Navigate to="/institute" replace />;
  }
  
  if (isTeacher) {
    return <Navigate to="/teacher" replace />;
  }
  
  if (isStudent) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <Navigate to="/landing" replace />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <ProfileProvider>
            <Router>
              <div className="min-h-screen bg-[#0B0B0B]">
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/landing" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Role-based dashboard redirect */}
                  <Route path="/dashboard-redirect" element={
                    <ProtectedRoute>
                      <RoleBasedRedirect />
                    </ProtectedRoute>
                  } />
                  
                  {/* Super Admin routes */}
                  <Route path="/super-admin" element={
                    <ProtectedRoute requireAdmin>
                      <SuperAdminDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin" element={
                    <ProtectedRoute requireAdmin>
                      <SuperAdminDashboard />
                    </ProtectedRoute>
                  } />
                  
                  {/* Institute routes */}
                  <Route path="/institute" element={
                    <ProtectedRoute requireInstitute>
                      <InstituteDashboard />
                    </ProtectedRoute>
                  } />
                  
                  {/* Teacher routes */}
                  <Route path="/teacher" element={
                    <ProtectedRoute requireTeacher>
                      <TeacherDashboard />
                    </ProtectedRoute>
                  } />
                  
                  {/* Student routes */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute requireStudent>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/student-dashboard" element={
                    <ProtectedRoute requireStudent>
                      <StudentDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/my-classroom" element={
                    <ProtectedRoute requireStudent>
                      <MyClassroom />
                    </ProtectedRoute>
                  } />
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } />
                  <Route path="/edit-profile" element={
                    <ProtectedRoute>
                      <EditProfile />
                    </ProtectedRoute>
                  } />
                  <Route path="/courses" element={
                    <ProtectedRoute requireStudent>
                      <Courses />
                    </ProtectedRoute>
                  } />
                  <Route path="/projects" element={
                    <ProtectedRoute requireStudent>
                      <Projects />
                    </ProtectedRoute>
                  } />
                  <Route path="/blogs" element={
                    <ProtectedRoute requireStudent>
                      <Blogs />
                    </ProtectedRoute>
                  } />
                  <Route path="/community" element={
                    <ProtectedRoute requireStudent>
                      <Community />
                    </ProtectedRoute>
                  } />
                  <Route path="/peer-reviews" element={
                    <ProtectedRoute requireStudent>
                      <PeerReviews />
                    </ProtectedRoute>
                  } />
                  <Route path="/evaluations" element={
                    <ProtectedRoute requireStudent>
                      <Evaluations />
                    </ProtectedRoute>
                  } />
                  <Route path="/theme-settings" element={
                    <ProtectedRoute>
                      <ThemeSettings />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
                <Toaster />
              </div>
            </Router>
          </ProfileProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
