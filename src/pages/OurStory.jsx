import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Instagram, Mic, Users, Trophy, Target, ArrowRight } from 'lucide-react';

const OurStory = () => {
  const team = [
    { name: "Sriharsha", role: "Director" }
    // { name: "Dinesh Kaarthik", role: "Director" },
  ];

  const whyChooseUs = [
    {
      title: "Data-Driven Creativity",
      description: "We don’t just market—we craft stories. By blending creativity with strategy, we shape brand narratives that connect deeply, inspire trust, and drive real impact."
    },
    {
      title: "Full-Stack Expertise",
      description: "From websites and apps to content and campaigns, we’re your single platform for everything digital. Our full-stack team ensures your brand’s presence is seamless, consistent, and future-ready."
    },
    {
      title: "Agile Approach",
      description: "In a fast-changing digital world, we move with speed and precision. Our adaptive strategies and cutting-edge tech solutions keep your brand ahead of the curve—always."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a spark of innovation to transforming digital landscapes
          </p>
        </div>
      </section>

      {/* The Spark */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">The Spark</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                It all began with two friends—one with the knack for digital marketing, the other with a passion for tech. We realized that brands don’t just need marketing campaigns or tech solutions in isolation—they need stories that live, breathe, and grow across platforms.
                By combining creativity, strategy, and technology, we built Onemerge: a space where brands don’t just show up—they stand out. With a strong foundation in Instagram organic growth and digital storytelling, we know how to turn simple ideas into unforgettable experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That conversation sparked the creation of Onemerge, where innovation meets execution,
                and where brands don't just get noticed—they get remembered.
              </p>
            </div>
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">How It All Started</h3>
                <p className="text-muted-foreground italic">
                  "We kept seeing brands struggle—either with marketing that lacked tech support, or tech that lacked a voice. That’s when we knew the answer was simple: blend both. One friend brought marketing insight, the other brought tech expertise, and together we created a crew that builds stories, not just strategies—stories powered by technology and amplified organically on platforms like Instagram."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Formula */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Formula</h2>
          <div className="flex items-center justify-center gap-8 mb-12">
            <Card className="glass-card border-primary/20 p-8">
              <h3 className="text-2xl font-bold text-primary">Marketing</h3>
            </Card>
            <span className="text-3xl font-bold text-primary">+</span>
            <Card className="glass-card border-primary/20 p-8">
              <h3 className="text-2xl font-bold text-primary">Technology</h3>
            </Card>
            <span className="text-3xl font-bold text-primary">=</span>
            <Card className="glass-card border-primary/20 p-8">
              <h3 className="text-2xl font-bold gradient-text">Success</h3>
            </Card>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build websites or run ads. We craft digital ecosystems where technology
            amplifies marketing, and marketing drives technological innovation.
          </p>
        </div>
      </section>

      {/* Instagram Playground */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Instagram className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Instagram is Our Playground</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've mastered the art of Instagram marketing, creating viral content and building engaged communities
              that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "10M+", label: "Impressions Generated" },
              { metric: "500K+", label: "Followers Gained" },
              { metric: "25%", label: "Average Engagement Rate" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card border-primary/20 text-center p-8">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Storytelling Edge */}
      {/* <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Mic className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">The Storytelling Edge</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every brand has a story. Our job is to find it, refine it, and tell it in a way that
                resonates with your audience on an emotional level.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just create content—we craft narratives that stick, inspire action,
                and build lasting connections between brands and their communities.
              </p>
            </div>
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Content Philosophy</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    Emotion-driven storytelling
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    Audience-first approach
                  </li>
                  <li className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    Performance-optimized content
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Meet the Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Meet the Minds Behind the Magic</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together creativity, technology, and strategy to deliver exceptional results.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="glass-card border-primary/20 text-center group hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Brands Choose Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="glass-card border-primary/20 group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Promise</h2>
          <Card className="glass-card border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
                "We don’t just deliver projects—we deliver transformations. At Onemerge, we build stories around your brand, not just marketing campaigns. Your success is our success, and we’re committed to going above and beyond to ensure your digital presence not only meets but exceeds your expectations."
              </p>
              <div className="text-lg font-medium gradient-text">
                — The Onemerge Team
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. Your digital transformation starts with a single conversation.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 h-auto group" style={{ background: 'var(--gradient-primary)' }}>
            Start Your Adventure
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default OurStory;