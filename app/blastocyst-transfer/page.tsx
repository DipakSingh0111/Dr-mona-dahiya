import type { Metadata } from "next";

import BlastocystHero from "@/components/sections/blastocyst-transfer/BlastocystHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  BlastocystIndications,
  BlastocystChecklist,
} from "@/components/sections/blastocyst-transfer/BlastocystIndicationsAndChecklist";
import {
  BlastocystProtocol,
  BlastocystWhy,
} from "@/components/sections/blastocyst-transfer/BlastocystProtocolAndWhy";
import {
  BlastocystReviews,
  BlastocystCost,
} from "@/components/sections/blastocyst-transfer/BlastocystReviewsAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import BlastocystFaq from "@/components/sections/blastocyst-transfer/BlastocystFaq";
import RecurrentMiscarriageRelatedTreatments from "@/components/sections/miscarriage-treatment-in-noida/RecurrentMiscarriageRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Advanced Day-5 Blastocyst Transfer in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "When we grow the embryo in the incubator till Day 5/6 in the lab, this is called blastocyst transfer. Under the supervision of Dr. Mona Dahiya in Delhi NCR, extended embryo culture helps select the best embryo and achieve a high single embryo pregnancy rate.",
};

export default function BlastocystTransferPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <BlastocystHero />

      {/* 2. Medical Registration Councils (White) */}
      <SectionReveal>
        <MedicalRegistration
          councilNames={{ UPMC: "U.P. Medical Council" }}
          councilRegLabels={{
            DMC: "Registration No.",
            MCI: "Registration No.",
            UPMC: "Registration No.",
          }}
        />
      </SectionReveal>

      {/* 3. Who should undergo a Day 5/6 Transfer? (Pink) */}
      <SectionReveal delay={0.04}>
        <BlastocystIndications />
      </SectionReveal>

      {/* 4. Day 5 Blastocyst Transfer Diagnostic Checklist (White) */}
      <SectionReveal delay={0.04}>
        <BlastocystChecklist />
      </SectionReveal>

      {/* 5. Step-by-Step Blastocyst Culture and Transfer Protocol (Pink) */}
      <SectionReveal delay={0.04}>
        <BlastocystProtocol />
      </SectionReveal>

      {/* 6. Why Choose Dr. Mona Dahiya for Blastocyst Transfer? (White) */}
      <SectionReveal delay={0.04}>
        <BlastocystWhy />
      </SectionReveal>

      {/* 7. What Patients Say About Blastocyst Transfer with Dr. Mona (Pink) */}
      <SectionReveal delay={0.04}>
        <BlastocystReviews />
      </SectionReveal>

      {/* 8. Find Dr. Mona Near You — Clinic Cards with Photos (White) */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Meet Dr. Mona"
          title="Find Dr. Mona Near You"
          subtitle="Book an appointment with Dr. Mona Dahiya. She practices at 3 locations in Noida, Ghaziabad and Delhi. Consultations are also available online."
          directionsLinkText="Get Directions"
          clinicLinkText="Visit {city} Location"
          bookButtonText="Book an Appointment"
        />
      </SectionReveal>

      {/* 9. Cost of Day 5 Embryo Transfer (Pink) */}
      <SectionReveal delay={0.04}>
        <BlastocystCost />
      </SectionReveal>

      {/* 10. Top FAQs About Blastocyst Transfer in Delhi NCR (White) */}
      <SectionReveal delay={0.04}>
        <BlastocystFaq />
      </SectionReveal>

      {/* 11. Related Fertility Treatments (Pink) */}
      <SectionReveal delay={0.04}>
        <RecurrentMiscarriageRelatedTreatments />
      </SectionReveal>

      {/* 12. Book an In-Clinic or Online Consultation Form (White) */}
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
