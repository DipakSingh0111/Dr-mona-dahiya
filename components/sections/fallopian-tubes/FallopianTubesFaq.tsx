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
    question: "How do I know if my tubes are blocked?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Most women have no symptoms. A blockage is usually found when investigating why pregnancy has not occurred. An HSG (X-ray dye test) or SSG/HyCoSy (ultrasound dye test) is used to check whether the dye spills freely through each tube into the pelvis.
        </p>
      </div>
    ),
  },
  {
    question: "What is the difference between unilateral and bilateral blockage?",
    answerContent: (
      <div className="space-y-3">
        <p>
          <strong className="text-white">Unilateral:</strong> One tube is blocked; the other is open. Natural conception or IUI is still possible from the open side, though it may take longer.
        </p>
        <p>
          <strong className="text-white">Bilateral:</strong> Both tubes are blocked. Eggs and sperm cannot meet naturally, and IVF is usually required unless the blockage is mild and surgically correctable.
        </p>
      </div>
    ),
  },
  {
    question: "Can blocked fallopian tubes be opened without surgery?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A proximal blockage (near the uterus) can sometimes be cleared during the dye test itself (tubal flushing or oil-contrast effect) or by selective tubal cannulation. A blockage at the far end (fimbrial) or involving scarring and fluid (hydrosalpinx) generally cannot be resolved without surgical intervention or bypassing the tubes via IVF.
        </p>
      </div>
    ),
  },
  {
    question: "What is a hydrosalpinx, and why does it matter for IVF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A hydrosalpinx is a fallopian tube that is blocked at its outer end and filled with toxic, inflammatory fluid. This fluid can wash back into the uterine cavity, where it is toxic to embryos and significantly reduces IVF implantation rates (often by up to 50%). Doctors typically recommend clipping (tubal occlusion) or removing (salpingectomy) the affected tube before an embryo transfer.
        </p>
      </div>
    ),
  },
  {
    question: "Is laparoscopy or IVF better for tubal factor infertility?",
    answerContent: (
      <div className="space-y-3">
        <p>
          It depends on age, ovarian reserve, semen parameters, and the nature of the blockage:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Laparoscopy:</strong> Best for young women with mild, single-point distal adhesions or proximal blockages who desire natural conception and have good ovarian reserve and normal semen.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">IVF:</strong> Recommended when woman is &gt;35, has severe tubal damage, bilateral hydrosalpinx, concurrent male factor infertility, or reduced ovarian reserve, because IVF directly bypasses the tubes entirely.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "What causes fallopian tubes to get blocked?",
    answerContent: (
      <div className="space-y-3">
        <p>Common causes include:</p>
        <ul className="space-y-1.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Pelvic Inflammatory Disease (PID) from infections such as Chlamydia or Gonorrhoea</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Endometriosis causing pelvic adhesions and tubal scarring</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Previous pelvic or abdominal surgeries (e.g., ruptured appendix, ovarian cyst removal)</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Past ectopic pregnancy or pelvic tuberculosis (common in India)</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is an HSG test painful?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Most women experience brief cramping (like period cramps) for a few minutes while the dye is being injected into the uterus and tubes. Taking an anti-spasmodic or pain reliever 30–60 minutes prior helps significantly. The entire procedure usually takes under 15 minutes.
        </p>
      </div>
    ),
  },
  {
    question: "Can I get pregnant with only one fallopian tube?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. If you have one healthy, open tube and normal ovulation, you can conceive naturally. Even when ovulation occurs on the opposite ovary, the healthy tube can sometimes pick up the ovum across the pelvis. If conception does not occur within 6–12 months, assisted reproductive options like IUI or IVF can be considered.
        </p>
      </div>
    ),
  },
  {
    question: "Does tubal surgery increase the risk of ectopic pregnancy?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. Any condition or surgical repair that damages the delicate microscopic cilia lining inside the fallopian tube increases the risk of an embryo getting stuck along its journey to the uterus. If you conceive after tubal surgery, an early ultrasound at 5–6 weeks is essential to confirm an intrauterine pregnancy.
        </p>
      </div>
    ),
  },
  {
    question: "How long after tubal surgery should I wait before trying for a baby?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Most specialists recommend trying for spontaneous conception starting the cycle following your procedure, once pelvic healing is complete. If pregnancy does not occur within 6 to 12 months post-surgery, moving to IVF without further delay is standard practice to preserve ovarian reserve.
        </p>
      </div>
    ),
  },
];

export default function FallopianTubesFaq() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeft(openLeft === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRight(openRight === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section Header */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Questions About Fallopian Tube Blockage
          </h2>
          <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
            Straightforward clinical answers on diagnostics, tubal surgery vs IVF, hydrosalpinx management, and pregnancy outcomes.
          </p>
        </Reveal>

        {/* 2-Column Accordion */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#e83e74]" : ""
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth accordion wrapper using CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answerContent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#e83e74]" : ""
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth accordion wrapper using CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answerContent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

