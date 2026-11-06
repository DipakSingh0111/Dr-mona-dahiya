"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What are the normal ranges for sperm count and motility?",
    answer:
      "As per World Health Organisation Values: Your semen sample must contain at least 15 million sperm/ml or 39 million sperm per ejaculation. The total motility should be greater than 40 percent and progressive motility of sperm (straight or big circle movement) should be at least 32 percent.",
  },
  {
    question:
      "What is the difference between oligospermia and asthenozoospermia?",
    answer:
      "If only your sperm concentration is low i.e less than 15 million it's called as Oligospermia. When motility is lower than 32 percent progressive we call it as Asthenozoospermia. If you have all the above 3 values low then it's called as Oligoasthenoteratozoospermia (OAT)",
  },
  {
    question:
      "Can I get my partner pregnant naturally with low count and motility?",
    answer:
      "Yes it is possible. Only one good Sperm can fertilise the egg. But chances go down if your total motile count is less than 10 million. If you don't get pregnant within 6-12 months then you can start on ART procedures.",
  },
  {
    question: "Can low sperm count and motility be improved naturally?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. By correcting some things in your life style you can increase
          your count and motility in 72-90 days (One sperm cycle):
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Take Anti-oxidants - CoQ10, L-carnitine, Zinc and Vitamin E.
          </li>
          <li>
            Avoid heat from groin (Hot water bath, saunas, too tight clothes,
            keeping laptop on lap)
          </li>
          <li>Avoid smoking and drinking</li>
          <li>Reduce your weight to healthy BMI.</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What are the leading medical causes of low sperm count and motility?",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Varicocele - Most common cause. Increase testicular temperature and
          lack of Oxygen
        </li>
        <li>
          Genital infection - Can result in Oxidative damage to sperm
          (Epididymis and Prostate Infection)
        </li>
        <li>
          Endocrine Disorders – Low Testosterone, High Prolactin levels and
          Thyroid dysfunction.
        </li>
        <li>
          Genetics - May be due to genes on Y Chromosome or Klinefelters
          Syndrome
        </li>
        <li>
          Toxins - Can be due to certain environmental factors like Heavy Metals
          etc.
        </li>
      </ul>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question:
      "When should couples choose IUI vs. IVF/ICSI for male factor infertility?",
    answer:
      "If after sperm wash your values are greater than 5-10 million you can opt for IUI. But if your values are less than 5 million you should consider doing ICSI or if you have low motility or morphology.",
  },
  {
    question: "How does a varicocele impact sperm count and motility?",
    answer:
      "Varicocele is an increase in the veins of your scrotum that pushes blood backwards into your testes. It raises the temperature inside testicular and produces free radicals. Due to this your sperm production decreases, Motility reduces and DNA Damage increases. With microsurgery 60%-70% men can improve their values.",
  },
  {
    question:
      "How long does it take for medical treatments or supplements to show results?",
    answer:
      "It takes 74 days for sperm to form and it takes another 10-14 days for it to pass through epididymis. So if you have started any lifestyle changes, medications or any surgery. It will take at least 3 months for you to see an improvement on your semen report.",
  },
  {
    question: "How does low motility affect fertilization during IVF?",
    answer:
      "If there is poor sperm motility the chances of them penetrating through Egg are low. By doing IVF and using a technique called ICSI we can make sure fertilization happens. Embryologist under microscope picks up good sperm and inject it in the egg. With ICSI you can get fertilization rates of 70%-80%",
  },
  {
    question:
      "Does low sperm count or poor motility cause miscarriages or birth defects?",
    answer:
      "No your child will not be affected by birth defects. However studies have shown that Men with Low sperm Motility tend to have higher DNA Fragmentation Index (DFI > 30%) which can lead to early abortion or missed abortion.",
  },
];

export default function LowSpermFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Frequently Asked Questions"
        title="Top FAQs About Low Sperm Count & Motility"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
