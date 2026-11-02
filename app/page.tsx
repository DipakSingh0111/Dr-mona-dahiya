import Hero from "@/components/sections/Home/Hero";
import ServicesTicker from "@/components/sections/Home/ServicesTicker";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import MeetYourDoctor from "@/components/sections/Home/MeetYourDoctor";
import WhyChooseUs from "@/components/sections/Home/WhyChooseUs";
import OurServices from "@/components/sections/Home/OurServices";
import AdvancedCare from "@/components/sections/Home/AdvancedCare";
import HowItWorks from "@/components/sections/Home/HowItWorks";
import FertilityPreservation from "@/components/sections/Home/FertilityPreservation";
import Publications from "@/components/sections/Home/Publications";
import Affiliations from "@/components/sections/Home/Affiliations";
import Clinics from "@/components/sections/Home/Clinics";
import Testimonials from "@/components/sections/Home/Testimonials";
import InternationalPatients from "@/components/sections/Home/InternationalPatients";
import LatestBlog from "@/components/sections/Home/LatestBlog";
import BookAppointment from "@/components/sections/Home/BookAppointment";
import FAQ from "@/components/sections/Home/FAQ";
import ParenthoodCta from "@/components/sections/Home/ParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="home-first-screen">
        <div className="home-hero-wrap relative isolate flex flex-1 flex-col bg-transparent">
          <Hero />
        </div>
        <ServicesTicker />
      </div>

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
        <AdvancedCare />
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
        <Clinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <Testimonials />
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
        <FAQ />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ParenthoodCta />
      </SectionReveal>
    </main>
  );
}
