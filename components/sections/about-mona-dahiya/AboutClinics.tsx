"use client";

import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";

export default function AboutClinics() {
  return (
    <ClinicsAppointmentCards
      sectionId="clinics"
      eyebrow="Book An Appointment With Dr. Mona Dahiya"
      title="Three clinics across Delhi NCR"
      subtitle="Timings: Monday To Saturday 10:00 AM To 5:00 PM. Choose The Clinic Near You."
      showBookButton={false}
    />
  );
}
