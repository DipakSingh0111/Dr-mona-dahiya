import type { Metadata } from "next";

import FemaleInfertilityHero from "@/components/sections/female-infertility-treatment/FemaleInfertilityHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FemaleFertilityIndications from "@/components/sections/female-infertility-treatment/FemaleFertilityIndications";
import FemaleDiagnosticAndPathway from "@/components/sections/female-infertility-treatment/FemaleDiagnosticAndPathway";
import FemaleWhyConsult from "@/components/sections/female-infertility-treatment/FemaleWhyConsult";
import FemalePatientReviews from "@/components/sections/female-infertility-treatment/FemalePatientReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import FemaleCostTransparency from "@/components/sections/female-infertility-treatment/FemaleCostTransparency";
import FemaleInfertilityFaq from "@/components/sections/female-infertility-treatment/FemaleInfertilityFaq";
import FemaleRelatedTreatments from "@/components/sections/female-infertility-treatment/FemaleRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Female Infertility Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Common reasons for female infertility are Anovulation/PCOD, low ovarian reserve, Tubal blockage, Endometriosis and Uterine abnormalities. 50-60% of our patients get pregnant without needing IVF.",
};

export default function FemaleInfertilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <FemaleInfertilityHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleFertilityIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleDiagnosticAndPathway />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleWhyConsult />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemalePatientReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Clinics"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleCostTransparency />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or an online review of your reports. Direct line: +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
