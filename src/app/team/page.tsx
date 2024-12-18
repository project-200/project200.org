import CoreValues from "@/components/ui/coreValues";
import HeroSection from "@/components/ui/heroSection";
import TeamSection from "@/components/ui/team";

export default function Team() {
  return (
    <div className="h-full">
      <HeroSection
        imageUrl="/team_hero.png"
        title="People Committed to Changing Lives"
        description="Get to know the dedicated individuals who are driving our mission to uplift those in need."
      />
      <TeamSection />
      <CoreValues />
    </div>
  );
}
