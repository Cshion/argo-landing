import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import LeadGen from "@/components/LeadGen";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <Services />
      <LeadGen />
      <ContactSection />
    </main>
  );
}
