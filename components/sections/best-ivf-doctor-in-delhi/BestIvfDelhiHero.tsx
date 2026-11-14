"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function BestIvfDelhiHero() {
  const badges = [
    "25+ years' experience",
    "25000+ Happy Families",
    "90%+ IVF Success Rates",
    "Online/Physical consultation",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{
        background: "var(--pink)",
      }}
    >
      <HeroFullWidthBanner
        src="/pageBanner/M0500418.JPG"
        alt="Dr. Mona Dahiya - Best IVF Doctor in Delhi"
        objectPosition="object-[72%_25%] md:object-[72%_22%] lg:object-[82%_50%] xl:object-[80%_50%] 2xl:object-[76%_48%]"
      />
      {/* Decorative Radial Glow matching theme */}
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
            { label: "Treatments", href: "/our-services" },
            { label: "IVF Doctor in Delhi" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose sm:text-[13px]">
              IVF ICSI &amp; other fertility treatments in Delhi
            </p>

            <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Best IVF Doctor in Delhi: Dr. Mona Dahiya
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              IVF specialist in Delhi with 25+ yrs experience. Gold Medalist MBBS &amp; MD. DNB and Fellowship from Singapore General Hospital in IVF. IVF, ICSI, IUI &amp; fertility preservation services available at our Delhi IVF clinic with customized plans. She has IVF success rates of 90%+.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
              <Link
                href="#clinics"
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose hover:shadow-[0_8px_22px_rgba(232,62,116,0.14)] sm:text-[14px]"
              >
                Book In-Clinic Consultation
              </Link>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(6,21,50,0.35)] transition-all hover:bg-navy-mid hover:shadow-[0_6px_20px_rgba(6,21,50,0.45)] sm:text-[14px]"
              >
                Schedule Online Consultation
              </Link>
            </div>
          </Reveal>

          <Link
            href="#reviews"
            className="mt-4 inline-block text-[12.5px] font-medium text-rose underline decoration-rose/40 underline-offset-4 transition-colors hover:text-rose-dark sm:text-[13.5px]"
          >
            Read Dr. Mona Dahiya&apos;s Google reviews →
          </Link>

          <Stagger
            delay={0.05}
            className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2"
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11.5px] font-medium text-ink shadow-sm backdrop-blur-md sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500363.JPG" alt="Dr. Mona Dahiya - Best IVF Doctor in Delhi" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "Happy Families" },
            { target: 25, suffix: "+", label: "years Experience" },
            { target: 90, suffix: "%+", label: "IVF success rates" },
            { target: 15000, suffix: "+", label: "IVF Cycles" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
