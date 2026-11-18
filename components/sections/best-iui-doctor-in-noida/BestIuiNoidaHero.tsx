"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function BestIuiNoidaHero() {
  const badges = [
    "Noida Sector 49",
    "25+ years of experience",
    "Also visits Delhi & Ghaziabad",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
        style={{ background: "var(--pink)" }}
      >
        <HeroFullWidthBanner
          src="/pageBanner/M0500480.jpg"
          alt="Dr. Mona Dahiya — Best IUI Doctor in Noida"
        />

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
                { label: "Our Services", href: "/our-services" },
                { label: "IUI doctor in Noida" },
              ]}
            />

            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              Fertility Doctor in Noida | Best IUI Doctor in Noida
            </p>

            <h1 className="font-serif mt-2.5 max-w-[48rem] text-[1.85rem] leading-[1.15] font-normal tracking-tight text-ink sm:text-[2.45rem] lg:text-[2.75rem] xl:text-[3rem]">
              IUI Treatment in Noida
            </h1>

            <p className="mt-5 sm:mt-6 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              Dr. Mona Dahiya has over 25 years&apos; experience in performing
              IUI in Noida. We will help you understand the IUI procedure and
              decide if it&apos;s the right option for you. Dr. Mona Dahiya
              designs a treatment plan for every IUI cycle for all her patients.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark sm:px-6 sm:py-3 sm:text-[14px]"
              >
                Book An Appointment At Clinic
              </a>

              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.28)] transition-all hover:bg-blue-dark sm:px-6 sm:py-3 sm:text-[14px]"
              >
                Online Consultation
              </Link>
            </div>

            <div className="mt-5 sm:mt-6">
              <Link
                href="/best-ivf-patient-reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
              >
                Read Dr. Mona Dahiya&apos;s Google reviews
                <span aria-hidden>→</span>
              </Link>
            </div>

            <Stagger
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5"
              stagger={0.06}
            >
              {badges.map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11px] font-medium text-ink/90 shadow-sm sm:px-3.5 sm:py-1.5 sm:text-[12px]">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <HeroMobileBanner
            src="/pageBanner/M0500480.jpg"
            alt="Dr. Mona Dahiya — Best IUI Doctor in Noida"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
              { target: 25, suffix: "+", label: "years of experience" },
              { target: 10000, suffix: "+", label: "IUI cycles done" },
              { target: 50, suffix: "%+", label: "success rate" },
              { target: 4.9, decimals: 1, suffix: "★", label: "rated on Google" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
