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
      "We are so grateful to Dr. Mona Dahiya for our baby born through ICSI. Her knowledge is fabulous and she gave us a lot of confidence. She explained everything simply and was always available for our doubts clarification. Her dedication is unmatched and we highly recommend her to anyone seeking any kind of fertility treatment.",
    initial: "K",
    name: "Kunal",
  },
  {
    review:
      "Dr. Mona Dahiya is the best male infertility doctor in Delhi! My poor sperm quality led us to her, and she recommended ICSI—injecting a single healthy sperm into the egg during IVF. Her expertise in this advanced technique gave us our miracle baby. Grateful for her precision and compassionate care!",
    initial: "V",
    name: "Vijender Yadav",
  },
  {
    review:
      "Male infertility carries so much stigma, but Dr. Mona Dahiya normalized our struggle. Her thorough tests revealed low sperm DNA fragmentation, which previous clinics overlooked. With targeted treatments and ICSI, we welcomed our son. She doesn't just treat women—she heals couples.",
    initial: "V",
    name: "Vishal Jatav",
  },
];

export default function IcsiReviews() {
  return (
    <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About ICSI with Dr. Mona"
          subtitle="Reviews from patients who mention ICSI. These are individual experiences in patients&apos; own words."
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
