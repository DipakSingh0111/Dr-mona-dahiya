"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IcsiHero() {
  const badges = [
    "25+ years' experience",
    "25,000+ families treated",
    "Surgical sperm retrieval",
    "Online or in person",
  ];

  return (
    <section
      className="relative overflow-hidden pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-9"
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
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 68%)",
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
                  ICSI Treatment in Delhi NCR
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#f9a8d4] uppercase sm:text-[13px]">
              ICSI treatment for male-factor infertility
            </p>

            <h1 className="font-serif mt-1.5 max-w-[38rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Advanced
              <br />
              Intracytoplasmic
              <br />
              Sperm Injection
              <br />
              (ICSI) Treatment
              <br />
              in Delhi, Noida
              <br />
              &amp; Ghaziabad
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-slate-100 sm:text-[15px]">
              Intracytoplasmic sperm injection (ICSI) is a micromanipulation procedure in
              which one selected sperm is injected directly into a mature egg. Supervised
              by Dr. Mona Dahiya across Delhi, Noida and Ghaziabad, our high-magnification
              systems overcome severe male-factor barriers, with fertilisation rates of
              90%+.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e83e74] to-[#f43f5e] px-6 py-2.5 text-[13.5px] font-bold text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </a>
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-white/20 transition-all hover:bg-[#003cb0] hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </a>
          </div>

          <Link
            href="/patient-reviews"
            className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/90 transition-colors hover:text-white sm:text-[14px]"
          >
            Read Dr. Mona&apos;s Google reviews →
          </Link>

          <Stagger
            delay={0.05}
            className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11.5px] font-medium text-white shadow-sm backdrop-blur-md sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:col-span-5 lg:max-w-[420px] xl:max-w-[440px]">
          <Reveal variant="scaleIn">
            <div className="relative overflow-hidden rounded-[20px] border-[3px] border-white/80 shadow-[0_20px_50px_rgba(0,10,40,0.45)] sm:rounded-[24px]">
              <Image
                src="/images/about/female-infertility.jpg"
                alt="Dr. Mona Dahiya - ICSI Treatment Specialist"
                width={500}
                height={550}
                className="max-h-[380px] w-full object-cover object-top sm:max-h-[440px] lg:max-h-[460px]"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
