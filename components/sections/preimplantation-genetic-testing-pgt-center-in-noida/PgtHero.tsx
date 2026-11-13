"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtHero() {
  const badges = [
    "25+ Years Experience",
    "PGT-A, PGT-M, PGT-SR",
    "Genomics by NGS",
  ];

  return (
    <>
      <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10 flex flex-col pb-8 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:justify-center lg:py-10"
      style={{
        background: "var(--pink)",
      }}
    >
      <HeroFullWidthBanner src="/pageBanner/M0500402.JPG" alt="Dr. Mona Dahiya - Preimplantation Genetic Testing (PGT) Specialist" />
      <div className="page-container relative z-10 w-full pt-5 lg:pt-0">
        <div className="lg:max-w-[30rem] xl:max-w-[38rem]">
          <Breadcrumb
          items={[
            { label: "Treatments", href: "/our-services" },
            { label: "Preimplantation Genetic Testing (PGT)" }
          ]}
        />

          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            High Success Rates with Embryo Screening
          </p>

          <h1 className="font-serif mt-1.5 max-w-[42rem] text-[1.65rem] leading-[1.16] font-normal tracking-tight text-ink sm:text-[2.15rem] lg:text-[2.45rem] xl:text-[2.65rem]">
            Preimplantation Genetic Testing (PGT) in Noida, Ghaziabad &amp;
            Delhi
          </h1>

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
            Preimplantation Genetic Testing or PGT helps check if blastocyst
            formed on day 5 or 6 is genetically and chromosomally healthy. It is
            usually done in cases of repeated failure of embryo implantation,
            miscarriages or if the couple is of older age. By doing PGT we can
            transfer only good quality embryos and reduce the chances of
            miscarriages drastically.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book an Appointment at the clinic
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book an Online Appointment
            </Link>
          </div>

          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-rose transition-colors hover:text-rose-dark sm:text-[13.5px]"
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
                <span className="inline-flex items-center rounded-full border border-rose/35 bg-transparent px-4 py-1.5 text-[11.5px] font-semibold text-ink sm:px-5 sm:py-2 sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500402.JPG" alt="Dr. Mona Dahiya - Preimplantation Genetic Testing (PGT) Specialist" />
      </div>
    </section>
      <section className="py-5 sm:py-6">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "Treated over 25000 families" },
            { target: 25, suffix: "+", label: "Years of experience" },
            { target: 90, suffix: "%+", label: "Success rates with IVF" },
            { target: 15000, suffix: "+", label: "Cycles of IVF" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
