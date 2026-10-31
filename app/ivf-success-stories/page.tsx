import type { Metadata } from "next";

import IVFSuccessStoriesHero from "@/components/sections/ivf-success-stories/IVFSuccessStoriesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IVFJourneys from "@/components/sections/ivf-success-stories/IVFJourneys";
import ComplexIVFSolutions from "@/components/sections/ivf-success-stories/ComplexIVFSolutions";
import WhyTrustComplexIVF from "@/components/sections/ivf-success-stories/WhyTrustComplexIVF";
import MorePatientStories from "@/components/sections/ivf-success-stories/MorePatientStories";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import IvfSuccessFaq from "@/components/sections/ivf-success-stories/IvfSuccessFaq";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Real IVF Success Stories | Dr. Mona Dahiya Fertility Specialist",
  description:
    "Read verified IVF and ICSI success stories from couples treated by Dr. Mona Dahiya across clinics in Noida, Delhi and Ghaziabad.",
};

export default function IVFSuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <IVFSuccessStoriesHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IVFJourneys />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ComplexIVFSolutions />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <WhyTrustComplexIVF />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MorePatientStories />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          eyebrow="Next step"
          title="Book an IVF Consultation"
          subtitle="Book an in-clinic consultation or an online review of your previous cycles. Call"
          appendContacts={true}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
