import type { ReactNode } from "react";
import Image from "next/image";
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

function UterusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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
      strokeWidth="1.7"
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
  uterus: <UterusIcon className="size-[26px]" />,
  monitor: <FaDesktop className="size-[22px]" />,
  clipboard: <FaClipboardList className="size-[22px]" />,
  male: <FaMars className="size-[23px]" />,
  cells: <CellsIcon className="size-[26px]" />,
  drop: <FaTint className="size-[22px]" />,
  snowflake: <FaSnowflake className="size-[22px]" />,
  dna: <FaDna className="size-[22px]" />,
};

type Theme = { bg: string; color: string; glow: string };

const THEMES: Record<string, Theme> = {
  ivf: { bg: "#ffe4ec", color: "#e83e74", glow: "rgba(232,62,116,0.32)" },
  iui: { bg: "#e8f1ff", color: "#3b82f6", glow: "rgba(59,130,246,0.28)" },
  "follicular-ultrasound": {
    bg: "#e7f8ef",
    color: "#10b981",
    glow: "rgba(16,185,129,0.28)",
  },
  "infertility-tests": {
    bg: "#fff1e6",
    color: "#f97316",
    glow: "rgba(249,115,22,0.28)",
  },
  "male-infertility": {
    bg: "#e7f8ef",
    color: "#059669",
    glow: "rgba(5,150,105,0.28)",
  },
  "mini-ivf": { bg: "#ffe4ec", color: "#e83e74", glow: "rgba(232,62,116,0.28)" },
  laparoscopy: {
    bg: "#f3e8ff",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.28)",
  },
  "low-amh": { bg: "#e8f1ff", color: "#3b82f6", glow: "rgba(59,130,246,0.26)" },
  cryopreservation: {
    bg: "#ffe4ec",
    color: "#e83e74",
    glow: "rgba(96,165,250,0.3)",
  },
  era: { bg: "#e7f8ef", color: "#14b8a6", glow: "rgba(20,184,166,0.28)" },
  "donor-gametes": {
    bg: "#fff1e6",
    color: "#f97316",
    glow: "rgba(249,115,22,0.26)",
  },
  pgt: { bg: "#f3e8ff", color: "#8b5cf6", glow: "rgba(139,92,246,0.3)" },
};

export default function OurServices() {
  const { eyebrow, titlePrefix, titleLocations, description, cta, items } =
    siteData.ourServices;

  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-[#f5f6f8] px-3 py-14 sm:px-4 sm:py-16 lg:pr-8 lg:pl-3 lg:py-20 xl:pl-4"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.16em] text-[#e83e74] uppercase sm:text-[13px]">
              {eyebrow}
            </span>
            <span className="h-[2px] w-10 rounded-full bg-[#e83e74]" />
          </div>

          <h2 className="font-display text-[1.85rem] leading-[1.2] font-bold tracking-tight text-[#0f2038] sm:text-[2.35rem] lg:text-[2.7rem]">
            {titlePrefix}{" "}
            <span className="text-[#e83e74]">
              {titleLocations.join(" | ")}
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-[#64748b] sm:text-[15.5px]">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => {
            const theme = THEMES[item.id] ?? THEMES.ivf;

            return (
              <article
                key={item.id}
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] bg-white p-5 shadow-[0_10px_30px_rgba(15,32,56,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,32,56,0.1)] sm:min-h-[280px] sm:p-6"
              >
                <div className="relative z-10 flex flex-1 flex-col pr-[8.5rem] sm:pr-36">
                  <div
                    className="mb-4 inline-flex size-14 items-center justify-center rounded-full sm:size-[60px]"
                    style={{ backgroundColor: theme.bg, color: theme.color }}
                  >
                    {ICONS[item.icon] ?? (
                      <UterusIcon className="size-[26px]" />
                    )}
                  </div>

                  <h3 className="font-display text-[17px] leading-snug font-bold tracking-tight text-[#0f2038] sm:text-[18.5px]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-[220px] text-[13px] leading-relaxed text-[#64748b] sm:text-[13.5px]">
                    {item.description}
                  </p>

                  <a
                    href={item.videoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[13px] font-semibold text-[#0f2038] transition hover:text-[#e83e74]"
                  >
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-sm">
                      <FaYoutube className="size-3" />
                    </span>
                    Watch video
                  </a>
                </div>

                {/* Soft colored glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 bottom-0 h-[200px] w-[200px] rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${theme.glow} 0%, transparent 68%)`,
                  }}
                />

                {/* Clear illustration with light edge fade only */}
                <div
                  className="pointer-events-none absolute right-0 bottom-0 h-[175px] w-[175px] sm:h-[200px] sm:w-[200px]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 80% 80% at 70% 70%, #000 45%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0.35) 78%, transparent 92%)",
                    maskImage:
                      "radial-gradient(ellipse 80% 80% at 70% 70%, #000 45%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0.35) 78%, transparent 92%)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-contain object-right-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
