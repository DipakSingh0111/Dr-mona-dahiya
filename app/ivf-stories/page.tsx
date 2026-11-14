import type { Metadata } from "next";

import IVFSuccessStoriesHero from "@/components/sections/ivf-stories/IVFSuccessStoriesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IVFJourneys from "@/components/sections/ivf-stories/IVFJourneys";
import ComplexIVFSolutions from "@/components/sections/ivf-stories/ComplexIVFSolutions";
import WhyTrustComplexIVF from "@/components/sections/ivf-stories/WhyTrustComplexIVF";
import MorePatientStories from "@/components/sections/ivf-stories/MorePatientStories";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import IvfSuccessFaq from "@/components/sections/ivf-stories/IvfSuccessFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Real IVF Success Stories | Dr. Mona Dahiya Fertility Specialist",
  description:
    "Read verified IVF and ICSI success stories from couples treated by Dr. Mona Dahiya across clinics in Noida, Delhi and Ghaziabad.",
};

export default function IVFSuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an IVF Consultation"
          subtitle="Book an in-clinic consultation or an online review of your previous cycles. Call +91 92679 82924 or email info@drmonadahiya.com."
          appendContacts={false}
          consultationDuration="30 minutes"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
