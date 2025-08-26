import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Settings, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Services", path: "/services", icon: Settings },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-primary group-hover:scale-110 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Deepkentom
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10 shadow-md"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg glow-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

          {/* Enhanced Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-6 space-y-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg mt-4 border border-border/50 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 ${
                    isActive(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 w-full mx-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Navigation;