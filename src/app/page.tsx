import FAQ from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Donate from "@/components/ui/donate";
import HeroSection from "@/components/ui/heroSection";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import ValuePropositions from "@/components/ui/valueProposition";
import { Globe, Users, Leaf, Droplet, Heart, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <HeroSection
          imageUrl="/hero.png"
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
