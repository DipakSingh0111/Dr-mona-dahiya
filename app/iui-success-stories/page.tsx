import type { Metadata } from "next";

import IuiHero from "@/components/sections/iui-success-stories/IuiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiJourneys from "@/components/sections/iui-success-stories/IuiJourneys";
import IuiWhenWorks from "@/components/sections/iui-success-stories/IuiWhenWorks";
import IuiWhyTrust from "@/components/sections/iui-success-stories/IuiWhyTrust";
import IuiMoreStories from "@/components/sections/iui-success-stories/IuiMoreStories";
import IvfSuccessClinics from "@/components/sections/ivf-success-stories/IvfSuccessClinics";
import IuiFaq from "@/components/sections/iui-success-stories/IuiFaq";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Real IUI Success Stories | Dr. Mona Dahiya Fertility Specialist",
  description:
    "Read real IUI success stories from couples treated by Dr. Mona Dahiya in Noida, Delhi and Ghaziabad — ultrasound-timed IUI, usually within 2 to 3 cycles.",
};

export default function IuiSuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <IuiHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiJourneys />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiWhenWorks />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiWhyTrust />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiMoreStories />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an IUI Consultation"
          subtitle="Book an in-clinic consultation or an online review of your reports with Dr. Mona Dahiya. Call"
          appendContacts={true}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
