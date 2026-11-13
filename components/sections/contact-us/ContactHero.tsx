"use client";

import Link from "next/link";
import { FaCalendarCheck, FaVideo, FaArrowRight } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HeroFullWidthBanner } from "@/components/ui/HeroFullWidthBanner";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      {/* Full-width background doctor banner from pageBanner */}
      <HeroFullWidthBanner
        src="/pageBanner/M0500440.JPG"
        alt="Dr. Mona Dahiya - Contact In-Clinic and Online Consultation"
      />

      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[360px] w-[360px] rounded-full opacity-35 blur-3xl"
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

      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contact Dr. Mona Dahiya" },
            ]}
          />

          <Reveal variant="fadeUp" className="mt-3">
            <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
              Contact Us
            </span>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.2]">
              Contact Dr. Mona Dahiya
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.16}>
            <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base sm:leading-relaxed max-w-xl">
              Direct contact consultation with Dr Mona Dahiya (MBBS &amp; MD Gold
              Medalist, Fellowship Singapore General Hospital). Our clinics at
              Noida, Ghaziabad and Delhi offer hassle-free evaluations to guide
              you through your fertility journey.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.24}>
            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3.5">
              <a
                href="#request-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_24px_rgba(232,62,116,0.28)] transition hover:bg-rose-dark active:scale-95"
              >
                <FaCalendarCheck />
                <span>Book In-Clinic Consultation</span>
              </a>

              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,71,202,0.25)] transition hover:bg-blue-dark active:scale-95"
              >
                <FaVideo />
                <span>Schedule Online Consultation</span>
              </Link>
            </div>

            <div className="mt-4">
              <a
                href="#patient-reviews"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose transition hover:text-rose-dark hover:underline"
              >
                <span>Read Dr Mona Dahiya&apos;s Reviews</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
