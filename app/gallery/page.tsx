import type { Metadata } from "next";

import GalleryHero from "@/components/sections/gallery/GalleryHero";
// import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery | Dr. Mona Dahiya Fertility & IVF Centres",
  description:
    "Photo gallery of Dr. Mona Dahiya's IVF clinics across Delhi, Noida, Ghaziabad, medical events, and felicitation ceremonies.",
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Gallery Hero matching Screenshot */}
      <GalleryHero />

      {/* 2. Photo Gallery Grid */}
      {/* <SectionReveal>
        <GalleryGrid />
      </SectionReveal> */}

      {/* 3. Medical Registration Councils matching Screenshot */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 4. Take your first step towards parenthood CTA matching Screenshot */}
      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
