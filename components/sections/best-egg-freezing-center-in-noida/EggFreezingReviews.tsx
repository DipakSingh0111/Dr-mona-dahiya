"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ReviewCard
} from "@/components/ui/treatment";
const reviews = [
  {
    review:
      "After 6 years of marriage and failed IVF attempts elsewhere, we met Dr. Mona Dahiya. Her clear guidance and care changed our journey. We are deeply grateful.",
    initial: "V",
    name: "Vivek",
  },
  {
    review:
      "We came for fertility preservation before cancer treatment. Dr. Mona handled everything with precision and compassion. Later we had our miracle baby — forever thankful.",
    initial: "S",
    name: "Shivam Shakya",
  },
  {
    review:
      "We travelled from Lucknow to consult Dr. Mona in Ghaziabad. Her experience and honest counselling on egg freezing gave us confidence. Highly recommended.",
    initial: "A",
    name: "Aslam Alam",
  },
];

export default function EggFreezingReviews() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Egg Freezing with Dr. Mona"
          subtitle="Reviews from patients who mention Egg Freezing. These are individual experiences in patients&apos; own words."
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
            className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:border-[#93c5fd] hover:bg-white/5 hover:text-[#93c5fd]"
          >
            Read All Patient Reviews
          </Link>
        </Reveal>
      </TreatmentSection>
  );
}
