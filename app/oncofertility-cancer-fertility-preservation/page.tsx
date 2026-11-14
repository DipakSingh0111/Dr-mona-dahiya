import type { Metadata } from "next";

import OncofertilityHero from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import OncofertilityIndicationsAndChecklist from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityIndicationsAndChecklist";
import OncofertilityProtocolAndWhy from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityProtocolAndWhy";
import OncofertilityReviews from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import OncofertilityCostAndFaq from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityCostAndFaq";
import OncofertilityRelatedTreatments from "@/components/sections/oncofertility-cancer-fertility-preservation/OncofertilityRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Oncofertility: To Preserve Fertility Before Cancer Treatments | Dr. Mona Dahiya",
  description:
    "With oncofertility we help you preserve your fertility if you have to undergo chemotherapy, radiation therapy in the pelvic area or surgery for cancer. At Dr. Mona Dahiya's clinic we can help you get started in 24 to 48 hours.",
};

export default function OncofertilityPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <OncofertilityHero />

      <SectionReveal>
        <MedicalRegistration
          councilNames={{
            UPMC: "U.P. Medical Council",
          }}
          councilRegLabels={{
            DMC: "This is her DMC number",
            MCI: "This is her MCI number",
            UPMC: "This is her UPMC number",
          }}
        />
      </SectionReveal>

      <OncofertilityIndicationsAndChecklist />

      <OncofertilityProtocolAndWhy />

      <SectionReveal delay={0.04}>
        <OncofertilityReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Clinics"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
          directionsLinkText="Get directions"
          clinicLinkText="Clinic page"
          bookButtonText="Book appointment"
        />
      </SectionReveal>

      <OncofertilityCostAndFaq />

      <SectionReveal delay={0.04}>
        <OncofertilityRelatedTreatments />
      </SectionReveal>

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

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
