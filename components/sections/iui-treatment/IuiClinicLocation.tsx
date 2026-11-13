"use client";

import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";

export default function IuiClinicLocation() {
  return (
    <ClinicsAppointmentCards
      eyebrow="Find Us"
      title="Book Your Appointment at One of Our Locations"
      subtitle="Dr. Mona is available at our locations in Noida, Ghaziabad and Delhi. She also does online consultations."
      directionsLabel="Get Directions"
      clinicLinkLabel="Our Clinic"
      bookButtonLabel="Make An Appointment"
      primaryCity="noida"
    />
  );
}
