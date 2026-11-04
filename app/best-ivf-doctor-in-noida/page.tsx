import type { Metadata } from "next";

import BestIvfDoctorHero from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorHero";
import BestIvfDoctorMedicalRegistration from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorMedicalRegistration";
import BestIvfDoctorIndications from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorIndications";
import BestIvfDoctorDiagnostic from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorDiagnostic";
import BestIvfDoctorProcedure from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorProcedure";
import BestIvfDoctorWhy from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorWhy";
import BestIvfDoctorReviews from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorReviews";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import BestIvfDoctorRelated from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorRelated";
import BestIvfDoctorCost from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorCost";
import BestIvfDoctorFaq from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorFaq";
import BestIvfDoctorAreas from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorAreas";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Best IVF Doctor in Noida | Dr. Mona Dahiya",
  description:
    "Best IVF doctor in Noida — Dr. Mona Dahiya (MBBS, MD, DNB, Singapore General Hospital fellowship). IVF, ICSI, IUI and fertility care with customised protocols.",
};

export default function BestIvfDoctorInNoidaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <BestIvfDoctorHero />

      <SectionReveal>
        <BestIvfDoctorMedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorDiagnostic />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorProcedure />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ClinicsAppointmentCards
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Noida Clinic"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
          primaryCity="noida"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorRelated />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya at our Noida clinic, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDoctorAreas />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
