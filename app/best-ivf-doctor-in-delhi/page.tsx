import type { Metadata } from "next";

import BestIvfDelhiHero from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiHero";
import BestIvfDelhiMedicalRegistration from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiMedicalRegistration";
import BestIvfDelhiIndications from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiIndications";
import BestIvfDelhiDiagnostic from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiDiagnostic";
import BestIvfDelhiProtocol from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiProtocol";
import BestIvfDelhiWhy from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiWhy";
import BestIvfDelhiReviews from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiReviews";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import BestIvfDelhiRelated from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiRelated";
import BestIvfDelhiCost from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiCost";
import BestIvfDelhiFAQ from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiFAQ";
import BestIvfDelhiConsultation from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiConsultation";
import BestIvfDelhiAreas from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiAreas";
import BestIvfDelhiParenthoodCta from "@/components/sections/best-ivf-doctor-in-delhi/BestIvfDelhiParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Best IVF Doctor in Delhi | Dr. Mona Dahiya",
  description:
    "IVF specialist in Delhi with 25+ yrs experience. Gold Medalist MBBS & MD. DNB and Fellowship from Singapore General Hospital in IVF. IVF, ICSI, IUI & fertility preservation services available at our Delhi IVF clinic with customized plans. She has IVF success rates of 90%+.",
};

export default function BestIvfDoctorInDelhiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <BestIvfDelhiHero />

      <SectionReveal>
        <BestIvfDelhiMedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiDiagnostic />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiProtocol />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ClinicsAppointmentCards
          eyebrow="Consult Dr. Mona"
          title="Book Appointment with us"
          subtitle="We have centres at Noida, Ghaziabad and Delhi. Also offer online consultations."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiRelated />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiFAQ />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiConsultation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiAreas />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfDelhiParenthoodCta />
      </SectionReveal>
    </main>
  );
}
