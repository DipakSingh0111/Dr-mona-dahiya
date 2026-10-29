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
      {/* Navbar sits on the top space of the hero banner image */}
      <div className="relative isolate overflow-hidden bg-[#0047ca]">
        <div className="absolute inset-x-0 top-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <HeroSection />
      </div>

      <ServicesTicker />

      <SectionReveal>
        <MedicalRegistration />
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
        <MeetYourDoctor />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <Publications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FertilityPreservation />
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
