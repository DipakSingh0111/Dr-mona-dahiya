"use client";

import Image from "next/image";
import siteData from "@/data/site.json";

function WaveBackdrop() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-8 -left-10 h-[520px] w-[520px] text-[#c5ccd6] opacity-[0.35]"
      viewBox="0 0 520 520"
      fill="none"
    >
      <path
        d="M40 120 C120 40, 220 40, 300 120 S480 200, 480 300"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M20 180 C110 90, 230 90, 320 180 S500 280, 500 380"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M10 250 C100 150, 240 150, 340 250 S510 360, 510 460"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M30 320 C130 220, 260 220, 360 320 S500 420, 500 500"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M60 80 C140 20, 200 60, 260 120"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="90" cy="200" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="180" cy="140" r="2.5" fill="currentColor" opacity="0.45" />
      <circle cx="250" cy="260" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="140" cy="300" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export default function HowItWorks() {
  const { badge, title, steps } = siteData.howItWorks;

  return (
    <section className="relative bg-white px-4 pt-10 pb-6 sm:px-6 sm:pt-12 sm:pb-7 lg:px-8 lg:pt-14 lg:pb-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Left sticky heading */}
          <div className="relative lg:sticky lg:top-52 lg:col-span-4 lg:self-start">
            <WaveBackdrop />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/90 px-3.5 py-1.5 text-[12px] font-semibold whitespace-nowrap text-zinc-600">
                <span className="size-1.5 rounded-full bg-[#0d7d74]" />
                {badge}
              </span>

              <h2 className="font-display mt-5 whitespace-pre-line text-[2.2rem] leading-[1.12] font-bold tracking-[-0.02em] text-zinc-900 sm:text-[2.65rem] lg:text-[2.75rem] xl:text-[3.15rem]">
                {title}
              </h2>
            </div>
          </div>

          {/* Sticky stacking cards — later cards slide over earlier ones */}
          <div className="relative lg:col-span-8">
            {steps.map((step, index) => {
              const hasImage = Boolean(step.image);
              const highlight =
                "highlight" in step && Boolean(step.highlight);
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.id}
                  className="sticky top-36 mb-8 sm:top-44 sm:mb-10 lg:top-52 lg:mb-12"
                  style={{ zIndex: index + 1 }}
                >
                  <article
                    className={`flex w-full flex-col overflow-hidden rounded-[28px] bg-white transition-all duration-300 sm:flex-row sm:items-stretch ${
                      isLast
                        ? "min-h-[180px] sm:min-h-[200px] lg:min-h-[210px]"
                        : "min-h-[175px] sm:min-h-[195px] lg:min-h-[205px]"
                    } ${
                      highlight
                        ? "border border-[#e83e74]/35 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:border-[#e83e74] hover:shadow-[0_20px_45px_rgba(232,62,116,0.22)]"
                        : "border border-zinc-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:border-[#e83e74]/50 hover:shadow-[0_20px_45px_rgba(232,62,116,0.18)]"
                    }`}
                  >
                    <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-9 sm:py-6 lg:px-11 lg:py-7">
                      {"stepLabel" in step && step.stepLabel ? (
                        <span className="mb-1.5 text-[11.5px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[12px]">
                          {step.stepLabel}
                        </span>
                      ) : null}
                      <h3 className="font-display text-[1.35rem] leading-snug font-bold tracking-tight text-zinc-900 sm:text-[1.5rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-zinc-500 sm:text-[14px]">
                        {step.description}
                      </p>
                    </div>

                    {hasImage ? (
                      <div className="relative mx-3 mb-3 aspect-[4/3] shrink-0 overflow-hidden rounded-[22px] bg-zinc-100 sm:mx-2.5 sm:my-2.5 sm:aspect-auto sm:h-auto sm:w-[44%] sm:min-w-[260px] sm:max-w-[320px] sm:min-h-[195px] sm:self-stretch">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 320px"
                          className="object-contain object-center p-1 sm:p-1.5"
                        />
                      </div>
                    ) : null}
                  </article>
                </div>
              );
            })}
            {/* Extra scroll room so last card can fully stick before section ends */}
            <div className="h-16 sm:h-24" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

