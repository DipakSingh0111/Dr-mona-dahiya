"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question:
      "What is the clinical definition of Recurrent Implantation Failure (RIF)?",
    answer:
      "RIF is defined as no clinical pregnancy (presence of gestation sac on ultrasound) after transfer of more than 3 good grade embryos (cleavage stage) or 2 or more top quality blastocysts. Approximately 10%-15% of couples will suffer from RIF. Advanced workup is required to find the cause of RIF.",
  },
  {
    question: "What is the single most common cause of RIF?",
    answer:
      "Embryos that have chromosomal abnormality is responsible for more than 50%-60% of failed implantation. Even if the embryo looks normal under microscope it can be chromosomally abnormal. In females greater than 35 years of age more than 50% of blastocysts can be abnormal. If we can do PGT-A and transfer a euploid blastocyst then we can achieve pregnancy in 65%-70% of cases. Miscarriage will reduce to less than 10%.",
  },
  {
    question: "How does the Endometrial Receptivity Analysis (ERA) help in RIF?",
    answer:
      "In about 25%-30% of women who fail to get pregnant the window of implantation is shifted. They may be pre receptive (require more time under progesterone exposure 12-24 hrs) or post receptive. ERA test using next generation sequencing on 248 genes will help us find out their exact window of implantation. This allows us to perform personalized FET and achieve pregnancy in 55%-65% of cases.",
  },
  {
    question: "Can chronic endometritis cause repeated implantation failure?",
    answer:
      "Chronic Endometritis is an asymptomatic inflammation of the endometrium that is found in 30%-40% of patients with RIF. This is often overlooked and can be diagnosed by doing biopsy and CD138 stain. Oral antibiotics can treat this infection in 85%-90% of cases which increases the chance of implantation in future transfers.",
  },
  {
    question:
      "How does a thin endometrial lining affect implantation, and how is it treated?",
    answer:
      "If your endometrial lining is less than 7mm with no trilaminar pattern on the day of progesterone you are less likely to get pregnant. The chance of implantation decreases to 20%-25%. You can treat thin lining by extending the course of oral/trans dermal estrogen and vaginal sildenafil. Another option is PRP infusion which can increase your endometrial thickness by 1.5mm-2.5mm within 48-72 hours. You can also do hysteroscopy to lyse any adhesions or scar tissue that is preventing your lining from growing.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question:
      "What tests should a couple complete after multiple failed embryo transfers?",
    answer: (
      <div className="space-y-3">
        <p>
          You should check for the following causes after failing your IVF
          transfer:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Do Karyotype of both partners. And do PGT-A if you have any leftover
            embryos.
          </li>
          <li>
            Check your uterus with 3d USG or hysteroscopy for any anomalies.
          </li>
          <li>
            Check for chronic endometritis by biopsy. Do ERA and EndomeTRIO.
          </li>
          <li>
            Check male factor with sperm dna fragmentation index. And check for
            clotting profile if indicated.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Does an untreated hydrosalpinx cause implantation failure?",
    answer:
      "Yes. Having a hydrosalpinx decreases your chance of getting pregnant by 50% and can also cause miscarriages. The fluid present inside the tube is toxic to the embryo and will reduce your implantation. This can be fixed by doing clipping or removal of tube before transfer.",
  },
  {
    question: "Can immunological or blood clotting disorders cause RIF?",
    answer:
      "Approximately 10%-15% of women can have clotting problems or auto immune problems that can cause RIF. These problems can block the small blood vessels which supply your endometrium causing your embryo to fail. By taking aspirin and injections you can increase your chances of implantation.",
  },
  {
    question:
      "What is the success rate of a frozen embryo transfer after treating RIF?",
    answer:
      "Once you have identified the cause of your problem. You have a 60%-70% chance of success per transfer. You have more than 90% chance of becoming pregnant after 3 euploid transfers.",
  },
  {
    question: "Does Laser-Assisted Hatching (LAH) improve outcomes in RIF cycles?",
    answer:
      "Laser assisted hatching can be done in case of frozen transfer or in patients with older age group. Sometimes your embryo has difficulty breaking through its outer layer. By doing LAH you can increase your chance of implantation by 10%-15%.",
  },
];

export default function RifFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Questions About Recurrent Implantation Failure (RIF)"
        title="Frequently Asked Questions about Recurrent Implantation Failure"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
