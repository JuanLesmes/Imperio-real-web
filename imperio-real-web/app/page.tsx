import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { IdentitySection } from "@/components/layout/sections/indentity-section";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Imperio Real | Soluciones inmobiliarias y jurídicas",
  description:
    "Conoce los servicios inmobiliarios y jurídicos de Imperio Real. Acompañamiento profesional con enfoque humano, estratégico y confiable.",
};

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <IdentitySection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <FAQSection />
      </main>

      <FooterSection />
    </>
  );
}