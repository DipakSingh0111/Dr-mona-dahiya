"use client";

import { FaCheck, FaPills } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Diagnostic or operative scope",
    description: "A look alone, or treatment of polyps, fibroids, septum or adhesions.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Anaesthesia",
    description: "Local block, sedation or short general anaesthesia.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Facility and day-care stay",
    description: "OT time and observation after the procedure.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Histopathology and follow-up",
    description: "Tissue testing and a review visit when needed.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Is hysteroscopy painful?",
    answer:
      "Most women feel only mild cramping with diagnostic hysteroscopy under a local block. Operative work is done under short general anaesthesia, so you are asleep for the procedure.",
  },
  {
    question: "Can I go home the same day?",
    answer:
      "Yes. It is a day-care procedure. After a few hours of observation you go home the same day in most cases.",
  },
  {
    question: "When can I try for pregnancy after hysteroscopy?",
    answer:
      "Usually after 1 cycle once the lining has healed. Your doctor confirms timing at the follow-up visit.",
  },
  {
    question: "Is hysteroscopy needed before IVF?",
    answer:
      "Not for every patient. It is advised after failed transfers, when scans suggest a cavity problem, or when adhesions, polyps or a septum are suspected.",
  },
  {
    question: "What is a hysteroscopy, and why is it performed?",
    answer:
      "A thin telescope is passed through the cervix to see inside the uterus. It finds and, when needed, treats polyps, fibroids, adhesions or a septum that can block implantation.",
  },
  {
    question: "What is the difference between diagnostic and operative hysteroscopy?",
    answer:
      "Diagnostic means looking only. Operative means treating the finding in the same sitting—removing a polyp or fibroid, dividing a septum or releasing adhesions.",
  },
  {
    question: "Is a hysteroscopy painful, and does it require anesthesia?",
    answer:
      "Diagnostic scopes usually need only a local cervical block. Operative hysteroscopy is done under short general anaesthesia for comfort and precision.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How long does a hysteroscopy take, and is it a day-care procedure?",
    answer:
      "Diagnostic work often takes 10 to 30 minutes; operative work may take longer. Including recovery, you spend a few hours and go home the same day.",
  },
  {
    question: "How much does a hysteroscopy cost in India / Delhi NCR?",
    answer:
      "Diagnostic office hysteroscopy is about ₹15,000 to ₹25,000. Operative hysteroscopy is about ₹35,000 to ₹65,000, depending on the finding and anaesthesia.",
  },
  {
    question: "What is the recovery time after a hysteroscopy?",
    answer:
      "Light cramping or spotting for a day or two is common. Most women return to desk work in 1 to 3 days after a diagnostic scope, and a little longer after operative work.",
  },
  {
    question: "On which cycle day should a hysteroscopy be scheduled?",
    answer:
      "Usually in the first half of the cycle, after the period ends, when the lining is thin and the cavity view is clearest.",
  },
  {
    question: "Does hysteroscopy improve IVF success rates?",
    answer:
      "When a cavity problem is found and corrected—polyps, adhesions, septum or submucosal fibroids—implantation chances improve because the embryo has a healthier surface.",
  },
  {
    question: "What are the risks or side effects of a hysteroscopy?",
    answer:
      "Risks are low: light bleeding, cramping, rare infection or fluid overload. Serious complications are uncommon with modern day-care technique.",
  },
  {
    question: "How soon can you try to conceive or do an embryo transfer after hysteroscopy?",
    answer:
      "Often after one healing cycle. Embryo transfer is timed once the lining looks ready on scan, usually the next prepared cycle.",
  },
];

export default function HysteroscopyCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors Breakdown"
          subtitle="Cost depends on whether the scope is diagnostic or operative, the type of anaesthesia and day-care stay. A written estimate is shared before the procedure."
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
          title="Frequently Asked Questions about Hysteroscopy"
        />
        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
    </TreatmentSection>
  );
}
