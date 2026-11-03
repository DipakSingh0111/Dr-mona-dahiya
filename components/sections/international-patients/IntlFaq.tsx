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
    question: "How long do international patients need to stay in India?",
    answer: (
      <p>
        10-14 days if you can begin stimulating at home under the supervision of
        Dr. Dahiya. We will need you in India for your last couple of scans,
        collection, fertilisation and transfer. If you cannot start your cycle
        at home, we recommend you stay for 18-21 days.
      </p>
    ),
  },
  {
    question: "Do you help with Indian medical visas?",
    answer: (
      <p>
        Yes. We will provide you with the necessary information and medical visa
        invitation letter after you complete your initial review with us. Our
        international department will help you fill out the required forms for
        the Indian Embassy.
      </p>
    ),
  },
  {
    question: "Can PGT-A genetic testing be done for international couples?",
    answer: (
      <p>
        Yes, we offer PGT-A, which screens your blastocysts for genetic
        abnormalities before they are transferred. We do not offer sex
        selection; it is illegal in India.
      </p>
    ),
  },
  {
    question: "Where will our procedures take place?",
    answer: (
      <p>
        You can choose any of our 3 locations: Noida, Ghaziabad and Delhi.
      </p>
    ),
  },
  {
    question: "How much does IVF in India cost for international patients?",
    answer: (
      <p>
        On average, a full IVF cycle with ICSI will cost you US$2,500 -
        US$3,500, plus medication of US$700 - US$1,100. Depending on your age
        and ovarian reserve, this is approximately 70-85% cheaper than the US.
      </p>
    ),
  },
  {
    question: "Can the first consultation be done online?",
    answer: (
      <p>
        Yes, we offer online consultations to our international patients. It
        costs US$25, and we will go over your files with you.{" "}
        <Link
          href="/ivf-consultation-online"
          className="underline decoration-[#93c5fd]/50 underline-offset-2 text-[#93c5fd]"
        >
          More information about online consultations
        </Link>
        .
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I start stimulation in my home country?",
    answer: (
      <p>
        In most cases, yes. You can start taking pills to prime your cycle at
        home and get local scans, then come to India to finish your cycle right
        before we collect your eggs.
      </p>
    ),
  },
  {
    question: "What happens if we need to fly home before transfer?",
    answer: (
      <p>
        We can freeze all of your embryos, and you can come back to India to do
        your transfer at a later date. Most blastocysts survive the thawing
        process.
      </p>
    ),
  },
  {
    question: "Can our embryos or gametes be shipped abroad?",
    answer: (
      <p>
        You must have the National ART and Surrogacy Board&apos;s written
        permission to send your gametes or embryos out of the country. Please
        ask us if this is something you want to consider.
      </p>
    ),
  },
  {
    question: "Can single women or same-sex couples be treated?",
    answer: (
      <p>
        Yes, under the Indian ART Act single women can use IVF. They must be
        unmarried, divorced or widowed and between the ages of 21-50. We will
        verify your status when you book your first appointment.
      </p>
    ),
  },
  {
    question: "Is surrogacy available for international patients?",
    answer: (
      <p>
        Currently, no. Only Indian couples can use a surrogate, and it must be
        altruistic.
      </p>
    ),
  },
];

export default function IntlFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Questions"
        title="International IVF Questions Answered"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
