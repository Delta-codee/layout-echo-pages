
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { UserButton, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Header = () => {
  const { isAuthenticated } = useAuth();
  const { isSignedIn } = useClerkAuth();

  return (
    <header className="border-b border-[#2B2B2B] bg-[#0B0B0B]/95 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E3583D] rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-[#F1F1F1]">MasterJi</span>
        </Link>
        
        <div className="flex items-center gap-3">
          {/* Show My Classroom button only if user is signed in */}
          {isSignedIn && (
            <Link to="/my-classroom">
              <Button variant="ghost" className="text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313] font-medium px-4">
                <BookOpen className="w-4 h-4 mr-2" />
                My Classroom
              </Button>
            </Link>
          )}
          
          {!isAuthenticated ? (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" className="text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313] font-medium px-6">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-[#E4593D] hover:bg-[#E3583D] text-white font-medium px-6 rounded-xl">
                  Signup
                </Button>
              </SignUpButton>
            </>
          ) : (
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 rounded-full",
                  userButtonPopoverCard: "bg-[#131313] border border-[#2B2B2B] shadow-xl",
                  userButtonPopoverActionButton: "text-[#F1F1F1] hover:bg-[#2B2B2B]",
                  userButtonPopoverActionButtonText: "text-[#F1F1F1]",
                  userButtonPopoverFooter: "hidden"
                }
              }}
              userProfileMode="modal"
              afterSignOutUrl="/"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
