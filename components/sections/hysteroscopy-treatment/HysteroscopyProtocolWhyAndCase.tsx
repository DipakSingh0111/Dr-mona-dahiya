"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
} from "@/components/ui/treatment";

const protocols = [
  {
    number: "1",
    title: "Pre-procedure planning",
    bullets: [
      "Timing in the first half of the cycle",
      "Medicines and fasting instructions explained",
    ],
  },
  {
    number: "2",
    title: "Diagnostic hysteroscopy",
    bullets: [
      "A thin telescope is passed through the cervix",
      "Cavity, openings of the tubes and lining are inspected",
    ],
  },
  {
    number: "3",
    title: "Operative treatment",
    bullets: [
      "Polyps, fibroids, septum or adhesions treated in the same sitting",
      "Tissue sent for histopathology when needed",
    ],
  },
  {
    number: "4",
    title: "Recovery",
    bullets: [
      "Usually a few hours of observation",
      "Light cramping or spotting can be expected",
    ],
  },
  {
    number: "5",
    title: "Follow-up and timing of treatment",
    bullets: [
      "Review of findings and photographs",
      "Plan for natural attempts, IUI or embryo transfer after healing",
    ],
  },
];

const whyPoints = [
  {
    title: "Fertility-focused surgery",
    desc: "The aim is a healthy cavity for implantation, not just removing a finding.",
  },
  {
    title: "See and treat in one go",
    desc: "Many problems are corrected during the diagnostic sitting, saving a second procedure.",
  },
  {
    title: "Joined-up IVF planning",
    desc: "Hysteroscopy findings are used directly to time your IUI or embryo transfer.",
  },
];

export default function HysteroscopyProtocolWhyAndCase() {
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
          title="Why Consult Dr. Mona Dahiya for Hysteroscopy?"
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
              <strong className="text-ink">Delhi</strong> · Building Number 41, First
              Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
            </p>
            <p className="mt-1.5">
              <strong className="text-ink">Noida</strong> · 3rd Floor, K-06, above
              FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
            </p>
            <p className="mt-1.5">
              <strong className="text-ink">Ghaziabad</strong> · 2nd Floor, RDC, C-53A,
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
          <div className="rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
            <p className="text-[14px] leading-relaxed font-medium text-ink sm:text-[15.5px]">
              A patient with repeated failed embryo transfers had a small endometrial
              polyp picked up at hysteroscopy. It was removed in the same sitting, and
              her next frozen embryo transfer was planned once the lining had healed.
            </p>
            <p className="mt-3 text-[12px] text-ink/65">
              Details changed to protect patient privacy. Individual results vary.
            </p>
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
