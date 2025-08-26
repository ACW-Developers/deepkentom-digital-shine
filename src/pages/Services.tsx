import { Code, Smartphone, Cloud, Shield, Zap, Users, ArrowRight, Sparkles, CheckCircle, Play, Database, Globe2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroServices from "@/assets/hero-services.jpg";
import servicesTech from "@/assets/services-tech.jpg";
import servicesPremiun from "@/assets/services-premium.jpg";
import featureInnovation from "@/assets/feature-innovation.jpg";

const Services = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroServices})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-primary/20 to-accent/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Full-Stack Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in animate-stagger-1">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Comprehensive Tech
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-shimmer">
                Services & Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              From initial concept to final deployment and beyond - we provide end-to-end technology services 
              that drive innovation and accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-4 text-lg hover-glow group">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View Case Studies</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Complete Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services designed to transform your business and accelerate your digital journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Code,
                title: "Custom Software Development",
                description: "End-to-end software solutions tailored to your specific business requirements and goals.",
                features: ["Full-stack web applications", "Desktop applications", "API development & integration", "Legacy system modernization"],
                image: servicesTech,
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
                features: ["React Native development", "Native iOS & Android apps", "Progressive Web Apps", "Mobile UI/UX design"],
                image: servicesPremiun,
                gradient: "from-accent/20 to-secondary/20"
              },
              {
                icon: Cloud,
                title: "Cloud Solutions & DevOps",
                description: "Scalable cloud infrastructure and automated deployment pipelines for modern applications.",
                features: ["AWS & Azure deployment", "Microservices architecture", "DevOps & CI/CD pipelines", "Cloud migration consulting"],
                image: featureInnovation,
                gradient: "from-secondary/20 to-primary/20"
              },
              {
                icon: Database,
                title: "Data Engineering & Analytics",
                description: "Transform raw data into actionable insights with our advanced data solutions.",
                features: ["Database design & optimization", "Data warehouse solutions", "Business intelligence", "Analytics & reporting"],
                image: servicesTech,
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: Shield,
                title: "Cybersecurity Solutions",
                description: "Protect your digital assets with enterprise-grade security implementations.",
                features: ["Security audits & testing", "Authentication systems", "Data encryption solutions", "Compliance & governance"],
                image: servicesPremiun,
                gradient: "from-accent/20 to-secondary/20"
              },
              {
                icon: Zap,
                title: "AI & Machine Learning",
                description: "Intelligent systems that learn, adapt, and provide predictive insights for your business.",
                features: ["Custom AI models", "Natural language processing", "Computer vision solutions", "Predictive analytics"],
                image: featureInnovation,
                gradient: "from-secondary/20 to-primary/20"
              }
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
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Proven Development Methodology
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured yet flexible approach that ensures project success from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "We analyze your requirements and business goals", icon: Users },
              { step: "02", title: "Planning", description: "Strategic planning and technical architecture design", icon: Globe2 },
              { step: "03", title: "Development", description: "Agile development with regular progress updates", icon: Code },
              { step: "04", title: "Testing", description: "Comprehensive testing and quality assurance", icon: CheckCircle },
              { step: "05", title: "Deployment", description: "Smooth deployment and ongoing support", icon: Cpu }
            ].map((phase, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {phase.step}
                  </div>
                  {index < 4 && (
                    <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2 hidden md:block"></div>
                  )}
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
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
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Transform Your Business?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in animate-stagger-1">
              Let's Build Your
              <span className="block text-shimmer">Next Success Story</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              Join hundreds of successful projects. Get a free consultation and discover how we can 
              accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold hover-glow">
                <span>Get Free Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                <Play className="mr-2 w-5 h-5" />
                <span>View Our Work</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;