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
    q: "How painful is the IUI procedure?",
    a: "IUI is normally not a painful procedure. Most women find it similar to a pap smear. You will feel a small catheter being placed in your uterus. Normally no anaesthesia is needed and the procedure takes about 5–10 minutes.",
  },
  {
    id: "left-1",
    q: "What is the success rate of IUI per cycle?",
    a: "You have a 10%–20% chance of getting pregnant with IUI if you are under 35 years old, have open tubes and good sperm counts. You can do multiple cycles to improve your odds, but no one can guarantee you will become pregnant.",
  },
  {
    id: "left-2",
    q: "How many IUI cycles should we try before considering IVF?",
    a: "Talk to your doctor. Some will recommend 3–4 cycles of IUI before proceeding to IVF/ICSI.",
  },
  {
    id: "left-3",
    q: "Is bed rest necessary after an IUI procedure?",
    a: "You will have to lie down for approximately 15–20 minutes after the procedure. You can resume your normal activities after that. Just don't do anything strenuous.",
  },
  {
    id: "left-4",
    q: "What are the main prerequisites before starting IUI?",
    a: "There are a few tests that need to be completed before you can do IUI. These include ensuring the female partner has at least 1 open tube and is ovulating, and that the male partner has an adequate amount of motile sperm. Talk to your doctor about this.",
  },
  {
    id: "left-5",
    q: "Where can I see Dr. Mona for IUI in Noida?",
    a: "Dr. Mona does IUI at her clinic in Sector 49, Noida. She is also available at her locations in Lajpat Nagar, Delhi and Raj Nagar Extension, Ghaziabad. You can consult with her online or in person for your initial visit.",
  },
];

const rightQuestions: QuestionItem[] = [
  {
    id: "right-0",
    q: "How much does an IUI cycle cost?",
    a: "You will pay Rs. 15,000/- to do one cycle of IUI with us. This includes the IUI procedure, scans to monitor your follicles, sperm preparation, ovulation medication and trigger shot, as well as any additional fees. Again, costs will vary, so make sure to ask.",
  },
  {
    id: "right-1",
    q: "How is IUI different from IVF?",
    a: "With IUI you are allowing fertilisation to happen in your body. When doing IVF we will remove your eggs and put them under a microscope, and your doctor will place the embryo back into you. You will also need to inject yourself to induce ovulation with IVF. With IUI you will only need to take medication.",
  },
  {
    id: "right-2",
    q: "What is the best age for IUI?",
    a: "Yes. As mentioned above, you will have higher chances if you are under 35. You can still try, but you will have lower chances once you are over 40, so it may be beneficial to proceed to IVF.",
  },
  {
    id: "right-3",
    q: "Can I do IUI with donor sperm?",
    a: "Yes, you can do IUI with donor sperm from a certified ART sperm bank.",
  },
  {
    id: "right-4",
    q: "Are there any side effects of IUI?",
    a: "IUI itself has minimal side effects — slight cramping or spotting. The ovulation medication may sometimes cause mild bloating or breast tenderness.",
  },
  {
    id: "right-5",
    q: "When can I take a pregnancy test after IUI?",
    a: "You should wait at least 14 days after your IUI procedure before taking a urine pregnancy test or beta hCG blood test.",
  },
];

export default function IuiQuestionsFaq() {
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
            Patient questions
          </span>
          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Questions
          </h2>
        </Reveal>

        {/* 2 Columns: 6 on Left, 6 on Right */}
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
