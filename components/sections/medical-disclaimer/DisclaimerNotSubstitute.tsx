"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function DisclaimerNotSubstitute() {
  const points = [
    {
      text: "By using the website you will not receive personalised advice. This must be obtained from a fertility expert/gynaecologist.",
    },
    {
      text: (
        <>
          No doctor-patient relationship is created by consulting through the
          website, filling forms or chatting with us and asking questions about
          fertility (fertility tests included). Try our{" "}
          <Link
            href="/fertility-assessment-quiz"
            className="font-bold text-rose underline decoration-rose/40 underline-offset-2 hover:text-rose-dark"
          >
            Fertility Assessment
          </Link>
          .
        </>
      ),
    },
    {
      text: "Examination is required before giving you any medicine for fertility.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16" style={{ background: "var(--pink)" }}>
      <div className="page-container relative z-10 max-w-4xl">
        <div className="mb-6">
          <Reveal variant="fadeUp">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose">
              Section 2: Not a replacement for Medical Advice
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Not a Substitute for a Medical Consultation
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12}>
            <p className="mt-2 text-xs sm:text-sm text-ink/75">
              Patients can learn about their condition online and send us queries, but:
            </p>
          </Reveal>
        </div>

        <Stagger className="space-y-3.5">
          {points.map((p, idx) => (
            <StaggerItem key={idx}>
              <div className="flex items-start gap-3.5 rounded-xl border border-rose/15 bg-white p-4 sm:p-5 shadow-sm transition hover:border-rose/35">
                <FaCheckCircle className="mt-0.5 shrink-0 text-base text-emerald-600" />
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-ink/85">
                  {p.text}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
