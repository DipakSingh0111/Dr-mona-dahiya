"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function OncofertilityHero() {
  const badges = [
    "Over 25 years of experience",
    "We can get started in 24–48 hours",
    "Coordinating with your oncologist",
    "Online and in person",
  ];

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10"
      style={{
        background: "var(--pink)",
      }}
    >
      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <Breadcrumb items={[{ label: "Oncofertility in Delhi NCR" }]} />

          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Cancer fertility preservation
          </p>

          <h1 className="font-serif mt-1.5 max-w-[42rem] text-[1.65rem] leading-[1.16] font-normal tracking-tight text-ink sm:text-[2.15rem] lg:text-[2.45rem] xl:text-[2.65rem]">
            Oncofertility: To Preserve Fertility Before Cancer Treatments
          </h1>

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[15px]">
            With oncofertility we help you preserve your fertility if you have
            to undergo chemotherapy, radiation therapy in the pelvic area or
            surgery for cancer. At Dr. Mona Dahiya&apos;s clinic we can help you
            get started in 24 to 48 hours.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              In-Clinic Appointment
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Schedule Appointment Online
            </Link>
          </div>

          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink transition-colors hover:text-rose sm:text-[13.5px]"
            >
              Read Dr Mona Dahiya&apos;s Reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Stagger
            className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
            stagger={0.06}
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/35 bg-white/80 px-4 py-1.5 text-[11.5px] font-semibold text-ink sm:px-5 sm:py-2 sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroBannerImage
          src="/images/about-us-egg-freezing.jpg"
          alt="Dr. Mona Dahiya — Oncofertility in Delhi NCR"
        />
      </div>

      <div className="page-container relative">
        <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "families treated" },
            { target: 25, suffix: "+", label: "years of experience" },
            {
              target: 48,
              displayText: "24–48 hrs",
              label: "to get started",
            },
            { target: 15000, suffix: "+", label: "IVF cycles" },
          ]}
        />
      </div>
    </section>
  );
}
