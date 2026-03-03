import { Globe, Smartphone, Zap, Code, Settings } from 'lucide-react';

const TechServices = () => {
  const techServices = [
    {
      icon: Globe,
      title: "High-Performance Web",
      description: "Bespoke web applications engineered for sub-second load times, flawless responsiveness, and maximum conversion rates.",
      spanClasses: "md:col-span-3 lg:col-span-2" // Spans 1/3 on large screens
    },
    {
      icon: Smartphone,
      title: "Native Mobile Engineering",
      description: "iOS and Android applications built with native precision to deliver frictionless user retention and zero latency.",
      spanClasses: "md:col-span-3 lg:col-span-2"
    },
    {
      icon: Zap,
      title: "Intelligent Automations",
      description: "Eliminate manual overhead. We build algorithmic workflows that connect your tech stack and run operations on autopilot.",
      spanClasses: "md:col-span-3 lg:col-span-2"
    },
    {
      icon: Code,
      title: "Custom Software Architecture",
      description: "Scalable backend systems and complex software solutions tailored to solve your most expensive technical bottlenecks.",
      spanClasses: "md:col-span-3 lg:col-span-3" // Spans 1/2 on large screens for a wider layout
    },
    {
      icon: Settings,
      title: "Enterprise CRM Ecosystems",
      description: "Custom-integrated platforms that centralize your operations and turn fragmented data into actionable revenue pipelines.",
      spanClasses: "md:col-span-3 lg:col-span-3"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200 text-gray-900 text-xs font-semibold tracking-wide uppercase">
            Technical Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-black max-w-3xl leading-[1.1]">
            Engineering built for <br className="hidden md:block" />
            <span className="text-gray-400">scale and dominance.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl">
            We write clean, efficient, and scalable code to turn your complex business problems into frictionless digital assets.
          </p>
        </div>

        {/* Dynamic Asymmetrical Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
          {techServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className={`glass-card p-8 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-default ${service.spanClasses}`}
              >
                {/* Icon Container: Flips to high-contrast black on hover */}
                <div className="shrink-0 flex items-center justify-center rounded-2xl bg-gray-100 transition-all duration-500 group-hover:bg-black group-hover:scale-110 group-hover:rotate-3 shadow-sm w-14 h-14 mb-6">
                  <IconComponent className="w-6 h-6 text-gray-900 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-space-grotesk font-bold text-black mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechServices;