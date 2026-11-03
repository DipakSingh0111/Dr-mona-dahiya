import type { Metadata } from "next";

import BestIvfGhaziabadHero from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadHero";
import BestIvfGhaziabadMedicalRegistration from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadMedicalRegistration";
import BestIvfGhaziabadIndications from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadIndications";
import BestIvfGhaziabadDiagnostic from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadDiagnostic";
import BestIvfGhaziabadProtocol from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadProtocol";
import BestIvfGhaziabadWhy from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadWhy";
import BestIvfGhaziabadReviews from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadReviews";
import ClinicsAppointmentCards from "@/components/sections/ClinicsAppointmentCards";
import BestIvfGhaziabadRelated from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadRelated";
import BestIvfGhaziabadCost from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadCost";
import BestIvfGhaziabadFAQ from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadFAQ";
import BestIvfGhaziabadAreas from "@/components/sections/best-ivf-doctor-in-ghaziabad/BestIvfGhaziabadAreas";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Best IVF Doctor in Ghaziabad | Dr. Mona Dahiya",
  description:
    "Best IVF doctor in Ghaziabad — Dr. Mona Dahiya (MBBS, MD, DNB, Singapore General Hospital fellowship). IVF, ICSI, IUI and fertility care at Raj Nagar Extension.",
};

export default function BestIvfDoctorInGhaziabadPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <BestIvfGhaziabadHero />

      <SectionReveal>
        <BestIvfGhaziabadMedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadIndications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadDiagnostic />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadProtocol />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ClinicsAppointmentCards
          eyebrow="Visit Dr. Mona"
          title="Book a Consultation at Our Ghaziabad Clinic"
          subtitle="Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations."
          primaryCity="ghaziabad"
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadRelated />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadFAQ />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya at our Ghaziabad clinic, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <BestIvfGhaziabadAreas />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
