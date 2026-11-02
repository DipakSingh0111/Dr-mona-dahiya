"use client";

import Link from "next/link";
import {
  FaHeart,
  FaComments,
  FaUserMd,
  FaHandsHelping,
  FaCheckCircle,
  FaFlask,
  FaEgg,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const themes = [
  { label: "First cycle", icon: FaStar, href: "#first-cycle" },
  { label: "Complex cases", icon: FaFlask, href: "#complex-cases" },
  { label: "Clear explanations", icon: FaComments, href: "#clear-explanations" },
  { label: "Compassion", icon: FaHeart, href: "#compassion" },
  { label: "Staff support", icon: FaHandsHelping, href: "#staff-support" },
  { label: "Honesty", icon: FaCheckCircle, href: "#honesty" },
  { label: "ICSI", icon: FaFlask, href: "#icsi" },
  { label: "Embryo selection", icon: FaEgg, href: "#embryo-selection" },
  { label: "IUI", icon: FaFlask, href: "#iui" },
  { label: "Egg freezing", icon: FaEgg, href: "#egg-freezing" },
  { label: "Expertise", icon: FaUserMd, href: "#expertise" },
  {
    label: "Best IVF doctor in Noida",
    icon: FaMapMarkerAlt,
    href: "#best-noida",
  },
  {
    label: "Best IVF doctor in Ghaziabad",
    icon: FaMapMarkerAlt,
    href: "#best-ghaziabad",
  },
  {
    label: "Best IVF doctor in Delhi",
    icon: FaMapMarkerAlt,
    href: "#best-delhi",
  },
  {
    label: "Best IVF doctor in India",
    icon: FaStar,
    href: "#best-india",
  },
];

export default function ReviewsByTheme() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Real experiences, shared with care
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-[#0f2438] sm:text-[2.4rem] lg:text-[2.65rem]">
            Read reviews by theme
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Explore patient experiences and find the stories most relevant to
            your fertility journey. Click on the below links to read patient
            reviews.
          </p>
        </Reveal>

        <Stagger
          className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4"
          stagger={0.04}
        >
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <StaggerItem key={theme.label}>
                <Link
                  href={theme.href}
                  className="group flex h-full items-center gap-2.5 rounded-2xl border border-[#f5c9d6]/70 bg-white px-3.5 py-3.5 shadow-[0_4px_16px_rgba(232,62,116,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e83e74]/45 hover:shadow-[0_10px_24px_rgba(232,62,116,0.12)] sm:px-4"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#ffe8f0] text-[#e83e74] transition-colors group-hover:bg-[#e83e74] group-hover:text-white">
                    <Icon className="size-3.5" />
                  </span>
                  <span className="min-w-0 text-[12.5px] leading-snug font-semibold text-[#0f2438] sm:text-[13px]">
                    {theme.label}
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
