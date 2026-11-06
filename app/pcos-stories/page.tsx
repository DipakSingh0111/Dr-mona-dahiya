import type { Metadata } from "next";

import PcosStoriesHero from "@/components/sections/pcos-stories/PcosStoriesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PcosStoriesJourneys from "@/components/sections/pcos-stories/PcosStoriesJourneys";
import PcosStoriesProtocols from "@/components/sections/pcos-stories/PcosStoriesProtocols";
import PcosStoriesWhy from "@/components/sections/pcos-stories/PcosStoriesWhy";
import PcosStoriesMore from "@/components/sections/pcos-stories/PcosStoriesMore";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import PcosStoriesFaq from "@/components/sections/pcos-stories/PcosStoriesFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "PCOS/PCOD Pregnancy Stories | Dr. Mona Dahiya",
  description:
    "Real PCOS and PCOD pregnancy success stories with OHSS-safe protocols, ovulation induction and fertility care by Dr. Mona Dahiya across Noida, Delhi and Ghaziabad.",
};

export default function PcosStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <PcosStoriesHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PcosStoriesJourneys />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PcosStoriesProtocols />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PcosStoriesWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PcosStoriesMore />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Locations To Find Us"
          title="Book a Consultation at Our Clinics"
          subtitle="Below are locations that we practice at."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PcosStoriesFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book a PCOS Consultation"
          subtitle="Book an in-clinic consultation or an online review of your reports. Call +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
