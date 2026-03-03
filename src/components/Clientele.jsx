import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Clientele = () => {
  const clients = [
    {
      name: "TechStartup Inc.",
      industry: "Technology",
      testimonial: "Onemerge transformed our digital presence completely. Their strategic approach delivered exceptional results.",
      rating: 5,
      logo: "TS"
    },
    {
      name: "Fashion Forward",
      industry: "E-commerce",
      testimonial: "Outstanding social media management and content creation. Our engagement increased by 300%.",
      rating: 5,
      logo: "FF"
    },
    {
      name: "Green Energy Co.",
      industry: "Renewable Energy",
      testimonial: "Professional web development and SEO services that boosted our online visibility significantly.",
      rating: 5,
      logo: "GE"
    },
    {
      name: "Local Restaurant",
      industry: "Food & Beverage",
      testimonial: "Amazing video production and influencer campaigns. Our customer base doubled in 6 months.",
      rating: 5,
      logo: "LR"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Valued Clientele
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses across industries to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="group glass-card hover:scale-105 transition-all duration-300 hover:shadow-glow border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {client.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{client.industry}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/30" />
                  <p className="text-muted-foreground italic mb-4 pl-6">
                    "{client.testimonial}"
                  </p>
                </div>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: client.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientele;