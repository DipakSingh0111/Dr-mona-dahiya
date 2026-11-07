"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications = [
  {
    number: "1",
    title: "Fresh transfer not advisable",
    description:
      "If there are higher levels of oestrogen or a chance of OHSS, embryos are frozen for future use.",
  },
  {
    number: "2",
    title: "For Genetic Testing",
    description:
      "After biopsying embryos for PGT, they are frozen. They are then transferred after the lining is prepared.",
  },
  {
    number: "3",
    title: "Left Over Embryos",
    description:
      "If good-quality embryos are left from previous IVF cycles, they can be used without having to do another stimulation.",
  },
  {
    number: "4",
    title: "Lining is Thin",
    description:
      "By freezing embryos, we can prepare the lining independent of egg collection.",
  },
  {
    number: "5",
    title: "Want to Postpone",
    description:
      "You may be advised to postpone for medical reasons, or you may want to postpone yourself.",
  },
];

const checklist = [
  "What grade your embryos were, the day of freezing and how they were vitrified.",
  "Scan for endometrial thickness.",
  "Blood test to check hormone levels (Estradiol, Progesterone).",
  "Check the uterine cavity (Hysteroscopy/Saline Sonogram).",
  "Check Thyroid, Prolactin and Glucose if needed.",
];

export function FetIndications() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="About the Condition"
        title={
          <>
            Who Should Undergo
            <br className="hidden sm:inline" /> Frozen Embryo Transfer
          </>
        }
        subtitle="Here are some common reasons why Dr. Mona Dahiya will advise frozen embryo transfer."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {indications.map((item) => (
          <StaggerItem key={item.number}>
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

export function FetChecklist() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Prior To Treatment"
        title="Diagnosis Tests"
        subtitle="List of tests that may be needed to establish the diagnosis. Not all of them may be required."
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

export default function FetIndicationsAndChecklist() {
  return (
    <>
      <FetIndications />
      <FetChecklist />
    </>
  );
}
