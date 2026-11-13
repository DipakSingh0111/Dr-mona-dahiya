"use client";

import Link from "next/link";
import { FaCalendarAlt, FaFlask, FaPills } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  ReviewCard,
  type CostFactorItem,
  type ReviewCardItem,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose";

const costTiers: CostFactorItem[] = [
  {
    icon: <FaPills className="size-3.5" />,
    title: "If You Choose Mild Stimulation or Natural IVF",
    description: (
      <>
        ₹1,00,000, does not include injections. Learn more about{" "}
        <Link href="/minimal-stimulation-mini-ivf" className={linkClass}>
          Mini IVF
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "IVF + ICSI + Blastocyst Culture",
    description:
      "Between ₹1,25,000 and ₹1,75,000, plus injection costs ranging between ₹45,000 and ₹75,000.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Monthly EMI",
    description:
      "Ranges between ₹8,500 and ₹14,500 per month depending on EMI tenure and advance.",
  },
];

const reviews: ReviewCardItem[] = [
  {
    name: "Shivam Singh",
    initial: "S",
    review:
      "Unlike other fertility doctors who seem to have major Ego issues,Dr Mona Dahiya is so lovable and approachable.She provides individualized attention so that couples feel heard and supported.We were always well-informed for the medicines,tests and costs involved.We will rate her as simply exceptional. 👍 1",
    source: "Google patient review",
  },
  {
    name: "Chute Yakcho",
    initial: "C",
    review:
      "Dr. Mona provides ethical infertility care with amazing success results. Her explanations are very clear and the costs are transparent. She prioritizes necessary treatments and has very good infertility experience. I Highly recommend Doctor Mona as one of the Best Fertility doctors in the world today.",
    source: "Google patient review",
  },
  {
    name: "Atul Rajput",
    initial: "A",
    review:
      "Choosing IVF procedure was an emotional journey, but Dr. Mona Dahiya's compassionate guidance made all the difference. Her ethical approach and high moral values gave us peace of mind. Today, we hold our healthy baby boy in our arms, forever grateful for the selfless gift of Dr. Dahiya's expertise.",
    source: "Google patient review",
  },
];

export function IvfCostTiers() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Price Range"
        title="Estimated IVF Cost Tiers in Delhi, Noida & Ghaziabad"
        subtitle="Average cost spent by patients on IVF treatment, including medicines, ranges between ₹1.5 lakh and ₹2.5 lakh. An itemised quote is shared after consultation with Dr Mona Dahiya."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {costTiers.map((item) => (
          <StaggerItem key={item.title}>
            <CostFactorCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function IvfCostReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Dr. Mona"
        subtitle="Individual experiences in patients' own words."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {reviews.map((rev) => (
          <StaggerItem key={rev.name}>
            <ReviewCard {...rev} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal variant="fadeUp" delay={0.1} className="mt-7">
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

