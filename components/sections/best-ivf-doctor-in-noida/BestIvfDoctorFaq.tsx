"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How do I choose the right IVF doctor in Noida?",
    answer:
      "Make sure your doctor has MD/DNB in OB&G and trained for IVF. Should have enough experience and a good lab setup with skilled embryologists. Should provide you with detailed treatment plan and cost before starting IVF. Dr. Mona Dahiya has more than 25 years of experience and holds MD, DNB and IVF fellowship from Singapore General Hospital.",
  },
  {
    question: "At what age should I consult an IVF specialist?",
    answer:
      "If you are below 35 years you can wait for 1 year. If you are 35 years or above you can consult after 6 months of trying. If you are above 40 years we recommend you to consult immediately. As age plays an important role in determining egg quality.",
  },
  {
    question: "Does every couple dealing with infertility need IVF?",
    answer:
      "Not necessarily. Some couples can conceive with simple life style modifications, Ovulation Induction and IUI. We will advise you to do IVF if there is tubal blockage, low sperm count, Low AMH, Endometriosis or if you have failed 3-4 IUI cycles.",
  },
  {
    question: "What is the average cost of an IVF cycle in Noida?",
    answer:
      "Cost of one IVF cycle is Rs. 1.5 lakhs to Rs. 2.5 lakhs (₹1,50,000 to ₹2,50,000). This may vary according to medications, type of lab procedure required (ICSI, Embryo Freezing or Genetic testing). We will share a detailed cost with you after your first visit.",
  },
  {
    question: "Can an IVF doctor or clinic guarantee a successful pregnancy?",
    answer:
      "No. There is no doctor who can guarantee you a pregnancy or live birth. Your chances of success will depend on your Age, Quality of oocytes and sperms, Ovarian Reserve and any medical problems you may have.",
  },
  {
    question: "How important is the embryology lab compared to the doctor?",
    answer:
      "Yes it's very important. Along with your doctor having experience in doing IVF, make sure you are getting your embryos fertilized and grown in a good lab. With proper air purification system, temperature controlled incubators and an experienced embryologist. These factors play a major role in getting your embryo to grow for 5 days.",
  },
  {
    question: "Is the IVF procedure painful?",
    answer:
      "Egg collection procedure will take around 15-20 mins and is done under light sedation so you won't feel any pain. You may feel slight cramps or swelling in abdomen for 1-2 days.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How successful is IVF with Dr. Mona Dahiya?",
    answer:
      "Our clinic success rate is greater than 90%. But your chances of success will vary according to your age, AMH and Sperm quality. Dr. Dahiya will explain you after reviewing your reports.",
  },
  {
    question: "How long does one IVF cycle take?",
    answer:
      "One complete IVF cycle will take around 4-5 weeks. Starting from Day 1 of your period when you start injections, till you get a positive pregnancy test. You will undergo stimulation for 10-12 days, Egg collection, 5 days embryo culture and pregnancy test after 14 days of embryo transfer.",
  },
  {
    question: "Which tests are needed before starting IVF?",
    answer:
      "We will perform basic fertility tests such as AMH and Antral follicle scan, Semen Analysis, Uterine Sonography and Hormonal profile. We will also screen both the partners for HIV, HBsAg, Anti HCV and VDRL.",
  },
  {
    question: "Where is the Noida clinic, and can I consult online first?",
    answer:
      "You can reach our IVF Clinic in Noida at 3rd Floor K-06 Above Firstcry, Baraula, Sector 49, Noida UP 201301. Or you can also connect with us for Online Consultation to review your reports.",
  },
  {
    question: "Who are the top-rated IVF specialists in Noida?",
    answer:
      "Look for Qualifications, Experience and Patient Reviews. Dr. Mona Dahiya holds MD (Gold Medalist), DNB, IVF fellowship from Singapore General Hospital, more than 25 years of experience and has 4.9 Rating on Google.",
  },
  {
    question: "What advanced fertility technologies do Noida doctors use?",
    answer:
      "Some of the popular ones are ICSI, Blastocyst culture (Growing embryos for 5 days), Laser Assisted Hatching and Genetic testing of Embryos (PGT-A). Not all cases may require all the four. Dr. Dahiya will add them in your cycle if your case requires.",
  },
  {
    question:
      "Why choose a fertility specialist over a general gynaecologist in Noida?",
    answer:
      "A Fertility Specialist deals with problems of conception. Unlike a Gynecologist they do not deliver babies. You can approach a fertility specialist if you have been trying to conceive for 1 year or more (6 months if you are >35 years). Or if you have known tubal problems, low AMH or Male factor problems.",
  },
];

export default function BestIvfDoctorFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="FAQs on Best IVF Doctor in Noida"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
