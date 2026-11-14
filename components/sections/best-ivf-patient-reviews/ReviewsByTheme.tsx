"use client";

import Link from "next/link";
import {
  FaHeart,
  FaCommentDots,
  FaUserMd,
  FaUsers,
  FaShieldAlt,
  FaFlask,
  FaDna,
  FaSnowflake,
  FaSyringe,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const themes = [
  { label: "First cycle", icon: FaCalendarAlt, href: "#first-cycle" },
  { label: "Complex cases", icon: FaFlask, href: "#complex-cases" },
  {
    label: "Clear explanations",
    icon: FaCommentDots,
    href: "#clear-explanations",
  },
  { label: "Compassion", icon: FaHeart, href: "#compassion" },
  { label: "Staff support", icon: FaUsers, href: "#staff-support" },
  { label: "Honesty", icon: FaShieldAlt, href: "#honesty" },
  { label: "ICSI", icon: FaSyringe, href: "#icsi" },
  { label: "Embryo selection", icon: FaDna, href: "#embryo-selection" },
  { label: "IUI", icon: FaSyringe, href: "#iui" },
  { label: "Egg freezing", icon: FaSnowflake, href: "#egg-freezing" },
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
    icon: FaGlobe,
    href: "#best-india",
  },
];

export default function ReviewsByTheme() {
  return (
    <section className="relative overflow-hidden bg-white border-y border-[#fde2ec]/70 py-6 text-ink sm:py-7 lg:py-8">
      <div className="page-container relative">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
            Genuine patient reviews
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.4rem] lg:text-[2.65rem]">
            Check out reviews by category
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-black sm:text-[15px]">
            Take a look at our patient reviews. Find topics that may pertain to
            you.
          </p>
          <p className="mt-2 text-[12px] text-rose">
            Click on the below links to read patient reviews
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
                  className="card-highlight group flex h-full items-center gap-2.5 rounded-2xl border border-[#fde2ec] bg-white px-3.5 py-3.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-rose/50 hover:bg-pink sm:px-4"
                >
                  <span className="card-badge flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-white transition-colors">
                    <Icon className="size-3.5" />
                  </span>
                  <span className="min-w-0 text-[12.5px] leading-snug font-medium text-black sm:text-[13px]">
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
