import type { Metadata } from "next";

import IuiTreatmentHero from "@/components/sections/iui-treatment/IuiTreatmentHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiIndicationsAndChecklist from "@/components/sections/iui-treatment/IuiIndicationsAndChecklist";
import IuiProtocolAndWhy from "@/components/sections/iui-treatment/IuiProtocolAndWhy";
import IuiReviewsAndCost from "@/components/sections/iui-treatment/IuiReviewsAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import IuiTreatmentFaq from "@/components/sections/iui-treatment/IuiTreatmentFaq";
import RecurrentMiscarriageRelatedTreatments from "@/components/sections/recurrent-miscarriage/RecurrentMiscarriageRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Intrauterine Insemination (IUI) Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "First-line fertility care with washed sperm and ultrasound-timed ovulation protocols by Dr. Mona Dahiya (25+ years experience) across Delhi, Noida and Ghaziabad.",
};

export default function IuiTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero (Gradient Blue Header) */}
      <IuiTreatmentHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications (Multi-color Theme Cards) & Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <IuiIndicationsAndChecklist />
      </SectionReveal>

      {/* 4. Step-by-Step Treatment Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <IuiProtocolAndWhy />
      </SectionReveal>

      {/* 5. Patient Reviews & What Affects the Cost of IUI */}
      <SectionReveal delay={0.04}>
        <IuiReviewsAndCost />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Top FAQs About IUI Treatment */}
      <SectionReveal delay={0.04}>
        <IuiTreatmentFaq />
      </SectionReveal>

      {/* 8. Related Fertility Treatments (12 Cards Grid) */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageRelatedTreatments />
      </SectionReveal>

      {/* 9. Book an In-Clinic or Online Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
        />
      </SectionReveal>

      {/* 9. Parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

