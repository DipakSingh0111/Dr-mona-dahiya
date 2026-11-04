"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How do I choose the right IVF doctor in Delhi?",
    answer:
      "There are 4 points to consider. 1. Should be MD/DNB in Obs & Gynae and trained in IVF. 2. Experience in IVF. 3. Good lab with skilled embryologist. 4. Proper plan and costing given to you before starting. Dr. Mona Dahiya has more than 25 years of experience in IVF. She is an MD, DNB and has done her IVF fellowship in Singapore General Hospital.",
  },
  {
    question: "At what age should I consult an IVF specialist?",
    answer:
      "If you are below 35 years - Try for 12 months and then consult. If you are above 35 years - Consult after 6 months. If you are above 40 years - Consult immediately. As egg quality decreases with age.",
  },
  {
    question: "Does every couple dealing with infertility need IVF?",
    answer:
      "Not always. Many couples can conceive with life style modifications or Ovulation induction or IUI. Blocked tubes, low sperm count, low AMH, Endometriosis or failed IUI after 3-4 cycles are indications for IVF.",
  },
  {
    question: "What is the average cost of an IVF cycle in Delhi?",
    answer:
      "IVF costs around 1.5 lakhs to 2.5 lakhs (₹1,50,000 to ₹2,50,000). This cost varies depending on the drugs, lab work (ICSI) and number of embryo freezing and genetic tests done. After consultation we can give you an estimated quote.",
  },
  {
    question: "Can an IVF doctor or clinic guarantee a successful pregnancy?",
    answer:
      "No doctor or clinic can assure you of a live birth. There are many factors that affect pregnancy such as age, egg quality, sperm quality and your medical conditions.",
  },
  {
    question: "How Important is the embryology lab compared to the doctor?",
    answer:
      "Both are equally important. The doctor will guide you through the protocol and transfer the embryo. Lab will ensure good quality air, incubators and have skilled embryologists to culture your embryos for 5 days.",
  },
  {
    question: "Is the IVF procedure painful?",
    answer:
      "No. The pick up procedure is done in 15-20 mins and you will not feel any pain. Some patients may experience cramps/bloating for 1-2 days after pickup.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How successful is IVF with Dr. Mona Dahiya?",
    answer:
      "Our IVF success rates are greater than 90%. Your chance of pregnancy will depend on your age, AMH and sperm quality. We will tell you after assessing your reports.",
  },
  {
    question: "How long does one IVF cycle take?",
    answer:
      "One IVF cycle can take 4-5 weeks. From your first injection to pregnancy test: 10-12 days of stimulation followed by pick up of eggs. Cultured for 5 days and a blood test is done 14 days after transfer.",
  },
  {
    question: "Which tests are needed before starting IVF?",
    answer:
      "There are 5 main tests to be done before IVF. 1. AMH + Antral follicle count 2. Semen Analysis 3. Scan of uterus 4. Hormonal profile 5. Both partner to be tested for infections like HIV, HBs Ag, Anti HCV & VDRL.",
  },
  {
    question: "Where is the Delhi clinic, and can I consult online first?",
    answer:
      "We are located at Building No. 41, 1st floor, Ring Road, Block Q Lajpat Nagar IV, Lajpat Nagar, New Delhi - 110024. You can take an online consultation to check your reports.",
  },
  {
    question:
      "Which Delhi IVF clinic has the highest take-home baby success rate?",
    answer:
      "Always ask the clinic about their live birth rates divided into 3 age groups i.e. <35, 35-39 and >40. Dr. Mona Dahiya's IVF success rates are greater than 90%. We can tell you more about it when you come for your first visit.",
  },
  {
    question: "How do I pick the right IVF specialist in Delhi NCR?",
    answer:
      "Look for a full time embryologist. Read some patient reviews. Dr. Mona Dahiya has a rating of 4.9 on Google. Check if they have an in-house diagnostic lab and proper plan is given to you before starting.",
  },
  {
    question:
      "Does the location of the clinic matter during an IVF cycle in Delhi?",
    answer:
      "Yes, there are multiple visits required in one IVF cycle. Around 4-6 times in 10-12 days you have to come for scans and bloods. So make sure the clinic is close to you but don't compromise with the quality of the lab.",
  },
];

export default function BestIvfDelhiFAQ() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ's"
        title="Top FAQs About fertility Treatment in Delhi"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
