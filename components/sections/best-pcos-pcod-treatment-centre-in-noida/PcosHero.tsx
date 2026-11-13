"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PcosHero() {
  const badges = [
    "25+ Years of Experience",
    "Ovulation Induction / Antagonist IVF Protocol",
    "Noida / Ghaziabad / Delhi",
    "Online / Clinic Visit",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      <HeroFullWidthBanner src="/pageBanner/M0500371.JPG" alt="Dr. Mona Dahiya - PCOS & PCOD Specialist" />
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
            { label: "Conditions Treated", href: "/female-infertility-treatment" },
            { label: "PCOS & PCOD Management" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              PCOS / PCOD Fertility Care
            </p>

            <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Comprehensive PCOS/PCOD Fertility Treatment
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              PCOS &amp; PCOD is an endocrine metabolic disorder. Irregular
              ovulation, high levels of androgens and insulin resistance. Dr
              Mona Dahiya in Noida, Delhi &amp; Ghaziabad will help you achieve
              successful pregnancies upto 90% with customised ovulation
              induction and antagonist ivf protocol to avoid OHSS.
            </p>
          </Reveal>

          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3.5">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-6 py-2.5 text-[13.5px] font-bold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book Appointments
            </a>
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Appointment
            </a>
          </div>

          <Link
            href="/best-ivf-patient-reviews"
            className="mt-2.5 inline-flex items-center gap-1.5 sm:mt-3 text-[13.5px] font-medium text-rose transition-colors hover:text-rose-dark sm:text-[14px]"
          >
            Read Dr Mona Dahiya&apos;s Reviews →
          </Link>

          <Stagger
            delay={0.05}
            className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2"
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

        <HeroMobileBanner src="/pageBanner/M0500371.JPG" alt="Dr. Mona Dahiya - PCOS & PCOD Specialist" />
      </div>
    </section>
      <section className="py-5 sm:py-6">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "Happy families treated" },
            { target: 25, suffix: "+", label: "Years of experience" },
            {
              target: 4.9,
              decimals: 1,
              suffix: "★",
              label: "Rated on Google",
            },
            { target: 15000, suffix: "+", label: "IVF cycles done" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
