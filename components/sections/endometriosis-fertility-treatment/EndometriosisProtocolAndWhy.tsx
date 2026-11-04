"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
  ChecklistRow,
} from "@/components/ui/treatment";
const checklist = [
  "Detailed symptom and cycle history",
  "Transvaginal ultrasound, with MRI where required",
  "AMH and antral follicle count for ovarian reserve",
  "Tubal assessment and partner semen analysis",
];

const protocols = [
  {
    number: "1",
    title: "Diagnosis and staging",
    bullets: [
      "Scan and, where needed, MRI to map disease",
      "Ovarian reserve tested before any decision",
    ],
  },
  {
    number: "2",
    title: "Treat the symptoms",
    bullets: [
      "Pain control and hormonal therapy when pregnancy is not immediate",
      "Surgery only when it clearly helps",
    ],
  },
  {
    number: "3",
    title: "Optimise before conception",
    bullets: [
      "Pre-IVF suppression may be used in selected cases",
      "Timing based on age and reserve",
    ],
  },
  {
    number: "4",
    title: "Choose the route",
    bullets: [
      "Timed intercourse or IUI in mild disease",
      "IVF or ICSI for moderate to severe disease or low reserve",
    ],
  },
  {
    number: "5",
    title: "Transfer planning",
    bullets: [
      "Freeze-all and prepared frozen transfer when advisable",
      "Close follow-up after conception",
    ],
  },
];

interface WhyPoint {
  title: string;
  desc: string;
}

const whyPoints: WhyPoint[] = [
  {
    title: "Fertility-first surgical judgement",
    desc: "Surgery is advised only when it improves your chance, protecting ovarian reserve.",
  },
  {
    title: "Time-sensitive planning",
    desc: "Age and reserve guide how long to try before moving to IVF.",
  },
  {
    title: "Pain and fertility handled together",
    desc: "One plan for symptoms and for conception.",
  },
];

export default function EndometriosisProtocolAndWhy() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Diagnostic Checklist ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />

          {/* 2-Column Checklist Cards */}
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
                <ChecklistRow>{item}</ChecklistRow>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: Step-by-Step Treatment Protocol ================= */}
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

        {/* ================= SECTION 3: Why Consult Dr. Mona Dahiya for Endometriosis? ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Expertise & authority"
          title={<>Why Consult Dr. Mona Dahiya for
              <br className="hidden sm:inline" /> Endometriosis &amp; Adenomyosis?</>}
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

