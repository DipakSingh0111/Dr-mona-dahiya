import type { Metadata } from "next";

import IntlHero from "@/components/sections/international-patients/IntlHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IntlWhyIndia from "@/components/sections/international-patients/IntlWhyIndia";
import IntlPrepare from "@/components/sections/international-patients/IntlPrepare";
import IntlProcess from "@/components/sections/international-patients/IntlProcess";
import IntlQualifications from "@/components/sections/international-patients/IntlQualifications";
import IntlPricing from "@/components/sections/international-patients/IntlPricing";
import IntlClinics from "@/components/sections/international-patients/IntlClinics";
import IntlFaq from "@/components/sections/international-patients/IntlFaq";
import IntlReviews from "@/components/sections/international-patients/IntlReviews";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "International IVF Patients in India | Dr. Mona Dahiya",
  description:
    "World-class IVF treatment in India for international patients with Dr. Mona Dahiya — medical visa assistance, online planning, and affordable IVF with ICSI.",
};

export default function InternationalPatientsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <IntlHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlWhyIndia />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlPrepare />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlProcess />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlQualifications />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlPricing />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IntlReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Request a Medical File Review"
          subtitle="Contact our international patient desk on WhatsApp +91 92679 82924 or info@drmonadahiya.com for a review of your medical file and a personalised treatment plan."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}
