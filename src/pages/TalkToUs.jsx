import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Linkedin, Github, Send } from 'lucide-react';

const TalkToUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["123 Innovation Street", "Tech District, TC 12345", "TechCity, USA"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Fri 9AM-6PM EST"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@onemerge.com", "support@onemerge.com", "careers@onemerge.com"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM", "EST Timezone"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@onemerge", color: "from-pink-500 to-rose-500" },
    { icon: Twitter, name: "Twitter", handle: "@onemergedigital", color: "from-blue-500 to-cyan-500" },
    { icon: Linkedin, name: "LinkedIn", handle: "onemerge Agency", color: "from-blue-600 to-blue-700" },
    { icon: Github, name: "GitHub", handle: "onemerge-dev", color: "from-gray-600 to-gray-800" }
  ];

  const services = [
    "Digital Marketing Strategy",
    "Web Development",
    "Social Media Management",
    "App Development",
    "SEO & Performance Marketing",
    "Automation Solutions",
    "Content Creation",
    "CRM Implementation",
    "Brand Strategy",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Talk to Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's start the conversation
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Get In Touch</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input placeholder="Your company name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest *</label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required>
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Budget</label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Timeline</label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your project *</label>
                    <Textarea 
                      placeholder="Describe your project goals, challenges, and what you hope to achieve..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-lg" style={{background: 'var(--gradient-primary)'}}>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="glass-card border-primary/20 group hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="glass-card border-primary/20 group hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <social.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-sm group-hover:text-primary transition-colors">
                              {social.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{social.handle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <Card className="glass-card border-primary/20 overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Interactive Map Coming Soon</p>
                <p className="text-sm text-muted-foreground">123 Innovation Street, Tech District, TC 12345</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Web development projects typically take 4-12 weeks, while comprehensive marketing campaigns can run 3-6 months for optimal results."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes! We work with startups, small businesses, and enterprise companies. Our solutions are scalable and tailored to meet your specific needs and budget."
              },
              {
                question: "What's included in your digital marketing services?",
                answer: "Our digital marketing services include strategy development, content creation, social media management, SEO, paid advertising, analytics, and ongoing optimization."
              },
              {
                question: "Can you help with ongoing maintenance and support?",
                answer: "Absolutely! We offer ongoing maintenance, support, and optimization services to ensure your digital presence continues to perform at its best."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalkToUs;