import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import LeadGen from "@/components/LeadGen";
import ContactSection from "@/components/ContactSection";
import ClientsCarousel from "@/components/ClientsCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <ClientsCarousel />
      <Services />
      <LeadGen />
      <ContactSection />
    </main>
  );
}
