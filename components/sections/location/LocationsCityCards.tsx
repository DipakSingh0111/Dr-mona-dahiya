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
    <section className="relative overflow-hidden bg-pink px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
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
                  className="group flex h-full w-full flex-col rounded-[22px] border border-[#fde2ec] bg-white p-5 text-left shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/45 hover:shadow-[0_16px_36px_rgba(232,62,116,0.12)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[1.65rem] font-semibold tracking-tight text-ink sm:text-[1.85rem]">
                      {city.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-rose/40 bg-rose/15 px-2.5 py-1 text-[11px] font-bold tracking-wide text-rose">
                      {city.areaCount} areas
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                    {city.address}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-rose transition-colors group-hover:text-rose-dark">
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
