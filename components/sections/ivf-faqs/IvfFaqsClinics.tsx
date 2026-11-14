"use client";

import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import siteData from "@/data/site.json";

export default function IvfFaqsClinics() {
  const { clinics } = siteData.ivfFaqsPage;

  return (
    <ClinicsAppointmentCards
      sectionId="ivf-faq-clinics"
      eyebrow={clinics.eyebrow}
      title={clinics.title}
      subtitle={clinics.subtitle}
      sectionBg="bg-pink"
      showBookButton
    />
  );
}
