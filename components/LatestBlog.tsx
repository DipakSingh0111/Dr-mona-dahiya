"use client";

import { FaArrowRight } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Stagger, StaggerItem } from "./Reveal";

export default function LatestBlog() {
  const { eyebrow, titlePrefix, titleHighlight, cta, articles } =
    siteData.latestBlog;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
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

      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:mb-8 sm:flex-row sm:items-end">
          <div className="w-full text-center sm:max-w-xl sm:text-left">
            <div className="mb-3.5 flex items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
              <span className="h-px w-7 shrink-0 bg-[#e83e74] sm:w-12" />
              <span className="text-[11px] font-bold tracking-[0.13em] text-[#e83e74] uppercase sm:whitespace-nowrap sm:text-[13px] sm:tracking-[0.16em]">
                {eyebrow}
              </span>
              <span className="h-px w-7 shrink-0 bg-[#e83e74] sm:w-12" />
            </div>

            <h2 className="font-display text-2xl leading-[1.14] font-bold tracking-tight text-[#0f2438] sm:whitespace-nowrap sm:text-3xl lg:text-[2.2rem] xl:text-[2.75rem]">
              {titlePrefix}{" "}
              <span className="text-[#e83e74]">{titleHighlight}</span>
            </h2>
          </div>

          <a
            href={cta.href}
            className="inline-flex shrink-0 items-center gap-2 self-center rounded-full border border-[#f0a8bc] bg-white px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-[#e83e74] transition hover:bg-[#fff5f8] sm:self-auto"
          >
            {cta.label}
            <FaArrowRight className="size-3" />
          </a>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6" stagger={0.1}>
          {articles.map((item) => (
            <StaggerItem key={item.id} variant="scaleIn" className="h-full">
              <article className="group flex h-full min-h-[210px] flex-col justify-between rounded-[22px] border border-[#fde2ec] bg-white p-6 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-7">
                <div>
                  <p className="text-[13px] font-bold tracking-wide text-[#e83e74]">
                    {item.category} • {item.date}
                  </p>

                  <h3 className="font-display mt-3 text-[19px] leading-snug font-bold tracking-tight text-[#0f2438] transition-colors group-hover:text-[#e83e74] sm:text-[21px]">
                    <a href={item.href}>{item.title}</a>
                  </h3>
                </div>

                <a
                  href={item.href}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 border-b border-[#e83e74] pb-0.5 text-[13.5px] font-semibold text-[#e83e74] transition-all group-hover:gap-2.5"
                >
                  <span>Read article</span>
                  <span>→</span>
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
