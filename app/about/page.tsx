import type { Metadata } from "next";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutScrollTop from "@/components/sections/about/AboutScrollTop";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import AboutDoctorGlance from "@/components/sections/about/AboutDoctorGlance";
import AboutCredentials from "@/components/sections/about/AboutCredentials";
import AboutPhilosophy from "@/components/sections/about/AboutPhilosophy";
import AboutReviews from "@/components/sections/about/AboutReviews";
import AboutClinics from "@/components/sections/about/AboutClinics";
import AboutFAQ from "@/components/sections/about/AboutFAQ";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Dr. Mona Dahiya | Medical Excellence in Reproductive Medicine",
  description:
    "Dr. Mona Dahiya (MBBS Gold Medalist, MD Gold Medalist, Singapore General Hospital Fellow) is a senior reproductive endocrinologist and fertility specialist with 25+ years of clinical experience.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutScrollTop />

      {/* Hero Section */}
      <AboutHero />

      {/* Medical Registration (DMC-7795, MCI-09/6820, UPMC-110541) */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* Doctor-Led Fertility Care & "Dr. Mona Dahiya at a glance" Stats */}
      <SectionReveal delay={0.04}>
        <AboutDoctorGlance />
      </SectionReveal>

      {/* Qualifications, experience & recognition (Tabs & Medals) */}
      <SectionReveal delay={0.04}>
        <AboutCredentials />
      </SectionReveal>

      {/* Clinical Philosophy & Research Contributions */}
      <SectionReveal delay={0.04}>
        <AboutPhilosophy />
      </SectionReveal>

      {/* 1. Patient Reviews: What Patients Say About Dr. Mona */}
      <SectionReveal delay={0.04}>
        <AboutReviews />
      </SectionReveal>

      {/* 2. Three clinics across Delhi NCR */}
      <SectionReveal delay={0.04}>
        <AboutClinics />
      </SectionReveal>

      {/* 3. Frequently Asked Questions About Dr. Mona Dahiya */}
      <SectionReveal delay={0.04}>
        <AboutFAQ />
      </SectionReveal>

      {/* 4. Book a Consultation with Dr. Mona Dahiya (Pricing & Form) */}
      <SectionReveal delay={0.04}>
        <AboutConsultation />
      </SectionReveal>

      {/* 5. Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
