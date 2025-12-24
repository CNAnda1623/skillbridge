import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-snap relative flex flex-col overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(68_100%_53%_/_0.05)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      {/* Floating grid elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border border-border/30 rounded-xl opacity-40 animate-float" />
        <div className="absolute top-32 right-32 w-12 h-12 border border-primary/20 rounded-lg opacity-30 animate-float animation-delay-200" />
        <div className="absolute bottom-40 left-40 w-20 h-20 border border-border/20 rounded-2xl opacity-30 animate-float animation-delay-400" />
        <div className="absolute top-1/2 right-20 w-14 h-14 border border-primary/10 rounded-xl opacity-40 animate-float animation-delay-300" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 opacity-0 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-display">S</span>
            </div>
            <span className="text-xl font-display font-semibold text-foreground">SkillBridge</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1 glass-card rounded-full px-2 py-2 opacity-0 animate-fade-up animation-delay-100">
            {["Explore", "Opportunities", "Community", "Companies", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Sign In */}
          <Button variant="nav" className="opacity-0 animate-fade-up animation-delay-200">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
            Your Gateway to{" "}
            <span className="text-gradient">Real-World</span>
            <br />
            Opportunities
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-300">
            SkillBridge connects ambitious students with internships, hands-on projects, 
            and industry-leading companies. Build your career, one opportunity at a time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl">
              Explore Internships
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
