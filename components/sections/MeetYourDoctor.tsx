"use client";

import Image from "next/image";
import {
  FaCheck,
  FaArrowRight,
  FaYoutube,
  FaStethoscope,
  FaGraduationCap,
  FaUserMd,
  FaHospital,
  FaCertificate,
  FaMedal,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

const qualIconMap = {
  pink: {
    Icon: FaGraduationCap,
    bg: "bg-[#fde8ef]",
    text: "text-[#e11d60]",
  },
  purple: {
    Icon: FaUserMd,
    bg: "bg-[#efe8ff]",
    text: "text-[#7b5bb8]",
  },
  green: {
    Icon: FaHospital,
    bg: "bg-[#e4f7f1]",
    text: "text-[#1a9b7a]",
  },
  orange: {
    Icon: FaCertificate,
    bg: "bg-[#fff0e4]",
    text: "text-[#e8893a]",
  },
  blue: {
    Icon: FaMedal,
    bg: "bg-[#e8f2ff]",
    text: "text-[#4a90d9]",
  },
} as const;

type QualColor = keyof typeof qualIconMap;

export default function MeetYourDoctor() {
  const data = siteData.meetYourDoctor;
  const { card } = data;

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8"
      style={{
        background:
          "linear-gradient(165deg, #ffffff 0%, #fff8fb 28%, #fff5f9 55%, #ffffff 100%)",
      }}
    >
      {/* Soft ambient fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[-8%] h-[420px] w-[420px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,228,0.55) 0%, rgba(255,232,240,0.2) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[20%] right-[-6%] h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(253,196,216,0.45) 0%, rgba(255,240,246,0.15) 50%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[30%] h-[300px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,220,234,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_310px_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[minmax(0,1fr)_380px_minmax(0,1fr)] xl:gap-8">
          {/* Mobile: image first, then this content. Desktop: left column. */}
          <Reveal
            variant="slideLeft"
            className="relative z-10 order-2 w-full min-w-0 lg:order-none"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f9c5d4]/60 bg-gradient-to-r from-[#ffe8f0] to-[#fff5f8] px-3.5 py-1.5 text-[12px] font-semibold whitespace-nowrap text-[#e83e74] shadow-[0_4px_14px_rgba(232,62,116,0.08)]">
              <span className="size-1.5 rounded-full bg-gradient-to-br from-[#f4729a] to-[#e83e74]" />
              {data.badge}
            </span>

            <h2 className="font-display mt-5 text-[1.85rem] leading-[1.18] font-bold tracking-[-0.02em] text-[#0f2038] sm:text-[2.35rem] lg:text-[2.25rem] xl:text-[2.75rem]">
              <span className="sm:whitespace-nowrap">{data.titleLine1}</span>
              <br />
              <span className="sm:whitespace-nowrap">{data.titleLine2}</span>
              <br />
              <span className="bg-gradient-to-r from-[#e83e74] via-[#f0518e] to-[#c53658] bg-clip-text text-transparent sm:whitespace-nowrap">
                {data.titleAccent}
              </span>
            </h2>

            <p className="mt-4 max-w-[470px] text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
              {data.description}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 xl:mt-7 xl:gap-x-6 xl:gap-y-3.5">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ffe8f0] text-[#e83e74]">
                    <FaCheck className="size-2.5" />
                  </span>
                  <span className="text-[12.5px] leading-snug font-semibold text-[#1e293b] xl:text-[13.5px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-nowrap sm:items-center xl:mt-8 xl:gap-3">
              <a
                href={data.primaryCta.href}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e83e74] via-[#f0518e] to-[#d13266] px-3.5 py-2.5 text-[11.5px] font-semibold text-white whitespace-nowrap shadow-[0_10px_28px_rgba(232,62,116,0.32)] transition hover:brightness-105 xl:gap-2.5 xl:px-5 xl:py-3 xl:text-[13.5px]"
              >
                <span>{data.primaryCta.label}</span>
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[#e83e74] xl:size-6">
                  <FaArrowRight className="size-2.5" />
                </span>
              </a>

              <a
                href={data.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#f5a3bd] bg-gradient-to-r from-white to-[#fff5f8] px-3.5 py-2 text-[11.5px] font-semibold text-[#0f2438] whitespace-nowrap shadow-[0_6px_18px_rgba(232,62,116,0.08)] transition hover:from-[#fff5f8] hover:to-[#ffe8f0] xl:gap-2.5 xl:px-5 xl:py-2.5 xl:text-[13.5px]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ff0033] text-white shadow-[0_3px_10px_rgba(255,0,51,0.3)] xl:size-8">
                  <FaYoutube className="size-4 xl:size-[18px]" />
                </span>
                <span>{data.secondaryCta.label}</span>
              </a>
            </div>
          </Reveal>

          <Reveal
            variant="scaleIn"
            className="relative order-first mx-auto flex h-[400px] w-[300px] shrink-0 items-end justify-center overflow-visible sm:h-[460px] sm:w-[350px] lg:order-none lg:h-[480px] lg:w-[310px] xl:h-[540px] xl:w-[380px]"
          >
            {/* Solid soft pink circle */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[2%] left-1/2 z-0 aspect-square w-[96%] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 46%, #f7b7cd 0%, #f9c5d8 28%, #fbd5e5 52%, #feeaf2 70%, rgba(255,245,249,0.35) 82%, transparent 90%)",
              }}
            />
            {/* Outer soft bloom */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[-2%] left-1/2 z-0 aspect-square w-[110%] -translate-x-1/2 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 48%, rgba(249,180,205,0.55) 0%, rgba(251,205,222,0.28) 40%, transparent 68%)",
              }}
            />

            <div className="absolute top-[14%] right-[6%] z-[5] flex size-14 items-center justify-center rounded-full bg-white text-[#e83e74] shadow-[0_10px_28px_rgba(232,62,116,0.22)] ring-1 ring-[#fde2ec] sm:size-16">
              <FaStethoscope className="size-6 sm:size-7" />
            </div>

            <div className="relative z-10 h-full w-full">
              <Image
                src={data.image}
                alt="Dr. Mona Dahiya"
                fill
                sizes="(max-width: 1024px) 380px, 420px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16"
              style={{
                background:
                  "linear-gradient(to top, #fff5f9 0%, rgba(255,248,251,0.75) 40%, transparent 100%)",
              }}
            />
          </Reveal>

          <Reveal
            variant="slideRight"
            className="relative z-10 order-3 w-full min-w-0 lg:order-none"
          >
            <article
              className="mx-auto w-full max-w-[460px] rounded-[28px] border border-[#f7c9d8]/80 p-5 shadow-[0_20px_48px_rgba(232,62,116,0.12)] sm:p-7 lg:mx-0 lg:p-6 xl:p-8"
              style={{
                background:
                  "linear-gradient(160deg, #fff8fb 0%, #fff0f5 42%, #ffe8f0 100%)",
              }}
            >
              <p className="text-[12.5px] font-bold tracking-wide text-[#e11d60] sm:whitespace-nowrap sm:text-[13.5px]">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-2 text-[1.85rem] leading-none font-bold sm:whitespace-nowrap sm:text-[2.25rem] xl:text-[2.45rem]">
                <span className="text-[#0f2438]">{card.namePrefix}</span>{" "}
                <span className="bg-gradient-to-r from-[#e11d60] to-[#f0518e] bg-clip-text text-transparent">
                  {card.name}
                </span>
              </h3>

              <div className="mt-6 mb-1 flex items-center gap-3">
                <span className="shrink-0 text-[11px] font-bold tracking-[0.14em] text-[#e11d60] uppercase sm:text-[12px]">
                  {card.sectionLabel}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#f0a8bc] to-transparent" />
              </div>

              <ul className="flex flex-col">
                {card.qualifications.map((item, index) => {
                  const theme = qualIconMap[item.color as QualColor];
                  const Icon = theme.Icon;
                  const isLast = index === card.qualifications.length - 1;
                  return (
                    <li
                      key={item.title}
                      className={`flex items-start gap-4 py-4 ${
                        isLast ? "" : "border-b border-[#f3d0dc]/80"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex size-12 shrink-0 items-center justify-center rounded-full sm:size-[52px] ${theme.bg} ${theme.text}`}
                      >
                        <Icon className="size-[22px] sm:size-6" />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[15.5px] leading-snug font-bold text-[#0f2438] sm:text-[16.5px]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-snug text-[#667d99] sm:text-[14px]">
                          {item.subtitle}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

