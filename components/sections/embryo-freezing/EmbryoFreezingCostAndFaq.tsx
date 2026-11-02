"use client";

import { useState, type ReactNode } from "react";
import { FaCheck, FaChevronDown, FaPills } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 ${
        isOpen
          ? "border-[#e83e74]/45 shadow-[0_0_24px_rgba(232,62,116,0.12)]"
          : "border-white/10 hover:border-[#0047ca]/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-5.5"
      >
        <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
          {item.question}
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-[#e83e74]" : ""
          }`}
        >
          <FaChevronDown className="size-3" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:px-5.5 sm:text-[13.5px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

const costCards = [
  {
    iconType: "check" as const,
    title: "Vitrification",
    description: "Freezing of each embryo or batch.",
  },
  {
    iconType: "pills" as const,
    title: "Annual storage",
    description: "Charge for each storage year.",
  },
  {
    iconType: "check" as const,
    title: "Embryo warming",
    description: "At the time of transfer.",
  },
  {
    iconType: "check" as const,
    title: "Genetic testing (optional)",
    description: "If biopsy is planned.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How long can embryos be stored?",
    answer:
      "Embryos can be stored for many years, with timelines set by law and by your consent.",
  },
  {
    question: "Do frozen embryos work as well as fresh?",
    answer:
      "In many patients, frozen transfers do equally well and sometimes better. Your doctor will explain your case.",
  },
  {
    question: "What happens to unused embryos?",
    answer:
      "You decide: continue storage, donate within legal norms or discontinue, with written consent.",
  },
  {
    question: "Is embryo freezing safe for the baby?",
    answer:
      "Current evidence for vitrified embryos is reassuring. Your doctor will go through the details.",
  },
  {
    question: "What is the success rate of pregnancy using frozen embryos?",
    answer: (
      <>
        <p>
          Frozen Embryo Transfer (FET) achieves live birth rates equal to or higher than
          fresh transfers, with post-thaw survival rates exceeding{" "}
          <strong className="text-white">95% to 98%</strong>. Live birth rates per
          transfer by age group:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong className="text-white">Under 35:</strong> ~50%–60%
          </li>
          <li>
            <strong className="text-white">35–37:</strong> ~40%–45%
          </li>
          <li>
            <strong className="text-white">38–40:</strong> ~25%–35%
          </li>
          <li>
            <strong className="text-white">Over 40:</strong> ~10%–15% (rises to{" "}
            <strong className="text-white">60%+</strong> across all ages when transferring
            a PGT-A confirmed euploid blastocyst).
          </li>
        </ul>
        <p className="mt-2">
          FET also eliminates ovarian hyperstimulation syndrome (OHSS) risks by avoiding
          fresh stimulation during implantation.
        </p>
      </>
    ),
  },
  {
    question: "How long can frozen embryos remain viable in storage?",
    answer: (
      <>
        Biologically, embryos stored in liquid nitrogen at{" "}
        <strong className="text-white">-196°C</strong> remain viable indefinitely because
        metabolic activity is suspended. Healthy live births have occurred from embryos
        stored for over <strong className="text-white">20 years</strong>. Under India&apos;s{" "}
        <strong className="text-white">ART Act 2021 (Section 23)</strong>, statutory embryo
        storage is permitted for up to <strong className="text-white">10 years</strong>,
        after which embryos are allowed to perish or be donated to accredited research with
        patient consent.
      </>
    ),
  },
  {
    question: "What is the difference between embryo freezing and egg freezing?",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-white">Cellular Resilience:</strong> An unfertilised egg
          is a single, water-dense cell with an 85%–90% thaw survival rate. A Day 5
          blastocyst contains 100–150 cells, achieving{" "}
          <strong className="text-white">&gt;95% thaw survival</strong>.
        </li>
        <li>
          <strong className="text-white">Diagnostic Certainty:</strong> Egg freezing
          preserves unverified potential. Embryo freezing confirms fertilization, cleavage
          rates, and blastocyst development beforehand.
        </li>
      </ul>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does embryo freezing and long-term storage cost?",
    answer: (
      <>
        <p>Costs divide into three transparent phases:</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Initial Clinical Cycle:</strong> Ovarian
            stimulation, egg retrieval, fertilization (IVF/ICSI), and blastocyst
            vitrification.
          </li>
          <li>
            <strong className="text-white">Annual Storage Maintenance:</strong> Liquid
            nitrogen upkeep and cryo-tank monitoring, billed annually or in multi-year
            blocks.
          </li>
          <li>
            <strong className="text-white">Thaw &amp; Transfer (FET):</strong> Endometrial
            preparation, laboratory embryo warming, and ultrasound-guided transfer when
            ready to conceive.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "What is embryo banking and who benefits most from it?",
    answer: (
      <>
        <p>
          Embryo banking involves{" "}
          <strong className="text-white">2 to 3 consecutive retrieval cycles</strong> to
          stockpile blastocysts before scheduling a transfer. It is ideal for:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Diminished Ovarian Reserve (DOR):</strong>{" "}
            Patients with low AMH (below 1.1 ng/mL) or AFC below 6 yielding only 1–2
            blastocysts per cycle.
          </li>
          <li>
            <strong className="text-white">Multi-Child Planning:</strong> Securing{" "}
            <strong className="text-white">2 to 3 euploid blastocysts</strong> gives a ~95%
            statistical chance of at least one live birth.
          </li>
          <li>
            <strong className="text-white">Cost Efficiency for PGT-A:</strong> Batching
            biopsies from multiple rounds into one lab shipment lowers genetic testing
            fees.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Are babies born from frozen embryos healthy?",
    answer: (
      <>
        Extensive data covering over{" "}
        <strong className="text-white">1 million FET births</strong> shows no increase in
        congenital defects, developmental delays, or genetic abnormalities compared to
        spontaneous conceptions. Because FET occurs in an unmedicated or hormonally
        balanced uterine lining, babies have a{" "}
        <strong className="text-white">
          15% to 20% lower risk of low birth weight and prematurity
        </strong>{" "}
        compared to fresh IVF transfers.
      </>
    ),
  },
  {
    question: "How does the embryo freezing process work step-by-step?",
    answer: (
      <>
        <p>
          Vitrification flash-freezes embryos at over{" "}
          <strong className="text-white">15,000°C per minute</strong> to prevent damaging
          ice crystals:
        </p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Blastocyst Culture:</strong> Embryos grow to Day
            5/6 (100–150 cells).
          </li>
          <li>
            <strong className="text-white">Collapsing &amp; Dehydration:</strong> The fluid
            cavity is collapsed via laser pulse, and cryoprotectants replace intracellular
            water.
          </li>
          <li>
            <strong className="text-white">Vitrification:</strong> Embryos are loaded onto
            micro-straws and plunged directly into liquid nitrogen at{" "}
            <strong className="text-white">-196°C</strong>.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Can frozen embryos be genetically tested (PGT)?",
    answer: (
      <>
        Yes. While the standard protocol biopsies 4–6 trophectoderm cells on{" "}
        <strong className="text-white">Day 5/6 prior to initial vitrification</strong>,
        previously frozen unbiopsied embryos can be thawed, biopsied, and re-frozen.
        High-complexity labs maintain an{" "}
        <strong className="text-white">95%–98% survival rate</strong> for double-vitrified
        embryos.
      </>
    ),
  },
  {
    question: "What happens to unused or spare frozen embryos?",
    answer: (
      <>
        <p>
          Once family building is complete, patients have clear, legally documented
          choices:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-white">Continued Storage:</strong> Extended through
            annual renewal within statutory limits.
          </li>
          <li>
            <strong className="text-white">Compassionate Thaw:</strong> Allowed to perish
            naturally in the laboratory under written consent of both partners.
          </li>
          <li>
            <strong className="text-white">Research Donation:</strong> Donated to registered
            stem cell and reproductive biology research under the ART Act 2021.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Does freezing and thawing damage the embryo?",
    answer: (
      <>
        With modern vitrification, post-thaw damage occurs in fewer than{" "}
        <strong className="text-white">2% to 5% of embryos</strong>. Because it solidifies
        cells into a glass-like state without jagged ice crystals, cellular membranes and
        DNA remain intact. Thawed blastocysts re-expand their cavity within 2 to 4 hours
        in the incubator, confirming functional viability before transfer.
      </>
    ),
  },
];

export default function EmbryoFreezingCostAndFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Transparency
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Cost Factors Breakdown
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Cost covers the freezing procedure and an annual storage charge. Transfers
              are charged separately.
            </p>
          </Reveal>

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {costCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#e83e74]/35 bg-gradient-to-b from-[#141b36] to-[#0a1024] p-5 shadow-[0_0_24px_rgba(232,62,116,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e74]/65 hover:shadow-[0_0_32px_rgba(232,62,116,0.22)] sm:p-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e83e74] text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                        {card.iconType === "check" ? (
                          <FaCheck className="size-3.5" />
                        ) : (
                          <FaPills className="size-3.5" />
                        )}
                      </span>
                      <h3 className="font-serif text-[1.05rem] leading-snug font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Reveal variant="fadeUp">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Patient questions
            </p>
            <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
              Frequently Asked Questions about Embryo Freezing &amp; Banking
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {leftFaqs.map((faq, idx) => {
                const id = `left-${idx}`;
                return (
                  <FaqCard
                    key={id}
                    item={faq}
                    isOpen={openId === id}
                    onToggle={() => toggle(id)}
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {rightFaqs.map((faq, idx) => {
                const id = `right-${idx}`;
                return (
                  <FaqCard
                    key={id}
                    item={faq}
                    isOpen={openId === id}
                    onToggle={() => toggle(id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
