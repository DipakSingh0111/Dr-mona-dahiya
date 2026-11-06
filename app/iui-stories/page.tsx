import type { Metadata } from "next";

import IuiHero from "@/components/sections/iui-stories/IuiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiJourneys from "@/components/sections/iui-stories/IuiJourneys";
import IuiWhenWorks from "@/components/sections/iui-stories/IuiWhenWorks";
import IuiWhyTrust from "@/components/sections/iui-stories/IuiWhyTrust";
import IuiMoreStories from "@/components/sections/iui-stories/IuiMoreStories";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import IuiFaq from "@/components/sections/iui-stories/IuiFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Real IUI Success Stories | Dr. Mona Dahiya",
  description:
    "Real ultrasound-timed IUI success stories from couples treated by Dr. Mona Dahiya across Noida, Delhi and Ghaziabad.",
};

export default function IuiSuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
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
        <IvfSuccessClinics
          eyebrow="Book Your Appointment Today!"
          title="Book a Consultation at Our Clinics"
          subtitle="Click on your city of choice! We have clinics located in Noida, Ghaziabad and Delhi, India. Click to book an online consultation."
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an IUI Consultation"
          subtitle="Book an in-clinic consultation or an online review of your reports. Call +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
