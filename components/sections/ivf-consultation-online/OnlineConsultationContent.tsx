"use client";

import Link from "next/link";
import { FaCheck, FaCalendarAlt } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/treatment";

type BenefitItem = {
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
};

type PrepareItem = {
  label: string;
  text: string;
};

type StepItem = {
  title: string;
  bullets: string[];
};

type FaqItem = {
  q: string;
  a: string;
  linkLabel?: string;
  linkHref?: string;
};

const cardClass =
  "rounded-[22px] border border-rose/20 bg-white p-5 shadow-[0_6px_24px_rgba(232,62,116,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(232,62,116,0.14)] sm:p-6";

export default function OnlineConsultationContent() {
  const { benefits, prepare, steps, why, fees, faq } =
    siteData.onlineConsultationPage;

  const benefitItems = benefits.items as BenefitItem[];
  const prepareItems = prepare.items as PrepareItem[];
  const stepItems = steps.items as StepItem[];
  const faqItems = faq.items as FaqItem[];

  const faqMid = Math.ceil(faqItems.length / 2);
  const faqColumns = [faqItems.slice(0, faqMid), faqItems.slice(faqMid)];

  return (
    <div className="bg-pink text-ink">
      {/* Who Benefits */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {benefits.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 max-w-3xl text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {benefits.title}
            </h2>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            stagger={0.06}
          >
            {benefitItems.map((item, i) => (
              <StaggerItem key={item.title} className="h-full">
                <article
                  className={`${cardClass} flex h-full flex-col border-t-2 border-t-rose`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose text-[14px] font-bold text-white shadow-sm">
                      {i + 1}
                    </span>
                    <h3 className="font-serif text-[15.5px] leading-snug font-semibold tracking-tight text-ink sm:text-[16.5px]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14px]">
                    {item.description}
                    {item.linkLabel && item.linkHref ? (
                      <>
                        {" "}
                        {item.linkHref.startsWith("#") ? (
                          <a
                            href={item.linkHref}
                            className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
                          >
                            {item.linkLabel}
                          </a>
                        ) : (
                          <Link
                            href={item.linkHref}
                            className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
                          >
                            {item.linkLabel}
                          </Link>
                        )}
                      </>
                    ) : null}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What to Prepare */}
      <section id="what-to-prepare" className="scroll-mt-28 py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {prepare.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 max-w-4xl text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {prepare.title}
            </h2>
          </Reveal>

          <div className="space-y-3.5">
            {prepareItems.map((item) => (
              <Reveal key={item.label}>
                <div className="flex items-start gap-3.5 rounded-[18px] border border-rose/20 bg-white px-4 py-4 shadow-[0_4px_18px_rgba(232,62,116,0.06)] sm:px-5 sm:py-4.5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-rose text-white shadow-xs">
                    <FaCheck className="size-2.5" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-ink/85 sm:text-[14.5px]">
                    <strong className="font-semibold text-ink">
                      {item.label}
                    </strong>{" "}
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {steps.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 max-w-3xl text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {steps.title}
            </h2>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            stagger={0.06}
          >
            {stepItems.map((item, i) => (
              <StaggerItem key={item.title} className="h-full">
                <article
                  className={`${cardClass} flex h-full flex-col border-t-2 border-t-rose`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose text-[14px] font-bold text-white shadow-sm">
                      {i + 1}
                    </span>
                    <h3 className="font-serif text-[15.5px] leading-snug font-semibold tracking-tight text-ink sm:text-[16.5px]">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="mt-3.5 ml-4 space-y-2.5 border-l border-rose/35 pl-3.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative text-[13.5px] leading-relaxed text-ink/80 before:absolute before:top-2.5 before:-left-3.5 before:h-px before:w-2.5 before:bg-rose/45 sm:text-[14px]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Book */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {why.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 max-w-4xl text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {why.title}
            </h2>
          </Reveal>

          <div className="space-y-3.5">
            {why.items.map((item) => (
              <Reveal key={item.title}>
                <div className="flex items-start gap-4 rounded-[20px] border border-rose/20 bg-white px-4 py-4 shadow-[0_4px_18px_rgba(232,62,116,0.06)] sm:px-6 sm:py-5">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose text-white shadow-sm">
                    <FaCheck className="size-3.5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15.5px] font-bold text-ink sm:text-[16.5px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {fees.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {fees.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {fees.items.map((item, i) => {
              const Icon = i === 0 ? FaCalendarAlt : FaCheck;
              return (
                <Reveal key={item.title} delay={i * 0.06} className="h-full">
                  <article
                    className={`${cardClass} flex h-full flex-col border-t-2 border-t-rose`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose text-white shadow-sm">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <h3 className="font-serif text-[16.5px] font-semibold text-ink sm:text-[17.5px]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="page-container relative">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {faq.eyebrow}
            </p>
            <h2 className="font-serif mt-1.5 max-w-3xl text-[1.85rem] leading-tight font-normal tracking-tight text-ink sm:text-[2.35rem]">
              {faq.title}
            </h2>
          </Reveal>

          <FaqAccordion
            leftItems={faqColumns[0].map((item) => ({
              question: item.q,
              answer: (
                <>
                  {item.a}
                  {item.linkLabel && item.linkHref ? (
                    <>
                      {" "}
                      <Link
                        href={item.linkHref}
                        className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
                      >
                        {item.linkLabel}
                      </Link>
                    </>
                  ) : null}
                </>
              ),
            }))}
            rightItems={faqColumns[1].map((item) => ({
              question: item.q,
              answer: (
                <>
                  {item.a}
                  {item.linkLabel && item.linkHref ? (
                    <>
                      {" "}
                      <Link
                        href={item.linkHref}
                        className="font-semibold text-rose underline underline-offset-2 transition-colors hover:text-rose-dark"
                      >
                        {item.linkLabel}
                      </Link>
                    </>
                  ) : null}
                </>
              ),
            }))}
          />
        </div>
      </section>
    </div>
  );
}
