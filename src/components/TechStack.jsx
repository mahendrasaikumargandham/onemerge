import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "PHP", "Laravel", "Express.js", "MongoDB"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "iOS", "Android", "Expo", "Ionic"],
      color: "from-purple-500 to-violet-500"
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Marketing",
      techs: ["Google Ads", "Facebook Ads", "SEMrush", "Mailchimp", "HubSpot", "Analytics"],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Design",
      techs: ["Figma", "Adobe Suite", "Sketch", "Canva", "After Effects", "Blender"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technologies We Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <Card key={index} className="group glass-card hover:scale-105 transition-all duration-300 hover:shadow-glow border-primary/20">
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-2 bg-background/50 rounded-lg text-sm text-center hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </div>
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

export default TechStack;