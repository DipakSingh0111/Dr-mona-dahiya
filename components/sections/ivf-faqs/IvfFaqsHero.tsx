"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";

import Link from "next/link";

import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function IvfFaqsHero({
  breadcrumbLabel = "IVF FAQs",
}: {
  breadcrumbLabel?: string;
} = {}) {
  const data = siteData.ivfFaqsPage;

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
        style={{
          background: "var(--pink)",
        }}
      >
      <HeroFullWidthBanner src={data.image} alt="Dr. Mona Dahiya — IVF FAQs" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[8%] h-[320px] w-[320px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
          }}
        />

        <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
          <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
            <Breadcrumb
              items={[
                { label: "Patient Resources", href: "/ivf-faqs" },
                { label: breadcrumbLabel },
              ]}
            />

            <Reveal variant="slideLeft">
              <p className="text-[12px] font-semibold tracking-wide text-ink/75 sm:text-[13px]">
                {data.eyebrow}
              </p>
              <h1 className="font-serif mt-1 max-w-[34rem] text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
                {data.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
                <Link
                  href={data.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
                >
                  {data.primaryCta.label}
                </Link>
                <Link
                  href={data.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-blue px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
                >
                  {data.secondaryCta.label}
                </Link>
              </div>

              <div className="mt-3 sm:mt-4">
                <Link
                  href={data.reviewsLink.href}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
                >
                  {data.reviewsLink.label}
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="mt-4 mb-2 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
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

          <HeroMobileBanner src={data.image} alt="Dr. Mona Dahiya — IVF FAQs" />
        </div>
      </section>

      <section className="py-5 sm:py-6">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
              { target: 25000, suffix: "+", label: "families treated" },
              { target: 25, suffix: "+", label: "years’ expertise" },
              { target: 90, suffix: "%+", label: "IVF success rates" },
              { target: 15000, suffix: "+", label: "IVF cycles" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
