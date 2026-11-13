"use client";

import { FaExclamationTriangle } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function DisclaimerEmergencies() {
  const warningSigns = [
    {
      sign: "Abdominal pain that increases",
      action: "Contact your physician or go to clinic",
    },
    {
      sign: "Bleeding",
      action: "Contact your physician or go to clinic",
    },
    {
      sign: "Body temperature rising or trouble breathing",
      action: "Contact your physician or go to clinic",
    },
    {
      sign: "Feeling of swelling in tummy or urinating less than usual (could be OHSS)",
      action: "Contact your physician or go to clinic",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white border-t border-rose/10">
      <div className="page-container relative z-10 max-w-4xl">
        <div className="mb-6">
          <Reveal variant="fadeUp">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose">
              Section 3: If you are experiencing an Emergency during Treatment
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Emergencies During Fertility Treatment
            </h2>
          </Reveal>
        </div>

        {/* Warning Callout Box */}
        <Reveal variant="fadeUp" delay={0.12}>
          <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-5 sm:p-6 shadow-sm mb-6">
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm sm:text-base mb-2">
              <FaExclamationTriangle className="text-amber-600 text-lg shrink-0" />
              <span>This website is not for emergencies</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-amber-950/85">
              We are not an emergency service. If you face any kind of emergency,
              do not rely on our website or forms/chat/email, as we have no
              knowledge of such situations. If you experience high levels of
              pain in the lower abdomen, bleeding, a rise in body temperature,
              trouble breathing or symptoms of OHSS, go to your nearest hospital
              emergency room.
            </p>
          </div>
        </Reveal>

        {/* Warning Signs Table */}
        <Reveal variant="fadeUp" delay={0.18}>
          <div className="overflow-hidden rounded-2xl border border-rose/20 bg-white shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-pink/60 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-rose border-b border-rose/10">
              <div>WARNING SIGN</div>
              <div className="hidden sm:block">WHAT TO DO</div>
            </div>

            <div className="divide-y divide-rose/10">
              {warningSigns.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-2 px-5 py-3.5 text-xs sm:text-sm gap-1 sm:gap-4 hover:bg-pink/20 transition"
                >
                  <div className="font-semibold text-ink">{row.sign}</div>
                  <div className="text-ink/75 sm:text-ink/80">{row.action}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

