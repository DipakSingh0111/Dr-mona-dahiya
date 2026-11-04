"use client";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function FemaleInfertilityNoidaHero() {
  const badges = [
    "25+ years' experience",
    "Sector 49, Noida",
    "Simplest effective option first",
  ];

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden py-8 sm:py-10 lg:min-h-[calc(100svh-var(--site-header-h,8.75rem))] lg:py-8 xl:py-10"
      style={{
        background:
          "var(--pink)",
      }}
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 sm:gap-7 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-8 lg:px-8 xl:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:bg-white hover:text-rose sm:text-[13px]"
                >
                  <FaHome className="size-3 text-rose" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-ink/40" aria-hidden="true">
                <FaChevronRight className="size-2.5" />
              </li>
              <li className="truncate">
                <span className="rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                  Best Female Infertility Doctor in Noida
                </span>
              </li>
            </ol>
          </nav>

          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            Female fertility care in Noida
          </p>

          <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.75rem] leading-[1.16] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.55rem] xl:text-[2.75rem]">
            Best Female Infertility Doctor in Noida: Dr. Mona Dahiya
          </h1>

          <p className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
            Female infertility from irregular ovulation (PCOS), blocked tubes,
            low ovarian reserve or endometriosis needs a precise diagnosis, not
            generic medicines. From her IVF clinic in Noida, Dr. Mona Dahiya
            (MBBS and MD Gold Medalist, Singapore General Hospital fellowship)
            brings 25+ years of experience to personalised care.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-6">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose to-[#f43f5e] px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:brightness-110 sm:px-6 sm:py-3 sm:text-[14px]"
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
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink/90 transition-colors hover:text-rose-dark sm:text-[13.5px]"
            >
              Read Dr. Mona&apos;s Google reviews
              <span aria-hidden>→</span>
            </Link>
          </div>

          <Stagger
            className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5"
            stagger={0.06}
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11px] font-medium text-ink/90 backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[12px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroBannerImage
          src="/images/Confident-Doctor.png"
          alt="Dr. Mona Dahiya — Best Female Infertility Doctor in Noida"
        />
      </div>
    </section>
  );
}
