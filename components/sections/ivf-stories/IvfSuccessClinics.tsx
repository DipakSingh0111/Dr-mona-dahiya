"use client";

import ClinicsAppointmentCards, {
  type ClinicsAppointmentCardsProps,
} from "@/components/sections/ClinicsAppointmentCards";

export default function IvfSuccessClinics(props: ClinicsAppointmentCardsProps) {
  return (
    <ClinicsAppointmentCards
      eyebrow="Visit Dr. Mona"
      title="Book a Consultation at Our Clinics"
      subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
      {...props}
    />
  );
}
