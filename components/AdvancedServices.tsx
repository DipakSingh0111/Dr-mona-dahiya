"use client";

import siteData from "@/data/site.json";
import { FaDna } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

function SpermIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="4 12 48 42"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="44" cy="20" r="6.5" />
      <path d="M38 23 C 30 28, 22 25, 14 36" />
      <circle cx="28" cy="38" r="5.5" />
      <path d="M23 41 C 18 45, 12 43, 6 52" />
    </svg>
  );
}

function UterusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="8 18 48 38"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M32 54 L32 36" />
      <path d="M24 32 C24 44, 40 44, 40 32 C40 23, 24 23, 24 32 Z" />
      <path d="M24 27 C17 19, 9 23, 13 34 C15 39, 20 37, 20 34" />
      <path d="M40 27 C47 19, 55 23, 51 34 C49 39, 44 37, 44 34" />
      <circle cx="17" cy="35" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="47" cy="35" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FemaleAvatar() {
  return (
    <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#e83e74] shadow-[0_6px_14px_rgba(232,62,116,0.28)] sm:size-[54px]">
      <svg
        viewBox="0 0 40 40"
        fill="#fff"
        className="size-7 sm:size-[30px]"
        aria-hidden
      >
        <circle cx="20" cy="13" r="5" />
        <path
          d="M14 11 C13 17, 15 21, 15 23 M26 11 C27 17, 25 21, 25 23"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M20 20 c-5.5 0 -10 3 -11 8 c0 1 1 2 2.5 2 h17 c1.5 0 2.5 -1 2.5 -2 c-1 -5 -5.5 -8 -11 -8 z" />
      </svg>
    </div>
  );
}

function MaleAvatar() {
  return (
    <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#0284c7] shadow-[0_6px_14px_rgba(2,132,199,0.28)] sm:size-[54px]">
      <FaUserLarge className="size-5 text-white sm:size-6" />
    </div>
  );
}

const topThemes = {
  rose: {
    card: "border-[#f9c5d4] bg-[#fff5f7]",
    iconBg: "bg-[#ffe4ec] text-[#e83e74]",
  },
  blue: {
    card: "border-[#b8dbf8] bg-[#f0f7ff]",
    iconBg: "bg-[#dbeafe] text-[#0284c7]",
  },
  green: {
    card: "border-[#b7ebc8] bg-[#f1f9f5]",
    iconBg: "bg-[#dcfce7] text-[#059669]",
  },
} as const;

export default function AdvancedServices() {
  const { eyebrow, topCards, womenConditions, menConditions } =
    siteData.advancedServices;

  const icons = {
    sperm: <SpermIcon className="size-[34px] sm:size-[40px]" />,
    dna: <FaDna className="size-[30px] sm:size-[36px]" />,
    uterus: <UterusIcon className="size-[34px] sm:size-[40px]" />,
  } as const;

  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center gap-2.5 sm:flex-nowrap">
            <span className="text-[11px] font-extrabold tracking-[0.11em] text-[#e11d48] uppercase sm:whitespace-nowrap sm:text-[13px] sm:tracking-[0.14em]">
              {eyebrow}
            </span>
            <span className="hidden h-[2.5px] w-10 shrink-0 rounded-full bg-[#e11d48] sm:inline-block sm:w-11" />
          </div>
        </Reveal>

        {/* Top 3 service cards */}
        <Stagger
          className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.1}
        >
          {topCards.map((card) => {
            const theme =
              topThemes[card.theme as keyof typeof topThemes] ?? topThemes.rose;
            const icon = icons[card.icon as keyof typeof icons];

            return (
              <StaggerItem key={card.id} variant="scaleIn" className="h-full">
                <article
                  className={`flex h-full items-center gap-4 rounded-[18px] border px-5 py-5 sm:gap-[18px] sm:rounded-[20px] sm:px-6 sm:py-[22px] ${theme.card}`}
                >
                  <div
                    className={`flex size-[60px] shrink-0 items-center justify-center rounded-full sm:size-[68px] ${theme.iconBg}`}
                  >
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[17px] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[19px]">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#64748b] sm:text-[13px]">
                      {card.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Bottom conditions — balanced widths */}
        <Stagger
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5 xl:grid-cols-[1.08fr_0.92fr]"
          stagger={0.12}
        >
          <StaggerItem variant="slideLeft">
            <article className="h-full rounded-[20px] border border-[#f9c5d4] bg-[#fff8fa] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/50 hover:shadow-[0_14px_32px_rgba(232,62,116,0.12)] sm:rounded-[22px] sm:px-7 sm:py-7">
              <div className="mb-5 flex items-center gap-3.5 sm:gap-4">
                <FemaleAvatar />
                <h3 className="font-display text-[1.15rem] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[1.35rem] lg:whitespace-nowrap">
                  {womenConditions.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {womenConditions.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex cursor-pointer whitespace-nowrap rounded-full border border-[#f5b8cb] bg-[#fff0f4] px-3.5 py-2 text-[12.5px] font-semibold text-[#0f2038] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e83e74] hover:bg-[#e83e74] hover:text-white hover:shadow-[0_6px_16px_rgba(232,62,116,0.28)] sm:px-4 sm:py-2.5 sm:text-[13.5px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>

          <StaggerItem variant="slideRight">
            <article className="h-full rounded-[20px] border border-[#b8dbf8] bg-[#f5faff] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0284c7]/50 hover:shadow-[0_14px_32px_rgba(2,132,199,0.12)] sm:rounded-[22px] sm:px-7 sm:py-7">
              <div className="mb-5 flex items-center gap-3.5 sm:gap-4">
                <MaleAvatar />
                <h3 className="font-display text-[1.15rem] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[1.35rem] lg:whitespace-nowrap">
                  {menConditions.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {menConditions.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex cursor-pointer whitespace-nowrap rounded-full border border-[#a8d4f5] bg-[#eef6ff] px-3.5 py-2 text-[12.5px] font-semibold text-[#0f2038] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0284c7] hover:bg-[#0284c7] hover:text-white hover:shadow-[0_6px_16px_rgba(2,132,199,0.28)] sm:px-4 sm:py-2.5 sm:text-[13.5px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
