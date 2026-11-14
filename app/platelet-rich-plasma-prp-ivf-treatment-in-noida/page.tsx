import type { Metadata } from "next";

import PrpHero from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import PrpIndicationsAndChecklist from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpIndicationsAndChecklist";
import PrpProtocolAndWhy from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpProtocolAndWhy";
import PrpReviews from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import PrpCostAndFaq from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpCostAndFaq";
import PrpRelatedTreatments from "@/components/sections/platelet-rich-plasma-prp-ivf-treatment-in-noida/PrpRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Platelet-Rich Plasma (PRP) Therapy in IVF: Ovarian & Endometrial Rejuvenation | Dr. Mona Dahiya",
  description:
    "Using autologous PRP (Platelet Rich Plasma) to increase thickness of your endometrium if its less than 7 mm & augment dormant follicles in your ovaries. Intra uterine PRP can achieve 45–55% implantation when done by Dr. Mona Dahiya in Noida, Delhi and Ghaziabad.",
};

export default function PrpTherapyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <PrpHero />

      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <PrpIndicationsAndChecklist />

      <PrpProtocolAndWhy />

      <SectionReveal delay={0.04}>
        <PrpReviews />
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

      <PrpCostAndFaq />

      <SectionReveal delay={0.04}>
        <PrpRelatedTreatments />
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
