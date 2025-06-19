
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Folder, FileText, BarChart3, GraduationCap } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Peer Reviews', path: '/peer-reviews' },
    { icon: Folder, label: 'Projects', path: '/projects' },
    { icon: FileText, label: 'Blogs', path: '/blogs' },
    { icon: BarChart3, label: 'Evaluations', path: '/evaluations' }
  ];

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-[#1a1a1a] to-[#262626] border-r border-gray-700/50 flex flex-col shadow-2xl">
      <div className="p-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B47]/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MasterJi</span>
        </div>
      </div>
      
      <nav className="flex-1 px-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 mb-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] text-white shadow-lg shadow-[#FF6B47]/25' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Icon className={`w-6 h-6 transition-transform duration-200 ${!isActive && 'group-hover:scale-110'}`} />
              <span className="font-medium text-base">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-6 border-t border-gray-700/50">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B47]/20">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <div className="text-white font-semibold text-base">n8n one</div>
            <div className="text-gray-400 text-sm">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
