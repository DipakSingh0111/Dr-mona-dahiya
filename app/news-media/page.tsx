import type { Metadata } from "next";

import NewsMediaHero from "@/components/sections/news-media/NewsMediaHero";
import MediaFeatures from "@/components/sections/news-media/MediaFeatures";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import AboutReviews from "@/components/sections/about/AboutReviews";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Dr. Mona Dahiya in the News & Media | Fertility & IVF Specialist",
  description:
    "Dr. Mona Dahiya's work in fertility care has been featured across leading Indian news, business and health publications, from national dailies to specialist health portals.",
};

export default function NewsMediaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section matching Screenshot */}
      <NewsMediaHero />

      {/* Media Features — 43 Featured Articles Grid */}
      <SectionReveal>
        <MediaFeatures />
      </SectionReveal>

      {/* Medical Registration Councils */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* Patient Reviews */}
      <SectionReveal delay={0.04}>
        <AboutReviews />
      </SectionReveal>

      {/* Book a Consultation with Dr. Mona Dahiya */}
      <SectionReveal delay={0.04}>
        <AboutConsultation />
      </SectionReveal>

      {/* Take your first step towards parenthood CTA */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
