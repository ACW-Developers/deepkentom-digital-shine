import { ArrowRight, Code2, Zap, Shield, Users, Sparkles, Rocket, Target, Play, Star, ChevronRight, Globe, Cpu, Database, Cloud, GitBranch, Server, BarChart3, Lock, MessageCircle, Calendar, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParticleField from "@/components/ParticleField";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// High-quality tech background images
const heroBackground = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2070";
const ctaBackground = "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=2074";
const techAbstract1 = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1000";
const techAbstract2 = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000";
const teamCollaboration = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000";
const dataVisualization = "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=1000";
const developmentProcess = "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000";
const techInfrastructure = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000";

const AnimatedSection = ({ children, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: inView ? "none" : "translateY(50px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      features: ["Web Applications", "Mobile Apps", "Cloud Solutions", "API Integration"]
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Performance Optimization",
      description: "Enhance your existing systems with our optimization expertise for maximum efficiency.",
      gradient: "from-purple-500/10 to-pink-500/10",
      features: ["Speed Analysis", "Bottleneck Identification", "Scalability Planning", "Infrastructure Tuning"]
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Security Solutions",
      description: "Protect your digital assets with enterprise-grade security implementations.",
      gradient: "from-green-500/10 to-teal-500/10",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Protocols", "Compliance Guidance"]
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Team Augmentation",
      description: "Scale your development team with our experienced software engineers.",
      gradient: "from-orange-500/10 to-red-500/10",
      features: ["Dedicated Developers", "Project Managers", "QA Specialists", "DevOps Engineers"]
    }
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, number: "150+", label: "Projects Delivered", color: "text-blue-500" },
    { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients", color: "text-cyan-500" },
    { icon: <Rocket className="w-6 h-6" />, number: "8+", label: "Years Experience", color: "text-purple-500" },
    { icon: <Sparkles className="w-6 h-6" />, number: "24/7", label: "Support Available", color: "text-pink-500" }
  ];

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

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/80"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              <span className="text-sm text-white">We're accepting new projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
              Revolutionary <span className="text-shimmer block mt-2">Software Solutions</span>
            </h1>
            
            <p className="text-xl mb-10 text-gray-200 leading-relaxed max-w-lg animate-slide-in-right">
              Deepkentom builds cutting-edge custom software that drives innovation, 
              efficiency, and unprecedented growth for forward-thinking businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start animate-scale-in">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-5 hover-glow group"
              >
                Start Your Project
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/20 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm text-lg px-8 py-5 transition-all group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center mt-12 text-white/80 text-sm animate-fade-in">
              <div className="flex items-center mr-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current text-amber-400 mr-1" />
                ))}
                <span className="ml-2">4.9/5 rating</span>
              </div>
              <span>Trusted by industry leaders</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-float-gentle opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float-gentle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float-gentle opacity-50" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-left group p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${stat.color.replace('text', 'bg')}/10`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive software solutions that empower businesses to thrive in the digital age through innovation and excellence.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <Card className="card-premium hover-glow border-0 overflow-hidden group relative h-full bg-gradient-to-br from-white to-gray-50/50 shadow-sm hover:shadow-md transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-smooth duration-500`}></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6 flex justify-start">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-105 group-hover:bg-primary/20 transition-smooth duration-500">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="ghost" className="mt-6 pl-0 group-hover:pl-2 transition-all duration-300">
                      Learn more
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Technology Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions for our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <AnimatedSection key={index} className="group">
                <Card className="h-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary">
                          {tech.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{tech.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Development Process</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We follow a structured yet flexible approach to ensure your project's success from concept to deployment and beyond.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                    {step.number}
                  </div>
                  <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2 hidden md:block"></div>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={developmentProcess} 
                alt="Development process" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Agile Methodology</h3>
                  <p className="text-white/90">We follow agile practices to ensure transparency, adaptability, and continuous delivery of value.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what businesses like yours have experienced with our solutions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} className="group">
                <Card className="h-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400 mr-1" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="py-24 text-white relative overflow-hidden"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
            <AnimatedSection className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-shimmer">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join the revolution of businesses that have transformed their operations with our cutting-edge solutions. 
                Your digital transformation journey starts with a single conversation.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-md">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                  <span className="text-white/90">Free consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                  <span className="text-white/90">No obligation quote</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                  <span className="text-white/90">Expert guidance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                  <span className="text-white/90">Flexible engagement models</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 transition-smooth text-lg px-8 py-5 hover-glow font-semibold"
                >
                  Launch Your Project
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-5 transition-smooth"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="flex-1">
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl -z-10"></div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl -z-10"></div>
                <img 
                  src={techInfrastructure} 
                  alt="Technology infrastructure" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;