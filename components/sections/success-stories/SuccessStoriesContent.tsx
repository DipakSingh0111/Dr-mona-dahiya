"use client";

import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const diagnosisAccent = {
  rose: {
    card: "border-rose/35 bg-gradient-to-br from-rose to-rose-dark",
  },
  navy: {
    card: "border-blue/40 bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue)]",
  },
  magenta: {
    card: "border-rose/35 bg-gradient-to-br from-[#9d174d] to-[#db2777]",
  },
  blue: {
    card: "border-[#60a5fa]/40 bg-gradient-to-br from-[var(--blue-dark)] to-[#3b82f6]",
  },
} as const;

export default function SuccessStoriesContent() {
  const { diagnosis, stories, trust, journey } = siteData.successStoriesPage;

  return (
    <>
      <section
        id="stories-by-diagnosis"
        className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] py-6 sm:py-7 lg:py-8"
      >
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {diagnosis.eyebrow}
            </p>
            <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
              {diagnosis.title}
            </h2>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            stagger={0.06}
          >
            {diagnosis.items.map((item) => {
              const accent =
                diagnosisAccent[item.accent as keyof typeof diagnosisAccent];
              const href =
                "href" in item && typeof item.href === "string"
                  ? item.href
                  : `#${item.id}`;
              return (
                <StaggerItem key={item.id}>
                  <Link
                    href={href}
                    id={item.id === "pcos" ? "pcos" : undefined}
                    className={`group flex h-full flex-col justify-between rounded-[20px] border p-5 text-white shadow-[0_10px_28px_rgba(0,10,40,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(232,62,116,0.2)] sm:p-6 ${accent.card}`}
                  >
                    <div>
                      <h3 className="text-[16px] font-bold leading-snug sm:text-[17px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                        {item.description}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex size-8 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:bg-white/30">
                      <FaArrowRight className="size-3" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section
        id="patient-stories"
        className="relative overflow-hidden bg-[#f8fafc] py-6 sm:py-7 lg:py-8"
      >
        <div className="page-container relative">
          <Reveal className="mb-7 max-w-3xl sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {stories.eyebrow}
            </p>
            <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
              {stories.title}
            </h2>
            <p className="mt-2 max-w-2xl text-[13.5px] text-black sm:text-[14.5px]">
              {stories.subtitle}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {stories.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 lg:gap-5">
                {column.map((item) => (
                  <article
                    key={`${item.name}-${item.body.slice(0, 24)}`}
                    className="flex flex-col rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-[0_8px_28px_rgba(15,36,56,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/35 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)] sm:p-6"
                  >
                    {item.title ? (
                      <h3 className="text-[15.5px] font-bold tracking-tight text-black sm:text-[16px]">
                        {item.title}
                      </h3>
                    ) : null}
                    <p
                      className={`flex-1 text-[13.5px] leading-relaxed text-black ${
                        item.title ? "mt-3" : ""
                      }`}
                    >
                      {item.body}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[#fde2ec] pt-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white">
                        {item.initial}
                      </span>
                      <div>
                        <p className="text-[13.5px] font-bold text-black">
                          {item.name}
                        </p>
                        <p className="text-[12px] text-black">{item.source}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>

          <Reveal className="mt-8">
            <Link
              href={stories.cta.href}
              className="inline-flex items-center rounded-full border border-rose/40 bg-white px-6 py-2.5 text-[13.5px] font-semibold text-black transition-all duration-200 hover:border-rose hover:bg-rose-dark hover:text-white hover:shadow-lg hover:shadow-rose/25 active:scale-98"
            >
              {stories.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pink py-6 text-ink sm:py-7 lg:py-8">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {trust.eyebrow}
            </p>
            <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
              {trust.title}
            </h2>
          </Reveal>

          <Stagger className="flex flex-col gap-3.5 sm:gap-4" stagger={0.08}>
            {trust.items.map((item) => (
              <StaggerItem key={item.title}>
                <article className="flex w-full items-center gap-4 rounded-[18px] border border-rose/25 bg-white/80 px-4 py-4 shadow-[0_8px_24px_rgba(0,10,40,0.28)] transition-colors hover:border-rose/45 sm:gap-5 sm:rounded-[20px] sm:px-5 sm:py-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-rose to-rose-dark text-white shadow-[0_8px_20px_rgba(232,62,116,0.35)] sm:size-12 sm:rounded-[16px]">
                    <FaCheck className="size-4 sm:size-[17px]" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold tracking-tight text-black sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] py-6 sm:py-7 lg:py-8">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {journey.eyebrow}
            </p>
            <h2 className="font-serif mt-2 text-[1.75rem] leading-tight font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
              {journey.title}
            </h2>
            <p className="mt-2 max-w-2xl text-[13.5px] text-black sm:text-[14.5px]">
              {journey.subtitle}
            </p>
          </Reveal>

          <div className="space-y-3">
            {journey.items.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/90 bg-white px-4 py-3.5 shadow-sm sm:px-5 sm:py-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue text-white ring-1 ring-blue/20">
                    <FaCheck className="size-3" />
                  </span>
                  <p className="text-[14px] leading-relaxed text-black sm:text-[15px]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
