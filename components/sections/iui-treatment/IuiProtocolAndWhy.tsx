"use client";

import Image from "next/image";
import Link from "next/link";
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
    title: "Baseline ultrasound and strategy (days 2–3)",
    bullets: [
      { text: "Scan to rule out leftover ovarian cysts" },
      { text: "Baseline estradiol below 50 pg/mL" },
    ],
  },
  {
    number: "2",
    title: "Controlled ovulation induction (days 3–7)",
    bullets: [
      { text: "Letrozole 2.5 to 5 mg by mouth, or low-dose gonadotropins" },
      { text: "Target: 1 or 2 dominant follicles, to avoid higher-order multiples" },
    ],
  },
  {
    number: "3",
    title: "Follicle and lining monitoring (days 8–12)",
    bullets: [
      { text: "Serial scans tracking follicle size (aim for 18 to 20 mm)" },
      { text: "Endometrium of at least 7.5 mm with a trilaminar pattern" },
    ],
  },
  {
    number: "4",
    title: "Ovulation trigger (day 12 or 13)",
    bullets: [
      { text: "5,000 to 10,000 IU recombinant hCG when the lead follicle is ready" },
    ],
  },
  {
    number: "5",
    title: "Semen collection and washing (day 14 or 15)",
    bullets: [
      { text: "Sample collected after 2 to 3 days of abstinence, about 2 hours before insemination" },
      { text: "Density-gradient centrifugation separates healthy motile sperm from fluid and debris" },
    ],
  },
  {
    number: "6",
    title: "Insemination (36 hours after trigger)",
    bullets: [
      { text: "A soft, flexible catheter places 0.5 mL of prepared sperm in the uterus" },
      { text: "Painless, about 5 minutes, no anaesthesia, then 15 minutes of rest" },
    ],
  },
  {
    number: "7",
    title: "Luteal support and pregnancy test",
    bullets: [
      { text: "Micronised progesterone for 14 days" },
      { text: "Blood Beta-hCG test on Day 28" },
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: React.ReactNode;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Experienced clinical judgment",
    desc: (
      <span>
        IUI is advised only when tubes are open and sperm parameters support it, so you avoid repeat cycles when{" "}
        <Link href="/ivf-treatment" className="text-[#f9a8d4] underline hover:text-white transition-colors">
          IVF Treatment
        </Link>{" "}
        is the better route.
      </span>
    ),
  },
  {
    title: "Strict single-follicle safety",
    desc: "Careful dose titration aims for 1 egg, keeping multiple pregnancy rates below 5%.",
  },
  {
    title: "Standardised semen washing",
    desc: "Double-wash density-gradient separation removes prostaglandins, which prevents cramping and concentrates motile sperm.",
  },
];

export default function IuiProtocolAndWhy() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-[#0047ca]/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-[#e83e74]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Step-by-Step IUI Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step IUI Treatment Protocol
            </h2>
          </Reveal>

          {/* Row 1: Steps 1, 2, 3 */}
          <Stagger delay={0.04} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.slice(0, 3).map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">{b.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Row 2: Steps 4, 5, 6 */}
          <Stagger delay={0.04} className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.slice(3, 6).map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                        <p className="flex-1">{b.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Row 3: Step 7 */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal variant="fadeUp" delay={0.1}>
              <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)]">
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    {protocols[6].number}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-semibold text-white sm:text-[1.12rem] leading-snug pt-0.5">
                    {protocols[6].title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-col gap-2.5 pl-2 sm:pl-3">
                  {protocols[6].bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      <span className="text-[#e83e74] select-none text-[14px] leading-none pt-0.5">↳</span>
                      <p className="flex-1">{b.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for IUI? ================= */}
        <div>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Points (Span 7) */}
            <div className="lg:col-span-7">
              <Reveal variant="fadeUp">
                <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
                  Expertise &amp; authority
                </p>
                <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                  Why Consult Dr.
                  <br className="hidden sm:inline" /> Mona Dahiya for IUI?
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
                        <div className="mt-1 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                          {point.desc}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Column: Doctor Portrait sitting in library (Span 5) */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Reveal variant="scaleIn" delay={0.1}>
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/20 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
                  <Image
                    src="/images/about/male-infertility.jpg"
                    alt="Dr. Mona Dahiya - Senior Infertility & IUI Specialist"
                    width={420}
                    height={500}
                    className="max-h-[380px] sm:max-h-[440px] w-full object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

