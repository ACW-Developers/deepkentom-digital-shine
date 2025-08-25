import { ArrowRight, Code2, Zap, Shield, Users, Sparkles, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParticleField from "@/components/ParticleField";
import heroPremium from "@/assets/hero-premium.jpg";
import featureInnovation from "@/assets/feature-innovation.jpg";
import featureSecurity from "@/assets/feature-security.jpg";

const Home = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
      image: featureInnovation,
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "Enhance your existing systems with our optimization expertise for maximum efficiency.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security Solutions",
      description: "Protect your digital assets with enterprise-grade security implementations.",
      image: featureSecurity,
      gradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Augmentation",
      description: "Scale your development team with our experienced software engineers.",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  const stats = [
    { icon: <Target className="w-8 h-8" />, number: "150+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Happy Clients", color: "text-cyan-400" },
    { icon: <Rocket className="w-8 h-8" />, number: "8+", label: "Years Experience", color: "text-purple-400" },
    { icon: <Sparkles className="w-8 h-8" />, number: "24/7", label: "Support Available", color: "text-pink-400" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPremium})` }}
      >
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
              <span className="block text-shimmer">Revolutionary</span>
              <span className="block mt-2">Software Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
              Transform your business with cutting-edge custom software that drives innovation, 
              efficiency, and unprecedented growth. Partner with Deepkentom for technology that redefines possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Button 
                size="lg" 
                variant="hero"
                className="text-xl px-12 py-6 hover-glow animate-pulse-glow"
              >
                Start Your Revolution <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm text-xl px-12 py-6 transition-smooth"
              >
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float-gentle opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float-gentle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float-gentle opacity-50" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center animate-fade-in animate-stagger-${index + 1} group`}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color.includes('blue') ? 'from-blue-500/10 to-cyan-500/10' : stat.color.includes('cyan') ? 'from-cyan-500/10 to-teal-500/10' : stat.color.includes('purple') ? 'from-purple-500/10 to-pink-500/10' : 'from-pink-500/10 to-red-500/10'} mb-4 group-hover:scale-110 transition-smooth`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Our <span className="text-shimmer">Expertise</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
              Comprehensive software solutions that empower businesses to thrive in the digital age through innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`card-premium hover-glow border-0 overflow-hidden group relative animate-fade-in animate-stagger-${(index % 4) + 1}`}
              >
                {service.image && (
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-smooth overflow-hidden rounded-bl-3xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-smooth`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 flex justify-start">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-smooth">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in">
              Innovation That <span className="text-shimmer">Transforms</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-slide-in-right">
              We don't just build software – we craft digital experiences that revolutionize how businesses operate, 
              scale, and succeed in an ever-evolving technological landscape.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: "🚀", title: "Lightning Fast", desc: "Optimized performance" },
                { icon: "🔒", title: "Bank-Level Security", desc: "Enterprise-grade protection" },
                { icon: "📈", title: "Scalable Architecture", desc: "Grows with your business" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`text-center animate-scale-in animate-stagger-${index + 1} group`}
                >
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-smooth">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-primary-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '10s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Ready to <span className="text-shimmer">Transform</span> Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
            Join the revolution of businesses that have transformed their operations with our cutting-edge solutions. 
            Your digital transformation journey starts with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 transition-smooth text-xl px-12 py-6 hover-glow font-semibold"
            >
              Launch Your Project <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-xl px-12 py-6 transition-smooth"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;