"use client";

import { FaCheck, FaFlask } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Diagnostic office hysteroscopy",
    description:
      "Day-care cavity check under local block: ₹15,000 to ₹25,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Operative hysteroscopy",
    description:
      "Septum, fibroid or adhesion surgery under general anaesthesia: ₹35,000 to ₹65,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Reproductive laparoscopy",
    description:
      "Cystectomy, tube removal or myomectomy: ₹55,000 to ₹1,10,000.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Anti-adhesion products",
    description:
      "Hyaluronic acid gel or intrauterine stents: ₹8,000 to ₹15,000.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does operative hysteroscopy improve IVF success?",
    answer:
      "It removes 4 common cavity problems (polyps, submucosal fibroids, adhesions and septa), restoring a normal shape and blood flow so the embryo has a receptive surface.",
  },
  {
    question: "What is the recovery time after laparoscopy?",
    answer:
      "Short. Cuts are only 5 to 10 mm, most women go home the same day or next morning, and desk work resumes in 3 to 5 days.",
  },
  {
    question: "Why must a hydrosalpinx be clipped before IVF?",
    answer:
      "The blocked tube fills with inflamed fluid that leaks into the uterus, washing embryos away and harming them. Untreated, it can cut IVF success roughly in half.",
  },
  {
    question: "Where does Dr. Mona Dahiya perform surgery?",
    answer:
      "Consultations and procedures are arranged across 3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does fertility surgery cost?",
    answer:
      "Diagnostic hysteroscopy ₹15,000 to ₹25,000, operative hysteroscopy ₹35,000 to ₹65,000 and laparoscopy ₹55,000 to ₹1,10,000, plus ₹8,000 to ₹15,000 for anti-adhesion products if used.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How soon can I try to conceive after surgery?",
    answer:
      "Usually after 1 to 3 months: about 1 cycle after hysteroscopy and 2 to 3 months after laparoscopic myomectomy.",
  },
  {
    question: "Will surgery reduce my ovarian reserve?",
    answer:
      "It can if done aggressively. Ovary-sparing cold-scissor techniques are used to protect healthy follicles, and AMH is checked before surgery.",
  },
  {
    question: "Is hysteroscopy painful?",
    answer:
      "Office diagnostic hysteroscopy takes 10 to 15 minutes under a local block. Operative hysteroscopy is done under short general anaesthesia.",
  },
  {
    question: "Can surgery avoid the need for IVF?",
    answer:
      "Sometimes. Removing a septum, polyp or adhesions, or opening tubes, lets many women conceive naturally or with IUI.",
  },
];

export default function LaparoscopyCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Laparoscopy and Hysteroscopy"
          subtitle="Costs depend on which procedure you need. Each is a day-care procedure, itemised before surgery."
        />

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {costCards.map((card) => (
              <StaggerItem key={card.title}>
              <CostFactorCard {...card} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Fertility Laparoscopy and Hysteroscopy"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
