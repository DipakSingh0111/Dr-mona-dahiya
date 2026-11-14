"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function BestIvfDoctorHero() {
  const badges = [
    "25+ years' experience",
    "25,000+ families treated",
    "90%+ IVF success rate",
    "Online or in person",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
        style={{ background: "var(--pink)" }}
      >
        <HeroFullWidthBanner
          src="/pageBanner/M0500389.JPG"
          alt="Dr. Mona Dahiya - Best IVF Doctor in Noida"
          objectPosition="object-[72%_25%] md:object-[72%_22%] lg:object-[82%_47%] xl:object-[80%_47%] 2xl:object-[76%_44%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
          }}
        />

        <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
          <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb
          items={[
            { label: "Treatments", href: "/our-services" },
            { label: "IVF Doctor in Noida" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              IVF, ICSI &amp; fertility care in Noida
            </p>

            <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Best IVF Doctor in Noida: Dr. Mona Dahiya
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              Best infertility doctor in Noida, Dr Mona Dahiya is a renowned IVF
              specialist having done MBBS, MD &amp; DNB (Obstetrics &amp;
              Gynaecology) from Delhi University. She did her fellowship in
              reproductive medicine from Singapore General Hospital. Her centre
              covers all infertility treatments including IVF, ICSI, donor
              programs, and IUI treatments.
            </p>

            <p className="mt-3 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              At her centre, she performs every procedure herself. She has an
              exceptionally high success rate of IVF treatment as she provides
              customised protocols to each patient.
            </p>
          </Reveal>

          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3.5">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2 text-[13px] font-bold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-6 sm:py-2.5 sm:text-[13.5px]"
            >
              Book In-Clinic Consultation
            </a>
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(6,21,50,0.35)] transition-all hover:bg-navy-mid active:scale-95 sm:px-6 sm:py-2.5 sm:text-[13.5px]"
            >
              Schedule Online Consultation
            </a>
          </div>

          <Link
            href="/best-ivf-patient-reviews"
            className="mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-rose transition-colors hover:text-rose-dark sm:mt-3 sm:text-[13.5px]"
          >
            Read Dr. Mona Dahiya&apos;s Google reviews →
          </Link>

          <Stagger
            delay={0.05}
            className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2"
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11.5px] font-medium text-ink shadow-sm sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500389.JPG" alt="Dr. Mona Dahiya - Best IVF Doctor in Noida" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "families treated" },
            { target: 25, suffix: "+", label: "years' expertise" },
            { target: 90, suffix: "%+", label: "IVF success rates" },
            { target: 15000, suffix: "+", label: "IVF cycles" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
