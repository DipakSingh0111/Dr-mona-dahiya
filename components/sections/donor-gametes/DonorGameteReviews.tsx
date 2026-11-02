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
    title: "Warm, Friendly & Caring",
    review:
      "We had the pleasure of getting IVF treatment in Delhi with Dr. Mona. She is a warm, friendly, and caring fertility doctor who truly goes above and beyond to ensure her patients receive the best possible care. Her entire staff is professional, helpful, and courteous, making the entire experience seamless and stress-free. I'd like to extend a special mention to the embryologist at her fertility clinic in Delhi, who was exceptional in sharing the Embryo development details.",
    initial: "A",
    name: "Abhishek Mishra",
  },
  {
    review:
      "We got success with Dr Mona after 1 IVF Failure at Indira IVF. Dr. Mona has very high knowledge about fertility procedures. She did an advanced embryo grading along with an ERA test that pinpointed the issue for us. One cycle with her and we are finally pregnant. Yes, she is just amazing in her approach and results.",
    initial: "L",
    name: "Lucky Singh",
  },
  {
    review:
      "We had the most Supportive Fertility Journey with Dr. Mona. Having now known her I can proudly say that beyond her medical excellence her emotional support kept us going. Her gentle embryo transfer technique resulted in a smooth pregnancy for us. We will be forever thankful to her and her wonderful team.",
    initial: "V",
    name: "Vinit Kumar",
  },
];

export default function DonorGameteReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Dr. Mona"
        subtitle="Individual experiences in patients' own words."
      />

      <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
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
