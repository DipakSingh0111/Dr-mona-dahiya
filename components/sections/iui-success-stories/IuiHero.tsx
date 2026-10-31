"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
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
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(147,197,253,0.18) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,20,80,0.2)] backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-[13px]"
                >
                  <FaHome className="size-3 shrink-0 sm:size-3.5" />
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-white/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li>
                <span className="inline-flex items-center rounded-full bg-[#e83e74]/20 px-2.5 py-0.5 text-[12px] font-semibold text-[#f9a8d4] ring-1 ring-[#e83e74]/35 sm:px-3 sm:text-[13px]">
                  IUI Success Stories
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-semibold tracking-wide text-[#f9a8d4] sm:text-[13px]">
              IUI success stories
            </p>
            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
              Real IUI
              <br />
              Success Stories
            </h1>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/80 sm:mt-4 sm:text-[14px]">
              IUI is a simple, minimally invasive treatment that places washed,
              motile sperm directly into the uterus around ovulation. Guided by
              Dr. Mona Dahiya across Noida, Delhi and Ghaziabad, couples have
              conceived with precise ultrasound tracking and careful sperm
              preparation. Read their experiences in their own words.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-[#c53658] px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-[#a82946] active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Book In-Clinic Consultation
              </a>
              <Link
                href="/online-consultation"
                className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-white/25 transition-all hover:bg-[#0037a3] active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-3 sm:mt-4">
              <Link
                href="/about#reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#f9a8d4] transition-colors hover:text-white hover:underline sm:text-[13.5px]"
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
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-2.5 py-1 text-[10.5px] font-medium whitespace-nowrap text-white/90 sm:px-3 sm:py-1.5 sm:text-[12px]">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          variant="slideRight"
          className="relative mx-auto w-full max-w-[280px] justify-self-center sm:max-w-[320px] lg:col-span-5 lg:mx-0 lg:max-w-[360px] lg:justify-self-end xl:max-w-[400px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-70 blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(232,62,116,0.35) 0%, rgba(59,130,246,0.25) 50%, transparent 75%)",
            }}
          />
          <div className="relative aspect-[3/4] max-h-[min(50vh,400px)] overflow-hidden rounded-[22px] border-2 border-white/70 bg-[#06183a] shadow-[0_18px_40px_rgba(0,18,60,0.5)] sm:rounded-[26px] lg:max-h-[min(56vh,440px)]">
            <Image
              src="/images/about/IUI-success.jpg"
              alt="Dr. Mona Dahiya — IUI Success Stories"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 400px"
              className="object-cover object-[center_15%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
