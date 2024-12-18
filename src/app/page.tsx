import FAQ from "@/components/ui/accordion";
import Donate from "@/components/ui/donate";
import HeroSection from "@/components/ui/heroSection";
import ValuePropositions from "@/components/ui/valueProposition";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <HeroSection
          imageUrl="/project200.org/hero.png"
          title="Empowering Change for a Sustainable Future"
          description="Project 200 is dedicated to achieving the UN Sustainable Development Goals. Join us in creating a better world for all."
        />
        <ValuePropositions />
        <Donate />
        <FAQ />
      </main>
    </div>
  );
}
