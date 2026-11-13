"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function DisclaimerNoGuarantees() {
  const cards = [
    {
      title: "Biological complexity",
      text: "As there are many biological reasons, results cannot be promised. The quality of eggs, division of eggs, thickness and health of the endometrium, and chromosome status of the embryo cannot be guaranteed to be normal at any point.",
    },
    {
      title: "No warranty of pregnancy or birth",
      text: "There is no certainty that you will get pregnant and have a healthy baby just because you are undergoing IUI/IVF/ICSI or methods like laser-assisted hatching or PGT-A.",
    },
    {
      title: "How to read success rates",
      text: "Success rates shown on our website are an average of how patients in those categories fared in past years. Every woman has different success rates depending on her age, AMH value, and her male partner's sperm and chromosome profile.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white border-t border-rose/10">
      <div className="page-container relative z-10">
        <div className="mb-8">
          <Reveal variant="fadeUp">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose">
              Section 1: No result can be promised when undergoing assisted reproduction
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              No Guaranteed Outcomes in Assisted Reproduction
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="flex h-full flex-col rounded-2xl border border-rose/15 bg-gradient-to-b from-[#fff8fb] to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose text-white text-xs">
                    <FaCheck />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-ink/75">
                  {card.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

