"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";

import { FaSearch } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

type Props = {
  query: string;
  onQueryChange: (value: string) => void;
};

export default function LocationsHero({ query, onQueryChange }: Props) {
  const { breadcrumb, title, subtitle, searchPlaceholder } =
    siteData.locationsPage;

  return (
    <section
      className="relative overflow-hidden pt-6 pb-7 sm:pt-7 sm:pb-8 lg:pt-8 lg:pb-9"
      style={{
        background:
          "var(--pink)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[10%] h-[420px] w-[420px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[300px] w-[300px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="page-container relative">
        <Breadcrumb className="mb-6 sm:mb-8"
          items={[
            { label: "Patient Resources", href: "/location" },
            { label: "Clinic Locations & Contact" }
          ]}
        />

        <Reveal variant="slideLeft">
          <h1 className="font-serif max-w-3xl text-[2.35rem] leading-[1.15] font-normal tracking-tight text-ink sm:text-[3.1rem] lg:text-[3.6rem]">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink/70 sm:mt-4 sm:text-[15.5px]">
            {subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-6 sm:mt-8">
          <label className="relative mx-auto block w-full max-w-3xl">
            <span className="sr-only">Search areas</span>
            <FaSearch className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400 sm:left-5 sm:size-[1.05rem]" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-full border border-rose/25 bg-white py-3.5 pr-5 pl-11 text-[14px] text-ink shadow-[0_12px_32px_rgba(0,20,80,0.25)] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-rose/45 sm:py-4 sm:pr-6 sm:pl-12 sm:text-[15px]"
            />
          </label>
        </Reveal>
      </div>
    </section>
  );
}
