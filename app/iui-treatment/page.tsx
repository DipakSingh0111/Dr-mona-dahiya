import type { Metadata } from "next";

import IuiTreatmentHero from "@/components/sections/iui-treatment/IuiTreatmentHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiAbout from "@/components/sections/iui-treatment/IuiAbout";
import IuiDoctorGlance from "@/components/sections/iui-treatment/IuiDoctorGlance";
import IuiBenefits from "@/components/sections/iui-treatment/IuiBenefits";
import IuiDiagnosticTesting from "@/components/sections/iui-treatment/IuiDiagnosticTesting";
import IuiCycleSteps from "@/components/sections/iui-treatment/IuiCycleSteps";
import IuiCostSection from "@/components/sections/iui-treatment/IuiCostSection";
import IuiFailureReasons from "@/components/sections/iui-treatment/IuiFailureReasons";
import IuiNotSuitable from "@/components/sections/iui-treatment/IuiNotSuitable";
import IuiClinicLocation from "@/components/sections/iui-treatment/IuiClinicLocation";
import IuiPatientTestimonials from "@/components/sections/iui-treatment/IuiPatientTestimonials";
import IuiRelatedBlogs from "@/components/sections/iui-treatment/IuiRelatedBlogs";
import IuiQuestionsFaq from "@/components/sections/iui-treatment/IuiQuestionsFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "IUI Treatment (Intrauterine Insemination) | Dr. Mona Dahiya",
  description:
    "Intrauterine Insemination (IUI) treatment by Dr. Mona Dahiya with personalized ovulation tracking, advanced semen preparation, and high success rates in Noida, Delhi & Ghaziabad.",
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

      <SectionReveal delay={0.04}>
        <IuiAbout />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDoctorGlance />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiBenefits />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDiagnosticTesting />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiCycleSteps />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiCostSection />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiFailureReasons />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiNotSuitable />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiClinicLocation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiPatientTestimonials />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiRelatedBlogs />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiQuestionsFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

