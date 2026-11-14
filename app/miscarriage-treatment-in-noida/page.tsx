import type { Metadata } from "next";

import RecurrentMiscarriageHero from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import RecurrentMiscarriageIndicationsAndChecklist from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageIndicationsAndChecklist";
import RecurrentMiscarriageProtocolAndWhy from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageProtocolAndWhy";
import RecurrentMiscarriageReviews from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import RecurrentMiscarriageCost from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageCost";
import RecurrentMiscarriageFaq from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageFaq";
import RecurrentMiscarriageRelatedTreatments from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Treatment For Recurrent Pregnancy Loss & Miscarriages in Noida | Dr. Mona Dahiya",
  description:
    "5-pillar investigation and step-by-step treatment for recurrent pregnancy loss with Dr. Mona Dahiya across Noida, Ghaziabad and Delhi.",
};

export default function RecurrentMiscarriagePage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <RecurrentMiscarriageHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <RecurrentMiscarriageIndicationsAndChecklist />

      <RecurrentMiscarriageProtocolAndWhy />

      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Consultations"
          title="Book Appointment With Dr. Mona Dahiya"
          subtitle="Dr Mona Dahiya consults in her clinics at Noida, Ghaziabad & Delhi. Also available for Online Consultations."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageRelatedTreatments />
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
