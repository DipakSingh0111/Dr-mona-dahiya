"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import Link from "next/link";

import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export default function IVFSuccessStoriesHero() {
  const data = siteData.ivfStoriesPage;

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{
        background: "var(--pink)",
      }}
    >
      <HeroFullWidthBanner src={data.image} alt="Dr. Mona Dahiya - IVF Success Stories" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb
          items={[
            { label: "Success Stories", href: "/success-stories" },
            { label: "IVF Success Stories" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              {data.eyebrow}
            </p>

            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.75rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem] xl:text-[2.75rem]">
              {data.title}
            </h1>

            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[14px]">
              {data.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-6 sm:py-3 sm:text-[14px]"
              >
                {data.primaryCta.label}
              </a>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-6 sm:py-3 sm:text-[14px]"
              >
                {data.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-3 sm:mt-4">
              <Link
                href={data.reviewsLink.href}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose-dark hover:underline sm:text-[13.5px]"
              >
                {data.reviewsLink.label}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <Stagger
              className="mt-4 mb-1 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
              stagger={0.06}
            >
              {data.badges.map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex items-center rounded-full border border-rose/30 bg-white px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-ink/90 sm:px-3.5 sm:py-2 sm:text-[12px]">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>

        <HeroMobileBanner src={data.image} alt="Dr. Mona Dahiya - IVF Success Stories" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "Patients have become parents" },
            { target: 25, suffix: "+", label: "Years Of Experience" },
            { target: 90, suffix: "%+", label: "IVF success rate" },
            { target: 15000, suffix: "+", label: "IVF cycles performed" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
