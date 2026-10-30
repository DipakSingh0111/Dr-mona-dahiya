"use client";

import siteData from "@/data/site.json";
import { FaDna, FaMars } from "react-icons/fa";
import { MdPregnantWoman } from "react-icons/md";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

function FemaleAvatar() {
  return (
    <div className="relative flex size-[52px] shrink-0 items-center justify-center rounded-full shadow-[0_6px_18px_rgba(218,88,120,0.38)] sm:size-[56px]">
      <svg
        viewBox="0 0 64 64"
        className="size-full overflow-hidden rounded-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="female-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e56d8c" />
            <stop offset="100%" stopColor="#c44767" />
          </linearGradient>
          <clipPath id="female-avatar-clip">
            <circle cx="32" cy="32" r="32" />
          </clipPath>
        </defs>

        <circle cx="32" cy="32" r="32" fill="url(#female-bg)" />

        <g clipPath="url(#female-avatar-clip)">
          <path
            d="M17.5 34 C17.5 20.5 22.5 13 32 13 C41.5 13 46.5 20.5 46.5 34 C46.5 41 44.5 45.5 41 46 L23 46 C19.5 45.5 17.5 41 17.5 34 Z"
            fill="#7a253b"
          />

          <path
            d="M27.5 20 C29.5 23.5 34.5 25 38.5 25.5 C39 27.5 39 30.5 38 33.5 C36.8 37.2 34.5 39.5 32 39.5 C29.5 39.5 27.2 37.2 26 33.5 C24.8 29.8 25.2 25 27.5 20 Z"
            fill="#ffffff"
          />

          <rect x="29.4" y="37" width="5.2" height="12" rx="2" fill="#ffffff" />

          <path
            d="M13 64 C14.5 51.5 22 47.5 32 47.5 C42 47.5 49.5 51.5 51 64 Z"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
}

function MaleAvatar() {
  return (
    <div className="relative flex size-[52px] shrink-0 items-center justify-center rounded-full shadow-[0_6px_18px_rgba(61,154,207,0.38)] sm:size-[56px]">
      <svg
        viewBox="0 0 64 64"
        className="size-full overflow-hidden rounded-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="male-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#52ace0" />
            <stop offset="100%" stopColor="#3182b3" />
          </linearGradient>
          <clipPath id="male-avatar-clip">
            <circle cx="32" cy="32" r="32" />
          </clipPath>
        </defs>

        <circle cx="32" cy="32" r="32" fill="url(#male-bg)" />

        <g clipPath="url(#male-avatar-clip)">
          <path
            d="M23.5 27 C23 19.5 26 15.5 32 15.5 C38 15.5 41 19.5 40.5 27 Z"
            fill="#153c57"
          />

          <path
            d="M24.8 25 C26.2 22.8 28.8 23.6 32 23.6 C35.2 23.6 37.8 22.8 39.2 25 C39.8 29 38.8 34 36.6 37.2 C35.3 39 33.7 40 32 40 C30.3 40 28.7 39 27.4 37.2 C25.2 34 24.2 29 24.8 25 Z"
            fill="#ffffff"
          />

          <rect x="29.3" y="37.5" width="5.4" height="12" rx="2" fill="#ffffff" />

          <path
            d="M14 64 C15.5 51.5 22.5 47.5 32 47.5 C41.5 47.5 48.5 51.5 50 64 Z"
            fill="#ffffff"
          />

          <polygon points="28.2,47.5 35.8,47.5 32,53.5" fill="#9fd2ee" />
        </g>
      </svg>
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

export default function AdvancedCare() {
  const { eyebrow, topCards, womenConditions, menConditions } =
    siteData.advancedServices;

  const icons = {
    sperm: <FaMars className="size-[30px] sm:size-[36px]" />,
    dna: <FaDna className="size-[30px] sm:size-[36px]" />,
    uterus: <MdPregnantWoman className="size-[34px] sm:size-[40px]" />,
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

