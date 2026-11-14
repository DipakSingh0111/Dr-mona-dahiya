"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  ChecklistRow,
  CostFactorCard,
} from "@/components/ui/treatment";

const legalCards = [
  {
    title: "No sex selection",
    description:
      "Under the PC-PNDT Act, 1994, determining, revealing or selecting the sex of an embryo or fetus is illegal and is never provided.",
  },
  {
    title: "Third-party platforms",
    description:
      "We do not accept bookings through directory portals such as JustDial, Practo or HexaHealth. Booking directly protects against data leaks and scheduling errors.",
  },
  {
    title: "Donor anonymity",
    description:
      "Donor gametes come only from government-registered ART banks. Under the ART (Regulation) Act, 2021, donor and recipient identities are never disclosed to each other.",
  },
];

const rights = [
  "Ask for access to your medical records, embryology reports and clinical summaries.",
  "Ask us to correct inaccurate personal or contact details.",
  "Ask for your medical summary to be transferred to another registered doctor.",
  "Ask for erasure of data that is no longer needed, subject to legal retention periods for medical and ART records.",
  "Raise a grievance with us, and if unresolved, with the Data Protection Board of India.",
];

export default function PrivacyLegalAndRights() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Section 4"
          title="Legal Disclosures (ART Act Compliance)"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {legalCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Section 5"
          title="Your Rights"
          subtitle="Under the DPDP Act, 2023 and medical record rules, you can:"
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {rights.map((item, idx) => (
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
