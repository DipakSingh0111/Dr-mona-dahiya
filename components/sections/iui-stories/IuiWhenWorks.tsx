"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const cards = [
  {
    step: "1",
    title: "Unexplained infertility",
    description:
      "Open tubes and normal semen, but no pregnancy after 12 months of trying.",
  },
  {
    step: "2",
    title: "Cervical factor",
    description:
      "Thick cervical mucus that stops sperm; IUI bypasses the cervix.",
  },
  {
    step: "3",
    title: "Mild male factor",
    description: "A post-wash motile count above 5 to 10 million.",
  },
  {
    step: "4",
    title: "Ovulation problems",
    description:
      "Combined with Letrozole and Follicular Ultrasound tracking, for example in PCOS.",
    hasUltrasoundLink: true,
  },
];

export default function IuiWhenWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            What makes the difference
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-[#0f2438] sm:text-[2.4rem] lg:text-[2.65rem]">
            When IUI Works Best
          </h2>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {cards.map((card) => (
            <StaggerItem
              key={card.step}
              className={card.step === "4" ? "lg:col-span-1" : undefined}
            >
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0047ca]/35 hover:shadow-[0_14px_32px_rgba(0,71,202,0.1)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e83e74] to-[#c53658] text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                    {card.step}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#0f2438]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-[#64748b]">
                  {card.hasUltrasoundLink ? (
                    <>
                      Combined with Letrozole and{" "}
                      <Link
                        href="/treatments"
                        className="font-semibold text-[#0047ca] underline decoration-[#0047ca]/35 underline-offset-2 hover:text-[#e83e74]"
                      >
                        Follicular Ultrasound
                      </Link>{" "}
                      tracking, for example in PCOS.
                    </>
                  ) : (
                    card.description
                  )}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
