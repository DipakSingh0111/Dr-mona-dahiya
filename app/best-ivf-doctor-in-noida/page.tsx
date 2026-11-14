import type { Metadata } from "next";

import BestIvfDoctorHero from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import BestIvfDoctorIndications from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorIndications";
import BestIvfDoctorDiagnostic from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorDiagnostic";
import BestIvfDoctorProcedure from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorProcedure";
import BestIvfDoctorWhy from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorWhy";
import BestIvfDoctorReviews from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import BestIvfDoctorRelated from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorRelated";
import BestIvfDoctorCost from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorCost";
import BestIvfDoctorFaq from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorFaq";
import BestIvfDoctorAreas from "@/components/sections/best-ivf-doctor-in-noida/BestIvfDoctorAreas";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

const noidaPageClinics = [
  {
    city: "Noida",
    tag: "SECTOR 49",
    image: "/images/noida.jpeg",
    address:
      "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
    secondaryLabel: "Clinic page",
    secondaryHref: "/best-ivf-doctor-in-noida",
  },
  {
    city: "Ghaziabad",
    tag: "RAJ NAGAR EXTENSION",
    image: "/images/ghaziabad.jpeg",
    address:
      "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
    secondaryLabel: "IVF in Ghaziabad",
    secondaryHref: "/best-ivf-doctor-in-ghaziabad",
  },
  {
    city: "Delhi",
    tag: "LAJPAT NAGAR",
    image: "/images/delhi.png",
    address:
      "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
    secondaryLabel: "IVF in Delhi",
    secondaryHref: "/best-ivf-doctor-in-delhi",
  },
];

export const metadata: Metadata = {
  title: "Best IVF Doctor in Noida | Dr. Mona Dahiya",
  description:
    "Best infertility doctor in Noida, Dr Mona Dahiya — MBBS, MD & DNB from Delhi University, fellowship from Singapore General Hospital. IVF, ICSI, donor programs and IUI.",
};

export default function BestIvfDoctorInNoidaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <BestIvfDoctorHero />

      <SectionReveal>
        <MedicalRegistration />
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
        <IvfSuccessClinics
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Noida Clinic"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
          primaryCity="noida"
          clinics={noidaPageClinics}
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
