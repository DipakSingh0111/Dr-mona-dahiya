import type { Metadata } from "next";

import LaparoscopyHero from "@/components/sections/laparoscopy-hysteroscopy/LaparoscopyHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import LaparoscopyIndicationsAndChecklist from "@/components/sections/laparoscopy-hysteroscopy/LaparoscopyIndicationsAndChecklist";
import LaparoscopyProtocolAndWhy from "@/components/sections/laparoscopy-hysteroscopy/LaparoscopyProtocolAndWhy";
import LaparoscopyReviews from "@/components/sections/laparoscopy-hysteroscopy/LaparoscopyReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import LaparoscopyCostAndFaq from "@/components/sections/laparoscopy-hysteroscopy/LaparoscopyCostAndFaq";
import LaparoscopyRelatedTreatments from "@/components/sections/laparoscopy-hysteroscopy/LaparoscopyRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Fertility Laparoscopy & Operative Hysteroscopy in Noida | Dr. Mona Dahiya",
  description:
    "Minimally invasive fertility-enhancing laparoscopy and operative hysteroscopy with Dr. Mona Dahiya across Noida, Delhi and Ghaziabad.",
};

export default function LaparoscopyHysteroscopyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <LaparoscopyHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LaparoscopyIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LaparoscopyProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LaparoscopyReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LaparoscopyCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LaparoscopyRelatedTreatments />
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
