"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IvfFaqsReviews() {
  const { reviews } = siteData.ivfFaqsPage;

  return (
    <section className="relative overflow-hidden bg-pink py-6 text-black sm:py-7 lg:py-8">
      <div className="page-container relative">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {reviews.eyebrow}
          </p>
          <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            {reviews.title}
          </h2>
          <p className="mt-2 text-[13.5px] text-black sm:text-[14.5px]">
            {reviews.subtitle}
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          stagger={0.08}
        >
          {reviews.items.map((item) => (
            <StaggerItem key={item.name} className="h-full">
              <article className="flex h-full flex-col rounded-[22px] border border-[#fde2ec] bg-white p-5 shadow-[0_10px_28px_rgba(232,62,116,0.06)] sm:p-6">
                {"title" in item && item.title ? (
                  <h3 className="text-[15.5px] font-bold tracking-tight text-black sm:text-[16px]">
                    {item.title}
                  </h3>
                ) : null}
                <p
                  className={`flex-1 text-[13.5px] leading-relaxed text-black ${
                    "title" in item && item.title ? "mt-3" : ""
                  }`}
                >
                  {item.body}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white">
                    {item.initial}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-black">{item.name}</p>
                    <p className="text-[12px] text-black/70">{item.source}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8">
          <Link
            href={reviews.cta.href}
            className="inline-flex items-center rounded-full border border-rose/40 bg-white px-6 py-2.5 text-[13.5px] font-semibold text-black transition-all duration-200 hover:border-rose hover:bg-rose hover:text-white active:scale-98"
          >
            {reviews.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
