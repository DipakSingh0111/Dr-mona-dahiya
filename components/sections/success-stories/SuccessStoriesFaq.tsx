"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

export default function SuccessStoriesFaq() {
  const { faq } = siteData.successStoriesPage;
  const [openId, setOpenId] = useState<string | null>(null);
  const mid = Math.ceil(faq.items.length / 2);
  const columns = [faq.items.slice(0, mid), faq.items.slice(mid)];

  return (
    <section className="bg-[#061532] px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-7 sm:mb-9">
          <p className="text-[12px] font-semibold tracking-wide text-[#e83e74] sm:text-[13px]">
            {faq.eyebrow}
          </p>
          <h2 className="font-serif mt-2 max-w-3xl text-[1.75rem] leading-tight font-normal tracking-tight sm:text-[2.2rem] lg:text-[2.45rem]">
            {faq.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="flex w-full min-w-0 flex-col gap-3 md:gap-4"
            >
              {column.map((item, itemIndex) => {
                const index =
                  colIndex === 0 ? itemIndex : mid + itemIndex;
                const id = `ss-faq-${index}`;
                const isOpen = openId === id;

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
                      onClick={() =>
                        setOpenId((prev) => (prev === id ? null : id))
                      }
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
  );
}
