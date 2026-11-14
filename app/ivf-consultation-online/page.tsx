import type { Metadata } from "next";

import OnlineConsultationHero from "@/components/sections/ivf-consultation-online/OnlineConsultationHero";
import OnlineConsultationContent from "@/components/sections/ivf-consultation-online/OnlineConsultationContent";
import LocationsRegistration from "@/components/sections/location/LocationsRegistration";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Online IVF Consultation with Dr. Mona Dahiya | Fertility Specialist",
  description:
    "Book a 30-minute online IVF consultation with Dr. Mona Dahiya. ₹1,000 in India · US$25 abroad. Written plan after the call.",
};

export default function OnlineConsultationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <OnlineConsultationHero />

      <SectionReveal>
        <LocationsRegistration />
      </SectionReveal>

      <OnlineConsultationContent />

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="schedule-consultation"
          sectionBg="bg-white"
          eyebrow="Next step"
          title="Schedule Your Online Consultation"
          subtitle="Book a 30-minute online record review with Dr. Mona. Appointment line:"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
