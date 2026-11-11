"use client";

import siteData from "@/data/site.json";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";

export default function SuccessStoriesClinics() {
  const { eyebrow, title, subtitle } = siteData.successStoriesPage.clinics;

  return (
    <ClinicsAppointmentCards
      sectionId="clinics"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
    />
  );
}
