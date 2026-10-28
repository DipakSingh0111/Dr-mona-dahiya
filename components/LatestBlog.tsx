"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "./Reveal";

export default function LatestBlog() {
  const { eyebrow, titlePrefix, titleHighlight, cta, articles } =
    siteData.latestBlog;

  return (
    <section className="relative overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4">
      {/* Soft pink organic blobs — reference style */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-[380px] w-[420px] rounded-full opacity-80 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,214,230,0.65) 0%, rgba(255,236,244,0.25) 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-16 -z-10 h-[280px] w-[240px] rounded-[40%] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,192,216,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:mb-8 sm:flex-row sm:items-end">
          <div className="w-full text-center sm:max-w-xl sm:text-left">
            <div className="mb-3.5 flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-px w-10 bg-[#e83e74] sm:w-12" />
              <span className="text-[12px] font-bold tracking-[0.16em] text-[#e83e74] uppercase sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-px w-10 bg-[#e83e74] sm:w-12" />
            </div>

            <h2 className="font-display text-3xl leading-[1.14] font-bold tracking-tight text-[#0f2438] sm:text-4xl md:text-[46px] lg:text-[50px]">
              {titlePrefix}{" "}
              <span className="text-[#e83e74]">{titleHighlight}</span>
            </h2>
          </div>

          <a
            href={cta.href}
            className="inline-flex shrink-0 items-center gap-2 self-center rounded-full border border-[#f0a8bc] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#e83e74] transition hover:bg-[#fff5f8] sm:self-auto"
          >
            {cta.label}
            <FaArrowRight className="size-3" />
          </a>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7" stagger={0.1}>
          {articles.map((item) => (
            <StaggerItem key={item.id} variant="scaleIn">
            <article
              className="group flex flex-col overflow-visible rounded-[24px] bg-white p-3 shadow-[0_12px_36px_rgba(232,62,116,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(232,62,116,0.14)] sm:p-4"
            >
              <div className="relative">
                <div className="relative h-[210px] w-full overflow-hidden rounded-[18px] bg-[#fff0f5] sm:h-[230px] sm:rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Category + date badge overlapping image bottom */}
                <div className="absolute bottom-3 left-3 z-10 inline-flex max-w-[calc(100%-24px)] items-center gap-1.5 rounded-full bg-gradient-to-r from-[#fff5f8] to-[#ffe8f0] px-3.5 py-1.5 shadow-[0_4px_14px_rgba(232,62,116,0.15)] ring-1 ring-[#fde2ec]">
                  <span className="text-[12px] font-bold text-[#e83e74]">
                    {item.category}
                  </span>
                  <span className="text-[#e83e74]/40">•</span>
                  <span className="text-[12px] font-medium text-[#4b5563]">
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-1 pt-5 pb-2">
                <h3 className="font-display text-[17px] leading-snug font-bold tracking-tight text-[#0f2438] transition-colors group-hover:text-[#e83e74] sm:text-[18.5px]">
                  <a href={item.href}>{item.title}</a>
                </h3>

                <a
                  href={item.href}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-[#e83e74] pb-0.5 text-[13px] font-semibold text-[#e83e74] transition-all group-hover:gap-2.5"
                >
                  Read article
                  <FaArrowRight className="size-3" />
                </a>
              </div>
            </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
