"use client";

import { FaCheck, FaPills, FaFlask, FaCalendarAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
interface CostCard {
  icon: React.ReactNode;
  title: string;
  subTitle?: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  suffix?: string;
}

const costCards: CostCard[] = [
  {
    icon: <FaFlask className="size-4 sm:size-5 text-white" />,
    title: "Initial tests",
    description:
      "Hormone panel, HSG and baseline scan: ₹8,000 to ₹16,000.",
  },
  {
    icon: <FaPills className="size-4 sm:size-5 text-white" />,
    title: "Ovulation",
    subTitle: "induction",
    description:
      "Letrozole and tracking scans: ₹3,000 to ₹6,000 per cycle.",
  },
  {
    icon: <FaCalendarAlt className="size-4 sm:size-5 text-white" />,
    title: "IUI",
    description:
      "Sperm preparation and insemination: ₹15,000 per cycle. See ",
    linkText: "IUI Treatment",
    linkHref: "/treatments",
  },
  {
    icon: <FaCheck className="size-4 sm:size-5 text-white" />,
    title: "IVF, if indicated",
    description: "Full ",
    linkText: "IVF Treatment",
    linkHref: "/treatments",
    suffix: " cycle planning: ₹1.5 lakh to ₹2.5 lakh.",
  },
];

export default function FemaleCostTransparency() {
  return (
    <TreatmentSection>
        {/* Eyebrow & Title */}
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title={<>What Affects the Cost of
            <br className="hidden sm:inline" /> Female Infertility Treatment</>}
          subtitle="Most women start with tests costing ₹8,000 to ₹16,000, and many conceive with low-cost treatment before IVF is needed."
        />

        {/* 4 Cards Grid */}
        <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {costCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
  );
}

