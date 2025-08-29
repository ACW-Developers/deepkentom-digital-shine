import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Users, Zap, Shield, Globe, Sparkles, Play, ChevronRight, Star, CheckCircle, Target, Rocket, Server, Cpu, Database, Cloud, GitBranch, MessageCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParticleField from "@/components/ParticleField";
import heroImage from "@/assets/office-workspace.jpg";
import servicesTech from "@/assets/services-tech.jpg";
import servicesPremiun from "@/assets/services-premium.jpg";
import featureInnovation from "@/assets/feature-innovation.jpg";
import featureSecurity from "@/assets/feature-security.jpg";
import developmentProcess from "@/assets/team-premium.jpg";

// Typing animation component
const TypingAnimation = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Digital Future', 'Online Presence', 'Innovation', 'Business Growth', 'Technology Stack'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Delete text
        setCurrentText(currentWord.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Type text
        setCurrentText(currentWord.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, currentWordIndex, isDeleting, words]);

  return (
    <span className="lg:text-6xl font-semibold ml-2 text-cyan-500 typing-animation">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

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

const technologies = [
  { name: "Frontend", icon: <Globe className="w-6 h-6" />, items: ["React", "Vue.js", "Angular", "TypeScript"] },
  { name: "Backend", icon: <Server className="w-6 h-6" />, items: ["Node.js", "Python", "Java", ".NET"] },
  { name: "Mobile", icon: <Cpu className="w-6 h-6" />, items: ["React Native", "Flutter", "iOS", "Android"] },
  { name: "Database", icon: <Database className="w-6 h-6" />, items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { name: "Cloud", icon: <Cloud className="w-6 h-6" />, items: ["AWS", "Azure", "Google Cloud", "Kubernetes"] },
  { name: "DevOps", icon: <GitBranch className="w-6 h-6" />, items: ["Docker", "Jenkins", "Terraform", "GitLab CI/CD"] }
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We analyze your requirements and business goals to create a strategic plan.", icon: <MessageCircle className="w-6 h-6" /> },
  { number: "02", title: "Design", description: "Our designers create intuitive user experiences and visually appealing interfaces.", icon: <BarChart3 className="w-6 h-6" /> },
  { number: "03", title: "Development", description: "Our engineers build robust, scalable solutions using best practices.", icon: <Code2 className="w-6 h-6" /> },
  { number: "04", title: "Testing", description: "We rigorously test every component to ensure quality and reliability.", icon: <CheckCircle className="w-6 h-6" /> },
  { number: "05", title: "Deployment", description: "We seamlessly deploy your solution and provide ongoing support.", icon: <Rocket className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechNova",
    content: "Deepkentom transformed our legacy systems into modern, scalable solutions. Their team's expertise and dedication were exceptional throughout the project.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Director at Finova",
    content: "The performance optimization work done by Deepkentom resulted in 40% faster load times and significantly improved user experience for our customers.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "CEO at HealthTech Solutions",
    content: "Their security assessment uncovered critical vulnerabilities we weren't aware of. The implementation was thorough and minimally disruptive to our operations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  }
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-blue-50/30">
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        .typing-animation {
          min-height: 1.5em;
          display: inline-block;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Blue overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-700/30 to-blue-500/10"></div>
        </div>

        {/* Particle field with bluish particles */}
        <ParticleField />

        <div className="relative z-10 container mx-auto px-6 text-left">
          <div className="max-w-3xl space-y-6">
            <AnimatedSection delay={100}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Next-Generation Technology Solutions
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-white/80 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <TypingAnimation />
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-xl md:text-2xl text-slate-200 max-w-3xl leading-relaxed">
                We craft innovative software solutions that propel businesses into the future. 
                From custom applications to AI-powered systems, we turn your vision into reality.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="flex flex-col sm:flex-row gap-6 items-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg group transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-blue-700/20 border-blue-300 text-white hover:bg-blue-500/20 group transition-all duration-300">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </Button>
            </AnimatedSection>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-100/50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Comprehensive <span className="text-blue-600">Tech Solutions</span>
            </h2>
            <p className="text-xl text-slate-600">
              From concept to deployment, we deliver end-to-end solutions that drive innovation and growth
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Custom Software Development",
                description: "Tailored applications built with cutting-edge technologies to solve your unique business challenges.",
                image: servicesTech,
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: Globe,
                title: "Cloud Solutions & DevOps",
                description: "Scalable infrastructure and automated deployment pipelines for modern applications.",
                image: servicesPremiun,
                gradient: "from-cyan-500/20 to-indigo-500/20"
              },
              {
                icon: Zap,
                title: "AI & Machine Learning",
                description: "Intelligent systems that learn, adapt, and provide predictive insights for your business.",
                image: featureInnovation,
                gradient: "from-indigo-500/20 to-blue-500/20"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets and user data.",
                image: featureSecurity,
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: Users,
                title: "Digital Transformation",
                description: "Strategic consulting to modernize your business processes and technology stack.",
                image: servicesTech,
                gradient: "from-cyan-500/20 to-indigo-500/20"
              },
              {
                icon: Sparkles,
                title: "Innovation Lab",
                description: "Experimental technologies and proof-of-concept development for future solutions.",
                image: servicesPremiun,
                gradient: "from-indigo-500/20 to-blue-500/20"
              },
            ].map((service, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100}
                className="group relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed ">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/70 via-cyan-50/50 to-slate-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Our <span className="text-blue-600">Technology Stack</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions for our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <AnimatedSection key={index} delay={index * 100} className="group">
                <Card className="h-full border border-slate-200 bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-600">
                          {tech.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">{tech.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">
                          {item}
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

      {/* Development Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Our <span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We follow a structured yet flexible approach to ensure your project's success from concept to deployment and beyond.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform -translate-y-1/2 hidden md:block"></div>
                  )}
                </div>
                
                <div className="p-3 bg-blue-100 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={developmentProcess} 
                alt="Development process" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Agile Methodology</h3>
                  <p className="text-blue-100">We follow agile practices to ensure transparency, adaptability, and continuous delivery of value.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Don't just take our word for it. Here's what businesses like yours have experienced with our solutions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100} className="group">
                <Card className="h-full border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-blue-50/70 via-cyan-50/50 to-slate-100 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              Why Choose Deepkentom
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Excellence in <span className="text-blue-600">Every Project</span>
            </h2>
            <p className="text-xl text-slate-600">
              We combine technical expertise with business insight to deliver solutions that truly matter
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Precision & Quality",
                description: "Every line of code is crafted with meticulous attention to detail and performance optimization."
              },
              {
                icon: Rocket,
                title: "Rapid Deployment",
                description: "Agile methodologies ensure fast time-to-market without compromising on quality or security."
              },
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "Over 500 successful projects delivered to clients ranging from startups to Fortune 500 companies."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our diverse team brings together decades of experience across multiple industries and technologies."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with 24/7 support and seamless collaboration across time zones."
              },
              {
                icon: Sparkles,
                title: "Innovation First",
                description: "We stay ahead of technology trends to provide cutting-edge solutions for tomorrow's challenges."
              }
            ].map((feature, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100}
                className="group bg-white backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-cyan-500/90 to-blue-700/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <AnimatedSection delay={100}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Ready to Transform Your Business?
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Let's Build Something
                <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Extraordinary Together</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions. 
                Your success story starts with a single conversation.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="flex flex-col sm:flex-row gap-6 items-start">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-white/25 transition-all duration-300">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                <span>Schedule Demo</span>
              </Button>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      </section>
    </div>
  );
};

export default Home;