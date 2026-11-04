"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const reasons = [
  {
    title: "Patients from nearby areas can visit",
    description:
      "Indirapuram, Vaishali, Vasundhara, Kaushambi and Raj Nagar Extension. Our clinic is in RDC Raj Nagar extension and is easily accessible.",
  },
  {
    title: "Qualifications",
    description:
      "Dr Mona Dahiya has done her MBBS and MD with gold medals. She is also a DNB surgeon and has done IVF fellowship from Singapore General Hospital.",
  },
  {
    title: "Individualized Plans",
    description:
      "Every patient is assessed by Dr Dahiya herself and plans are made accordingly. There are no package prices.",
  },
];

export default function BestIvfGhaziabadWhy() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Our Experience"
        title="What makes Dr Mona Dahiya the right IVF doctor in Ghaziabad?"
      />

      <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
        <Stagger
          className="flex h-full flex-col justify-between gap-4 lg:col-span-7"
          stagger={0.08}
        >
          {reasons.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-rose/25 bg-white/80 p-5 sm:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-dark text-white">
                  <FaCheck className="size-3.5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15.5px] font-bold text-black sm:text-[16.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          variant="scaleIn"
          className="relative min-h-[360px] w-full lg:col-span-5 lg:min-h-0"
        >
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[22px] border border-[#fde2ec] shadow-[0_20px_50px_rgba(0,10,40,0.4)] lg:absolute lg:inset-0 lg:min-h-0">
            <Image
              src="/images/about-mona-dahiya/online-ivf-consultation.jpg"
              alt="Dr. Mona Dahiya"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </Reveal>
      </div>
    </TreatmentSection>
  );
}
