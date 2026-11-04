"use client";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function OnlineConsultationHero() {
  const data = siteData.onlineConsultationPage;

  return (
    <section
      className="relative overflow-x-hidden pt-5 pb-12 sm:pt-6 sm:pb-14 lg:pt-7 lg:pb-16"
      style={{
        background:
          "var(--pink)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[360px] w-[360px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative grid grid-cols-1 items-start gap-7 sm:gap-8 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
            <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-rose/25 bg-white px-3 py-1.5 shadow-sm backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li className="min-w-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-ink/70 transition-colors hover:bg-white hover:text-rose sm:text-[13px]"
                >
                  <FaHome className="size-3 shrink-0 sm:size-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden className="text-ink/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li className="min-w-0">
                <span className="inline-flex max-w-full items-center rounded-full bg-rose/20 px-2.5 py-0.5 text-[12px] font-semibold text-rose ring-1 ring-rose/35 sm:px-3 sm:text-[13px]">
                  {data.breadcrumb}
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12.5px] font-semibold tracking-wide text-ink/75 sm:text-[13.5px]">
              {data.eyebrow}
            </p>
            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.85rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.55rem] xl:text-[2.85rem]">
              {data.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-rose px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-rose-dark active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                {data.primaryCta.label}
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-blue px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                {data.secondaryCta.label}
              </a>
            </div>

            <div className="mt-4">
              <Link
                href={data.reviewsLink.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/90 transition-colors hover:text-rose hover:underline sm:text-[14px]"
              >
                {data.reviewsLink.label}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-5 mb-1 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-2.5">
              {data.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-rose/30 bg-white px-2.5 py-1 text-[10.5px] font-medium whitespace-nowrap text-ink/90 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <HeroBannerImage
          src={data.image}
          alt="Dr. Mona Dahiya — Online IVF Consultation"
        />
      </div>
    </section>
  );
}
