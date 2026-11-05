import type { Metadata } from "next";

import PrpHero from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PrpIndicationsAndChecklist from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpIndicationsAndChecklist";
import PrpProtocolAndWhy from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpProtocolAndWhy";
import PrpReviews from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import PrpCostAndFaq from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpCostAndFaq";
import PrpRelatedTreatments from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Autologous PRP Therapy in IVF: Ovarian & Endometrial Rejuvenation | Dr. Mona Dahiya",
  description:
    "PRP therapy for thin lining and low ovarian reserve with Dr. Mona Dahiya — autologous platelet-rich plasma across Noida, Delhi and Ghaziabad.",
};

export default function PrpTherapyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
