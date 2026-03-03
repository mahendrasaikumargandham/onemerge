import { ArrowUpRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { value: '3x', label: 'Faster Time-to-Market' },
    { value: '45+', label: 'Digital Products Launched' },
    { value: '99%', label: 'Client Retention Rate' },
  ];

  return (
    /* FIX: Changed justify-center to justify-start.
       FIX: Added pt-32 (mobile) and lg:pt-48 (desktop) to eliminate the gap 
       while preventing overlap with the fixed header.
    */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 lg:pt-4 pb-2 overflow-hidden">
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Sleek 'Live' Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm mb-8 animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          <span className="text-xs font-semibold text-gray-900 uppercase tracking-widest">
            Accepting New Partners
          </span>
        </div>

        {/* Massive Cinematic Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-space-grotesk font-bold tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="text-black">We build digital assets</span>
          <br />
          <span className="text-gray-400">that dominate markets.</span>
        </h1>

        {/* Authoritative Subheading */}
        <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          Stop settling for slow execution and cookie-cutter templates. We engineer bespoke web platforms, mobile apps, and scalable systems for elite brands.
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-16 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          
          <Link 
            to="/contact" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white pl-8 pr-3 py-3 rounded-full text-[15px] font-semibold transition-all duration-500 ease-out hover:bg-gray-900 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 group"
          >
            Start Your Project
            <div className="bg-white text-black rounded-full p-2 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/40 backdrop-blur-md text-black px-8 py-4 rounded-full text-[15px] font-semibold border border-gray-200 transition-all duration-500 ease-out hover:bg-white hover:shadow-lg hover:-translate-y-1 group">
            <Play className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" />
            View Our Reel
          </button>
        </div>

        {/* Micro-Trust Indicator */}
        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-600">
            Trusted by <span className="text-black font-bold">100+</span> forward-thinking founders
          </p>
        </div>
      </div>

      {/* Floating Glass Stats Bar */}
      <div className="relative bottom-0 left-0 right-0 w-full m-5 px-6 pb-6 lg:pb-8 hidden md:block animate-slide-up" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-6 lg:p-8 flex items-center justify-between border-white/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full px-4 border-r last:border-0 border-gray-200/50">
              <div className="text-3xl lg:text-4xl font-space-grotesk font-bold text-black mb-1">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm font-semibold text-gray-500 uppercase tracking-widest text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;