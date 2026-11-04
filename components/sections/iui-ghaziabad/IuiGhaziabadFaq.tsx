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
    q: "How many visits to the Raj Nagar Extension clinic does an IUI cycle need?",
    a: "You will usually require 3-4 visits. One for scanning on Day 2/Day 3. 1-2 more visits to scan your follicles between day 9 and day 13. And one visit for IUI.",
  },
  {
    id: "left-1",
    q: "Can IUI work if my fallopian tubes are blocked?",
    a: "If both your tubes are blocked you will not be able to do IUI. At least one tube must be open for IUI.",
  },
  {
    id: "left-2",
    q: "Does IUI need anaesthesia, and is it painful?",
    a: "No, you won't need any anesthesia. Some women may feel slight pain similar to what they feel during pap smears or cramps for a couple of minutes.",
  },
  {
    id: "left-3",
    q: "When does Dr. Mona suggest moving from IUI to IVF?",
    a: "Usually we advise trying other methods if you fail to conceive after 3-4 IUI cycles.",
  },
  {
    id: "left-4",
    q: "Where is Dr. Mona Dahiya's clinic in Ghaziabad?",
    a: "2nd Floor, RDC, C-53A near Bikanerwala Sector 15, Sector 10 Raj Nagar Ghaziabad, Uttar Pradesh 201002. Many of our patients live in Indirapuram, Vasundhara, Mohan Nagar and areas on Meerut Road. You can also meet us via video call.",
  },
];

const rightQuestions: QuestionItem[] = [
  {
    id: "right-0",
    q: "How is IUI different from IVF?",
    a: "During IUI the washed sperm is injected into the uterus and the fertilization occurs naturally. With IVF we collect the egg and fertilize it in the lab and transfer the embryo back to the uterus.",
  },
  {
    id: "right-1",
    q: "What medicines are used during an IUI cycle?",
    a: "Mostly we use lower dose drugs like Letrozole or Clomiphene. Sometimes we may add mild dose of gonadotropins to grow 1-2 follicles. We will give you a trigger shot and progesterone support. Your doctor will decide this based on your reports.",
  },
  {
    id: "right-2",
    q: "How much does an IUI cycle cost in Ghaziabad?",
    a: "At our center it starts at 15000 per cycle. Depending on the medications and number of scans required. And if you use donor's sperm or your partner's sperm. Please ask us when booking your appointment.",
  },
  {
    id: "right-3",
    q: "When can I take a pregnancy test after IUI?",
    a: "Usually we do beta hCG 14 days after IUI. You can test early but it may not show accurate results.",
  },
  {
    id: "right-4",
    q: "Can IUI be done with donor sperm?",
    a: "Yes, you can use donor's sperm for IUI.",
  },
];

export default function IuiGhaziabadFaq() {
  const [openId, setOpenId] = useState<string | null>("left-0");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderCard = (faq: QuestionItem) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`group flex flex-col justify-start rounded-[18px] border transition-[border-color,background-color,box-shadow] duration-300 ease-out sm:rounded-[20px] ${
          isOpen
            ? "border-[#fbcfe0] bg-[#fffbfd] shadow-[0_8px_24px_rgba(230,53,110,0.08)] ring-1 ring-[#fecdd3]/40"
            : "border-slate-100 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-200 hover:shadow-sm"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none sm:p-6"
          aria-expanded={isOpen}
        >
          <h3
            className={`font-serif text-[1rem] font-bold leading-snug transition-colors duration-300 sm:text-[1.08rem] ${
              isOpen ? "text-rose" : "text-ink group-hover:text-rose"
            }`}
          >
            {faq.q}
          </h3>
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "rotate-180 border-rose bg-rose text-white shadow-sm"
                : "border-[#fde2ec] bg-[#fff0f5] text-slate-700 group-hover:border-[#fbcfe0] group-hover:text-rose"
            }`}
            aria-hidden="true"
          >
            <FaChevronDown className="size-2.5 transition-transform" />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#fde2ec]/60 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[13.5px]">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            FAQ
          </span>
          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Questions about IUI in Ghaziabad
          </h2>
        </Reveal>

        {/* 2 Columns: 5 on Left, 5 on Right */}
        <div className="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Left Column */}
          <Stagger className="flex flex-col gap-4" stagger={0.04}>
            {leftQuestions.map((item) => (
              <StaggerItem key={item.id}>
                {renderCard(item)}
              </StaggerItem>
            ))}
          </Stagger>

          {/* Right Column */}
          <Stagger className="flex flex-col gap-4" stagger={0.04}>
            {rightQuestions.map((item) => (
              <StaggerItem key={item.id}>
                {renderCard(item)}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
