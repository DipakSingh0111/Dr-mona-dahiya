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
      "Unlike other fertility doctors who seem to have major Ego issues,Dr Mona Dahiya is so lovable and approachable. She provides individualized attention so that couples feel heard and supported. We were always well-informed for the medicines,tests and costs involved.We will rate her as simply exceptional. 🔥 1",
    initial: "S",
    name: "Shivam Singh",
  },
  {
    review:
      "Dr. Mona provides ethical infertility care with amazing success results. Her explanations are very clear and the costs are transparent. She prioritizes necessary treatments and has very good infertility experience. I Highly recommend Doctor Mona as one of the Best Fertility doctors in the world today.",
    initial: "C",
    name: "Chute Yakcho",
  },
  {
    review:
      "Choosing IVF procedure was an emotional journey, but Dr. Mona Dahiya’s compassionate guidance made all the difference. Her ethical approach and high moral values gave us peace of mind. Today, we hold our healthy baby boy in our arms, forever grateful for the selfless gift of Dr. Dahiya’s expertise.",
    initial: "A",
    name: "Atul Rajput",
  },
];

export default function LaparoscopyReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Dr. Mona"
        subtitle="Individual experiences in patients' own words."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3"
      >
        {reviews.map((rev) => (
          <StaggerItem key={rev.name} className="h-full">
            <ReviewCard {...rev} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal variant="fadeUp" delay={0.1} className="mt-8">
        <Link
          href="/best-ivf-patient-reviews"
          className="inline-flex items-center justify-center rounded-full border border-rose/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink transition-all hover:border-rose hover:bg-rose hover:text-white"
        >
          Read All Patient Reviews
        </Link>
      </Reveal>
    </TreatmentSection>
  );
}
