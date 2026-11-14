"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  WhyPointRow,
  ChecklistRow,
} from "@/components/ui/treatment";

const checklist = [
  "Will take your history of the problem and menstrual cycle.",
  "Do an ultrasound scan. May do MRI if needed.",
  "Test your ovarian reserve. Using AMH and AFC.",
  "Test if your tubes are open and husbands semen analysis",
];

const protocols = [
  {
    number: "1",
    title: "Scan & Diagnose",
    bullets: [
      "We may do an MRI to check extent of disease.",
      "Assess ovarian reserve to decide on next step.",
    ],
  },
  {
    number: "2",
    title: "Treat the Problem",
    bullets: [
      "If you don't want to get pregnant immediately we can prescribe you medicines to manage your pain.",
      "If a procedure will benefit you then we will operate.",
    ],
  },
  {
    number: "3",
    title: "Prepare body for Pregnancy",
    bullets: [
      "Pre IVF suppression can be advised depending on your case.",
      "Depending on your age and reserve we will plan this out.",
    ],
  },
  {
    number: "4",
    title: "Decide on procedure",
    bullets: [
      "Can try natural conception / IUI if disease is mild.",
      "If you have advanced disease or low reserve we can do IVF/ICSI.",
    ],
  },
  {
    number: "5",
    title: "Plan for Embryo transfer",
    bullets: [
      "Can freeze all your embryos and do a prepared transfer later.",
      "We will guide you on what to do if you fall pregnant.",
    ],
  },
];

const whyPoints = [
  {
    title: "We only operate if it can increase your chances of pregnancy.",
    desc: "So we don't damage your egg reserve unnecessarily",
  },
  {
    title: "We know how to maximize your egg reserve.",
    desc: "By planning when to do IVF depending on your age",
  },
  {
    title: "Treating pain and helping you get pregnant",
    desc: "Dr mona specializes in treating both the symptoms and conception.",
  },
];

export function EndometriosisChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Diagnosis"
        title="Diagnostic Checklist"
        subtitle="These are some of the tests that we would recommend to diagnose the problem and figure out the best course of action for you."
      />

      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
        {checklist.map((item, idx) => (
          <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
            <ChecklistRow>
              <span className="font-semibold text-ink">{item}</span>
            </ChecklistRow>
          </Reveal>
        ))}
      </div>
    </TreatmentSection>
  );
}

export function EndometriosisProtocol() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Procedure"
        title="Step-by-Step Treatment Protocol"
        subtitle="Below are the steps we take when you visit us. We will discuss what's best for you."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {protocols.map((item) => (
          <StaggerItem
            key={item.number}
            className="h-full min-h-[240px] sm:min-h-[260px]"
          >
            <ProtocolCard {...item} />
          </StaggerItem>
        ))}
        <StaggerItem className="h-full min-h-[240px] sm:min-h-[260px]">
          <div className="card-highlight relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:min-h-[260px]">
            <Image
              src="/shared-gallery/endometriosis.jpeg"
              alt="Endometriosis Fertility Treatment Illustration"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </StaggerItem>
      </Stagger>
    </TreatmentSection>
  );
}

export function EndometriosisWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Why Choose Us"
        title={
          <>
            Why Consult Dr. Mona Dahiya for
            <br className="hidden sm:inline" /> Endometriosis &amp; Adenomyosis?
          </>
        }
      />

      <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
        {whyPoints.map((point, idx) => (
          <Reveal key={idx} variant="fadeUp" delay={idx * 0.05}>
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

export default function EndometriosisProtocolAndWhy() {
  return (
    <>
      <EndometriosisChecklist />
      <EndometriosisProtocol />
      <EndometriosisWhy />
    </>
  );
}
