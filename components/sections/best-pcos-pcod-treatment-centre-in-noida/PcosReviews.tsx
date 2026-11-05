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
      "As a PCOS patient, my wife never thought to conceive naturally. However, Dr. Mona Dahiya's tailored treatment of ovulation induction + timed intercourse—worked wonders for us. Within 6 months, my wife has got pregnant naturally! Her patience and knowledge of infertility are unmatched. She is Truly the best IVF doctor in Delhi.",
    initial: "G",
    name: "Gopi Shakya",
  },
  {
    review:
      "Do not be scared of invasive procedures is what we can share. Dr. Mona uses latest techniques to minimize discomfort. Our embryo transfer felt like normal checkup. She cares for patient comfort along with success rates. We have got 3 babies with the help of Dr Mona through IUI/IVF.",
    initial: "S",
    name: "Scout pharoah",
  },
  {
    review:
      "Nobody knows as much about ART and reproductive medicine than her. Our story is about 5 years of struggle and we completely lost trust in assisted reproductive technology (ART) after 3 failed cycles of IUI and 2 failed IVF cycles. our ... More 🔥 1",
    initial: "A",
    name: "Ajay Shakya",
  },
];

export default function PcosReviews() {
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
