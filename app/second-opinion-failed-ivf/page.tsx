import type { Metadata } from "next";

import SecondOpinionHero from "@/components/sections/second-opinion-failed-ivf/SecondOpinionHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import SecondOpinionWhatAuditLooksAt from "@/components/sections/second-opinion-failed-ivf/SecondOpinionWhatAuditLooksAt";
import SecondOpinionWhenAndRecords from "@/components/sections/second-opinion-failed-ivf/SecondOpinionWhenAndRecords";
import SecondOpinionPathwayAndWhy from "@/components/sections/second-opinion-failed-ivf/SecondOpinionPathwayAndWhy";
import SecondOpinionReviewOptions from "@/components/sections/second-opinion-failed-ivf/SecondOpinionReviewOptions";
import SecondOpinionReviews from "@/components/sections/second-opinion-failed-ivf/SecondOpinionReviews";
import SecondOpinionClinicsAndConsultation from "@/components/sections/second-opinion-failed-ivf/SecondOpinionClinicsAndConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Expert Second Opinion for Failed IVF Cycles in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Failed IVF cycle audit with Dr. Mona Dahiya — assessment of previous IVF cycles, stimulation sheet, embryo quality, uterus and receptivity across Delhi, Noida and Ghaziabad.",
};

export default function SecondOpinionFailedIvfPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <SecondOpinionHero />

      <SectionReveal>
        <MedicalRegistration
          eyebrow="Registered medical practitioner"
          title="Medical Registration"
          subtitle="Dr. Mona Dahiya is registered with the following medical councils."
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SecondOpinionWhatAuditLooksAt />
      </SectionReveal>

      <SecondOpinionWhenAndRecords />

      <SecondOpinionPathwayAndWhy />

      <SectionReveal delay={0.04}>
        <SecondOpinionReviewOptions />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SecondOpinionReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SecondOpinionClinicsAndConsultation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
