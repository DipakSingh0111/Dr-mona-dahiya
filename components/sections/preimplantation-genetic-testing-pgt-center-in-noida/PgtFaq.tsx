"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const faqs: FaqItem[] = [
    {
      question: "What is PGT in IVF and how does it work?",
      answer: "PGT is genetic screening of IVF embryos before transfer. Embryos are grown to the Day 5 or 6 blastocyst stage; 4 to 6 cells are taken from the outer trophectoderm layer by laser biopsy; and the embryos are frozen while the cells are analyzed by Next-Generation Sequencing. Only embryos reported as chromosomally normal (euploid) are then thawed and transferred.",
    },
    {
      question: "What is the difference between PGT-A, PGT-M, and PGT-SR?",
      answer: "PGT-A checks for overall numerical chromosome errors (such as Down syndrome). PGT-M targets specific single-gene genetic disorders passed down from carrier parents (such as Thalassemia or Cystic Fibrosis). PGT-SR detects structural chromosome rearrangements in parents with balanced translocations.",
    },
    {
      question: "What is the cost of PGT testing in Delhi NCR?",
      answer: "The total depends on the IVF/ICSI cycle, the laser biopsy fee, the number of embryos sent for NGS testing (billed per embryo), custom probe design for PGT-M, freezing and storage, and the later frozen embryo transfer. Dr. Mona Dahiya gives an itemized estimate after your consultation.",
    },
    {
      question: "Does laser biopsy during PGT damage the developing embryo?",
      answer: "When performed by an experienced embryologist at the Day 5/6 blastocyst stage, PGT biopsy carries a damage risk of under 1%. The biopsy takes only 4 to 6 cells strictly from the outer trophectoderm layer (which forms the placenta), leaving the inner cell mass (which forms the fetus) untouched.",
    },
    {
      question: "Can PGT guarantee a 100% successful pregnancy?",
      answer: "While PGT cannot guarantee a 100% live birth rate, transferring a confirmed chromosomally normal (euploid) embryo increases clinical pregnancy rates to 65%–70% per transfer and reduces miscarriage rates from 30%+ down to below 8%–10%.",
    },
    {
      question: "Can PGT test for autism, gender, or all genetic diseases?",
      answer: "No. PGT-A looks at chromosome numbers; PGT-M looks only for the specific gene change already known in the family; and PGT-SR looks for a known parental rearrangement. It cannot screen for autism or every possible disease. Sex selection is prohibited in India under the PC-PNDT Act, and the embryo's sex is never disclosed.",
    },
    {
      question: "How long does it take to get PGT genetic test results?",
      answer: "Following biopsy and vitrification, Next-Generation Sequencing (NGS) analysis typically takes 2 to 3 weeks. During this window, the patient's uterine lining rests and recovers, setting up an optimal frozen embryo transfer (FET) in the subsequent menstrual cycle.",
    },
    {
      question: "What is an embryo mosaicism result in PGT-A?",
      answer: "A mosaic embryo contains a mixture of normal and abnormal cells. Depending on the percentage and specific chromosome involved (low-level vs. high-level mosaic), some mosaic embryos can self-correct, implant successfully, and result in completely healthy live births. Dr. Mona Dahiya provides thorough genetic counseling regarding mosaic transfer protocols.",
    },
    {
      question: "Can you do PGT testing on already frozen embryos?",
      answer: "Yes. Previously frozen embryos that were not biopsied can be thawed, biopsied and re-frozen while the results are awaited. Survival after this second vitrification is high in an experienced laboratory, though slightly lower than for embryos biopsied before their first freeze.",
    },
    {
      question: "Does PGT-A prevent miscarriages?",
      answer: "It reduces miscarriages caused by embryo chromosome errors, the most common cause of early pregnancy loss. Transferring a euploid embryo lowers the miscarriage rate to below 8%–10%. It does not treat uterine, hormonal, clotting or immune causes, which Dr. Mona Dahiya checks separately.",
    },
    {
      question: "Is PGT testing worth it for women under 35?",
      answer: "Not for everyone. Younger women have fewer chromosomally abnormal embryos, so routine PGT-A adds less benefit. It is still worth considering under 35 with recurrent miscarriage, repeated implantation failure, a known genetic disorder or translocation, severe male factor, or when a single embryo transfer is planned.",
    },
    {
      question: "Where does Dr. Mona Dahiya offer PGT?",
      answer: "3 centres: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, UP 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, UP 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024). Clinic hours are 10:00 AM to 5:00 PM, with online consultations also available.",
    },
  ];

const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

export default function PgtFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Top FAQs About PGT in Delhi | Noida | Ghaziabad"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
