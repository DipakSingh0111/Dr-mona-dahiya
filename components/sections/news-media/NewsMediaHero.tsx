"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function NewsMediaHero() {
  return (
    <section
      className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
      style={{
        background:
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      {/* Radiant ambient glow spots matching Home theme (Rose & Royal Blue) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[10%] h-[480px] w-[480px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.45) 0%, rgba(147,197,253,0.2) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb matching Screenshot */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium sm:mb-8 sm:text-[13px]"
        >
          <Link
            href="/"
            className="text-white/70 transition-colors hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="font-semibold text-white">News &amp; Media</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:gap-12 xl:gap-16">
          {/* Left Column: Content */}
          <Reveal variant="slideLeft" className="w-full">
            {/* Eyebrow */}
            <p className="text-[12.5px] font-semibold tracking-wide text-[#ff8fb3] sm:text-[13.5px]">
              News &amp; media
            </p>

            {/* Title matching Screenshot */}
            <h1 className="font-serif mt-3 text-[2.2rem] leading-[1.15] font-normal tracking-tight text-white sm:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.65rem]">
              Dr. Mona Dahiya in
              <br />
              the News &amp; Media
            </h1>

            {/* Subtitle matching Screenshot */}
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/85 sm:text-[15.5px]">
              Dr. Mona Dahiya&apos;s work in fertility care has been featured across
              leading Indian news, business and health publications, from
              national dailies to specialist health portals. Click any
              publication below to read the full article on the publisher&apos;s
              website, which opens in a new tab.
            </p>

            {/* CTAs matching Screenshot */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:flex-nowrap">
              <Link
                href="/book-a-fertility-appointment"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#c53658] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_28px_rgba(197,54,88,0.38)] transition-all hover:bg-[#a62b48] hover:shadow-lg active:scale-95"
              >
                Book In-Clinic Consultation
              </Link>

              <Link
                href="/book-a-fertility-appointment"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0047ca] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(0,71,202,0.35)] transition-all hover:bg-[#0037a3] hover:shadow-lg active:scale-95"
              >
                Schedule Online Consultation
              </Link>
            </div>

            {/* Reviews Link matching Screenshot */}
            <div className="mt-6">
              <Link
                href="/patient-reviews"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#ff8fb3] transition-colors hover:text-white hover:underline sm:text-[14px]"
              >
                <span>Read Dr. Mona&apos;s Google reviews</span>
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>

          {/* Right Column: Doctor Award Image matching Screenshot */}
          <Reveal variant="slideRight" className="w-full">
            <div className="relative mx-auto w-full max-w-[480px]">
              {/* Backing glow effect */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 -z-10 rounded-[38px] opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,62,116,0.35) 0%, rgba(0,71,202,0.3) 60%, transparent 80%)",
                }}
              />

              {/* Framed Image Container matching screenshot white outline */}
              <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[30px] border-4 border-white shadow-[0_24px_55px_rgba(0,18,60,0.45)] sm:rounded-[34px] sm:border-[5px]">
                <Image
                  src="/images/publications/awards/times-health-award.jpg"
                  alt="Dr. Mona Dahiya receiving Times Network India Health Summit & Awards"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

