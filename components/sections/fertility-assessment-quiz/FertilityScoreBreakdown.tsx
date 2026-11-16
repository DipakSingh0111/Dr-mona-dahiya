"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  CostFactorCard,
  ReviewCard,
  TreatmentSection,
  TreatmentSectionHeader,
  type ReviewCardItem,
} from "@/components/ui/treatment";

const scoringRows = [
  {
    category: "Age of Female or Male",
    score: "2.0",
    lookingAt: "How old are you.",
  },
  {
    category: "Length of time trying to conceive",
    score: "2.0",
    lookingAt: "How long have you been trying.",
  },
  {
    category: "Cycle Length / Health of Semen",
    score: "2.0",
    lookingAt: "Are you ovulating. Does your semen look ok.",
  },
  {
    category: "Risk Factors for pelvic problems",
    score: "2.0",
    lookingAt:
      "Do you have any problems that could impede your chances of conceiving.",
  },
  {
    category: "Pregnancy History",
    score: "2.0",
    lookingAt: "Miscarriages / failed treatments or length of subfertility.",
  },
];

const nextStepCards = [
  {
    title: "Scores of 8.0 - 10: Good Chance of Pregnancy",
    description: (
      <>
        Based on your answers to the questions above. Your risk of having
        trouble becoming pregnant is low. Try to have sex on the days
        you&apos;re most likely to ovulate, which is 6 days out of your cycle.
        If you have an irregular cycle we recommend 2{" "}
        <Link
          href="/follicular-ultrasound"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Follicular Ultrasounds
        </Link>{" "}
        to pinpoint your ovulation day.
      </>
    ),
  },
  {
    title: "Scores of 5.0 - 7.5: Have Trouble Getting Pregnant",
    description: (
      <>
        Due to your answers to these questions your score is indicating that you
        may need assistance in getting pregnant. Your age, time trying and/or
        cycle length are some factors that can lower your chance of pregnancy
        each month. We recommend booking a consultation to determine your
        ovarian reserve with a blood test called AMH and see if your fallopian
        tubes are patent (open). For men a semen analysis should be conducted.
        You may only require basic treatment to become pregnant such as
        letrozole or even 2 - 3 cycles of{" "}
        <Link
          href="/iui-treatment"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          IUI
        </Link>
        .
      </>
    ),
  },
  {
    title: "Score 0 - 4.5: Act Now!",
    description: (
      <>
        Based on your answers we believe your chances of conceiving are not
        likely without help. If you&apos;ve been trying for over 2 years, low
        ovarian reserve, blocked tubes, endometriosis, poor sperm with high DNA
        fragmentation or have had multiple miscarriages. Please contact us to
        book an appointment with Dr. Mona Dahiya at our office as soon as
        possible. Your ovarian reserve decreases as you age so it&apos;s best to
        act now. We may advise 2D sonohysterogram,{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          Sperm DNA Fragmentation Test
        </Link>{" "}
        &amp;{" "}
        <Link
          href="/ivf-treatment"
          className="font-semibold text-blue underline transition-colors hover:text-rose"
        >
          IVF
        </Link>
        .
      </>
    ),
  },
];

const reviews: ReviewCardItem[] = [
  {
    title: "Compassion & Dedication",
    review:
      "I had a fantastic experience with Dr. Mona Dahiya. From the moment we entered their IVF centre, I felt welcome and at ease. Dr. Mona was attentive, listened to my concerns, and explained my condition and treatment options clearly. Her professionalism and expertise shone through. I highly recommend Dr. Mona for her compassionate approach and dedication to patient care.",
    initial: "R",
    name: "Rajesh Shakya",
    source: "Patient review",
  },
  {
    title: "Compassion & Care",
    review:
      "Dr. Mona Dahiya's expertise and compassionate care made our IVF journey a truly positive one. Her guidance throughout ovarian stimulation was exceptional. She clearly explained each step, addressed our concerns with patience, and her constant encouragement made all the difference. Thank you, Dr. Dahiya, for helping make our dream of parenthood a reality.",
    initial: "F",
    name: "Firoj Khan",
    source: "Patient review",
  },
  {
    review:
      "Dr. Mona Dahiya's reputation as a top IVF doctor is so well-deserved. Her expertise, combined with her genuine care and compassion, sets her apart. She treated us with respect, listened to our concerns, and empowered us to make informed decisions. Thanks to her, we're now proud parents, and our hearts are overflowing with gratitude.",
    initial: "M",
    name: "Manjesh Rajput",
    source: "Google patient review",
  },
];

export default function FertilityScoreBreakdown() {
  return (
    <>
      {/* How Your 10-Point Score Is Calculated */}
      <TreatmentSection className="bg-white">
        <TreatmentSectionHeader
          eyebrow="10 Point Scoring System for Fertility Assessment"
          title="How Your 10-Point Score Is Calculated"
          subtitle="Points are awarded from 0 – 2 to each category to give a maximum possible fertility score of 10 for females and males."
        />

        <div className="mt-7 overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_10px_30px_rgba(232,62,116,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#fde2ec] bg-pink text-[12px] font-extrabold tracking-wider text-ink uppercase sm:text-[12.5px]">
                  <th className="px-5 py-3.5 font-extrabold">Category</th>
                  <th className="px-5 py-3.5 font-extrabold">Highest Score</th>
                  <th className="px-5 py-3.5 font-extrabold">What We Are Looking At?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#fde8ef] text-[13.5px] sm:text-[14px]">
                {scoringRows.map((row) => (
                  <tr
                    key={row.category}
                    className="transition-colors hover:bg-pink/50"
                  >
                    <td className="px-5 py-3.5 font-semibold text-ink">
                      {row.category}
                    </td>
                    <td className="px-5 py-3.5 text-ink/85">{row.score}</td>
                    <td className="px-5 py-3.5 text-ink/80">{row.lookingAt}</td>
                  </tr>
                ))}
                <tr className="bg-pink/40 font-semibold text-ink">
                  <td className="px-5 py-3.5">Total</td>
                  <td className="px-5 py-3.5 text-rose">10 Points</td>
                  <td className="px-5 py-3.5" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </TreatmentSection>

      {/* Your Score and Recommended Next Step */}
      <TreatmentSection className="bg-pink">
        <TreatmentSectionHeader
          eyebrow="Here is what your fertility score means."
          title={
            <>
              Your Score and
              <br className="hidden sm:inline" /> Recommended Next Step
            </>
          }
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {nextStepCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard
                title={card.title}
                icon={<FaCheck className="size-3.5" />}
                description={card.description}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      {/* What Patients Say About Dr. Mona */}
      <TreatmentSection id="patient-reviews" className="bg-white">
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Dr. Mona"
          subtitle="Individual experiences in patients' own words."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {reviews.map((item) => (
            <StaggerItem key={item.name} className="h-full">
              <ReviewCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-7">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-navy/25 bg-white px-6 py-2.5 text-[13.5px] font-semibold text-ink transition-all hover:border-rose hover:text-rose"
          >
            Read All Patient Reviews
          </Link>
        </div>
      </TreatmentSection>
    </>
  );
}
