"use client";

import Link from "next/link";
import { FaCalendarCheck, FaVideo, FaArrowRight } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col pb-8 pt-4 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:justify-center lg:py-10"
      style={{ background: "var(--pink)" }}
    >
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

      <div className="page-container relative z-10 w-full pt-2 lg:pt-0">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact Dr. Mona Dahiya" },
          ]}
        />

        <div className="mt-4 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7">
            <Reveal variant="fadeUp">
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
              <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg sm:leading-relaxed max-w-2xl">
                Direct contact consultation with Dr Mona Dahiya (MBBS & MD Gold
                Medalist, Fellowship Singapore General Hospital). Our clinics at
                Noida, Ghaziabad and Delhi offer hassle-free evaluations to guide
                you through your fertility journey.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <a
                  href="#request-appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(232,62,116,0.28)] transition hover:bg-rose-dark"
                >
                  <FaCalendarCheck className="text-base" />
                  <span>Book In-Clinic Consultation</span>
                </a>

                <Link
                  href="/ivf-consultation-online"
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,71,202,0.25)] transition hover:bg-blue-dark"
                >
                  <FaVideo className="text-base" />
                  <span>Schedule Online Consultation</span>
                </Link>
              </div>

              <div className="mt-5">
                <a
                  href="#patient-reviews"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-rose transition hover:text-rose-dark hover:underline"
                >
                  <span>Read Dr Mona Dahiya&apos;s Reviews</span>
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Doctor Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroBannerImage
              src="/pageBanner/M0500440.JPG"
              alt="Dr. Mona Dahiya - Contact In-Clinic and Online Consultation"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
