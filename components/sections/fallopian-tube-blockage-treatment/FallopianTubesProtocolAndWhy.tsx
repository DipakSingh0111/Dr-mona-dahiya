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
    title: "Confirm the blockage",
    bullets: [
      "Tubal patency test at the right point in the cycle",
      "Findings correlated with scan and history",
    ],
  },
  {
    number: "2",
    title: "Look for hydrosalpinx",
    bullets: [
      "Fluid-filled tubes can reduce IVF success",
      "Treatment before IVF is discussed if present",
    ],
  },
  {
    number: "3",
    title: "Decide the route",
    bullets: [
      "Tubal flushing or surgery for selected mild cases",
      "IVF when damage is significant, age is advanced or other factors exist",
    ],
  },
  {
    number: "4",
    title: "Treat",
    bullets: [
      "Laparoscopic correction or tubal flushing where suitable",
      "Removal or clipping of a damaged tube before IVF when advised",
    ],
  },
  {
    number: "5",
    title: "Follow-up",
    bullets: [
      "Time-bound trial after tubal treatment",
      "Move to IVF if conception does not follow",
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Clear tube-versus-IVF counselling",
    desc: "You are told when tubal repair is reasonable and when it only delays pregnancy.",
  },
  {
    title: "Laparoscopic and IVF expertise in one place",
    desc: "No hand-off between separate teams.",
  },
  {
    title: "Ectopic risk kept in view",
    desc: "Early scans after any tubal procedure or pregnancy.",
  },
];

export default function FallopianTubesProtocolAndWhy() {
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

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Blocked Fallopian Tubes? ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title={<>Why Consult Dr. Mona Dahiya for
              <br className="hidden sm:inline" /> Blocked Fallopian Tubes?</>}
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

