"use client";

import {
  FaqAccordion,
  TreatmentSection,
  TreatmentSectionHeader,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How is the 10-point fertility score calculated?",
    answer:
      "There are 5 categories: how old you are, how long you have been trying, do you get your period every month and are you producing healthy sperm, risk factors that can lead to lower chances of getting pregnant, and finally how many miscarriages or failures have you had. Each category is scored out of 2 so we end up with 10 points total.",
  },
  {
    question: "What should I do if my score is below 5 out of 10?",
    answer:
      "Book an appointment with Dr. Mona Dahiya within 2 to 4 weeks. We will evaluate your ovarian reserve by doing a blood test and ultrasound, as well as order a semen analysis. If your score was low it's probably due to your age and/or time trying, or you have a history of something that could prevent pregnancy.",
  },
  {
    question: "Can an online fertility score replace clinical tests?",
    answer:
      "No, this assessment was made using different factors that were pulled from previous studies on fertility (FertiSTAT). You will need to see your doctor and get an ultrasound and blood work to diagnose yourself.",
  },
  {
    question: "Should both partners take the assessment?",
    answer:
      "Yes, you should both take the assessment and have your own score. The male can play a role in infertility as well; 40 - 50%.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is my data stored?",
    answer:
      "All of your information stays on your computer when you take this test. You will receive your score instantly on screen.",
  },
  {
    question: "When should I see a doctor even with a high score?",
    answer:
      "If you've been trying for 12 months (6 months if the woman is over 35), your periods are extremely painful or not there, or you've had 2 or more miscarriages, you should book an appointment.",
  },
  {
    question: "Which tests follow the assessment?",
    answer:
      "Normally it's just 4: AMH + antral follicle scan, tubal patency test (HSG), uterine ultrasound & semen analysis for the male partner.",
  },
  {
    question: "Can I book a consultation after the assessment?",
    answer:
      "Of course! We offer consultations at our office in Noida / Ghaziabad / Delhi or online. Come prepared with your fertility score and any previous tests you've had completed.",
  },
];

export default function FertilityAssessmentFaq() {
  return (
    <TreatmentSection className="bg-white">
      <TreatmentSectionHeader
        eyebrow="Commonly Asked Questions about the Fertility Test"
        title={
          <>
            Top FAQs About the
            <br className="hidden sm:inline" /> Fertility Assessment
          </>
        }
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
