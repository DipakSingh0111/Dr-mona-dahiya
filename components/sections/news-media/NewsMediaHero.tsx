"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function NewsMediaHero() {
  return (
    <section
      className="relative overflow-x-hidden pt-5 pb-12 sm:pt-6 sm:pb-14 lg:pt-7 lg:pb-16"
      style={{
        background:
          "linear-gradient(115deg, #05193d 0%, #00369e 35%, #0047ca 70%, #08286a 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-[360px] w-[360px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(147,197,253,0.18) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[300px] w-[300px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-7 px-4 sm:gap-8 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 xl:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
            <ol className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,20,80,0.2)] backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-2">
              <li className="min-w-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[12px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-[13px]"
                >
                  <FaHome className="size-3 shrink-0 sm:size-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden className="text-white/35">
                <FaChevronRight className="size-2.5 sm:size-3" />
              </li>
              <li className="min-w-0">
                <span className="inline-flex items-center rounded-full bg-[#e83e74]/20 px-2.5 py-0.5 text-[12px] font-semibold text-[#f9a8d4] ring-1 ring-[#e83e74]/35 sm:px-3 sm:text-[13px]">
                  News &amp; Media
                </span>
              </li>
            </ol>
          </nav>

          <Reveal variant="slideLeft">
            <p className="text-[12.5px] font-semibold tracking-wide text-[#ff8fb3] sm:text-[13.5px]">
              News &amp; media
            </p>

            <h1 className="font-serif mt-1.5 max-w-[34rem] text-[1.85rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.35rem] lg:text-[2.55rem] xl:text-[2.85rem]">
              Dr. Mona Dahiya in
              <br />
              the News &amp; Media
            </h1>

            <p className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-white/85 sm:mt-5 sm:text-[15px]">
              Dr. Mona Dahiya&apos;s work in fertility care has been featured
              across leading Indian news, business and health publications, from
              national dailies to specialist health portals. Click any
              publication below to read the full article on the publisher&apos;s
              website, which opens in a new tab.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
              <Link
                href="/about#book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-[#c53658] px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-[#a82946] active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                Book In-Clinic Consultation
              </Link>

              <Link
                href="/online-consultation"
                className="inline-flex items-center justify-center rounded-full bg-[#0047ca] px-4 py-2.5 text-[12.5px] font-semibold whitespace-nowrap text-white shadow-md ring-1 ring-white/25 transition-all hover:bg-[#0037a3] active:scale-95 sm:px-5 sm:py-3 sm:text-[13.5px]"
              >
                Schedule Online Consultation
              </Link>
            </div>

            <div className="mt-4 mb-1 sm:mt-5">
              <Link
                href="/about#reviews"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#ff8fb3] transition-colors hover:text-white hover:underline sm:text-[14px]"
              >
                <span>Read Dr. Mona&apos;s Google reviews</span>
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="slideRight"
          className="relative mx-auto w-full max-w-[280px] justify-self-center sm:max-w-[320px] lg:col-span-5 lg:mx-0 lg:max-w-[340px] lg:justify-self-end xl:max-w-[380px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-2 rounded-[30px] opacity-70 blur-xl sm:-inset-3"
            style={{
              background:
                "radial-gradient(circle, rgba(232,62,116,0.35) 0%, rgba(0,71,202,0.3) 60%, transparent 80%)",
            }}
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border-2 border-white/70 bg-[#06183a] shadow-[0_20px_45px_rgba(0,18,60,0.5)] sm:rounded-[28px]">
            <Image
              src="/images/publications/awards/times-health-award.jpg"
              alt="Dr. Mona Dahiya receiving Times Network India Health Summit & Awards"
              fill
              priority
              sizes="(max-width: 1024px) 340px, 400px"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
