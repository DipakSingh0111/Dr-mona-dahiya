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
      "Dr. Mona Dahiya is the best IVF specialist in Ghaziabad, hands down. My wife and I had been through two failed IVF cycles before coming to her. Dr. Dahiya took the time to understand our case thoroughly and adjusted our treatment accordingly. We are now expecting our first child and could not be happier. Thank you, Dr. Dahiya.",
    initial: "I",
    name: "Indrajit Singh",
  },
  {
    review:
      "I cannot express how grateful we are to Dr. Mona Dahiya for helping us achieve our dream of becoming parents. Her expertise in IVF is unmatched, and her compassionate nature made the entire process stress-free. She thoroughly explained each step, and her encouragement kept us positive. Truly the best IVF doctor in Ghaziabad.",
    initial: "S",
    name: "Saurabh Kumar",
  },
  {
    review:
      "We are so overjoyed that we took the decision to consult Doctor Mona for fertility treatment. She is an extremely humble and the Best IVF Doctor in Ghaziabad to consult for IVF treatment. She gave us a lot of confidence as first-time parents. We are grateful to every member of her team for making our IVF journey special.",
    initial: "N",
    name: "Nilesh Kumar Pal",
  },
];

export default function BestIvfGhaziabadReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients in Ghaziabad Say"
        subtitle="Reviews from patients who mention Ghaziabad. These are individual experiences in patients' own words."
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
