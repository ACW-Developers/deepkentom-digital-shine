import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full transition-all duration-300 transform",
        "bg-blue-cyan-gradient hover:scale-110 hover:shadow-lg shadow-md",
        "animate-pulse-glow border border-blue-500/20 backdrop-blur-sm",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </Button>
  );
};

export default ScrollToTop;