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
  const { title, subtitle, searchPlaceholder } = siteData.locationsPage;

  return (
    <section
      className="relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-9 lg:pb-11"
      style={{
        background: "var(--pink)",
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
        <Breadcrumb className="mb-5 sm:mb-6" items={[{ label: "Locations" }]} />

        <Reveal variant="slideLeft">
          <h1 className="font-serif max-w-3xl text-[2.25rem] leading-[1.15] font-normal tracking-tight text-ink sm:text-[3rem] lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink/75 sm:mt-3.5 sm:text-[15px]">
            {subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-5 sm:mt-6">
          <label className="relative block w-full max-w-lg">
            <span className="sr-only">Search areas</span>
            <FaSearch className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400 sm:left-5" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-full border border-rose/25 bg-white py-3 pr-5 pl-11 text-[14px] text-ink shadow-[0_8px_24px_rgba(232,62,116,0.08)] outline-none placeholder:text-slate-400 focus:border-rose/50 focus:ring-2 focus:ring-rose/30 sm:py-3.5 sm:pr-6 sm:pl-12 sm:text-[14.5px]"
            />
          </label>
        </Reveal>
      </div>
    </section>
  );
}
