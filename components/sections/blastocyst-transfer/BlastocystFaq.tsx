"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Is a Day-5 transfer always better than a Day-3 transfer?",
    answer: (
      <div className="space-y-3">
        <p>
          Not always. Blastocysts implant at higher rates (65% to 70% per embryo) because weaker embryos stop growing between Days 3 and 5. With only 1 or 2 embryos on Day 3, an earlier transfer may be safer than risking arrest in the lab.
        </p>
      </div>
    ),
  },
  {
    question: "Why do some embryos not reach the blastocyst stage?",
    answer: (
      <div className="space-y-3">
        <p>
          Up to Day 3, growth runs on the egg&apos;s own reserves. On Day 4 the embryo&apos;s own genes switch on, so 3 problems show up: high sperm DNA fragmentation, chromosomal errors in the egg, and weak mitochondria. Typically 30% to 50% of embryos reach Day 5.
        </p>
      </div>
    ),
  },
  {
    question: "Is bed rest needed after a blastocyst transfer?",
    answer: (
      <div className="space-y-3">
        <p>
          No. Studies show bed rest does not improve implantation. Rest for 15 minutes at the clinic, then return to normal, non-strenuous activity the same day.
        </p>
      </div>
    ),
  },
  {
    question: "Where can I have blastocyst transfer with Dr. Mona Dahiya?",
    answer: (
      <div className="space-y-2">
        <p>3 clinics:</p>
        <p>
          <strong className="text-ink">Noida</strong> (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301)
        </p>
        <p>
          <strong className="text-ink">Ghaziabad</strong> (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002)
        </p>
        <p>
          <strong className="text-ink">Delhi</strong> (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024)
        </p>
      </div>
    ),
  },
  {
    question: "How many blastocysts should be transferred?",
    answer: (
      <div className="space-y-3">
        <p>
          Usually 1. A single good blastocyst gives a similar pregnancy chance to 2 Day-3 embryos while keeping the twin risk near 1% to 2%. Spare blastocysts are frozen.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can blastocysts be frozen and used later?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. Vitrified blastocysts survive warming over 95% of the time, and a frozen transfer lets the lining recover after stimulation. See{" "}
          <span className="text-rose underline">Frozen Embryo Transfer</span>.
        </p>
      </div>
    ),
  },
  {
    question: "Does blastocyst transfer cost more?",
    answer: (
      <div className="space-y-3">
        <p>
          A little. Extended culture adds ₹15,000 to ₹25,000 to the IVF cycle, which is usually offset by needing fewer transfers.
        </p>
      </div>
    ),
  },
  {
    question: "When is the pregnancy test after blastocyst transfer?",
    answer: (
      <div className="space-y-3">
        <p>
          A blood Beta-hCG test 12 to 14 days after transfer. Home urine tests before Day 10 often give false results.
        </p>
      </div>
    ),
  },
  {
    question: "Is blastocyst transfer painful?",
    answer: (
      <div className="space-y-3">
        <p>
          No. It feels like a routine pelvic exam, takes about 5 to 10 minutes and needs no anaesthesia.
        </p>
      </div>
    ),
  },
];

export default function BlastocystFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Blastocyst Transfer in Delhi NCR"
        />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
