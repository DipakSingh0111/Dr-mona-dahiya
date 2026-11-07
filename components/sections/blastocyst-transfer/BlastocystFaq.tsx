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
    question: "Is a Day-5 transfer always better than a Day-3 transfer?",
    answer: (
      <p>
        Not always. Day 5 embryos have higher implantation rates of 65%-70% per
        embryo transferred. However, if you only have 1 or 2 embryos, it may be
        beneficial to transfer them on Day 3 instead of risking them stopping
        their growth in the incubator.
      </p>
    ),
  },
  {
    question: "Why do some embryos not reach the blastocyst stage?",
    answer: (
      <p>
        Embryos rely on the energy stores of the egg up until Day 3. Their own
        genes activate on Day 4. This is where problems occur with high DNA
        fragmentation in sperm, abnormal chromosomes in the egg and poor
        mitochondrial function. On average, 30%-50% of embryos will reach Day 5.
      </p>
    ),
  },
  {
    question: "Is bed rest needed after a blastocyst transfer?",
    answer: (
      <p>
        No, there is no evidence that bed rest improves pregnancy rates. Take 15
        mins of rest after your transfer and carry on with your daily
        (non-strenuous) activities.
      </p>
    ),
  },
  {
    question: "Where can I have blastocyst transfer with Dr. Mona Dahiya?",
    answer: (
      <p>
        At our 3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula,
        Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC,
        C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad,
        Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring
        Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).
      </p>
    ),
  },
  {
    question: "How many blastocysts should be transferred?",
    answer: (
      <p>
        One blastocyst will have the same success rate as 2 Day 3 embryos, while
        reducing the risk of twins to around 1%-2%. All remaining embryos can be
        frozen.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can blastocysts be frozen and used later?",
    answer: (
      <p>
        Yes, blastocysts have very high survival rates after thawing (&gt;95%)
        and can be transferred in a frozen cycle. Learn more about{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Frozen Embryo Transfer
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Does blastocyst transfer cost more?",
    answer: (
      <p>
        Slightly. As mentioned above, extending embryo culture costs
        ₹15,000–₹25,000 more per cycle, but it may reduce the number of
        transfers required.
      </p>
    ),
  },
  {
    question: "When is the pregnancy test after blastocyst transfer?",
    answer: (
      <p>
        Your blood Beta-hCG will be checked 12–14 days after transfer. Home
        urine tests are unreliable before Day 10.
      </p>
    ),
  },
  {
    question: "Is blastocyst transfer painful?",
    answer: (
      <p>
        No, it&apos;s no different to a routine examination. It takes around
        5–10 minutes and no anaesthesia is required.
      </p>
    ),
  },
];

export default function BlastocystFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient FAQ's"
        title={
          <>
            Top FAQs About Blastocyst
            <br className="hidden sm:inline" /> Transfer in Delhi NCR
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
