"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import {
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

type QuizOption = {
  label: string;
  sublabel: string;
  points: number;
};

type QuizQuestion = {
  number: string;
  question: string;
  options: QuizOption[];
};

const womenQuestions: QuizQuestion[] = [
  {
    number: "1",
    question: "What is your age?",
    options: [
      {
        label: "Below 30",
        sublabel: "Great ovarian reserve & quality of eggs.",
        points: 2,
      },
      {
        label: "30 to 34",
        sublabel: "Still good reserve but changes due to age.",
        points: 1.5,
      },
      {
        label: "35 to 38",
        sublabel:
          "AMH (number of eggs) starts dropping quicker, as does quality of eggs.",
        points: 1,
      },
      {
        label: "Above 39",
        sublabel: "You may have a low ovarian reserve, time becomes important.",
        points: 0,
      },
    ],
  },
  {
    number: "2",
    question: "How long have you been trying to conceive?",
    options: [
      {
        label: "Less than 6 months",
        sublabel: "It can take up to 1 year to conceive naturally.",
        points: 2,
      },
      {
        label: "6 months to 1 year",
        sublabel:
          "If under 35 years this is when doctors suggest you test for fertility.",
        points: 1.5,
      },
      {
        label: "1 year to 2 years",
        sublabel:
          "You meet the definition of infertility. It is recommended you be tested.",
        points: 0.5,
      },
      {
        label: "More than 2 years",
        sublabel: "It is unlikely that you will conceive on your own.",
        points: 0,
      },
    ],
  },
  {
    number: "3",
    question: "What is the average length between your periods?",
    options: [
      {
        label: "Average 26 to 32 days apart",
        sublabel: "You're likely ovulating on time each month.",
        points: 2,
      },
      {
        label: "Periods vary by 4 to 7 days apart",
        sublabel: "You could be ovulating late or not at all.",
        points: 1,
      },
      {
        label: "Longer than 35 days, no periods or you have PCOS",
        sublabel: "You're likely not ovulating and need help.",
        points: 0.5,
      },
      {
        label: "Shorter than 24 days or you have painful periods",
        sublabel: "Could indicate low reserve or endo.",
        points: 0,
      },
    ],
  },
  {
    number: "4",
    question: "Do you suffer from any of these?",
    options: [
      {
        label: "No",
        sublabel: "None.",
        points: 2,
      },
      {
        label: "Yes, I have a history of thyroid or high prolactin",
        sublabel: "Likely will need help getting pregnant.",
        points: 1,
      },
      {
        label: "Endometriosis, chocolate cyst or previous ovarian surgery",
        sublabel:
          "Could cause problems with fallopian tubes & ovarian reserve.",
        points: 0.5,
      },
      {
        label: "I suspect my tubes may be blocked or have a history of pelvic TB",
        sublabel: "It is difficult for sperm and egg to meet.",
        points: 0,
      },
    ],
  },
  {
    number: "5",
    question: "What is your pregnancy history?",
    options: [
      {
        label: "No pregnancies. Planning",
        sublabel: "I have a starting point.",
        points: 2,
      },
      {
        label: "Previous child, no issues",
        sublabel: "I have had a healthy pregnancy.",
        points: 2,
      },
      {
        label: "Had 1 miscarriage",
        sublabel:
          "Miscarriages can happen due to bad embryo (chromosome imbalance).",
        points: 1,
      },
      {
        label:
          "I've had more than 2 miscarriages or have tried IUI / IVF without success",
        sublabel: "I may need help to identify reasons why.",
        points: 0,
      },
    ],
  },
];

const menQuestions: QuizQuestion[] = [
  {
    number: "1",
    question: "What is your age?",
    options: [
      {
        label: "Below 35",
        sublabel: "Optimal sperm count, motility and DNA integrity.",
        points: 2,
      },
      {
        label: "35 to 40",
        sublabel: "Good fertility, though gradual age-related changes begin.",
        points: 1.5,
      },
      {
        label: "41 to 45",
        sublabel: "Sperm motility and DNA quality may start declining.",
        points: 1,
      },
      {
        label: "Above 45",
        sublabel:
          "Higher risk of sperm DNA fragmentation and lower conception rates.",
        points: 0,
      },
    ],
  },
  {
    number: "2",
    question: "How long have you and your partner been trying to conceive?",
    options: [
      {
        label: "Less than 6 months",
        sublabel: "It can take up to 1 year to conceive naturally.",
        points: 2,
      },
      {
        label: "6 months to 1 year",
        sublabel: "A basic semen analysis is helpful if you want early clarity.",
        points: 1.5,
      },
      {
        label: "1 year to 2 years",
        sublabel:
          "You meet the definition of infertility. Semen testing is recommended.",
        points: 0.5,
      },
      {
        label: "More than 2 years",
        sublabel:
          "It is unlikely that you will conceive without medical evaluation.",
        points: 0,
      },
    ],
  },
  {
    number: "3",
    question: "What is your semen analysis / sperm health status?",
    options: [
      {
        label: "Normal semen analysis or no known issues",
        sublabel: "Count, motility and morphology appear healthy.",
        points: 2,
      },
      {
        label: "Not tested yet",
        sublabel: "A standard semen analysis is the simplest first check.",
        points: 1.5,
      },
      {
        label: "Borderline or mildly low count / motility",
        sublabel: "Lifestyle changes, supplements or IUI may help.",
        points: 0.5,
      },
      {
        label: "Severely low count, zero sperm (azoospermia) or high DFI",
        sublabel:
          "Specialist evaluation and ICSI / surgical retrieval may be needed.",
        points: 0,
      },
    ],
  },
  {
    number: "4",
    question: "Do you have any of these risk factors?",
    options: [
      {
        label: "No",
        sublabel: "None.",
        points: 2,
      },
      {
        label: "Smoking, heavy alcohol, high stress or heat exposure",
        sublabel: "Lifestyle factors can affect sperm quality over 3 months.",
        points: 1,
      },
      {
        label: "Varicocele, past mumps/orchitis or groin/testicular surgery",
        sublabel: "Can impair sperm production or transport.",
        points: 0.5,
      },
      {
        label: "Undescended testes, hormonal issues or ejaculation difficulty",
        sublabel: "Requires targeted male fertility evaluation.",
        points: 0,
      },
    ],
  },
  {
    number: "5",
    question: "What is your conception history?",
    options: [
      {
        label: "No prior pregnancies, just planning",
        sublabel: "Starting point for evaluation.",
        points: 2,
      },
      {
        label: "Fathered a child previously without difficulty",
        sublabel: "Prior proven fertility.",
        points: 2,
      },
      {
        label: "Partner had 1 miscarriage",
        sublabel: "Sperm DNA quality can also contribute to early embryo loss.",
        points: 1,
      },
      {
        label: "2+ miscarriages or previous failed IUI / IVF cycles",
        sublabel: "Sperm DNA Fragmentation (DFI) testing is recommended.",
        points: 0,
      },
    ],
  },
];

export default function FertilityAssessmentQuiz() {
  const [mode, setMode] = useState<"women" | "men">("women");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submittedScore, setSubmittedScore] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const questions = mode === "women" ? womenQuestions : menQuestions;

  const handleModeSwitch = (nextMode: "women" | "men") => {
    setMode(nextMode);
    setAnswers({});
    setSubmittedScore(null);
    setValidationError(null);
  };

  const handleSelect = (qIdx: number, optIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    setValidationError(null);
  };

  const handleCalculate = () => {
    const unanswered = questions.findIndex((_, idx) => answers[idx] === undefined);
    if (unanswered !== -1) {
      setValidationError(
        `Please answer Question ${unanswered + 1} before viewing your score.`,
      );
      return;
    }

    const total = questions.reduce((sum, q, idx) => {
      const selectedIdx = answers[idx];
      return sum + (q.options[selectedIdx]?.points ?? 0);
    }, 0);

    setSubmittedScore(Number(total.toFixed(1)));
    setValidationError(null);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmittedScore(null);
    setValidationError(null);
  };

  const getScoreSummary = (score: number) => {
    if (score >= 8) {
      return {
        band: "Scores of 8.0 - 10: Good Chance of Pregnancy",
        summary:
          "Your risk of having trouble becoming pregnant is low. Try to have intercourse during your fertile window (6 days out of your cycle). If your cycle is irregular, 2 Follicular Ultrasounds can help pinpoint ovulation.",
      };
    }
    if (score >= 5) {
      return {
        band: "Scores of 5.0 - 7.5: Have Trouble Getting Pregnant",
        summary:
          "Your score indicates you may benefit from medical guidance. We recommend booking a consultation for an AMH ovarian reserve blood test, tubal patency check, and a semen analysis for the male partner. Simple treatments like Letrozole or 2–3 cycles of IUI may be enough.",
      };
    }
    return {
      band: "Score 0 - 4.5: Act Now!",
      summary:
        "Your chances of conceiving naturally without help may be low. Please book an appointment with Dr. Mona Dahiya soon for a comprehensive evaluation including 2D sonohysterogram, Sperm DNA Fragmentation Test, and personalised IVF planning.",
    };
  };

  const resultInfo =
    submittedScore !== null ? getScoreSummary(submittedScore) : null;

  return (
    <TreatmentSection id="fertility-quiz" className="bg-pink">
      <TreatmentSectionHeader
        eyebrow="Take the assessment"
        title="Check Your Fertility Score"
        subtitle="Enter your answers below and receive your fertility score out of 10 and your next step. All information remains on your device."
      />

      {/* Mode Toggle */}
      <div className="mt-6 inline-flex rounded-full border border-[#fde2ec] bg-white p-1 shadow-[0_6px_20px_rgba(232,62,116,0.08)]">
        <button
          type="button"
          onClick={() => handleModeSwitch("women")}
          className={`cursor-pointer rounded-full px-5 py-2 text-[13px] font-semibold transition-all sm:px-6 sm:text-[14px] ${mode === "women"
              ? "bg-rose text-white shadow-[0_4px_12px_rgba(232,62,116,0.35)]"
              : "text-ink hover:text-rose"
            }`}
        >
          Assessment for Women
        </button>
        <button
          type="button"
          onClick={() => handleModeSwitch("men")}
          className={`cursor-pointer rounded-full px-5 py-2 text-[13px] font-semibold transition-all sm:px-6 sm:text-[14px] ${mode === "men"
              ? "bg-rose text-white shadow-[0_4px_12px_rgba(232,62,116,0.35)]"
              : "text-ink hover:text-rose"
            }`}
        >
          Assessment for Men
        </button>
      </div>

      {/* 5 Question Cards */}
      <div className="mt-6 flex flex-col gap-5">
        {questions.map((q, qIdx) => (
          <div
            key={`${mode}-${q.number}`}
            className="rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.35)]">
                {q.number}
              </span>
              <h3 className="font-serif text-[1rem] font-semibold text-ink sm:text-[1.0625rem]">
                {q.question}
              </h3>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {q.options.map((opt, optIdx) => {
                const isSelected = answers[qIdx] === optIdx;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => handleSelect(qIdx, optIdx)}
                    aria-pressed={isSelected}
                    className={`flex h-full cursor-pointer flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-200 ${isSelected
                        ? "border-rose bg-[#fff0f5] shadow-[0_6px_18px_rgba(232,62,116,0.12)] ring-1 ring-rose/30"
                        : "border-[#fde2ec] bg-[#fffbfc] hover:border-[#f8b4cb] hover:bg-[#fff5f8]"
                      }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border ${isSelected
                            ? "border-rose bg-rose"
                            : "border-ink/30 bg-white"
                          }`}
                      >
                        {isSelected ? (
                          <span className="size-1.5 rounded-full bg-white" />
                        ) : null}
                      </span>
                      <div>
                        <p className="text-[13.5px] leading-snug font-semibold text-ink">
                          {opt.label}
                        </p>
                        <p className="mt-1 text-[12px] leading-relaxed text-ink/70">
                          {opt.sublabel}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleCalculate}
          className="inline-flex cursor-pointer items-center justify-center rounded-full bg-rose px-7 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.3)] transition-all hover:bg-rose-dark active:scale-95"
        >
          See my score
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex cursor-pointer items-center justify-center rounded-full border border-navy/25 bg-white px-7 py-3 text-[14px] font-semibold text-ink transition-all hover:border-rose hover:text-rose active:scale-95"
        >
          Start again
        </button>
      </div>

      {validationError ? (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose/30 bg-white px-4 py-3 text-[13.5px] font-medium text-rose">
          <FaExclamationCircle className="size-4 shrink-0" />
          <span>{validationError}</span>
        </div>
      ) : null}

      {resultInfo && submittedScore !== null ? (
        <div className="mt-6 rounded-2xl border border-rose/30 bg-white p-6 shadow-[0_14px_36px_rgba(232,62,116,0.12)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose text-white shadow-[0_4px_12px_rgba(232,62,116,0.35)]">
                <FaCheckCircle className="size-5" />
              </span>
              <div>
                <p className="text-[12px] font-bold tracking-wider text-rose uppercase">
                  Your Fertility Assessment Result (
                  {mode === "women" ? "Women" : "Men"})
                </p>
                <h3 className="font-serif text-[1.25rem] font-semibold text-ink sm:text-[1.45rem]">
                  {resultInfo.band}
                </h3>
              </div>
            </div>
            <div className="rounded-xl border border-[#fde2ec] bg-pink px-5 py-2.5 text-center">
              <span className="block text-[11px] font-semibold tracking-wider text-ink/70 uppercase">
                Your Score
              </span>
              <span className="font-serif text-[1.75rem] leading-none font-bold text-rose">
                {submittedScore} / 10
              </span>
            </div>
          </div>

          <p className="mt-4 text-[14px] leading-relaxed text-ink/85">
            {resultInfo.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:bg-rose-dark"
            >
              Book Consultation with Dr. Mona
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:bg-blue-dark"
            >
              Schedule Online Consultation
            </Link>
          </div>
        </div>
      ) : null}

      <p className="mt-5 text-[12.5px] leading-relaxed text-ink/75 sm:text-[13px]">
        The results from this fertility test are only for guidance. You will
        need an ultrasound, blood work and semen analysis to know if you have
        fertility issues.
      </p>
    </TreatmentSection>
  );
}
