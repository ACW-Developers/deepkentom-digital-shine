import { Target, Eye, Heart, Award, Users, Globe, Sparkles, Zap, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPremium from "@/assets/team-premium.jpg";
import sectionBanner from "@/assets/section-banner.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Quality",
      description: "Excellence is not negotiable. We deliver robust, scalable, and maintainable software.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients as true partners in their success journey.",
      gradient: "from-green-500/10 to-teal-500/10"
    }
  ];

  const stats = [
    { icon: <Code className="w-8 h-8" />, number: "500K+", label: "Lines of Code", color: "text-blue-400" },
    { icon: <Users className="w-8 h-8" />, number: "98%", label: "Client Satisfaction", color: "text-cyan-400" },
    { icon: <Rocket className="w-8 h-8" />, number: "150+", label: "Projects Completed", color: "text-purple-400" },
    { icon: <Globe className="w-8 h-8" />, number: "25+", label: "Countries Served", color: "text-pink-400" }
  ];

  const expertise = [
    "React & Next.js", "TypeScript", "Node.js & Express", "Python & Django", 
    "AWS & Azure", "Docker & Kubernetes", "PostgreSQL & MongoDB", "GraphQL & REST APIs",
    "Microservices", "CI/CD Pipelines", "Machine Learning", "Blockchain"
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-accent/20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground animate-fade-in">
              About <span className="text-shimmer">Deepkentom</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-slide-in-right max-w-4xl mx-auto">
              We are a passionate collective of software engineers, innovators, and digital architects 
              dedicated to transforming businesses through revolutionary software solutions. Since our founding, 
              we've been at the forefront of technological advancement, helping companies navigate and dominate 
              the digital landscape with unmatched confidence and precision.
            </p>
            <div className="animate-scale-in">
              <Button size="lg" variant="hero" className="text-xl px-12 py-6">
                Discover Our Journey <Sparkles className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center animate-fade-in animate-stagger-${index + 1} group`}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color.includes('blue') ? 'from-blue-500/10 to-cyan-500/10' : stat.color.includes('cyan') ? 'from-cyan-500/10 to-teal-500/10' : stat.color.includes('purple') ? 'from-purple-500/10 to-pink-500/10' : 'from-pink-500/10 to-red-500/10'} mb-6 group-hover:scale-110 transition-smooth`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
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
                src={teamPremium} 
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
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-premium hover-glow border-0 overflow-hidden group relative animate-fade-in animate-stagger-${index + 1}"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-smooth`}></div>
                <CardContent className="p-10 text-center relative z-10">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in">
                Built by <span className="text-shimmer">Experts</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed animate-slide-in-right">
                Our team combines decades of experience in software development, system architecture, 
                and business strategy to deliver solutions that truly make a difference. We're not 
                just developers – we're your technology transformation partners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {expertise.map((tech, index) => (
                <div 
                  key={index}
                  className={`px-6 py-4 bg-gradient-to-br from-primary/5 to-accent/5 text-primary rounded-xl text-center font-medium hover-lift border border-primary/10 animate-scale-in animate-stagger-${(index % 4) + 1}`}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="text-center animate-fade-in">
              <Button size="lg" variant="premium" className="text-xl px-12 py-6">
                Meet Our Team <Users className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;