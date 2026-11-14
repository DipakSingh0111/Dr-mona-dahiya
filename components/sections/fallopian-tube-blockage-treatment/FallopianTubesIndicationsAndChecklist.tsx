"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

interface IndicationItem {
  number: string;
  title: string;
  description: string;
}

const indications: IndicationItem[] = [
  {
    number: "1",
    title: "You have tried for a year to conceive",
    description:
      "Or 6 months if your female partner is above the age of 35.",
  },
  {
    number: "2",
    title: "History of pelvic infection/TB",
    description:
      "One of the main causes for blocked tubes is pelvic infection.",
  },
  {
    number: "3",
    title: "Surgery done previously in abdominal region",
    description: "Can cause scar tissue and block your fallopian tubes.",
  },
  {
    number: "4",
    title: "Had an ectopic pregnancy before",
    description: "Your other tube needs to be checked.",
  },
  {
    number: "5",
    title: "Endometriosis/fibroids",
    description: "Endometriosis/fibroids can block your tubes.",
  },
];

const diagnosticItems = [
  "HSG/Sonosalpingography",
  "Egg Quality testing(AMH/AF Count)",
  "Laparoscopy + Chromopertubation(if needed after other tests)",
  "Ultrasound for hydrosalpinx",
  "Male Factor (Semen Analysis)",
];

export default function FallopianTubesIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Reasons To Check Your Fallopian Tubes"
          title={
            <>
              Indications: Who Needs
              <br className="hidden sm:inline" /> a Tubal Assessment?
            </>
          }
          subtitle="Some of the reasons why Dr Mona would suggest checking your fallopian tubes."
        />

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {indications.map((item) => (
            <NumberedCard key={item.number} {...item} />
          ))}
        </div>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Ways to check if your tubes are blocked"
          title="Diagnostic Checklist"
          subtitle="5 tests that we may do to further assess your situation. You may not need all of these."
        />

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
          {diagnosticItems.map((text, idx) => (
            <Reveal key={text} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{text}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
