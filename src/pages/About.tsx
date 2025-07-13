
import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';

const About = () => {
  const { isSignedIn } = useAuth();
  const { isAdmin } = useRole();

  // Redirect admins to admin dashboard if they try to access about
  if (isSignedIn && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-[#F1F1F1] mb-4">About MasterJi</h1>
        <p className="text-[#A1A1A1] mb-8">
          MasterJi is a comprehensive learning platform designed to help students and teachers 
          connect and grow together. Our mission is to make quality education accessible to everyone.
        </p>
        <a href="/" className="text-[#E3583D] hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default About;
