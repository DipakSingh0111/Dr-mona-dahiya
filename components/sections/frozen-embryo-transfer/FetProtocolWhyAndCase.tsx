"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
  type ProtocolCardItem,
} from "@/components/ui/treatment";

const protocols: ProtocolCardItem[] = [
  {
    number: "1",
    tag: "Pre-Cycle (Days 1–3)",
    title: "Deciding What Cycle You'll Undergo",
    bullets: [
      "Discuss embryo grades and previous transfers",
      "Natural / Modified Natural / Hormonal Replacement Therapy",
    ],
  },
  {
    number: "2",
    tag: "Day 2/3 till Day 12–14",
    title: "Preparing the Endometrium",
    bullets: [
      "Take oral oestrogens or go with a natural cycle",
      "Scan for the lining to be at least 7 mm with a trilaminar pattern",
    ],
  },
  {
    number: "3",
    tag: "Day 14–16",
    title: "Begin Progesterone",
    bullets: [
      "When your lining is ready, begin progesterone to open the implantation window",
      "Day 3 embryo: 3 days before transfer / Blastocyst: 5 days before transfer",
    ],
  },
  {
    number: "4",
    tag: "Day 19–21 (Blastocyst)",
    title: "Defrost & Transfer Embryos",
    bullets: [
      "Embryos are defrosted 2–4 hours before transfer",
      "Painless, ultrasound-guided transfer. Takes approx. 10–15 mins. No sedation",
    ],
  },
  {
    number: "5",
    tag: "Day 9–12 After Transfer",
    title: "Luteal Phase Support & Pregnancy Test",
    bullets: [
      "Take progesterone, and oestrogen if doing HRT",
      "Beta-hCG blood test 9–12 days after blastocyst transfer",
    ],
  },
];

const whyPoints = [
  {
    title: "Frozen Embryos",
    desc: "Using the vitrification technique to freeze and warm your embryos.",
  },
  {
    title: "Choose The Right Protocol",
    desc: "We decide if you will do natural, modified natural or hormonal replacement therapy based on your cycle and previous cycles.",
  },
  {
    title: "Experience & Expertise",
    desc: "More than 25 years of experience with fertility and IVF. Gold Medallist in MBBS & MD. IVF Fellowship at Singapore General Hospital.",
  },
];

export function FetProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Treatment Procedure"
        title="Step-by-Step Treatment Protocol"
        subtitle="Each step explained. The exact plan will depend on your consultation."
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
    </TreatmentSection>
  );
}

export function FetWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About Us"
        title="Why Choose Dr. Mona Dahiya For Frozen Embryo Transfer"
      />

      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={point.title} variant="fadeUp" delay={idx * 0.05}>
            <WhyPointRow {...point} />
          </Reveal>
        ))}
      </div>

      <Reveal variant="fadeUp" delay={0.15} className="mt-6">
        <div className="rounded-xl border border-[#fde2ec] bg-white px-5 py-4 text-[12.5px] leading-relaxed text-ink shadow-[0_8px_24px_rgba(232,62,116,0.04)] sm:text-[13.5px]">
          <p>
            <strong className="font-bold text-ink">Delhi</strong> · Building
            Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat
            Nagar, New Delhi 110024
          </p>
          <p className="mt-1.5">
            <strong className="font-bold text-ink">Noida</strong> · 3rd Floor,
            K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh
            201301
          </p>
          <p className="mt-1.5">
            <strong className="font-bold text-ink">Ghaziabad</strong> · 2nd
            Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj
            Nagar, Ghaziabad, Uttar Pradesh 201002
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}

export function FetCase() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="From Our Experience"
        title="Patient Experience"
      />

      <Reveal variant="fadeUp" delay={0.06} className="mt-6">
        <div className="card-highlight rounded-2xl border border-[#fde2ec] border-l-4 border-l-rose bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] sm:p-7">
          <p className="font-serif text-[14.5px] leading-relaxed font-semibold text-ink sm:text-[16px]">
            One of our patients had failed two fresh transfers. She had a thin
            lining and was shifted to FET using hormonal replacement therapy. We
            did a single blastocyst transfer, which resulted in a pregnancy.
          </p>
          <p className="mt-3 text-[12px] text-ink/65">
            This information has been modified to preserve the patient&apos;s
            identity. Every patient is different.
          </p>
        </div>
      </Reveal>
    </TreatmentSection>
  );
}

export default function FetProtocolWhyAndCase() {
  return (
    <>
      <FetProtocol />
      <FetWhy />
      <FetCase />
    </>
  );
}
