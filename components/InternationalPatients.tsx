"use client";

import Image from "next/image";
import { FaVideo, FaPlane } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

function WorldMapArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 520 280"
      className="pointer-events-none absolute top-[8%] right-[-2%] h-[78%] w-[58%] text-[#9ec4ff] opacity-[0.22]"
      fill="currentColor"
    >
      <ellipse cx="120" cy="90" rx="70" ry="42" opacity="0.55" />
      <ellipse cx="210" cy="130" rx="55" ry="36" opacity="0.45" />
      <ellipse cx="300" cy="100" rx="80" ry="48" opacity="0.5" />
      <ellipse cx="400" cy="140" rx="65" ry="40" opacity="0.45" />
      <ellipse cx="160" cy="190" rx="48" ry="30" opacity="0.35" />
      <ellipse cx="340" cy="200" rx="70" ry="32" opacity="0.4" />
      <path
        d="M70 210 C160 150, 250 120, 360 90 S470 50, 500 40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.7"
      />
    </svg>
  );
}

export default function InternationalPatients() {
  const data = siteData.internationalPatients;

  return (
    <section
      id="international"
      className="relative overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative isolate overflow-hidden rounded-[26px] bg-[#0c241f] shadow-xl sm:rounded-[32px]">
          <div className="absolute inset-0">
            <Image
              src={data.image}
              alt="Mother holding baby — international IVF patients"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[75%_center] sm:object-[80%_center] lg:object-[86%_center]"
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(12,36,31,0.98) 0%, rgba(12,36,31,0.95) 32%, rgba(12,36,31,0.85) 46%, rgba(12,36,31,0.48) 60%, rgba(12,36,31,0.12) 74%, transparent 90%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,36,31,0.95) 0%, rgba(12,36,31,0.88) 55%, rgba(12,36,31,0.45) 100%)",
            }}
          />

          <WorldMapArt />

          <FaPlane
            aria-hidden
            className="pointer-events-none absolute top-7 right-10 z-[2] hidden size-5 rotate-[18deg] text-white/55 lg:block"
          />

          <Reveal
            variant="slideLeft"
            className="relative z-10 px-6 py-10 sm:px-9 sm:py-12 lg:max-w-[58%] lg:px-11 lg:py-14 xl:px-12"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#e83e74]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#e83e74] uppercase sm:text-xs">
                {data.badge}
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-[1.75rem] leading-[1.2] font-bold tracking-tight text-white sm:text-[2.25rem] lg:text-[2.55rem]">
              {data.title}
            </h2>

            <p className="mt-3.5 max-w-lg text-[13px] leading-relaxed text-white/80 sm:text-[14.5px]">
              {data.subtitle}
            </p>

            <Stagger
              className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3"
              stagger={0.08}
            >
              {data.features.map((feature) => (
                <StaggerItem key={feature.id} variant="scaleIn">
                  <div className="inline-flex w-fit items-center rounded-full border border-white/40 bg-transparent px-4 py-2">
                    <span className="text-[12px] font-medium whitespace-nowrap text-white sm:text-[13px]">
                      {feature.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0c241f] transition hover:bg-white/90"
              >
                {data.primaryCta.label}
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2563eb] px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#1d4ed8]"
              >
                <FaVideo className="size-3.5" />
                {data.secondaryCta.label}
              </a>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
