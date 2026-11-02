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
    title: "Evaluate",
    bullets: [
      "Repeat semen analysis and examination",
      "Look for treatable causes",
    ],
  },
  {
    number: "2",
    title: "Correct the cause",
    bullets: [
      "Treat varicocele, infection or hormonal imbalance",
      "Lifestyle changes for about three months",
    ],
  },
  {
    number: "3",
    title: "Support sperm health",
    bullets: [
      "Antioxidants and medicines only when indicated",
      "Retest after one sperm cycle",
    ],
  },
  {
    number: "4",
    title: "Choose the treatment",
    bullets: [
      "IUI when counts are only mildly reduced",
      "IVF or ICSI when the count, motility or shape is significantly affected",
    ],
  },
  {
    number: "5",
    title: "Optimise the female side",
    bullets: [
      "Female age and reserve shape the plan",
      "Couple-based timeline decided together",
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Treat the man and the couple",
    desc: "Female factors are assessed in parallel so time is not lost.",
  },
  {
    title: "Right treatment, right time",
    desc: "IUI is used where it can work, and ICSI where it will help more.",
  },
  {
    title: "Male fertility taken seriously",
    desc: "Clear explanation of every figure on your semen report.",
  },
];

export default function LowSpermProtocolAndWhy() {
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

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Low Sperm Count? ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title="Why Consult Dr. Mona Dahiya for Low Sperm Count?"
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
            <div className="rounded-xl border border-white/10 bg-[#081734] px-5 py-4 text-[12.5px] leading-relaxed text-slate-300 sm:text-[13px]">
              <p>
                <strong className="text-white">Delhi</strong> · Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
              </p>
              <p className="mt-1.5">
                <strong className="text-white">Noida</strong> · 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
              </p>
              <p className="mt-1.5">
                <strong className="text-white">Ghaziabad</strong> · 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
              </p>
            </div>
          </Reveal>
        </div>
      </TreatmentSection>
  );
}

