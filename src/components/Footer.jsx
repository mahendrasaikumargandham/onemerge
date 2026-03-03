import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    'SEO Optimization',
    'Social Media Management',
    'Performance Marketing',
    'Web Development',
    'App Development',
    'Content Creation',
  ];

  const company = [
    { name: 'Our Story', path: '/story' },
    { name: 'We Offer', path: '/services' },
    { name: 'Join the Crew', path: '/careers' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/onemerge.in?igsh=MWtnMjh1aHVkYjVqYw%3D%3D&utm_source=qr', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/onemerge-media/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/onemergemedia?s=21', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/@OnemergeMedia', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-dark border-t border-white/10">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-glow" />
            <h3 className="text-2xl font-space-grotesk font-bold gradient-text">
              Stay in the Loop
            </h3>
          </div>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get the latest insights on digital marketing and tech trends delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto space-x-4">
            <Input 
              placeholder="Enter your email"
              className="flex-1 bg-card/50 border-white/20 focus:border-primary"
            />
            <Button className="bg-gradient-primary hover:shadow-glow">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary glow-effect" />
              <span className="text-xl font-space-grotesk font-bold gradient-text">
                Onemerge
              </span>
            </Link>
            <p className="text-muted-foreground">
              We blend cutting-edge technology with creative marketing strategies to help brands thrive in the digital landscape.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9666982032</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9110506703</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>onemerge.in@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center space-x-2 p-3 glass-card rounded-lg hover-lift group transition-all duration-300"
                  target='_blank'
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Onemerge. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;