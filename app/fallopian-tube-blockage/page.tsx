import type { Metadata } from "next";

import FallopianTubesHero from "@/components/sections/fallopian-tubes/FallopianTubesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FallopianTubesIndicationsAndChecklist from "@/components/sections/fallopian-tubes/FallopianTubesIndicationsAndChecklist";
import FallopianTubesProtocolAndWhy from "@/components/sections/fallopian-tubes/FallopianTubesProtocolAndWhy";
import FallopianTubesCaseAndCost from "@/components/sections/fallopian-tubes/FallopianTubesCaseAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import FallopianTubesFaq from "@/components/sections/fallopian-tubes/FallopianTubesFaq";
import FallopianTubesRelatedTreatments from "@/components/sections/fallopian-tubes/FallopianTubesRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Fallopian Tube Blockage Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Check the tubes, choose the right route: HSG diagnosis, hydrosalpinx management, tubal surgery vs IVF protocols by Dr. Mona Dahiya (25+ years experience).",
};

export default function FallopianTubeBlockagePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      {/* 1. Hero */}
      <FallopianTubesHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications & Diagnostic Checklist */}
      <SectionReveal delay={0.04}>
        <FallopianTubesIndicationsAndChecklist />
      </SectionReveal>

      {/* 4. Treatment Protocol & Why Consult Dr. Mona */}
      <SectionReveal delay={0.04}>
        <FallopianTubesProtocolAndWhy />
      </SectionReveal>

      {/* 5. Clinical Case Insight & Cost Factors Breakdown */}
      <SectionReveal delay={0.04}>
        <FallopianTubesCaseAndCost />
      </SectionReveal>

      {/* 6. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 7. Frequently Asked Questions */}
      <SectionReveal delay={0.04}>
        <FallopianTubesFaq />
      </SectionReveal>

      {/* 8. Related Treatments */}
      <SectionReveal delay={0.04}>
        <FallopianTubesRelatedTreatments />
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

      {/* 10. Parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

