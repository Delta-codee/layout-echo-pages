
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Palette, LogOut, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentTheme } = useTheme();
  const { logout } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#131313] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E3583D] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">U</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[#A1A1A1] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-[#131313] border border-[#2B2B2B] rounded-xl shadow-xl py-2 z-[100] animate-fade-in">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 right-4 w-4 h-4 bg-[#131313] border-l border-t border-[#2B2B2B] transform rotate-45"></div>
          
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-[#F1F1F1] hover:bg-[#2B2B2B] transition-colors"
          >
            <User className="w-4 h-4 text-[#E3583D]" />
            <span>Edit Profile</span>
          </Link>
          
          <Link
            to="/theme-settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-[#F1F1F1] hover:bg-[#2B2B2B] transition-colors"
          >
            <Palette className="w-4 h-4 text-[#E3583D]" />
            <span>Change Theme</span>
          </Link>
          
          <div className="border-t border-[#2B2B2B] my-1"></div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-[#F1F1F1] hover:bg-[#2B2B2B] transition-colors w-full text-left"
          >
            <LogOut className="w-4 h-4 text-[#E3583D]" />
            <span>Log Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
