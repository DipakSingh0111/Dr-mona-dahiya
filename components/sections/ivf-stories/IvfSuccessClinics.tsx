"use client";

import siteData from "@/data/site.json";
import ClinicsAppointmentCards, {
  type ClinicsAppointmentCardsProps,
} from "@/components/sections/ClinicsAppointmentCards";

type IvfSuccessClinicsExtra = {
  directionsLinkText?: string;
  clinicLinkText?: string;
  bookButtonText?: string;
};

export default function IvfSuccessClinics(
  props: ClinicsAppointmentCardsProps & IvfSuccessClinicsExtra,
) {
  const { eyebrow, title, subtitle } = siteData.ivfStoriesPage.clinics;
  const {
    directionsLinkText,
    clinicLinkText,
    bookButtonText,
    directionsLabel,
    clinicLinkLabel,
    bookButtonLabel,
    ...rest
  } = props;

  return (
    <ClinicsAppointmentCards
      eyebrow={rest.eyebrow ?? eyebrow}
      title={rest.title ?? title}
      subtitle={rest.subtitle ?? subtitle}
      directionsLabel={directionsLabel ?? directionsLinkText ?? "Directions"}
      clinicLinkLabel={clinicLinkLabel ?? clinicLinkText ?? "Clinic page"}
      bookButtonLabel={
        bookButtonLabel ?? bookButtonText ?? "Book Appointment"
      }
      {...rest}
    />
  );
}
