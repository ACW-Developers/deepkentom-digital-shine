import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesImage from "@/assets/services-tech.jpg";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-primary" />,
      title: "Custom Software Development",
      description: "End-to-end software solutions tailored to your specific business requirements.",
      features: [
        "Full-stack web applications",
        "Desktop applications",
        "API development & integration",
        "Legacy system modernization"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native development",
        "Native iOS & Android apps",
        "Progressive Web Apps",
        "Mobile UI/UX design"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "AWS & Azure deployment",
        "Microservices architecture",
        "DevOps & CI/CD pipelines",
        "Cloud migration consulting"
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Engineering",
      description: "Transform raw data into actionable insights with our data solutions.",
      features: [
        "Database design & optimization",
        "Data warehouse solutions",
        "Business intelligence",
        "Analytics & reporting"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with enterprise-grade security implementations.",
      features: [
        "Security audits & testing",
        "Authentication systems",
        "Data encryption solutions",
        "Compliance & governance"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "System Integration",
      description: "Seamlessly connect your existing systems and third-party services.",
      features: [
        "API integrations",
        "ERP system connections",
        "Payment gateway setup",
        "Third-party service integration"
      ],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We analyze your requirements and business goals" },
    { step: "02", title: "Planning", description: "Strategic planning and technical architecture design" },
    { step: "03", title: "Development", description: "Agile development with regular progress updates" },
    { step: "04", title: "Deployment", description: "Smooth deployment and comprehensive testing" },
    { step: "05", title: "Support", description: "Ongoing maintenance and technical support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
              Comprehensive software solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-lift border-0 bg-card/50 backdrop-blur-sm overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-smooth">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-smooth">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures project success from concept to deployment.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((phase, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground animate-fade-in">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-in-right">
                We leverage cutting-edge technologies and industry best practices to 
                build robust, scalable, and future-proof solutions.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  "React", "TypeScript", "Node.js", "Python", 
                  "AWS", "Docker", "PostgreSQL", "MongoDB",
                  "Kubernetes", "GraphQL", "Redis", "Elasticsearch"
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-center text-sm font-medium hover-lift"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary-gradient hover:opacity-90 transition-smooth">
                Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <img 
                src={servicesImage} 
                alt="Technology stack visualization" 
                className="rounded-2xl shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our expertise can help bring your vision to life. 
            Get in touch for a free consultation.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 transition-smooth text-lg px-8 py-4"
          >
            Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;