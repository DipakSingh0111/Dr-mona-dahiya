"use client";

import {
  FaqAccordion,
  TreatmentSection,
  TreatmentSectionHeader,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What fertility services does Dr. Mona Dahiya offer?",
    answer:
      "More than 20 different services are available such as IUI, IVF, Blastocyst ICSI, pgt-a, Mini IVF, Laser Assisted Hatching, Egg Freezing, Onco fertility, PRP, Era Test, Donor Program and surgeries like Hysteroscopy and laparoscopy.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "This will depend on many factors which we will diagnose with help of 5 tests. Semen analysis, Counting of Antral Follicles, AMH level, Testing tubes if they are blocked or open and evaluating cavity. We then suggest simple things like intercourse during ovulation or IUI before moving to IVF.",
  },
  {
    question: "Where are Dr. Mona Dahiya's clinics?",
    answer:
      "We have three clinics. One in Noida (3rd floor k-06 Above firstcry Baraula Sector 49 Noida, Uttar pradesh 201301), One in Ghaziabad (2nd floor Rdc c-53a Near Bikanerwala sector 15 sector 10 raj nagar ghaziabad up 201002) and One at south delhi (B No 41 first floor ring road block q Lajpat Nagar iv Lajpat Nagar Delhi 110024)",
  },
  {
    question: "Do I need a referral to book?",
    answer:
      "Of course, no referral is required to meet with dr mona. Just bring all your past data with you. Like reports and scanns and semen report if available.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I consult online first?",
    answer:
      "Yes sure you can meet her on online consultation before visiting to clinic.",
  },
  {
    question: "How much does fertility treatment cost?",
    answer:
      "It depends on the treatment: IUI ₹15,000, Mini IVF ₹1,50,000 to ₹2,00,000 and IVF ₹1.5 lakh to ₹2.5 lakh per cycle. You get an itemised estimate before starting.",
  },
  {
    question: "Does Dr. Mona Dahiya treat male infertility?",
    answer:
      "Yes. Services include semen and DNA fragmentation testing, ICSI, surgical sperm retrieval (TESA, PESA, micro-TESE) and sperm freezing.",
  },
  {
    question: "Are your clinics ART Act compliant?",
    answer:
      "The clinics follow the ART (Regulation) Act for consent, donor sourcing and gamete storage.",
  },
];

export default function OurServicesFaq() {
  return (
    <TreatmentSection className="bg-white">
      <TreatmentSectionHeader
        eyebrow="Things Patients Ask Us"
        title="Top FAQs About Our Fertility Services"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
