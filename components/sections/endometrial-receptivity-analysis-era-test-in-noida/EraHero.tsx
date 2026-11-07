"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";
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
    <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <Breadcrumb items={[{ label: "ERA Test in Noida" }]} />

          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Endometrial Receptivity Analysis (ERA) Test in Delhi NCR
          </p>

          <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.16] font-normal tracking-tight text-ink sm:text-[2.15rem] lg:text-[2.45rem] xl:text-[2.65rem]">
            Personalized Endometrial Receptivity Analysis (ERA Test) in Noida
            &amp; Delhi NCR
          </h1>

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[15px]">
            A simple biopsy can tell you your window of implantation. We analyse
            248 genes from the sample of endometrium to identify your window of
            implantation. With Dr Mona&apos;s ERA guided personalised embryo
            transfer we can achieve pregnancy rates of 65% to 70% in women with
            recurrent implantation failure. Noida | Delhi | Ghaziabad
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark sm:px-6 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          <div className="mt-4 sm:mt-5">
            <Link
              href="/best-ivf-patient-reviews"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink transition-colors hover:text-rose sm:text-[13.5px]"
            >
              Read Dr Mona Dahiya&apos;s Reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Stagger
            className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
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

        <HeroBannerImage
          src="/images/VID00029.jpeg"
          alt="Dr. Mona Dahiya — Personalized Endometrial Receptivity Analysis (ERA Test) in Noida & Delhi NCR"
          objectPosition="object-top"
        />
      </div>

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
  );
}
