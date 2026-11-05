"use client";

import HeroBannerImage from "@/components/ui/HeroBannerImage";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IntlHero() {
  const badges = [
    "25+ years experience",
    "Medical Visa Assistance",
    "Affordable IVF Treatment",
  ];

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10"
      style={{
        background: "var(--pink)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
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
                <span className="rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                  International IVF Patients in India
                </span>
              </li>
            </ol>
          </nav>

          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Global fertility treatment
          </p>

          <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.85rem] leading-[1.16] font-normal tracking-tight text-ink sm:text-[2.4rem] lg:text-[2.85rem] xl:text-[3.1rem]">
            World-Class IVF Treatment in India for International Patients
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book An Appointment At Clinic
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book Online Consultation
            </Link>
          </div>

          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink/90 transition-colors hover:text-rose-dark sm:text-[13.5px]"
            >
              Read Dr. Mona Dahiya&apos;s Google reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Stagger
            className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
            stagger={0.06}
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11px] font-medium text-ink/90 backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[12px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroBannerImage
          src="/images/international-ivf-patients.jpg"
          alt="Dr. Mona Dahiya — International IVF Patients in India"
          objectPosition="object-center"
        />
      </div>
    </section>
  );
}
