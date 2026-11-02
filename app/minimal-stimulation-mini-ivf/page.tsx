import type { Metadata } from "next";

import MiniIvfHero from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import MiniIvfIndicationsAndChecklist from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfIndicationsAndChecklist";
import MiniIvfProtocolAndWhy from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfProtocolAndWhy";
import MiniIvfReviews from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import MiniIvfFaq from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfFaq";
import MiniIvfRelatedTreatments from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Minimal Stimulation (Mini IVF) in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Mini IVF with Dr. Mona Dahiya — gentle oral medicines and 4–8 low-dose injections, near-zero OHSS risk, ideal for low AMH or poor responders across Delhi NCR.",
};

export default function MiniIvfPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <MiniIvfHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MiniIvfIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MiniIvfProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MiniIvfReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MiniIvfFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MiniIvfRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
