import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Server, LogOut } from 'lucide-react';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Server className="h-6 w-6 text-primary" />
            <span>Xique-Xique Cloud</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Início
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Sobre
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/dashboard') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/backup"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/backup') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Backup
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <Button asChild variant="default">
                <Link to="/login">Login</Link>
              </Button>
            ) : (
              <Button onClick={logout} variant="outline" className="gap-2">
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;