import { ArrowRight, Code2, Users, Zap, Shield, Globe, Sparkles, Play, ChevronRight, Star, CheckCircle, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleField from "@/components/ParticleField";
import heroImage from "@/assets/hero-global.jpg";
import servicesTech from "@/assets/services-tech.jpg";
import servicesPremiun from "@/assets/services-premium.jpg";
import featureInnovation from "@/assets/feature-innovation.jpg";
import featureSecurity from "@/assets/feature-security.jpg";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-primary/20 to-accent/30"></div>
        </div>
        <ParticleField />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Next-Generation Technology Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in animate-stagger-1">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-shimmer">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              We craft innovative software solutions that propel businesses into the future. 
              From custom applications to AI-powered systems, we turn your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-4 text-lg hover-glow group">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animate-stagger-4">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Team Members" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Comprehensive Tech Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end solutions that drive innovation and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Custom Software Development",
                description: "Tailored applications built with cutting-edge technologies to solve your unique business challenges.",
                image: servicesTech,
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: Globe,
                title: "Cloud Solutions & DevOps",
                description: "Scalable infrastructure and automated deployment pipelines for modern applications.",
                image: servicesPremiun,
                gradient: "from-accent/20 to-secondary/20"
              },
              {
                icon: Zap,
                title: "AI & Machine Learning",
                description: "Intelligent systems that learn, adapt, and provide predictive insights for your business.",
                image: featureInnovation,
                gradient: "from-secondary/20 to-primary/20"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets and user data.",
                image: featureSecurity,
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: Users,
                title: "Digital Transformation",
                description: "Strategic consulting to modernize your business processes and technology stack.",
                image: servicesTech,
                gradient: "from-accent/20 to-secondary/20"
              },
              {
                icon: Sparkles,
                title: "Innovation Lab",
                description: "Experimental technologies and proof-of-concept development for future solutions.",
                image: servicesPremiun,
                gradient: "from-secondary/20 to-primary/20"
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover-lift border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="group/btn text-primary hover:bg-primary/10 p-0">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Choose Deepkentom
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Excellence in Every Project
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business insight to deliver solutions that truly matter
            </p>
          </div>
          
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
              <div 
                key={index} 
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl hover-lift border border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Ready to Transform Your Business?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in animate-stagger-1">
              Let's Build Something
              <span className="block text-shimmer">Extraordinary Together</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions. 
              Your success story starts with a single conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold hover-glow">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                <Play className="mr-2 w-5 h-5" />
                <span>Schedule Demo</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/30 rounded-full animate-float-gentle"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 rounded-full animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/40 rounded-full animate-float-gentle" style={{ animationDelay: '4s' }}></div>
      </section>
    </div>
  );
};

export default Home;