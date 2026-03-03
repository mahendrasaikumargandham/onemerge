import { useEffect, useRef, useState } from 'react';
import { Search, Users, TrendingUp, Video, Smartphone, Globe, Cog, Database } from 'lucide-react';

const ServicesScroll = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const digitalServices = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and organic traffic',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Engage your audience across all platforms',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that deliver results',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Compelling content that converts',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with your audience through trusted voices',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content that tells your story',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const techServices = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that perform',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile solutions',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Cog,
      title: 'Automations',
      description: 'Streamline your business processes',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Software Development',
      description: 'Custom software solutions for your needs',
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: Users,
      title: 'CRM Systems',
      description: 'Manage customer relationships effectively',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const allServices = [...digitalServices, ...techServices, ...digitalServices]; // Duplicate for seamless loop

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-20 overflow-hidden ">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            <span className="gradient-text">Our Services</span> in Motion
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            From digital marketing to cutting-edge technology, we offer comprehensive solutions that drive growth and innovation.
          </p>
        </div>
      </div>

      {/* Scrolling Services Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Services Scroll */}
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 service-card group transform-3d"
            >
              <div className="relative overflow-hidden">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Control Instructions */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Hover to pause • Services automatically scroll like a modern TV interface
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesScroll;