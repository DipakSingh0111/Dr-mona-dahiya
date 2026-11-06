"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const stages = [
  {
    number: "1",
    title: "Online Consultation And Planning (In Your Home Country)",
    bullets: [
      "Talk to Dr. Dahiya on a video call for 30 minutes",
      "Start priming your cycle with pills so we can plan around when you will be arriving in India",
    ],
  },
  {
    number: "2",
    title: "Arrive In India And Get Started (Days 1-3)",
    bullets: [
      "We can arrange transportation from the airport and accommodation close to the clinic",
      "Do an in-person 3D scan and test your partner's sample",
    ],
  },
  {
    number: "3",
    title: "Begin Stimulating (Days 3-11)",
    bullets: [
      "Begin taking fertility medicines and get scanned every 48 hours",
      "When follicles reach 18-20 mm, we will trigger your eggs to mature",
    ],
  },
  {
    number: "4",
    title: "Collect Eggs And Perform ICSI (Days 13-14)",
    bullets: [
      "Egg collection takes around 15 minutes under light anaesthesia",
      <>
        Eggs are fertilised using{" "}
        <Link
          href="/intracytoplasmic-sperm-injection-icsi-treatment"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
        >
          ICSI
        </Link>{" "}
        or the microfluidic technique
      </>,
    ],
  },
  {
    number: "5",
    title: "Wait For Embryo Development (Days 14-19)",
    bullets: [
      "Either do a fresh transfer on Day 5 and fly home in 48 hours, or",
      <>
        <Link
          href="/embryo-cryopreservation"
          className="font-medium text-blue underline underline-offset-2 hover:text-rose transition-colors"
        >
          Freeze all your embryos
        </Link>{" "}
        / PGT-A test your embryos and do an embryo transfer in a later cycle
      </>,
    ],
  },
  {
    number: "6",
    title: "Confirm Pregnancy (In Your Home Country)",
    bullets: [
      "Take a beta hCG blood test 14 days after your transfer",
      "Talk to your local doctor and let them know you are pregnant",
    ],
  },
];

export default function IntlProcess() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Process"
        title="Treatment Process For International Patients"
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
      >
        {stages.map((stage) => (
          <StaggerItem key={stage.number} className="h-full">
            <div className="card-highlight flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
              <div className="flex items-start gap-3">
                <span className="card-badge flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                  {stage.number}
                </span>
                <h3 className="text-[14.5px] font-bold leading-snug text-black sm:text-[15px]">
                  {stage.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {stage.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative pl-4 text-[13px] leading-relaxed text-black before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose sm:text-[13.5px]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
