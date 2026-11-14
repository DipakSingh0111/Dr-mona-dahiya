"use client";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";

import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PatientReviewsHero() {
  const badges = [
    "Noida, Ghaziabad and Delhi",
    "Reviews in patients' own words",
  ];

  return (
    <>
    <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{
        background:
          "var(--pink)",
      }}
    >
      <HeroFullWidthBanner src="/pageBanner/M0500366.JPG" alt="Dr. Mona Dahiya — IVF Patient Reviews" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb
          items={[
            { label: "Success Stories", href: "/success-stories" },
            { label: "IVF patient reviews" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              Patient reviews | Dr. Mona Dahiya
            </p>
            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
              IVF Patient Reviews
            </h1>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[14px]">
              These are some of our patient reviews. Listed under keywords that
              they commonly talk about. All written by our patients.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Book In-Clinic Consultation
              </a>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-3 sm:mt-4">
              <Link
                href="/about-mona-dahiya#reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
              >
                Read Dr. Mona Dahiya&apos;s Google reviews
                <span aria-hidden>→</span>
              </Link>
            </div>

            <Stagger
              className="mt-4 mb-1 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
              stagger={0.06}
            >
              {badges.map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex items-center rounded-full border border-rose/30 bg-white px-2.5 py-1 text-[10.5px] font-medium whitespace-nowrap text-ink/90 sm:px-3 sm:py-1.5 sm:text-[12px]">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500366.JPG" alt="Dr. Mona Dahiya — IVF Patient Reviews" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
          {
                    "target": 25000,
                    "suffix": "+",
                    "label": "patients treated"
          },
          {
                    "target": 25,
                    "suffix": "+",
                    "label": "years' expertise"
          },
          {
                    "target": 90,
                    "suffix": "%+",
                    "label": "IVF success rate"
          },
          {
                    "target": 15000,
                    "suffix": "+",
                    "label": "IVF cycles"
          }
]}
          />
        </div>
      </section>
    </>
  );
}
