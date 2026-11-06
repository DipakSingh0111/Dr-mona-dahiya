"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BookAppointmentHero() {
  const data = siteData.bookAppointmentPage;

  return (
    <section
      className="relative overflow-x-hidden pt-5 pb-10 sm:pt-6 sm:pb-12 lg:pt-7 lg:pb-14"
      style={{
        background: "var(--pink)",
      }}
    >
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[360px] w-[360px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[280px] w-[280px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="page-container relative grid grid-cols-1 items-start gap-7 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <Breadcrumb
            items={[
              { label: "Patient Resources", href: "/ivf-faqs" },
              { label: data.breadcrumb },
            ]}
          />

          <Reveal variant="slideLeft">
            <p className="text-[12.5px] font-semibold tracking-wide text-rose sm:text-[13.5px]">
              {data.eyebrow}
            </p>
            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.85rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.55rem] xl:text-[2.85rem]">
              {data.title}
            </h1>
            <p className="mt-3.5 max-w-xl text-[14px] leading-relaxed text-ink/75 sm:mt-4 sm:text-[14.5px] lg:text-[15px]">
              {data.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-3.5">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark hover:shadow-[0_6px_20px_rgba(232,62,116,0.45)] sm:px-6 sm:py-3 sm:text-[14px]"
              >
                {data.primaryCta.label}
              </a>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:px-6 sm:py-3 sm:text-[14px]"
              >
                {data.secondaryCta.label}
              </Link>
            </div>

            {/* Reviews Link */}
            <div className="mt-4 sm:mt-5">
              <Link
                href={data.profileReview.href}
                className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-rose hover:text-rose-dark transition-colors sm:text-[13.5px]"
              >
                <span>{data.profileReview.text}</span>
              </Link>
            </div>

            {/* Doctor Credentials Quote Box */}
            <div className="mt-5 max-w-xl rounded-[16px] border border-rose/30 bg-white/90 p-3.5 shadow-sm backdrop-blur-sm sm:mt-6 sm:p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose" />
                <p className="text-[12.5px] font-medium leading-relaxed text-ink/85 sm:text-[13.5px]">
                  {data.quote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Doctor Photo */}
        <HeroBannerImage
          src={data.image}
          alt={`Dr. Mona Dahiya - ${data.title}`}
          objectPosition="object-center"
        />
      </div>

      {/* Counter bar */}
      <div className="page-container mt-8 sm:mt-10 lg:mt-12">
        <HeroCounterBar items={data.counter} />
      </div>
    </section>
  );
}

