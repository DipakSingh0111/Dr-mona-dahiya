"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ReviewCard,
  type ReviewCardItem,
} from "@/components/ui/treatment";

const reviews: ReviewCardItem[] = [
  {
    title: "Fertility Specialist Who Truly Cares",
    review:
      "Dr. Mona's infectious energy and positivity are truly remarkable. She has a unique ability to make her patients feel at ease and understood, and her passion for helping women navigate the fertility journey is inspiring. Her dedication to empowering women with knowledge and comfort is unparalleled, and we feel grateful to have had the opportunity to get treated by her. If you're seeking a fertility specialist who truly cares, look no further than Dr. Mona — she's a true gem!",
    initial: "V",
    name: "Vijay Veer",
    source: "Patient review",
  },
  {
    review:
      "We are forever grateful to Dr. Dahiya for helping us start our family. As a leading fertility specialist, she customized a treatment plan that worked for us when others couldn't. Her expertise in infertility treatment is remarkable, and her warm demeanor made the journey less stressful. She's simply the best IVF doctor.",
    initial: "M",
    name: "Md Kalam",
    source: "Google patient review",
  },
  {
    review:
      "We were struggling to conceive for years, but Dr. Mona Dahiya made our dream come true! Her expertise in IVF treatment and compassion are unbeatable. We are now happy that we have got twins in one go. We Thank you, Dr. Mona for your dedication and care.",
    initial: "R",
    name: "Radha Kishan",
    source: "Google patient review",
  },
];

export default function OncofertilityReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Oncofertility with Dr. Mona"
        subtitle="Reviews from patients who mention Oncofertility. These are individual experiences in patients' own words."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3"
      >
        {reviews.map((rev) => (
          <StaggerItem key={rev.name}>
            <ReviewCard {...rev} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal variant="fadeUp" delay={0.1} className="mt-8">
        <Link
          href="/best-ivf-patient-reviews"
          className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-blue transition-all hover:border-blue hover:bg-blue/5 hover:text-blue-dark"
        >
          Read All Patient Reviews
        </Link>
      </Reveal>
    </TreatmentSection>
  );
}
