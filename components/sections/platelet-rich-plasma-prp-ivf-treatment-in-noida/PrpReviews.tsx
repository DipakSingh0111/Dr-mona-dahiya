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
    title: "Superb Infertility Specialist",
    review:
      "Dr. Mona Dahiya is superb infertility specialist. She expertly diagnosed and treated our uterine issues, including polyps and fibroids, because of which we were not able to conceive. Her thorough approach and attention to detail, especially in managing adhesions from past surgeries, was incredible.I highly recommend her as the best infertility doctor.",
    initial: "S",
    name: "Sachin Upadhyay",
    source: "Patient review",
  },
  {
    review:
      "We are immensely grateful to Dr. Mona Dahiya for her expertise in treating my wife's infertility due to low AMH levels. Despite the challenges, Dr. Mona guided us through the IVF process with remarkable care and precision. Thanks to her, we achieved success. She truly is the best doctor for IVF with low AMH in India. 🙏1",
    initial: "A",
    name: "Ashok Yadav",
    source: "Google patient review",
  },
  {
    review:
      "Her fertility clinic is a boon for patients with complex infertility problems.Dr Mona is really good is what we can say.Her experience and success rates are one of the best in india.Her team is very friendly and cooperative.Our recommendation is that you should obviously meet her for the right guidance.",
    initial: "A",
    name: "Anand Kumar",
    source: "Google patient review",
  },
];

export default function PrpReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Dr. Mona"
        subtitle="Individual experiences in patients’ own words."
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
          className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-blue transition-all hover:border-blue hover:bg-blue/5 hover:text-blue-dark"
        >
          Read All Patient Reviews
        </Link>
      </Reveal>
    </TreatmentSection>
  );
}
