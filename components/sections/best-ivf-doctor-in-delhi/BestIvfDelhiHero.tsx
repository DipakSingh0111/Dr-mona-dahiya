"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import HeroBannerImage from "@/components/ui/HeroBannerImage";
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
    <section
      className="relative overflow-hidden pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-9"
      style={{
        background: "var(--pink)",
      }}
    >
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

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-center lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
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
            <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#clinics"
                className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark hover:shadow-[0_6px_20px_rgba(232,62,116,0.45)] sm:text-[14px]"
              >
                Book In-Clinic Consultation
              </Link>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:text-[14px]"
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
            className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5"
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

        <HeroBannerImage
          src="/images/best-ivf-doctor-in-delhi.jpg"
          alt="Dr. Mona Dahiya - Best IVF Doctor in Delhi"
          aspectClassName="aspect-[3/2] bg-white"
          objectPosition="object-center"
        />
      </div>

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
  );
}
