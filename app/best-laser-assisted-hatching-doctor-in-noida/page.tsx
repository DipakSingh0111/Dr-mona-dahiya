import type { Metadata } from "next";

import LahHero from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import {
  LahIndications,
  LahChecklist,
} from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahIndicationsAndChecklist";
import {
  LahProtocol,
  LahWhy,
} from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahProtocolAndWhy";
import LahReviews from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import {
  LahCost,
  LahFaq,
} from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahCostAndFaq";
import LahRelatedTreatments from "@/components/sections/best-laser-assisted-hatching-doctor-in-noida/LahRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Laser Assisted Hatching in Noida, Delhi & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Laser assisted hatching is a technique where a thin beam of non-contact laser is used to make an opening in, or thin out, the shell (zona) of an embryo under the guidance of Dr. Mona Dahiya in Delhi NCR.",
};

export default function LaserAssistedHatchingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero + Counter Bar (Pink) */}
      <LahHero />

      {/* 2. Medical Registration Councils (White) */}
      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "Registration number with Delhi Medical Council",
            MCI: "Registration number with Medical Council of India",
            UPMC: "Registration number with Uttar Pradesh Medical Council",
          }}
        />
      </SectionReveal>

      {/* 3. Who Needs Laser Assisted Hatching? (Pink) */}
      <SectionReveal delay={0.04}>
        <LahIndications />
      </SectionReveal>

      {/* 4. Diagnostic Work-up Before Laser Assisted Hatching (White) */}
      <SectionReveal delay={0.04}>
        <LahChecklist />
      </SectionReveal>

      {/* 5. Steps Involved in Laser Assisted Hatching (Pink) */}
      <SectionReveal delay={0.04}>
        <LahProtocol />
      </SectionReveal>

      {/* 6. Why Choose Dr. Mona Dahiya for Laser Assisted Hatching? (White) */}
      <SectionReveal delay={0.04}>
        <LahWhy />
      </SectionReveal>

      {/* 7. What Patients Say About Laser-Assisted Hatching with Dr. Mona (Pink) */}
      <SectionReveal delay={0.04}>
        <LahReviews />
      </SectionReveal>

      {/* 8. Clinic Locations (White) */}
      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Visit Dr. Mona"
          title="Clinic Locations"
          subtitle="Dr. Mona Dahiya practises at three locations in Delhi NCR. You can also consult her online."
          directionsLinkText="How to reach {city} clinic"
          clinicLinkText="Clinic Details"
          bookButtonText="Book Appointment"
        />
      </SectionReveal>

      {/* 9. What Determines the Cost of Laser Assisted Hatching (Pink) */}
      <SectionReveal delay={0.04}>
        <LahCost />
      </SectionReveal>

      {/* 10. Frequently Asked Questions About Laser Assisted Hatching in Delhi NCR (White) */}
      <SectionReveal delay={0.04}>
        <LahFaq />
      </SectionReveal>

      {/* 11. Related Fertility Treatments (Pink) */}
      <SectionReveal delay={0.04}>
        <LahRelatedTreatments />
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
