import type { Metadata } from "next";

import LowAmhHero from "@/components/sections/low-amh-stories/LowAmhHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import LowAmhJourneys from "@/components/sections/low-amh-stories/LowAmhJourneys";
import LowAmhProtocols from "@/components/sections/low-amh-stories/LowAmhProtocols";
import WhyConsultLowAmh from "@/components/sections/low-amh-stories/WhyConsultLowAmh";
import LowAmhMoreStories from "@/components/sections/low-amh-stories/LowAmhMoreStories";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import LowAmhFaq from "@/components/sections/low-amh-stories/LowAmhFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Low AMH Success Stories | Dr. Mona Dahiya",
  description:
    "Real patient success stories of women with low AMH who conceived with their own eggs using DuoStim, Mini IVF and priming protocols with Dr. Mona Dahiya.",
};

export default function LowAmhSuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <LowAmhHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhJourneys />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhProtocols />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <WhyConsultLowAmh />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhMoreStories />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Book an appointment"
          title="Book a Consultation at Our Clinics"
          subtitle="Come to one of our clinics and meet Dr. Mona Dahiya. We have three clinics that Dr. Mona will see you in. If you cannot make it to one of our locations, you can schedule an online appointment as well."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book a Low AMH Consultation"
          subtitle="Book an in-clinic consultation or an online review of your AMH and scan reports. Call +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
