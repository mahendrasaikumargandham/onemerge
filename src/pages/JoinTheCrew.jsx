import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Code, Palette, TrendingUp, Heart, Coffee } from 'lucide-react';

const JoinTheCrew = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      expertise: "Brand Strategy & Design",
      description: "Leads our creative vision with 8+ years in brand development and visual storytelling.",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      role: "Tech Lead",
      expertise: "Full-Stack Development",
      description: "Expert in React, Node.js, and cloud architecture with a passion for clean code.",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      role: "Marketing Guru",
      expertise: "Performance Marketing",
      description: "Data-driven marketer who has generated millions in revenue through strategic campaigns.",
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Content Strategist",
      expertise: "Storytelling & Content",
      description: "Master storyteller who creates compelling narratives that convert and engage.",
      avatar: "ET"
    }
  ];

  const openPositions = [
    {
      title: "Senior React Developer",
      type: "Full-time",
      icon: Code,
      requirements: ["5+ years React experience", "TypeScript proficiency", "Modern CSS/Tailwind", "Team collaboration"],
      description: "Join our tech team to build cutting-edge web applications for global brands."
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      icon: Palette,
      requirements: ["Figma expertise", "Design systems", "User research", "Prototype creation"],
      description: "Create beautiful, user-centered designs that drive engagement and conversions."
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      icon: TrendingUp,
      requirements: ["Google Ads certified", "Social media marketing", "Analytics expertise", "Content creation"],
      description: "Drive growth for our clients through innovative digital marketing strategies."
    },
    {
      title: "Content Creator",
      type: "Part-time",
      icon: Heart,
      requirements: ["Video editing", "Photography", "Social media", "Creative writing"],
      description: "Create compelling visual and written content that tells amazing brand stories."
    }
  ];

  const benefits = [
    "Competitive salary & equity",
    "Flexible remote work",
    "Professional development budget",
    "Health & wellness benefits",
    "Creative freedom & autonomy",
    "Latest tech & equipment"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Join the Crew
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team that's revolutionizing the digital marketing and technology landscape
          </p>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Our Dedicated Team</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals who make the magic happen every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card border-primary/20 group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground font-medium mb-3">{member.expertise}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Open Positions */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Coffee className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Open Positions</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to make an impact? Check out our current opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="glass-card border-primary/20 group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <position.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full group" style={{background: 'var(--gradient-primary)'}}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why You'll Love Working Here</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where creativity thrives and careers flourish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card border-primary/20 text-center p-6 group hover:scale-105 transition-all duration-300">
                <p className="font-medium group-hover:text-primary transition-colors">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
                <p className="text-muted-foreground">
                  We're always looking for talented individuals. Send us your information and let's talk!
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Your last name" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Position of Interest</label>
                  <Input placeholder="What role are you interested in?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio/LinkedIn URL</label>
                  <Input placeholder="https://your-portfolio.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about yourself *</label>
                  <Textarea 
                    placeholder="Share your experience, passion, and why you'd be a great fit for Onemerge..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg" style={{background: 'var(--gradient-primary)'}}>
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinTheCrew;