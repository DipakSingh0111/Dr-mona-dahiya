import Hero from "@/components/sections/Hero";
import ServicesTicker from "@/components/sections/ServicesTicker";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import MeetYourDoctor from "@/components/sections/MeetYourDoctor";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurServices from "@/components/sections/OurServices";
import AdvancedCare from "@/components/sections/AdvancedCare";
import HowItWorks from "@/components/sections/HowItWorks";
import FertilityPreservation from "@/components/sections/FertilityPreservation";
import Publications from "@/components/sections/Publications";
import Affiliations from "@/components/sections/Affiliations";
import Clinics from "@/components/sections/Clinics";
import Testimonials from "@/components/sections/Testimonials";
import InternationalPatients from "@/components/sections/InternationalPatients";
import LatestBlog from "@/components/sections/LatestBlog";
import BookAppointment from "@/components/sections/BookAppointment";
import FAQ from "@/components/sections/FAQ";
import ParenthoodCta from "@/components/sections/ParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero starts flush right below the sticky header */}
      <div className="relative isolate flex flex-col overflow-hidden bg-[#0047ca]">
        <Hero />
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
