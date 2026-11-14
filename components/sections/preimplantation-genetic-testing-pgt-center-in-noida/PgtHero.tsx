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
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{
        background: "var(--pink)",
      }}
    >
      <HeroFullWidthBanner
        src="/pageBanner/M0500397.JPG"
        alt="Dr. Mona Dahiya - Preimplantation Genetic Testing (PGT) Specialist"
        objectPosition="object-[72%_35%] md:object-[72%_32%] lg:object-[82%_58%] xl:object-[80%_58%] 2xl:object-[76%_54%]"
      />
      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[34rem] xl:max-w-[40rem] 2xl:max-w-[45rem]">
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
            Preimplantation Genetic Testing (PGT){" "}
            <br className="hidden sm:inline" />
            in Noida, Ghaziabad &amp; Delhi
          </h1>

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
            Preimplantation Genetic Testing or PGT helps check if blastocyst
            formed on day 5 or 6 is genetically and chromosomally healthy. It is
            usually done in cases of repeated failure of embryo implantation,
            miscarriages or if the couple is of older age. By doing PGT we can
            transfer only good quality embryos and reduce the chances of
            miscarriages drastically.
          </p>

          <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book an Appointment at the clinic
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(6,21,50,0.35)] transition-all hover:bg-navy-mid sm:px-6 sm:py-3 sm:text-[14px]"
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

        <HeroMobileBanner src="/pageBanner/M0500397.JPG" alt="Dr. Mona Dahiya - Preimplantation Genetic Testing (PGT) Specialist" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
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
