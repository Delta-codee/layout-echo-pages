
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">></span>
          <span className="text-2xl font-bold text-gray-900">MasterJi</span>
        </Link>
        
        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium px-6">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 rounded-full">
                  Signup
                </Button>
              </Link>
            </>
          ) : (
            <Link to="/dashboard">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 rounded-full">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
