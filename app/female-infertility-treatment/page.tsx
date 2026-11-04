import type { Metadata } from "next";

import FemaleInfertilityHero from "@/components/sections/female-infertility-treatment/FemaleInfertilityHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FemaleFertilityIndications from "@/components/sections/female-infertility-treatment/FemaleFertilityIndications";
import FemaleDiagnosticAndPathway from "@/components/sections/female-infertility-treatment/FemaleDiagnosticAndPathway";
import FemaleCostTransparency from "@/components/sections/female-infertility-treatment/FemaleCostTransparency";
import FemalePatientReviews from "@/components/sections/female-infertility-treatment/FemalePatientReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import FemaleInfertilityFaq from "@/components/sections/female-infertility-treatment/FemaleInfertilityFaq";
import FemaleRelatedTreatments from "@/components/sections/female-infertility-treatment/FemaleRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Female Infertility Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Root-cause female fertility evaluations for PCOS, low AMH, blocked tubes, and endometriosis by Dr. Mona Dahiya across Delhi NCR.",
};

export default function FemaleInfertilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Female Infertility Hero matching Screenshot */}
      <FemaleInfertilityHero />

      {/* 2. Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Indications: When to Seek a Female Fertility Evaluation */}
      <SectionReveal delay={0.04}>
        <FemaleFertilityIndications />
      </SectionReveal>

      {/* 4. Diagnostic Checklist & Step-by-Step Treatment Pathway */}
      <SectionReveal delay={0.04}>
        <FemaleDiagnosticAndPathway />
      </SectionReveal>

      {/* 5. What Affects the Cost of Female Infertility Treatment */}
      <SectionReveal delay={0.04}>
        <FemaleCostTransparency />
      </SectionReveal>

      {/* 6. What Patients Say About Dr. Mona */}
      <SectionReveal delay={0.04}>
        <FemalePatientReviews />
      </SectionReveal>

      {/* 7. Book a Consultation at Our Clinics */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      {/* 8. Top FAQs About Female Infertility Treatment */}
      <SectionReveal delay={0.04}>
        <FemaleInfertilityFaq />
      </SectionReveal>

      {/* 9. Related Fertility Treatments */}
      <SectionReveal delay={0.04}>
        <FemaleRelatedTreatments />
      </SectionReveal>

      {/* 10. Book an In-Clinic or Online Consultation Form */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or a video review of your reports. Direct line:"
          appendContacts={true}
        />
      </SectionReveal>

      {/* 11. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

