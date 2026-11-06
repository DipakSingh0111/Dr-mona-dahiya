import type { Metadata } from "next";

import AboutHero from "@/components/sections/about-mona-dahiya/AboutHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import AboutDoctorGlance from "@/components/sections/about-mona-dahiya/AboutDoctorGlance";
import AboutCredentials from "@/components/sections/about-mona-dahiya/AboutCredentials";
import AboutPhilosophy from "@/components/sections/about-mona-dahiya/AboutPhilosophy";
import AboutReviews from "@/components/sections/about-mona-dahiya/AboutReviews";
import AboutClinics from "@/components/sections/about-mona-dahiya/AboutClinics";
import AboutFAQ from "@/components/sections/about-mona-dahiya/AboutFAQ";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Dr. Mona Dahiya - Senior Reproductive Endocrinologist & Fertility Specialist",
  description:
    "Dr. Mona Dahiya is a senior reproductive endocrinologist & infertility specialist with 25+ years of experience. She is the Founder Director of Little Angel IVF. She has successfully treated more than 25000 couples from India and abroad.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
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
        <AboutConsultation
          eyebrow="Book Appointment"
          title="Book An Appointment With Dr. Mona Dahiya"
          subtitle="Book Your In-Clinic Consultation or Record Evaluation Online. Call: +91 92679 82924 Email: info@drmonadahiya.com"
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      {/* 5. Parenthood CTA banner */}
      <AboutParenthoodCta />
    </main>
  );
}
