import type { Metadata } from "next";

import IuiTreatmentHero from "@/components/sections/iui-treatment/IuiTreatmentHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiIndicationsAndChecklist from "@/components/sections/iui-treatment/IuiIndicationsAndChecklist";
import IuiProtocolAndWhy from "@/components/sections/iui-treatment/IuiProtocolAndWhy";
import {
  IuiReviews,
  IuiCost,
} from "@/components/sections/iui-treatment/IuiReviewsAndCost";
import IuiClinicLocation from "@/components/sections/iui-treatment/IuiClinicLocation";
import IuiQuestionsFaq from "@/components/sections/iui-treatment/IuiQuestionsFaq";
import IuiRelatedTreatments from "@/components/sections/iui-treatment/IuiRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "IUI Treatment (Intrauterine Insemination) | Dr. Mona Dahiya",
  description:
    "Intrauterine Insemination (IUI) treatment by Dr. Mona Dahiya with personalized ovulation tracking, advanced semen preparation, and high success rates in Delhi, Noida & Ghaziabad.",
  alternates: {
    canonical: "https://drmonadahiya.com/iui-treatment/",
  },
};

export default function IuiTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <IuiTreatmentHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <IuiIndicationsAndChecklist />

      <IuiProtocolAndWhy />

      <SectionReveal delay={0.04}>
        <IuiReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiClinicLocation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiQuestionsFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
