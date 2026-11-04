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
  title: "IUI Treatment in Noida | Best IUI Doctor in Noida — Dr. Mona Dahiya",
  description:
    "Dr. Mona Dahiya has over 25 years' experience in performing IUI in Noida. We will help you understand the IUI procedure and decide if it's the right option for you. Dr. Mona Dahiya designs a treatment plan for every IUI cycle for all her patients.",
};

export default function BestIuiDoctorInNoidaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero: IUI Treatment in Noida (Image 1) */}
      <IuiTreatmentHero />

      {/* 2. Medical Council Registration Numbers (Image 2 Top) */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. More about IUI (Image 2 Bottom) */}
      <SectionReveal delay={0.04}>
        <IuiAbout />
      </SectionReveal>

      {/* 4. About Dr. Mona Dahiya (Image 3 Top) */}
      <SectionReveal delay={0.04}>
        <IuiDoctorGlance />
      </SectionReveal>

      {/* 5. Benefits of Doing IUI With Dr. Mona (Image 3 Bottom) */}
      <SectionReveal delay={0.04}>
        <IuiBenefits />
      </SectionReveal>

      {/* 6. Things to keep in mind before IUI / Diagnostic testing (Image 4 Top) */}
      <SectionReveal delay={0.04}>
        <IuiDiagnosticTesting />
      </SectionReveal>

      {/* 7. How does an IUI cycle go? (Image 4 Bottom) */}
      <SectionReveal delay={0.04}>
        <IuiCycleSteps />
      </SectionReveal>

      {/* 8. How Much Does IUI Cost In Noida? (Image 5 Top) */}
      <SectionReveal delay={0.04}>
        <IuiCostSection />
      </SectionReveal>

      {/* 9. What can cause you to be unsuccessful (Image 5 Bottom) */}
      <SectionReveal delay={0.04}>
        <IuiFailureReasons />
      </SectionReveal>

      {/* 10. When is IUI not suitable? (Image 6 Top) */}
      <SectionReveal delay={0.04}>
        <IuiNotSuitable />
      </SectionReveal>

      {/* 11. How to get to Dr. Mona's IUI clinic (Image 6 Bottom) */}
      <SectionReveal delay={0.04}>
        <IuiClinicLocation />
      </SectionReveal>

      {/* 12. What our patients have to say (Image 7 Top) */}
      <SectionReveal delay={0.04}>
        <IuiPatientTestimonials />
      </SectionReveal>

      {/* 13. Things you may be interested in (Image 7 Bottom) */}
      <SectionReveal delay={0.04}>
        <IuiRelatedBlogs />
      </SectionReveal>

      {/* 14. Questions (Image 8 Top) */}
      <SectionReveal delay={0.04}>
        <IuiQuestionsFaq />
      </SectionReveal>

      {/* 15. Talk to the clinic about IUI */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Book an appointment"
          title="Talk to the clinic about IUI"
          subtitle="Tell us which clinic suits you and the team will get back to you. You can also call or write directly."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      {/* 16. Parenthood CTA (matches site-wide design) */}
      <AboutParenthoodCta />
    </main>
  );
}
