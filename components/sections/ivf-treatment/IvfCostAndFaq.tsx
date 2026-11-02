"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { FaCheck, FaChevronDown } from "react-icons/fa";
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
    title: "Ovarian stimulation medicines",
    description:
      "Dose and duration vary with age, AMH and response — the largest variable in most cycles.",
  },
  {
    title: "Laboratory and cleanroom fees",
    description:
      "Egg retrieval, fertilisation, culture and embryologist time in a controlled lab environment.",
  },
  {
    title: "Advanced laboratory technologies",
    description:
      "ICSI, assisted hatching or genetic testing when indicated — priced only if used.",
  },
  {
    title: "Vitrification and storage",
    description:
      "Freezing surplus embryos and annual storage, if you bank embryos for later transfer.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is the success rate of IVF?",
    answer:
      "Success depends on age, ovarian reserve, embryo quality and uterine factors. Younger patients with good reserve generally see higher live-birth rates per transfer. Dr. Mona shares realistic numbers for your profile at consultation — not a one-size clinic average.",
  },
  {
    question: "Is IVF painful?",
    answer:
      "Daily injections cause mild discomfort for most people. Egg retrieval is done under sedation, so you should not feel pain during the procedure. Mild cramping afterward is common and settles quickly.",
  },
  {
    question: "How long does one IVF cycle take?",
    answer:
      "A typical fresh cycle spans about 4–6 weeks from baseline scan to pregnancy test. Freeze-all or deferred transfer cycles may add time for lining preparation.",
  },
  {
    question: "What is included in the IVF cost breakdown?",
    answer:
      "Estimates usually cover stimulation monitoring, retrieval, lab fertilisation/culture and one transfer. Medicines, ICSI, freezing, PGT and anaesthesia are itemised separately so you know what you are paying for.",
  },
  {
    question: "Where are the clinics located?",
    answer:
      "Dr. Mona Dahiya consults in Lajpat Nagar (Delhi), Sector 49 (Noida) and Raj Nagar Extension (Ghaziabad). You can book in-clinic or online follow-ups.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "IUI vs IVF — which should I choose?",
    answer: (
      <>
        IUI is simpler and suited to selected mild cases. IVF is preferred for tubal
        factor, significant male factor, low reserve, endometriosis, or after failed
        IUI. Your age and reports decide the safer first step.
      </>
    ),
  },
  {
    question: "When is embryo transfer done?",
    answer:
      "Blastocyst transfer is usually on day 5 after retrieval for fresh cycles. Frozen transfers are scheduled when the lining is ready, often in a later cycle.",
  },
  {
    question: "IVF vs ICSI — what is the difference?",
    answer: (
      <>
        In IVF, sperm and egg are combined in a dish. In{" "}
        <Link
          href="/treatments"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          ICSI Treatment
        </Link>
        , a single sperm is injected into each mature egg — useful for male factor or
        prior fertilisation failure.
      </>
    ),
  },
  {
    question: "Can IVF help with PCOS or low AMH?",
    answer: (
      <>
        Yes. PCOS needs careful stimulation to avoid OHSS; low AMH needs tailored dosing
        and realistic counselling. See also{" "}
        <Link
          href="/pcos-treatment"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          PCOS treatment
        </Link>{" "}
        and{" "}
        <Link
          href="/low-amh"
          className="font-medium text-[#93c5fd] underline underline-offset-2 hover:text-white"
        >
          Low AMH care
        </Link>
        .
      </>
    ),
  },
];

export default function IvfCostAndFaq() {
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
              What Affects the Cost of IVF
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Most cycles in Delhi NCR fall between roughly ₹1.5 lakh and ₹2.5 lakh,
              depending on medicines and lab add-ons. A written estimate is shared before
              you start.
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
                        <FaCheck className="size-3.5" />
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
              Top FAQs About IVF Treatment in Delhi NCR
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
