"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";

type FaqItem = { q: string; a: string };

function FaqAccordion({
  items,
  sectionId,
}: {
  items: FaqItem[];
  sectionId: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className="flex w-full min-w-0 flex-col gap-3 md:gap-4"
        >
          {column.map((item, itemIndex) => {
            const index =
              colIndex === 0 ? itemIndex : mid + itemIndex;
            const id = `${sectionId}-${index}`;
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className={`w-full min-w-0 overflow-hidden rounded-[18px] border transition-colors duration-300 ${
                  isOpen
                    ? "border-rose/45 bg-white shadow-[0_10px_28px_rgba(232,62,116,0.12)]"
                    : "border-[#fde2ec] bg-white hover:border-[#fbcfe0]"
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
                  <h3 className="min-w-0 flex-1 text-[14.5px] font-bold leading-snug break-words text-black sm:text-[15px]">
                    {item.q}
                  </h3>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-rose text-white"
                        : "bg-[#fff0f5] text-black"
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
                      <p className="border-t border-[#fde2ec] px-4 pt-3 pb-4 text-[13.5px] leading-relaxed text-black sm:px-5 sm:pt-3.5 sm:pb-5">
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
  );
}

export default function IvfFaqsContent() {
  const { categories, sections } = siteData.ivfFaqsPage;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-pink text-black">
      {/* Categories */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Browse by topic
            </p>
            <h2 className="font-serif mt-2 text-[1.9rem] leading-tight font-bold tracking-tight text-black sm:text-[2.4rem]">
              Choose a Question Category
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollTo(cat.id)}
                className="group flex h-full flex-col rounded-[20px] border border-[#fde2ec] bg-white p-5 text-left shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/45 hover:shadow-[0_14px_32px_rgba(232,62,116,0.15)]"
              >
                <h3 className="font-serif text-[1.15rem] font-semibold leading-snug text-black sm:text-[1.25rem]">
                  {cat.label}
                </h3>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-black">
                  {cat.meta}
                </p>
                <FaArrowRight className="mt-4 size-3.5 text-rose transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-36 py-10 sm:py-12 lg:py-14"
        >
          <div className="page-container relative">
            <Reveal className="mb-7 sm:mb-9">
              <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
                {section.categoryLabel}
              </p>
              <h2 className="font-serif mt-2 max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight text-black sm:text-[2.4rem]">
                {section.title}
              </h2>
            </Reveal>

            <FaqAccordion sectionId={section.id} items={section.items} />
          </div>
        </section>
      ))}
    </div>
  );
}
