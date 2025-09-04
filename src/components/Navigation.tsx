import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Settings, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo1 from "@/assets/logos/logo1.png";

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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative w-12 h-10 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300">
              <img src={logo1} alt="Deepkentom Logo" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Deepkentom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:scale-105 ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50 shadow-md"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Link to="/projects">
              <Button
                size="sm"
                className="bg-gradient-to-br from-blue-600 to-cyan-500 hover:scale-105 text-white transition-all duration-300 shadow-lg hover:shadow-cyan-300/30"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Projects
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-blue-600" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-lg rounded-xl border border-blue-500/30 shadow-2xl animate-fade-in">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-6 py-4 mx-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-foreground hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="px-4 pt-2 pb-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white transition-all duration-300 shadow-lg hover:shadow-cyan-300/30"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
