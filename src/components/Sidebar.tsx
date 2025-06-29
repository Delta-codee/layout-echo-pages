
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Folder, FileText, BarChart3, GraduationCap, User } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Sidebar = () => {
  const location = useLocation();
  const { currentTheme } = useTheme();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Folder, label: 'Projects', path: '/projects' },
    { icon: Users, label: 'Peer Reviews', path: '/peer-reviews' },
    { icon: FileText, label: 'Blogs', path: '/blogs' },
    { icon: BarChart3, label: 'Evaluations', path: '/evaluations' }
  ];

  return (
    <div className={`w-72 h-screen ${currentTheme.bg} border-r border-border/20 flex flex-col shadow-lg sticky top-0`} style={{ backdropFilter: 'blur(12px)' }}>
      <div className="p-8">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">MasterJi</span>
        </Link>
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
                  ? 'bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] text-white shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <Icon className={`w-6 h-6 transition-transform duration-200 ${!isActive && 'group-hover:scale-110'}`} />
              <span className="font-medium text-base">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-6 border-t border-border/20">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/20">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <div className="text-foreground font-semibold text-base">n8n one</div>
            <div className="text-muted-foreground text-sm">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
