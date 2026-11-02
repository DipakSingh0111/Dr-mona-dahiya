"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface IndicationCard {
  number: string;
  title: string;
  description: React.ReactNode;
  theme: "pink" | "teal" | "purple" | "orange" | "blue" | "rose";
}

const cardThemes = {
  pink: {
    border: "border-[#fbcfe0]",
    bg: "bg-gradient-to-br from-[#fff5f8] via-white to-[#ffe8f0]",
    badgeBg: "bg-gradient-to-br from-[#f85f8f] to-[#e6356e]",
    badgeShadow: "shadow-[0_4px_12px_rgba(248,95,143,0.35)]",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(230,53,110,0.15)]",
    titleColor: "text-[#831843]",
    descColor: "text-slate-600",
  },
  teal: {
    border: "border-[#b8ebe2]",
    bg: "bg-gradient-to-br from-[#f0fbf9] via-white to-[#e6f8f5]",
    badgeBg: "bg-gradient-to-br from-[#14b8a6] to-[#0d9488]",
    badgeShadow: "shadow-[0_4px_12px_rgba(20,184,166,0.35)]",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(20,184,166,0.15)]",
    titleColor: "text-[#134e4a]",
    descColor: "text-slate-600",
  },
  purple: {
    border: "border-[#dfd3fa]",
    bg: "bg-gradient-to-br from-[#f7f4fe] via-white to-[#f0eaff]",
    badgeBg: "bg-gradient-to-br from-[#9274f4] to-[#764de8]",
    badgeShadow: "shadow-[0_4px_12px_rgba(118,77,232,0.35)]",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(118,77,232,0.15)]",
    titleColor: "text-[#4c1d95]",
    descColor: "text-slate-600",
  },
  orange: {
    border: "border-[#fedab7]",
    bg: "bg-gradient-to-br from-[#fff7f0] via-white to-[#feefe2]",
    badgeBg: "bg-gradient-to-br from-[#fb9956] to-[#eb7629]",
    badgeShadow: "shadow-[0_4px_12px_rgba(235,118,41,0.35)]",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(235,118,41,0.15)]",
    titleColor: "text-[#7c2d12]",
    descColor: "text-slate-600",
  },
  blue: {
    border: "border-[#c4e1fd]",
    bg: "bg-gradient-to-br from-[#f2f8fe] via-white to-[#e6f2fd]",
    badgeBg: "bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8]",
    badgeShadow: "shadow-[0_4px_12px_rgba(37,99,235,0.35)]",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)]",
    titleColor: "text-[#1e3a8a]",
    descColor: "text-slate-600",
  },
  rose: {
    border: "border-[#ffc7d5]",
    bg: "bg-gradient-to-br from-[#fff4f7] via-white to-[#ffe9ef]",
    badgeBg: "bg-gradient-to-br from-[#fc587e] to-[#ea315e]",
    badgeShadow: "shadow-[0_4px_12px_rgba(234,49,94,0.35)]",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(234,49,94,0.15)]",
    titleColor: "text-[#881337]",
    descColor: "text-slate-600",
  },
};

const indications: IndicationCard[] = [
  {
    number: "1",
    title: "Unexplained infertility",
    description: "Couples under 35 with open tubes and normal semen who have tried naturally for 12 months.",
    theme: "pink",
  },
  {
    number: "2",
    title: "Mild male-factor subfertility",
    description: (
      <span>
        Post-wash total motile sperm count (TMSC) of 5 to 10 million with acceptable shape. See{" "}
        <Link href="/low-sperm-count" className="text-[#0047ca] underline font-semibold hover:text-[#e83e74] transition-colors">
          Low Sperm Count &amp; Motility
        </Link>
      </span>
    ),
    theme: "teal",
  },
  {
    number: "3",
    title: "Cervical factor infertility",
    description: "Thick, acidic or hostile cervical mucus that stops sperm reaching the uterus.",
    theme: "purple",
  },
  {
    number: "4",
    title: "Ovulatory dysfunction (PCOS)",
    description: "Anovulatory cycles where Letrozole restores release of a single egg.",
    theme: "orange",
  },
  {
    number: "5",
    title: "Ejaculatory dysfunction or sexual pain",
    description: "Severe vaginismus, erectile dysfunction or retrograde ejaculation.",
    theme: "blue",
  },
  {
    number: "6",
    title: "Donor sperm insemination",
    description: "Single women, or couples with non-obstructive azoospermia who choose screened donor sperm.",
    theme: "rose",
  },
];

const checklistItems = [
  "Tubal patency (mandatory): HSG or saline infusion sonography confirming at least 1 open, working tube.",
  "Semen baseline: the raw sample must give a post-wash motile yield above 5 million/mL.",
  "Ovarian reserve: serum AMH and a Day 2 or 3 transvaginal scan for antral follicle count.",
  "Infection clearance for both partners (HIV I & II, HBsAg, HCV, VDRL), as required under the Indian ART Act.",
];

export default function IuiIndicationsAndChecklist() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-slate-100">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Indications ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Clinical breakdown
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-[#0a1d37] sm:text-[2.2rem] lg:text-[2.45rem]">
              Indications: Who is a Good Candidate for IUI?
            </h2>
          </Reveal>

          {/* 6 Cards Grid (3 columns on lg, 2 on sm, 1 on mobile) */}
          <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.map((item, idx) => {
              const theme = cardThemes[item.theme];
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border ${theme.border} ${theme.bg} p-5 sm:p-6 shadow-sm ${theme.hoverShadow} transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${theme.badgeBg} text-[15px] font-bold text-white ${theme.badgeShadow}`}
                      >
                        {item.number}
                      </span>
                      <h3 className={`font-serif text-[1.05rem] font-semibold ${theme.titleColor} leading-snug sm:text-[1.12rem] pt-0.5`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={`mt-3.5 text-[13px] leading-relaxed ${theme.descColor} sm:text-[13.5px]`}>
                      {item.description}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Diagnostic Checklist: Preliminary Investigations ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-[#0a1d37] sm:text-[2.2rem] lg:text-[2.45rem]">
              Diagnostic Checklist: Preliminary Investigations
            </h2>
            <p className="mt-2 text-[14px] text-slate-600 sm:text-[15px]">
              Tubal patency is mandatory. IUI only works if at least one fallopian tube is open.
            </p>
          </Reveal>

          {/* Checklist Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklistItems.map((text, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 transition-all duration-200 hover:border-[#14b8a6]/40 hover:bg-white hover:shadow-sm sm:px-5 sm:py-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#14b8a6] text-white shadow-[0_2px_8px_rgba(20,184,166,0.35)]">
                    <FaCheck className="size-3" />
                  </span>
                  <p className="text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

