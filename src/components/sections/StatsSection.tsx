import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ end, suffix = "", duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "OPPORTUNITIES POSTED", value: 1000, suffix: "+", color: "text-gradient" },
    { label: "PARTNER COMPANIES", value: 40, suffix: "+", color: "text-primary" },
    { label: "ACTIVE INTERNS", value: 2500, suffix: "+", color: "text-muted-foreground" },
  ];

  return (
    <section ref={sectionRef} className="section-snap relative flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(68_100%_53%_/_0.03)_0%,transparent_50%)]" />
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-left' : 'opacity-0'}`}>
            <div className="inline-block">
              <span className="glass-card px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground">
                Our Stats So Far
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Join The<br />
              Community Of<br />
              <span className="text-gradient">Thousands</span>
            </h2>

            <Button variant="hero" size="lg">
              Join Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className={`space-y-12 ${isVisible ? 'animate-fade-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold ${stat.color}`}>
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2000 + index * 300} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
