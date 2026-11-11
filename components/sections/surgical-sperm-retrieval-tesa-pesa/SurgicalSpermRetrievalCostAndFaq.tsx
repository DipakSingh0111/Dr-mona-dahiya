"use client";

import { FaCheck, FaPills } from "react-icons/fa";
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
    title: "Type of Surgery",
    description: "Depending on whether its PESA TESA or Micro TESE.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Anesthesia and Stay",
    description: "Cost of anesthesia and staying in hospital for few hours.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Freeze Charges",
    description: "In case we find sperm and want to store it will cost extra.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Cost of ICSI",
    description: "Ovarian stimulation + ICSI + Embryo transfer cost for woman.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "What is Surgical Sperm Retrieval (SSR), and who needs it?",
    answer:
      "Sperm retrieval surgeries are used to obtain sperm from your body. There could be no sperm in your semen due to blockage or sperm are not produced at all (Non Obstructive Azoospermia). Vasectomy or being born without vas deferens or functioning testes are examples of this.",
  },
  {
    question:
      "What are the different types of SSR (PESA, TESA, TESE, Micro-TESE)?",
    answer: (
      <>
        <p>Different methods exist to remove sperm from testis or epididymis.</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-rose">
          <li>
            <strong className="font-semibold text-ink">PESA:</strong>{" "}
            Percutaneous Epididymal Sperm Aspiration. Needle is used to suck out
            sperm from epididymis. Usually used for Obstructive azoospermia.
          </li>
          <li>
            <strong className="font-semibold text-ink">TESA:</strong> Testicular
            Sperm Aspiration. Sperm are sucked out from testis using a needle.
            If patient has obstruction or higher DNA fragmentation TESA can be
            performed.
          </li>
          <li>
            <strong className="font-semibold text-ink">TESE:</strong> Testicular
            Sperm Extraction. Skin is incised above testis and some tissue is
            removed.
          </li>
          <li>
            <strong className="font-semibold text-ink">Micro TESE:</strong>{" "}
            Microscopic Testicular Sperm Extraction. By using a microscope we
            identify spermatic tubules and extract sperm from them.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the success rate of finding sperm with SSR?",
    answer: (
      <div className="space-y-2">
        <p>
          Depends on what kind of azoospermia you have. If its an obstructive
          case. Then you stand a greater chance of finding sperm &gt; 95-100%.
        </p>
        <p>
          With Non Obstructive azoospermia probability is around 30-40% with
          TESE and 50-60% with Micro TESE. As we can see the tubules that have
          sperm using a microscope.
        </p>
      </div>
    ),
  },
  {
    question: "Is surgical sperm retrieval painful, and what anesthesia is used?",
    answer:
      "Our patients say that its a very comfortable procedure. PESA and TESA are done under local anesthesia with mild sedation. Takes around 15-20 minutes to perform. TESE and micro TESE require general anesthesia or spinal anesthesia. You may feel discomfort after surgery. But we will provide you with pain medication. Wear scrotal support for 2-3 days after surgery.",
  },
  {
    question:
      "Can surgically retrieved sperm be used for IUI, or is IVF/ICSI mandatory?",
    answer:
      "No we cannot. The number of sperm that are obtained from testis are too low and do not have good progressive motility. So they can only be used for ICSI. Our lab staff will select the sperm that looks good and inject it in egg.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is the difference between TESA and Micro-TESE?",
    answer:
      "Since TESA is done by poking your testis blindly. We suggest this in case you produce sperm in your testis but they can't pass through ejaculatory duct. For Micro TESE we can look at testicular tubules and only extract tubules with sperm in them.",
  },
  {
    question: "How much does Surgical Sperm Retrieval cost in India / Delhi NCR?",
    answer: (
      <>
        <p>It will vary by procedure that is done.</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-rose">
          <li>
            <strong className="font-semibold text-ink">PESA / TESA:</strong> Can
            cost anywhere between ₹15,000 - ₹30,000.
          </li>
          <li>
            <strong className="font-semibold text-ink">
              Conventional Open TESE:
            </strong>{" "}
            Cost around ₹25,000 - ₹45,000.
          </li>
          <li>
            <strong className="font-semibold text-ink">Micro-TESE:</strong>{" "}
            ₹55,000 - ₹1,10,000 can be the cost.
          </li>
        </ul>
        <p className="mt-2">
          Cost of operating room and use of equipment and lab.
        </p>
      </>
    ),
  },
  {
    question: "Can surgically retrieved sperm be frozen for future IVF cycles?",
    answer:
      "Yes we can freeze sperm for you. So that your wife won't have to go through surgery on the day she is picking up eggs. Sperm remain viable for about 80-90%.",
  },
  {
    question: "What is the recovery time after a surgical sperm retrieval procedure?",
    answer: (
      <div className="space-y-2">
        <p>After PESA or TESA you can resume work in 1-2 days.</p>
        <p>
          If you have undergone micro TESE you can take 2-4 days off. Rest your
          cuts. Avoid heavy physical activity for 1 week and wear scrotal
          support.
        </p>
      </div>
    ),
  },
  {
    question:
      "Does surgical sperm retrieval affect natural testosterone levels or sexual function?",
    answer:
      "No. Since we are not taking tissue out of your testis with PESA or TESA. Testicular function will remain the same. With micro TESE we take out only a few tubules from testis. It may decrease your testosterone but within 3-6 months you will notice your testosterone to be at baseline levels.",
  },
];

export default function SurgicalSpermRetrievalCostAndFaq() {
  return (
    <TreatmentSection>
      <div className="mb-14 sm:mb-16 lg:mb-20">
        <TreatmentSectionHeader
          eyebrow="What effects the price?"
          title="Cost Factors Breakdown"
          subtitle="The price may depend on the surgery you have and your ICSI requirements."
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
          eyebrow="Common Questions"
          title="Frequently Asked Questions about Surgical Sperm Retrieval"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </div>
    </TreatmentSection>
  );
}
