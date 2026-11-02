"use client";

import { useState, type ReactNode } from "react";
import { FaCheck, FaChevronDown, FaFlask } from "react-icons/fa";
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
    icon: "check" as const,
    title: "Diagnostic office hysteroscopy",
    description:
      "Day-care cavity check under local block: ₹15,000 to ₹25,000.",
  },
  {
    icon: "check" as const,
    title: "Operative hysteroscopy",
    description:
      "Septum, fibroid or adhesion surgery under general anaesthesia: ₹35,000 to ₹65,000.",
  },
  {
    icon: "check" as const,
    title: "Reproductive laparoscopy",
    description:
      "Cystectomy, tube removal or myomectomy: ₹55,000 to ₹1,10,000.",
  },
  {
    icon: "flask" as const,
    title: "Anti-adhesion products",
    description:
      "Hyaluronic acid gel or intrauterine stents: ₹8,000 to ₹15,000.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does operative hysteroscopy improve IVF success?",
    answer:
      "It removes 4 common cavity problems (polyps, submucosal fibroids, adhesions and septa), restoring a normal shape and blood flow so the embryo has a receptive surface.",
  },
  {
    question: "What is the recovery time after laparoscopy?",
    answer:
      "Short. Cuts are only 5 to 10 mm, most women go home the same day or next morning, and desk work resumes in 3 to 5 days.",
  },
  {
    question: "Why must a hydrosalpinx be clipped before IVF?",
    answer:
      "The blocked tube fills with inflamed fluid that leaks into the uterus, washing embryos away and harming them. Untreated, it can cut IVF success roughly in half.",
  },
  {
    question: "Where does Dr. Mona Dahiya perform surgery?",
    answer:
      "Consultations and procedures are arranged across 3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does fertility surgery cost?",
    answer:
      "Diagnostic hysteroscopy ₹15,000 to ₹25,000, operative hysteroscopy ₹35,000 to ₹65,000 and laparoscopy ₹55,000 to ₹1,10,000, plus ₹8,000 to ₹15,000 for anti-adhesion products if used.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How soon can I try to conceive after surgery?",
    answer:
      "Usually after 1 to 3 months: about 1 cycle after hysteroscopy and 2 to 3 months after laparoscopic myomectomy.",
  },
  {
    question: "Will surgery reduce my ovarian reserve?",
    answer:
      "It can if done aggressively. Ovary-sparing cold-scissor techniques are used to protect healthy follicles, and AMH is checked before surgery.",
  },
  {
    question: "Is hysteroscopy painful?",
    answer:
      "Office diagnostic hysteroscopy takes 10 to 15 minutes under a local block. Operative hysteroscopy is done under short general anaesthesia.",
  },
  {
    question: "Can surgery avoid the need for IVF?",
    answer:
      "Sometimes. Removing a septum, polyp or adhesions, or opening tubes, lets many women conceive naturally or with IUI.",
  },
];

export default function LaparoscopyCostAndFaq() {
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
              What Affects the Cost of Laparoscopy and Hysteroscopy
            </h2>
            <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Costs depend on which procedure you need. Each is a day-care procedure,
              itemised before surgery.
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
                        {card.icon === "flask" ? (
                          <FaFlask className="size-3.5" />
                        ) : (
                          <FaCheck className="size-3.5" />
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
              Top FAQs About Fertility Laparoscopy and Hysteroscopy
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
