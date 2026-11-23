"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function EraHero() {
  const badges = [
    "Experience of over 25 years",
    "248 genes analysed using Next Generation Sequencing",
    "Located in Noida, Ghaziabad and Delhi",
    "Can be done online or physically",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      <HeroFullWidthBanner
        src="/pageBanner/M0500412.jpg"
        alt="Dr. Mona Dahiya — Personalized Endometrial Receptivity Analysis (ERA Test) in Noida & Delhi NCR"
      />
      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[46rem] xl:max-w-[50rem] 2xl:max-w-[52rem] lg:mt-0 2xl:max-w-[45rem]">
          <Breadcrumb
            items={[
              { label: "Treatments", href: "/our-services" },
              { label: "ERA Test in Noida" },
            ]}
          />

          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Endometrial Receptivity Analysis (ERA) Test in Delhi NCR
          </p>

          <h1 className="font-serif mt-2.5 max-w-[48rem] text-[1.65rem] leading-[1.16] font-normal tracking-tight text-ink sm:text-[2.15rem] lg:text-[2.45rem] xl:text-[2.65rem]">
            Personalized Endometrial Receptivity Analysis (ERA Test){" "}
            <br className="hidden sm:inline" />
            in Noida &amp; Delhi NCR
          </h1>

          <p className="mt-5 sm:mt-6.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[15px]">
            A simple biopsy can tell you your window of implantation. We analyse
            248 genes from the sample of endometrium to identify your window of
            implantation. With Dr Mona&apos;s ERA guided personalised embryo
            transfer we can achieve pregnancy rates of 65% to 70% in women with
            recurrent implantation failure. Noida | Delhi | Ghaziabad
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </Link>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(6,21,50,0.35)] transition-all hover:bg-blue-mid sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          <div className="mt-5 sm:mt-6">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink transition-colors hover:text-rose sm:text-[13.5px]"
            >
              Read Dr Mona Dahiya&apos;s Reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Stagger
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5"
            stagger={0.06}
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/35 bg-white/80 px-4 py-1.5 text-[11.5px] font-semibold text-ink sm:px-5 sm:py-2 sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500412.jpg" alt="Dr. Mona Dahiya — Personalized Endometrial Receptivity Analysis (ERA Test) in Noida & Delhi NCR" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "families helped" },
            { target: 25, suffix: "+", label: "years experience" },
            { target: 248, label: "genes tested for implantation" },
            { target: 15000, suffix: "+", label: "IVF cycles performed" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
