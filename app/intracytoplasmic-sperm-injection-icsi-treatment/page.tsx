import type { Metadata } from "next";

import IcsiHero from "@/components/sections/intracytoplasmic-sperm-injection-icsi-treatment/IcsiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IcsiIndicationsAndChecklist from "@/components/sections/intracytoplasmic-sperm-injection-icsi-treatment/IcsiIndicationsAndChecklist";
import IcsiProtocolAndWhy from "@/components/sections/intracytoplasmic-sperm-injection-icsi-treatment/IcsiProtocolAndWhy";
import IcsiReviews from "@/components/sections/intracytoplasmic-sperm-injection-icsi-treatment/IcsiReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import IcsiCostAndFaq from "@/components/sections/intracytoplasmic-sperm-injection-icsi-treatment/IcsiCostAndFaq";
import IcsiRelatedTreatments from "@/components/sections/intracytoplasmic-sperm-injection-icsi-treatment/IcsiRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Advanced ICSI Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "ICSI treatment with Dr. Mona Dahiya for male-factor infertility. Indications, protocol, cost factors, clinics in Delhi NCR, and fertilisation rates of 90%+.",
};

export default function IcsiTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <IcsiHero />

      <SectionReveal>
        <MedicalRegistration
          councilRegLabels={{
            DMC: "DMC Reg No.",
            MCI: "MCI Reg No.",
            UPMC: "UPMC Reg No.",
          }}
        />
      </SectionReveal>

      <IcsiIndicationsAndChecklist />

      <IcsiProtocolAndWhy />

      <SectionReveal delay={0.04}>
        <IcsiReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Visit Us"
          title="Book An Appointment At Our Clinic Locations"
          subtitle="Dr. Mona Dahiya practices in Noida, Ghaziabad & Delhi. You can also consult online."
          directionsLinkText="Directions"
          clinicLinkText="View Clinic"
          bookButtonText="Book Appointment"
        />
      </SectionReveal>

      <IcsiCostAndFaq />

      <SectionReveal delay={0.04}>
        <IcsiRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
