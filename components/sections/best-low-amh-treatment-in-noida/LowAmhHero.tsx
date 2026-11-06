"use client";

import HeroBannerImage from "@/components/ui/HeroBannerImage";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function LowAmhHero() {
  const badges = [
    "Experience of 25+ Years",
    "Prioritise Use of Your Own Eggs",
  ];

  return (
    <section
      className="relative overflow-hidden pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-14"
      style={{ background: "var(--pink)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 shadow-sm sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:text-rose sm:text-[13px]"
                >
                  <FaHome className="size-3 shrink-0 sm:size-3.5" />
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-ink/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li>
                <span className="inline-flex items-center rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                  Low AMH Treatment in Noida
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              Diminished Ovarian Reserve
            </p>

            <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.55rem]">
              Low AMH Treatment in Noida | Delhi | Ghaziabad
            </h1>

            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[14px]">
              Low Amh means low number of follicles are left in your ovary. If
              you have less than 1.1 ng/ml that does not mean that you cannot
              conceive nor does it mean that you will have low quality eggs. We
              offer protocols which can help you conceive with your own eggs
              with Dr Mona Dahiya. We will help you maximise your chances of
              getting pregnant. At Delhi NCR with our specialised protocols like
              Duostim, Micro dose flare, dheas.
            </p>

            <div className="mt-4 flex w-full max-w-[450px] flex-col gap-2.5 sm:mt-5 sm:max-w-[500px] sm:flex-row sm:gap-3">
              <a
                href="#book-consultation"
                className="inline-flex h-11 w-full flex-1 items-center justify-center rounded-full bg-rose px-3 text-[12px] font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-rose-dark active:scale-[0.98] sm:h-12 sm:px-4 sm:text-[13px]"
              >
                Book In-Clinic Consultation
              </a>
              <a
                href="#book-consultation"
                className="inline-flex h-11 w-full flex-1 items-center justify-center rounded-full bg-blue px-3 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-[0.98] sm:h-12 sm:px-4 sm:text-[13px]"
              >
                Schedule Online Consultation
              </a>
            </div>

            <div className="mt-3 sm:mt-4">
              <Link
                href="/best-ivf-patient-reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
              >
                Read Dr Mona Dahiya&apos;s Reviews
                <span aria-hidden>→</span>
              </Link>
            </div>

            <Stagger
              className="mt-4 mb-1 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
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
          </Reveal>
        </div>

        <HeroBannerImage
          src="/images/about-mona-dahiya/Low-AMH.jpg"
          alt="Dr. Mona Dahiya - Low AMH Treatment in Noida, Delhi and Ghaziabad"
        />
      </div>

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
  );
}
