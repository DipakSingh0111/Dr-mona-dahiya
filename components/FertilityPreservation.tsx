"use client";

import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function FertilityPreservation() {
  const data = siteData.fertilityPreservation;

  return (
    <section className="relative overflow-hidden bg-[#13221f] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12 xl:gap-14">
          {/* Left column: Eyebrow, Heading, Subtitle */}
          <Reveal variant="slideLeft">
            <div className="max-w-[540px]">
              <p className="text-[13px] font-semibold tracking-wide text-[#e0486c] sm:text-[14px]">
                {data.eyebrow}
              </p>

              <h2 className="mt-3 font-display text-[2.1rem] leading-[1.12] font-bold tracking-tight text-white sm:text-[2.75rem] lg:text-[3.1rem]">
                {data.title} {data.titleAccent} {data.titleEnd}
              </h2>

              <p className="mt-4 text-[14.5px] leading-relaxed text-white/65 sm:text-[15.5px]">
                {data.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Right column: 2x2 Cards Grid with Hover Effect */}
          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4"
            stagger={0.08}
          >
            {data.cards.map((card) => (
              <StaggerItem key={card.id} variant="fadeUp" className="h-full">
                <div className="group flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-[#172824]/90 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e0486c]/55 hover:bg-[#1c312c] hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
                  <h3 className="text-[16px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f46486] sm:text-[17px]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-white/60 transition-colors duration-300 group-hover:text-white/80 sm:text-[14px]">
                    {card.subtitle}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
