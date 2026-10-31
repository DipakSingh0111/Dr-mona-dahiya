"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IVFSuccessStoriesHero() {
  const badges = [
    "15,000+ IVF/ICSI cycles",
    "Single blastocyst transfer",
    "Stories in patients' own words",
  ];

  return (
    <section
      className="relative overflow-hidden pt-6 pb-7 sm:pt-7 sm:pb-8 lg:pt-8 lg:pb-9"
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
          className="mb-5 flex items-center gap-2 text-xs font-medium sm:mb-6 sm:text-[13px]"
        >
          <Link
            href="/"
            className="text-white/70 transition-colors hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="font-semibold text-white">IVF Success Stories</span>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7">
            <Reveal variant="slideLeft">
              {/* Eyebrow */}
              <span className="text-[12.5px] font-bold tracking-[0.12em] text-[#ff8fb3] uppercase sm:text-[13px]">
                IVF success stories
              </span>

              {/* Title */}
              <h1 className="font-serif mt-2 text-[2.4rem] leading-[1.12] font-normal tracking-tight text-white sm:text-[3rem] lg:text-[3.35rem]">
                Real IVF
                <br />
                Success Stories
              </h1>

              {/* Subtitle matching Screenshot */}
              <p className="mt-4 text-[13.5px] leading-relaxed text-slate-200 sm:text-[14.5px] lg:text-[15px]">
                IVF succeeds when the protocol targets the real cause. Guided by Dr. Mona Dahiya across Noida, Delhi and Ghaziabad, couples have overcome blocked tubes, male factor infertility and repeated failed cycles with blastocyst culture, PGT-A testing and tailored lining preparation. Read their experiences in their own words.
              </p>

              {/* CTA Buttons matching theme */}
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-3.5">
                <a
                  href="#book-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-[#c53658] px-6 py-3 text-[13px] font-semibold text-white shadow-md shadow-[#c53658]/30 transition-all duration-200 hover:bg-[#a82946] active:scale-95 sm:text-[14px]"
                >
                  Book In-Clinic Consultation
                </a>

                <Link
                  href="/online-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-6 py-3 text-[13px] font-semibold text-white shadow-md ring-1 ring-white/25 transition-all duration-200 hover:bg-[#0037a3] active:scale-95 sm:text-[14px]"
                >
                  Schedule Online Consultation
                </Link>
              </div>

              {/* Reviews Link matching Screenshot */}
              <div className="mt-5">
                <Link
                  href="/about#reviews"
                  className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white/90 transition-colors hover:text-[#ff8fb3]"
                >
                  <span>Read Dr. Mona&apos;s Google reviews</span>
                  <FaArrowRight className="size-3 text-[#ff8fb3] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Badges Pill Row matching Screenshot */}
              <Stagger className="mt-7 flex flex-wrap items-center gap-2 sm:gap-2.5" stagger={0.06}>
                {badges.map((badge) => (
                  <StaggerItem key={badge}>
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold whitespace-nowrap text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15 sm:text-[12px]">
                      {badge}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>

          {/* Right Column: Doctor Portrait matching Screenshot */}
          <div className="lg:col-span-5">
            <Reveal variant="scaleIn" delay={0.1}>
              <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-[26px] border-2 border-white/20 bg-[#0a204e] p-2 shadow-2xl ring-1 ring-white/15">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-slate-900 sm:aspect-[1.25/1]">
                  <Image
                    src="/images/about/IVF-sucess-stories.jpg"
                    alt="Dr. Mona Dahiya - IVF Success Stories"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

