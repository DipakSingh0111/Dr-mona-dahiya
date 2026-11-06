"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const items = [
  {
    number: "1",
    title: "Young women wanting to delay pregnancy",
    description:
      "Most women come to us between 28 and 35 years of age wanting to store their better quality eggs for when they decide to start a family. They may be busy completing their degree or career, or have personal reasons.",
  },
  {
    number: "2",
    title: "History of early menopause",
    description:
      "If someone in your family has suffered from early menopause/premature ovarian failure, it is recommended that you consider freezing your eggs.",
  },
  {
    number: "3",
    title: "Advanced Endometriosis",
    description:
      "If you suffer from advanced endometriosis with repeated episodes of chocolate cysts, or have had surgery on your ovary to remove cysts, then you should consider egg freezing.",
  },
  {
    number: "4",
    title: "Chemo or Radiotherapy",
    description: (
      <>
        Certain types of chemo or radiotherapy can damage the eggs. Speak to
        your doctor about starting an{" "}
        <Link
          href="/oncofertility-cancer-fertility-preservation"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose"
        >
          Oncofertility Program
        </Link>{" "}
        with us prior to your treatment.
      </>
    ),
  },
  {
    number: "5",
    title: "Prefer not to freeze embryos",
    description:
      "If you don't want to store extra embryos during your IVF cycle, you can opt to store your eggs instead.",
  },
];

export default function EggFreezingWhoNeeds() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="What we cover"
        title="Who Needs Egg Freezing?"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {items.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <div className="card-highlight flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="card-badge flex size-7 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {item.number}
                </span>
                <h3 className="text-[15px] font-bold text-black sm:text-[16px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
