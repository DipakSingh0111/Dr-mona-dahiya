import type { Metadata } from "next";

import AzoospermiaHero from "@/components/sections/azoospermia-treatment/AzoospermiaHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import AzoospermiaIndications from "@/components/sections/azoospermia-treatment/AzoospermiaIndications";
import AzoospermiaDiagnosticAndProtocol from "@/components/sections/azoospermia-treatment/AzoospermiaDiagnosticAndProtocol";
import AzoospermiaWhyConsult from "@/components/sections/azoospermia-treatment/AzoospermiaWhyConsult";
import AzoospermiaCaseInsight from "@/components/sections/azoospermia-treatment/AzoospermiaCaseInsight";
import AzoospermiaCost from "@/components/sections/azoospermia-treatment/AzoospermiaCost";
import AzoospermiaFaq from "@/components/sections/azoospermia-treatment/AzoospermiaFaq";
import AzoospermiaRelated from "@/components/sections/azoospermia-treatment/AzoospermiaRelated";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Azoospermia Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Azoospermia and zero sperm count care with PESA, TESA and Micro-TESE pathways by Dr. Mona Dahiya across Delhi NCR.",
};

export default function AzoospermiaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <AzoospermiaHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaDiagnosticAndProtocol />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaWhyConsult />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaCaseInsight />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AzoospermiaRelated />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Final step"
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
