"use client";

import Link from "next/link";
import { FaPills, FaCalendarAlt, FaFlask, FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

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
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: What Affects the Cost of PCOS Treatment ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              What Affects the Cost
              <br className="hidden sm:inline" /> of PCOS Treatment
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Most women with PCOS start with low-cost ovulation induction at ₹4,000 to ₹8,000 a cycle, and only some need IVF.
            </p>
          </Reveal>

          {/* 4 Cards Grid */}
          <Stagger delay={0.05} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {pcosCostCards.map((card, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div>
                    {/* Icon Pill + Title */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e83e74] shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {card.icon}
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white leading-snug">
                        {card.title}
                        {card.subTitle && (
                          <>
                            <br />
                            <span className="font-normal text-[0.98rem]">{card.subTitle}</span>
                          </>
                        )}
                      </h3>
                    </div>

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
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {pcosReviews.map((rev, idx) => (
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

