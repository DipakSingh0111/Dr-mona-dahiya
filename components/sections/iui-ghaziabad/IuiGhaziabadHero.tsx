"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiGhaziabadHero() {
  const badges = [
    "Raj Nagar Extension, Ghaziabad",
    "25+ years of experience",
    "No Pain Procedure",
    "Takes only 10 minutes",
    "Online/in-person",
    "Available in Noida and Delhi too",
  ];

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10"
      style={{
        background:
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      {/* Decorative Radial Glows matching Theme */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(147,197,253,0.18) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 xl:gap-12">
        <div className="min-w-0 lg:col-span-7">
          {/* Breadcrumb: Home / Our Services / IUI doctor in Ghaziabad */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,20,80,0.2)] backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-[13px]"
                >
                  <FaHome className="size-3 text-[#f9a8d4]" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-white/40" aria-hidden="true">
                <FaChevronRight className="size-2.5" />
              </li>
              <li>
                <Link
                  href="/our-services"
                  className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-[13px]"
                >
                  Our Services
                </Link>
              </li>
              <li className="text-white/40" aria-hidden="true">
                <FaChevronRight className="size-2.5" />
              </li>
              <li className="truncate">
                <span className="rounded-full bg-[#e83e74]/20 px-2.5 py-0.5 text-[12px] font-semibold text-[#f9a8d4] ring-1 ring-[#e83e74]/35 sm:px-3 sm:text-[13px]">
                  IUI doctor in Ghaziabad
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="text-[12px] font-bold tracking-[0.12em] text-[#f9a8d4] uppercase sm:text-[13px] lg:text-[13.5px]">
            Fertility specialist in Ghaziabad | Best IUI doctor in Ghaziabad
          </p>

          {/* Headline */}
          <h1 className="font-serif mt-1.5 max-w-[42rem] text-[2.1rem] leading-[1.14] font-normal tracking-tight text-white sm:text-[2.75rem] lg:text-[3.3rem] xl:text-[3.65rem]">
            IUI Treatment in Ghaziabad
          </h1>

          {/* Subtitle / Paragraph from image */}
          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-slate-100 sm:text-[15px] lg:text-[16px]">
            IUI by Dr. Mona Dahiya in Ghaziabad. Dr Mona has over 25 years of experience performing IUI. She will guide you on if you should go for IUI or not and customise your IUI cycles based on your test reports.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#ghaziabad-clinic"
              className="inline-flex items-center justify-center rounded-full bg-[#c53658] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(197,54,88,0.35)] transition-all hover:bg-[#d82d64] hover:shadow-[0_6px_20px_rgba(197,54,88,0.45)] sm:px-6 sm:py-3 sm:text-[14px] lg:text-[15px]"
            >
              Book In-Clinic Consultation
            </a>

            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-[#0037a3] hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:px-6 sm:py-3 sm:text-[14px] lg:text-[15px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          {/* Google Reviews link */}
          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#f9a8d4] transition-colors hover:text-white hover:underline sm:text-[13.5px] lg:text-[14px]"
            >
              Read Dr. Mona Dahiya&apos;s Google reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Badges */}
          <Stagger className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5 lg:mt-6" stagger={0.06}>
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 shadow-sm backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[12px] lg:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Doctor Photo in Rounded Card */}
        <Reveal
          delay={0.1}
          variant="slideRight"
          className="relative mx-auto w-full max-w-[280px] justify-self-center sm:max-w-[320px] lg:col-span-5 lg:mx-0 lg:max-w-[380px] lg:justify-self-end xl:max-w-[430px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-70 blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(232,62,116,0.35) 0%, rgba(59,130,246,0.25) 50%, transparent 75%)",
            }}
          />
          <div className="relative aspect-[3/4] max-h-[min(50vh,400px)] overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(0,18,60,0.5)] sm:rounded-[28px] lg:max-h-[min(65vh,480px)] xl:max-h-[min(70vh,540px)]">
            <Image
              src="/images/IUI-treatment.jpg"
              alt="Dr. Mona Dahiya — IUI Treatment in Ghaziabad"
              fill
              priority
              sizes="(max-width: 1024px) 320px, (max-width: 1280px) 380px, 440px"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

