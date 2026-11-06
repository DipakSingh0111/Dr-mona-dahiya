import type { Metadata } from "next";

import SuccessStoriesHero from "@/components/sections/success-stories/SuccessStoriesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import SuccessStoriesContent from "@/components/sections/success-stories/SuccessStoriesContent";
import SuccessStoriesClinics from "@/components/sections/success-stories/SuccessStoriesClinics";
import SuccessStoriesFaq from "@/components/sections/success-stories/SuccessStoriesFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Fertility Success Stories | Dr. Mona Dahiya",
  description:
    "Over 25,000 parenthood journeys guided by Dr. Mona Dahiya across Noida, Delhi and Ghaziabad — IVF, low AMH, PCOS and IUI stories in patients' own words.",
};

export default function SuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SuccessStoriesHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SuccessStoriesContent />

      <SectionReveal delay={0.04}>
        <SuccessStoriesClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SuccessStoriesFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          sectionBg="bg-white"
          eyebrow="Next step"
          title="Start Your Own Journey"
          subtitle="Book an in-clinic consultation or an online review of your previous reports with Dr. Mona Dahiya. Call +91 92679 82924."
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
