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
    title: "Lab processing and consumables",
    description:
      "Closed centrifugation tubes, separation gel and catheters: ₹10,000 to ₹18,000 per instillation",
  },
  {
    title: "Doppler monitoring",
    description:
      "2 to 3 scans of blood flow and lining thickness: ₹3,000 to ₹5,000",
  },
  {
    title: "Ovarian PRP, if needed",
    description:
      "Ultrasound-guided ovarian injection under sedation: ₹25,000 to ₹60,000",
  },
  {
    title: "Frozen transfer cycle",
    description: "Billed with the planned frozen embryo transfer",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does intrauterine PRP help a thin lining?",
    answer:
      "PRP carries concentrated growth factors such as VEGF and TGF-β. In the uterus they grow new blood vessels and speed up cell growth in the basal layer, so the lining thickens, often from about 5 mm to 7.5 mm or more within 48 to 72 hours.",
  },
  {
    question: "Is intrauterine PRP painful?",
    answer:
      "No. It is a 5-minute outpatient procedure with no anaesthesia, using a soft catheter like an embryo transfer. It feels similar to a Pap smear.",
  },
  {
    question: "Can ovarian PRP increase my AMH?",
    answer:
      "Sometimes, and usually only for a while. Some women see a rise in AMH and antral follicle count over 2 to 6 months, but results depend on remaining reserve, so it is used as an add-on for poor responders.",
  },
  {
    question: "Where can I have PRP therapy with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How many PRP sessions are needed?",
    answer:
      "Usually 1 or 2 instillations, 48 hours apart, in the same prepared cycle (typically days 10 and 12).",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is PRP safe?",
    answer:
      "Yes. It uses your own blood (100% autologous), so there is no risk of allergy or rejection. Infection risk is very low with a sterile closed system.",
  },
  {
    question: "How much does PRP cost?",
    answer:
      "₹10,000 to ₹18,000 per intrauterine instillation, plus ₹3,000 to ₹5,000 for monitoring scans. Ovarian PRP costs ₹35,000 to ₹60,000.",
  },
  {
    question: "When is embryo transfer done after PRP?",
    answer:
      "Once the lining reaches 7.5 mm or more with a trilaminar pattern, usually 2 to 4 days after the last instillation, progesterone starts and the frozen transfer follows.",
  },
  {
    question: "Who is not suitable for PRP?",
    answer:
      "Women with low platelets (under 1,50,000/µL), active pelvic infection, untreated endometritis or blood cancers. These are screened for first.",
  },
];

export default function PrpCostAndFaq() {
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
              What Affects the Cost of PRP Therapy
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              PRP is usually combined with a frozen embryo transfer cycle. The components
              below are itemised in your estimate.
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
              Top FAQs About PRP Therapy in IVF
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
