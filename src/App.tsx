
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProfileProvider } from './contexts/ProfileContext';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Unauthorized from './pages/Unauthorized';
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
import AdminDashboard from './pages/admin/AdminDashboard';
import AddStudent from './pages/admin/AddStudent';
import AddTeacher from './pages/admin/AddTeacher';
import AddCourse from './pages/admin/AddCourse';
import Reviews from './pages/admin/Reviews';
import Assignments from './pages/admin/Assignments';

import ProtectedRoute from './components/ProtectedRoute';
import { useRole } from './hooks/useRole';
import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient();

// Role-based redirect component
const RoleBasedRedirect = () => {
  const { isAdmin, isInstitute, isTeacher, isStudent } = useRole();
  
  if (isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
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
                  <Route path="/" element={<RoleBasedRedirect />} />
                  <Route path="/landing" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  <Route path="/unauthorized" element={<Unauthorized />} />
                  
                  {/* Admin routes */}
                  <Route path="/admin/dashboard" element={
                    <ProtectedRoute requireAdmin>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/students" element={
                    <ProtectedRoute requireAdmin>
                      <AddStudent />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/teachers" element={
                    <ProtectedRoute requireAdmin>
                      <AddTeacher />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/add-course" element={
                    <ProtectedRoute requireAdmin>
                      <AddCourse />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/reviews" element={
                    <ProtectedRoute requireAdmin>
                      <Reviews />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/assignments" element={
                    <ProtectedRoute requireAdmin>
                      <Assignments />
                    </ProtectedRoute>
                  } />
                  
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
