"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface QuestionItem {
  id: string;
  q: string;
  a: string;
}

const leftQuestions: QuestionItem[] = [
  {
    id: "left-0",
    q: "How many IUI cycles should we try before IVF?",
    a: "After 3–4 IUI cycles, it is recommended to go for IVF or ICSI. As discussed earlier, we cannot correct egg quality with IUI, so if you fail 3–4 cycles it would be wise to move ahead with IVF/ICSI.",
  },
  {
    id: "left-1",
    q: "Is IUI painful?",
    a: "Not at all. Similar to a Pap smear, we insert a very fine catheter into your uterus. It takes less than 5 minutes. There is no surgery involved and no anaesthesia either.",
  },
  {
    id: "left-2",
    q: "What sperm count is needed for IUI?",
    a: "The post-wash TMSC should be >5 million/ml. If your post-wash motile sperm count is less than 5 million, then ICSI is recommended.",
  },
  {
    id: "left-3",
    q: "Where does Dr. Mona Dahiya offer IUI?",
    a: "We have 3 centres: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    id: "left-4",
    q: "What is the success rate of IUI?",
    a: "On average, the success rate of IUI is 15–20% per cycle. When you do 3–4 cycles, your success rate can go up to 40–50%. Of course, this depends on various factors like age, tubes being open and sperm quality.",
  },
];

const rightQuestions: QuestionItem[] = [
  {
    id: "right-0",
    q: "How much does IUI cost?",
    a: "The cost of IUI varies from centre to centre. On average, it can cost anywhere between 12,000–18,000 rupees per cycle. The IUI procedure costs 5,000–7,000 rupees and sperm washing costs 3,000–4,000 rupees. You'll also need scans, which cost 3,000–5,000 rupees, and medications, 1,500–3,000 rupees.",
  },
  {
    id: "right-1",
    q: "When can I take a pregnancy test after IUI?",
    a: "You can take a pregnancy test 14 days after IUI. We recommend checking Beta hCG levels on Day 28. Doing it earlier may give you a false negative or positive result.",
  },
  {
    id: "right-2",
    q: "Can I resume normal activity after IUI?",
    a: "Yes. You'll be asked to rest for 15 minutes after your procedure. Then you can do normal activities. Try to avoid heavy workouts for the next 2 weeks till your pregnancy test is done.",
  },
  {
    id: "right-3",
    q: "What is the risk of twins with IUI?",
    a: "Our multiples rate is kept under 5%, since we try to get 1–2 dominant follicles during ovulation induction. If there are 3 or more follicles, then we stop your cycle.",
  },
];

export default function IuiQuestionsFaq() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "left-0": true,
    "right-0": true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderCard = (faq: QuestionItem) => {
    const isOpen = !!openIds[faq.id];
    return (
      <div
        key={faq.id}
        className={`group flex flex-col justify-start rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-[#fbcfe0] bg-[#fffbfd] shadow-[0_8px_24px_rgba(232,62,116,0.06)]"
            : "border-[#fde2ec] bg-white shadow-[0_2px_12px_rgba(15,36,56,0.03)] hover:border-rose/30 hover:shadow-sm"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none sm:p-6"
          aria-expanded={isOpen}
        >
          <span className="font-serif text-[1rem] font-bold text-ink sm:text-[1.08rem]">
            {faq.q}
          </span>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
              isOpen
                ? "rotate-180 bg-rose text-white shadow-sm"
                : "bg-[#fff0f5] text-rose"
            }`}
          >
            <FaChevronDown className="size-3" />
          </span>
        </button>

        {isOpen && (
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[13.5px] leading-relaxed text-ink/75 sm:text-[14px]">
            <p className="border-t border-[#fde2ec]/70 pt-3.5">{faq.a}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-pink py-10 sm:py-14 lg:py-16 border-t border-[#fde2ec]">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif mt-1.5 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.65rem]">
            Top FAQs About IUI Treatment in Delhi NCR
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <Stagger delay={0.03} className="flex flex-col gap-4">
            {leftQuestions.map((q) => (
              <StaggerItem key={q.id}>{renderCard(q)}</StaggerItem>
            ))}
          </Stagger>

          <Stagger delay={0.03} className="flex flex-col gap-4">
            {rightQuestions.map((q) => (
              <StaggerItem key={q.id}>{renderCard(q)}</StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
