"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function MiniIvfHero() {
  const badges = [
    "Experience of more than 25 years",
    "Number of injections between 4-8",
    "OHSS almost zero risk",
    "Consultation online/in-clinic",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
        style={{ background: "var(--pink)" }}
      >
        <HeroFullWidthBanner
          src="/pageBanner/M0500403.JPG"
          alt="Dr. Mona Dahiya - Mini IVF Treatment in Delhi NCR"
          objectPosition="object-[72%_25%] md:object-[72%_22%] lg:object-[80%_35%] xl:object-[78%_35%] 2xl:object-[75%_35%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
          }}
        />

        <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
          <div className="lg:max-w-[34rem] xl:max-w-[40rem] 2xl:max-w-[45rem]">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Mini IVF in Delhi NCR" },
              ]}
            />

            <Reveal variant="slideLeft">
              <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                Minimal stimulation IVF
              </p>

              <h1 className="font-serif mt-1.5 max-w-[42rem] text-[1.85rem] leading-[1.15] font-normal tracking-tight text-ink sm:text-[2.45rem] lg:text-[2.85rem] xl:text-[3.1rem]">
                Mini IVF Treatment in Delhi NCR
              </h1>

              <p className="mt-3.5 max-w-[38rem] text-[13.5px] leading-relaxed text-ink/80 sm:text-[15px]">
                Minimal stimulation IVF, also known as mini IVF, is a type of IVF
                where you take mild oral medication with injection support to
                produce 2-5 healthy quality eggs. Under the guidance of Dr. Mona
                Dahiya, we perform mini IVF in Delhi NCR, which involves fewer
                injections and eliminates the chances of OHSS. It is recommended
                in case of low AMH or poor responders.
              </p>
            </Reveal>

            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3.5">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-6 py-2.5 text-[13.5px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
              >
                Book In-Clinic Consultation
              </a>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.3)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-4">
              <Link
                href="/best-ivf-patient-reviews"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-rose hover:decoration-rose"
              >
                Read Dr Mona Dahiya&apos;s Reviews →
              </Link>
            </div>

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

          <HeroMobileBanner src="/pageBanner/M0500403.JPG" alt="Dr. Mona Dahiya - Mini IVF Treatment in Delhi NCR" />
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            {
              target: 25000,
              suffix: "+",
              label: "couples treated",
            },
            {
              target: 25,
              suffix: "+",
              label: "years of experience",
            },
            {
              prefix: "2–",
              target: 5,
              label: "eggs produced in mild IVF cycles",
            },
            {
              target: 15000,
              suffix: "+",
              label: "IVF cycles performed",
            },
          ]}
        />
        </div>
      </section>
    </>
  );
}
