
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Zap, Bell, User, LogOut, Shield } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const DashboardHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isAdmin = location.pathname.includes('/admin');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-white">Silva</h1>
            </Link>
            {isAdmin && (
              <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30 hidden lg:flex">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
            )}
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className={`text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md ${
                location.pathname === '/dashboard' ? 'bg-slate-800 text-white' : ''
              }`}
            >
              Dashboard
            </Link>
            {user?.isAdmin && (
              <Link 
                to="/admin" 
                className={`text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md ${
                  location.pathname === '/admin' ? 'bg-slate-800 text-white' : ''
                }`}
              >
                Admin
              </Link>
            )}
            <Button variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-800">
              <Bell className="w-4 h-4" />
            </Button>
            <div className="flex items-center space-x-2 text-slate-300">
              <User className="w-4 h-4" />
              <span className="hidden xl:block">{user?.name}</span>
            </div>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="text-slate-300 hover:bg-slate-800">
              <LogOut className="w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-slate-300">
              <User className="w-4 h-4" />
            </Button>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="text-slate-300">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="lg:hidden mt-4 flex space-x-4 overflow-x-auto">
          <Link 
            to="/dashboard" 
            className={`text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md whitespace-nowrap ${
              location.pathname === '/dashboard' ? 'bg-slate-800 text-white' : ''
            }`}
          >
            Dashboard
          </Link>
          {user?.isAdmin && (
            <Link 
              to="/admin" 
              className={`text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md whitespace-nowrap ${
                location.pathname === '/admin' ? 'bg-slate-800 text-white' : ''
              }`}
            >
              Admin
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
