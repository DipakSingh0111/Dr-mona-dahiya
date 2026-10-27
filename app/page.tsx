import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MedicalRegistration from "@/components/MedicalRegistration";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import AdvancedServices from "@/components/AdvancedServices";
import HowItWorks from "@/components/HowItWorks";
import MeetYourDoctor from "@/components/MeetYourDoctor";
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
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col">
      <div className="relative isolate overflow-hidden bg-[#0047ca]">
        <div className="absolute inset-x-0 top-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <HeroSection />
      </div>

      <Reveal>
        <MedicalRegistration />
      </Reveal>

      <Reveal delay={0.05}>
        <WhyChooseUs />
      </Reveal>

      <Reveal delay={0.05}>
        <OurServices />
      </Reveal>

      <Reveal>
        <AdvancedServices />
      </Reveal>

      <Reveal>
        <HowItWorks />
      </Reveal>

      <Reveal>
        <MeetYourDoctor />
      </Reveal>

      <Reveal>
        <FertilityPreservation />
      </Reveal>

      <Reveal>
        <Affiliations />
      </Reveal>

      <Reveal>
        <ClinicsSection />
      </Reveal>

      <Reveal>
        <SuccessStories />
      </Reveal>

      <Reveal>
        <InternationalPatients />
      </Reveal>

      <Reveal>
        <LatestBlog />
      </Reveal>

      <Reveal>
        <BookAppointment />
      </Reveal>

      <Reveal>
        <FAQSection />
      </Reveal>

      <Reveal variant="scaleIn">
        <ParenthoodCta />
      </Reveal>

      <Reveal variant="fadeIn">
        <Footer />
      </Reveal>
    </main>
  );
}
