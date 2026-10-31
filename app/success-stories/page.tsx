import type { Metadata } from "next";

import SuccessStoriesHero from "@/components/sections/success-stories/SuccessStoriesHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import SuccessStoriesContent from "@/components/sections/success-stories/SuccessStoriesContent";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import SuccessStoriesFaq from "@/components/sections/success-stories/SuccessStoriesFaq";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

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
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <SuccessStoriesFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Start Your Own Journey"
          subtitle="Book an in-clinic consultation or an online review of your previous reports with Dr. Mona Dahiya. Call"
          appendContacts={true}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
