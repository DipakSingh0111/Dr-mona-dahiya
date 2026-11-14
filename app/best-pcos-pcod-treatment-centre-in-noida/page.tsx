import type { Metadata } from "next";

import PcosHero from "@/components/sections/best-pcos-pcod-treatment-centre-in-noida/PcosHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PcosDifferenceAndCriteria from "@/components/sections/best-pcos-pcod-treatment-centre-in-noida/PcosDifferenceAndCriteria";
import PcosChecklistAndProtocol from "@/components/sections/best-pcos-pcod-treatment-centre-in-noida/PcosChecklistAndProtocol";
import PcosReviews from "@/components/sections/best-pcos-pcod-treatment-centre-in-noida/PcosReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import PcosCostAndFaq from "@/components/sections/best-pcos-pcod-treatment-centre-in-noida/PcosCostAndFaq";
import PcosRelatedTreatments from "@/components/sections/best-pcos-pcod-treatment-centre-in-noida/PcosRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Comprehensive PCOS/PCOD Fertility Treatment in Noida | Dr. Mona Dahiya",
  description:
    "Customised ovulation induction and antagonist IVF protocols for PCOS & PCOD with Dr. Mona Dahiya across Noida, Delhi and Ghaziabad.",
};

export default function PcosTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <PcosHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <PcosDifferenceAndCriteria />

      <PcosChecklistAndProtocol />

      <SectionReveal delay={0.04}>
        <PcosReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <PcosCostAndFaq />

      <SectionReveal delay={0.04}>
        <PcosRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or an online review of your reports. Direct line: +91 92679 82924."
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
