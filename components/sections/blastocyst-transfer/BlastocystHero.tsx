"use client";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function BlastocystHero() {
  const badges = [
    "25+ years' experience",
    "Single-embryo transfer",
    "Tri-gas benchtop incubators",
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
      {/* Glows */}
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

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          {/* Breadcrumb: Home / Blastocyst Transfer in Delhi NCR */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 shadow-sm backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:bg-white hover:text-rose sm:text-[13px]"
                >
                  <FaHome className="size-3 text-rose" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-ink/40" aria-hidden="true">
                <FaChevronRight className="size-2.5" />
              </li>
              <li className="truncate">
                <span className="rounded-full px-1.5 py-0.5 text-[12px] font-semibold text-rose sm:text-[13px]">
                  Blastocyst Transfer in Delhi NCR
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="text-[11.5px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[12.5px]">
            Day 5 / Day 6 embryo transfer
          </p>

          {/* Headline */}
          <h1 className="font-serif mt-1 text-[2.1rem] leading-[1.12] font-normal tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.2rem]">
            Advanced Day-5 Blastocyst Transfer in Delhi, Noida &amp; Ghaziabad
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="mt-3.5 max-w-2xl text-[14px] leading-relaxed text-ink/75 sm:text-[15.5px]">
            Blastocyst transfer means growing fertilised embryos in benchtop incubators until Day 5 or 6, when they form an inner cell mass (the future baby) and trophectoderm (the placenta). Supervised by Dr. Mona Dahiya across Delhi NCR, extended culture selects the strongest embryo, with high single-embryo implantation rates.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-xl bg-rose px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_4px_18px_rgba(232,62,116,0.35)] transition-all hover:bg-[#d42c63] hover:shadow-[0_6px_22px_rgba(232,62,116,0.5)] sm:px-6 sm:py-3 sm:text-[14.5px]"
            >
              Book In-Clinic Consultation
            </a>

            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-xl bg-blue px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_4px_18px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_22px_rgba(0,71,202,0.5)] sm:px-6 sm:py-3 sm:text-[14.5px]"
            >
              Schedule Online Consultation
            </a>
          </div>

          {/* Google Reviews link */}
          <div className="mt-4">
            <Link
              href="#patient-reviews"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-rose transition-colors hover:text-rose-dark"
            >
              Read Dr. Mona&apos;s Google reviews →
            </Link>
          </div>

          {/* Badges */}
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
          src="/images/about-mona-dahiya/pgt-doctor.jpg"
          alt="Dr. Mona Dahiya - Blastocyst Transfer & Embryology Specialist"
        />
      </div>
    </section>
  );
}

