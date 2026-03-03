import { Target, Zap, ShieldCheck, Lightbulb, Combine, UserCheck } from 'lucide-react';

const reasonsData = [
  {
    id: 1,
    title: "Results-Obsessed",
    description: "We don't just write code or push pixels. Every product we build is reverse-engineered from your core business goals.",
    icon: <Target className="w-6 h-6 text-white" strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "Velocity & Precision",
    description: "Slow execution kills innovation. We deploy agile frameworks to deliver high-fidelity results in weeks, not months.",
    icon: <Zap className="w-6 h-6 text-white" strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "Radical Transparency",
    description: "No hidden fees, no scope creep, and no surprises. You get honest, upfront pricing and crystal-clear project roadmaps.",
    icon: <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
  },
  {
    id: 4,
    title: "Elite Engineering",
    description: "We don't outsource to junior devs. Your project is handled exclusively by senior talent who solve complex problems daily.",
    icon: <Lightbulb className="w-6 h-6 text-white" strokeWidth={1.5} />
  },
  {
    id: 5,
    title: "Frictionless Workflow",
    description: "Seamless communication. You have direct access to the team and real-time visibility into every stage of development.",
    icon: <Combine className="w-6 h-6 text-white" strokeWidth={1.5} />
  },
  {
    id: 6,
    title: "Direct Expert Access",
    description: "Skip the account managers. You collaborate directly with the architects and designers building your product.",
    icon: <UserCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200 text-gray-900 text-xs font-semibold tracking-wide uppercase">
            The OneMerge Advantage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-black max-w-3xl leading-[1.1]">
            Built for impact. <br className="hidden md:block" />
            <span className="text-gray-400">Engineered for scale.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl">
            Discover what happens when you partner with a technical team that treats your business like their own.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasonsData.map((reason) => (
            <div 
              key={reason.id} 
              className="glass-card relative p-8 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-default"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Icon Badge */}
              <div className="relative w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-black/10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {reason.icon}
              </div>

              {/* Text Content */}
              <div className="relative">
                <h3 className="text-xl font-space-grotesk font-bold text-black mb-3 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-8 right-8 w-8 h-8 opacity-0 -translate-y-4 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                <div className="w-full h-full border-t-2 border-r-2 border-gray-200 rounded-tr-lg" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;