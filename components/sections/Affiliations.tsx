"use client";

import Image from "next/image";
import { FaHospital, FaClock, FaBuilding } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Affiliations() {
  const data = siteData.affiliations;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <div className="mb-6 flex flex-col gap-3 sm:mb-7 lg:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
            <div className="shrink-0">
              <div className="mb-3.5 flex items-center gap-2.5 sm:gap-3">
                <span className="h-px w-6 shrink-0 bg-[#e83e74] sm:w-10" />
                <span className="text-[11.5px] font-semibold tracking-wide text-[#e83e74] sm:whitespace-nowrap sm:text-[13px]">
                  {data.eyebrow}
                </span>
                <span className="h-px w-6 shrink-0 bg-[#e83e74] sm:w-10" />
              </div>
              <h2 className="font-display text-[1.65rem] leading-tight font-bold tracking-tight text-[#0f2438] sm:whitespace-nowrap sm:text-[2rem] lg:text-[2.1rem] xl:text-[2.55rem]">
                {data.title}{" "}
                <span className="text-[#e83e74]">{data.titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-none text-[12px] leading-relaxed text-[#64748b] sm:text-[13px] lg:whitespace-nowrap lg:text-right xl:text-[14.5px]">
              {data.subtitle}
            </p>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6"
          stagger={0.12}
        >
          {/* Present — Highlighted */}
          <StaggerItem variant="slideLeft">
            <article className="relative h-full overflow-hidden rounded-[22px] border border-[#f5a3bd] bg-gradient-to-br from-[#fff5f8] via-[#fff0f5] to-[#ffe4ee] p-5 shadow-[0_14px_36px_rgba(232,62,116,0.12)] sm:rounded-[24px] sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-8 size-44 rounded-full opacity-90 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(244,114,160,0.45) 0%, rgba(255,214,228,0.25) 55%, transparent 75%)",
                }}
              />
              <FaBuilding
                aria-hidden
                className="pointer-events-none absolute top-5 right-5 size-[68px] text-[#e83e74]/[0.14] sm:size-20"
              />

              <div className="relative mb-2 flex flex-wrap items-center gap-3 border-b border-[#f5b8cb]/80 pb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f5a3bd] bg-[#ffdce8] px-3.5 py-1.5 shadow-sm">
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#e83e74] text-white">
                    <FaHospital className="size-2.5" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] text-[#b02252] uppercase">
                    {data.present.badge}
                  </span>
                </span>
                <h3 className="font-display text-[1.35rem] font-bold text-[#0f2438] sm:text-[1.55rem]">
                  {data.present.title}
                </h3>
              </div>

              <ul className="relative flex flex-col">
                {data.present.items.map((item, index) => {
                  const isLast = index === data.present.items.length - 1;

                  return (
                    <li
                      key={item.id}
                      className={`py-4 sm:py-5 ${
                        isLast ? "pb-1" : "border-b border-[#f5b8cb]/70"
                      }`}
                    >
                      <p className="text-[16px] font-bold text-[#0f2438] sm:text-[17.5px]">
                        {item.name}
                      </p>

                      {"address" in item && item.address ? (
                        <p className="mt-1.5 text-[13px] leading-relaxed text-[#475569] sm:text-[14px]">
                          {item.address}
                        </p>
                      ) : null}

                      {"tags" in item && item.tags ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#f08cae] bg-white px-3.5 py-1 text-[12.5px] font-semibold text-[#d62f64] shadow-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </article>
          </StaggerItem>

          {/* Past — Darker / Muted */}
          <StaggerItem variant="slideRight">
            <article className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1c19] p-5 text-white shadow-[0_12px_32px_rgba(13,28,25,0.18)] sm:rounded-[24px] sm:p-7">
              <FaBuilding
                aria-hidden
                className="pointer-events-none absolute top-5 right-5 size-[68px] text-white/[0.04] sm:size-20"
              />

              <div className="relative mb-2 flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5">
                  <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white/80">
                    <FaClock className="size-2.5" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] text-white/75 uppercase">
                    {data.past.badge}
                  </span>
                </span>
                <h3 className="font-display text-[1.35rem] font-bold text-white sm:text-[1.55rem]">
                  {data.past.title}
                </h3>
              </div>

              <ul className="relative flex flex-col">
                {data.past.items.map((item, index) => {
                  const isLast = index === data.past.items.length - 1;
                  return (
                    <li
                      key={item.id}
                      className={`flex items-center gap-4 py-4 sm:py-5 ${
                        isLast ? "pb-1" : "border-b border-white/10"
                      }`}
                    >
                      <span className="relative flex h-12 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white px-2 py-1 shadow-sm sm:h-14 sm:w-32">
                        <Image
                          src={item.logo}
                          alt={`${item.name} logo`}
                          width={140}
                          height={54}
                          unoptimized
                          className="size-full object-contain p-0.5"
                        />
                      </span>
                      <p className="text-[15.5px] font-bold text-white sm:text-[17px]">
                        {item.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

