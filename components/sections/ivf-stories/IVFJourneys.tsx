"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export default function IVFJourneys() {
  const { eyebrow, title, items } = siteData.ivfStoriesPage.patientStories;

  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12 border-t border-[#fde2ec]">
      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-tight font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {title}
          </h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          stagger={0.05}
        >
          {items.map((item) => (
            <StaggerItem key={item.num} variant="scaleIn" className="h-full">
              <article className="card-highlight group relative flex h-full flex-col justify-start rounded-[22px] border border-[#fde2ec] bg-white p-5 shadow-[0_4px_16px_rgba(232,62,116,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="card-badge flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[12px] font-bold text-white shadow-xs">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-[15px] font-bold leading-snug tracking-tight text-ink sm:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  {item.story}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
