import FAQ from "@/components/ui/accordion";
import ContactForm from "@/components/ui/contactForm";
import Donate from "@/components/ui/donate";
import HeroSection from "@/components/ui/heroSection";

export default function Contact() {
  return (
    <div className="h-full">
      <HeroSection
        imageUrl="/project200.org/contact_hero.png"
        description="Connect with us for inquiries, collaboration opportunities, or to learn how you can help."
        title="Connect with us to create impact"
      />
      <ContactForm />
      <Donate />
      <FAQ />
    </div>
  );
}
