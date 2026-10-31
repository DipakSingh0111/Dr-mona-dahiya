"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ProtocolCard {
  step: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const protocols: ProtocolCard[] = [
  {
    step: "1",
    title: "Priming",
    description:
      "6 to 8 weeks of supplements such as CoQ10 and, where suitable, DHEA before stimulation.",
  },
  {
    step: "2",
    title: "DuoStim",
    description:
      "Two stimulations and egg collections in one cycle, banking more embryos in half the time.",
  },
  {
    step: "3",
    title: "Minimal stimulation",
    description:
      "Gentle Mini IVF with Letrozole and low-dose injections when high doses have failed.",
    linkText: "Mini IVF",
    linkHref: "/treatments",
  },
  {
    step: "4",
    title: "Embryo banking",
    description:
      "Freezing embryos over 2 to 3 cycles before a single planned transfer.",
  },
];

export default function LowAmhProtocols() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-[20%] h-[260px] w-[320px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,71,202,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            What makes the difference
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-[#0f2438] sm:text-[2.4rem] lg:text-[2.65rem]">
            Own-Egg Protocols for Low AMH
          </h2>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {protocols.map((card) => (
            <StaggerItem key={card.step}>
              <div className="group relative flex h-full flex-col justify-start rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0047ca]/35 hover:shadow-[0_14px_32px_rgba(0,71,202,0.1)]">
                <div className="relative mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0047ca] to-[#0037a3] text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(0,71,202,0.35)]">
                    {card.step}
                  </div>
                  <h3 className="font-serif text-[17px] font-normal text-[#0f2438]">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-1 text-[13px] leading-relaxed text-[#64748b]">
                  {card.linkText && card.linkHref ? (
                    <>
                      Gentle{" "}
                      <Link
                        href={card.linkHref}
                        className="font-semibold text-[#e83e74] underline decoration-[#e83e74]/40 underline-offset-2 hover:text-[#c53658]"
                      >
                        {card.linkText}
                      </Link>{" "}
                      with Letrozole and low-dose injections when high doses
                      have failed.
                    </>
                  ) : (
                    card.description
                  )}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
