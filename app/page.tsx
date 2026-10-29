import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesTicker from "@/components/ServicesTicker";
import MedicalRegistration from "@/components/MedicalRegistration";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import AdvancedServices from "@/components/AdvancedServices";
import HowItWorks from "@/components/HowItWorks";
import MeetYourDoctor from "@/components/MeetYourDoctor";
import Publications from "@/components/Publications";
import FertilityPreservation from "@/components/FertilityPreservation";
import Affiliations from "@/components/Affiliations";
import ClinicsSection from "@/components/ClinicsSection";
import SuccessStories from "@/components/SuccessStories";
import InternationalPatients from "@/components/InternationalPatients";
import LatestBlog from "@/components/LatestBlog";
import BookAppointment from "@/components/BookAppointment";
import FAQSection from "@/components/FAQSection";
import ParenthoodCta from "@/components/ParenthoodCta";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Sticky TopBar + Navbar — stays fixed at top while scrolling */}
      <div className="sticky top-0 z-50 w-full shrink-0 shadow-[0_4px_20px_rgba(0,25,90,0.22)]">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero starts flush right below the sticky header */}
      <div className="relative isolate flex flex-col overflow-hidden bg-[#0047ca]">
        <HeroSection />
      </div>

      <ServicesTicker />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MeetYourDoctor />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <WhyChooseUs />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OurServices />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AdvancedServices />
      </SectionReveal>

      <HowItWorks />

      <SectionReveal delay={0.04}>
        <FertilityPreservation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <Publications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <Affiliations />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ClinicsSection />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SuccessStories />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <InternationalPatients />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LatestBlog />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BookAppointment />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FAQSection />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ParenthoodCta />
      </SectionReveal>

      <SectionReveal>
        <Footer />
      </SectionReveal>
    </main>
  );
}
