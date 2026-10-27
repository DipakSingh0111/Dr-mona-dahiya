"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaRibbon } from "react-icons/fa";
import { GiEmbryo } from "react-icons/gi";
import siteData from "@/data/site.json";
import { Reveal } from "./Reveal";

type CardIcon = "egg" | "sperm" | "embryo" | "ribbon";

const accentMap = {
  pink: {
    glow: "from-[#3a1a2e]/80 via-[#1a2e28] to-[#0c241f]",
    ring: "ring-[#f0518e]/40",
    icon: "text-[#f0518e]",
    iconBg: "bg-[#f0518e]/15",
  },
  purple: {
    glow: "from-[#2a1a3a]/80 via-[#1a2e28] to-[#0c241f]",
    ring: "ring-[#b57edc]/40",
    icon: "text-[#c9a0e8]",
    iconBg: "bg-[#b57edc]/15",
  },
  teal: {
    glow: "from-[#12353a]/80 via-[#1a2e28] to-[#0c241f]",
    ring: "ring-[#3db8a8]/40",
    icon: "text-[#3db8a8]",
    iconBg: "bg-[#3db8a8]/15",
  },
} as const;

function EggIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="12" cy="13" rx="6.5" ry="8" opacity="0.9" />
      <circle cx="12" cy="12" r="2.2" fill="#0c241f" opacity="0.35" />
    </svg>
  );
}

function SpermIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="8" cy="8" r="3.2" fill="currentColor" stroke="none" />
      <path d="M10.5 10.5c2 2.2 4.2 5.5 4.8 8.2" />
      <path d="M13.2 14.2c1.4-.2 2.8.4 3.6 1.4" />
    </svg>
  );
}

function CardGlyph({
  icon,
  className,
}: {
  icon: CardIcon;
  className?: string;
}) {
  if (icon === "egg") return <EggIcon className={className} />;
  if (icon === "sperm") return <SpermIcon className={className} />;
  if (icon === "embryo") return <GiEmbryo className={className} />;
  return <FaRibbon className={className} />;
}

function NumberBadge({ value }: { value: string }) {
  return (
    <span className="inline-flex size-9 items-center justify-center rounded-md border border-dashed border-[#f0518e] text-[12px] font-semibold tracking-wide text-[#f0518e]">
      {value}
    </span>
  );
}

function CircleArt({ accent }: { accent: keyof typeof accentMap }) {
  const colors =
    accent === "teal"
      ? ["#3db8a8", "#1a6b62"]
      : accent === "purple"
        ? ["#c9a0e8", "#6b4fa8"]
        : ["#f0518e", "#c53658"];

  return (
    <div className="relative size-[150px] shrink-0 sm:size-[170px]">
      <div
        className="absolute inset-0 rounded-full opacity-80 blur-2xl"
        style={{ background: colors[0] }}
      />
      <div
        className="relative flex size-full items-center justify-center overflow-hidden rounded-full border border-white/10"
        style={{
          background: `radial-gradient(circle at 35% 30%, ${colors[0]} 0%, ${colors[1]} 55%, #0c241f 100%)`,
        }}
      >
        <div className="size-[46%] rounded-full bg-white/15 ring-2 ring-white/25" />
        <div className="absolute size-[22%] rounded-full bg-white/70 shadow-[0_0_24px_rgba(255,255,255,0.45)]" />
      </div>
    </div>
  );
}

export default function FertilityPreservation() {
  const data = siteData.fertilityPreservation;
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0c241f] px-3 py-14 sm:px-4 sm:py-20 lg:pr-8 lg:pl-3 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <Reveal>
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#f0518e] sm:w-14" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#f0518e] uppercase sm:text-xs">
                {data.eyebrow}
              </span>
              <span className="h-px w-10 bg-[#f0518e] sm:w-14" />
            </div>

            <h2 className="font-display text-[1.85rem] leading-tight font-bold text-white sm:text-[2.4rem] lg:text-[2.75rem]">
              {data.title}{" "}
              <span className="text-[#f0518e] italic">{data.titleAccent}</span>{" "}
              {data.titleEnd}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-white/70 sm:text-[14.5px]">
              {data.subtitle}
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.35fr)] lg:gap-6">
          {/* Left image */}
          <Reveal
            variant="slideLeft"
            className="relative min-h-[320px] overflow-hidden rounded-[22px] sm:min-h-[420px] lg:min-h-[480px]"
          >
            <Image
              src={data.image}
              alt="Dr. Mona Dahiya — fertility preservation"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </Reveal>

          {/* Accordion cards — first open by default; hover expands */}
          <Reveal variant="slideRight">
            <div
              className="flex h-auto min-h-[420px] flex-col gap-3 sm:min-h-[480px] lg:flex-row lg:gap-3"
              onMouseLeave={() => setActive(0)}
            >
            {data.cards.map((card, index) => {
              const isOpen = active === index;
              const accent = (card.accent in accentMap
                ? card.accent
                : "pink") as keyof typeof accentMap;
              const theme = accentMap[accent];

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  tabIndex={0}
                  className={`group relative cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none ${theme.glow} ${
                    isOpen
                      ? "min-h-[280px] flex-[1.15] lg:min-h-0 lg:flex-[3.4]"
                      : "min-h-[72px] flex-none lg:min-w-[78px] lg:flex-[0.55]"
                  }`}
                >
                  {/* Expanded */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between p-5 sm:p-6 ${
                      isOpen
                        ? "pointer-events-auto opacity-100 delay-75"
                        : "pointer-events-none opacity-0"
                    } transition-opacity duration-300`}
                  >
                    <div className="flex h-full gap-3">
                      <div className="flex min-w-0 flex-1 flex-col">
                        <NumberBadge value={card.number} />
                        <h3 className="font-display mt-4 text-[1.55rem] leading-tight font-bold text-white sm:text-[1.75rem]">
                          {card.title}
                        </h3>
                        <p className="mt-1.5 text-[12.5px] text-white/55 sm:text-[13px]">
                          {card.subtitle}
                        </p>
                        <div className="my-4 h-px w-16 bg-[#f0518e]/70" />
                        <p className="text-[12.5px] leading-relaxed text-white/75 sm:text-[13.5px]">
                          {card.description}
                        </p>
                        <a
                          href={data.cta.href}
                          className="mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#f0518e] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#e0437f]"
                        >
                          {data.cta.label}
                          <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#f0518e]">
                            <FaArrowRight className="size-2.5" />
                          </span>
                        </a>
                      </div>
                      <div className="hidden items-center self-center sm:flex">
                        <CircleArt accent={accent} />
                      </div>
                    </div>
                  </div>

                  {/* Collapsed — vertical strip on desktop */}
                  <div
                    className={`absolute inset-0 flex items-center justify-between px-5 py-4 lg:flex-col lg:px-3 lg:py-5 ${
                      isOpen
                        ? "pointer-events-none opacity-0"
                        : "opacity-100 delay-75"
                    } transition-opacity duration-300`}
                  >
                    <span
                      className={`flex size-11 items-center justify-center rounded-full ring-1 ${theme.iconBg} ${theme.icon} ${theme.ring}`}
                    >
                      <CardGlyph
                        icon={card.icon as CardIcon}
                        className="size-5"
                      />
                    </span>

                    <span className="font-display text-[15px] font-semibold whitespace-nowrap text-white lg:origin-center lg:rotate-180 lg:[writing-mode:vertical-rl]">
                      {card.title}
                    </span>

                    <NumberBadge value={card.number} />
                  </div>
                </div>
              );
            })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
