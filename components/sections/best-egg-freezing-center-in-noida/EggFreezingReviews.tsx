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
      "After 6 years of marriage and multiple failed IVF attempts, we had almost lost hope. Then we met Dr. Mona Dahiya—her expertise and personalized care changed everything. She recommended embryo freezing and a tailored protocol. Today, we are blessed with twins! Her patience and knowledge are unmatched. Forever grateful.",
    initial: "V",
    name: "Vivek",
  },
  {
    review:
      "Dr. Mona Dahiya's foresight in recommending fertility preservation before my cancer treatment was life-changing. Years later, after beating cancer, we were able to use our frozen eggs to conceive our miracle baby. Her dedication to safeguarding fertility for future generations is truly inspiring.",
    initial: "S",
    name: "Shivam Shakya",
  },
  {
    review:
      "We traveled from Lucknow to consult Dr. Mona Dahiya, and it was worth every mile. Her expertise in IVF and fertility preservation gave us our little one after years of failed attempts. She's truly the Best IVF Doctor in Ghaziabad—highly recommended fertility physician.",
    initial: "A",
    name: "Aslam alam",
  },
];

export default function EggFreezingReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Egg Freezing with Dr. Mona"
        subtitle="Reviews from patients who mention Egg Freezing. These are individual experiences in patients' own words."
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
