"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ReviewCard
} from "@/components/ui/treatment";
interface ReviewCard {
  title?: string;
  review: string;
  initial: string;
  name: string;
  label: string;
}

const reviews: ReviewCard[] = [
  {
    title: "Most Knowledgeable IVF Doctor",
    review:
      "Words cannot describe how Dr Mona has changed our life through IVF treatment. She is the most knowledgeable IVF doctor in India and gave us all the time to answer our questions. We were inspired with her down to earth attitude even though she is an Internationally recognized IVF Doctor. We were told that she is a miracle IVF doctor and we agree now. We now have precious baby boy and hope he becomes a Doctor like Dr Mona some day in the future.",
    initial: "S",
    name: "Shiv Kaushal",
    label: "Patient review",
  },
  {
    review:
      "Doctor Mona Dahya is a name synonymous with trust and expertise for infertility treatment in India. Her accurate diagnosis and valuable advice have helped us become parents in this life. Her motivational conversations are very inspiring and uplifting. She is a true legend in the field of infertility treatment and a wonderful human being.",
    initial: "Y",
    name: "Yatendra Yadav",
    label: "Google patient review",
  },
  {
    review:
      "Dr Mona's Clinic is one of the leading IVF Clinics in India. Dr. Mona Dahiya offers outstanding care and expertise. Her commitment to her patients is evident in every interaction. We felt confident and reassured throughout our treatment, and we highly recommend her IVF clinic in India to anyone struggling with infertility.",
    initial: "S",
    name: "Suman Mishra",
    label: "Google patient review",
  },
];

export default function FemalePatientReviews() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Dr. Mona"
          subtitle="Individual experiences in patients&apos; own words."
        />

        {/* 3 Review Cards Grid */}
        <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {reviews.map((rev, idx) => (
            <StaggerItem key={idx}>
            <ReviewCard {...rev} />
          </StaggerItem>
          ))}
        </Stagger>

        {/* Read All Patient Reviews Button */}
        <Reveal variant="fadeUp" delay={0.1} className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all hover:border-blue hover:bg-blue hover:text-white"
          >
            Read All Patient Reviews
          </Link>
        </Reveal>
      </TreatmentSection>
  );
}

