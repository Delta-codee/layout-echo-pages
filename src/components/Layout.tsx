
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-[#0B0B0B] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-[#0B0B0B]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
