"use client";

import Image from "next/image";
import siteData from "@/data/site.json";
import StatsCards from "./StatsCards";
import { CalendarIcon, PlayIcon } from "./Icons";
import { HeroReveal } from "./Reveal";

export default function HeroSection() {
  const { backgroundImage, eyebrow, title, primaryCta, secondaryCta, stats } =
    siteData.hero;

  return (
    <section className="hero-section relative flex w-full flex-col overflow-hidden bg-[#0047ca]">
      {/* Banner starts below topbar+navbar so Times Network isn't behind nav */}
      <div className="hero-banner-frame absolute inset-x-0 bottom-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Dr. Mona Dahiya receiving Times Network India Health Summit & Awards 2024"
          fill
          priority
          quality={100}
          unoptimized
          className="hero-banner-img object-cover"
          sizes="100vw"
        />
      </div>

      {/* Soft left veil for copy — keeps Times Network logo visible */}
      <div
        aria-hidden
        className="hero-veil pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,40,130,0.88) 0%, rgba(0,50,160,0.55) 48%, rgba(0,55,180,0.18) 100%)",
        }}
      />

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-4 sm:px-6 lg:px-8">
        <div className="hero-copy flex w-full max-w-[520px] flex-col xl:max-w-[560px]">
          <HeroReveal delay={0.05}>
            <p className="hero-eyebrow text-[11px] font-semibold tracking-[0.18em] text-white/90 uppercase sm:text-[12px]">
              {eyebrow}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.12}>
            <h1 className="hero-title font-display font-bold tracking-tight text-white">
              {title}
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <div className="hero-stats w-full max-w-[460px]">
              <StatsCards stats={stats} />
            </div>
          </HeroReveal>

          <HeroReveal delay={0.32}>
            <div className="hero-ctas flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href={primaryCta.href}
                className="hero-cta inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c54866] px-7 text-[13.5px] font-bold text-white whitespace-nowrap shadow-[0_10px_24px_rgba(197,72,102,0.35)] transition-all hover:bg-[#b03a55]"
              >
                <CalendarIcon className="size-4 shrink-0" />
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex items-center justify-center gap-2.5 rounded-full border border-white/55 bg-transparent px-7 text-[13.5px] font-bold text-white whitespace-nowrap transition-all hover:bg-white/10"
              >
                <span className="inline-flex size-5 items-center justify-center rounded-[3px] bg-[#e50914] text-white">
                  <PlayIcon className="size-2.5 fill-white text-white" />
                </span>
                {secondaryCta.label}
              </a>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
