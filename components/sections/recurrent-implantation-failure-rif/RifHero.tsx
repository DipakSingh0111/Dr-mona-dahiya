"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function RifHero() {
  const badges = [
    "Recurrent implantation failure Delhi",
    "Failed IVF second opinion Noida",
    "Repeated embryo transfer failure Ghaziabad",
    "Failed IVF second opinion",
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

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          {/* Breadcrumb: Home / Our Services / Recurrent Implantation Failure (RIF) */}
          <Breadcrumb
          items={[
            { label: "Conditions Treated", href: "/female-infertility-treatment" },
            { label: "Recurrent Implantation Failure (RIF)" }
          ]}
        />

          {/* Eyebrow: A structured second look after failed transfers */}
          <p className="text-[11.5px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[12.5px]">
            A structured second look after failed transfers
          </p>

          {/* Title: Recurrent Implantation Failure (RIF) Treatment in Delhi, Noida & Ghaziabad */}
          <h1 className="font-serif mt-1 text-[2.1rem] leading-[1.12] font-normal tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.2rem]">
            Recurrent Implantation Failure (RIF) Treatment in Delhi, Noida &amp; Ghaziabad
          </h1>

          {/* Action Buttons: Book In-Clinic Consultation | Schedule Online Consultation */}
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

          {/* Badges: exactly 4 items from screenshot */}
          <Stagger delay={0.05} className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
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
          src="/images/about-mona-dahiya/rif-doctor.jpg"
          alt="Dr. Mona Dahiya - Recurrent Implantation Failure Specialist"
        />
      </div>
    </section>
  );
}

