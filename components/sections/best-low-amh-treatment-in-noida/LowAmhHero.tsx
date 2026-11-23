"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function LowAmhHero() {
  const badges = [
    "Experience of 25+ Years",
    "Prioritise Use of Your Own Eggs",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      <HeroFullWidthBanner src="/pageBanner/M0500395.jpg" alt="Dr. Mona Dahiya - Low AMH Treatment in Noida, Delhi and Ghaziabad" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[46rem] xl:max-w-[50rem] 2xl:max-w-[52rem] lg:-mt-3">
          <Breadcrumb
            items={[
              { label: "Conditions Treated", href: "/female-infertility-treatment" },
              { label: "Low AMH Treatment in Noida" },
            ]}
          />

          <Reveal variant="slideLeft">
            <div className="flex flex-col gap-5 sm:gap-6">
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
                  Diminished Ovarian Reserve
                </p>

                <h1 className="font-serif mt-2 max-w-[48rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
                  Low AMH Treatment in Noida | Delhi | Ghaziabad
                </h1>
              </div>

              <p className="max-w-2xl text-[13px] leading-relaxed text-ink/75 sm:text-[14px]">
                Low AMH means low number of follicles are left in your ovary. If
                you have less than 1.1 ng/ml that does not mean that you cannot
                conceive nor does it mean that you will have low quality eggs. We
                offer protocols which can help you conceive with your own eggs
                with Dr Mona Dahiya. We will help you maximise your chances of
                getting pregnant. At Delhi NCR with our specialised protocols like
                Duostim, Micro dose flare, DHEAS.
              </p>

              <div className="flex w-full max-w-[450px] flex-col gap-2.5 sm:max-w-[500px] sm:flex-row sm:gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex h-11 w-full flex-1 items-center justify-center rounded-full bg-rose px-3 text-[12px] font-semibold whitespace-nowrap text-white shadow-[0_8px_20px_rgba(232,62,116,0.28)] transition-all hover:bg-rose-dark active:scale-[0.98] sm:h-12 sm:px-4 sm:text-[13px]"
                >
                  Book In-Clinic Consultation
                </Link>
                <a
                  href="#book-consultation"
                  className="inline-flex h-11 w-full flex-1 items-center justify-center rounded-full bg-blue px-3 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-mid active:scale-[0.98] sm:h-12 sm:px-4 sm:text-[13px]"
                >
                  Schedule Online Consultation
                </a>
              </div>

              <div>
                <Link
                  href="/best-ivf-patient-reviews"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
                >
                  Read Dr Mona Dahiya&apos;s Reviews
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <Stagger
                className="mb-1 flex flex-wrap items-center gap-2 sm:gap-2.5"
                stagger={0.06}
              >
                {badges.map((badge) => (
                  <StaggerItem key={badge}>
                    <span className="inline-flex items-center rounded-full border border-rose/30 bg-white px-2.5 py-1 text-[10.5px] font-medium whitespace-nowrap text-ink/90 sm:px-3 sm:py-1.5 sm:text-[12px]">
                      {badge}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>

        <HeroMobileBanner src="/pageBanner/M0500395.jpg" alt="Dr. Mona Dahiya - Low AMH Treatment in Noida, Delhi and Ghaziabad" />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
          items={[
            { target: 25000, suffix: "+", label: "Happy Families" },
            { target: 25, suffix: "+", label: "Years Of Experience" },
            {
              target: 2,
              label: "Retrievals In A Cycle With DuoStim",
            },
            { target: 4.9, decimals: 1, label: "Rating On Google" },
          ]}
        />
        </div>
      </section>
    </>
  );
}
