"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function DisclaimerFaqs() {
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleFaq = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      q: "Can an online consultation replace in-clinic tests?",
      a: "By consulting with us online we can tell you what you should do based on your tests. But we have to examine you in clinic before we start you on treatment.",
    },
    {
      q: "How should published success rates be read?",
      a: "These are the results determined after doing procedures on people who fell into that category last year. Things that may affect your results are age, female AMH/AFC, male sperm DNA and chromosome status of the embryo.",
    },
    {
      q: "Can any fertility clinic guarantee IVF success?",
      a: "There can be many reasons why a woman might not get pregnant or may have an unhealthy baby. There is a law made for ART clinics that you cannot guarantee that you will conceive and have a child. So anyone who claims to have 100% chances of getting pregnant is lying to you.",
    },
    {
      q: "What should I do if I have sudden pain or bleeding during stimulation?",
      a: (
        <>
          No, you shouldn&apos;t use our email/chat services for this type of
          situation. Please visit a hospital ER as soon as possible. Feel free
          to call us at{" "}
          <a
            href="tel:+919267982924"
            className="font-bold text-rose hover:underline"
          >
            +91 92679 82924
          </a>{" "}
          if it&apos;s not too much of a problem.
        </>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white border-t border-rose/10">
      <div className="page-container relative z-10 max-w-4xl">
        <div className="mb-8">
          <Reveal variant="fadeUp">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose">
              Patients asked us some questions
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Frequently Asked Questions: Medical Disclaimer
            </h2>
          </Reveal>
        </div>

        <Stagger className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = !!openStates[idx];
            return (
              <StaggerItem key={idx}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
                    isOpen
                      ? "border-rose/30 bg-[#fffbfc] shadow-sm ring-1 ring-rose/20"
                      : "border-rose/15 bg-white shadow-xs hover:border-rose/35"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left select-none sm:p-6"
                  >
                    <h3
                      className={`font-display text-base font-bold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-rose" : "text-ink group-hover:text-rose"
                      }`}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-rose bg-rose text-white shadow-sm"
                          : "border-rose/20 bg-pink text-rose"
                      }`}
                      aria-hidden="true"
                    >
                      <FaChevronDown className="text-xs transition-transform" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-rose/10 px-5 pt-3.5 pb-5 text-xs sm:text-sm leading-relaxed text-ink/75 sm:px-6 sm:pb-6">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
