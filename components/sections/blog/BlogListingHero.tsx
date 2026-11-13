"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import { Reveal } from "@/components/ui/Reveal";

export default function BlogListingHero() {
  return (
    <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      <HeroFullWidthBanner
        src="/pageBanner/M0500484.JPG"
        alt="Dr. Mona Dahiya — Fertility & IVF Blog"
      />

      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb items={[{ label: "Fertility & IVF Blog" }]} />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              Blog · Expert articles
            </p>

            <h1 className="font-serif mt-2 text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Fertility &amp; IVF Blog by Dr. Mona Dahiya
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/80 sm:text-[15px]">
              Learn more about all things fertility from fertility testing, types
              of fertility treatments, IVF and what to expect. Read our posts on
              topics such as low AMH, PCOS, diet and how to find the best
              fertility doctor for you.
            </p>
          </Reveal>

          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3.5">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 px-6 py-2.5 text-[13.5px] font-bold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] backdrop-blur-sm transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          <div className="mt-4">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-rose transition-colors hover:text-rose-dark sm:text-[14px]"
            >
              Read Dr. Mona&apos;s Google reviews →
            </Link>
          </div>
        </div>

        <HeroMobileBanner
          src="/pageBanner/M0500484.JPG"
          alt="Dr. Mona Dahiya — Fertility & IVF Blog"
        />
      </div>
    </section>
  );
}

