"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard
} from "@/components/ui/treatment";
interface CostFactorCard {
  title: string;
  subTitle?: string;
  description: string;
}

const costFactorCards: CostFactorCard[] = [
  {
    title: "Diagnostic workup",
    description:
      "CASA semen analysis, DFI test and scrotal Doppler: ₹4,000 to ₹9,000.",
  },
  {
    title: "Medical management",
    description:
      "3-month course of antioxidants, clomiphene or antibiotics: ₹3,000 to ₹7,000.",
  },
  {
    title: "Microfluidic processing",
    description: "Chip and processing during ICSI: ₹12,000 to ₹18,000.",
  },
  {
    title: "Surgical retrieval",
    subTitle: "(PESA/TESA)",
    description:
      "Needle aspiration under local anaesthesia or sedation: ₹25,000 to ₹45,000.",
  },
];

interface ReviewCard {
  review: string;
  initial: string;
  name: string;
  label: string;
}

const maleReviews: ReviewCard[] = [
  {
    review:
      "We are so grateful to Dr. Mona Dahiya for our baby born through ICSI. Her knowledge is fabulous and she gave us a lot of confidence. She explained everything simply and was always available for our doubts clarification. Her dedication is unmatched and we highly recommend her to anyone seeking any kind of fertility treatment.",
    initial: "K",
    name: "Kunal",
    label: "Google patient review",
  },
  {
    review:
      "Dr. Mona Dahiya is the best male infertility doctor in Delhi! My poor sperm quality led us to her, and she recommended ICSI—injecting a single healthy sperm into the egg during IVF. Her expertise in this advanced technique gave us our miracle baby. Grateful for her precision and compassionate care!",
    initial: "V",
    name: "Vijendar Yadav",
    label: "Google patient review",
  },
  {
    review:
      "Male infertility carries so much stigma, but Dr. Mona Dahiya normalized our struggle. Her thorough tests revealed low sperm DNA fragmentation, which previous clinics overlooked. With targeted treatments and ICSI, we welcomed our son. She doesn't just treat women—she heals couples.",
    initial: "V",
    name: "Vishal Jatav",
    label: "Google patient review",
  },
];

export default function MaleCostAndReviews() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Cost Factors ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors"
        />

          {/* 4 Cost Factor Cards */}
          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
          >
            {costFactorCards.map((card, idx) => (
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
