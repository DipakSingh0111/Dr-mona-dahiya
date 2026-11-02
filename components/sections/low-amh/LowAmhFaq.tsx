"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answerContent: React.ReactNode;
}

const leftFaqs: FAQItem[] = [
  {
    question: "Can I get pregnant naturally with low AMH?",
    answerContent: (
      <p>
        Yes. Anti-Müllerian Hormone (AMH) measures egg{" "}
        <strong className="font-semibold text-white">quantity</strong>, not
        quality. As long as you ovulate regularly, natural conception remains
        possible. Your monthly chance is driven mainly by age, not the AMH
        number alone.
      </p>
    ),
  },
  {
    question: "What is considered a low or critically low AMH level?",
    answerContent: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Normal Reserve:</strong>{" "}
            2.0 to 4.0 ng/mL
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Low Reserve:</strong> 1.0
            to 1.5 ng/mL
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Significantly Low Reserve:
            </strong>{" "}
            0.5 to 0.9 ng/mL
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Critically Low Reserve:
            </strong>{" "}
            Below 0.5 ng/mL (typically yields 1–3 eggs per IVF cycle)
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "Can low AMH levels be increased or reversed?",
    answerContent: (
      <p>
        No medical treatment regenerates new eggs. Protocols with CoQ10, DHEA
        and growth hormone (hGH) can support mitochondrial energy and egg
        quality before stimulation, but they do not reverse reserve decline.
      </p>
    ),
  },
  {
    question: "What is the success rate of IVF with low AMH?",
    answerContent: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Under 35:</strong> High
            (40% to 50%)
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Age 35–39:</strong> 25%
            to 35%
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Age 40 and above:
            </strong>{" "}
            10% to 15% (can improve with PGT-A and embryo banking)
          </p>
        </li>
      </ul>
    ),
  },
  {
    question:
      "What are the best IVF protocols for low AMH and poor ovarian response?",
    answerContent: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              DuoStim (Double Stimulation)
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Micro-Dose Flare or GnRH Antagonist
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Mild IVF / Mini-IVF
            </strong>
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "What is embryo banking, and why is it recommended for low AMH?",
    answerContent: (
      <p>
        Embryo banking means completing 2–3 consecutive retrievals and freezing
        Day 5/6 blastocysts before transfer. Pooling embryos raises cumulative
        success chances — often toward 90%+ over multiple cycles when age
        allows.
      </p>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "How much does low AMH IVF treatment cost in Delhi NCR?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Plans typically range from ₹1,25,000 to ₹2,25,000 depending on
          medicines and lab steps. Main variables include:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">
              •
            </span>
            <p>
              <strong className="font-semibold text-white">
                Gonadotropin Injections & Priming
              </strong>
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">
              •
            </span>
            <p>
              <strong className="font-semibold text-white">
                ICSI & Blastocyst Culture
              </strong>
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">
              •
            </span>
            <p>
              <strong className="font-semibold text-white">
                Vitrification & Storage
              </strong>
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What causes low AMH in young women?",
    answerContent: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Endometriosis & Ovarian Cysts
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Genetic Factors</strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Previous Surgeries or Chemotherapy
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Autoimmune Disorders
            </strong>
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "Does a low AMH level automatically mean I need donor eggs?",
    answerContent: (
      <p>
        No. Personalized stimulation and embryo banking often allow patients to
        use their own eggs. Donor eggs are considered only after own-egg options
        are fully explored.
      </p>
    ),
  },
  {
    question: "What is the difference between conventional IVF and DuoStim?",
    answerContent: (
      <p>
        Conventional IVF stimulates once per menstrual cycle. DuoStim
        stimulates twice in one cycle — follicular and luteal phases — so two
        retrievals can bank more oocytes faster when reserve is low.
      </p>
    ),
  },
  {
    question: "Does low AMH cause miscarriage?",
    answerContent: (
      <p>
        No. AMH reflects ovarian reserve, not pregnancy-loss risk. Miscarriage
        risk depends mainly on age and embryo chromosomes, not the AMH value
        alone.
      </p>
    ),
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for low AMH?",
    answerContent: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Noida:</strong> 3rd
            Floor, K-06, above FirstCry, Baraula, Sector 49
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Ghaziabad:</strong> 2nd
            Floor, RDC, C-53A, near Bikanerwala, Sector 15
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Delhi:</strong> Building
            Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV
          </p>
        </li>
      </ul>
    ),
  },
];

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border bg-[#091a3c]/70 transition-colors duration-200 ${
        isOpen
          ? "border-[#e83e74]/45"
          : "border-white/10 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
      >
        <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
          {item.question}
        </span>
        <FaChevronDown
          className={`size-3 shrink-0 text-slate-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "rotate-180 text-[#f9a8d4]" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-white/10 px-4 pt-3.5 pb-4.5 text-[13px] leading-relaxed text-slate-300 transition-opacity duration-300 sm:px-5 sm:pb-5 sm:text-[13.5px] ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.answerContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LowAmhFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About Low AMH Treatment
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
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
    </section>
  );
}
