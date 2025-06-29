
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Folder, FileText, BarChart3, GraduationCap } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Folder, label: 'Projects', path: '/projects' },
    { icon: Users, label: 'Peer Reviews', path: '/peer-reviews' },
    { icon: FileText, label: 'Blogs', path: '/blogs' },
    { icon: BarChart3, label: 'Evaluations', path: '/evaluations' }
  ];

  return (
    <div className="w-72 h-screen bg-[#0B0B0B] border-r border-[#2B2B2B] flex flex-col">
      <div className="p-6 border-b border-[#2B2B2B]">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E3583D] rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-[#F1F1F1]">MasterJi</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-[#E3583D] text-white shadow-sm' 
                  : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-[#2B2B2B]">
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
