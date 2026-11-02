"use client";

import { useState, type ReactNode } from "react";
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
    title: "Stimulation medicines",
    description:
      "Gonadotropins, antagonists and Letrozole: ₹25,000 to ₹65,000.",
  },
  {
    title: "Egg retrieval and anaesthesia",
    description:
      "Retrieval, day-care suite and IV sedation: ₹20,000 to ₹45,000.",
  },
  {
    title: "Emergency vitrification",
    description: "Freezing straws and media: ₹20,000 to ₹30,000.",
  },
  {
    title: "Emergency semen freezing",
    description:
      "Processing, screening and multi-vial banking: ₹4,000 to ₹8,000 per sample.",
  },
  {
    title: "Long-term storage",
    description:
      "Flexible multi-year storage plans for extended cancer treatment.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Will fertility preservation delay my cancer treatment?",
    answer:
      "Usually no. Random-start stimulation begins on any day of your cycle, and the whole process takes 10 to 12 days, which typically fits within the staging and planning window before chemotherapy.",
  },
  {
    question: "Is stimulation safe with estrogen-sensitive breast cancer?",
    answer:
      "Yes, with an oncology protocol. Adding Letrozole 2.5 to 5 mg keeps estrogen close to natural levels while follicles grow.",
  },
  {
    question: "Can chemotherapy cause permanent infertility?",
    answer:
      "It can. Alkylating drugs such as cyclophosphamide can wipe out the ovarian follicle pool and cause early menopause, and in men can damage sperm-producing cells. Freezing eggs, embryos or sperm first gives a biological backup.",
  },
  {
    question: "Where can I get emergency oncofertility care with Dr. Mona Dahiya?",
    answer:
      "Emergency consultations are prioritised at 3 clinics: Noida (3rd Floor, K-06, above FirstCry, Bansal, Sector 48, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanervala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How quickly can preservation start?",
    answer:
      "Within 24 to 48 hours of referral. Tests are done the same day, and stimulation can start immediately.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does oncofertility care cost?",
    answer:
      "Egg freezing runs about ₹95,000 to ₹1,40,000 in total (medicines ₹25,000 to ₹65,000, retrieval ₹20,000 to ₹45,000, vitrification ₹20,000 to ₹30,000). Semen freezing is ₹4,000 to ₹8,000 per sample.",
  },
  {
    question: "Should I freeze eggs or embryos?",
    answer:
      "Eggs if you are single or unsure about a partner; embryos if you have a partner, since they give slightly more information about quality. Both survive warming over 90% of the time.",
  },
  {
    question: "How many sperm samples should men bank?",
    answer:
      "2 to 3 samples within 24 to 48 hours, ideally before the first chemotherapy dose, because even one cycle can damage sperm DNA.",
  },
  {
    question: "Can I get pregnant after cancer treatment?",
    answer:
      "Many patients can, often 2 or more years after treatment ends, with oncologist clearance. Stored eggs or embryos are then used through IVF or ICSI.",
  },
];

export default function OncofertilityCostAndFaq() {
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
              What Affects the Cost of Oncofertility Care
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Oncofertility cases are prioritised and priced clearly. The components below
              are itemised the same day so treatment is not held up.
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
              Top FAQs About Oncofertility in Delhi NCR
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
