
import { SignUp } from '@clerk/clerk-react';
import { GraduationCap } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center shadow-sm">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-[#F1F1F1]">MasterJi</span>
          </div>
          <h1 className="text-2xl font-bold text-[#F1F1F1] mb-2">Create Account</h1>
          <p className="text-[#A1A1A1]">Join the learning community today</p>
        </div>

        <div className="flex justify-center">
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-[#131313] border-[#2B2B2B] shadow-xl",
                headerTitle: "text-[#F1F1F1]",
                headerSubtitle: "text-[#A1A1A1]",
                socialButtonsBlockButton: "bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#1A1A1A]",
                formFieldInput: "bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D]",
                formButtonPrimary: "bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90",
                footerActionLink: "text-[#E3583D] hover:text-[#E4593D]",
                dividerLine: "bg-[#2B2B2B]",
                dividerText: "text-[#A1A1A1]",
                formFieldLabel: "text-[#F1F1F1]",
                identityPreviewText: "text-[#F1F1F1]",
                identityPreviewEditButton: "text-[#E3583D]"
              }
            }}
            fallbackRedirectUrl="/dashboard"
            signInUrl="/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
