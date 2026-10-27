"use client";

import { MdAccountBalance } from "react-icons/md";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "./Reveal";

const colorSchemes = {
  teal: {
    badge: "from-[#0d6e67] to-[#0a524c]",
    badgeGlow: "shadow-[0_8px_20px_rgba(13,110,103,0.35)]",
    cardBorder: "border-[#9fd8d2]",
    cardShadow: "shadow-[0_8px_28px_rgba(13,110,103,0.1)]",
    num: "text-[#0e746e]",
    watermark: "text-[#0d6e67]",
    hover: "hover:shadow-[0_14px_36px_rgba(13,110,103,0.16)]",
  },
  crimson: {
    badge: "from-[#c53658] to-[#9e2a46]",
    badgeGlow: "shadow-[0_8px_20px_rgba(197,54,88,0.35)]",
    cardBorder: "border-[#f0b8c6]",
    cardShadow: "shadow-[0_8px_28px_rgba(197,54,88,0.1)]",
    num: "text-[#b2284e]",
    watermark: "text-[#c53658]",
    hover: "hover:shadow-[0_14px_36px_rgba(197,54,88,0.16)]",
  },
  blue: {
    badge: "from-[#0d6db7] to-[#09528d]",
    badgeGlow: "shadow-[0_8px_20px_rgba(13,109,183,0.35)]",
    cardBorder: "border-[#a8d4f2]",
    cardShadow: "shadow-[0_8px_28px_rgba(13,109,183,0.1)]",
    num: "text-[#0d6db7]",
    watermark: "text-[#0d6db7]",
    hover: "hover:shadow-[0_14px_36px_rgba(13,109,183,0.16)]",
  },
} as const;

type ColorKey = keyof typeof colorSchemes;

function WaveGraphic({ colorClass }: { colorClass: string }) {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 h-[70%] w-[55%] overflow-hidden rounded-br-[22px]">
      <svg
        viewBox="0 0 220 160"
        preserveAspectRatio="none"
        className={`h-full w-full ${colorClass}`}
      >
        <path
          d="M 0,160 C 60,120 90,70 140,90 C 175,105 200,70 220,55 L 220,160 Z"
          fill="currentColor"
          opacity="0.1"
        />
        <path
          d="M 40,160 C 90,130 120,95 160,110 C 190,122 210,95 220,85 L 220,160 Z"
          fill="currentColor"
          opacity="0.08"
        />
      </svg>
    </div>
  );
}

function RegistrationCard({
  code,
  councilName,
  regNumber,
  regLabel,
  colorScheme,
}: {
  code: string;
  councilName: string;
  regNumber: string;
  regLabel: string;
  colorScheme: ColorKey;
}) {
  const scheme = colorSchemes[colorScheme];

  return (
    <div
      className={`relative flex min-h-[148px] items-center overflow-hidden rounded-[22px] border bg-white p-5 transition-all duration-300 sm:p-6 ${scheme.cardBorder} ${scheme.cardShadow} ${scheme.hover}`}
    >
      <WaveGraphic colorClass={scheme.watermark} />

      {/* Large institutional watermark — right side */}
      <div className="pointer-events-none absolute top-1/2 right-3 z-[1] -translate-y-1/2 sm:right-4">
        <MdAccountBalance
          className={`size-[72px] sm:size-[84px] ${scheme.watermark} opacity-[0.18]`}
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex w-full items-center gap-3.5 sm:gap-5">
        {/* Circular code badge */}
        <div className="relative flex shrink-0 items-center justify-center">
          <div className="flex size-[70px] items-center justify-center rounded-full border border-black/[0.04] bg-gradient-to-b from-black/[0.03] to-transparent p-[3px] sm:size-[78px]">
            <div
              className={`flex size-full items-center justify-center rounded-full border-[2.5px] border-white bg-gradient-to-br ${scheme.badge} ${scheme.badgeGlow}`}
            >
              <span className="text-[15px] font-bold tracking-wide text-white sm:text-[17px]">
                {code}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden h-14 w-px shrink-0 bg-gray-200/90 sm:block" />

        {/* Text block — left aligned */}
        <div className="min-w-0 flex-1 pr-14 sm:pr-16">
          <h4 className="text-[13px] leading-snug font-semibold tracking-tight text-[#1a2744] sm:text-[14px]">
            {councilName}
          </h4>
          <p
            className={`font-display mt-1 mb-0.5 text-[22px] leading-none font-bold tracking-tight sm:text-[26px] md:text-[28px] ${scheme.num}`}
          >
            {regNumber}
          </p>
          <p className="text-[11px] text-gray-500 sm:text-[12px]">{regLabel}</p>
        </div>
      </div>
    </div>
  );
}

export default function MedicalRegistration() {
  const { eyebrow, title, titleAccent, subtitle, items } =
    siteData.medicalRegistration;

  return (
    <section className="bg-[#fcfdfe] px-3 py-14 sm:px-4 sm:py-16 lg:pr-8 lg:pl-3 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 inline-flex items-center justify-center gap-3">
            <span className="inline-block h-[2px] w-7 rounded-full bg-[#d93864]" />
            <span className="text-xs font-medium tracking-wide text-[#d93864] sm:text-sm">
              {eyebrow}
            </span>
            <span className="inline-block h-[2px] w-7 rounded-full bg-[#d93864]" />
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-5xl">
            <span>{title} </span>
            <span className="text-[#0e746e]">{titleAccent}</span>
          </h2>

          <p className="mx-auto mt-3.5 max-w-lg text-sm text-gray-500 sm:text-base">
            {subtitle}
          </p>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6" stagger={0.1}>
          {items.map((item) => (
            <StaggerItem key={item.code}>
              <RegistrationCard
                code={item.code}
                councilName={item.councilName}
                regNumber={item.regNumber}
                regLabel={item.regLabel}
                colorScheme={item.colorScheme as ColorKey}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
