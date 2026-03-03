import { Search, Users, TrendingUp, PenTool, Link2, Camera, Play } from 'lucide-react';

const MarketingServices = () => {
  const marketingServices = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Dominate search rankings and capture high-intent traffic with technical, data-driven SEO architectures."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build a cult-like following. We craft authoritative social presences that command attention and drive loyalty."
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Precision ad campaigns engineered for maximum ROI. Stop paying for clicks and start paying for conversions."
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-fidelity copywriting and visual assets that articulate your value proposition and position you as an industry leader."
    },
    {
      icon: Link2,
      title: "Affiliate Marketing",
      description: "Scale your revenue through elite partnership networks and strategic performance-based alliances."
    },
    {
      icon: Camera,
      title: "Influencer Marketing",
      description: "Leverage curated creators to bypass ad-blockers and tap directly into highly engaged, niche demographics."
    },
    {
      icon: Play,
      title: "Cinematic Video Production",
      description: "Transform your brand narrative with studio-grade video production. From high-converting VSLs (Video Sales Letters) to breathtaking brand documentaries, we produce visual assets that make your competitors look obsolete.",
      featured: true // Triggers the wide bento-box layout
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200 text-gray-900 text-xs font-semibold tracking-wide uppercase">
            Our Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-black max-w-3xl leading-[1.1]">
            Marketing engineered for <br className="hidden md:block" />
            <span className="text-gray-400">compounding growth.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl">
            We don't just run campaigns; we build scalable digital ecosystems designed to capture attention and convert it into revenue.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {marketingServices.map((service, index) => {
            const IconComponent = service.icon;
            const isFeatured = service.featured;

            return (
              <div 
                key={index} 
                className={`glass-card p-8 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-default ${
                  isFeatured ? 'md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 bg-gradient-to-br from-white/80 to-gray-50/80' : ''
                }`}
              >
                {/* Icon Container: Light gray, turning sleek black on hover */}
                <div className={`shrink-0 flex items-center justify-center rounded-2xl bg-gray-100 transition-all duration-500 group-hover:bg-black group-hover:scale-110 group-hover:rotate-3 shadow-sm ${
                  isFeatured ? 'w-20 h-20' : 'w-14 h-14 mb-6'
                }`}>
                  <IconComponent className={`transition-colors duration-500 group-hover:text-white ${
                    isFeatured ? 'w-8 h-8 text-gray-900' : 'w-6 h-6 text-gray-900'
                  }`} strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className={`font-space-grotesk font-bold text-black mb-3 transition-colors duration-300 ${
                    isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-500 leading-relaxed ${
                    isFeatured ? 'text-base lg:text-lg max-w-3xl' : 'text-sm'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Decorative Arrow (Only on standard cards) */}
                {!isFeatured && (
                  <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-black" strokeWidth={2} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MarketingServices;