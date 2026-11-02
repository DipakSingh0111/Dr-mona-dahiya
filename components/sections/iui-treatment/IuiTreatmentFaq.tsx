"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How many IUI cycles should we try before IVF?",
    answer: (
      <div className="space-y-3">
        <p>
          3 to 4 well-timed cycles. After that, cumulative success plateaus, and Dr. Dahiya usually advises IVF or ICSI to address egg quality or fertilisation problems.
        </p>
      </div>
    ),
  },
  {
    question: "Is IUI painful?",
    answer: (
      <div className="space-y-3">
        <p>
          No. It feels like a routine Pap smear. A fine, flexible catheter passes through the cervix in under 5 minutes, with no anaesthesia and no surgical instruments.
        </p>
      </div>
    ),
  },
  {
    question: "What sperm count is needed for IUI?",
    answer: (
      <div className="space-y-3">
        <p>
          A post-wash total motile sperm count (TMSC) of at least 5 to 10 million. Below 5 million motile sperm, ICSI gives much better results.
        </p>
      </div>
    ),
  },
  {
    question: "Where does Dr. Mona Dahiya offer IUI?",
    answer: (
      <div className="space-y-2">
        <p>3 centres:</p>
        <p>
          <strong className="text-white">Noida</strong> (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301)
        </p>
        <p>
          <strong className="text-white">Ghaziabad</strong> (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002)
        </p>
        <p>
          <strong className="text-white">Delhi</strong> (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024)
        </p>
      </div>
    ),
  },
  {
    question: "What is the success rate of IUI?",
    answer: (
      <div className="space-y-3">
        <p>
          15% to 20% per cycle in suitable couples, with 3 to 4 cycles giving a cumulative chance of roughly 40% to 50%. Age, open tubes and sperm quality matter most.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does IUI cost?",
    answer: (
      <div className="space-y-3">
        <p>
          ₹12,000 to ₹18,000 per completed cycle on average: procedure ₹5,000 to ₹7,000, sperm washing ₹3,000 to ₹4,000, scans ₹3,000 to ₹5,000 and medicines ₹1,500 to ₹3,000.
        </p>
      </div>
    ),
  },
  {
    question: "When can I take a pregnancy test after IUI?",
    answer: (
      <div className="space-y-3">
        <p>
          14 days after insemination. A blood Beta-hCG test is done on Day 28 of the cycle, and a home urine test too early can give a false result.
        </p>
      </div>
    ),
  },
  {
    question: "Can I resume normal activity after IUI?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. Rest for 15 minutes at the clinic, then carry on with your day. Avoid heavy lifting and strenuous exercise for the 2 weeks until the test.
        </p>
      </div>
    ),
  },
  {
    question: "What is the risk of twins with IUI?",
    answer: (
      <div className="space-y-3">
        <p>
          Below 5% with careful monitoring, because the aim is 1 or 2 dominant follicles. If 3 or more follicles develop, the cycle is converted or cancelled to protect you.
        </p>
      </div>
    ),
  },
];

export default function IuiTreatmentFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About IUI Treatment in Delhi NCR"
        />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
