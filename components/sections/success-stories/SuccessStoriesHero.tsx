"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import Link from "next/link";

import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function SuccessStoriesHero() {
  const data = siteData.successStoriesPage;

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{
        background: "var(--pink)",
      }}
    >
      <HeroFullWidthBanner src={data.image} alt="Dr. Mona Dahiya — Fertility Success Stories" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[320px] w-[320px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[280px] w-[280px] rounded-full opacity-25 blur-3xl"
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
            { label: "All Success Stories" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12.5px] font-semibold tracking-wide text-rose sm:text-[13.5px]">
              {data.eyebrow}
            </p>
            <h1 className="font-serif mt-1.5 max-w-[36rem] text-[1.85rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.55rem] xl:text-[2.85rem]">
              {data.title}
            </h1>
            <p className="mt-3.5 max-w-xl text-[13.5px] leading-relaxed text-ink/80 sm:mt-4 sm:text-[14.5px]">
              {data.subtitle}
            </p>

            <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                {data.primaryCta.label}
              </a>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-navy/20 transition-all hover:bg-navy-mid active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                {data.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-4">
              <Link
                href={data.reviewsLink.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/90 underline underline-offset-4 transition-colors hover:text-rose sm:text-[14px]"
              >
                <span>{data.reviewsLink.label}</span>
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-5 mb-1 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-2.5">
              {data.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-rose/30 bg-white px-2.5 py-1 text-[10.5px] font-medium whitespace-nowrap text-ink/90 sm:px-3 sm:py-1.5 sm:text-[12px]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <HeroMobileBanner src={data.image} alt="Dr. Mona Dahiya — Fertility Success Stories" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            {
              target: 25000,
              suffix: "+",
              label: "More than 25,000 patients treated",
            },
            {
              target: 25,
              suffix: "+",
              label: "Years Experienced Fertility Expert",
            },
            {
              target: 90,
              suffix: "%+",
              label: "Success Rate over 90% in IVF",
            },
            { target: 15000, suffix: "+", label: "IVF Cycles Completed" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
