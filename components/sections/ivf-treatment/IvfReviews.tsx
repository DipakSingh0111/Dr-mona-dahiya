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
    title: "Warm, Friendly & Caring",
    review:
      "From the first visit, Dr. Mona explained our IVF options without pressure. The team was warm and the plan felt personal — we always knew what came next.",
    initial: "A",
    name: "Abhishek Mishra",
  },
  {
    review:
      "We came after failed cycles elsewhere. Dr. Mona reviewed every report carefully and changed the protocol. Her clarity and honesty made the journey less stressful.",
    initial: "L",
    name: "Lucky Singh",
  },
  {
    review:
      "Excellent counselling and follow-up throughout stimulation and transfer. Highly recommend Dr. Mona Dahiya for IVF in Delhi NCR.",
    initial: "V",
    name: "Vinit Kumar",
  },
];

export default function IvfReviews() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About IVF with Dr. Mona"
          subtitle="Individual experiences in patients&apos; own words."
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
