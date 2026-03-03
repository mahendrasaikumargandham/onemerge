import { MonitorX, Code2, Replace, LayoutTemplate, SearchX, GaugeCircle } from 'lucide-react';

const challengesData = [
  {
    id: 1,
    title: "Forgettable Interfaces",
    description: "A clunky, outdated website doesn't just look bad—it actively bleeds conversions and repels high-tier clients before they even speak to you.",
    icon: <MonitorX className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />,
    tag: "Friction"
  },
  {
    id: 2,
    title: "The Talent Deficit",
    description: "Hiring elite in-house engineers is aggressively expensive and incredibly slow. While you recruit, technical debt piles up.",
    icon: <Code2 className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />,
    tag: "Overhead"
  },
  {
    id: 3,
    title: "Operational Drag",
    description: "Relying on duct-taped software stacks and manual workflows destroys your team's bandwidth and eats directly into your profit margins.",
    icon: <Replace className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />,
    tag: "Bottleneck"
  },
  {
    id: 4,
    title: "Diluted Brand Identity",
    description: "Inconsistent design language across your web and mobile platforms creates cognitive dissonance, making a premium service look amateur.",
    icon: <LayoutTemplate className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />,
    tag: "Perception"
  },
  {
    id: 5,
    title: "Digital Invisibility",
    description: "Having a stellar product means nothing if poor SEO and weak digital architecture hide you from search engines and your ideal buyers.",
    icon: <SearchX className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />,
    tag: "Reach"
  },
  {
    id: 6,
    title: "Rigid Infrastructure",
    description: "Off-the-shelf templates and drag-and-drop builders break when you try to scale. You need bespoke architecture built for your next phase of growth.",
    icon: <GaugeCircle className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />,
    tag: "Scale"
  }
];

const Challenges = () => {
  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-black text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
            The Bottlenecks
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-black max-w-3xl leading-[1.1]">
            What's holding your <br className="hidden md:block" />
            <span className="text-gray-400">growth hostage?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl">
            You have the vision, but fragmented design and technical debt are slowing you down. Here are the roadblocks we eliminate.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challengesData.map((challenge) => (
            <div 
              key={challenge.id} 
              className="glass-card rounded-3xl p-3 hover-lift group cursor-default"
            >
              {/* Top Image/Graphic Area */}
              <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex flex-col items-center justify-center border border-gray-200/50 mb-6 transition-colors duration-300 group-hover:bg-gray-100/80 overflow-hidden relative">
                
                {/* Subtle background glow effect on hover to make it feel premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-10">
                  {challenge.icon}
                </div>
              </div>

              {/* Bottom Text Area */}
              <div className="px-3 pb-4">
                <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 rounded-full border border-red-100/50">
                  {challenge.tag}
                </span>
                <h3 className="text-xl font-space-grotesk font-bold text-black mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Challenges;