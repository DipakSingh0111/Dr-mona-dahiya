"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What is the best age to freeze my eggs?",
    answer: (
      <p>
        The ideal time to freeze your eggs is between the ages of 27 and 35.
        Your eggs are most numerous and healthy at this age. If you freeze
        between the ages of 36 and 39, you may require 2 cycles to get enough
        eggs.
      </p>
    ),
  },
  {
    question: "How many eggs should I freeze?",
    answer: (
      <p>
        If you are less than 35 years old, you will require approximately 10–15
        mature eggs to give you a good chance of having one baby. If you are
        between 36 and 38 years old, we recommend storing 15 to 20 eggs.
      </p>
    ),
  },
  {
    question: "How long can frozen eggs be stored in India?",
    answer: (
      <p>
        Once your eggs are frozen, they are essentially stopped in time. There
        is no ageing process when they are in liquid nitrogen at -196°C.
        However, you will need to abide by the terms of storage as per the ART
        Act.
      </p>
    ),
  },
  {
    question: "Where can I freeze my eggs with Dr. Mona Dahiya?",
    answer: (
      <p>
        Dr. Mona Dahiya operates from 3 clinics: Noida (3rd Floor, K-06, above
        FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad
        (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj
        Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41,
        First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New
        Delhi 110024).
      </p>
    ),
  },
  {
    question: "How much does egg freezing cost?",
    answer: (
      <p>
        You can expect to spend around ₹1,25,000 to ₹1,80,000 for one cycle of
        egg freezing, plus annual storage charges of ₹15,000 to ₹25,000.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is egg retrieval painful?",
    answer: (
      <p>
        No. Egg collection takes around 15 minutes and you will be given IV
        sedation. You can resume normal activities the next day or within 48
        hours.
      </p>
    ),
  },
  {
    question: "Does egg freezing affect my natural fertility later?",
    answer: (
      <p>
        No. Egg freezing uses the eggs that were meant to be released that month
        anyway, so your chance of getting pregnant naturally remains the same.
      </p>
    ),
  },
  {
    question: "How are frozen eggs used later?",
    answer: (
      <p>
        Your eggs will be thawed (&gt;95% survival rate), fertilised using ICSI,
        grown into embryos and transferred into your uterus.
      </p>
    ),
  },
  {
    question: "How long does an egg freezing cycle take?",
    answer: (
      <p>
        Egg freezing takes approximately two weeks: 10–12 days of injections
        with 4–5 ultrasounds, and then collection of your eggs.
      </p>
    ),
  },
];

export default function EggFreezingFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ's"
        title="Top FAQs About Egg Freezing in Noida and Delhi NCR"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
