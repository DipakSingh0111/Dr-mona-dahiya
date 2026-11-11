"use client";

import siteData from "@/data/site.json";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";

export default function BookAppointmentClinics() {
  const { clinics } = siteData.bookAppointmentPage;

  return (
    <ClinicsAppointmentCards
      sectionId="clinics"
      eyebrow={clinics.eyebrow}
      title={clinics.title}
      subtitle={clinics.subtitle}
      bookHref="#direct-booking"
      bookButtonLabel="Book Appointment"
    />
  );
}
