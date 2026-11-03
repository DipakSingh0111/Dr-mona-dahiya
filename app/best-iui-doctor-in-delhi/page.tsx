import type { Metadata } from "next";

import IuiDelhiHero from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiDelhiAbout from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiAbout";
import IuiDelhiDoctor from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiDoctor";
import IuiDelhiWhy from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiWhy";
import IuiDelhiTests from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiTests";
import IuiDelhiSteps from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiSteps";
import IuiDelhiCost from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiCost";
import IuiDelhiClinic from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiClinic";
import IuiDelhiReviews from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiReviews";
import IuiDelhiRelated from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiRelated";
import IuiDelhiFaq from "@/components/sections/best-iui-doctor-in-delhi/IuiDelhiFaq";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "IUI Treatment Delhi | Best IUI Doctor In Delhi — Dr. Mona Dahiya",
  description:
    "Dr. Mona Dahiya with 25+ years of experience offers IUI treatment in Delhi. We can guide you whether you need IUI and plan each IUI cycle based on your reports.",
};

export default function BestIuiDoctorInDelhiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <IuiDelhiHero />

      <SectionReveal>
        <MedicalRegistration dark={true} />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiAbout />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiDoctor />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiTests />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiSteps />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiCost />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiClinic />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiRelated />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <IuiDelhiFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Book an appointment"
          title="Schedule your fertility consultation in Delhi"
          subtitle="Meet Dr. Mona Dahiya to evaluate your options and plan your care. Choose an in-clinic or online consultation, or call or write directly."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}
