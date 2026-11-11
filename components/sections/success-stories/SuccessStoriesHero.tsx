"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import Link from "next/link";

import HeroBannerImage from "@/components/ui/HeroBannerImage";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function SuccessStoriesHero() {
  const data = siteData.successStoriesPage;

  return (
    <section
      className="relative overflow-x-hidden pt-5 pb-12 sm:pt-6 sm:pb-14 lg:pt-7 lg:pb-16"
      style={{
        background: "var(--pink)",
      }}
    >
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

      <div className="page-container relative grid grid-cols-1 items-start gap-7 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
        <div className="min-w-0 lg:col-span-7">
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

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                {data.primaryCta.label}
              </a>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-blue px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
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

        <HeroBannerImage
          src={data.image}
          alt="Dr. Mona Dahiya — Fertility Success Stories"
          objectPosition="object-top"
        />
      </div>

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
  );
}
