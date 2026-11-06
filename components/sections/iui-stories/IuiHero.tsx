"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiHero() {
  const badges = [
    "Ultrasound-timed IUI",
    "Usually 2 to 3 cycles",
    "Stories in patients' own words",
  ];

  return (
    <section
      className="relative overflow-hidden pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-14"
      style={{
        background:
          "var(--pink)",
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

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <Breadcrumb
          items={[
            { label: "Success Stories", href: "/success-stories" },
            { label: "IUI Success Stories" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              IUI success stories
            </p>
            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
              Real IUI
              <br />
              Success Stories
            </h1>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[14px]">
              IUI is a simple, minimally invasive treatment that places washed,
              motile sperm directly into the uterus around ovulation. Guided by
              Dr. Mona Dahiya across Noida, Delhi and Ghaziabad, couples have
              conceived with precise ultrasound tracking and careful sperm
              preparation. Read their experiences in their own words.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-rose px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-rose-dark active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
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
                Read Dr. Mona&apos;s Google reviews
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

        <HeroBannerImage
          src="/images/about-mona-dahiya/IUI-success.jpg"
          alt="Dr. Mona Dahiya — IUI Success Stories"
        />
      </div>
    </section>
  );
}
