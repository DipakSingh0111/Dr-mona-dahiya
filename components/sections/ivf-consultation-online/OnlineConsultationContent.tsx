"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCheck,
  FaCalendarAlt,
  FaCheckCircle,
  FaGlobeAsia,
  FaDollarSign,
  FaRupeeSign,
  FaChevronDown,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const cardClass =
  "rounded-[22px] border border-white/10 bg-[#0a1f45]/70 p-5 shadow-[0_10px_28px_rgba(0,10,40,0.3)] sm:p-6";

export default function OnlineConsultationContent() {
  const {
    benefits,
    prepare,
    steps,
    why,
    fees,
    faq,
    reviews,
  } = siteData.onlineConsultationPage;

  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#061532] text-white">
      {/* Who benefits */}
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              {benefits.eyebrow}
            </p>
            <h2 className="font-serif mt-2 max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {benefits.title}
            </h2>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {benefits.items.map((item, i) => (
              <StaggerItem key={item.title} className={i === 4 ? "lg:col-span-1" : undefined}>
                <article
                  className={`${cardClass} h-full border-t-2 border-t-[#e83e74]/55`}
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-[15.5px] font-bold tracking-tight sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Prepare */}
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              {prepare.eyebrow}
            </p>
            <h2 className="font-serif mt-2 max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {prepare.title}
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] text-white/65">
              {prepare.subtitle}
            </p>
          </Reveal>

          <div className="space-y-3">
            {prepare.items.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3.5 rounded-[18px] border border-white/12 bg-[#0a1f45]/55 px-4 py-3.5 sm:px-5 sm:py-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e83e74] text-white">
                    <FaCheck className="size-3" />
                  </span>
                  <p className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <h2 className="font-serif max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {steps.title}
            </h2>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {steps.items.map((item, i) => (
              <StaggerItem key={item.title}>
                <article
                  className={`${cardClass} h-full border-t-2 border-t-[#e83e74]/55`}
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-[15.5px] font-bold sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why */}
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              {why.eyebrow}
            </p>
            <h2 className="font-serif mt-2 max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {why.title}
            </h2>
          </Reveal>

          <div className="space-y-3">
            {why.items.map((item) => (
              <Reveal key={item.title}>
                <div className="flex items-start gap-4 rounded-[20px] border border-white/12 bg-[#0a1f45]/55 px-4 py-4 sm:px-6 sm:py-5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e83e74]/20 text-[#f472b6] ring-1 ring-[#e83e74]/40">
                    <FaCheckCircle className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold">{item.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/65">
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
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              {fees.eyebrow}
            </p>
            <h2 className="font-serif mt-2 text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {fees.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {fees.items.map((item, i) => {
              const Icon = i === 0 ? FaCalendarAlt : FaGlobeAsia;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className={`${cardClass} flex items-center gap-4 overflow-visible`}>
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e83e74]/15 text-[#f472b6] ring-1 ring-[#e83e74]/40">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[16px] font-bold">{item.title}</h3>
                      <p className="mt-1 flex items-center gap-1 font-display text-[1.75rem] font-bold leading-none text-[#f9a8d4]">
                        {i === 0 ? (
                          <>
                            <FaRupeeSign
                              className="size-[0.9em] shrink-0"
                              aria-hidden
                            />
                            <span>1,000</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[0.72em] font-semibold tracking-wide">
                              US
                            </span>
                            <FaDollarSign
                              className="size-[0.85em] shrink-0"
                              aria-hidden
                            />
                            <span>25</span>
                          </>
                        )}
                      </p>
                      <p className="mt-1.5 text-[13.5px] text-white/60">
                        {item.note}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              {faq.eyebrow}
            </p>
            <h2 className="font-serif mt-2 max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {faq.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
            {(() => {
              const mid = Math.ceil(faq.items.length / 2);
              // Extra question stays on the left when count is odd
              return [faq.items.slice(0, mid), faq.items.slice(mid)];
            })().map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex w-full min-w-0 flex-col gap-3 md:gap-4"
              >
                {column.map((item, itemIndex) => {
                  const index =
                    colIndex === 0
                      ? itemIndex
                      : Math.ceil(faq.items.length / 2) + itemIndex;
                  const id = `oc-faq-${index}`;
                  const isOpen = openFaqId === id;

                  return (
                    <div
                      key={id}
                      className={`w-full min-w-0 overflow-hidden rounded-[18px] border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#e83e74]/45 bg-[#0a1f45] shadow-[0_10px_28px_rgba(232,62,116,0.12)]"
                          : "border-white/10 bg-[#0a1f45]/55 hover:border-white/20"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(id)}
                        aria-expanded={isOpen}
                        className="flex w-full min-w-0 cursor-pointer items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-5"
                      >
                        <h3 className="min-w-0 flex-1 text-[14.5px] font-bold leading-snug break-words text-white sm:text-[15px]">
                          {item.q}
                        </h3>
                        <span
                          className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-[#e83e74] text-white"
                              : "bg-white/10 text-white/70"
                          }`}
                        >
                          <FaChevronDown className="size-3.5" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.32,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="border-t border-white/10 px-4 pt-3 pb-4 text-[13.5px] leading-relaxed text-white/65 sm:px-5 sm:pt-3.5 sm:pb-5">
                              {item.a}
                            </p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              {reviews.eyebrow}
            </p>
            <h2 className="font-serif mt-2 text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.4rem]">
              {reviews.title}
            </h2>
            <p className="mt-2 text-[14px] text-white/65">{reviews.subtitle}</p>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
            stagger={0.08}
          >
            {reviews.items.map((item) => (
              <StaggerItem key={item.name}>
                <article className={`${cardClass} flex h-full flex-col`}>
                  <h3 className="text-[16px] font-bold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-white/70">
                    {item.body}
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#e83e74] text-[13px] font-bold text-white">
                      {item.initial}
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold">{item.name}</p>
                      <p className="text-[12px] text-white/50">{item.source}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-8">
            <Link
              href={reviews.cta.href}
              className="inline-flex items-center rounded-full border border-white/35 px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74] hover:text-white hover:shadow-lg hover:shadow-[#e83e74]/30 active:scale-98"
            >
              {reviews.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
