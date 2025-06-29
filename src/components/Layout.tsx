
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`flex h-screen ${currentTheme.bg} transition-all duration-500 overflow-hidden`}>
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-full bg-black/10 backdrop-blur-sm">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
