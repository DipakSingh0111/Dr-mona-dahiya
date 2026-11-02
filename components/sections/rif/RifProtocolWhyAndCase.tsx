"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ProtocolCard {
  number: string;
  title: string;
  bullets: Array<{
    text: string;
  }>;
}

const protocols: ProtocolCard[] = [
  {
    number: "1",
    title: "Case review",
    bullets: [
      { text: "All previous cycle records are studied" },
      { text: "Embryo quality and transfer technique reviewed" },
    ],
  },
  {
    number: "2",
    title: "Uterine evaluation",
    bullets: [
      { text: "Hysteroscopy to treat polyps, septum or adhesions" },
      { text: "Treat infection or inflammation of the lining" },
    ],
  },
  {
    number: "3",
    title: "Embryo evaluation",
    bullets: [
      { text: "Consider PGT-A in selected cases" },
      { text: "Review the lab culture and freezing practice" },
    ],
  },
  {
    number: "4",
    title: "Personalised transfer",
    bullets: [
      { text: "Choose the protocol and timing for your lining" },
      { text: "Single, best-graded blastocyst transfer" },
    ],
  },
  {
    number: "5",
    title: "Support and follow-up",
    bullets: [
      { text: "Evidence-based luteal support" },
      { text: "Early beta-hCG and scan monitoring" },
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Evidence over guesswork",
    desc: "Tests and add-ons are recommended only where there is a reason, to avoid needless cost.",
  },
  {
    title: "Whole-cycle review",
    desc: "Embryo, uterus, sperm and timing are all examined.",
  },
  {
    title: "Failed IVF desk",
    desc: "A dedicated second-opinion pathway for repeated failure.",
  },
];

export default function RifProtocolWhyAndCase() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Step-by-Step Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Treatment Protocol
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              What to expect at each stage. The exact plan is set at your consultation.
            </p>
          </Reveal>

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.slice(0, 3).map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  {/* Header: Number pill + Title */}
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bullet hierarchy */}
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">{bullet.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Row 2: Protocols 4 and 5 */}
          <Stagger delay={0.05} className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-5 max-w-4xl">
            {protocols.slice(3, 5).map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  {/* Header: Number pill + Title */}
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bullet hierarchy */}
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">{bullet.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Recurrent Implantation Failure? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Why Consult Dr. Mona Dahiya for
              <br className="hidden sm:inline" /> Recurrent Implantation Failure?
            </h2>
          </Reveal>

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
                <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)] mt-0.5">
                    <FaCheck className="size-3" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Clinic Address Strip from screenshot */}
          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <div className="rounded-xl border border-white/10 bg-[#081734] px-5 py-4 text-[12.5px] leading-relaxed text-slate-300 sm:text-[13px]">
              <p>
                <strong className="text-white">Delhi</strong> · Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
              </p>
              <p className="mt-1.5">
                <strong className="text-white">Noida</strong> · 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
              </p>
              <p className="mt-1.5">
                <strong className="text-white">Ghaziabad</strong> · 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= SECTION 3: Clinical Case Insight ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              From the clinic
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Clinical Case Insight
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="rounded-2xl border border-[#e83e74]/35 bg-gradient-to-r from-[#141b36] via-[#0e223d] to-[#0a1024] p-6 sm:p-7 shadow-[0_0_24px_rgba(232,62,116,0.12)]">
              <p className="text-[14px] leading-relaxed font-medium text-slate-100 sm:text-[15.5px]">
                A couple with three unsuccessful transfers had a hysteroscopy that showed a uterine septum. After correction and a prepared frozen transfer of a single blastocyst, they achieved an ongoing pregnancy.
              </p>
              <p className="mt-3 text-[12px] text-slate-400">
                Details changed to protect patient privacy. Individual results vary.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

