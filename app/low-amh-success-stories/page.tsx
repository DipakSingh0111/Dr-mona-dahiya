import type { Metadata } from "next";

import LowAmhHero from "@/components/sections/low-amh-success-stories/LowAmhHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import LowAmhJourneys from "@/components/sections/low-amh-success-stories/LowAmhJourneys";
import LowAmhProtocols from "@/components/sections/low-amh-success-stories/LowAmhProtocols";
import WhyConsultLowAmh from "@/components/sections/low-amh-success-stories/WhyConsultLowAmh";
import LowAmhMoreStories from "@/components/sections/low-amh-success-stories/LowAmhMoreStories";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import LowAmhFaq from "@/components/sections/low-amh-success-stories/LowAmhFaq";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Real Low AMH Success Stories | Dr. Mona Dahiya Fertility Specialist",
  description:
    "Read real patient stories of women with low AMH (<1.0 ng/mL) who conceived with their own eggs under Dr. Mona Dahiya in Noida, Delhi and Ghaziabad.",
};

export default function LowAmhSuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <LowAmhHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhJourneys />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhProtocols />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <WhyConsultLowAmh />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhMoreStories />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <LowAmhFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          eyebrow="Next step"
          title={
            <>
              Book a Low
              <br />
              AMH Consultation
            </>
          }
          subtitle="Book an in-clinic consultation or an online review of your AMH and scan reports. Call"
          appendContacts={true}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
