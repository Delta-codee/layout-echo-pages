
import { Link } from 'react-router-dom';
import { RiGraduationCapLine } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings } from 'lucide-react';

const AdminLanding = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center shadow-lg">
            <RiGraduationCapLine className="w-8 h-8 text-white" />
          </div>
          <span className="text-4xl font-bold text-[#F1F1F1]">MasterJi</span>
        </div>
        
        <div className="bg-[#131313] border border-[#2B2B2B] rounded-2xl p-8 shadow-xl">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center mx-auto mb-6">
            <Settings className="w-6 h-6 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-[#F1F1F1] mb-4">Welcome Admin</h1>
          <p className="text-[#A1A1A1] mb-8 leading-relaxed">
            You have successfully logged in as an administrator. Access your admin panel to manage the platform.
          </p>
          
          <Link to="/admin/dashboard">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go to Admin Panel
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
        
        <p className="text-[#666] text-sm mt-6">
          Secure administrative access to MasterJi platform
        </p>
      </div>
    </div>
  );
};

export default AdminLanding;
