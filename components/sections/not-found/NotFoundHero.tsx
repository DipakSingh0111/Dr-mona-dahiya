"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import Link from "next/link";
import { FaHome, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFoundHero() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-slate-50/60 py-10 sm:py-12 lg:py-16">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[420px] w-[650px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,71,202,0.35) 0%, rgba(232,62,116,0.2) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8 flex justify-center"
          items={[
            { label: "Error" },
            { label: "Page Not Found" }
          ]}
        />

        {/* Central 404 Hero Card */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="scaleIn">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-[#fff0f5] px-4 py-1.5 text-[11.5px] font-bold tracking-wider text-rose uppercase shadow-xs sm:text-[12.5px]">
              <span className="size-2 rounded-full bg-rose animate-pulse" />
              Page Not Found • 404 Error
            </div>
          </Reveal>

          {/* Big Stylized 404 Typography */}
          <Reveal variant="fadeUp" delay={0.05}>
            <div className="mt-4 font-display text-[88px] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue via-[var(--rose-dark)] to-[var(--rose)] sm:text-[130px] lg:text-[150px]">
              404
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              We Couldn&apos;t Find The Page You&apos;re Looking For
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[17px]">
              The page you requested may be under development, compliance review, or temporarily relocated. Let us help you find the right fertility information or connect with Dr. Mona Dahiya&apos;s care team.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal variant="fadeUp" delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-[13.5px] font-bold text-white shadow-lg shadow-blue/25 transition-all hover:bg-blue-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <FaHome className="size-4" />
                <span>Back to Home</span>
              </Link>

              <a
                href="tel:+919267982924"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-[13.5px] font-bold text-ink shadow-xs transition-all hover:border-blue hover:text-blue hover:shadow-md hover:-translate-y-0.5"
              >
                <FaPhoneAlt className="size-3.5 text-blue" />
                <span>Call +91 92679 82924</span>
              </a>

              <a
                href="https://wa.me/919267982924?text=Hello%20Dr.%20Mona%20Dahiya%27s%20Team%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 text-[13.5px] font-bold text-ink shadow-md shadow-[#25d366]/25 transition-all hover:bg-[#20ba59] hover:-translate-y-0.5"
              >
                <FaWhatsapp className="size-4" />
                <span>WhatsApp Care Desk</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
