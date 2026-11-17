"use client";

import Image from "next/image";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function ParenthoodCta() {
  const data = siteData.parenthoodCta;

  return (
    <section className="parenthood-cta relative overflow-hidden bg-[#f4f0ea]">
      {/* Right-aligned 3:2 image container matching the natural aspect ratio with soft left fade */}
      <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-auto lg:aspect-[3/2] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.22)_16%,black_34%,black_100%)]">
        <Image
          src={data.image}
          alt="Newborn baby cradled gently in hands"
          fill
          sizes="(max-width: 1023px) 100vw, 550px"
          className="object-cover object-[65%_40%] lg:object-contain lg:object-right"
          priority
        />
      </div>

      {/* Mobile cream gradient behind text */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,245,247,0.96) 0%, rgba(255,245,247,0.84) 45%, rgba(255,245,247,0.35) 100%)",
        }}
      />

      <div className="page-container relative z-10 flex min-h-[240px] items-center py-6 sm:min-h-[280px] sm:py-8 lg:min-h-[340px] lg:py-10">
        <Reveal variant="slideLeft" className="w-full max-w-[740px]">
          <span className="mb-5 block h-[3px] w-11 rounded-full bg-rose" />

          <h2 className="font-display text-[1.75rem] leading-[1.28] font-bold tracking-tight text-[#1a2b4b] sm:text-[2.2rem] lg:text-[2.45rem] xl:text-[2.55rem]">
            {data.title}{" "}
            <span className="italic text-rose">{data.titleAccent}</span>
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:flex-nowrap sm:gap-3">
            <a
              href={data.book.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-rose px-4 py-2.5 text-[12px] font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(232,62,116,0.28)] transition hover:bg-rose-dark sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-[13.5px]"
            >
              <FaCalendarAlt className="size-3.5" />
              {data.book.label}
            </a>

            <a
              href={data.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0f6f56] px-4 py-2.5 text-[12px] font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(15,111,86,0.28)] transition hover:bg-[#0c5945] sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-[13.5px]"
            >
              <FaWhatsapp className="size-[18px]" />
              {data.whatsapp.label}
            </a>

            <a
              href={data.phone.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#1a2b4b]/40 bg-transparent px-4 py-2.5 text-[12px] font-semibold whitespace-nowrap text-[#1a2b4b] transition hover:bg-white/60 sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-[13.5px]"
            >
              <FaPhoneAlt className="size-3.5" />
              {data.phone.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

