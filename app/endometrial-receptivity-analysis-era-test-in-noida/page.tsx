import type { Metadata } from "next";

import EraHero from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EraIndicationsAndChecklist from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraIndicationsAndChecklist";
import EraProtocolAndWhy from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraProtocolAndWhy";
import EraReviews from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import EraCostAndFaq from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraCostAndFaq";
import EraRelatedTreatments from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Personalized ERA Test in Noida & Delhi NCR | Dr. Mona Dahiya",
  description:
    "Endometrial Receptivity Analysis (ERA) with Dr. Mona Dahiya — 248-gene NGS testing to time personalised embryo transfer for recurrent implantation failure across Noida, Delhi and Ghaziabad.",
};

export default function EraTestPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
