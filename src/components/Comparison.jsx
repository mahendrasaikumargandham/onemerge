import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "Investment Model",
    onemerge: { text: "Predictable, flat-rate sprints" },
    inHouse: { text: "High overhead (benefits, taxes)" },
    agency: { text: "Opaque billing & scope creep" }
  },
  {
    feature: "Caliber of Talent",
    onemerge: { text: "Vetted senior architects only" },
    inHouse: { text: "Hit-or-miss recruitment" },
    agency: { text: "Bait-and-switch with junior devs" }
  },
  {
    feature: "Time to Market",
    onemerge: { text: "Rapid iteration & deployment" },
    inHouse: { text: "Months of painful onboarding" },
    agency: { text: "Lost in endless feedback loops" }
  },
  {
    feature: "Operational Agility",
    onemerge: { text: "Scale up or pause on demand" },
    inHouse: { text: "Tied down by fixed payroll" },
    agency: { text: "Locked into ironclad contracts" }
  },
  {
    feature: "Product Quality",
    onemerge: { text: "Bespoke, pixel-perfect & scalable" },
    inHouse: { text: "Constrained by internal limits" },
    agency: { text: "Recycled, cookie-cutter templates" }
  },
  {
    feature: "Strategic Alignment",
    onemerge: { text: "Acts as your technical co-founder" },
    inHouse: { text: "Siloed departments & red tape" },
    agency: { text: "Treated like just another ticket" }
  }
];

const Comparison = () => {
  return (
    <section className="relative py-24 lg:py-32 z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200 text-gray-900 text-xs font-semibold tracking-wide uppercase">
            The Paradigm Shift
          </div>
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-black max-w-3xl leading-[1.1]">
            Stop settling for slow execution <br className="hidden md:block" />
            <span className="text-gray-400">and bloated retainers.</span>
          </h2>
        </div>

        {/* Premium Outer Bezel (Frosted Glass Container) */}
        <div className="p-2 md:p-3 lg:p-4 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] rounded-[2.5rem] lg:rounded-[3rem] w-full overflow-x-auto custom-scrollbar">
          
          {/* Inner Unified Table */}
          <div className="min-w-[800px] w-full bg-white rounded-[2rem] lg:rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
            
            {/* Header Row */}
            <div className="grid grid-cols-[1.2fr_1.5fr_1fr_1fr] bg-gray-50/50 border-b border-gray-100 p-6 lg:p-8 items-center">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">
                Evaluation Criteria
              </div>
              <div className="text-xl md:text-2xl font-space-grotesk font-bold text-black flex items-center gap-2">
                OneMerge
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-500">
                In-House Team
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-500">
                Traditional Agencies
              </div>
            </div>

            {/* Body Rows */}
            <div className="divide-y divide-gray-100">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-[1.2fr_1.5fr_1fr_1fr] p-6 lg:p-8 items-center hover:bg-gray-50/50 transition-colors duration-300"
                >
                  
                  {/* Feature Name */}
                  <div className="text-[15px] md:text-base font-medium text-gray-900 pl-2">
                    {row.feature}
                  </div>

                  {/* OneMerge Highlighted Cell */}
                  <div className="flex items-center gap-3 pr-4">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center shrink-0 shadow-md">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] md:text-base font-bold text-black">
                      {row.onemerge.text}
                    </span>
                  </div>

                  {/* In-House Cell */}
                  <div className="flex items-center gap-2.5 text-gray-400 pr-4">
                    <X className="w-4 h-4 shrink-0 text-gray-300" strokeWidth={2.5} />
                    <span className="text-sm md:text-[15px] leading-tight">
                      {row.inHouse.text}
                    </span>
                  </div>

                  {/* Agency Cell */}
                  <div className="flex items-center gap-2.5 text-gray-400 pr-4">
                    <X className="w-4 h-4 shrink-0 text-gray-300" strokeWidth={2.5} />
                    <span className="text-sm md:text-[15px] leading-tight">
                      {row.agency.text}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;