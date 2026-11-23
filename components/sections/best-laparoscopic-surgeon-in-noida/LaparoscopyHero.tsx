"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar, {
  type HeroCounterItem,
} from "@/components/ui/HeroCounterBar";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const badges = [
  "More than 25 years experience",
  "Keyhole surgeries using instruments ranging from 2.9mm to 5 mm",
  "Appointments available online or in person",
];

const counters: HeroCounterItem[] = [
  { target: 25000, suffix: "+", label: "families helped" },
  { target: 25, suffix: "+", label: "years experience" },
  {
    target: 12,
    displayText: "6–12 hrs",
    label: "to be discharged on day care basis",
  },
  { target: 15000, label: "cycles of IVF completed" },
];

export default function LaparoscopyHero() {
  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      <HeroFullWidthBanner src="/pageBanner/M0500389_1.jpg" alt="Dr. Mona Dahiya - Laparoscopy & Hysteroscopy" />
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
        <div className="lg:max-w-[46rem] xl:max-w-[50rem] 2xl:max-w-[52rem] lg:mt-0">
          <Breadcrumb
            items={[
              { label: "Treatments", href: "/our-services" },
              { label: "Best Laparoscopic Surgeon in Noida" },
            ]}
          />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              Laparoscopy and Operative Hysteroscopy to Improve Chances of
              Pregnancy
            </p>

            <h1 className="font-serif mt-2.5 max-w-[48rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Advanced Fertility-Enhancing Laparoscopy &amp; Operative
              Hysteroscopy
            </h1>

            <p className="mt-5 sm:mt-6.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              Laparoscopy and Operative hysteroscopy are the advanced key hole
              surgical techniques where we can identify and repair defects
              present in your pelvic cavity, fallopian tubes and womb. These
              surgeries help to correct anatomical anomalies in order to achieve
              pregnancy in more than 50-60% of our patients under Dr Mona
              Dahiya&apos;s supervision at Noida, Delhi and Ghaziabad.
            </p>
          </Reveal>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-2.5 text-[13.5px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </Link>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.28)] transition-all hover:bg-blue-mid active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          <Link
            href="/best-ivf-patient-reviews"
            className="mt-5 sm:mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-rose transition-colors hover:text-rose-dark sm:text-[14px]"
          >
            Read Dr Mona Dahiya&apos;s Reviews →
          </Link>

          <Stagger
            delay={0.05}
            className="mt-5 sm:mt-6.5 flex flex-wrap items-center gap-1.5 sm:gap-2"
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11.5px] font-medium text-ink shadow-sm sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500389_1.jpg" alt="Dr. Mona Dahiya - Laparoscopy & Hysteroscopy" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar items={counters} />
        </div>
      </section>
    </>
  );
}
