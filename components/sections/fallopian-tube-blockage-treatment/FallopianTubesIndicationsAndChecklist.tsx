"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard
} from "@/components/ui/treatment";
interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "Unable to conceive after a year",
    description: "Or six months when the woman is over 35.",
  },
  {
    number: "2",
    title: "Past pelvic infection or TB",
    description: "Infection is a common cause of tubal damage.",
  },
  {
    number: "3",
    title: "Previous abdominal or pelvic surgery",
    description: "Adhesions can distort or block the tubes.",
  },
  {
    number: "4",
    title: "Previous ectopic pregnancy",
    description: "The remaining tube needs checking.",
  },
  {
    number: "5",
    title: "Endometriosis or fibroids",
    description: "May affect tubal function and anatomy.",
  },
];

interface ChecklistItem {
  text: string;
}

const checklist: ChecklistItem[] = [
  { text: "HSG (hysterosalpingography) or saline sonosalpingography" },
  { text: "Pelvic ultrasound for hydrosalpinx" },
  { text: "Ovarian reserve (AMH, antral follicle count)" },
  { text: "Partner semen analysis" },
  { text: "Laparoscopy and dye test when other tests are unclear" },
];

export default function FallopianTubesIndicationsAndChecklist() {
  return (
    <TreatmentSection>
        {/* ================= SECTION 1: Indications: Who Needs a Tubal Assessment? ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title={<>Indications: Who Needs
              <br className="hidden sm:inline" /> a Tubal Assessment?</>}
          subtitle="Common reasons Dr. Mona Dahiya recommends fallopian tube blockage care."
        />

          {/* 5 Cards Grid */}
          <Stagger delay={0.05} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {indications.map((item, idx) => (
              <StaggerItem key={idx}>
              <NumberedCard {...item} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ================= SECTION 2: Diagnostic Checklist ================= */}
        <div>
          <TreatmentSectionHeader
          eyebrow="Before treatment"
          title="Diagnostic Checklist"
          subtitle="These tests help confirm the diagnosis and choose the right plan. Not every patient needs every test."
        />

          {/* 2-Column Checklist Cards */}
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
            {checklist.map((item, idx) => (
              <Reveal key={idx} variant="fadeUp" delay={idx * 0.04}>
                <div className="flex items-center gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue ring-1 ring-blue/40 sm:size-6">
                    <FaCheck className="size-2.5 sm:size-3" />
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </TreatmentSection>
  );
}

