import type { Metadata } from "next";

import DonorGameteHero from "@/components/sections/donor-gamete/DonorGameteHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import DonorGameteIndicationsAndChecklist from "@/components/sections/donor-gamete/DonorGameteIndicationsAndChecklist";
import DonorGameteProtocolAndWhy from "@/components/sections/donor-gamete/DonorGameteProtocolAndWhy";
import DonorGameteReviews from "@/components/sections/donor-gamete/DonorGameteReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import DonorGameteCostAndFaq from "@/components/sections/donor-gamete/DonorGameteCostAndFaq";
import DonorGameteRelatedTreatments from "@/components/sections/donor-gamete/DonorGameteRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Ethical & ART Act-Compliant Donor Gamete Programs (Egg & Sperm) | Dr. Mona Dahiya",
  description:
    "Donor egg and donor sperm IVF with Dr. Mona Dahiya — ART Act-compliant screening, registered ART banks, and pregnancy rates above 70% to 75% across Delhi NCR.",
};

export default function DonorGametePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <DonorGameteHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DonorGameteIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DonorGameteProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DonorGameteReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DonorGameteCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <DonorGameteRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or a video review of your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration="20 minutes"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
