"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
} from "@/components/ui/treatment";

const scopeItems = [
  "Governed by the NMC (Professional Conduct, Etiquette and Ethics) Regulations, the ART (Regulation) Act, 2021 and the Surrogacy (Regulation) Act, 2021.",
  "Dr. Mona Dahiya keeps full clinical discretion to evaluate, accept, adjust, defer or decline treatment based on evidence, contraindications, safety or legal eligibility.",
];

const responsibilityItems = [
  "Provide a complete, genuine medical history, including past ovulation induction, surgery notes, test reports and pregnancy outcomes.",
  "Disclose all current medicines, hormonal or heart conditions, autoimmune disorders and known family genetic conditions.",
  "Provide government photo ID and proof of age (passport, voter ID or another legal ID), plus a marriage certificate where the ART Act requires it.",
  "Accept that deliberately hiding or falsifying medical history means the clinic cannot be held responsible for complications arising from undisclosed conditions.",
];

export default function TermsScopeAndResponsibilities() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Section 2"
          title="Scope of Services & Clinical Autonomy"
          subtitle="Every consultation creates a doctor-patient relationship governed by Indian medical law."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {scopeItems.map((item, idx) => (
            <Reveal key={item} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow>{item}</ChecklistRow>
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Section 3"
          title="Patient Responsibilities & Required Documents"
          subtitle="Every individual, couple or legal guardian seeking care agrees to these 4 points."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {responsibilityItems.map((item, idx) => (
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
