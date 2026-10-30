import type { Metadata } from "next";

import NotFoundHero from "@/components/sections/not-found/NotFoundHero";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Dr. Mona Dahiya Fertility Specialist",
  description:
    "The requested page could not be found. Explore fertility treatments, clinic locations, or contact Dr. Mona Dahiya's team.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col justify-center">
      <NotFoundHero />
    </main>
  );
}
