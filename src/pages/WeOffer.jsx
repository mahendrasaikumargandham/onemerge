import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MarketingServices from '@/components/MarketingServices';
import TechServices from '@/components/TechServices';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WeOffer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            What We Offer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions that combine marketing expertise with cutting-edge technology
          </p>
          <Button size="lg" className="text-lg px-8 py-4 h-auto group" style={{background: 'var(--gradient-primary)'}}>
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </section>

      <MarketingServices />
      <TechServices />
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can elevate your brand and drive real results
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              View Our Portfolio
            </Button>
            <Button size="lg" style={{background: 'var(--gradient-primary)'}}>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeOffer;