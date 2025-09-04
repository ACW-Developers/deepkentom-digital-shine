import { useState, useEffect } from "react";
import { Code, Smartphone, Cloud, Shield, Zap, Users, ArrowRight, Sparkles, CheckCircle, Play, Database, Globe2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroServices from "@/assets/hero-services.jpg";
import servicesTech from "@/assets/services-tech.jpg";
import servicesPremiun from "@/assets/services-premium.jpg";
import featureInnovation from "@/assets/feature-innovation.jpg";

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-r from-blue-900/50 via-blue-700/30 to-blue-500/10">
      {/* Hero Section */}
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroServices})` }}
  >
    {/* Darker Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/20"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-left">
    <div className="max-w-4xl space-y-8">
      {/* Badge */}
      <div className="animate-fade-in-right">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-blue-200 text-white text-sm font-medium mb-6 backdrop-blur-sm">
          <Zap className="w-4 h-4 mr-2 animate-pulse" />
          Full-Stack Solutions
        </span>
      </div>
      
      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white animate-fade-in-right animate-stagger-1">
        <span className="block">Comprehensive Tech</span>
        <span className="text-cyan-300">Services & Solutions</span>
      </h1>
      
      {/* Subtext */}
      <p className="text-xl md:text-2xl text-slate-100 max-w-3xl leading-relaxed animate-fade-in-right animate-stagger-2">
        From initial concept to final deployment and beyond — we provide end-to-end technology services 
        that drive innovation and accelerate your business growth.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-in-right animate-stagger-3">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-cyan-500/30 group transition-all duration-300">
          <span>Start Your Project</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 group transition-all duration-300 backdrop-blur-sm">
          <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <span>View Case Studies</span>
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Services Grid - Simplified with Images */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-left mb-12">
      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
        What We Offer
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
        Complete Digital Solutions
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl">
        Services designed to transform your business and accelerate your digital journey.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Code,
          title: "Custom Software Development",
          description: "Tailored software solutions to meet your business goals.",
          features: ["Web & desktop apps", "APIs & integrations", "System modernization"],
          image: servicesTech,
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description: "Native and cross-platform apps with seamless experiences.",
          features: ["iOS & Android", "React Native", "PWAs"],
          image: servicesPremiun,
        },
        {
          icon: Cloud,
          title: "Cloud Solutions & DevOps",
          description: "Scalable infrastructure and automated deployments.",
          features: ["AWS & Azure", "CI/CD pipelines", "Cloud migration"],
          image: featureInnovation,
        },
        {
          icon: Database,
          title: "Data & Analytics",
          description: "Turn raw data into valuable insights.",
          features: ["Database optimization", "BI dashboards", "Analytics & reporting"],
          image: servicesTech,
        },
        {
          icon: Shield,
          title: "Cybersecurity",
          description: "Protect your digital assets with enterprise-grade security.",
          features: ["Audits & testing", "Encryption", "Compliance"],
          image: servicesPremiun,
        },
        {
          icon: Zap,
          title: "AI & Machine Learning",
          description: "Intelligent systems for smarter decisions.",
          features: ["Custom models", "NLP", "Predictive analytics"],
          image: featureInnovation,
        }
      ].map((service, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative h-44 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Service Icon */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
              <service.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">
              {service.title}
            </h3>
            <p className="text-slate-600 mb-4">
              {service.description}
            </p>
            <ul className="space-y-1 text-sm text-slate-600 mb-4">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-left mb-16 animate-fade-in-right">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              <span className="text-blue-600">
                Proven Development Methodology
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              A structured yet flexible approach that ensures project success from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "We analyze your requirements and business goals", icon: Users, color: "blue" },
              { step: "02", title: "Planning", description: "Strategic planning and technical architecture design", icon: Globe2, color: "cyan" },
              { step: "03", title: "Development", description: "Agile development with regular progress updates", icon: Code, color: "blue" },
              { step: "04", title: "Testing", description: "Comprehensive testing and quality assurance", icon: CheckCircle, color: "cyan" },
              { step: "05", title: "Deployment", description: "Smooth deployment and ongoing support", icon: Cpu, color: "blue" }
            ].map((phase, index) => (
              <div 
                key={index} 
                className="text-left group animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-500 shadow-lg z-10 relative">
                    {phase.step}
                  </div>
                  {index < 4 && (
                    <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform -translate-y-1/2 hidden md:block"></div>
                  )}
                </div>
                
                <div className="p-3 bg-blue-100 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <phase.icon className="w-6 h-6 text-blue-600 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {phase.description}
                </p>

                {/* Connecting line for mobile */}
                {index < 4 && (
                  <div className="absolute top-8 left-8 h-8 w-0.5 bg-gradient-to-b from-blue-300 to-transparent md:hidden -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-cyan-500/90 to-blue-700/90"></div>
        <div className="container mx-auto px-6 text-left relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="animate-fade-in-right">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Transform Your Business?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-right animate-stagger-1 text-white">
              Let's Build Your
              <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Next Success Story</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed animate-fade-in-right animate-stagger-2">
              Join hundreds of successful projects. Get a free consultation and discover how we can 
              accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-in-right animate-stagger-3">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-white/25 transition-all duration-300">
                <span>Get Free Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                <span>View Our Work</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </section>

      {/* Add these animation styles to your global CSS */}
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .animate-stagger-1 { animation-delay: 0.1s; }
        .animate-stagger-2 { animation-delay: 0.2s; }
        .animate-stagger-3 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default Services;