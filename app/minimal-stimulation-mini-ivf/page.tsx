import type { Metadata } from "next";

import MiniIvfHero from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  MiniIvfIndications,
  MiniIvfChecklist,
} from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfIndicationsAndChecklist";
import {
  MiniIvfProtocol,
  MiniIvfWhy,
} from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfProtocolAndWhy";
import {
  MiniIvfReviews,
  MiniIvfCost,
} from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import MiniIvfFaq from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfFaq";
import MiniIvfRelatedTreatments from "@/components/sections/minimal-stimulation-mini-ivf/MiniIvfRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Mini IVF Treatment in Delhi NCR | Dr. Mona Dahiya",
  description:
    "Minimal stimulation IVF, also known as mini IVF, is a type of IVF where you take mild oral medication with injection support to produce 2–5 healthy quality eggs under the guidance of Dr. Mona Dahiya.",
};

export default function MiniIvfPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <MiniIvfHero />

      {/* 2. Medical Registration Councils (White) */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. Who Needs Mini IVF? (Pink) */}
      <SectionReveal delay={0.04}>
        <MiniIvfIndications />
      </SectionReveal>

      {/* 4. Tests to Be Done Before Starting Mini IVF (White) */}
      <SectionReveal delay={0.04}>
        <MiniIvfChecklist />
      </SectionReveal>

      {/* 5. Steps Involved in the Mini IVF Protocol (Pink) */}
      <SectionReveal delay={0.04}>
        <MiniIvfProtocol />
      </SectionReveal>

      {/* 6. Why Choose Mini IVF at Dr. Mona Dahiya’s Clinic? (White) */}
      <SectionReveal delay={0.04}>
        <MiniIvfWhy />
      </SectionReveal>

      {/* 7. What Patients Say About Mini IVF with Dr. Mona (Pink) */}
      <SectionReveal delay={0.04}>
        <MiniIvfReviews />
      </SectionReveal>

      {/* 8. Visit Us at One of Our Clinic Locations (White) */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Visit Dr. Mona"
          title="Visit Us at One of Our Clinic Locations"
          subtitle="We have clinics located in Noida, Ghaziabad and Delhi. You can also consult us online."
          directionsLinkText="Directions to {city} location"
          clinicLinkText="View Clinic Page"
          bookButtonText="Book Appointment"
        />
      </SectionReveal>

      {/* 9. Cost of Mini IVF (Pink) */}
      <SectionReveal delay={0.04}>
        <MiniIvfCost />
      </SectionReveal>

      {/* 10. Frequently Asked Questions About Mini IVF (White) */}
      <SectionReveal delay={0.04}>
        <MiniIvfFaq />
      </SectionReveal>

      {/* 11. Related Fertility Treatments (Pink) */}
      <SectionReveal delay={0.04}>
        <MiniIvfRelatedTreatments />
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
