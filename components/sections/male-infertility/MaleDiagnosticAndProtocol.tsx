"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ChecklistItem {
  prefix: string;
  text: string;
}

const checklist: ChecklistItem[] = [
  {
    prefix: "Computer-assisted semen analysis (CASA): ",
    text: "count, progressive motility and strict Kruger morphology after 2 to 3 days of abstinence.",
  },
  {
    prefix: "Sperm DNA fragmentation index (Halosperm / SCD): ",
    text: "single- and double-strand DNA breaks.",
  },
  {
    prefix: "Hormones: ",
    text: "total testosterone, morning LH, FSH, prolactin and TSH.",
  },
  {
    prefix: "Scrotal Doppler ultrasound: ",
    text: "testicular volume and varicocele reflux.",
  },
  {
    prefix: "Karyotype and Y-chromosome microdeletion: ",
    text: "needed when the count is under 5 million/mL, before surgery.",
  },
];

interface ProtocolCard {
  number: string;
  title: string;
  bullets: Array<{
    text: string;
    linkText?: string;
    linkHref?: string;
    suffix?: string;
  }>;
}

const protocols: ProtocolCard[] = [
  {
    number: "1",
    title: "Step 1: Lifestyle and the 74-day sperm cycle",
    bullets: [
      {
        text: "Stop smoking, excess alcohol and heat exposure (saunas, tight clothing)",
      },
      {
        text: "Antioxidants (CoQ10, L-carnitine, zinc, selenium, lycopene) against oxidative stress",
      },
    ],
  },
  {
    number: "2",
    title: "Step 2: Medical and hormonal therapy",
    bullets: [
      {
        text: "Culture-directed antibiotics for hidden infection (leucocytospermia)",
      },
      {
        text: "Clomiphene or aromatase inhibitors for a low testosterone-to-estrogen ratio",
      },
    ],
  },
  {
    number: "3",
    title: "Step 3: Varicocele correction",
    bullets: [
      {
        text: "Referral for microsurgical varicocelectomy when a varicocele is clinically significant and semen quality is falling",
      },
    ],
  },
  {
    number: "4",
    title: "Step 4: IUI",
    bullets: [
      {
        text: "For mild low count with a post-wash motile count above 5 to 10 million. See ",
        linkText: "IUI Treatment",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "5",
    title: "Step 5: ICSI with microfluidics",
    bullets: [
      {
        text: "For severe OATS or high DFI, single-sperm selection on a microfluidic chip with ",
        linkText: "ICSI",
        linkHref: "/treatments",
      },
    ],
  },
  {
    number: "6",
    title: "Step 6: Surgical sperm retrieval",
    bullets: [
      {
        text: "PESA, TESA or micro-TESE for azoospermia. See ",
        linkText: "Surgical Sperm Retrieval",
        linkHref: "/treatments",
      },
    ],
  },
];

export default function MaleDiagnosticAndProtocol() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= SECTION 1: Diagnostic Checklist ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before treatment
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Diagnostic Checklist
            </h2>
            <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
              These tests show exactly what is affecting sperm, so treatment is targeted from the start.
            </p>
          </Reveal>

          {/* Checklist Horizontal Bars */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#091a3c]/70 px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80 sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>

                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px]">
                    <strong className="font-semibold text-white">{item.prefix}</strong>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: Step-by-Step Treatment Protocol ================= */}
        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              How it works
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Step-by-Step Treatment Protocol
            </h2>
          </Reveal>

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[#e83e74]/30 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 sm:p-6 shadow-[0_0_24px_rgba(232,62,116,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/60 hover:shadow-[0_0_32px_rgba(232,62,116,0.2)]">
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
                        <p className="flex-1">
                          {bullet.text}
                          {bullet.linkText && bullet.linkHref && (
                            <Link
                              href={bullet.linkHref}
                              className="font-medium text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                            >
                              {bullet.linkText}
                            </Link>
                          )}
                          {bullet.suffix || ""}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

