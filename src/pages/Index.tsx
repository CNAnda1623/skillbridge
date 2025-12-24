import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ExploreSection from "@/components/sections/ExploreSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <ExploreSection />
      <PartnersSection />
      <FooterSection />
    </main>
  );
};

export default Index;
