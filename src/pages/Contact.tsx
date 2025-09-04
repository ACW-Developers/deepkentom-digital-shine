import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, ArrowRight, Sparkles, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-african-tech.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
      <section className="relative min-h-[80vh] flex items-center justify-start overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroContact})` }}
  >
    {/* Strong Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-left">
    <div className="max-w-4xl space-y-8">
      {/* Badge */}
      <div className="animate-fade-in">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
          <MessageSquare className="w-4 h-4 mr-2 animate-pulse" />
          Let's Connect & Collaborate
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white animate-fade-in animate-stagger-1">
        <span className="block">Ready to Start Your</span>
        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Digital Journey?
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-xl md:text-2xl text-slate-100 max-w-3xl leading-relaxed animate-fade-in animate-stagger-2">
        We're here to turn your vision into reality. Get in touch with our team of experts 
        and let's discuss how we can transform your business through technology.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-in animate-stagger-3">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg group transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
          <span>Schedule a Call</span>
          <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 group backdrop-blur-sm">
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
                <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Contact <span className="text-blue-600">Information</span>
                </h2>

              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    primary: "kentomdeep@gmail.com",
                    secondary: "ronaldtombe@gmail.com",
                    description: "Send us an email anytime - we respond within 24 hours"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    primary: "+254 (710) 791-596",
                    secondary: "+254 (114) 290-760",
                    description: "Available Mon-Fri from 8:00 AM to 6:00 PM EST"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    primary: "Kisii University",
                    secondary: "Kisii County, Kenya",
                    description: "Pay us a visit during business hours - lets patner"
                  }
                ].map((info, index) => (
                  <div 
                    key={index} 
                    className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl hover-lift border border-border/50 animate-fade-in transition-all duration-300 hover:border-blue-600/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1">
                          {info.primary}
                        </p>
                        <p className="text-blue-600 font-medium mb-2">
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
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover-lift animate-slide-in-right transition-all duration-300 hover:border-blue-600/30">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 text-blue-600 text-sm font-medium mb-4">
                    Send Message
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Let's Start a <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Conversation</span>
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
                        className="bg-background/50 border-border/60 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
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
                        className="bg-background/50 border-border/60 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
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
                        className="bg-background/50 border-border/60 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
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
                        className="bg-background/50 border-border/60 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
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
                      className="bg-background/50 border-border/60 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific challenges you're facing. The more details you provide, the better we can assist you."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
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
      <section className="py-24 bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-blue-600/5 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-left mb-16 animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-4">
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Questions</span>
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
                  className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover-lift animate-fade-in transition-all duration-300 hover:border-blue-600/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
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
    </div>
  );
};

export default Contact;