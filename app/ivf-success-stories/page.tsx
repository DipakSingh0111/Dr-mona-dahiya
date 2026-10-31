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
      {/* 1. Hero matching Screenshot */}
      <IVFSuccessStoriesHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. IVF Journeys in Patients' Own Words (6 Review Cards) */}
      <SectionReveal delay={0.04}>
        <IVFJourneys />
      </SectionReveal>

      {/* 4. How Complex IVF Cases Are Solved (4 Numbered Solution Cards) */}
      <SectionReveal delay={0.04}>
        <ComplexIVFSolutions />
      </SectionReveal>

      {/* 5. Why Trust Dr. Mona Dahiya with Complex IVF? (3 Authority Checklist Cards) */}
      <SectionReveal delay={0.04}>
        <WhyTrustComplexIVF />
      </SectionReveal>

      {/* 6. More Patient Stories (4 Diagnosis Category Cards) */}
      <SectionReveal delay={0.04}>
        <MorePatientStories />
      </SectionReveal>

      {/* 7. Book a Consultation at Our Clinics (3 Clinic Cards with Directions & Book CTA) */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 8. Frequently Asked Questions: IVF Success Stories */}
      <SectionReveal delay={0.04}>
        <IvfSuccessFaq />
      </SectionReveal>

      {/* 9. Book an IVF Consultation (Interactive Form, Consultation Fees & Clinic Info) */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          eyebrow="Next step"
          title="Book an IVF Consultation"
          subtitle="Book an in-clinic consultation or an online review of your previous cycles. Call"
          appendContacts={true}
        />
      </SectionReveal>

      {/* 10. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

