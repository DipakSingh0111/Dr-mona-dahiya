import type { Metadata } from "next";

import RifHero from "@/components/sections/recurrent-implantation-failure-rif/RifHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import RifWhatAndIndications from "@/components/sections/recurrent-implantation-failure-rif/RifWhatAndIndications";
import RifProtocolWhyAndCase from "@/components/sections/recurrent-implantation-failure-rif/RifProtocolWhyAndCase";
import RifCost from "@/components/sections/recurrent-implantation-failure-rif/RifCost";
import RifFaq from "@/components/sections/recurrent-implantation-failure-rif/RifFaq";
import RifRelatedTreatments from "@/components/sections/recurrent-implantation-failure-rif/RifRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Recurrent Implantation Failure Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "RIF is when there is no pregnancy after transfer of more than 2 blastocyst of good grade. Second opinion for failed IVF transfers by Dr. Mona Dahiya.",
};

export default function RifPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <RifHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RifWhatAndIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RifProtocolWhyAndCase />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RifCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RifFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <RifRelatedTreatments />
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
