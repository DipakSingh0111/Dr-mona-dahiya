"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  RelatedTreatmentCompactCard,
  type FaqItem,
  type RelatedTreatmentItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Is zero-interest EMI available for IVF?",
    answer:
      "You can get loans with no interest from healthcare NBFCs and banks. You can pay between 6 and 12 EMIs without paying interest (some allow up to 18 EMIs). They offer 0% interest during this period by absorbing the interest during a promotional offer. Processing fees will still be charged by the NBFC/bank.",
  },
  {
    question: "Who decides my loan eligibility and EMI?",
    answer:
      "Only the bank/NBFC you are applying to for the loan can tell you if you qualify and what your EMI amount will be.",
  },
  {
    question: "Can medicine costs be included in the EMI?",
    answer:
      "You can include injections and medicine in your loan. We can share an estimate of the entire cost, including medications, as well.",
  },
  {
    question: "Where can I get a cost estimate from Dr. Mona Dahiya?",
    answer:
      "Dr Mona Dahiya can be met at three centres for consultations and discussion on the cost of treatment. They are located in Noida — Third Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, UP — 201301; Ghaziabad — Second Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, UP — 201002; and Delhi — Building No. 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi, 110024.",
  },
  {
    question: "What is the total cost of one IVF cycle?",
    answer:
      "The cost of 1 IVF cycle including ICSI and blastocyst culture is between ₹1,25,000 and ₹1,75,000, and the cost of medicines ranges from ₹45,000 to ₹75,000. So the total will be around ₹1.5 – 2.5 lakh.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What documents do I need for an IVF loan?",
    answer:
      "You need PAN, Aadhaar, bank statements for 3 months and salary slips (income tax return if self-employed).",
  },
  {
    question: "How quickly is an IVF loan approved?",
    answer:
      "It depends on the bank, but generally it's less than 24 hours once you share all documents with the bank/NBFC.",
  },
  {
    question: "Does health insurance cover IVF in India?",
    answer:
      "Generally, normal health insurance doesn't cover IVF treatment. But corporate group insurance and a few other policies cover IVF with a limit and a waiting period between 9 months and 3 years.",
  },
  {
    question:
      "Can our corporate policy cover fertility care if the HR handbook does not mention IVF?",
    answer:
      "If your corporate policy covers infertility, it might help with some of the charges related to IVF such as testing, hysteroscopy and other day-care procedures. Reach out to your company HR department or TPA.",
  },
  {
    question: "What does a frozen embryo transfer cost after IVF?",
    answer:
      "Frozen embryo transfer is an additional cost after completing an IVF cycle. It covers the cost of preparing the lining and thawing your embryo. We share an estimate of this if you have any extra embryos left after fresh transfer.",
  },
];

const relatedTreatments: RelatedTreatmentItem[] = [
  {
    title: "Frozen Embryo Transfer",
    href: "/frozen-embryo-transfer",
  },
  {
    title: "Sperm DNA Fragmentation",
    href: "/sperm-dna-fragmentation-test",
  },
  {
    title: "Hysteroscopy",
    href: "/hysteroscopy-treatment",
  },
  {
    title: "Endometriosis",
    href: "/endometriosis-fertility-treatment",
  },
  {
    title: "Fallopian Tube Blockage",
    href: "/fallopian-tube-blockage-treatment",
  },
  {
    title: "Recurrent Implantation Failure",
    href: "/recurrent-implantation-failure-rif",
  },
  {
    title: "Azoospermia",
    href: "/azoospermia-treatment",
  },
  {
    title: "Low Sperm Count",
    href: "/low-sperm-count-oligospermia",
  },
  {
    title: "Surgical Sperm Retrieval",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
  {
    title: "Sperm Freezing",
    href: "/semen-sperm-freezing",
  },
  {
    title: "Embryo Freezing",
    href: "/embryo-cryopreservation",
  },
  {
    title: "Oncofertility",
    href: "/oncofertility-cancer-fertility-preservation",
  },
];

export function IvfCostFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Some frequently asked questions regarding IVF cost"
        title="Top FAQs About IVF Cost and EMI Financing"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}

export function IvfCostRelated() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Treatments"
        title="Related Fertility Treatments"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
      >
        {relatedTreatments.map((item) => (
          <StaggerItem key={item.title}>
            <RelatedTreatmentCompactCard {...item} label="Treatment page" />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}

