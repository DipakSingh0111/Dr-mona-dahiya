"use client";

import Link from "next/link";
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
}

const pcosCostCards: CostCard[] = [
  {
    icon: <FaPills className="size-4 sm:size-5 text-white" />,
    title: "Ovulation",
    subTitle: "induction",
    description: "Letrozole, inositol and tracking scans: ₹4,000 to ₹8,000 per cycle.",
  },
  {
    icon: <FaCalendarAlt className="size-4 sm:size-5 text-white" />,
    title: "IUI with tracking",
    description: "Insemination, sperm preparation and monitoring: ₹12,000 to ₹18,000.",
  },
  {
    icon: <FaFlask className="size-4 sm:size-5 text-white" />,
    title: "OHSS-safe",
    subTitle: "IVF cycle",
    description:
      "Low-dose medicines, antagonists, agonist trigger and freezing: ₹1,25,000 to ₹1,75,000.",
  },
  {
    icon: <FaCheck className="size-4 sm:size-5 text-white" />,
    title: "Frozen embryo",
    subTitle: "transfer",
    description: "Prepared hormone-replacement transfer cycle.",
  },
];

interface ReviewCard {
  review: string;
  initial: string;
  name: string;
  label: string;
}

const pcosReviews: ReviewCard[] = [
  {
    review:
      "As a PCOS patient, my wife never thought to conceive naturally. However, Dr. Mona Dahiya's tailored treatment of ovulation induction + timed intercourse—worked wonders for us. Within 6 months, my wife has got pregnant naturally! Her patience and knowledge of infertility are unmatched. She is Truly the best IVF doctor in Delhi.",
    initial: "G",
    name: "Gopi Shakya",
    label: "Google patient review",
  },
  {
    review:
      "Do not be scared of invasive procedures is what we can share. Dr. Mona uses latest techniques to minimize discomfort. Our embryo transfer felt like normal checkup. She cares for patient comfort along with success rates. We have got 3 babies with the help of Dr Mona through IUI/IVF.",
    initial: "S",
    name: "Scout pharoah",
    label: "Google patient review",
  },
  {
    review:
      "Nobody knows as much about ART and reproductive medicine than her. Our story is about 5 years of struggle and we completely lost trust in assisted reproductive technology (ART) after 3 failed cycles of IUI and 2 failed IVF cycles. our ...",
    initial: "A",
    name: "Ajay Shakya",
    label: "Google patient review",
  },
];

export default function PcosCostAndReviews() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: What Affects the Cost of PCOS Treatment ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title={<>What Affects the Cost
              <br className="hidden sm:inline" /> of PCOS Treatment</>}
          subtitle="Most women with PCOS start with low-cost ovulation induction at ₹4,000 to ₹8,000 a cycle, and only some need IVF."
        />

          {/* 4 Cards Grid */}
          <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {pcosCostCards.map((card, idx) => (
              <StaggerItem key={idx}>
              <CostFactorCard {...card} />
            </StaggerItem>
            ))}
          </Stagger>

          {/* Read All Patient Reviews Button */}
          <Reveal variant="fadeUp" delay={0.1} className="mt-8">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-[#0a1e3b]/80 px-5 py-2.5 text-[13px] font-semibold text-teal-300 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-500/20 hover:text-white"
            >
              Read All Patient Reviews
            </Link>
          </Reveal>
        </div>
      </TreatmentSection>
  );
}

