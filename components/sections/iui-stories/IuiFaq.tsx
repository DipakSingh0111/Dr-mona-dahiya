"use client";

import Link from "next/link";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

const leftFaqs: FaqItem[] = [
  {
    question: "Are these stories from real patients?",
    answer:
      "Yes, all of these pregnancy stories are from real patients of Dr. Mona. The results we give are from our IVF center where we follow the patients' embryos from start to finish.",
  },
  {
    question: "How many IUI attempts before IVF?",
    answer:
      "We recommend our patients take 3-4 IUIs. After that we recommend taking IVF/ICSI to prevent loss of time and money.",
  },
  {
    question: "Is IUI painful?",
    answer:
      "IUIs don't hurt at all. They feel like you just had a pap test. 10 seconds and you're done, also no anesthesia.",
  },
  {
    question: "When is IUI done?",
    answer:
      "36 hours after you take your trigger shot is the ideal time to perform your IUI. You want to make sure your follicle has reached 18mm-20mm.",
  },
  {
    question: "Do I need tests before IUI?",
    answer:
      "We advise all patients to get an HSG to check your tubes are open. Get a sperm report done and an ultrasound to make sure you're able to get pregnant.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can IUI work with low sperm count?",
    answer:
      "Yes, you can use IUIs if you have mild male factor infertility. As long as your sperm count after the wash is 5-10 million you can use IUI.",
  },
  {
    question: "Should I rest after IUI?",
    answer:
      "You can hang out at our office for 10-15 minutes, then you can go on about your day.",
  },
  {
    question: "How much does IUI cost?",
    answer:
      "Please email us or ask below about pricing. Prices vary if you need ultrasounds done during your treatment or if you need medications.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "We have three locations. Two in Noida, One in Ghaziabad and Delhi. Mon-Saturday from 10am-5pm.",
  },
  {
    question: "Can I share my reports online first?",
    answer: (
      <>
        Yes, you can send us your reports and talk to Dr. Mona online. The cost
        of an online consultation is 1000 Rupees for Indian nationals and $25
        for foreign nationals.{" "}
        <Link href="/ivf-consultation-online" className={linkClass}>
          Click here for Online Consultation.
        </Link>
      </>
    ),
  },
];

export default function IuiFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions: IUI Success Stories"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
