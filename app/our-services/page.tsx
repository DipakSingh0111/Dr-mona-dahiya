import type { Metadata } from "next";

import OurServicesHero from "@/components/sections/our-services/OurServicesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import OurServicesPillars from "@/components/sections/our-services/OurServicesPillars";
import {
  OurServicesReviews,
  OurServicesCost,
} from "@/components/sections/our-services/OurServicesReviewsAndCost";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import OurServicesFaq from "@/components/sections/our-services/OurServicesFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Comprehensive Reproductive Medicine & Fertility Services in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
  description:
    "Explore fertility treatments across 3 clinical pillars: diagnostics, IVF/ICSI/Blastocyst/freezing, and laparoscopy/hysteroscopy/PRP/ERA with Dr. Mona Dahiya.",
};

export default function OurServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <OurServicesHero />

      <SectionReveal>
        <MedicalRegistration
          eyebrow="Registered Medical Practitioner"
          title="Medical Council Registration Numbers"
          subtitle="Dr. Mona Dahiya is a registered fertility doctor."
          councilRegLabels={{
            DMC: "DMC registration number",
            MCI: "MCI registration number",
            UPMC: "UPMC registration number",
          }}
        />
      </SectionReveal>

      <OurServicesPillars />

      <SectionReveal delay={0.04}>
        <OurServicesReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics
          eyebrow="Locations We Operate In"
          title="Book a Consultation at Our Clinics"
          subtitle="We are located in Noida, Delhi and ghaziabad. Also available online for consultations."
          directionsLinkText="Get directions"
          clinicLinkText="Clinic page"
          bookButtonText="Book appointment"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OurServicesCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <OurServicesFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title={
            <>
              Book an In-Clinic or
              <br />
              Online Consultation
            </>
          }
          subtitle={
            <>
              Book an in-clinic consultation with Dr. Mona Dahiya in Noida,
              Ghaziabad or Delhi, or an online review of your reports. Direct
              line:{" "}
              <a
                href="tel:+919267982924"
                className="font-medium text-blue hover:text-rose"
              >
                +91 92679 82924
              </a>
              .
            </>
          }
          appendContacts={false}
          consultationDuration="30 minutes"
          defaultClinic="Noida"
          sectionBg="bg-pink"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
