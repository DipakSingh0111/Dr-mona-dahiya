"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  WhyPointRow,
  ProtocolCard
} from "@/components/ui/treatment";
const protocols = [
  {
    number: "1",
    title: "Case review",
    bullets: [
      "All previous cycle records are studied",
      "Embryo quality and transfer technique reviewed",
    ],
  },
  {
    number: "2",
    title: "Uterine evaluation",
    bullets: [
      "Hysteroscopy to treat polyps, septum or adhesions",
      "Treat infection or inflammation of the lining",
    ],
  },
  {
    number: "3",
    title: "Embryo evaluation",
    bullets: [
      "Consider PGT-A in selected cases",
      "Review the lab culture and freezing practice",
    ],
  },
  {
    number: "4",
    title: "Personalised transfer",
    bullets: [
      "Choose the protocol and timing for your lining",
      "Single, best-graded blastocyst transfer",
    ],
  },
  {
    number: "5",
    title: "Support and follow-up",
    bullets: [
      "Evidence-based luteal support",
      "Early beta-hCG and scan monitoring",
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Evidence over guesswork",
    desc: "Tests and add-ons are recommended only where there is a reason, to avoid needless cost.",
  },
  {
    title: "Whole-cycle review",
    desc: "Embryo, uterus, sperm and timing are all examined.",
  },
  {
    title: "Failed IVF desk",
    desc: "A dedicated second-opinion pathway for repeated failure.",
  },
];

export default function RifProtocolWhyAndCase() {
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
            {protocols.slice(0, 3).map((item, idx) => (
              <StaggerItem key={idx}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>

          {/* Row 2: Protocols 4 and 5 */}
          <Stagger delay={0.05} className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-5 max-w-4xl">
            {protocols.slice(3, 5).map((item, idx) => (
              <StaggerItem key={idx}>
              <ProtocolCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Why Consult Dr. Mona Dahiya for Recurrent Implantation Failure? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title={<>Why Consult Dr. Mona Dahiya for
              <br className="hidden sm:inline" /> Recurrent Implantation Failure?</>}
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

        {/* ================= SECTION 3: Clinical Case Insight ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="From the clinic"
          title="Clinical Case Insight"
        />

          <Reveal variant="fadeUp" delay={0.06} className="mt-6">
            <div className="rounded-2xl border border-[#e83e74]/35 bg-gradient-to-r from-[#141b36] via-[#0e223d] to-[#0a1024] p-6 sm:p-7 shadow-[0_0_24px_rgba(232,62,116,0.12)]">
              <p className="text-[14px] leading-relaxed font-medium text-slate-100 sm:text-[15.5px]">
                A couple with three unsuccessful transfers had a hysteroscopy that showed a uterine septum. After correction and a prepared frozen transfer of a single blastocyst, they achieved an ongoing pregnancy.
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

