
import { SignIn } from '@clerk/clerk-react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react';

const Login = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || hasRedirected) return;

    // Wait a bit to ensure user data is fully loaded
    const timer = setTimeout(() => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const email = user.primaryEmailAddress.emailAddress;
        
        if (email.endsWith('@example.com')) {
          navigate('/admin/dashboard', { replace: true });
        } else {
          navigate('/dashboard', { replace: true });
        }
        
        setHasRedirected(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isSignedIn, isLoaded, user, navigate, hasRedirected]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-[#F1F1F1]">Loading...</div>
      </div>
    );
  }

  if (isSignedIn && hasRedirected) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-[#F1F1F1]">Redirecting...</div>
      </div>
    );
  }

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
          <div className="mt-4 p-4 bg-[#131313] border border-[#2B2B2B] rounded-lg">
            <p className="text-sm text-[#A1A1A1] mb-2">Role-based access:</p>
            <p className="text-xs text-[#A1A1A1]">• Regular email: Student dashboard</p>
            <p className="text-xs text-[#A1A1A1]">• @example.com: Admin dashboard</p>
          </div>
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
