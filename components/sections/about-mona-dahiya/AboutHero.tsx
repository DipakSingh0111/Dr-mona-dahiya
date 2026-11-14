"use client";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  HeroFullWidthBanner,
  HeroMobileBanner,
} from "@/components/ui/HeroFullWidthBanner";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import AboutScrollTop from "./AboutScrollTop";

export default function AboutHero() {
  const badges = [
    "MBBS Gold Medalist & MD Gold Medalist",
    "Fellow from Singapore General Hospital",
    "Experience of more than 25 Years",
    "More than 50 Awards Received",
  ];

  return (
    <>
    <section
        className="relative overflow-hidden flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0"
      style={{ background: "var(--pink)" }}
    >
      <AboutScrollTop />

      {/* Desktop full-width background banner */}
      <HeroFullWidthBanner
        src="/pageBanner/M0500443.JPG"
        alt="Dr. Mona Dahiya - Senior Reproductive Endocrinologist & Fertility Specialist"
      />

      <div className="page-container relative z-10 w-full pt-4 sm:pt-5 lg:pt-0">
        <div className="lg:max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          <Breadcrumb
            items={[
              { label: "About Dr. Mona", href: "/about-mona-dahiya" },
              { label: "Credentials & Bio" },
            ]}
          />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              About Dr. Mona Dahiya
            </p>

            <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Dr. Mona Dahiya - Senior Reproductive Endocrinologist &amp; Fertility Specialist
            </h1>

            <p className="mt-3.5 max-w-xl text-[13px] leading-relaxed text-ink/80 sm:mt-4 sm:text-[14px]">
              Dr. Mona Dahiya is a senior reproductive endocrinologist &amp; infertility specialist with 25+ years of experience. She is the Founder Director of Little Angel IVF. She has successfully treated more than 25000 couples from India and abroad.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/85 px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] backdrop-blur-sm transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Book In-Clinic Consultation
              </a>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-3 sm:mt-4">
              <Link
                href="#reviews"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rose transition-colors hover:text-rose hover:underline sm:text-[13.5px]"
              >
                Read Dr. Mona Dahiya&apos;s Google reviews →
              </Link>
            </div>

            <Stagger
              className="mt-4 mb-2 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
              stagger={0.06}
            >
              {badges.map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex items-center rounded-full border border-rose/30 bg-white/95 px-2.5 py-1 text-[10.5px] font-medium whitespace-nowrap text-ink/90 shadow-xs sm:px-3 sm:py-1.5 sm:text-[12px]">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>

        {/* Mobile / tablet full-width banner */}
        <HeroMobileBanner
          src="/pageBanner/M0500443.JPG"
          alt="Dr. Mona Dahiya - Senior Reproductive Endocrinologist & Fertility Specialist"
        />
      </div>
    </section>
      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
          {
                    "target": 25000,
                    "suffix": "+",
                    "label": "families treated"
          },
          {
                    "target": 25,
                    "suffix": "+",
                    "label": "years' expertise"
          },
          {
                    "target": 90,
                    "suffix": "%+",
                    "label": "success rates"
          },
          {
                    "target": 15000,
                    "suffix": "+",
                    "label": "IVF cycles"
          }
]}
          />
        </div>
      </section>
    </>
  );
}
