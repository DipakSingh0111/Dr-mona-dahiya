import type { Metadata } from "next";

import ArtComplianceHero from "@/components/sections/art-compliance-ethics/ArtComplianceHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import ArtLawsAndProhibited from "@/components/sections/art-compliance-ethics/ArtLawsAndProhibited";
import ArtEligibilityAndEthics from "@/components/sections/art-compliance-ethics/ArtEligibilityAndEthics";
import ArtComplianceFaq from "@/components/sections/art-compliance-ethics/ArtComplianceFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Assisted Reproductive Technology (ART) Compliance & Medical Ethics Policy | Dr. Mona Dahiya",
  description:
    "ART (Regulation) Act 2021, Surrogacy Act 2021, PC-PNDT Act 1994, NMC medical ethics, legal eligibility and embryology biosafety across Dr. Mona Dahiya's clinics in Noida, Ghaziabad and Delhi.",
};

export default function ArtComplianceEthicsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <ArtComplianceHero />

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

      <ArtLawsAndProhibited />

      <ArtEligibilityAndEthics />

      <SectionReveal delay={0.04}>
        <ArtComplianceFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title={
            <>
              Compliance or
              <br />
              Legal Questions?
            </>
          }
          subtitle={
            <>
              For compliance verification, legal documents or a consultation,
              email{" "}
              <a
                href="mailto:info@drmonadahiya.com"
                className="font-medium text-blue hover:text-rose"
              >
                info@drmonadahiya.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+919267982924"
                className="font-medium text-blue hover:text-rose"
              >
                +91 92679 82924
              </a>
              . Central registered facility: Building Number 41, First Floor,
              Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi
              110024.
            </>
          }
          appendContacts={false}
          consultationDuration="30 minutes"
          defaultClinic="Noida"
          sectionBg="bg-white"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}

