import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import officeImage from "@/assets/office-workspace.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Quality",
      description: "Excellence is not negotiable. We deliver robust, scalable, and maintainable software."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients as true partners in their success journey."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              About Deepkentom
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              We are a passionate team of software engineers and innovators dedicated to 
              transforming businesses through custom software solutions. Since our founding, 
              we've been at the forefront of technological advancement, helping companies 
              navigate the digital landscape with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={officeImage} 
                alt="Our modern workspace" 
                className="rounded-2xl shadow-lg hover-lift"
              />
            </div>
            <div className="space-y-12">
              <div className="animate-fade-in">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative software solutions that drive growth, 
                  efficiency, and competitive advantage. We believe technology should be an 
                  enabler, not a barrier, to achieving your business objectives.
                </p>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading partner for businesses seeking transformative software 
                  solutions. We envision a world where every organization can leverage 
                  cutting-edge technology to achieve extraordinary results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="hover-lift border-0 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Built by Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our team combines years of experience in software development, system architecture, 
            and business strategy to deliver solutions that truly make a difference. We're not 
            just developers – we're your technology partners.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;