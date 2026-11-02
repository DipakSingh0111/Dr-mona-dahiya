"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Cost Factors ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Cost Factors
            </h2>
          </Reveal>

          {/* 4 Cost Factor Cards */}
          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
          >
            {costFactorCards.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div>
                    {/* Checkmark in Pink Pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        <FaCheck className="size-3.5" />
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white leading-snug">
                        {card.title}
                        {card.subTitle && (
                          <>
                            <br />
                            <span className="font-normal text-[0.95rem]">
                              {card.subTitle}
                            </span>
                          </>
                        )}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: What Patients Say About Dr. Mona ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Patient reviews
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Patients Say About Dr. Mona
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              Individual experiences in patients&apos; own words.
            </p>
          </Reveal>

          {/* 3 Review Cards Grid */}
          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {maleReviews.map((rev, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/70 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/85">
                  <p className="text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                    {rev.review}
                  </p>

                  {/* Patient Signature */}
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                      {rev.initial}
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold text-white leading-tight">
                        {rev.name}
                      </p>
                      <p className="text-[11.5px] text-slate-400">
                        {rev.label}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Read All Patient Reviews Button */}
          <Reveal variant="fadeUp" delay={0.1} className="mt-8">
            <Link
              href="/patient-reviews"
              className="inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-[#0a1e3b]/80 px-5 py-2.5 text-[13px] font-semibold text-teal-300 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-500/20 hover:text-white"
            >
              Read All Patient Reviews
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
