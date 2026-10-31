import type { Metadata } from "next";

import LocationsShell from "@/components/sections/locations/LocationsShell";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Locations & Contact | Dr. Mona Dahiya Fertility Clinics",
  description:
    "Find Dr. Mona Dahiya near you across Noida, Ghaziabad and Delhi. Search your area, view clinic addresses, and book a fertility consultation.",
};

export default function LocationsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#061532]">
      <LocationsShell />

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
