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
    title:
      "Was Advised Donor Eggs but Got Pregnant With Own Egg with 0.35 AMH",
    description:
      "Her doctor informed her that with such a low AMH level of 0.35 she has no chance to get pregnant with her own egg. So she contacted Dr. Mona Dahiya for a second opinion. Based on her current status, Dr. Mona created a custom protocol for ovarian stimulation. The woman got pregnant with her first try and is now the proud mother of her little baby girl.",
  },
  {
    number: "2",
    title: "Got Pregnant With Baby Boy With Low AMH of 0.18",
    description:
      "Sharmila thought there were almost no chances of her getting pregnant with her own egg as her AMH levels were really low of 0.18. Dr. Mona Dahiya suggested an ovarian priming protocol of taking DHEA and right nutrition. This protocol was able to produce enough good quality eggs for embryo transfer which resulted in a healthy pregnancy and baby boy.",
  },
  {
    number: "3",
    title: "Got Pregnant Through Mild Stimulation At the Age of 32 with 0.40 AMH",
    description:
      "She had her AMH done and it was at 0.40 at the age of 32 which was very low. If you have low AMH levels you want to stimulate less because if you stimulate high you will get lower quality eggs. Dr. Mona stimulated mild for Archana and she had a beautiful baby girl.",
  },
  {
    number: "4",
    title: "Got Pregnant on a Modified Natural Cycle With AMH of 0.12",
    description:
      "After trying multiple IVF cycles Vandana sought help from Dr. Mona Dahiya. Dr. Mona decided to perform a modified natural cycle by lowering her medication dosages. She retrieved her one dominant best egg which matured into an embryo and gave birth to a baby boy.",
  },
  {
    number: "5",
    title: "Became Biological Mother With Low AMH of 0.28",
    description:
      "She thought there was no way she could have her own child due to her low AMH levels and amount of antral follicles. Dr. Mona didn't jump right into egg retrieval. She worked to raise her AMH levels for a few weeks and allowed her follicles to grow to become a blastocyst. She became the mother of a baby girl.",
  },
  {
    number: "6",
    title: "Gave Birth To A Baby Boy With AMH of 38 Weeks",
    description:
      "Due to her age and low ovarian reserve she felt hopeless. Dr. Mona helped her along with her low AMH Protocol and allowed her to have healthy embryos. She successfully gave birth to a healthy baby boy.",
  },
  {
    number: "7",
    title: "Got Pregnant From 1 Good Egg With Low AMH",
    description:
      "After seeing that she only had 2 follicles she panicked. Dr. Mona reassured her and said sometimes all you need is 1 good quality egg. She received one egg that grew to be an embryo and she is now the mom of a beautiful baby girl.",
  },
  {
    number: "8",
    title: "Had A Healthy Pregnancy With AMH of 0.19 After Cyst Surgery",
    description:
      "After having her bilateral cysts removed her AMH dropped down to 0.19. Dr. Mona decided to keep her dose of medication low and focus on growing healthy follicles. After her second attempt of transferring an embryo she became pregnant with a healthy baby.",
  },
  {
    number: "9",
    title: "Did Not Have To Use Donor Eggs With Low AMH Levels",
    description:
      "Others had advised her to go with donor eggs or adopt but she wanted to try with her own egg. Dr. Mona was able to get her pregnant on her last try of becoming biologically pregnant with her baby.",
  },
  {
    number: "10",
    title: "Conceived A Baby Boy With Low AMH Levels of 0.14",
    description:
      "Ritu and Sunil tried various doctors but were unsuccessful. They decided to try Dr. Mona Dahiya and with the help of her daily injections of hormones she was able to find the perfect day to give the trigger shot for when the eggs would mature. Later on, Ritu and Sunil gave birth to a baby boy.",
  },
];

export default function LowAmhJourneys() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Below are some success stories from our patients"
        title="Patient Success Stories"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {stories.map((story) => (
          <StaggerItem key={story.number} className="h-full">
            <NumberedCard {...story} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
