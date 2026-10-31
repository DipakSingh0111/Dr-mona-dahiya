"use client";

import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function LocationsCityCards() {
  const { cities } = siteData.locationsPage;

  const scrollToCity = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-[#071a3a] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            stagger={0.08}
          >
            {cities.map((city) => (
              <StaggerItem key={city.id}>
                <button
                  type="button"
                  onClick={() => scrollToCity(city.id)}
                  className="group flex h-full w-full flex-col rounded-[22px] border border-white/12 bg-[#0b2450]/75 p-5 text-left shadow-[0_10px_28px_rgba(0,12,40,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/45 hover:shadow-[0_16px_36px_rgba(232,62,116,0.18)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[1.65rem] font-semibold tracking-tight text-white sm:text-[1.85rem]">
                      {city.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-[#e83e74]/40 bg-[#e83e74]/15 px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#f9a8d4]">
                      {city.areaCount} areas
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-white/60 sm:text-[13.5px]">
                    {city.address}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#f472b6] transition-colors group-hover:text-white">
                    See areas
                    <span aria-hidden className="text-[15px]">
                      ↓
                    </span>
                  </span>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
