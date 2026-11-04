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
    title: "Compassion & Dedication",
    review:
      "I had a fantastic experience with Dr. Mona Dahiya. From the moment we entered their IVF centre, I felt welcome and at ease. Dr. Mona was attentive, listened to my concerns, and explained my condition and treatment options clearly. Her professionalism and expertise shone through. I highly recommend Dr. Mona for her compassionate approach and dedication to patient care.",
    initial: "R",
    name: "Rajesh Shakya",
    source: "Patient review",
  },
  {
    title: "Compassion & Care",
    review:
      "Dr. Mona Dahiya's expertise and compassionate care made our IVF journey a truly positive one. Her guidance throughout ovarian stimulation was exceptional. She clearly explained each step, addressed our concerns with patience, and her constant encouragement made all the difference. Thank you, Dr. Dahiya, for helping make our dream of parenthood a reality.",
    initial: "F",
    name: "Firoj khan",
    source: "Patient review",
  },
  {
    review:
      "Dr. Mona Dahiya's reputation as a top IVF doctor is so well-deserved. Her expertise, combined with her genuine care and compassion, sets her apart. She treated us with respect, listened to our concerns, and empowered us to make informed decisions. Thanks to her, we're now proud parents, and our hearts are overflowing with gratitude.",
    initial: "M",
    name: "Manjesh Rajput",
    source: "Google patient review",
  },
];

export default function EraReviews() {
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
