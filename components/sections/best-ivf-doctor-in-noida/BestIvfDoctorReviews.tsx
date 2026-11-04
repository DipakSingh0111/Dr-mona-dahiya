"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ReviewCard,
} from "@/components/ui/treatment";

const reviews = [
  {
    review:
      "We consulted Dr. Mona Dahiya for fertility treatment at Noida Extension. Her skills in diagnosing our infertility was evident and she immediately put us on a personalized path which is her USP. Her special attention to our emotions made us trust her completely. We are overjoyed with the positive outcome she helped us achieve.",
    initial: "R",
    name: "Rinkussaini001 Saini",
  },
  {
    review:
      "Dr. Mona Dahiya is fantastic! She really knows her stuff and was always there to guide us. You can tell she cares about her patients. If you're looking for the best IVF doctor in Noida, she's the one. We felt reassured throughout the process and are now expecting our little one. Highly recommend her!",
    initial: "S",
    name: "SAKE KRISHNA",
  },
  {
    review:
      "Dr. Mona Dahiya made our dream come true. She's approachable and kind, which made us feel comfortable throughout the IVF treatment. Truly, she's the best IVF doctor in Noida. The clinic is well-organized, and the staff is great. We can't thank her enough for helping us become parents!",
    initial: "D",
    name: "Dinesh Sarkar",
  },
];

export default function BestIvfDoctorReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients in Noida Say"
        subtitle="Reviews from patients who mention Noida. These are individual experiences in patients' own words."
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
