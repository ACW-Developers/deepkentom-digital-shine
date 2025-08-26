import { Users, Target, Award, ArrowRight, Sparkles, CheckCircle, Globe, Heart, Eye, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";
import teamImage from "@/assets/team-premium.jpg";
import officeImage from "@/assets/office-workspace.jpg";

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-primary/10 to-accent/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                Our Story & Vision
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in animate-stagger-1">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Crafting Tomorrow's
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-shimmer">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              Founded on the belief that technology should empower humanity, we've been pushing the boundaries 
              of innovation to create solutions that make a real difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-4 text-lg hover-glow group">
                <span>Join Our Team</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 group">
                <Globe className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Our Global Impact</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Code, number: "500K+", label: "Lines of Code", color: "text-primary" },
              { icon: Users, number: "98%", label: "Client Satisfaction", color: "text-accent" },
              { icon: Rocket, number: "150+", label: "Projects Completed", color: "text-secondary" },
              { icon: Globe, number: "25+", label: "Countries Served", color: "text-primary" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`}>
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

      {/* Mission & Vision Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="animate-slide-in-left">
              <img 
                src={teamImage} 
                alt="Our innovative workspace and team" 
                className="rounded-3xl shadow-2xl hover-glow card-elevated"
              />
            </div>
            <div className="space-y-16">
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  To revolutionize businesses through innovative software solutions that drive exponential growth, 
                  operational efficiency, and sustainable competitive advantage. We believe technology should be a 
                  catalyst for transformation, not a complexity that holds businesses back from achieving their potential.
                </p>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl mr-4">
                    <Eye className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  To become the global leader in transformative software solutions, empowering every organization 
                  to harness cutting-edge technology for extraordinary success. We envision a world where innovative 
                  software bridges the gap between ambitious dreams and remarkable achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Our <span className="text-shimmer">Core Values</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
              These fundamental principles guide every decision we make and define how we serve our clients with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "Innovation",
                description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
                gradient: "from-primary/20 to-accent/20"
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Quality",
                description: "Excellence is not negotiable. We deliver robust, scalable, and maintainable software.",
                gradient: "from-accent/20 to-secondary/20"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Collaboration",
                description: "We work closely with our clients as true partners in their success journey.",
                gradient: "from-secondary/20 to-primary/20"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="card-premium hover-glow border-0 overflow-hidden group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-smooth`}></div>
                <div className="p-10 text-center relative z-10">
                  <div className="mb-8 flex justify-center">
                    <div className="p-5 bg-primary/10 rounded-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-smooth">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-smooth">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  Built by Experts
                </span>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
                  Meet Our <span className="text-shimmer">Dream Team</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Our diverse team combines decades of experience across multiple industries and technologies. 
                  From senior architects to creative designers, we bring together the best minds to solve your toughest challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-slide-in-right">
                {[
                  "React & Next.js", "TypeScript", "Node.js & Express", "Python & Django", 
                  "AWS & Azure", "Docker & Kubernetes", "PostgreSQL & MongoDB", "GraphQL & REST APIs",
                  "Microservices", "CI/CD Pipelines", "Machine Learning", "Blockchain"
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="px-4 py-3 bg-gradient-to-br from-primary/5 to-accent/5 text-primary rounded-xl text-center font-medium hover-lift border border-primary/10 animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="animate-fade-in">
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white px-8 py-4 text-lg hover-glow group">
                  <span>Join Our Team</span>
                  <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-left">
              <img 
                src={officeImage} 
                alt="Our collaborative workspace" 
                className="rounded-3xl shadow-2xl hover-glow card-elevated"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;