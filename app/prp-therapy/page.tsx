import type { Metadata } from "next";

import PrpHero from "@/components/sections/prp-therapy/PrpHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PrpIndicationsAndChecklist from "@/components/sections/prp-therapy/PrpIndicationsAndChecklist";
import PrpProtocolAndWhy from "@/components/sections/prp-therapy/PrpProtocolAndWhy";
import PrpReviews from "@/components/sections/prp-therapy/PrpReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import PrpCostAndFaq from "@/components/sections/prp-therapy/PrpCostAndFaq";
import PrpRelatedTreatments from "@/components/sections/prp-therapy/PrpRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Autologous PRP Therapy in IVF: Ovarian & Endometrial Rejuvenation | Dr. Mona Dahiya",
  description:
    "PRP therapy for thin lining and low ovarian reserve with Dr. Mona Dahiya — autologous platelet-rich plasma across Noida, Delhi and Ghaziabad.",
};

export default function PrpTherapyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <PrpHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrpIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrpProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrpReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrpCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PrpRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or a video review of your reports. Direct line: +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
