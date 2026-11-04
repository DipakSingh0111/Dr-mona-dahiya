"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const stories = [
  {
    title: "IVF & ICSI Success Stories",
    subtitle: "Failed cycles, male factor and tubal blockage",
    href: "/ivf-stories",
    accent: "from-rose to-rose-dark",
  },
  {
    title: "PCOS & PCOD Success Stories",
    subtitle: "Safe ovulation and OHSS-free IVF",
    href: "/success-stories#pcos",
    accent: "from-[#9d174d] to-[#db2777]",
  },
  {
    title: "IUI Success Stories",
    subtitle: "Gentle, first-line treatment within 2 to 3 cycles",
    href: "/iui-stories",
    accent: "from-[var(--blue-dark)] to-[#3b82f6]",
  },
  {
    title: "Low AMH Treatment",
    subtitle: "How low AMH is treated",
    href: "/treatments",
    accent: "from-[var(--blue-dark)] to-[var(--blue)]",
  },
];

export default function LowAmhMoreStories() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-7">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
            Browse by diagnosis
          </span>
          <h2 className="font-serif mt-1 text-[2rem] leading-[1.18] font-normal tracking-tight text-black sm:text-[2.4rem] lg:text-[2.65rem]">
            More Patient Stories
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {stories.map((story) => (
            <StaggerItem key={story.title}>
              <Link
                href={story.href}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#fbcfe0] bg-gradient-to-br p-5 text-white shadow-[0_10px_28px_rgba(0,20,60,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(232,62,116,0.22)] ${story.accent}`}
              >
                <div>
                  <h3 className="text-[15px] leading-snug font-bold">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/85">
                    {story.subtitle}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-end">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-200 group-hover:bg-white group-hover:text-black">
                    <FaArrowRight className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
