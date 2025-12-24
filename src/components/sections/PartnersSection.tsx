import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const companyLogos = [
  { name: "Google", slug: "google" },
  { name: "Microsoft", src: "/images/logos/microsoft.png" },
  { name: "Amazon", src: "/images/logos/amazon.png" },
  { name: "Meta", slug: "meta" },
  { name: "Apple", src: "/images/logos/apple.png" },
  { name: "Netflix", slug: "netflix" },
  { name: "Spotify", src: "/images/logos/spotify.png" },
  { name: "Adobe", src: "/images/logos/adobe.png" },
];

const companyLogos2 = [
  { name: "Stripe", slug: "stripe" },
  { name: "Slack", src: "/images/logos/slack.png" },
  { name: "Figma", slug: "figma" },
  { name: "Notion", slug: "notion" },
  { name: "GitHub", slug: "github" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "Uber", slug: "uber" },
];

type LogoProps = {
  name: string;
  slug?: string;
  src?: string;
};

const LogoCard = ({ name, slug, src }: LogoProps) => {
  return (
    <div
      className="relative flex-shrink-0 w-20 h-20 rounded-full
                 bg-secondary/60 border border-border/60
                 flex items-center justify-center
                 transition-all duration-300
                 hover:scale-110 hover:border-primary/40"
    >
      {src ? (
        // ✅ Local image
        <img
          src={src}
          alt={`${name} logo`}
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
      ) : (
        // ✅ CDN fallback
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={`${name} logo`}
          className="w-10 h-10 object-contain invert opacity-90"
          loading="lazy"
        />
      )}
    </div>
  );
};

const PartnersSection = () => {
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

  return (
    <section ref={sectionRef} className="section-snap relative flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(68_100%_53%_/_0.03)_0%,transparent_50%)]" />
      
      <div className="w-full">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto px-6 mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block glass-card px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Partner Companies
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Connect With Industry Leaders
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Our network includes top companies offering internships and mentorship opportunities 
            to help you launch your career.
          </p>

          <Button variant="hero" size="lg">
            Explore All
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Logo Rows */}
        <div className="space-y-8 overflow-hidden">
          {/* Top Row - Scrolls Left */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-8 animate-scroll-left">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <LogoCard key={`top-${index}`} {...logo} />
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolls Right */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-8 animate-scroll-right">
              {[...companyLogos2, ...companyLogos2].map((logo, index) => (
                <LogoCard key={`bottom-${index}`} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
