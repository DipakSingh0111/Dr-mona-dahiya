import type { Metadata } from "next";

import OurServices from "@/components/sections/Home/OurServices";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";
import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Services | Fertility & IVF Treatments | Dr. Mona Dahiya",
  description:
    "Explore IVF, IUI, ICSI, fertility preservation, diagnostics and related treatments with Dr. Mona Dahiya across Noida, Delhi and Ghaziabad.",
};

export default function OurServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <SectionReveal>
        <OurServices />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or schedule an online consultation to review your reports. Direct line: +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
