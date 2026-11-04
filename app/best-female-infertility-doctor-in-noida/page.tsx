import type { Metadata } from "next";

import FemaleInfertilityNoidaHero from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaHero";
import FemaleInfertilityNoidaRegistration from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaRegistration";
import FemaleInfertilityNoidaConditions from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaConditions";
import FemaleInfertilityNoidaDiagnostic from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaDiagnostic";
import FemaleInfertilityNoidaPathway from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaPathway";
import FemaleInfertilityNoidaWhy from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaWhy";
import FemaleInfertilityNoidaLocation from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaLocation";
import FemaleInfertilityNoidaFaq from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaFaq";
import FemaleInfertilityNoidaReviews from "@/components/sections/best-female-infertility-doctor-in-noida/FemaleInfertilityNoidaReviews";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Best Female Infertility Doctor in Noida | Dr. Mona Dahiya",
  description:
    "Female infertility from PCOS, blocked tubes, low ovarian reserve or endometriosis — precise diagnosis and personalised care with Dr. Mona Dahiya at Sector 49, Noida.",
};

export default function BestFemaleInfertilityDoctorInNoidaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <FemaleInfertilityNoidaHero />

      <SectionReveal>
        <FemaleInfertilityNoidaRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaConditions />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaDiagnostic />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaPathway />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaLocation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FemaleInfertilityNoidaReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book a Consultation in Noida"
          subtitle="Book an in-clinic consultation at Sector 49, Noida, or an online review with Dr. Mona Dahiya. Call +91 92679 82924 or email info@drmonadahiya.com."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}
