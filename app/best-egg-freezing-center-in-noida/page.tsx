import type { Metadata } from "next";

import EggFreezingHero from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EggFreezingWhoNeeds from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingWhoNeeds";
import EggFreezingChecklist from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingChecklist";
import EggFreezingProtocol from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingProtocol";
import EggFreezingWhy from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingWhy";
import EggFreezingReviews from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingReviews";
import EggFreezingClinics from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingClinics";
import EggFreezingCost from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingCost";
import EggFreezingFaq from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingFaq";
import EggFreezingRelatedTreatments from "@/components/sections/best-egg-freezing-center-in-noida/EggFreezingRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Best Egg Freezing (Oocyte Cryopreservation) Center in Noida & Delhi NCR | Dr. Mona Dahiya",
  description:
    "Egg freezing with Dr. Mona Dahiya — oocyte cryopreservation with greater than 95% thaw survival at clinics in Noida, Delhi and Ghaziabad.",
};

export default function EggFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <EggFreezingHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingWhoNeeds />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingProtocol />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <EggFreezingRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}
