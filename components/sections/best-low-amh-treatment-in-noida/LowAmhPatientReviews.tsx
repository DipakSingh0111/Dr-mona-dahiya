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
      "Dr. Mona Dahiya's expertise was evident when she analyzed my baseline FSH and estradiol levels to assess egg quality. Her tailored approach, based on these results, guided our treatment perfectly. Thanks to her precision and care, our IVF journey succeeded. Highly recommend her for thorough, science-backed fertility care!",
    initial: "K",
    name: "Kishan Kumar",
  },
  {
    review:
      "We are feeling very positive after our online fertility consultation with doctor mona Dahiya. She is very polite and courteous towards her patients. We have consulted a lot of infertility physicians and doctor mona ji is the one that we found to be the most educated and experienced.",
    initial: "R",
    name: "Rajesh Kumar",
  },
  {
    review:
      "I can confidently say that Dr. Mona Dahiya is the best infertility specialist in India. Our journey to parenthood was long and challenging, but Dr. Dahiya's expertise made all the difference. What sets her apart is not just her vast clinical knowledge, but the genuine care she gives every patient.",
    initial: "S",
    name: "Sandeep Kumar",
  },
];

export default function LowAmhPatientReviews() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Dr. Mona"
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
