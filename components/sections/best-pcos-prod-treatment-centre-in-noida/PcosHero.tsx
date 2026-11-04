"use client";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PcosHero() {
  const badges = [
    "25+ years' experience",
    "OHSS-safe protocols",
    "Noida · Ghaziabad · Delhi",
    "Online or in person",
  ];

  return (
    <section
      className="relative overflow-hidden pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-9"
      style={{
        background:
          "var(--pink)",
      }}
    >
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

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-6 lg:px-8 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          {/* Breadcrumb matching exact design */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 shadow-sm backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:bg-white hover:text-rose sm:text-[13px]"
                >
                  <FaHome className="size-3 shrink-0 sm:size-3.5" />
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-ink/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li>
                <span className="inline-flex items-center rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                  PCOS PCOD Treatment in Noida
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              PCOS and PCOD fertility care
            </p>

            <h1 className="font-serif mt-1.5 max-w-[38rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.6rem]">
              Comprehensive
              <br />
              PCOS/PCOD Fertility
              <br />
              Treatment &amp; OHSS-
              <br />
              Free IVF Protocols
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              Polycystic ovary syndrome (PCOS) and PCOD are hormonal and metabolic conditions marked by irregular ovulation, raised androgens and insulin resistance. Directed by Dr. Mona Dahiya across Noida, Delhi and Ghaziabad, tailored ovulation induction and antagonist IVF protocols achieve pregnancy rates of 65% to 70% while preventing OHSS.
            </p>
          </Reveal>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose to-[#f43f5e] px-6 py-2.5 text-[13.5px] font-bold text-ink shadow-[0_8px_20px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </a>
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </a>
          </div>

          {/* Google Reviews link */}
          <div className="mt-4">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-rose transition-colors hover:text-rose-dark"
            >
              Read Dr. Mona&apos;s Google reviews →
            </Link>
          </div>

          {/* Badges / Chips */}
          <Stagger delay={0.05} className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {badges.map((badge, idx) => (
              <StaggerItem key={idx}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11.5px] font-medium text-ink shadow-sm backdrop-blur-md sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroBannerImage
          src="/images/about-mona-dahiya/pcos-doctor.jpg"
          alt="Dr. Mona Dahiya - PCOS & PCOD Specialist"
        />
      </div>
    </section>
  );
}

