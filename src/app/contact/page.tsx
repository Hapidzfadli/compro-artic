import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <Footer />
    </>
  );
}
