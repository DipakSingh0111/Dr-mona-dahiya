"use client";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function NewsMediaHero() {
  return (
    <section
      className="relative overflow-x-hidden pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-14"
      style={{
        background:
          "var(--pink)",
      }}
    >
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

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
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
                  News &amp; Media
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              News &amp; media
            </p>

            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
              Dr. Mona Dahiya in
              <br />
              the News &amp; Media
            </h1>

            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[14px]">
              Dr. Mona Dahiya&apos;s work in fertility care has been featured
              across leading Indian news, business and health publications, from
              national dailies to specialist health portals. Click any
              publication below to read the full article on the publisher&apos;s
              website, which opens in a new tab.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
              <Link
                href="/about-mona-dahiya#book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-rose px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-rose-dark active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Book In-Clinic Consultation
              </Link>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-3 mb-1 sm:mt-4">
              <Link
                href="/about-mona-dahiya#reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
              >
                <span>Read Dr. Mona&apos;s Google reviews</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <HeroBannerImage
          src="/images/best-ivf-doctor-in-noida.jpg"
          alt="Dr. Mona Dahiya receiving Times Network India Health Summit & Awards"
        />
      </div>
    </section>
  );
}
