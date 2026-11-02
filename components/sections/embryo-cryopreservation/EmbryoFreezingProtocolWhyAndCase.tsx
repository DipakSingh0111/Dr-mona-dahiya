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
    title: "Stimulation and retrieval",
    bullets: [
      "Eggs are retrieved after ovarian stimulation",
      "Embryos are cultured to day 3 or blastocyst",
    ],
  },
  {
    number: "2",
    title: "Selection",
    bullets: [
      "Best-graded embryos chosen for freezing",
      "Genetic biopsy if planned",
    ],
  },
  {
    number: "3",
    title: "Vitrification",
    bullets: [
      "Embryos are rapidly frozen in cryoprotectant",
      "Loaded into labelled carriers",
    ],
  },
  {
    number: "4",
    title: "Storage",
    bullets: [
      "Kept in liquid nitrogen tanks",
      "Regular monitoring and records",
    ],
  },
  {
    number: "5",
    title: "Frozen embryo transfer",
    bullets: [
      "Embryos are warmed when you are ready",
      "Transfer is planned in a prepared cycle",
    ],
  },
];

const whyPoints = [
  {
    title: "Personalized Blastocyst-First Planning",
    desc: "Embryos are cultured to Day 5/6 blastocysts, achieving over 95% post-thaw survival rates through tailored vitrification rather than routine batch freezing.",
  },
  {
    title: "Advanced Cryopreservation & Traceability",
    desc: "Ultra-rapid vitrification at -196°C prevents ice crystal damage, backed by double-witness protocols ensuring 100% sample traceability and long-term security.",
  },
  {
    title: "Higher-Success FET Integration",
    desc: "Decoupling retrieval from transfer allows the uterine lining to recover, boosting implantation rates by 10% to 15% for an optimized transfer window.",
  },
];

export default function EmbryoFreezingProtocolWhyAndCase() {
  return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Next 2-3 weeks"
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
          title="Why Consult Dr. Mona Dahiya for Embryo Freezing?"
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
                A patient at risk of OHSS had all her embryos vitrified and waited a
                cycle. The prepared frozen transfer that followed led to a healthy
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
