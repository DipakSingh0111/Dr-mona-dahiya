"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ReviewCard
} from "@/components/ui/treatment";
const reviews: {
  title?: string;
  review: string;
  initial: string;
  name: string;
}[] = [
  {
    title: "Fertility Specialist Who Truly Cares",
    review:
      "Dr. Mona’s energy and positivity make every visit feel lighter. She listens carefully and puts patients at ease while explaining complex care with clarity and kindness.",
    initial: "V",
    name: "Vijay Veer",
  },
  {
    review:
      "We are forever grateful to Dr. Dahiya for helping us start our family. Her expertise in infertility treatment is remarkable and her support never wavered.",
    initial: "M",
    name: "Md Kalam",
  },
  {
    review:
      "We were struggling to conceive for years, but Dr. Mona Dahiya made our dream come true. We have got twins in one go.",
    initial: "R",
    name: "Radha Kishan",
  },
];

export default function OncofertilityReviews() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Oncofertility with Dr. Mona"
          subtitle="Reviews from patients who mention Oncofertility. These are individual experiences in patients&apos; own words."
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
