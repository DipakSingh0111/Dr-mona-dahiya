import type { Metadata } from "next";

import PatientReviewsHero from "@/components/sections/best-ivf-patient-reviews/PatientReviewsHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import ReviewsByTheme from "@/components/sections/best-ivf-patient-reviews/ReviewsByTheme";
import PatientReviewsTestimonials from "@/components/sections/best-ivf-patient-reviews/PatientReviewsTestimonials";
import HowToReadReviews from "@/components/sections/best-ivf-patient-reviews/HowToReadReviews";
import AllPatientReviewsSections from "@/components/sections/best-ivf-patient-reviews/AllPatientReviewsSections";
import PatientReviewsBottomSections from "@/components/sections/best-ivf-patient-reviews/PatientReviewsBottomSections";
import AboutConsultation from "@/components/sections/about-mona-dahiya/AboutConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Google Verified Patient Reviews | Dr. Mona Dahiya",
  description:
    "Read Google verified patient reviews of Dr. Mona Dahiya, grouped by theme — first cycle, compassion, ICSI, IUI, expertise, Noida, Ghaziabad, Delhi and more. Individual experiences in patients' own words.",
};

export default function PatientReviewsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      <PatientReviewsHero />

      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <ReviewsByTheme />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <PatientReviewsTestimonials />
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
          sectionBg="bg-pink"
          eyebrow="Book an appointment"
          title="Schedule your fertility consultation"
          subtitle="Meet Dr. Mona Dahiya to review your options and plan your care. Choose an in-clinic or online consultation, or call or write directly."
          appendContacts={false}
          consultationDuration=""
        />
      </SectionReveal>

      <SectionReveal delay={0.04}>
        <AboutParenthoodCta />
      </SectionReveal>
    </main>
  );
}
