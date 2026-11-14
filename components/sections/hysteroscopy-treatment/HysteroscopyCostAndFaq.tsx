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
    title: "Diagnostic or Operative Procedure",
    description: "Time it takes and instruments used to remove defect.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Type of Anaesthesia",
    description: "Depends on what you require and cost of anaesthetist.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Facilities/ Day-care stay",
    description:
      "Depending on the procedure and length of time you will be in our OT and recovery room.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Pathology and follow up",
    description:
      "Samples taken will need to be looked at by a pathologist and you will need to come back to discuss your results.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "Is hysteroscopy painful?",
    answer:
      "As you will be asleep during your procedure you won’t feel any pain. Some patients experience cramps after their procedure but nothing that can’t be relieved with pain medication.",
  },
  {
    question: "Can I go home the same day?",
    answer:
      "As this is a day-care procedure yes you will be able to go home the same day.",
  },
  {
    question: "When can I try for pregnancy after hysteroscopy?",
    answer:
      "This will depend on what has been done during your procedure. We will discuss this with you at your appointment.",
  },
  {
    question: "Is hysteroscopy needed before IVF?",
    answer:
      "This will depend on your situation. If you have had unsuccessful cycles in the past or have had abnormal findings on your scans it is always best to evaluate your uterine cavity.",
  },
  {
    question: "What is a hysteroscopy, and why is it performed?",
    answer:
      "Hysteroscopy is a minimally invasive procedure where a slim flexible or rigid telescope (3mm – 5mm in diameter) is introduced into the uterus via the vagina and cervix. It is used to observe the inside of your uterus on a screen. Doctors use this technique to detect and resolve abnormalities that cause excessive bleeding, miscarriages or unsuccessful IVF procedures. Polyps, fibroids and scars can be seen on the uterine cavity through a hysteroscope.",
  },
  {
    question:
      "What is the difference between diagnostic and operative hysteroscopy?",
    answer:
      "With Diagnostic hysteroscopy doctors can diagnose abnormalities that exist in your uterine cavity without the use of cutting tools. Usually it only takes a few minutes (5-10 mins). If any abnormality is found, your doctor can proceed with an Operative Hysteroscopy where they can operate through the hysteroscope.",
  },
  {
    question: "Is a hysteroscopy painful, and does it require anesthesia?",
    answer:
      "During an Office Hysteroscopy you may experience mild to moderate discomfort similar to your monthly cramps. Your doctor may insert a small amount of fluid into your uterus to expand the area allowing for better visibility. You may feel some pressure and pain but nothing that can't be controlled with medication or a local block. An Operative Hysteroscopy is usually performed with a short acting IV anaesthetic. Meaning you’ll be asleep for the duration of the procedure.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question:
      "How long does a hysteroscopy take, and is it a day-care procedure?",
    answer:
      "Depending on your procedure you will spend around 5 – 15 minutes having a Diagnostic Hysteroscopy. Operative procedures will vary between 20 – 45 minutes. You can go home the same day as this is a day-care procedure. You'll spend around 1–2 hours recovering in our lounge.",
  },
  {
    question: "How much does a hysteroscopy cost in India / Delhi NCR?",
    answer: (
      <div className="space-y-2.5">
        <p>Depending on your procedure the prices may vary.</p>
        <ul className="list-disc space-y-1 pl-5 marker:text-rose">
          <li>Diagnostic Office Hysteroscopy – Rs 8,000 – Rs 18,000</li>
          <li>Operative Hysteroscopy – Rs 25,000 – Rs 65,000</li>
        </ul>
        <p>
          Prices may depend on your condition and what type of anaesthetic is
          required. As well as if any additional tools are used such as a
          Resectoscope or Laser. Histopathology of endometrial tissue will also
          add to the overall price.
        </p>
      </div>
    ),
  },
  {
    question: "What is the recovery time after a hysteroscopy?",
    answer:
      "Most patients return to their daily lives within 1 – 2 days after the procedure. You may experience light cramping and spotting or a watery discharge for up to a week. Your doctor will advise you to abstain from intercourse, tampon use and swimming for 1-2 weeks after your procedure.",
  },
  {
    question: "On which cycle day should a hysteroscopy be scheduled?",
    answer:
      "Ideally your procedure should be done 6 – 11 days after your period ends. As this is when your uterus will have the thinnest layer of lining. This gives your doctor the best chance of detecting any issues and no risk of harming a newly formed pregnancy.",
  },
  {
    question: "Does hysteroscopy improve IVF success rates?",
    answer:
      "Yes! If your cavity contains micro polyps or other abnormalities that aren’t detected on a normal scan, your chances of implanting an embryo can increase by 15%-25%. A Hysteroscopy can also be used to biopsy the uterine cavity and rule out Endometritis.",
  },
  {
    question: "What are the risks or side effects of a hysteroscopy?",
    answer:
      "There are minimal risks involved when undergoing a hysteroscopy. Your uterus could be perforated, infected or bleed heavily. The risk of these happening is less than 1% – 2%.",
  },
  {
    question:
      "How soon can you try to conceive or do an embryo transfer after hysteroscopy?",
    answer:
      "If only a small defect was found or your procedure was only for diagnostic purposes you can start trying to conceive or transfer your embryos in the next cycle. Depending on what was operated on your doctor may want you to wait 1 – 2 cycles.",
  },
];

export default function HysteroscopyCostAndFaq() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Understanding the pricing of your procedure"
          title="Cost Factors Breakdown"
          subtitle="Your costs will depend on how long your procedure takes and if you are only being diagnosed or if we can operate on you at the same time. We will discuss costs with you at your appointment."
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
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="FAQs"
          title="Frequently Asked Questions about Hysteroscopy"
          subtitle="Some frequently asked questions we get from patients."
        />
        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
      </TreatmentSection>
    </>
  );
}
