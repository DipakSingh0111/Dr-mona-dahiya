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
    "Egg freezing is also known as oocyte cryopreservation. Store mature eggs at −196°C with >95% thaw survival under Dr. Mona Dahiya's care at our clinics in Noida, Delhi and Ghaziabad.",
};

export default function EggFreezingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <EggFreezingHero />

      {/* 2. Medical Council Registration Numbers (White) */}
      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "Registration No.",
            MCI: "Registration No.",
            UPMC: "Registration No.",
          }}
        />
      </SectionReveal>

      {/* 3. Who Needs Egg Freezing? (Pink) */}
      <SectionReveal delay={0.04}>
        <EggFreezingWhoNeeds />
      </SectionReveal>

      {/* 4. Checklist Before Egg Freezing (White) */}
      <SectionReveal delay={0.04}>
        <EggFreezingChecklist />
      </SectionReveal>

      {/* 5. Step-by-Step Egg Freezing Protocol (Pink) */}
      <SectionReveal delay={0.04}>
        <EggFreezingProtocol />
      </SectionReveal>

      {/* 6. Why Choose Dr. Mona Dahiya for Egg Freezing? (White) */}
      <SectionReveal delay={0.04}>
        <EggFreezingWhy />
      </SectionReveal>

      {/* 7. What Patients Say About Egg Freezing with Dr. Mona (Pink) */}
      <SectionReveal delay={0.04}>
        <EggFreezingReviews />
      </SectionReveal>

      {/* 8. Book a Consultation at Our Clinics (White) */}
      <SectionReveal delay={0.04}>
        <EggFreezingClinics />
      </SectionReveal>

      {/* 9. Factors that influence egg freezing cost (Pink) */}
      <SectionReveal delay={0.04}>
        <EggFreezingCost />
      </SectionReveal>

      {/* 10. Top FAQs About Egg Freezing in Noida and Delhi NCR (White) */}
      <SectionReveal delay={0.04}>
        <EggFreezingFaq />
      </SectionReveal>

      {/* 11. Related Fertility Treatments (Pink) */}
      <SectionReveal delay={0.04}>
        <EggFreezingRelatedTreatments />
      </SectionReveal>

      {/* 12. Book an In-Clinic or Online Consultation (White) */}
      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title={
            <>
              Book an In-Clinic or
              <br />
              Online Consultation
            </>
          }
          subtitle={
            <>
              Book an in-clinic consultation with Dr. Mona Dahiya in Noida,
              Ghaziabad or Delhi, or schedule an online consultation to review
              your reports. Direct line:{" "}
              <a
                href="tel:+919267982924"
                className="font-medium text-blue hover:text-rose"
              >
                +91 92679 82924
              </a>
              .
            </>
          }
          appendContacts={false}
          consultationDuration=""
          defaultClinic="Noida"
          sectionBg="bg-white"
        />
      </SectionReveal>

      {/* 13. Parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
