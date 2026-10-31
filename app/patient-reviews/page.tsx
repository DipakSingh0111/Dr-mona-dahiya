import type { Metadata } from "next";

import PatientReviewsHero from "@/components/sections/patient-reviews/PatientReviewsHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import ReviewsByTheme from "@/components/sections/patient-reviews/ReviewsByTheme";
import HowToReadReviews from "@/components/sections/patient-reviews/HowToReadReviews";
import AllPatientReviewsSections from "@/components/sections/patient-reviews/AllPatientReviewsSections";
import PatientReviewsBottomSections from "@/components/sections/patient-reviews/PatientReviewsBottomSections";
import AboutConsultation from "@/components/sections/about/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Google Verified Patient Reviews | Dr. Mona Dahiya",
  description:
    "Read Google verified patient reviews of Dr. Mona Dahiya, grouped by theme — first cycle, compassion, ICSI, IUI, expertise, Noida, Ghaziabad, Delhi and more. Individual experiences in patients' own words.",
};

export default function PatientReviewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PatientReviewsHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ReviewsByTheme />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <HowToReadReviews />
      </SectionReveal>

      <AllPatientReviewsSections />

      <SectionReveal delay={0.04}>
        <PatientReviewsBottomSections />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutConsultation
          sectionId="book-consultation"
          eyebrow="Next step"
          title="Book a Consultation"
          subtitle="Book an in-clinic consultation or an online review of your reports with Dr. Mona Dahiya. Call"
          appendContacts={true}
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
