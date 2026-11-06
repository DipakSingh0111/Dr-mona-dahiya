"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Can I get pregnant naturally with low AMH?",
    answer:
      "Anti Mullerian Hormone (AMH) tells you about your quantity of eggs remaining or your ovarian reserve. It does not tell you about the quality of your eggs. So as long as you release one good egg during your cycle you can conceive naturally. What matters here is your age. When you have low amh you have less time to try so if you don't get pregnant within 6 months please consult us.",
  },
  {
    question: "What is considered a low or critically low AMH level?",
    answer:
      "Following Are Low Amh Categories: Normal Amh >2 - 4 Ng/Ml. Low Amh Between 1-1.5 Ng/Ml. This Means Diminished Ovarian Reserve. Very Low Amh Less Than 1 - .5 Ng/Ml. Very Low Amh Less Than .5 You can expect 1- 3 eggs in your IVF Cycle.",
  },
  {
    question: "Can low AMH levels be increased or reversed?",
    answer:
      "Your body cannot grow new eggs. As mentioned above our bodies have limited no of eggs. There are ways in which we can improve our egg quality using medication like CoQ10 (Ubiquinol) Dhea And Growth Hormone. If you use them for at least 60 to 90 Days they can help you improve your mitochondrial efficiency and vasculature of your egg as well as better Fsh sensitivity.",
  },
  {
    question: "What is the success rate of IVF with low AMH?",
    answer:
      "When you have low amh your success rates largely depend on your age. If you are under 35 Years old and have low amh you still have higher chances of success ( 40%- 50%). Because though you are getting less eggs your percentage of good chromosome normal eggs are higher. If you are between 35 to 39 years old your success rate drops to 25%- 35 %. If you are 40 + your chance of success with non biopsied embryos will be 10%- 15%. But if you do embryo banking you can increase those odds to >50 %.",
  },
  {
    question:
      "What are the best IVF protocols for low AMH and poor ovarian response?",
    answer:
      "You should not use conventional method of ivf as your body won't respond to the high dose drugs and you'll get same number of eggs. Use low dose flare protocols like micro dose flare protocol or antagonist. Or even go with mild ivf or mini ivf technique which uses less amount of drugs and oral medication to stimulate your ovary. You may get lesser eggs but they will be of higher quality. Another option is DuoStim technique where we can stimulate your ovary twice in one cycle. One in follicular phase and other in luteal phase. You'll have higher chance of getting matured oocytes by doing 2 stimulation.",
  },
  {
    question: "What is embryo banking, and why is it recommended for low AMH?",
    answer:
      "Embryo banking means completing 2–3 consecutive retrievals and freezing Day 5/6 blastocysts before transfer. Pooling embryos raises cumulative success chances when you have limited eggs each cycle.",
  },
  {
    question: "Does low AMH cause early menopause?",
    answer:
      "Having low amh does not mean that you will enter menopause sooner. Menopause occurs at the age of 51 yrs on an average where there is no functioning of your ovary. You may have normal cycles with enough hormones to support you through your life. If your periods stop earlier please consult a gynecologist.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does low AMH IVF treatment cost in Delhi NCR?",
    answer:
      "You can budget for low amh IVF cycle between 1.25 to 2.25 lakhs. Depending on what you are asked for like: Injections: If You Need More Medications Or Recombinant lh Can Increase Your Cost. Icsi + Blastocyst Culture: Always Needed To Maximize Your Odds Of Getting Blastocysts From Your Limited No Of Eggs. Embryo Freezing: If You Are Trying For Multiple Cycles Then Cryogenic Charges.",
  },
  {
    question: "What causes low AMH in young women?",
    answer:
      "There are many causes why someone may have low amh. Following are some reasons: Endometriomas / Endometriosis. When your ovary develops cysts which we commonly call chocolate cysts. The process of removing these cysts can leave your ovary damaged. Genetic Cause. Family History Of Turner Syndrome Or Premature Ovarian Failure. History Of Surgery Or Chemo. Any Surgery done in your abdomen or chemo therapy can damage your follicle bank. Autoimmune Diseases. Thyroid Disease Or Addison Disease Can Also Lead To Low Amh.",
  },
  {
    question: "Does a low AMH level automatically mean I need donor eggs?",
    answer:
      "No You Don't. There are several protocols which you can do to ensure that you are using your own eggs. We can improve your chances of getting pregnant using DuoStim and hgh priming and embryo banking with advanced embryology. Only consider using donors if none of these options work out for you.",
  },
  {
    question: "What is the difference between conventional IVF and DuoStim?",
    answer:
      "When we say ivf usually we do 1 stimulation per cycle. In Duostim we will do 2 stimulations per cycle and retrieve eggs twice in one cycle. Allowing you to Bank More Embryos In Lesser Time.",
  },
  {
    question: "Does low AMH cause miscarriage?",
    answer:
      "No it doesn't. Miscarriage is based upon your age and the chromosome status of your egg. Not how many eggs you have in your ovaries.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for low AMH?",
    answer:
      "Noida ( 3rd Floor, K-06 Above Firstcry Baraula, Sector 49 Noida, Uttar Pradesh 201301), Ghaziabad ( 2nd floor RDC c- 53a Near Bikanerwala sector 15, Sector 10 Raj nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi ( Building Number 41 First Floor ring road, Block Q Lajpat Nagar iv Lajpat Nagar New Delhi 110024 ).",
  },
];

export default function LowAmhFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Frequently Asked Questions About Low Amh"
        title="Top FAQs About Low AMH Treatment"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
