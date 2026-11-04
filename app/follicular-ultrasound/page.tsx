import type { Metadata } from "next";

import FollicularHero from "@/components/sections/follicular-ultrasound/FollicularHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import FollicularIndicationsAndChecklist from "@/components/sections/follicular-ultrasound/FollicularIndicationsAndChecklist";
import FollicularProtocolAndWhy from "@/components/sections/follicular-ultrasound/FollicularProtocolAndWhy";
import FollicularReviews from "@/components/sections/follicular-ultrasound/FollicularReviews";
import IvfSuccessClinics from "@/components/sections/ivf-stories/IvfSuccessClinics";
import FollicularCostAndFaq from "@/components/sections/follicular-ultrasound/FollicularCostAndFaq";
import FollicularRelatedTreatments from "@/components/sections/follicular-ultrasound/FollicularRelatedTreatments";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Follicular Ultrasound Monitoring & Ovulation Tracking | Dr. Mona Dahiya",
  description:
    "High-resolution follicular ultrasound monitoring with Dr. Mona Dahiya across Delhi NCR — folliculometry for timed intercourse and IUI success.",
};

export default function FollicularMonitoringPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <FollicularHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularIndicationsAndChecklist />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularProtocolAndWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IvfSuccessClinics />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularCostAndFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <FollicularRelatedTreatments />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book an In-Clinic or Online Consultation"
          subtitle="Book an in-clinic consultation with Dr. Mona Dahiya in Noida, Ghaziabad or Delhi, or a video review of your reports. Direct line: +91 92679 82924."
          appendContacts={false}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
