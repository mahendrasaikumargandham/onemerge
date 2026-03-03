import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesScroll from '@/components/ServicesScroll';
import StageFramework from '@/components/StageFramework';
import MarketingServices from '@/components/MarketingServices';
import TechServices from '@/components/TechServices';
import Clientele from '@/components/Clientele';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import Challenges from '../components/Challenges';
import WhyChooseUs from '../components/WhyChooseUs';
import Comparison from '../components/Comparison';

const Index = () => {
  console.log('Index component is rendering');
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <ServicesScroll /> */}
      <StageFramework />
      <Challenges />
      <WhyChooseUs />
      <MarketingServices />
      <TechServices />
      <Comparison />
      {/* <Clientele /> */}
      {/* <TechStack /> */}
      <Footer />
    </div>
  );
};

export default Index;