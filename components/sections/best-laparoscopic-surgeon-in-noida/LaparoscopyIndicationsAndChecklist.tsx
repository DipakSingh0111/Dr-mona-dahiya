"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
  ChecklistRow,
} from "@/components/ui/treatment";

const indications: { number: string; title: string; description: ReactNode }[] =
  [
    {
      number: "1",
      title: "Endometrioma and Adhesions",
      description: (
        <>
          Surgeries to remove Endometrial cysts and adhesions. Read about our
          treatment of{" "}
          <Link
            href="/endometriosis-fertility-treatment"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Endometriosis
          </Link>
          .
        </>
      ),
    },
    {
      number: "2",
      title: "Blocked tubes and Hydrosalpinx",
      description: (
        <>
          We can perform Tubal Cannulation to clear blockages. Or perform
          clipping or removal of a blocked fallopian tube with hydrosalpinx
          before IVF treatment. Read about{" "}
          <Link
            href="/fallopian-tube-blockage-treatment"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            blocked fallopian tube
          </Link>
          .
        </>
      ),
    },
    {
      number: "3",
      title: "Defects in the uterine cavity",
      description:
        "Removal of septum and T shaped cavity or correction of Ashermans syndrome (adhesions within uterine cavity).",
    },
    {
      number: "4",
      title: "Uterine fibroids",
      description:
        "Myomectomy for fibroid which is pushing into uterine cavity and distorting the shape of the womb.",
    },
    {
      number: "5",
      title: "PCOS unresponsive to medical management",
      description:
        "When you are not achieving pregnancy and not able to ovulate despite tablet therapy. Then laparoscopic ovarian drilling can help you to achieve pregnancy.",
    },
  ];

const checklist = [
  {
    title: "3D SIS",
    text: "This helps us identify the lesion within uterine cavity and it's depth.",
  },
  {
    title: "Transabdominal/ Transvaginal Pelvic MRI (If indicated)",
    text: "If you have deep infiltrating endometriosis or uterine fibroids then an MRI can give better insight into extent of the pathology.",
  },
  {
    title: "Anaesthetist clearance",
    text: "CBC, PT/ INR, APTT, renal and liver profile, ECG.",
  },
  {
    title:
      "Cycle day 6-10th day of your menstrual cycle for better visualization.",
    text: "",
  },
  {
    title: "HIV, HBsAg, HCV and VDRL as per ART act of India.",
    text: "",
  },
];

export default function LaparoscopyIndicationsAndChecklist() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Surgery to improve your chances of conception"
          title="Indications: When Is Reproductive Surgery Recommended?"
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <NumberedCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Investigations before surgery"
          title="Diagnostic Checklist: Pre-Operative Workup"
          subtitle="The following tests are done prior to any laparoscopic and/or hysteroscopic surgeries to assess and diagnose your problem."
        />

        <div className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4">
          {checklist.map((item, idx) => (
            <Reveal key={item.title} variant="fadeUp" delay={idx * 0.04}>
              <ChecklistRow title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>
      </div>
      </TreatmentSection>
    </>
  );
}
