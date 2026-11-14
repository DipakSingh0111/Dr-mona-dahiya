import type { Metadata } from "next";

import EraHero from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import EraIndicationsAndChecklist from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraIndicationsAndChecklist";
import EraProtocolAndWhy from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraProtocolAndWhy";
import EraReviews from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import EraCostAndFaq from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraCostAndFaq";
import EraRelatedTreatments from "@/components/sections/endometrial-receptivity-analysis-era-test-in-noida/EraRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Personalized Endometrial Receptivity Analysis (ERA Test) in Noida & Delhi NCR | Dr. Mona Dahiya",
  description:
    "A simple biopsy can tell you your window of implantation. We analyse 248 genes from the sample of endometrium to identify your window of implantation across Noida, Delhi and Ghaziabad.",
};

export default function EraTestPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <EraHero />

      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <EraIndicationsAndChecklist />

      <EraProtocolAndWhy />

      <SectionReveal delay={0.04}>
        <EraReviews />
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

      <EraCostAndFaq />

      <SectionReveal delay={0.04}>
        <EraRelatedTreatments />
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
