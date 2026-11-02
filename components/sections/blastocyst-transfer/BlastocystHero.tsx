"use client";

import Image from "next/image";
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
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      {/* Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(147,197,253,0.18) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          {/* Breadcrumb: Home / Blastocyst Transfer in Delhi NCR */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,20,80,0.2)] backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-[13px]"
                >
                  <FaHome className="size-3 text-[#f9a8d4]" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-white/40" aria-hidden="true">
                <FaChevronRight className="size-2.5" />
              </li>
              <li className="truncate">
                <span className="rounded-full px-1.5 py-0.5 text-[12px] font-semibold text-[#f9a8d4] sm:text-[13px]">
                  Blastocyst Transfer in Delhi NCR
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="text-[11.5px] font-bold tracking-[0.14em] text-[#f9a8d4] uppercase sm:text-[12.5px]">
            Day 5 / Day 6 embryo transfer
          </p>

          {/* Headline */}
          <h1 className="font-serif mt-1 text-[2.1rem] leading-[1.12] font-normal tracking-tight text-white sm:text-[2.75rem] lg:text-[3.2rem]">
            Advanced Day-5 Blastocyst Transfer in Delhi, Noida &amp; Ghaziabad
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="mt-3.5 max-w-2xl text-[14px] leading-relaxed text-slate-200 sm:text-[15.5px]">
            Blastocyst transfer means growing fertilised embryos in benchtop incubators until Day 5 or 6, when they form an inner cell mass (the future baby) and trophectoderm (the placenta). Supervised by Dr. Mona Dahiya across Delhi NCR, extended culture selects the strongest embryo, with high single-embryo implantation rates.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-xl bg-[#e83e74] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_4px_18px_rgba(232,62,116,0.35)] transition-all hover:bg-[#d42c63] hover:shadow-[0_6px_22px_rgba(232,62,116,0.5)] sm:px-6 sm:py-3 sm:text-[14.5px]"
            >
              Book In-Clinic Consultation
            </a>

            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-xl bg-[#0047ca] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_4px_18px_rgba(0,71,202,0.35)] transition-all hover:bg-[#0038a8] hover:shadow-[0_6px_22px_rgba(0,71,202,0.5)] sm:px-6 sm:py-3 sm:text-[14.5px]"
            >
              Schedule Online Consultation
            </a>
          </div>

          {/* Google Reviews link */}
          <div className="mt-4">
            <Link
              href="#patient-reviews"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-200 transition-colors hover:text-white"
            >
              Read Dr. Mona&apos;s Google reviews →
            </Link>
          </div>

          {/* Badges */}
          <Stagger delay={0.05} className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {badges.map((badge, idx) => (
              <StaggerItem key={idx}>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11.5px] font-medium text-white shadow-sm backdrop-blur-md sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Right Column: Original Doctor in USG Clinic photo */}
        <div className="relative mx-auto w-full max-w-[400px] lg:col-span-5 lg:max-w-[420px] xl:max-w-[440px]">
          <Reveal variant="scaleIn">
            <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/80 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
              <Image
                src="/images/about-mona-dahiya/blastocyst-doctor.jpg"
                alt="Dr. Mona Dahiya - Blastocyst Transfer & Embryology Specialist"
                width={530}
                height={665}
                className="max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] w-full object-cover object-top"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

