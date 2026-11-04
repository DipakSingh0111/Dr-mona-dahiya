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
    title: "Pathway A: PESA",
    bullets: [
      "Needle aspiration from the epididymis",
      "Suitable for obstructive azoospermia",
    ],
  },
  {
    number: "2",
    title: "Pathway B: TESA",
    bullets: [
      "Needle aspiration from the testis",
      "Used when epididymal sperm is not available or for selected cases",
    ],
  },
  {
    number: "3",
    title: "Pathway C: Micro-TESE",
    bullets: [
      "Operating microscope used to find sperm-producing tubules",
      "For non-obstructive azoospermia, with minimal tissue removed",
    ],
  },
  {
    number: "4",
    title: "Laboratory processing",
    bullets: [
      "Embryologist searches and prepares the sample",
      "Surplus sperm can be frozen",
    ],
  },
  {
    number: "5",
    title: "ICSI and recovery",
    bullets: [
      "Retrieved sperm is used for ICSI",
      "Most men go home the same day with simple pain relief",
    ],
  },
];

const whyPoints = [
  {
    title: "Right procedure for the diagnosis",
    desc: "The procedure is chosen according to cause, not preference.",
  },
  {
    title: "Synchronised with the female cycle",
    desc: "Retrieval is timed with egg collection or frozen to avoid pressure.",
  },
  {
    title: "Embryology backup",
    desc: "An experienced lab team searches and freezes sperm carefully.",
  },
];

export default function SurgicalSpermRetrievalProtocolWhyAndCase() {
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
          title="Why Consult Dr. Mona Dahiya for Surgical Sperm Retrieval?"
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>

          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <div className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink sm:text-[13px]">
              <p>
                <strong className="text-ink">Delhi</strong> · Building Number
                41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat
                Nagar, New Delhi 110024
              </p>
              <p className="mt-1.5">
                <strong className="text-ink">Noida</strong> · 3rd Floor, K-06,
                above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
              </p>
              <p className="mt-1.5">
                <strong className="text-ink">Ghaziabad</strong> · 2nd Floor,
                RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar,
                Ghaziabad, Uttar Pradesh 201002
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
            <div className="rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
              <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
                A couple faced with azoospermia chose retrieval and the sperm
                was frozen in small vials. The lab used them for ICSI, with no
                need for a repeat surgery for later cycles.
              </p>
              <p className="mt-3 text-[12px] text-ink/65">
                Details changed to protect patient privacy. Individual results
                vary.
              </p>
            </div>
          </Reveal>
        </div>
      </TreatmentSection>
  );
}
