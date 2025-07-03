
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { signOut } = useClerkAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get user initials for fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#131313] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E3583D] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#E3583D] to-[#E4593D]">
          {user?.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-semibold text-sm">
              {user?.name ? getInitials(user.name) : 'U'}
            </span>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-[#A1A1A1] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 w-48 bg-[#131313] border border-[#2B2B2B] rounded-xl shadow-xl py-2 z-[100] animate-fade-in">
          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#131313] border-r border-b border-[#2B2B2B] transform rotate-45"></div>
          
          <Link
            to="/edit-profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-[#F1F1F1] hover:bg-[#2B2B2B] transition-colors duration-200"
          >
            <User className="w-4 h-4 text-[#E3583D]" />
            <span>Manage Account</span>
          </Link>
          
          <div className="border-t border-[#2B2B2B] my-1"></div>
          
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 text-[#F1F1F1] hover:bg-[#2B2B2B] transition-colors duration-200 w-full text-left"
          >
            <LogOut className="w-4 h-4 text-[#E3583D]" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
