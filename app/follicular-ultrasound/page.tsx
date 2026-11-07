import type { Metadata } from "next";

import FollicularHero from "@/components/sections/follicular-ultrasound/FollicularHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FollicularIndicationsAndChecklist from "@/components/sections/follicular-ultrasound/FollicularIndicationsAndChecklist";
import FollicularProtocolAndWhy from "@/components/sections/follicular-ultrasound/FollicularProtocolAndWhy";
import FollicularReviews from "@/components/sections/follicular-ultrasound/FollicularReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import FollicularCostAndFaq from "@/components/sections/follicular-ultrasound/FollicularCostAndFaq";
import FollicularRelatedTreatments from "@/components/sections/follicular-ultrasound/FollicularRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "High-Resolution Follicular Ultrasound Monitoring & Ovulation Tracking | Dr. Mona Dahiya",
  description:
    "Serial TVS scans to monitor follicle growth and endometrium under guidance of Dr. Mona Dahiya across Delhi NCR — Noida, Delhi and Ghaziabad.",
};

export default function FollicularMonitoringPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <FollicularHero />

      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularReviews />
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

      <SectionReveal delay={0.04}>
        <FollicularCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularRelatedTreatments />
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
