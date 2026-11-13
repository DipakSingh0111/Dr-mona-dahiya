"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import { Reveal } from "@/components/ui/Reveal";
import type { LocationPageData } from "@/data/locations";

export default function LocationHero({
  hero,
}: {
  hero: LocationPageData["hero"];
}) {
  return (
    <section
      className="relative overflow-hidden flex flex-col pb-8 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:justify-center lg:py-10"
      style={{ background: "var(--pink)" }}
    >
      <HeroFullWidthBanner src={hero.image} alt={hero.imageAlt} />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative z-10 w-full pt-5 lg:pt-0">
        <div className="lg:max-w-[30rem] xl:max-w-[38rem]">
          <Breadcrumb
            items={[
              hero.breadcrumbParent,
              { label: hero.breadcrumbLabel },
            ]}
          />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              {hero.eyebrow}
            </p>

            <h1 className="font-serif mt-2 text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              {hero.title}
            </h1>

            <p className="mt-4 max-w-[38rem] text-[14px] leading-relaxed text-ink/85 sm:text-[15px]">
              {hero.descriptionPrefix}
              <strong className="font-semibold text-ink">
                {hero.highlightLocation}
              </strong>
              {hero.descriptionSuffix}
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 px-6 py-2.5 text-[13.5px] font-bold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] backdrop-blur-sm transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              {hero.primaryCta.label}
            </a>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {hero.pills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-rose/25 bg-white/80 px-3.5 py-1 text-[12px] font-medium text-ink shadow-xs sm:text-[12.5px]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <HeroMobileBanner src={hero.image} alt={hero.imageAlt} />
      </div>
    </section>
  );
}

