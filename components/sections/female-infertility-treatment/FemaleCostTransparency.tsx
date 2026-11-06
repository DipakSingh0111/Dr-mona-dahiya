"use client";

import Link from "next/link";
import { FaCheck, FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const costCards = [
  {
    icon: <FaFlask className="size-4 text-white sm:size-5" />,
    title: "Tests To Diagnose Infertility",
    description: "Hormone Profile, HSG & Scan Cost Between 8k-16k",
  },
  {
    icon: <FaPills className="size-4 text-white sm:size-5" />,
    title: "Get Yourself To Ovulate",
    description: "Use Oral Pills To Get Ovulation: 3000-6000 Per Cycle",
  },
  {
    icon: <FaCalendarAlt className="size-4 text-white sm:size-5" />,
    title: "IUI",
    description: (
      <>
        Sperm Preparation &amp; Loading Into Uterus: 15k Per Cycle{" "}
        <Link href="/best-iui-doctor-in-noida" className={linkClass}>
          Learn More About IUI
        </Link>
      </>
    ),
  },
  {
    icon: <FaCheck className="size-4 text-white sm:size-5" />,
    title: "What Is The Cost Of IVF",
    description: (
      <Link href="/ivf-cost-emi" className={linkClass}>
        Find Out What IVF Costs
      </Link>
    ),
  },
];

export default function FemaleCostTransparency() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="How Much Does Female Infertility Treatment Cost"
        title="What Affects the Cost of Female Infertility Treatment"
        subtitle="On Average You Will Spend ₹8,000 to ₹16,000 To Get Tested And Get Pregnant With Affordable Methods."
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
