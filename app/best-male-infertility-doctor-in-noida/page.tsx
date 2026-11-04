import type { Metadata } from "next";

import MaleInfertilityNoidaHero from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaHero";
import MaleInfertilityNoidaRegistration from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaRegistration";
import MaleInfertilityNoidaConditions from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaConditions";
import MaleInfertilityNoidaWorkup from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaWorkup";
import MaleInfertilityNoidaPathway from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaPathway";
import MaleInfertilityNoidaWhy from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaWhy";
import MaleInfertilityNoidaLocation from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaLocation";
import MaleInfertilityNoidaFaq from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaFaq";
import MaleInfertilityNoidaReviews from "@/components/sections/best-male-infertility-doctor-in-noida/MaleInfertilityNoidaReviews";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Best Male Infertility Doctor in Noida | Dr. Mona Dahiya",
  description:
    "Male infertility care in Noida — low count, DNA fragmentation, azoospermia, microfluidics and surgical sperm retrieval with Dr. Mona Dahiya at Sector 49.",
};

export default function BestMaleInfertilityDoctorInNoidaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <MaleInfertilityNoidaHero />

      <SectionReveal>
        <MaleInfertilityNoidaRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaConditions />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaWorkup />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaPathway />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaWhy />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaLocation />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaFaq />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <MaleInfertilityNoidaReviews />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book a Male Fertility Consultation in Noida"
          subtitle="Book an in-clinic consultation at Sector 49, Noida, or an online review of your semen reports. Call +91 92679 82924 or email info@drmonadahiya.com."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <AboutParenthoodCta />
    </main>
  );
}
