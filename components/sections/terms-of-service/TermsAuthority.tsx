"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
} from "@/components/ui/treatment";

const credentialCards = [
  {
    title: "Academic credentials",
    description:
      "MBBS (Gold Medalist, Lady Hardinge Medical College, Delhi), MD in Obstetrics & Gynaecology (Gold Medalist, Maulana Azad Medical College, Delhi), DNB, and a Fellowship in Reproductive Medicine / ART (Singapore General Hospital).",
  },
  {
    title: "Statutory registrations",
    description:
      "Registered medical practitioner in good standing with the Delhi Medical Council (DMC) and the National Medical Commission (NMC).",
  },
  {
    title: "Registered practice facilities",
    description:
      "Consultations and procedures take place only at registered clinics in South Delhi (Lajpat Nagar IV), Noida (Sector 49) and Ghaziabad (Raj Nagar RDC).",
  },
];

export default function TermsAuthority() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Section 1"
        title="Clinical Authority, Credentials & Registrations"
        subtitle="All assessments, treatments and reproductive procedures are provided under Dr. Mona Dahiya's clinical supervision."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {credentialCards.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <CostFactorCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
