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
  source: string;
}[] = [
  {
    review:
      "Dr. Mona Dahiya is among the best gynecologists for infertility in Delhi. Her clinic offers world-class facilities, and her team provides exceptional support. If you’re looking for high-success IVF in Delhi, she’s the one.",
    initial: "M",
    name: "Mithun Saha",
    source: "Google patient review",
  },
  {
    title: "Warm, Friendly & Caring",
    review:
      "We had the pleasure of getting IVF treatment in Delhi with Dr. Mona. She is a warm, friendly, and caring fertility doctor who truly goes above and beyond to ensure her patients receive the best possible care. Her entire staff is professional, helpful, and courteous, making the entire experience seamless and stress-free. I’d like to extend a special mention to the embryologist at her fertility clinic in Delhi, who was exceptional in sharing the Embryo development details.",
    initial: "A",
    name: "Abhishek Mishra",
    source: "Patient review",
  },
  {
    review:
      "We are so overjoyed that we took the decision to consult Doctor Mona for fertility treatment. She is an extremely humble and the Best IVF Doctor in Ghaziabad to consult for IVF treatment. She gave us a lot of confidence as first-time parents. We are grateful to every member of her team for making our IVF journey special.",
    initial: "N",
    name: "Nilesh Kumar Pal",
    source: "Google patient review",
  },
];

export default function FollicularReviews() {
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
