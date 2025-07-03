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

import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="text-[#F1F1F1]">Loading...</div>
    </div>;
  }
  
  if (!isSignedIn) {
    return <Navigate to="/landing" replace />;
  }
  
  return <>{children}</>;
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
                  {/* Default route - Landing page */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/landing" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Protected routes */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/student-dashboard" element={
                    <ProtectedRoute>
                      <StudentDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/my-classroom" element={
                    <ProtectedRoute>
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
                    <ProtectedRoute>
                      <Courses />
                    </ProtectedRoute>
                  } />
                  <Route path="/projects" element={
                    <ProtectedRoute>
                      <Projects />
                    </ProtectedRoute>
                  } />
                  <Route path="/blogs" element={
                    <ProtectedRoute>
                      <Blogs />
                    </ProtectedRoute>
                  } />
                  <Route path="/community" element={
                    <ProtectedRoute>
                      <Community />
                    </ProtectedRoute>
                  } />
                  <Route path="/peer-reviews" element={
                    <ProtectedRoute>
                      <PeerReviews />
                    </ProtectedRoute>
                  } />
                  <Route path="/evaluations" element={
                    <ProtectedRoute>
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
