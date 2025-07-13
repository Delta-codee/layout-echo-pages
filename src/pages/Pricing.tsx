
import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';

const Pricing = () => {
  const { isSignedIn } = useAuth();
  const { isAdmin } = useRole();

  // Redirect admins to admin dashboard if they try to access pricing
  if (isSignedIn && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-[#F1F1F1] mb-4">Pricing Plans</h1>
        <p className="text-[#A1A1A1] mb-8">
          Choose the plan that works best for you
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#131313] border border-[#2B2B2B] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">Free</h3>
            <p className="text-[#A1A1A1] mb-4">Perfect for getting started</p>
            <p className="text-2xl font-bold text-[#E3583D]">$0/month</p>
          </div>
          <div className="bg-[#131313] border border-[#2B2B2B] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">Pro</h3>
            <p className="text-[#A1A1A1] mb-4">For serious learners</p>
            <p className="text-2xl font-bold text-[#E3583D]">$29/month</p>
          </div>
        </div>
        <a href="/" className="text-[#E3583D] hover:underline mt-8 inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Pricing;
