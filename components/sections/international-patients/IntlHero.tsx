"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IntlHero() {
  const badges = [
    "25+ years experience",
    "Medical Visa Assistance",
    "Affordable IVF Treatment",
  ];

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10"
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

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 xl:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
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
              <li className="truncate">
                <span className="rounded-full bg-[#e83e74]/20 px-2.5 py-0.5 text-[12px] font-semibold text-[#f9a8d4] ring-1 ring-[#e83e74]/35 sm:px-3 sm:text-[13px]">
                  International IVF Patients in India
                </span>
              </li>
            </ol>
          </nav>

          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            Global fertility treatment
          </p>

          <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.85rem] leading-[1.16] font-normal tracking-tight text-white sm:text-[2.4rem] lg:text-[2.85rem] xl:text-[3.1rem]">
            World-Class IVF Treatment in India for International Patients
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e83e74] to-[#f43f5e] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book An Appointment At Clinic
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-[#0037a3] sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book Online Consultation
            </Link>
          </div>

          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/90 transition-colors hover:text-white sm:text-[13.5px]"
            >
              Read Dr. Mona Dahiya&apos;s Google reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Stagger
            className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
            stagger={0.06}
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[12px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal
          delay={0.1}
          variant="slideRight"
          className="relative mx-auto w-full max-w-[280px] justify-self-center sm:max-w-[320px] lg:col-span-5 lg:mx-0 lg:max-w-[380px] lg:justify-self-end xl:max-w-[430px]"
        >
          <div className="relative aspect-[3/4] max-h-[min(50vh,400px)] overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(0,18,60,0.5)] sm:rounded-[28px] lg:max-h-[min(65vh,480px)] xl:max-h-[min(70vh,540px)]">
            <Image
              src="/images/about-mona-dahiya/book-a-appointment.jpg"
              alt="Dr. Mona Dahiya — International IVF Patients in India"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 420px"
              className="object-cover object-[center_20%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
