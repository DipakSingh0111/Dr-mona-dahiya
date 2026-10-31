import type { Metadata } from "next";

import SuccessStoriesHero from "@/components/sections/success-stories/SuccessStoriesHero";
import SuccessStoriesContent from "@/components/sections/success-stories/SuccessStoriesContent";
import SuccessStoriesFaq from "@/components/sections/success-stories/SuccessStoriesFaq";
import IvfFaqsClinics from "@/components/sections/ivf-faqs/IvfFaqsClinics";
import LocationsRegistration from "@/components/sections/locations/LocationsRegistration";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Fertility Success Stories | Dr. Mona Dahiya",
  description:
    "Real patient success stories — IVF, Low AMH, PCOS and IUI journeys with Dr. Mona Dahiya. Over 25,000 parenthood journeys.",
};

export default function SuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <SuccessStoriesHero />

      <SectionReveal>
        <LocationsRegistration />
      </SectionReveal>

      <SuccessStoriesContent />

      <SectionReveal delay={0.04}>
        <IvfFaqsClinics />
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
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
