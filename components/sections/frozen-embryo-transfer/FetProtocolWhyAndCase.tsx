"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Before cycle – Day 1–3: Cycle planning",
    bullets: [
      "Review embryo quality and past transfers.",
      "Choose natural, modified-natural or medicated (HRT) cycle.",
    ],
  },
  {
    number: "2",
    title: "Day 2/3 to Day 12–14: Endometrial preparation",
    bullets: [
      "Oestrogen tablets, or natural tracking with scans and blood tests.",
      "Lining checked for 7–8 mm+ and a trilaminar pattern.",
    ],
  },
  {
    number: "3",
    title: "Day 14–16: Progesterone start",
    bullets: [
      "Starts once the lining is ready; opens the implantation window.",
      "3 days for Day-3 embryos, 5 days for blastocysts.",
    ],
  },
  {
    number: "4",
    title: "Day 19–21 (blastocyst): Thaw and transfer",
    bullets: [
      "Embryos warmed 2–4 hours before transfer.",
      "Painless ultrasound-guided transfer, 10–15 min, no anaesthesia.",
    ],
  },
  {
    number: "5",
    title: "9–12 days after transfer: Luteal support and result",
    bullets: [
      "Progesterone (and oestrogen if medicated) continues.",
      "Blood beta-hCG test 9–12 days after blastocyst transfer.",
    ],
  },
];

const whyPoints = [
  {
    title: "Vitrification-led laboratory practice",
    desc: "Embryos are frozen and warmed with protocols designed to protect embryo quality.",
  },
  {
    title: "A protocol chosen for you",
    desc: "Natural, modified or medicated FET is selected from your cycle pattern and history, not by default.",
  },
  {
    title: "Expertise and experience",
    desc: "25+ years in fertility and IVF care. Gold medalist in MBBS and MD, with an IVF fellowship from Singapore General Hospital.",
  },
];

export default function FetProtocolWhyAndCase() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Protocol"
          subtitle="What to expect at each stage. The exact plan is set at your consultation."
        />

          <Stagger
            delay={0.05}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {protocols.map((item) => (
              <StaggerItem key={item.number}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for Frozen Embryo Transfer?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <div className="rounded-xl border border-white/10 bg-[#081734] px-5 py-4 text-[12.5px] leading-relaxed text-slate-300 sm:text-[13px]">
              <p>
                <strong className="text-white">Delhi</strong> · Building Number 41, First
                Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
              </p>
              <p className="mt-1.5">
                <strong className="text-white">Noida</strong> · 3rd Floor, K-06, above
                FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
              </p>
              <p className="mt-1.5">
                <strong className="text-white">Ghaziabad</strong> · 2nd Floor, RDC, C-53A,
                near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar
                Pradesh 201002
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="From the clinic"
          title="Clinical Case Insight"
        />

          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="rounded-2xl border border-[#e83e74]/35 bg-gradient-to-r from-[#141b36] via-[#0e223d] to-[#0a1024] p-6 shadow-[0_0_24px_rgba(232,62,116,0.12)] sm:p-7">
              <p className="text-[14px] leading-relaxed font-medium text-slate-100 sm:text-[15.5px]">
                A patient with two failed fresh transfers and a borderline lining moved to
                a medicated FET after her lining was optimised. A single, well-graded
                blastocyst was transferred in the next cycle and led to a clinical
                pregnancy.
              </p>
              <p className="mt-3 text-[12px] text-slate-400">
                Details changed to protect patient privacy. Individual results vary.
              </p>
            </div>
          </Reveal>
        </div>
      </TreatmentSection>
  );
}
