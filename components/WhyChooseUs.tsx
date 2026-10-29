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
import { Stagger, StaggerItem, Reveal } from "./Reveal";

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
    iconBg: "bg-gradient-to-br from-[#f85f8f] to-[#e6356e]",
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

const ORBIT_ICONS = [
  {
    src: "/images/why-choose/why-icon-mother-baby.png",
    className: "top-[4%] left-[2%] sm:left-[0%]",
    alt: "Mother and baby",
  },
  {
    src: "/images/why-choose/why-icon-heart.png",
    className: "top-[4%] right-[2%] sm:right-[0%]",
    alt: "Heart care",
  },
  {
    src: "/images/why-choose/why-icon-pregnant.png",
    className: "bottom-[34%] -left-[2%] sm:-left-[4%]",
    alt: "Pregnancy care",
  },
  {
    src: "/images/why-choose/why-icon-uterus.png",
    className: "bottom-[34%] -right-[2%] sm:-right-[4%]",
    alt: "Fertility care",
  },
] as const;

function FeatureCard({ item }: { item: FeatureCardData }) {
  const Icon = iconMap[item.icon as IconKey];
  const theme = cardColorThemes[item.color as ColorKey];

  return (
    <article
      className={`group relative flex items-center gap-4 overflow-hidden rounded-[24px] border ${theme.border} ${theme.cardBg} p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:gap-5 sm:p-6 ${theme.hoverGlow}`}
    >
      <div
        className={`relative z-10 flex size-[60px] shrink-0 items-center justify-center rounded-[18px] text-white sm:size-[68px] ${theme.iconBg} ${theme.iconShadow} transition-transform duration-300 group-hover:scale-105`}
      >
        {Icon ? <Icon className="size-[26px] sm:size-[30px]" /> : null}
      </div>

      <div className="relative z-10 min-w-0 flex-1 pr-8">
        <h3 className="font-display text-[17px] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[18.5px]">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#64748b] sm:text-[14px]">
          {item.description}
        </p>
      </div>

      <span
        className={`absolute top-3.5 right-5 font-display text-[22px] leading-none font-bold sm:text-[25px] ${theme.numColor}`}
      >
        {item.number}
      </span>
    </article>
  );
}

export default function WhyChooseUs() {
  const { badge, title, titleAccent, subtitle, leftCards, rightCards } =
    siteData.whyChoose;

  return (
    <section
      id="why-choose"
      className="relative isolate overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 58%, rgba(255,214,230,0.45) 0%, rgba(255,242,248,0.2) 50%, transparent 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <header className="mb-7 text-center sm:mb-9">
          <div className="mb-3.5 inline-flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#e83e74]" />
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff0f5] px-4 py-1.5 text-xs font-semibold text-[#e83e74] sm:text-sm">
              <span className="size-2 rounded-full bg-[#e83e74]" />
              {badge}
            </span>
            <span className="h-[2px] w-8 rounded-full bg-[#e83e74]" />
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-5xl lg:text-[52px]">
            {title} <span className="text-[#e83e74]">{titleAccent}</span>
          </h2>

          <p className="mx-auto mt-3.5 max-w-none text-sm text-[#64748b] sm:whitespace-nowrap sm:text-base">
            {subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_minmax(360px,460px)_1fr] xl:gap-8">
          <Stagger className="flex flex-col gap-4 sm:gap-5" stagger={0.1}>
            {leftCards.map((item) => (
              <StaggerItem key={item.number} variant="slideLeft">
                <FeatureCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>

          {/* Center doctor + pink halo + orbit icons */}
          <Reveal
            variant="scaleIn"
            className="relative order-first mx-auto flex h-[420px] w-full max-w-[460px] items-end justify-center overflow-visible sm:h-[520px] lg:order-none lg:h-[600px]"
          >
            {/* Soft pink circle aura */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[2%] left-1/2 z-0 aspect-square w-[92%] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 48%, #f9c5d8 0%, #fbd0e0 38%, #feeaf2 66%, rgba(255,255,255,0) 74%)",
              }}
            />

            {/* Dotted orbit ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[-1%] left-1/2 z-[1] aspect-square w-[100%] -translate-x-1/2 rounded-full border-[2.5px] border-dotted border-[#f18aaa]/90"
            />

            {/* Generated orbit icons */}
            {ORBIT_ICONS.map((icon) => (
              <div
                key={icon.src}
                className={`absolute z-20 size-[58px] sm:size-[72px] lg:size-[84px] ${icon.className}`}
              >
                <div className="relative size-full overflow-hidden rounded-full bg-white shadow-[0_10px_28px_rgba(232,62,116,0.22)] ring-2 ring-white">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    fill
                    sizes="84px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Doctor cutout */}
            <div className="relative z-10 flex h-[92%] w-full items-end justify-center">
              <Image
                src="/images/why-choose/doctor-cutout.png"
                alt="Dr. Mona Dahiya - Fertility & IVF Specialist"
                width={520}
                height={650}
                priority
                className="h-full w-auto max-w-none object-contain object-bottom select-none"
                sizes="(max-width: 768px) 90vw, 460px"
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-white via-white/80 to-transparent"
            />
          </Reveal>

          <Stagger className="flex flex-col gap-4 sm:gap-5" stagger={0.1}>
            {rightCards.map((item) => (
              <StaggerItem key={item.number} variant="slideRight">
                <FeatureCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
