import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, ArrowRight, Sparkles, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroContact})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-primary/15 to-accent/25"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2 animate-pulse" />
                Let's Connect & Collaborate
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in animate-stagger-1">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Ready to Start Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-shimmer">
                Digital Journey?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              We're here to turn your vision into reality. Get in touch with our team of experts 
              and let's discuss how we can transform your business through technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-4 text-lg hover-glow group">
                <span>Schedule a Call</span>
                <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 group">
                <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Live Chat Support</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're here to help you bring your vision to life. Reach out through any of these channels 
                  and let's start building something amazing together.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    primary: "info@deepkentom.com",
                    secondary: "support@deepkentom.com",
                    description: "Send us an email anytime - we respond within 24 hours"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    primary: "+1 (555) 123-4567",
                    secondary: "+1 (555) 987-6543",
                    description: "Available Mon-Fri from 8:00 AM to 6:00 PM EST"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    primary: "123 Tech Avenue",
                    secondary: "Innovation District, San Francisco, CA 94105",
                    description: "Our headquarters in the heart of Silicon Valley"
                  },
                  {
                    icon: Globe,
                    title: "Global Presence",
                    primary: "Available Worldwide",
                    secondary: "Remote collaboration specialists",
                    description: "Serving clients across 25+ countries"
                  }
                ].map((info, index) => (
                  <div 
                    key={index} 
                    className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl hover-lift border border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {info.primary}
                        </p>
                        <p className="text-primary font-medium mb-2">
                          {info.secondary}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover-lift animate-slide-in-right">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Send Message
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Let's Start a <span className="text-accent">Conversation</span>
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    For urgent matters, feel free to call us directly.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company</label>
                      <Input
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject *</label>
                      <Input
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Project Discussion"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific challenges you're facing. The more details you provide, the better we can assist you."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white py-4 text-lg font-semibold hover-glow group"
                  >
                    <span>Send Message</span>
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked <span className="text-shimmer">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to help you understand our process and what to expect
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity and scope. Simple applications typically take 4-8 weeks, while enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation, including milestones and deliverables."
                },
                {
                  question: "What is your development process like?",
                  answer: "We follow an agile methodology with 2-week sprints, regular client reviews, and continuous collaboration. This ensures transparency, allows for feedback incorporation, and delivers results that exceed expectations while staying on schedule."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and team training. Our support packages are flexible and tailored to your needs."
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer: "Yes, we specialize in system integration and API development. We can seamlessly connect new solutions with your existing infrastructure, databases, CRM systems, and third-party services while ensuring security and performance."
                },
                {
                  question: "What technologies do you work with?",
                  answer: "We work with modern, proven technologies including React, Node.js, Python, cloud platforms (AWS, Azure), databases (PostgreSQL, MongoDB), and emerging technologies like AI/ML frameworks. We choose the best tech stack for each project."
                },
                {
                  question: "How do you ensure project quality and security?",
                  answer: "We implement rigorous testing procedures, code reviews, security audits, and follow industry best practices. Our team includes security specialists who ensure your application meets compliance standards and protects user data."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
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
                <Clock className="w-4 h-4 mr-2" />
                Free Consultation Available
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in animate-stagger-1">
              Let's Build Something
              <span className="block text-shimmer">Amazing Together</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-stagger-2">
              Every great project starts with a conversation. Schedule your free consultation today 
              and discover how we can transform your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animate-stagger-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold hover-glow">
                <span>Schedule Free Consultation</span>
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                <MessageSquare className="mr-2 w-5 h-5" />
                <span>Start Live Chat</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;