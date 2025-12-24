import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail("");
  };

  const footerLinks = {
    Company: ["About Us", "Contact", "Careers", "Blog"],
    Resources: ["Opportunities", "Community", "Companies", "Events"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer ref={sectionRef} className="relative bg-card border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Newsletter Section */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 pb-16 border-b border-border ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Join Our Newsletter
            </h3>
            <p className="text-muted-foreground">
              Stay updated with the latest internship opportunities, career tips, 
              and community events. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="hero" type="submit">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Feedback */}
          <div className="glass-card rounded-2xl p-8 flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-foreground mb-2">
                Your feedback is much appreciated. Send an email to{" "}
                <a href="mailto:hello@skillbridge.com" className="text-primary hover:underline">
                  hello@skillbridge.com
                </a>{" "}
                for enquiries.
              </p>
              <a href="mailto:hello@skillbridge.com" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                SEND MESSAGE
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className={`pt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-display">S</span>
              </div>
              <span className="text-xl font-display font-semibold text-foreground">SkillBridge</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Connecting students with internships and opportunities from leading companies worldwide.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors hover:text-primary"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={`mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 ${isVisible ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground">
            © 2024 SkillBridge. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms and Conditions
            </a>
            <span className="text-border">|</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
