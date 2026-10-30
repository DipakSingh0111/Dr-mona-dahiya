"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function AboutHero() {
  const badges = [
    "MBBS & MD Gold Medalist",
    "Singapore General Hospital Fellow",
    "25+ years' experience",
    "50+ awards",
  ];

  return (
    <section
      className="relative overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14"
      style={{
        background:
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      {/* Soft radiant ambient glow — Rose / Ice Blue highlights matching Home theme */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[10%] h-[460px] w-[460px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.45) 0%, rgba(147,197,253,0.2) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 68%)",
        }}
      />

      {/* Padding inside max-w — same as Navbar/TopBar so left edges align */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium sm:mb-8 sm:text-[13px]">
          <Link
            href="/"
            className="text-white/70 transition-colors hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white font-semibold">About Dr. Mona Dahiya</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(340px,0.78fr)] lg:gap-12 xl:grid-cols-[minmax(0,1.28fr)_minmax(380px,0.72fr)] xl:gap-16">
          {/* Left Column: Content */}
          <Reveal variant="slideLeft" className="w-full">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] text-[#ff7fa9] uppercase backdrop-blur-md sm:text-xs">
              <span className="size-1.5 rounded-full bg-[#ff7fa9]" />
              About Dr. Mona Dahiya
            </div>

            <h1 className="font-display text-[2.1rem] leading-[1.16] font-bold tracking-tight text-white sm:text-[2.75rem] lg:text-[2.9rem] xl:text-[3.35rem]">
              About Dr. Mona Dahiya:{" "}
              <span className="block bg-gradient-to-r from-white via-[#ffd6e4] to-[#ff9ebd] bg-clip-text text-transparent">
                Medical Excellence in Reproductive Medicine
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/85 sm:text-[15.5px]">
              Dr. Mona Dahiya (MBBS Gold Medalist, MD Gold Medalist, DNB, Singapore
              General Hospital Fellowship) is a senior reproductive endocrinologist
              and fertility specialist with 25+ years of clinical experience.
              Founder Director of her fertility centres, she has guided over
              25,000 families across India and overseas.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:flex-nowrap">
              <a
                href="#book-appointment"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e83e74] via-[#ea4c80] to-[#c53658] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_10px_28px_rgba(232,62,116,0.38)] transition-all hover:brightness-110 active:scale-95 sm:text-[14px]"
              >
                <span>Book In-Clinic Consultation</span>
              </a>

              <a
                href="#online-consultation"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-[#1e40af]/90 px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(30,64,175,0.3)] backdrop-blur-sm transition-all hover:bg-[#1d4ed8] active:scale-95 sm:text-[14px]"
              >
                <span>Schedule Online Consultation</span>
              </a>
            </div>

            {/* Google Reviews link */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-[#f59e0b]">
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
                <FaStar className="size-3.5 fill-current" />
              </div>
              <a
                href="#testimonials"
                className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/90 hover:text-white transition sm:text-[14px]"
              >
                <span>Read Dr. Mona&apos;s Google reviews</span>
                <FaArrowRight className="size-3 text-[#ff7fa9] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Badges Pill Row */}
            <Stagger className="mt-9 flex flex-wrap items-center gap-2.5 sm:gap-3" stagger={0.06}>
              {badges.map((badge) => (
                <StaggerItem key={badge}>
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-semibold whitespace-nowrap text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15 sm:text-[12.5px]">
                    {badge}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* Right Column: Framed Portrait of Dr. Mona Dahiya */}
          <Reveal variant="slideRight" className="relative justify-self-center lg:justify-self-end w-full max-w-[420px]">
            {/* Outer soft glow ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[34px] opacity-70 blur-xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,62,116,0.35) 0%, rgba(59,130,246,0.25) 50%, transparent 75%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[28px] border-2 border-white/70 bg-[#06183a] shadow-[0_24px_55px_rgba(0,18,60,0.55)] sm:rounded-[32px]">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/about/dr-mona-dahiya.jpg"
                  alt="Dr. Mona Dahiya - Senior Reproductive Endocrinologist & IVF Specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>

              {/* Bottom Subtle Overlay Gradient */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,25,61,0.85) 0%, transparent 100%)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

