"use client";

import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaYoutube,
  FaDna,
  FaMars,
  FaSnowflake,
  FaTint,
  FaClipboardList,
  FaDesktop,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

function UterusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 21v-7" />
      <path d="M9 10c0 4 6 4 6 0 0-2.8-6-2.8-6 0Z" />
      <path d="M9 8.5C6.2 5.2 3 6.5 4.2 10.2c.6 1.8 2.2 1.2 2.2.2" />
      <path d="M15 8.5c2.8-3.3 6-2 4.8 1.7-.6 1.8-2.2 1.2-2.2.2" />
    </svg>
  );
}

function CellsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <circle cx="10" cy="11" r="4.5" />
      <circle cx="15.5" cy="8.5" r="3.2" />
      <circle cx="15" cy="14.5" r="2.6" />
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  uterus: <UterusIcon className="size-[32px] sm:size-[36px]" />,
  monitor: <FaDesktop className="size-[28px] sm:size-[32px]" />,
  clipboard: <FaClipboardList className="size-[28px] sm:size-[32px]" />,
  male: <FaMars className="size-[30px] sm:size-[34px]" />,
  cells: <CellsIcon className="size-[32px] sm:size-[36px]" />,
  drop: <FaTint className="size-[28px] sm:size-[32px]" />,
  snowflake: <FaSnowflake className="size-[28px] sm:size-[32px]" />,
  dna: <FaDna className="size-[28px] sm:size-[32px]" />,
};

type Theme = {
  bg: string;
  color: string;
  glow: string;
  border: string;
  badgeBg: string;
};

const THEMES: Record<string, Theme> = {
  ivf: {
    bg: "#fff5f8",
    color: "#e83e74",
    glow: "rgba(232,62,116,0.18)",
    border: "#fcd5e2",
    badgeBg: "#ffe4ee",
  },
  iui: {
    bg: "#f4f8ff",
    color: "#2563eb",
    glow: "rgba(37,99,235,0.16)",
    border: "#d0e1fd",
    badgeBg: "#e3efff",
  },
  "follicular-ultrasound": {
    bg: "#f2fbf6",
    color: "#059669",
    glow: "rgba(5,150,105,0.16)",
    border: "#c6f2dd",
    badgeBg: "#dcfce7",
  },
  "infertility-tests": {
    bg: "#fff7ed",
    color: "#ea580c",
    glow: "rgba(234,88,12,0.16)",
    border: "#fed7aa",
    badgeBg: "#ffedd5",
  },
  "male-infertility": {
    bg: "#f0fdf4",
    color: "#0d9488",
    glow: "rgba(13,148,136,0.16)",
    border: "#bbf7d0",
    badgeBg: "#ccfbf1",
  },
  "mini-ivf": {
    bg: "#fff5f8",
    color: "#e83e74",
    glow: "rgba(232,62,116,0.16)",
    border: "#fcd5e2",
    badgeBg: "#ffe4ee",
  },
  laparoscopy: {
    bg: "#faf5ff",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.16)",
    border: "#e9d5ff",
    badgeBg: "#f3e8ff",
  },
  "low-amh": {
    bg: "#f0f9ff",
    color: "#0284c7",
    glow: "rgba(2,132,199,0.16)",
    border: "#bae6fd",
    badgeBg: "#e0f2fe",
  },
  cryopreservation: {
    bg: "#fff5f8",
    color: "#e83e74",
    glow: "rgba(232,62,116,0.16)",
    border: "#fcd5e2",
    badgeBg: "#ffe4ee",
  },
  era: {
    bg: "#f0fdfa",
    color: "#0d9488",
    glow: "rgba(13,148,136,0.16)",
    border: "#99f6e4",
    badgeBg: "#ccfbf1",
  },
  "donor-gametes": {
    bg: "#fff7ed",
    color: "#ea580c",
    glow: "rgba(234,88,12,0.16)",
    border: "#fed7aa",
    badgeBg: "#ffedd5",
  },
  pgt: {
    bg: "#faf5ff",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.16)",
    border: "#e9d5ff",
    badgeBg: "#f3e8ff",
  },
};

export default function OurServices() {
  const { eyebrow, titlePrefix, titleLocations, description, cta, items } =
    siteData.ourServices;

  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-[#f5f6f8] px-3 py-6 sm:px-4 sm:py-7 lg:pr-8 lg:pl-3 lg:py-8 xl:pl-4"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[12px] font-bold tracking-[0.16em] text-[#e83e74] uppercase sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-10 rounded-full bg-[#e83e74]" />
            </div>

            <h2 className="font-display text-[1.6rem] leading-[1.2] font-bold tracking-tight text-[#0f2038] sm:text-[2.1rem] lg:whitespace-nowrap lg:text-[2.55rem] xl:text-[2.7rem]">
              {titlePrefix}{" "}
              <span className="text-[#e83e74]">
                {titleLocations.join(" | ")}
              </span>
            </h2>

            <p className="mt-4 max-w-none text-[14.5px] leading-relaxed text-[#64748b] sm:whitespace-nowrap sm:text-[15.5px]">
              {description}
            </p>

            <a
              href={cta.href}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#e83e74] px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_rgba(232,62,116,0.28)] transition hover:bg-[#d12f63]"
            >
              {cta.label}
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/20">
                <FaArrowRight className="size-2.5" />
              </span>
            </a>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.07}
        >
          {items.map((item) => {
            const theme = THEMES[item.id] ?? THEMES.ivf;

            return (
              <StaggerItem key={item.id} variant="fadeUp" className="h-full">
                <article
                  className="group relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7"
                  style={{
                    backgroundColor: theme.bg,
                    borderColor: theme.border,
                    boxShadow: `0 10px 30px ${theme.glow}`,
                  }}
                >
                  {/* Subtle decorative gradient top bar */}
                  <div
                    aria-hidden
                    className="absolute top-0 inset-x-0 h-1.5 opacity-80"
                    style={{ backgroundColor: theme.color }}
                  />

                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className="inline-flex size-[56px] items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 sm:size-[62px]"
                        style={{
                          backgroundColor: theme.badgeBg,
                          color: theme.color,
                        }}
                      >
                        {ICONS[item.icon] ?? (
                          <UterusIcon className="size-[30px] sm:size-[34px]" />
                        )}
                      </div>

                      <span
                        className="flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          backgroundColor: theme.badgeBg,
                          color: theme.color,
                        }}
                      >
                        <FaArrowRight className="size-3" />
                      </span>
                    </div>

                    <h3 className="font-display text-[18px] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[20px]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#516174] sm:text-[14px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <a
                      href={item.videoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-[13.5px] font-semibold text-[#0f2038] transition-colors hover:text-[#ff0000]"
                    >
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-sm">
                        <FaYoutube className="size-3.5" />
                      </span>
                      <span>Watch video</span>
                    </a>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
