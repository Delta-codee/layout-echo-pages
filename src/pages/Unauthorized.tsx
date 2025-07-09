
import { RiGraduationCapLine, RiShieldLine } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center shadow-sm">
            <RiGraduationCapLine className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-[#F1F1F1]">MasterJi</span>
        </div>
        
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <RiShieldLine className="w-10 h-10 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-[#F1F1F1] mb-2">Access Denied</h1>
          <p className="text-[#A1A1A1]">
            You don't have permission to access this area. Only administrators can access the admin panel.
          </p>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/login')}
            className="w-full bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white"
          >
            Go to User Login
          </Button>
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="w-full border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
