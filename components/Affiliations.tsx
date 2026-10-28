"use client";

import Image from "next/image";
import { FaHospital, FaClock, FaBuilding } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const toneMap = {
  pink: {
    box: "border-[#f9c5d4] bg-gradient-to-br from-[#fff0f5] to-[#ffe4ee]",
  },
  purple: {
    box: "border-[#ddd6fe] bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]",
  },
} as const;

type Tone = keyof typeof toneMap;

export default function Affiliations() {
  const data = siteData.affiliations;

  return (
    <section className="relative overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <div className="mb-6 flex flex-col gap-3 sm:mb-7 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3.5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e83e74] sm:w-10" />
                <span className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
                  {data.eyebrow}
                </span>
                <span className="h-px w-8 bg-[#e83e74] sm:w-10" />
              </div>
              <h2 className="font-display text-[1.9rem] leading-tight font-bold tracking-tight text-[#0f2438] sm:text-[2.35rem] lg:text-[2.65rem]">
                {data.title}{" "}
                <span className="text-[#e83e74]">{data.titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-[#64748b] sm:text-[14px] lg:text-right">
              {data.subtitle}
            </p>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6"
          stagger={0.12}
        >
          {/* Present */}
          <StaggerItem variant="slideLeft">
            <article className="relative overflow-hidden rounded-[22px] border border-[#f8d5e0] bg-[#fff8fa] p-5 shadow-[0_10px_32px_rgba(232,62,116,0.06)] sm:rounded-[24px] sm:p-7">
              {/* Soft pink blob top-right */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-8 size-44 rounded-full opacity-80 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,168,196,0.55) 0%, rgba(255,228,236,0.25) 55%, transparent 75%)",
                }}
              />
              <FaBuilding
                aria-hidden
                className="pointer-events-none absolute top-5 right-5 size-[68px] text-[#e83e74]/[0.12] sm:size-20"
              />

              <div className="relative mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f9c5d4] bg-white/90 px-3 py-1.5 shadow-sm">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#e83e74] text-white">
                    <FaHospital className="size-2.5" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] text-[#e83e74] uppercase">
                    {data.present.badge}
                  </span>
                </span>
                <h3 className="font-display text-[1.3rem] font-bold text-[#0f2438] sm:text-[1.5rem]">
                  {data.present.title}
                </h3>
              </div>

              <ul className="relative flex flex-col">
                {data.present.items.map((item, index) => {
                  const tone = toneMap[(item.tone as Tone) || "pink"];
                  const isLast = index === data.present.items.length - 1;

                  return (
                    <li
                      key={item.id}
                      className={`flex items-start gap-4 py-5 ${
                        isLast ? "pb-1" : "border-b border-[#f3d0dc]/90"
                      }`}
                    >
                      <span
                        className={`relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border sm:size-[52px] ${tone.box}`}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={36}
                          height={36}
                          className="size-8 object-contain sm:size-9"
                        />
                      </span>

                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="text-[15.5px] font-bold text-[#0f2438] sm:text-[17px]">
                          {item.name}
                        </p>

                        {"address" in item && item.address ? (
                          <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#64748b] sm:text-[13.5px]">
                            {item.address}
                          </p>
                        ) : null}

                        {"tags" in item && item.tags ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-[#f5a3bd] bg-white px-3 py-1 text-[12px] font-semibold text-[#e83e74]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          </StaggerItem>

          {/* Past */}
          <StaggerItem variant="slideRight">
            <article className="relative overflow-hidden rounded-[22px] border border-[#ddd6fe] bg-[#f7f5ff] p-5 shadow-[0_10px_32px_rgba(107,91,184,0.06)] sm:rounded-[24px] sm:p-7">
              {/* Soft purple blob top-right */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-8 size-44 rounded-full opacity-80 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.45) 0%, rgba(237,233,254,0.3) 55%, transparent 75%)",
                }}
              />
              <FaBuilding
                aria-hidden
                className="pointer-events-none absolute top-5 right-5 size-[68px] text-[#6b5bb8]/[0.14] sm:size-20"
              />

              <div className="relative mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ddd6fe] bg-white/90 px-3 py-1.5 shadow-sm">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#6b5bb8] text-white">
                    <FaClock className="size-2.5" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] text-[#6b5bb8] uppercase">
                    {data.past.badge}
                  </span>
                </span>
                <h3 className="font-display text-[1.3rem] font-bold text-[#0f2438] sm:text-[1.5rem]">
                  {data.past.title}
                </h3>
              </div>

              <ul className="relative flex flex-col">
                {data.past.items.map((item, index) => {
                  const isLast = index === data.past.items.length - 1;
                  return (
                    <li
                      key={item.id}
                      className={`flex items-center gap-4 py-4 ${
                        isLast ? "pb-1" : "border-b border-[#ddd6fe]/90"
                      }`}
                    >
                      <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-[#e9e5ff] bg-white shadow-sm sm:size-[52px]">
                        <Image
                          src={item.logo}
                          alt={`${item.name} logo`}
                          width={56}
                          height={56}
                          className="size-full object-contain p-1.5"
                        />
                      </span>
                      <p className="text-[15px] font-bold text-[#0f2438] sm:text-[16px]">
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
