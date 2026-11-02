import type { Metadata } from "next";

import EraHero from "@/components/sections/era-test/EraHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EraIndicationsAndChecklist from "@/components/sections/era-test/EraIndicationsAndChecklist";
import EraProtocolAndWhy from "@/components/sections/era-test/EraProtocolAndWhy";
import EraReviews from "@/components/sections/era-test/EraReviews";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import EraCostAndFaq from "@/components/sections/era-test/EraCostAndFaq";
import EraRelatedTreatments from "@/components/sections/era-test/EraRelatedTreatments";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Personalized ERA Test in Noida & Delhi NCR | Dr. Mona Dahiya",
  description:
    "Endometrial Receptivity Analysis (ERA) with Dr. Mona Dahiya — 248-gene NGS testing to time personalised embryo transfer for recurrent implantation failure across Noida, Delhi and Ghaziabad.",
};

export default function EraTestPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <EraHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EraIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EraProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EraReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EraCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EraRelatedTreatments />
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
