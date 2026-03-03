import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const Blogs = () => {
  const featuredPost = {
    title: "The Future of Digital Marketing: AI and Personalization",
    excerpt: "Discover how artificial intelligence is revolutionizing the way brands connect with their audiences through hyper-personalized experiences.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Digital Marketing",
    image: "/api/placeholder/800/400"
  };

  const blogPosts = [
    {
      title: "Building Responsive Web Apps with React and Tailwind",
      excerpt: "Learn the best practices for creating beautiful, responsive web applications using modern development tools.",
      author: "Alex Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Web Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Social Media Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with these emerging social media trends that successful brands are already adopting.",
      author: "Emma Thompson",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Social Media",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Automation Tools Every Business Should Use",
      excerpt: "Streamline your operations and boost productivity with these essential automation tools and techniques.",
      author: "Mike Rodriguez",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Automation",
      image: "/api/placeholder/400/300"
    },
    {
      title: "The Psychology Behind Effective Content Marketing",
      excerpt: "Understanding consumer psychology can dramatically improve your content marketing results. Here's how.",
      author: "Emma Thompson",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Content Marketing",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "With mobile traffic dominating the web, mobile-first design isn't just recommended—it's essential.",
      author: "Alex Chen",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Data-Driven Marketing: Making Decisions That Count",
      excerpt: "Transform your marketing strategy with data-driven insights that lead to measurable business growth.",
      author: "Mike Rodriguez",
      date: "November 30, 2024",
      readTime: "8 min read",
      category: "Analytics",
      image: "/api/placeholder/400/300"
    }
  ];

  const categories = [
    "All Posts",
    "Digital Marketing",
    "Web Development",
    "Social Media",
    "Automation",
    "Content Marketing",
    "Design",
    "Analytics"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and trends from the world of digital marketing and technology
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Featured Post</h2>
          </div>
          
          <Card className="glass-card border-primary/20 overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-12 flex items-center">
                <div className="h-48 w-full bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Featured Image</span>
                </div>
              </div>
              <CardContent className="p-12">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="group" style={{background: 'var(--gradient-primary)'}}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary text-primary-foreground" : "border-primary/50 hover:border-primary"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="glass-card border-primary/20 group hover:scale-105 transition-all duration-300 hover:shadow-glow">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                  <div className="h-32 w-full bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Blog Image</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3" variant="secondary">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button size="sm" variant="ghost" className="group text-primary hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get the latest insights, tips, and trends delivered straight to your inbox
          </p>
          <Card className="glass-card border-primary/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button style={{background: 'var(--gradient-primary)'}}>
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;