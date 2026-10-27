"use client";

import Image from "next/image";
import { FaHospital, FaClock, FaBuilding } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const toneMap = {
  pink: {
    box: "border-[#f7c5d3] bg-[#fff5f8]",
  },
  purple: {
    box: "border-[#d9d0f5] bg-[#f6f3ff]",
  },
} as const;

type Tone = keyof typeof toneMap;

export default function Affiliations() {
  const data = siteData.affiliations;

  return (
    <section className="relative overflow-hidden bg-white px-3 py-14 sm:px-4 sm:py-20 lg:pr-8 lg:pl-3 xl:pl-4">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e83e74]" />
                <span className="text-[12px] font-semibold tracking-wide text-[#e83e74]">
                  {data.eyebrow}
                </span>
                <span className="h-px w-8 bg-[#e83e74]" />
              </div>
              <h2 className="font-display text-[1.9rem] leading-tight font-bold tracking-tight text-[#0f2438] sm:text-[2.35rem] lg:text-[2.6rem]">
                {data.title}{" "}
                <span className="text-[#e83e74]">{data.titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-zinc-500 sm:text-[14px] lg:text-right">
              {data.subtitle}
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6" stagger={0.12}>
          {/* Present */}
          <StaggerItem variant="slideLeft">
          <article className="relative overflow-hidden rounded-[24px] border border-[#f8d5e0]/80 bg-[#fff5f8] p-5 sm:p-7">
            <FaBuilding
              aria-hidden
              className="pointer-events-none absolute top-5 right-5 size-16 text-[#e83e74]/10 sm:size-20"
            />

            <div className="relative mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f06292] to-[#e83e74] px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase">
                <FaHospital className="size-3" />
                {data.present.badge}
              </span>
              <h3 className="font-display text-[1.35rem] font-bold text-[#0f2438] sm:text-[1.5rem]">
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
                      isLast ? "pb-1" : "border-b border-[#f0c9d6]/70"
                    }`}
                  >
                    <span
                      className={`relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border sm:size-[52px] ${tone.box}`}
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
                      <p className="text-[16px] font-bold text-[#0f2438] sm:text-[17px]">
                        {item.name}
                      </p>

                      {"address" in item && item.address ? (
                        <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500 sm:text-[13.5px]">
                          {item.address}
                        </p>
                      ) : null}

                      {"tags" in item && item.tags ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#f0a8bc] bg-white px-3 py-1 text-[12px] font-semibold text-[#e83e74]"
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
          <article className="relative overflow-hidden rounded-[24px] border border-[#ddd6f5]/80 bg-[#f4f2ff] p-5 sm:p-7">
            <FaBuilding
              aria-hidden
              className="pointer-events-none absolute top-5 right-5 size-16 text-[#6b5bb8]/12 sm:size-20"
            />

            <div className="relative mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b7fd4] to-[#6b5bb8] px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase">
                <FaClock className="size-3" />
                {data.past.badge}
              </span>
              <h3 className="font-display text-[1.35rem] font-bold text-[#0f2438] sm:text-[1.5rem]">
                {data.past.title}
              </h3>
            </div>

            <ul className="relative flex flex-col gap-3.5">
              {data.past.items.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(80,70,140,0.06)] sm:px-5 sm:py-4">
                    <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-50 sm:size-14">
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        width={56}
                        height={56}
                        className="size-full object-contain p-1"
                      />
                    </span>
                    <p className="text-[15px] font-bold text-[#0f2438] sm:text-[16px]">
                      {item.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
