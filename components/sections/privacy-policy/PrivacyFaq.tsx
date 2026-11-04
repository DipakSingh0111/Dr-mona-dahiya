"use client";

import Link from "next/link";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Are my fertility records kept confidential?",
    answer:
      "Yes. Reports, scans and treatment records are kept in secure, encrypted systems accessible only to Dr. Mona Dahiya and her care team, in line with medical confidentiality and the DPDP Act.",
  },
  {
    question: "Does Dr. Mona Dahiya offer gender selection?",
    answer:
      "No. Sex selection and prenatal sex determination are prohibited by the PC-PNDT Act, 1994 and are not practised at any of our clinics.",
  },
  {
    question: "How is donor identity protected?",
    answer:
      "Gametes come only from government-registered ART banks, and the ART Act requires full mutual anonymity between donors and recipients.",
  },
  {
    question: "Do you share my data with anyone?",
    answer:
      "Only where your care or the law requires it: for example, the National ART Registry, laboratories processing your tests, or your insurer if you ask us to. We never sell data.",
  },
  {
    question: "Is my payment information safe?",
    answer:
      "Yes. Payments go through secure, PCI-DSS compliant gateways, and we do not store card or bank details on our servers.",
  },
  {
    question: "How long are my records kept?",
    answer:
      "Under Section 23 of the Assisted Reproductive Technology (Regulation) Act, 2021, all assisted reproduction clinical records, laboratory logs, gamete sourcing documentation, and embryological tracking sheets must be preserved by the clinic for at least 10 years. Following the completion of this 10-year period (or upon clinic closure), records are systematically transferred to the central database of the National ART and Surrogacy Registry. General outpatient and inpatient medical records are maintained for a minimum of 3 years in accordance with National Medical Commission (NMC) regulations.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I get a copy of my medical records?",
    answer: (
      <>
        Yes. Email{" "}
        <a
          href="mailto:info@drmonadahiya.com"
          className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
        >
          info@drmonadahiya.com
        </a>{" "}
        with your request, and we will share copies after verifying your
        identity.
      </>
    ),
  },
  {
    question: "Can I ask you to delete my data?",
    answer:
      "You can ask for erasure of data no longer needed. Some medical and ART records must be kept for legally required periods.",
  },
  {
    question: "Are online consultations private?",
    answer: (
      <>
        Yes. Calls use secure video platforms and your reports are shared only
        with the care team. See{" "}
        <Link
          href="/ivf-consultation-online"
          className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
        >
          Online Consultation
        </Link>
        .
      </>
    ),
  },
  {
    question: "Does the website use cookies?",
    answer:
      "The website may use essential and analytics cookies to work properly and improve the service; you can control cookies in your browser settings.",
  },
  {
    question: "Who do I contact about privacy?",
    answer: (
      <>
        Email{" "}
        <a
          href="mailto:info@drmonadahiya.com"
          className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
        >
          info@drmonadahiya.com
        </a>{" "}
        or call +91 92679 82924.
      </>
    ),
  },
];

export default function PrivacyFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Frequently Asked Questions: Privacy & Data Protection"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
