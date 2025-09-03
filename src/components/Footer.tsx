import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-muted/20 to-accent/5 border-t border-border/40">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-800 via-blue-600 to-cyan-500 rounded-xl flex items-center justify-center glow-primary">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Deepkentom
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Transforming businesses through innovative technology solutions. We create digital experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { Icon: Github, href: "#", color: "hover:text-gray-600" },
                { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
              ].map(({ Icon, href, color }, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`hover-glow transition-all duration-300 ${color}`}
                  asChild
                >
                  <Link to={href}>
                    <Icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 animate-fade-in animate-stagger-1">
            <h3 className="font-semibold text-lg text-foreground">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fade-in animate-stagger-2">
            <h3 className="font-semibold text-lg text-foreground">Services</h3>
            <nav className="flex flex-col space-y-3">
              {[
                "Custom Software Development",
                "Web Applications",
                "Mobile Apps",
                "Cloud Solutions",
                "AI & Machine Learning",
                "DevOps & Infrastructure",
              ].map((service) => (
                <span
                  key={service}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer hover:translate-x-2 transform"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animate-stagger-3">
            <h3 className="font-semibold text-lg text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    kentomdeep@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    +254 (710) 791-596
                  </p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    +254 (114) 290-760
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  Kisii University,<br />
                  Kisii County,<br />
                  Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border/40">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left animate-fade-in">
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Subscribe to our newsletter for the latest tech insights and updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 animate-fade-in">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-background/50 border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 min-w-[250px]"
              />
              <Button className="bg-gradient-to-r from-slate-800 via-blue-600 to-cyan-500 hover:opacity-90 px-6 hover-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/40 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-sm text-muted-foreground animate-fade-in">
            © {new Date().getFullYear()} Deepkentom. All rights reserved. Built with passion and precision.
          </p>
          <div className="flex space-x-6 animate-fade-in">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;