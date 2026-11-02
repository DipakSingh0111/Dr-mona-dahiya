import type { Metadata } from "next";

import MaleInfertilityHero from "@/components/sections/male-infertility-treatment/MaleInfertilityHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import MaleFertilityWorkup from "@/components/sections/male-infertility-treatment/MaleFertilityWorkup";
import MaleDiagnosticAndProtocol from "@/components/sections/male-infertility-treatment/MaleDiagnosticAndProtocol";
import MaleCostAndReviews from "@/components/sections/male-infertility-treatment/MaleCostAndReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import MaleInfertilityFaq from "@/components/sections/male-infertility-treatment/MaleInfertilityFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Comprehensive Male Infertility Treatment in Delhi | Noida | Ghaziabad | Dr. Mona Dahiya",
  description:
    "Male infertility diagnosis and targeted treatment: CASA semen analysis, sperm DNA fragmentation, varicocele, ICSI with microfluidics, and surgical sperm retrieval (PESA/TESA) by Dr. Mona Dahiya.",
};

export default function MaleInfertilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      {/* 1. Male Infertility Hero */}
      <MaleInfertilityHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Who Needs a Dedicated Male Fertility Workup? */}
      <SectionReveal delay={0.04}>
        <MaleFertilityWorkup />
      </SectionReveal>

      {/* 4. Diagnostic Checklist & Step-by-Step Treatment Protocol */}
      <SectionReveal delay={0.04}>
        <MaleDiagnosticAndProtocol />
      </SectionReveal>

      {/* 5. Cost Factors & What Patients Say About Dr. Mona */}
      <SectionReveal delay={0.04}>
        <MaleCostAndReviews />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Frequently Asked Questions: Male Infertility */}
      <SectionReveal delay={0.04}>
        <MaleInfertilityFaq />
      </SectionReveal>

      {/* 8. Book a Male Fertility Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book a Male Fertility Consultation"
          subtitle="Book an in-clinic consultation or an online review of your semen reports. Call +91 92679 82924 or email info@drmonadahiya.com."
          appendContacts={false}
        />
      </SectionReveal>

      {/* 10. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

