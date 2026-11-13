"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
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
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{
        background: "var(--pink)",
      }}
    >
      <HeroFullWidthBanner src="/pageBanner/M0500399.JPG" alt="Dr. Mona Dahiya — Oncofertility in Delhi NCR" />
      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb
            items={[
              { label: "Treatments", href: "/our-services" },
              { label: "Oncofertility in Delhi NCR" },
            ]}
          />

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

          <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose sm:px-6 sm:py-3 sm:text-[14px]"
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

        <HeroMobileBanner src="/pageBanner/M0500399.JPG" alt="Dr. Mona Dahiya — Oncofertility in Delhi NCR" />
      </div>
    </section>
      <section className="py-5 sm:py-6">
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
    </>
  );
}
