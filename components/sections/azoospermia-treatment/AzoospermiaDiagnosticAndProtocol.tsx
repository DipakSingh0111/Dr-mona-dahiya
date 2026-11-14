"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ProtocolCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const diagnosticItems = [
  "Semen Analysis x 2 with Centrifugation",
  "Hormone profile - FSH, LH, Testosterone and Prolactin.",
  "Ultrasonography of scrotum to check testicular volume and presence of Varicocele.",
  "Karyotyping and Micro Deletion if needed.",
];

const protocols = [
  {
    number: "1",
    title: "Clearing Blockages",
    bullets: [
      "Testes are producing sperm normally as indicated by normal hormone values and testicular volume.",
      "Either sperm can be extracted using PESA/TESA or the blockage can be repaired.",
    ],
  },
  {
    number: "2",
    title: "Treating Low Production",
    bullets: [
      "Spermatogenesis (production of sperm) is impaired.",
      "Hormones can be optimised and Micro TESE can be performed to extract sperm.",
    ],
  },
  {
    number: "3",
    title: "Balancing Hormones",
    bullets: [
      "If the cause of azoospermia is due to hormonal deficiencies.",
      "Sperm can be induced in the ejaculate with medication.",
    ],
  },
  {
    number: "4",
    title: "Fertilization & Freezing",
    bullets: [
      "Sperms will be used for ICSI procedure with your partner's egg.",
      "Sperm samples can be frozen for future procedures.",
    ],
  },
  {
    number: "5",
    title: "Donor Support",
    bullets: [
      "Genetic Counselling if applicable.",
      "Can opt for donor sperm if sperms cannot be extracted.",
    ],
  },
];

export default function AzoospermiaDiagnosticAndProtocol() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Tests to Diagnose Azoospermia"
          title="Diagnostic Checklist"
          subtitle="Depending upon your medical condition the following tests would help establish your diagnosis. Not all patients would require all of these tests."
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

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Protocol to Follow"
          title="Treatment Protocol of Azoospermia"
          subtitle="Here are some general steps we follow. Your treatment protocol will be established at the time of your consultation."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {protocols.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <ProtocolCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>
    </>
  );
}
