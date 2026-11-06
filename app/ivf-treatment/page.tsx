import type { Metadata } from "next";

import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import IvfCostAndFaq from "@/components/sections/ivf-treatment/IvfCostAndFaq";
import IvfHero from "@/components/sections/ivf-treatment/IvfHero";
import IvfIndicationsAndChecklist from "@/components/sections/ivf-treatment/IvfIndicationsAndChecklist";
import IvfProtocolAndWhy from "@/components/sections/ivf-treatment/IvfProtocolAndWhy";
import IvfRelatedTreatments from "@/components/sections/ivf-treatment/IvfRelatedTreatments";
import IvfReviews from "@/components/sections/ivf-treatment/IvfReviews";
import type { ClinicCardData } from "@/components/sections/ClinicsAppointmentCards";
import { SectionReveal } from "@/components/ui/Reveal";

const ivfClinics: ClinicCardData[] = [
  {
    city: "Noida",
    tag: "SECTOR 49",
    image: "/images/clinics/noida.jpg",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida+Uttar+Pradesh+201301",
    secondaryLabel: "Noida Clinic",
    secondaryHref: "/best-ivf-doctor-in-noida",
  },
  {
    city: "Ghaziabad",
    tag: "RAJ NAGAR EXTENSION",
    image: "/images/clinics/ghaziabad.jpg",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Sector+15+Sector+10+Raj+Nagar+Ghaziabad",
    secondaryLabel: "Ghaziabad Clinic",
    secondaryHref: "/best-ivf-doctor-in-ghaziabad",
  },
  {
    city: "Delhi",
    tag: "LAJPAT NAGAR",
    image: "/images/clinics/delhi.jpg",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi+110024",
    secondaryLabel: "Delhi Clinic",
    secondaryHref: "/best-ivf-doctor-in-delhi",
  },
];

export const metadata: Metadata = {
  title:
    "Advanced In Vitro Fertilization (IVF) Treatment in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "In Vitro Fertilisation is a form of Assisted Reproductive Technology. Eggs are collected from the female and fertilised by treated Sperm in a lab called Embryology Lab. Embryos are grown to Blastocyst stage and transferred in the uterus. Our IVF Success Rates are 90%+ with individualised protocols.",
};

export default function IvfTreatmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <IvfHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Contact Us"
          title="Our Locations"
          subtitle="We have 3 Clinics you can visit Dr. Mona at. Also available for Online Consultations."
          clinics={ivfClinics}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
