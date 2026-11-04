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
    question: "Are these stories from real patients?",
    answer:
      "The following are real reviews from patients that visited Dr. Mona Dahiya. Your experience may vary.",
  },
  {
    question: "Can I conceive with my own eggs if my AMH is below 0.5 ng/mL?",
    answer:
      "There are many women who have become pregnant with their own eggs by following protocols with Dr. Mona. Low AMH only tells you the quantity of eggs you have left in your ovaries. It does not tell you the quality of those eggs. Usually if you are under the age of 38 we can get you pregnant with your own eggs.",
  },
  {
    question: "What is DuoStim?",
    answer:
      "DuoStim allows us to stimulate your body during both your follicular phase and your luteal phase to produce more eggs in one cycle.",
  },
  {
    question: "What is a low AMH level?",
    answer:
      "When your AMH level is below 1.0 ng/ml, you are considered to have low AMH. Below 0.5 ng/ml is extremely low.",
  },
  {
    question: "Does low AMH mean poor egg quality?",
    answer:
      "Low AMH tells us that you have a lower reserve of eggs. It does not mean you have poor quality eggs. Your age is what determines your egg quality.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Should I use donor eggs straight away?",
    answer:
      "Try to use your own eggs first. If you have back to back cycles that produce no blastocysts that can be transferred then donor eggs are a good option as they have a high success rate of 60-70%.",
  },
  {
    question: "How many cycles might I need?",
    answer:
      "We need to get you some embryos that we know are of good quality. So usually it's best to do 2-3 cycles and freeze embryos before transferring.",
  },
  {
    question: "Can supplements raise AMH?",
    answer:
      "Not really. There are some things that you can do to increase your egg quality, but not increase your AMH level.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "All of our locations that offer in-person visits are here. To see when you can meet with Dr. Mona scroll up and see our office hours. She sees patients from 10am to 5pm Monday to Saturday.",
  },
  {
    question: "Can I share my reports online first?",
    answer: (
      <>
        Yes we do online appointments for Rs. 1000. We also see clients from
        abroad at $25.{" "}
        <Link
          href="/ivf-consultation-online"
          className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
        >
          Click here
        </Link>{" "}
        to learn more about online consultations.
      </>
    ),
  },
];

export default function LowAmhFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Frequently Asked Questions"
        title="Frequently Asked Questions: Low AMH Success Stories"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
