"use client";

import { FaCheck, FaFlask } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

const costCards = [
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Diagnostic hysteroscopy in clinic",
    description:
      "This will be done under local anesthesia at our office. Cost is between 15,000-25,000 INR.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Operative hysteroscopy",
    description:
      "To remove septum, fibroids and adhesions under general anesthesia. Cost is between 35,000-65,000 INR.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Fertility Laparoscopy",
    description:
      "Removal of endometrioma, Fallopian tube clipping and myomectomies cost between 55,000-1,10,000 INR.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Antiadhesive Gel and Stents",
    description: "These cost between 8,000-15,000 INR.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does operative hysteroscopy improve IVF success?",
    answer:
      "There are 4 major pathologies within uterine cavity which can cause infertility. Polyps, fibroid, adhesions and septum. All these can be removed by operative hysteroscopy.",
  },
  {
    question: "What is the recovery time after laparoscopy?",
    answer:
      "As all our incisions are 5-10 mm long you can expect to return to normal activities after 3-5 days. Most patients are discharged on the same day.",
  },
  {
    question: "Why must a hydrosalpinx be clipped before IVF?",
    answer:
      "Hydrosalpinx is filled with inflammatory fluids which can leak out of tube into uterine cavity. This can wash off your embryo or even be toxic to it. Your chance of success with IVF decreases by almost 50%.",
  },
  {
    question: "Where does Dr. Mona Dahiya perform surgery?",
    answer:
      "Dr. Mona sees her patients at her 3 clinics located in Noida, Ghaziabad and Delhi. For detailed addresses please scroll down.",
  },
  {
    question: "How much does fertility surgery cost?",
    answer:
      "Diagnostic hysteroscopy between 15,000-25,000. Operative hysteroscopy between 35,000-65,000. Laparoscopy between 55,000-1,10,000. Antiadhesive products between 8,000-15,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How soon can I try to conceive after surgery?",
    answer:
      "You can start trying to conceive after 1 month from hysteroscopy and 2-3 months from laparoscopy and myomectomy.",
  },
  {
    question: "Will surgery reduce my ovarian reserve?",
    answer:
      "Yes. So we make sure to do our surgery in an ovary sparing technique. You should get an AMH done before surgery.",
  },
  {
    question: "Is hysteroscopy painful?",
    answer:
      "Diagnostic hysteroscopy can be performed in clinic under local anesthesia. It takes 10-15 mins to complete. Operative hysteroscopy is done under light general anesthesia.",
  },
  {
    question: "Can surgery avoid the need for IVF?",
    answer:
      "Yes. Sometimes removing your septum, polyps, adhesions and clearing your tubes can allow you to achieve natural pregnancy or pregnancy with IUI.",
  },
];

export default function LaparoscopyCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="Cost of Laparoscopy and Hysteroscopy"
          title="What Affects the Cost of Laparoscopy and Hysteroscopy"
          subtitle="Cost depends upon what type of surgery you require. All our surgeries are day care procedures. The costs are as follows"
        />

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <TreatmentSectionHeader
          eyebrow="Frequently Asked Questions"
          title="Top FAQs About Fertility Laparoscopy and Hysteroscopy"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
    </TreatmentSection>
  );
}
