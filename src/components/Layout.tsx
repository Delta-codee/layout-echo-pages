
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-full bg-gradient-to-br from-[#0f0f0f]/50 to-[#1a1a1a]/50 backdrop-blur-sm">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
