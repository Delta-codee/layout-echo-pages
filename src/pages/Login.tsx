
import { SignIn } from '@clerk/clerk-react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';

const Login = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const { isAdmin, isInstitute, isTeacher, isStudent } = useRole();

  useEffect(() => {
    if (isSignedIn) {
      if (isAdmin) {
        navigate('/admin/dashboard', { replace: true });
      } else if (isInstitute) {
        navigate('/institute', { replace: true });
      } else if (isTeacher) {
        navigate('/teacher', { replace: true });
      } else if (isStudent) {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [isSignedIn, isAdmin, isInstitute, isTeacher, isStudent, navigate]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center shadow-sm">
              <RiGraduationCapLine className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-[#F1F1F1]">MasterJi</span>
          </div>
          <h1 className="text-2xl font-bold text-[#F1F1F1] mb-2">Welcome Back</h1>
          <p className="text-[#A1A1A1]">Sign in to continue your learning journey</p>
        </div>

        <div className="flex justify-center">
          <SignIn 
            appearance={{
              variables: {
                colorPrimary: '#E3583D',
                colorBackground: '#131313',
                colorInputBackground: '#0B0B0B',
                colorInputText: '#F1F1F1',
                colorText: '#F1F1F1',
                colorTextSecondary: '#A1A1A1',
                colorNeutral: '#2B2B2B',
                borderRadius: '12px',
                fontFamily: 'Inter, system-ui, sans-serif'
              },
              elements: {
                rootBox: "w-full",
                card: "bg-[#131313] border border-[#2B2B2B] shadow-2xl rounded-xl",
                headerTitle: "text-[#F1F1F1] font-semibold",
                headerSubtitle: "text-[#A1A1A1]",
                socialButtonsBlockButton: "bg-[#0B0B0B] border border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#1A1A1A] transition-colors rounded-xl",
                socialButtonsBlockButtonText: "text-[#F1F1F1] font-medium",
                formFieldInput: "bg-[#0B0B0B] border border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] focus:ring-1 focus:ring-[#E3583D] rounded-xl",
                formButtonPrimary: "bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white font-medium rounded-xl transition-all",
                footerActionLink: "text-[#E3583D] hover:text-[#E4593D] font-medium",
                dividerLine: "bg-[#2B2B2B]",
                dividerText: "text-[#A1A1A1] bg-[#131313]",
                formFieldLabel: "text-[#F1F1F1] font-medium",
                identityPreviewText: "text-[#F1F1F1]",
                identityPreviewEditButton: "text-[#E3583D] hover:text-[#E4593D]",
                alternativeMethodsBlockButton: "bg-[#0B0B0B] border border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#1A1A1A] rounded-xl",
                alternativeMethodsBlockButtonText: "text-[#F1F1F1]",
                formFieldSuccessText: "text-green-400",
                formFieldErrorText: "text-red-400",
                alertText: "text-[#F1F1F1]",
                formFieldHintText: "text-[#A1A1A1]"
              }
            }}
            fallbackRedirectUrl="/dashboard-redirect"
            signUpUrl="/register"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
