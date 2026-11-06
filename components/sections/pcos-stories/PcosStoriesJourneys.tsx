"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const stories = [
  {
    number: "1",
    title: "Restoring Ovulation",
    description:
      "Due to extreme insulin resistance she had stopped ovulating which led to no periods for months. With proper management from Dr Mona Dahiya she was able to ovulate and become pregnant. Her journey to becoming pregnant ended with the birth of her baby boy!",
  },
  {
    number: "2",
    title: "IVF for High Antral Follicle Counts",
    description:
      "Dr Mona Dahiya provided an antagonistic protocol to help her get pregnant while minimizing her risk of OHSS from high antral follicle counts. She used an agonist trigger and opted for freeze all embryos to prevent OHSS. After successful first frozen embryo transfer she did not have any symptoms of OHSS.",
  },
  {
    number: "3",
    title: "Regulating Unpredictable Cycles",
    description:
      "She was not able to predict her cycle as she had many month long cycles. With treatment by Dr Dahiya she took medicine to improve insulin resistance and started ovulating regularly every month. Within 3 months she conceived using timed intercourse and gave birth to a boy.",
  },
  {
    number: "4",
    title: "Overcoming Clomiphene Resistance",
    description:
      "Simran tried Clomiphene citrate for many months but failed to ovulate each time. Dr Mona Dahiya started her on letrozole with USC monitoring of follicular maturation. After switching to letrozole she became pregnant and gave birth to a healthy baby girl.",
  },
  {
    number: "5",
    title: "Targeted Weight Management and IUI Success",
    description:
      "Due to her insulin resistance and excess weight she had stopped ovulating regularly. Dr Dahiya helped her regulate her weight through medication and diet which resulted in ovulation. She became pregnant after one round of IUI and gave birth to a baby boy.",
  },
  {
    number: "6",
    title: "Boosting Egg Quality",
    description:
      "She had a high number of eggs but due to PCOD was producing low quality eggs. Dr Dahiya helped her increase her egg quality over 90 days of treatment prior to her egg pickup. She achieved healthy grade blastocysts and was successful at giving birth to a healthy baby girl.",
  },
  {
    number: "7",
    title: "First-Cycle Success After Years of PCOD Delays",
    description:
      "After finding out that she had PCOD she believed she would have to go through multiple rounds of treatments to become pregnant. When she saw Dr Mona Dahiya he created a plan to ovulate based on her levels. After only 1 month she became pregnant and gave birth to a baby boy.",
  },
  {
    number: "8",
    title: "Correcting Thin Endometrial Lining",
    description:
      "She was taking medication to induce ovulation but never got pregnant. After learning that her hormone levels were not allowing her endometrium to thicken Dr Mona Dahiya prescribed her estrogen priming which resulted in her success. She gave birth to a healthy baby girl.",
  },
  {
    number: "9",
    title: "Restoring Fertility After Post-Pill Amenorrhea",
    description:
      "After stopping the pill she experienced no periods and found herself unable to ovulate. Dr Dahiya helped her achieve regular periods within 4 months. She became pregnant after successfully tracking her cycles. Baby boy arrived shortly after!",
  },
  {
    number: "10",
    title: "Managing Severe Hirsutism and PCOD",
    description:
      "After being diagnosed with PCOD and having significant hirsutism she felt stressed about conceiving. With medication by Dr Mona Dahiya she achieved a healthier level of hormones and ovulation. Shortly after that she became pregnant and gave birth to a boy!",
  },
];

export default function PcosStoriesJourneys() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="PCOS Success Stories"
        title="Patient Success Stories"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {stories.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
