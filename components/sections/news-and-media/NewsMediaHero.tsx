"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import Link from "next/link";

import HeroBannerImage from "@/components/ui/HeroBannerImage";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Reveal } from "@/components/ui/Reveal";

export default function NewsMediaHero() {
  return (
    <section
      className="relative overflow-x-hidden pt-5 pb-12 sm:pt-6 sm:pb-14 lg:pt-7 lg:pb-16"
      style={{
        background: "var(--pink)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[320px] w-[320px] rounded-full opacity-35 blur-3xl"
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
            { label: "About Dr. Mona", href: "/about-mona-dahiya" },
            { label: "News & Media" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12.5px] font-semibold tracking-wide text-rose sm:text-[13.5px]">
              News &amp; media
            </p>

            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.85rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.55rem] xl:text-[2.85rem]">
              Dr. Mona Dahiya in
              <br />
              the News &amp; Media
            </h1>

            <p className="mt-3.5 max-w-xl text-[13.5px] leading-relaxed text-ink/80 sm:mt-4 sm:text-[14.5px]">
              Dr. Mona Dahiya&apos;s interviews, articles and features have
              appeared in some of India&apos;s top publications, covering
              national news and business media as well as healthcare and
              fertility-focused publications. Click any media outlet below to
              read the article on the publisher&apos;s website.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
              <a
                href="#book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                Book In-Clinic Consultation
              </a>
              <Link
                href="/ivf-consultation-online"
                className="inline-flex items-center justify-center rounded-full bg-blue px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-blue/20 transition-all hover:bg-blue-dark active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-4">
              <a
                href="#reviews"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/90 underline underline-offset-4 transition-colors hover:text-rose sm:text-[14px]"
              >
                <span>Read Dr. Mona&apos;s Google reviews</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <HeroBannerImage
          src="/images/news-and-media.jpg"
          alt="Dr. Mona Dahiya in the News & Media — Times Network India Health Summit & Awards 2025"
          objectPosition="object-[center_35%]"
        />
      </div>

      <div className="page-container relative">
        <HeroCounterBar
          items={[
            { target: 43, label: "media features" },
            { target: 25, suffix: "+", label: "years' expertise" },
            { target: 90, suffix: "%+", label: "IVF success rates" },
            { target: 15000, suffix: "+", label: "IVF cycles" },
          ]}
        />
      </div>
    </section>
  );
}
