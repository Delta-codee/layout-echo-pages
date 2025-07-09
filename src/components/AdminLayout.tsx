
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, GraduationCap, BookOpen, Star, FileText, Plus, UserPlus, BookPlus } from 'lucide-react';
import { RiGraduationCapLine } from 'react-icons/ri';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();

  const sidebarItems = [
    { 
      icon: Home, 
      label: 'Dashboard', 
      path: '/admin/dashboard',
      description: 'Admin overview'
    },
    { 
      icon: UserPlus, 
      label: 'Add Student', 
      path: '/admin/students',
      description: 'Add/manage students'
    },
    { 
      icon: Users, 
      label: 'Add Teacher', 
      path: '/admin/teachers',
      description: 'Add/manage teachers'
    },
    { 
      icon: BookPlus, 
      label: 'Add Course', 
      path: '/admin/add-course',
      description: 'Add/manage courses'
    },
    { 
      icon: Star, 
      label: 'Reviews', 
      path: '/admin/reviews',
      description: 'Teacher performance & reviews'
    },
    { 
      icon: FileText, 
      label: 'Assignments', 
      path: '/admin/assignments',
      description: 'Monitor assignments & marks'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex">
      {/* Sidebar */}
      <div className="w-72 bg-[#131313] border-r border-[#2B2B2B] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#2B2B2B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center">
              <RiGraduationCapLine className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#F1F1F1]">MasterJi</h1>
              <p className="text-xs text-[#A1A1A1]">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white shadow-sm' 
                      : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#1A1A1A]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="flex-1">
                    <span className="font-medium block">{item.label}</span>
                    <span className={`text-xs ${isActive ? 'text-white/70' : 'text-[#666]'}`}>
                      {item.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#2B2B2B]">
          <div className="text-center text-xs text-[#666]">
            Admin Control Panel v1.0
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#131313] border-b border-[#2B2B2B] px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#F1F1F1]">Admin Dashboard</h2>
              <p className="text-[#A1A1A1]">Manage your educational platform</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
