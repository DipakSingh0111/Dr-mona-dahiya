"use client";

import Link from "next/link";
import { FaCapsules, FaRegCalendarAlt, FaFlask, FaCheck } from "react-icons/fa";
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

const costCards: CostFactorItem[] = [
  {
    icon: <FaCapsules className="size-3.5" />,
    title: "Cost of drugs",
    description:
      "Tablets + injections: ₹10,000-25,000 (compared to the conventional IVF drug cost of ₹50,000-85,000).",
  },
  {
    icon: <FaRegCalendarAlt className="size-3.5" />,
    title: "Scan + blood workup",
    description: "Ultrasound scans and blood tests: ₹5,000 to ₹10,000.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Egg pickup and lab charges",
    description: "Retrieval, lab consumables and fertilisation: ₹60,000 to ₹95,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Embryo freezing (if opted)",
    description: (
      <>
        Can be checked at{" "}
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
];

export function MiniIvfReviews() {
  return (
    <TreatmentSection id="patient-reviews">
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title={
          <>
            What Patients Say About
            <br className="hidden sm:inline" /> Mini IVF with Dr. Mona
          </>
        }
        subtitle="Reviews from patients who mention Mini IVF. These are individual experiences in patients’ own words."
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

      <Reveal variant="fadeUp" delay={0.1} className="mt-6">
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

export function MiniIvfCost() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Transparency"
        title="Cost of Mini IVF"
        subtitle={
          <>
            Drug cost is lower in mini IVF compared to conventional IVF. On
            average, a complete cycle of mini IVF costs between ₹85,000 and
            ₹1,40,000. This cost may vary from patient to patient. After
            consulting Dr. Mona, she will share an estimate of the cost with
            you.
          </>
        }
      />

      <Stagger
        delay={0.05}
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

export default MiniIvfReviews;
