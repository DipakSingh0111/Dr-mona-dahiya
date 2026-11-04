"use client";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

export default function IuiGhaziabadHero() {
  const badges = [
    "Raj Nagar Extension, Ghaziabad",
    "25+ years of experience",
    "No Pain Procedure",
    "Takes only 10 minutes",
    "Online/in-person",
    "Available in Noida and Delhi too",
  ];

  return (
    <section
      className="relative overflow-x-hidden pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-14"
      style={{
        background: "var(--pink)",
      }}
    >
      {/* Decorative ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[320px] w-[320px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[280px] w-[280px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-6 lg:px-8 xl:gap-8">
        {/* Left Column */}
        <div className="min-w-0 lg:col-span-7">
          {/* Breadcrumb */}
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
                <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 sm:text-[13px]">
                  Our Services
                </span>
              </li>
              <li aria-hidden className="text-ink/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li>
                <span className="inline-flex items-center rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                  IUI Doctor in Ghaziabad
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px] lg:text-[13.5px]">
            Fertility specialist in Ghaziabad | Best IUI doctor in Ghaziabad
          </p>

          {/* Headline */}
          <h1 className="font-serif mt-1.5 max-w-[42rem] text-[2.1rem] leading-[1.14] font-normal tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.3rem] xl:text-[3.65rem]">
            IUI Treatment in Ghaziabad
          </h1>

          {/* Subtitle / Paragraph from image */}
          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px] lg:text-[16px]">
            IUI by Dr. Mona Dahiya in Ghaziabad. Dr Mona has over 25 years of experience performing IUI. She will guide you on if you should go for IUI or not and customise your IUI cycles based on your test reports.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#ghaziabad-clinic"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark hover:shadow-[0_6px_20px_rgba(232,62,116,0.45)] sm:px-6 sm:py-3 sm:text-[14px] lg:text-[15px]"
            >
              Book In-Clinic Consultation
            </a>

            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:px-6 sm:py-3 sm:text-[14px] lg:text-[15px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          {/* Google Reviews link */}
          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px] lg:text-[14px]"
            >
              Read Dr. Mona Dahiya&apos;s Google reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Badges */}
          <Stagger className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5 lg:mt-6" stagger={0.06}>
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11px] font-medium text-ink/90 shadow-sm backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[12px] lg:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Doctor Photo in Rounded Card — Standard uniform size */}
        <HeroBannerImage
          src="/images/IUI-treatment.jpg"
          alt="Dr. Mona Dahiya — IUI Treatment in Ghaziabad"
        />
      </div>
    </section>
  );
}
