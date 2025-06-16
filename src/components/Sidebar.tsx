
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
    <div className="w-64 h-screen bg-[#1a1a1a] border-r border-gray-700 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FF6B47] rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">MasterJi</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-[#FF6B47] text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF6B47] rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">N</span>
          </div>
          <div>
            <div className="text-white font-medium">n8n one</div>
            <div className="text-gray-400 text-sm">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
