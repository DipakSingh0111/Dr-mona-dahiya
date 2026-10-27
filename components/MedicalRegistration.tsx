"use client";

import { MdAccountBalance } from "react-icons/md";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "./Reveal";

const colorSchemes = {
  teal: {
    badge: "from-[#0a7a6e] to-[#066057]",
    ring: "ring-[#7ec9bf]/70",
    cardBorder: "border-[#b7e4de]",
    cardShadow: "shadow-[0_6px_22px_rgba(10,122,110,0.08)]",
    num: "text-[#0a6b60]",
    wave: "#0a7a6e",
    watermark: "text-[#0a7a6e]",
  },
  crimson: {
    badge: "from-[#c43a66] to-[#a12b52]",
    ring: "ring-[#f0a8bf]/75",
    cardBorder: "border-[#f3c4d2]",
    cardShadow: "shadow-[0_6px_22px_rgba(196,58,102,0.08)]",
    num: "text-[#b02e56]",
    wave: "#c43a66",
    watermark: "text-[#c43a66]",
  },
  blue: {
    badge: "from-[#1a7fc0] to-[#14669c]",
    ring: "ring-[#9dccf0]/75",
    cardBorder: "border-[#b7daf5]",
    cardShadow: "shadow-[0_6px_22px_rgba(26,127,192,0.08)]",
    num: "text-[#1a74b0]",
    wave: "#1a7fc0",
    watermark: "text-[#1a7fc0]",
  },
} as const;

type ColorKey = keyof typeof colorSchemes;

function WaveGraphic({ color }: { color: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 120"
      className="pointer-events-none absolute right-0 bottom-0 h-[78%] w-[58%]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 120 C45 88 78 52 118 68 C148 80 172 52 200 40 L200 120 Z"
        fill={color}
        opacity="0.07"
      />
      <path
        d="M30 120 C70 96 100 70 136 82 C162 92 182 72 200 64 L200 120 Z"
        fill={color}
        opacity="0.06"
      />
      <path
        d="M70 120 C105 102 130 88 158 96 C178 102 190 90 200 86 L200 120 Z"
        fill={color}
        opacity="0.05"
      />
    </svg>
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
    <article
      className={`relative flex min-h-[132px] items-center overflow-hidden rounded-[16px] border bg-white px-4 py-5 sm:min-h-[140px] sm:px-5 sm:py-5 ${scheme.cardBorder} ${scheme.cardShadow}`}
    >
      <WaveGraphic color={scheme.wave} />

      {/* Building watermark — top right */}
      <MdAccountBalance
        aria-hidden
        className={`pointer-events-none absolute top-3 right-3 size-11 sm:size-12 ${scheme.watermark} opacity-[0.12]`}
      />

      <div className="relative z-10 flex w-full items-center gap-3.5 sm:gap-4">
        {/* Circular code badge */}
        <div
          className={`flex size-[68px] shrink-0 items-center justify-center rounded-full bg-white p-[3px] ring-1 sm:size-[74px] ${scheme.ring} shadow-[0_6px_16px_rgba(15,35,60,0.08)]`}
        >
          <div
            className={`flex size-full items-center justify-center rounded-full border-[2.5px] border-white bg-gradient-to-br ${scheme.badge}`}
          >
            <span className="text-[14px] font-bold tracking-wide text-white sm:text-[15px]">
              {code}
            </span>
          </div>
        </div>

        <div className="h-12 w-px shrink-0 bg-[#e5e7eb] sm:h-14" />

        <div className="min-w-0 flex-1 pr-8">
          <h4 className="text-[12.5px] leading-snug font-bold tracking-tight text-[#1e293b] sm:text-[13.5px]">
            {councilName}
          </h4>
          <p
            className={`font-display mt-1 text-[1.35rem] leading-none font-bold tracking-tight sm:text-[1.55rem] ${scheme.num}`}
          >
            {regNumber}
          </p>
          <p className="mt-1.5 text-[11px] leading-snug text-[#94a3b8] sm:text-[11.5px]">
            {regLabel}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function MedicalRegistration() {
  const { eyebrow, title, titleAccent, subtitle, items } =
    siteData.medicalRegistration;

  return (
    <section className="bg-white px-3 py-12 sm:px-4 sm:py-14 lg:pr-8 lg:pl-3 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-8 text-center md:mb-10">
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

          <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500 sm:text-base">
            {subtitle}
          </p>
        </div>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6"
          stagger={0.1}
        >
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
