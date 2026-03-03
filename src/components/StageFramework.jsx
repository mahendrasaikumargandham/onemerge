// import React, { useState } from 'react';
// import { Search, Target, Globe, Lightbulb, TrendingUp } from 'lucide-react';

// const StageFramework = () => {
//   const [activeStage, setActiveStage] = useState(0);

//   const stages = [
//     {
//       letter: 'S',
//       title: 'Strategize',
//       description: 'We dive deep into your business goals and target audience to create a comprehensive strategy.',
//       icon: Target,
//       details: [
//         'Market research and analysis',
//         'Competitor evaluation',
//         'Goal setting and KPI definition',
//         'Strategic roadmap creation'
//       ]
//     },
//     {
//       letter: 'T',
//       title: 'Target',
//       description: 'Identify and understand your ideal customers through data-driven insights.',
//       icon: Search,
//       details: [
//         'Audience segmentation',
//         'Persona development',
//         'Behavioral analysis',
//         'Channel optimization'
//       ]
//     },
//     {
//       letter: 'A',
//       title: 'Activate',
//       description: 'Launch powerful campaigns across multiple channels to reach your audience.',
//       icon: Globe,
//       details: [
//         'Multi-channel campaigns',
//         'Content deployment',
//         'Ad placement and optimization',
//         'Launch coordination'
//       ]
//     },
//     {
//       letter: 'G',
//       title: 'Generate',
//       description: 'Create compelling content and experiences that drive engagement and conversions.',
//       icon: Lightbulb,
//       details: [
//         'Creative content production',
//         'User experience optimization',
//         'Lead generation systems',
//         'Conversion rate optimization'
//       ]
//     },
//     {
//       letter: 'E',
//       title: 'Evolve',
//       description: 'Continuously optimize and scale your digital presence based on performance data.',
//       icon: TrendingUp,
//       details: [
//         'Performance monitoring',
//         'A/B testing and optimization',
//         'Scaling successful campaigns',
//         'Strategic pivoting'
//       ]
//     }
//   ];

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
//             Our <span className="gradient-text">S.T.A.G.E</span> Framework
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             A proven methodology that transforms businesses through strategic digital innovation.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Framework Visualization */}
//           <div className="space-y-6">
//             {stages.map((stage, index) => (
//               <div
//                 key={index}
//                 className={`service-card cursor-pointer transition-all duration-500 ${
//                   activeStage === index ? 'ring-2 ring-primary' : ''
//                 }`}
//                 onClick={() => setActiveStage(index)}
//                 onMouseEnter={() => setActiveStage(index)}
//               >
//                 <div className="flex items-start space-x-6">
//                   {/* Stage Letter */}
//                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
//                     activeStage === index 
//                       ? 'bg-gradient-primary text-white shadow-glow' 
//                       : 'bg-card border border-white/20 text-muted-foreground'
//                   }`}>
//                     {stage.letter}
//                   </div>

//                   {/* Stage Content */}
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-3">
//                       <stage.icon className={`h-6 w-6 transition-colors duration-300 ${
//                         activeStage === index ? 'text-primary' : 'text-muted-foreground'
//                       }`} />
//                       <h3 className={`text-xl font-semibold transition-colors duration-300 ${
//                         activeStage === index ? 'text-primary' : 'text-foreground'
//                       }`}>
//                         {stage.title}
//                       </h3>
//                     </div>
//                     <p className="text-muted-foreground mb-4">
//                       {stage.description}
//                     </p>
                    
//                     {/* Details - Show only for active stage */}
//                     <div className={`transition-all duration-500 overflow-hidden ${
//                       activeStage === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
//                     }`}>
//                       <ul className="space-y-2">
//                         {stage.details.map((detail, idx) => (
//                           <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
//                             <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
//                             <span>{detail}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Active Stage Details */}
//           <div className="lg:sticky lg:top-8">
//             <div className="glass-card p-8 rounded-3xl">
//               <div className="text-center mb-8">
//                 <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow">
//                   {React.createElement(stages[activeStage].icon, { 
//                     className: "h-12 w-12 text-white" 
//                   })}
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4 gradient-text">
//                   {stages[activeStage].title}
//                 </h3>
//                 <p className="text-muted-foreground text-lg">
//                   {stages[activeStage].description}
//                 </p>
//               </div>

//               {/* Progress Indicator */}
//               <div className="space-y-4">
//                 <div className="flex justify-between text-sm text-muted-foreground">
//                   <span>Framework Progress</span>
//                   <span>{Math.round(((activeStage + 1) / stages.length) * 100)}%</span>
//                 </div>
//                 <div className="w-full bg-secondary rounded-full h-2">
//                   <div 
//                     className="h-2 bg-gradient-primary rounded-full transition-all duration-500"
//                     style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Stage Details */}
//               <div className="mt-8 space-y-3">
//                 {stages[activeStage].details.map((detail, index) => (
//                   <div 
//                     key={index}
//                     className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 transition-all duration-300 hover:bg-background/80"
//                   >
//                     <div className="w-2 h-2 bg-primary rounded-full"></div>
//                     <span className="text-sm">{detail}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StageFramework;
import React, { useState } from "react";
import { Search, Target, Globe, Lightbulb, TrendingUp } from "lucide-react";

const StageFramework = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      letter: "S",
      title: "Strategize",
      description:
        "We dive deep into your business goals and target audience to create a comprehensive strategy.",
      icon: Target,
      details: [
        "Market research and analysis",
        "Competitor evaluation",
        "Goal setting and KPI definition",
        "Strategic roadmap creation",
      ],
    },
    {
      letter: "T",
      title: "Target",
      description:
        "Identify and understand your ideal customers through data-driven insights.",
      icon: Search,
      details: [
        "Audience segmentation",
        "Persona development",
        "Behavioral analysis",
        "Channel optimization",
      ],
    },
    {
      letter: "A",
      title: "Activate",
      description:
        "Launch powerful campaigns across multiple channels to reach your audience.",
      icon: Globe,
      details: [
        "Multi-channel campaigns",
        "Content deployment",
        "Ad placement and optimization",
        "Launch coordination",
      ],
    },
    {
      letter: "G",
      title: "Generate",
      description:
        "Create compelling content and experiences that drive engagement and conversions.",
      icon: Lightbulb,
      details: [
        "Creative content production",
        "User experience optimization",
        "Lead generation systems",
        "Conversion rate optimization",
      ],
    },
    {
      letter: "E",
      title: "Evolve",
      description:
        "Continuously optimize and scale your digital presence based on performance data.",
      icon: TrendingUp,
      details: [
        "Performance monitoring",
        "A/B testing and optimization",
        "Scaling successful campaigns",
        "Strategic pivoting",
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-space-grotesk">
            Our <span className="gradient-text">S.T.A.G.E</span> Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology that transforms businesses through strategic
            digital innovation.
          </p>
        </div>

        {/* Horizontal STAGE Bar */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          {stages.map((stage, index) => (
            <div
              key={index}
              onClick={() => setActiveStage(index)}
              onMouseEnter={() => setActiveStage(index)}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold cursor-pointer transition-all duration-300 relative
                ${
                  activeStage === index
                    ? "bg-gradient-primary text-white shadow-lg scale-110"
                    : "bg-card text-muted-foreground border border-white/20 hover:scale-105 hover:text-primary"
                }`}
            >
              {stage.letter}
              {activeStage === index && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Stage Display */}
        <div className="max-w-5xl mx-auto glass-card p-10 rounded-3xl shadow-lg transition-all duration-500">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow">
              {React.createElement(stages[activeStage].icon, {
                className: "h-12 w-12 text-white",
              })}
            </div>
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              {stages[activeStage].title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {stages[activeStage].description}
            </p>
          </div>

          {/* Progress bar */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Framework Progress</span>
              <span>
                {Math.round(((activeStage + 1) / stages.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="h-2 bg-gradient-primary rounded-full transition-all duration-500"
                style={{
                  width: `${((activeStage + 1) / stages.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Stage details */}
          <div className="grid sm:grid-cols-2 gap-4">
            {stages[activeStage].details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageFramework;
