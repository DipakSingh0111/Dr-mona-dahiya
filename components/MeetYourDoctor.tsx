"use client";

import Image from "next/image";
import {
  FaCheck,
  FaArrowRight,
  FaYoutube,
  FaStethoscope,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "./Reveal";

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M2.5 9.5 12 4.5l9.5 5L12 14.5 2.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 12v4.2c0 .9 2.5 2.6 5.5 2.6s5.5-1.7 5.5-2.6V12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M19.2 10.2v5.4c0 .7.5 1.5 1.6 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DoctorCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle
        cx="12"
        cy="9"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 20.2c.8-3.4 3.2-5.2 6.5-5.2s5.7 1.8 6.5 5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.2 6.2c.6-1.6 2-2.6 3.8-2.6s3.2 1 3.8 2.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7.5 6.8h9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HospitalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 20.5V7.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 20.5h17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 6.5V3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 5h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9 11h2.2M10.1 9.9v2.2M14.2 11h2.2M15.3 9.9v2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.5 20.5v-3.2h5v3.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="4.5"
        y="3.5"
        width="15"
        height="17"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 8h8M8 11.5h8M8 15h4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle
        cx="15.8"
        cy="16.2"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14.7 18.1 14.2 20.4l1.6-.8 1.6.8-.5-2.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AwardRibbonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle
        cx="12"
        cy="9.2"
        r="4.4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="9.2"
        r="1.7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.3 13.2 8 20.2l4-2.1 4 2.1-1.3-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const qualIconMap = {
  pink: {
    Icon: GraduationCapIcon,
    bg: "bg-[#fde8ef]",
    text: "text-[#e11d60]",
  },
  purple: {
    Icon: DoctorCapIcon,
    bg: "bg-[#efe8ff]",
    text: "text-[#7b5bb8]",
  },
  green: {
    Icon: HospitalIcon,
    bg: "bg-[#e4f7f1]",
    text: "text-[#1a9b7a]",
  },
  orange: {
    Icon: CertificateIcon,
    bg: "bg-[#fff0e4]",
    text: "text-[#e8893a]",
  },
  blue: {
    Icon: AwardRibbonIcon,
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
      className="relative overflow-hidden px-3 pt-12 pb-16 sm:px-4 sm:pt-14 sm:pb-20 lg:pr-8 lg:pl-3 xl:pl-4"
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

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.95fr)_minmax(300px,1fr)] lg:gap-5 xl:gap-8">
          <Reveal variant="slideLeft" className="relative z-10 max-w-xl lg:max-w-none">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f9c5d4]/60 bg-gradient-to-r from-[#ffe8f0] to-[#fff5f8] px-3.5 py-1.5 text-[12px] font-semibold text-[#e83e74] shadow-[0_4px_14px_rgba(232,62,116,0.08)]">
              <span className="size-1.5 rounded-full bg-gradient-to-br from-[#f4729a] to-[#e83e74]" />
              {data.badge}
            </span>

            <h2 className="font-display mt-5 text-[2.1rem] leading-[1.18] font-bold tracking-[-0.02em] text-[#0f2038] sm:text-[2.5rem] lg:text-[2.75rem]">
              {data.titleLine1}
              <br />
              {data.titleLine2}
              <br />
              <span className="bg-gradient-to-r from-[#e83e74] via-[#f0518e] to-[#c53658] bg-clip-text text-transparent">
                {data.titleAccent}
              </span>
            </h2>

            <p className="mt-4 max-w-[470px] text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
              {data.description}
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ffe8f0] text-[#e83e74]">
                    <FaCheck className="size-2.5" />
                  </span>
                  <span className="text-[13px] leading-snug font-semibold text-[#1e293b] sm:text-[13.5px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#e83e74] via-[#f0518e] to-[#d13266] px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_10px_28px_rgba(232,62,116,0.32)] transition hover:brightness-105"
              >
                {data.primaryCta.label}
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#e83e74]">
                  <FaArrowRight className="size-2.5" />
                </span>
              </a>

              <a
                href={data.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#f5a3bd] bg-gradient-to-r from-white to-[#fff5f8] px-5 py-3 text-[13.5px] font-semibold text-[#e83e74] shadow-[0_6px_18px_rgba(232,62,116,0.08)] transition hover:from-[#fff5f8] hover:to-[#ffe8f0]"
              >
                <FaYoutube className="size-5 text-[#ff0033]" />
                {data.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          <Reveal
            variant="scaleIn"
            className="relative mx-auto flex h-[420px] w-full max-w-[380px] items-end justify-center overflow-visible sm:h-[480px] lg:h-[540px] lg:max-w-none"
          >
            {/* Solid soft pink circle — clearly visible behind cutout */}
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

            {/* Dashed accent arc */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[6%] right-[2%] z-[1] size-[52%] rounded-full border-[2.5px] border-dashed border-[#f18aaa]/80"
              style={{
                clipPath: "polygon(18% 0%, 100% 0%, 100% 62%, 42% 48%)",
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
            className="relative z-10 mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none"
          >
            <article
              className="rounded-[28px] border border-[#f7c9d8]/80 p-6 shadow-[0_20px_48px_rgba(232,62,116,0.12)] sm:p-7 lg:p-8"
              style={{
                background:
                  "linear-gradient(160deg, #fff8fb 0%, #fff0f5 42%, #ffe8f0 100%)",
              }}
            >
              <p className="text-[13px] font-bold tracking-wide text-[#e11d60] sm:text-[14px]">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-2 text-[2.2rem] leading-none font-bold sm:text-[2.45rem]">
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
