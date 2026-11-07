"use client";

import Link from "next/link";
import { FaFlask, FaCheck, FaRegCalendarAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ReviewCard,
  CostFactorCard,
  type ReviewCardItem,
  type CostFactorItem,
} from "@/components/ui/treatment";

const reviews: ReviewCardItem[] = [
  {
    title: "Best IVF Success Rates.",
    review:
      "Dr Mona did our Egg retrieval herself and that too on a holiday. She is very good with ultrasound check-ups to find out any deviations. We did not feel any unease in the embryo transfer process. We had amazing results and a successful first transfer. My wife is 12 weeks pregnant and we would highly recommend Dr Mona's IVF Clinic in Delhi for best IVF success rates.",
    initial: "G",
    name: "Gaurav Baghel",
    source: "Patient review",
  },
  {
    review:
      "Dr Mona is a really good fertility doctor in Delhi. She has a very patient focussed approach which is unheard of these days with such famous doctors in Delhi. She came across as very genuine in every consultation. Her treatment was precise and it has resulted in a positive result in the First IVF Cycle.",
    initial: "B",
    name: "Brahm Prakash",
    source: "Google patient review",
  },
  {
    review:
      "Dr. Dahiya doesn't believe in a general approach for fertility treatment. She analyzed our case deeply and designed a tailored IVF plan that worked in the first IVF cycle. Her dedication makes her the Best Fertility Doctor in Ghaziabad. Thank you for our precious blessing and wish you infinite success.",
    initial: "A",
    name: "Arbaj khan",
    source: "Google patient review",
  },
];

const costCards: CostFactorItem[] = [
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Day 5 Embryo Culture",
    description:
      "Sequential media and use of tri-gas incubators ranges from ₹15,000 – ₹25,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Embryo Transfer",
    description:
      "Embryo transfer with sterile catheters and USG guidance costs ₹20,000 – ₹35,000.",
  },
  {
    icon: <FaRegCalendarAlt className="size-3.5" />,
    title: "Cryopreservation of Remaining Embryos",
    description: (
      <>
        Will be quoted between ₹15,000 – ₹25,000. Learn more here:{" "}
        <Link
          href="/embryo-cryopreservation"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Embryo Freezing
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "PGT-A Biopsy",
    description: "Quoted on a per embryo basis.",
  },
];

export function BlastocystReviews() {
  return (
    <TreatmentSection id="patient-reviews">
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title={
          <>
            What Patients Say About
            <br className="hidden sm:inline" /> Blastocyst Transfer with Dr. Mona
          </>
        }
        subtitle="Reviews from patients who mention Blastocyst Transfer. These are individual experiences in patients' own words."
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {reviews.map((rev) => (
          <StaggerItem key={rev.name}>
            <ReviewCard {...rev} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal variant="fadeUp" delay={0.12} className="mt-6">
        <Link
          href="/best-ivf-patient-reviews"
          className="inline-flex items-center justify-center rounded-full border border-rose/30 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink shadow-sm transition-all hover:border-rose hover:text-rose sm:text-[13.5px]"
        >
          Read All Patient Reviews
        </Link>
      </Reveal>
    </TreatmentSection>
  );
}

export function BlastocystCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Pricing Information"
        title="Cost of Day 5 Embryo Transfer"
        subtitle="As an add-on service to your IVF cycle, you will be quoted for the following."
      />

      <Stagger
        delay={0.04}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {costCards.map((card) => (
          <StaggerItem key={card.title}>
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export default function BlastocystReviewsAndCost() {
  return (
    <>
      <BlastocystReviews />
      <BlastocystCost />
    </>
  );
}
