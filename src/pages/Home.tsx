
import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';

const Home = () => {
  const { isSignedIn } = useAuth();
  const { isAdmin } = useRole();

  // Redirect admins to admin dashboard if they try to access home
  if (isSignedIn && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#F1F1F1] mb-4">Welcome to MasterJi</h1>
        <p className="text-[#A1A1A1] mb-8">Your learning journey starts here</p>
        <div className="space-x-4">
          <a href="/login" className="bg-[#E3583D] text-white px-6 py-2 rounded-lg hover:bg-[#E4593D]">
            Login
          </a>
          <a href="/register" className="border border-[#E3583D] text-[#E3583D] px-6 py-2 rounded-lg hover:bg-[#E3583D] hover:text-white">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
