import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BadgeCheck, Briefcase, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const TypeWriter = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [isVisible, text, delay]);

  return (
    <span ref={ref}>
      {displayText}
      <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
    </span>
  );
};

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with industry professionals who guide your career journey.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Companies",
    description: "All partner companies are vetted for quality internship experiences.",
  },
  {
    icon: Briefcase,
    title: "Real Projects",
    description: "Work on actual projects that matter, building a portfolio that stands out.",
  },
  {
    icon: TrendingUp,
    title: "Skill Tracking",
    description: "Monitor your growth with detailed analytics and progress reports.",
  },
];

const ExploreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-snap relative flex flex-col justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(68_100%_53%_/_0.02)_0%,transparent_60%)]" />
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Upper Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Discover Opportunities
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight min-h-[180px]">
                <TypeWriter 
                  text="Your Gateway to Career Growth & Skill Development" 
                  delay={40}
                />
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience the power of SkillBridge, where ambitious students meet 
                transformative opportunities. Our platform empowers you to discover 
                internships, develop real-world skills, and launch your career.
              </p>

              <Button variant="hero" size="lg">
                Explore
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Right - Visual Placeholder */}
            <div
              className={`relative ${
                isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'
              }`}
            >
              <div className="aspect-square rounded-2xl bg-secondary/50 border border-border overflow-hidden relative">

                {/* 🔹 Image Layer */}
                <img
                  src="/images/SkillBridge.png"  // <-- your image path
                  alt="SkillBridge Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Optional overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section - Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 border-t border-border ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
