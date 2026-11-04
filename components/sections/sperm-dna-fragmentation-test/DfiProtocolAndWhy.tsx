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
    title: "Sample and test",
    bullets: [
      "Semen sample after the advised abstinence period",
      "DFI measured in a specialised laboratory",
    ],
  },
  {
    number: "2",
    title: "Interpret the result",
    bullets: [
      "Below 15%: generally good DNA integrity",
      "15% to 25%: borderline, lifestyle and antioxidant measures are discussed",
      "Above 25 to 30%: high, a treatment plan is needed",
    ],
  },
  {
    number: "3",
    title: "Treat the cause",
    bullets: [
      "Manage varicocele, infection or inflammation",
      "Lifestyle changes, antioxidants and heat avoidance for about three months",
    ],
  },
  {
    number: "4",
    title: "Retest",
    bullets: [
      "Repeat DFI after a full sperm cycle (about 3 months)",
      "Compare against the first result",
    ],
  },
  {
    number: "5",
    title: "Choose the right ART route",
    bullets: [
      "Where DFI stays high, options such as testicular sperm are discussed",
      "Matched to ICSI planning with the embryology team",
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Results explained clearly",
    desc: "You get a plain-language reading of the DFI and what it means for your treatment.",
  },
  {
    title: "Couple-centred plan",
    desc: "Male and female factors are reviewed together, not in isolation.",
  },
  {
    title: "Treatment ladder that fits",
    desc: "From lifestyle correction to ICSI with selected sperm, step by step.",
  },
];

export default function DfiProtocolAndWhy() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Step-by-Step Treatment Protocol ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="How it works"
          title="Step-by-Step Treatment Protocol"
          subtitle="What to expect at each stage. The exact plan is set at your consultation."
        />

          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {protocols.map((item, idx) => (
              <StaggerItem key={idx}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Sperm DNA Fragmentation? ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title={<>Why Consult Dr. Mona Dahiya
              <br className="hidden sm:inline" /> for Sperm DNA Fragmentation?</>}
        />

          <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
            {whyPoints.map((point, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
              <WhyPointRow {...point} />
            </Reveal>
            ))}
          </div>

          {/* Bottom Clinic Address Strip from screenshot */}
          <Reveal variant="fadeUp" delay={0.15} className="mt-6">
            <div className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink sm:text-[13px]">
              <p>
                <strong className="text-ink">Delhi</strong> · Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
              </p>
              <p className="mt-1.5">
                <strong className="text-ink">Noida</strong> · 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
              </p>
              <p className="mt-1.5">
                <strong className="text-ink">Ghaziabad</strong> · 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
              </p>
            </div>
          </Reveal>
        </div>
      </TreatmentSection>
  );
}

