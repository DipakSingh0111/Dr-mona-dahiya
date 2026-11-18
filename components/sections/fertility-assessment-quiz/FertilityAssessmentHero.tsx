"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function FertilityAssessmentHero() {
  const badges = [
    "Test takes 2 minutes",
    "Assessment for female and male",
    "Score on scale of 10",
    "No cost, confidential test",
  ];

  return (
    <>
      <section
        className="relative flex flex-col justify-center overflow-hidden pb-6 sm:pb-8 lg:pb-0"
        style={{ background: "var(--pink)" }}
      >
        <HeroFullWidthBanner
          src="/pageBanner/M0500422.jpg"
          alt="Dr. Mona Dahiya - Fertility Assessment: Your 10-Point Fertility Score in 2 Minutes"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(232,62,116,0.32) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
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
            <Breadcrumb items={[{ label: "Fertility Assessment Quiz" }]} />

            <Reveal variant="slideLeft">
              <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
                Free Fertility Test
              </p>

              <h1 className="font-serif mt-2.5 max-w-[48rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
                Fertility Assessment: Your 10-Point Fertility Score in 2 Minutes
              </h1>

              <p className="mt-5 sm:mt-6.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[15px]">
                Take our simple 5 question fertility test that takes only 2
                minutes. This assessment was created by Dr. Mona Dahiya, using
                aspects of FertiSTAT and Cardiff Fertility Tool. You will be
                scored from 0 to 10 on age, time taken to become pregnant and
                some risk factors. You will also be given your next step.
              </p>
            </Reveal>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              <a
                href="#fertility-quiz"
                className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.3)] transition-all hover:bg-rose-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
              >
                Take Fertility Test
              </a>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.28)] transition-all hover:bg-blue-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
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

          <HeroMobileBanner
            src="/pageBanner/M0500422.jpg"
            alt="Dr. Mona Dahiya - Fertility Assessment: Your 10-Point Fertility Score in 2 Minutes"
          />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#fde2ec]/70 bg-white py-7 sm:py-9">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
              {
                target: 25000,
                suffix: "+",
                label: "families treated",
              },
              {
                target: 25,
                suffix: "+",
                label: "years' expertise",
              },
              {
                target: 2,
                suffix: " min",
                label: "5-question assessment",
              },
              {
                target: 15000,
                suffix: "+",
                label: "IVF cycles",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
