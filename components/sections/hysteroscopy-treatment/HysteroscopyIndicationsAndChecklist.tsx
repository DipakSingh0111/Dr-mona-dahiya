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
    title: "Failed IVF /Recurrent Implantation failure",
    description:
      "If you have had unsuccessful IVF cycles we will want to examine your uterine cavity prior to transferring again.",
  },
  {
    number: "2",
    title: "If you are suspected of having Polyps/Fibroid in your uterine cavity.",
    description: "These may impede your ability to become pregnant.",
  },
  {
    number: "3",
    title: "If you have been found to have a uterine septum/other anomaly",
    description:
      "We can see and confirm with our telescope during the procedure.",
  },
  {
    number: "4",
    title: "Adhesions in your uterine cavity",
    description: "Caused due to previous infection/surgery or curettage.",
  },
  {
    number: "5",
    title: "Abnormal bleeding or recurrent miscarriage",
    description:
      "May be helped by diagnosing the problem within your uterine cavity.",
  },
];

const checklist = [
  "Ultrasound scan of your pelvis - ideally 3D",
  "Previous scans/surgery/procedures you may have undergone",
  "Bloods pre procedure and clearance for anaesthesia",
  "Test to make sure you have no infection and timing within your cycle.",
];

export default function HysteroscopyIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Clinical breakdown"
          title="Indications: Who Needs Hysteroscopy?"
          subtitle="Below are some indications in which we may recommend you to undergo hysteroscopy care."
        />
        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Prior to treatment"
          title="Diagnostic Checklist"
          subtitle="Depending on your case you will need to complete some of these tests prior to undergoing hysteroscopy care."
        />
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
