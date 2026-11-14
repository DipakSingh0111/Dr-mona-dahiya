import type { Metadata } from "next";

import FallopianTubesHero from "@/components/sections/fallopian-tube-blockage-treatment/FallopianTubesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FallopianTubesIndicationsAndChecklist from "@/components/sections/fallopian-tube-blockage-treatment/FallopianTubesIndicationsAndChecklist";
import FallopianTubesProtocolAndWhy from "@/components/sections/fallopian-tube-blockage-treatment/FallopianTubesProtocolAndWhy";
import FallopianTubesCaseAndCost from "@/components/sections/fallopian-tube-blockage-treatment/FallopianTubesCaseAndCost";
import FallopianTubesFaq from "@/components/sections/fallopian-tube-blockage-treatment/FallopianTubesFaq";
import FallopianTubesRelatedTreatments from "@/components/sections/fallopian-tube-blockage-treatment/FallopianTubesRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Fallopian Tube Blockage Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "When your fallopian tubes are blocked sperm cannot travel to meet the egg. Dr Mona Dahiya will test your tubes and tell you if you need IVF rather than treating your tubes.",
};

export default function FallopianTubeBlockagePage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <FallopianTubesHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <FallopianTubesIndicationsAndChecklist />

      <FallopianTubesProtocolAndWhy />

      <FallopianTubesCaseAndCost />

      <SectionReveal delay={0.04}>
        <FallopianTubesFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FallopianTubesRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in South Delhi, Noida or Ghaziabad, or schedule an online consultation to review your cycle history."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
