"use client";

import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const diagnosisGradients = [
  "from-rose to-rose-dark",
  "from-blue-dark to-blue",
  "from-rose to-[#a02050]",
  "from-blue to-blue-dark",
];

export default function SuccessStoriesContent() {
  const { diagnosis, trust, journey } = siteData.successStoriesPage;

  return (
    <div className="bg-pink text-ink">
      {/* 1. Explore Patient Stories by Diagnosis */}
      <section
        id="stories-by-diagnosis"
        className="py-6 sm:py-8 lg:py-10"
      >
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {diagnosis.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {diagnosis.title}
            </h2>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            stagger={0.06}
          >
            {diagnosis.items.map((item, idx) => {
              const href =
                "href" in item && typeof item.href === "string"
                  ? item.href
                  : `#${item.id}`;
              const gradient = diagnosisGradients[idx % diagnosisGradients.length];

              return (
                <StaggerItem key={item.id} className="h-full">
                  <Link
                    href={href}
                    id={item.id === "pcos" ? "pcos" : undefined}
                    className={`group flex h-full flex-col justify-between rounded-[22px] border border-white/20 bg-gradient-to-br ${gradient} p-5 text-white shadow-[0_8px_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(232,62,116,0.22)] sm:p-6`}
                  >
                    <div>
                      <h3 className="text-[16px] font-bold leading-snug sm:text-[17px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-end">
                      <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                        <FaArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* 2. Why Couples Trust Dr. Mona Dahiya */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {trust.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {trust.title}
            </h2>
          </Reveal>

          <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.08}>
            {trust.items.map((item) => (
              <StaggerItem key={item.title}>
                <article className="flex w-full items-start gap-4 rounded-[20px] border border-rose/20 bg-white p-5 shadow-[0_4px_18px_rgba(232,62,116,0.06)] transition-all duration-300 hover:border-rose/40 hover:shadow-[0_8px_24px_rgba(232,62,116,0.12)] sm:p-6">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose text-white shadow-sm sm:size-11 sm:rounded-2xl">
                    <FaCheck className="size-3.5 sm:size-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15.5px] font-bold tracking-tight text-ink sm:text-[16.5px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 3. How Every Journey Begins */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {journey.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {journey.title}
            </h2>
            <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
              {journey.subtitle}
            </p>
          </Reveal>

          <div className="space-y-3.5">
            {journey.items.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3.5 rounded-[18px] border border-rose/20 bg-white px-5 py-4 shadow-[0_4px_18px_rgba(232,62,116,0.06)] sm:px-6 sm:py-4.5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-rose text-white shadow-xs">
                    <FaCheck className="size-2.5" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed font-medium text-ink sm:text-[14.5px]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
