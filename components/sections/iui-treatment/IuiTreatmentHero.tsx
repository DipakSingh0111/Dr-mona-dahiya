"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiTreatmentHero() {
  const badges = [
    "Over 25 years experience",
    "25,000+ happy families",
    "Painless procedure takes 10 minutes",
    "Available online and in-clinic",
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
          src="/pageBanner/M0500387.JPG"
          alt="Dr. Mona Dahiya — IUI Treatment in Delhi, Noida & Ghaziabad"
          objectPosition="object-[72%_20%] md:object-[72%_18%] lg:object-[82%_32%] xl:object-[80%_32%] 2xl:object-[76%_30%]"
        />

        {/* Decorative Radial Glows matching Theme */}
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
            {/* Breadcrumb: Home / IUI Treatment in Delhi NCR */}
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "IUI Treatment in Delhi NCR" },
              ]}
            />

            {/* Eyebrow */}
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px] lg:text-[13.5px]">
              IUI in Delhi NCR
            </p>

            {/* Headline */}
            <h1 className="font-serif mt-1.5 max-w-[42rem] text-[2.1rem] leading-[1.14] font-normal tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.3rem] xl:text-[3.65rem]">
              Intrauterine Insemination (IUI) Treatment in Delhi, Noida &amp; Ghaziabad
            </h1>

            {/* Subtitle / Paragraph from image */}
            <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px] lg:text-[16px]">
              Intrauterine insemination (IUI) is a type of fertility treatment where washed and concentrated sperm with high motility are introduced into the female uterus around the time of ovulation. At our IUI clinics in Delhi, Noida and Ghaziabad, under the supervision of Dr. Mona Dahiya, we achieve above-average clinical pregnancy rates.
            </p>

            {/* Action Buttons */}
            <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose hover:shadow-[0_8px_22px_rgba(232,62,116,0.14)] sm:px-6 sm:py-3 sm:text-[14px] lg:text-[15px]"
              >
                Book In-Clinic Consultation
              </a>

              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:px-6 sm:py-3 sm:text-[14px] lg:text-[15px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            {/* Google Reviews link */}
            <div className="mt-4 sm:mt-5">
              <Link
                href="/best-ivf-patient-reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px] lg:text-[14px]"
              >
                Read Dr Mona Dahiya&apos;s Reviews
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Badges */}
            <Stagger
              className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5 lg:mt-6"
              stagger={0.06}
            >
              {badges.map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11px] font-medium text-ink/90 shadow-sm backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[12px] lg:text-[12.5px]">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <HeroMobileBanner
            src="/pageBanner/M0500387.JPG"
            alt="Dr. Mona Dahiya — IUI Treatment in Delhi, Noida & Ghaziabad"
          />
        </div>
      </section>

      {/* 4 Stat Counter Bar */}
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
              { target: 25000, suffix: "+", label: "Happy families" },
              { target: 25, suffix: "+", label: "Years of experience" },
              { target: 25, suffix: "%+", label: "IUI success rate" },
              { target: 10000, suffix: "+", label: "IUI cycles" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
