"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import siteData from "@/data/site.json";

export default function WhyTrustComplexIVF() {
  const { eyebrow, title, items } = siteData.ivfStoriesPage.whyTrust;

  return (
    <section className="relative overflow-hidden bg-pink py-8 sm:py-10 lg:py-12 border-t border-[#fde2ec]">
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-tight font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {title}
          </h2>
        </Reveal>

        <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.06}>
          {items.map((item) => (
            <StaggerItem key={item.title} variant="fadeUp">
              <div className="group flex flex-row items-start gap-3.5 rounded-[22px] border border-[#fde2ec] bg-white p-5 shadow-[0_4px_16px_rgba(232,62,116,0.04)] transition-all duration-300 hover:border-rose/40 hover:shadow-[0_12px_28px_rgba(232,62,116,0.1)] sm:gap-4.5 sm:p-5.5">
                <div className="signature-tick mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[14px] text-white">
                  <FaCheck className="size-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-[16px] font-bold tracking-tight text-ink sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
