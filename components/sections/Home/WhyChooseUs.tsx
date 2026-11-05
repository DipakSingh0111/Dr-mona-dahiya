"use client";

import Image from "next/image";
import {
  FaStethoscope,
  FaChartLine,
  FaFileAlt,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaVideo,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";

const iconMap = {
  stethoscope: FaStethoscope,
  chart: FaChartLine,
  document: FaFileAlt,
  graduation: FaGraduationCap,
  heartHands: FaHandHoldingHeart,
  video: FaVideo,
} as const;

const cardColorThemes = {
  pink: {
    border: "border-[#fbcfe0]",
    cardBg: "bg-gradient-to-br from-[#fff5f8] via-white to-[#ffe8f0]",
    iconBg: "bg-gradient-to-br from-rose to-rose-dark",
    iconShadow: "shadow-[0_8px_20px_rgba(248,95,143,0.35)]",
    numColor: "text-[#f8b4cd]",
    hoverGlow: "hover:shadow-[0_16px_36px_rgba(230,53,110,0.15)]",
  },
  teal: {
    border: "border-[#b8ebe2]",
    cardBg: "bg-gradient-to-br from-[#f0fbf9] via-white to-[#e6f8f5]",
    iconBg: "bg-gradient-to-br from-[#3ec4b0] to-[#20a38f]",
    iconShadow: "shadow-[0_8px_20px_rgba(32,163,143,0.35)]",
    numColor: "text-[#9ee3d6]",
    hoverGlow: "hover:shadow-[0_16px_36px_rgba(32,163,143,0.15)]",
  },
  purple: {
    border: "border-[#dfd3fa]",
    cardBg: "bg-gradient-to-br from-[#f7f4fe] via-white to-[#f0eaff]",
    iconBg: "bg-gradient-to-br from-[#9274f4] to-[#764de8]",
    iconShadow: "shadow-[0_8px_20px_rgba(118,77,232,0.35)]",
    numColor: "text-[#cfbef8]",
    hoverGlow: "hover:shadow-[0_16px_36px_rgba(118,77,232,0.15)]",
  },
  orange: {
    border: "border-[#fedab7]",
    cardBg: "bg-gradient-to-br from-[#fff7f0] via-white to-[#feefe2]",
    iconBg: "bg-gradient-to-br from-[#fb9956] to-[#eb7629]",
    iconShadow: "shadow-[0_8px_20px_rgba(235,118,41,0.35)]",
    numColor: "text-[#fdc89a]",
    hoverGlow: "hover:shadow-[0_16px_36px_rgba(235,118,41,0.15)]",
  },
  blue: {
    border: "border-[#c4e1fd]",
    cardBg: "bg-gradient-to-br from-[#f2f8fe] via-white to-[#e6f2fd]",
    iconBg: "bg-gradient-to-br from-[#4ea5f5] to-[#2583e3]",
    iconShadow: "shadow-[0_8px_20px_rgba(37,131,227,0.35)]",
    numColor: "text-[#aed4fb]",
    hoverGlow: "hover:shadow-[0_16px_36px_rgba(37,131,227,0.15)]",
  },
  rose: {
    border: "border-[#ffc7d5]",
    cardBg: "bg-gradient-to-br from-[#fff4f7] via-white to-[#ffe9ef]",
    iconBg: "bg-gradient-to-br from-[#fc587e] to-[#ea315e]",
    iconShadow: "shadow-[0_8px_20px_rgba(234,49,94,0.35)]",
    numColor: "text-[#ffb3c5]",
    hoverGlow: "hover:shadow-[0_16px_36px_rgba(234,49,94,0.15)]",
  },
} as const;

type ColorKey = keyof typeof cardColorThemes;
type IconKey = keyof typeof iconMap;

type FeatureCardData = {
  number: string;
  icon: string;
  title: string;
  description: string;
  color: string;
};

function FeatureCard({ item }: { item: FeatureCardData }) {
  const Icon = iconMap[item.icon as IconKey];
  const theme = cardColorThemes[item.color as ColorKey];

  return (
    <article
      className={`group relative flex h-full w-full items-center gap-3.5 overflow-hidden rounded-[20px] border ${theme.border} ${theme.cardBg} px-3.5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-3.5 xl:gap-4 xl:rounded-[22px] xl:px-5 xl:py-4 ${theme.hoverGlow}`}
    >
      <div
        className={`relative z-10 flex size-[44px] shrink-0 items-center justify-center rounded-[14px] text-white sm:size-[48px] sm:rounded-[15px] xl:size-[56px] xl:rounded-[16px] ${theme.iconBg} ${theme.iconShadow} transition-transform duration-300 group-hover:scale-105`}
      >
        {Icon ? <Icon className="size-[20px] sm:size-[22px] xl:size-[26px]" /> : null}
      </div>

      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="font-display pr-7 text-[14.5px] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[15px] xl:pr-8 xl:text-[17px]">
          {item.title}
        </h3>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#64748b] sm:text-[12px] xl:mt-1 xl:text-[13px]">
          {item.description}
        </p>
      </div>

      <span
        className={`absolute top-2.5 right-3.5 font-display text-[17px] leading-none font-bold sm:top-3 sm:right-4 xl:top-3.5 xl:right-4.5 xl:text-[21px] ${theme.numColor}`}
      >
        {item.number}
      </span>
    </article>
  );
}

export default function WhyChooseUs() {
  const { badge, title, titleAccent, subtitle, image, leftCards, rightCards } =
    siteData.whyChoose;

  return (
    <section
      id="why-choose"
      className="relative isolate overflow-hidden bg-white py-6 sm:py-7 lg:py-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 58%, rgba(255,214,230,0.45) 0%, rgba(255,242,248,0.2) 50%, transparent 75%)",
        }}
      />

      <div className="page-container">
        <header className="mb-7 text-center sm:mb-9">
          <div className="mb-3.5 inline-flex max-w-full items-center justify-center gap-2 sm:gap-3">
            <span className="hidden h-[2px] w-8 shrink-0 rounded-full bg-rose sm:inline-block" />
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff0f5] px-3.5 py-1.5 text-center text-[11.5px] font-semibold text-rose sm:whitespace-nowrap sm:px-4 sm:text-sm">
              <span className="size-2 shrink-0 rounded-full bg-rose" />
              {badge}
            </span>
            <span className="hidden h-[2px] w-8 shrink-0 rounded-full bg-rose sm:inline-block" />
          </div>

          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:whitespace-nowrap lg:text-[2.35rem] xl:text-[3rem]">
            {title} <span className="text-rose">{titleAccent}</span>
          </h2>

          {subtitle ? (
            <p className="mx-auto mt-3 max-w-none text-xs text-[#64748b] sm:text-sm lg:whitespace-nowrap xl:text-base">
              {subtitle}
            </p>
          ) : null}
        </header>

        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_276px_1fr] lg:items-stretch lg:gap-5 xl:grid-cols-[1fr_304px_1fr] xl:gap-7">
          <Stagger
            className="flex h-full flex-col justify-between gap-3 sm:gap-3.5 lg:gap-4 xl:gap-4.5"
            stagger={0.08}
          >
            {leftCards.map((item) => (
              <StaggerItem
                key={item.number}
                variant="slideLeft"
                className="flex flex-1"
              >
                <FeatureCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>

          {/* Center doctor portrait — top & bottom aligned with cards */}
          <Reveal
            variant="scaleIn"
            className="relative order-first mx-auto aspect-[4/5] w-full max-w-[290px] sm:max-w-[330px] lg:order-none lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[345px] lg:max-w-none xl:min-h-[380px]"
          >
            {/* Outer soft bloom */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 z-0 rounded-[32px] blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(249,180,205,0.5) 0%, rgba(251,205,222,0.25) 50%, transparent 75%)",
              }}
            />

            <div className="relative z-10 h-full w-full overflow-hidden rounded-[22px] border-4 border-white shadow-[0_18px_40px_rgba(232,62,116,0.18)] sm:rounded-[24px]">
              <Image
                src={image}
                alt="Dr. Mona Dahiya - Fertility & IVF Specialist"
                fill
                priority
                className="object-cover object-top select-none"
                sizes="(max-width: 1024px) 330px, 320px"
              />
            </div>
          </Reveal>

          <Stagger
            className="flex h-full flex-col justify-between gap-3 sm:gap-3.5 lg:gap-4 xl:gap-4.5"
            stagger={0.08}
          >
            {rightCards.map((item) => (
              <StaggerItem
                key={item.number}
                variant="slideRight"
                className="flex flex-1"
              >
                <FeatureCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
