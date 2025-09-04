import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Github, Code2, Globe, Smartphone, ShoppingCart, Cloud, Users, Calendar, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParticleField from "@/components/ParticleField";
import projectsHero from "@/assets/projects-hero.jpg";
import customSoftware from "@/assets/solution-custom-software.jpg";
import mobileApps from "@/assets/solution-mobile-apps.jpg";
import ecommerce from "@/assets/solution-ecommerce.jpg";
import cloudSolutions from "@/assets/solution-cloud.jpg";

// Animation wrapper component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
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
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
    </button>
  );
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online shopping platform with advanced features including real-time inventory, AI-powered recommendations, and seamless payment processing.",
    image: ecommerce,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Application",
    status: "Live",
    link: "#",
    github: "#",
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.",
    image: mobileApps,
    technologies: ["React Native", "Firebase", "Blockchain", "ML"],
    category: "Mobile App",
    status: "Live",
    link: "#",
    github: "#",
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "Cloud Infrastructure Suite",
    description: "Enterprise-grade cloud management platform for automated deployment, monitoring, and scaling of applications across multiple environments.",
    image: cloudSolutions,
    technologies: ["AWS", "Docker", "Kubernetes", "Python"],
    category: "Cloud Solution",
    status: "In Development",
    link: "#",
    github: "#",
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    id: 4,
    title: "Custom CRM System",
    description: "Tailored customer relationship management system with advanced analytics, automation workflows, and seamless integrations.",
    image: customSoftware,
    technologies: ["Django", "Vue.js", "Redis", "PostgreSQL"],
    category: "Custom Software",
    status: "Live",
    link: "#",
    github: "#",
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    id: 5,
    title: "AI-Powered Analytics Dashboard",
    description: "Advanced business intelligence platform with machine learning insights, predictive analytics, and real-time data visualization.",
    image: customSoftware,
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    category: "AI Solution",
    status: "Live",
    link: "#",
    github: "#",
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    id: 6,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management, appointment scheduling, and secure medical record handling.",
    image: mobileApps,
    technologies: ["React", "Node.js", "MongoDB", "HIPAA"],
    category: "Healthcare",
    status: "In Development",
    link: "#",
    github: "#",
    gradient: "from-blue-600/20 to-cyan-500/20"
  }
];

const categories = ["All", "Web Application", "Mobile App", "Cloud Solution", "Custom Software", "AI Solution", "Healthcare"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-muted/30">
      <ScrollToTopButton />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${projectsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/60 to-cyan-600/30"></div>
        </div>

        <ParticleField />

        <div className="relative z-10 container mx-auto px-6 text-left">
          <AnimatedSection delay={100}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Our Project Portfolio
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 max-w-4xl">
              Innovative <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Solutions</span>
              <br />We've Built
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Explore our portfolio of cutting-edge projects that have transformed businesses 
              and delivered exceptional results for our clients worldwide.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={400} className="flex flex-col sm:flex-row gap-6 items-start">
            <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 px-8 py-4 text-lg group transition-all duration-300">
              <ExternalLink className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>View All Projects</span>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-white text-blue-600 border-white hover:bg-white/90 group transition-all duration-300">
              <Github className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Filter & Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <AnimatedSection className="mb-16">
            <div className="flex flex-wrap justify-start gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                delay={index * 100}
                className="group"
              >
                <Card className="h-full border border-border bg-card hover:shadow-lg hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover-lift">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-cyan-100 text-cyan-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="outline" className="bg-white/90 border-white hover:bg-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/90 border-white hover:bg-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-muted relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 text-left relative">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground max-w-3xl">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Next Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button size="lg" className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white px-8 py-4 text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                <ArrowRight className="mr-2 w-5 h-5" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;