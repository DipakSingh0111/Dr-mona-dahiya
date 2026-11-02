"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answerContent: React.ReactNode;
}

const leftFaqs: FAQItem[] = [
  {
    question: "What is the clinical definition of Recurrent Implantation Failure (RIF)?",
    answerContent: (
      <div className="space-y-3">
        <p>
          RIF is diagnosed when a woman under 40 fails to achieve a clinical pregnancy (gestational sac on ultrasound) after transferring at least <strong className="text-white">3 high-grade cleavage-stage embryos or 2 or more morphologically top-quality blastocysts</strong> across multiple IVF cycles. It affects approximately <strong className="text-white">10% to 15%</strong> of couples undergoing assisted reproductive treatments and warrants an advanced, multi-factorial investigation rather than repeating standard protocols.
        </p>
      </div>
    ),
  },
  {
    question: "What is the single most common cause of RIF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          <strong className="text-white">Embryonic chromosomal aneuploidy accounts for over 50% to 60% of all implantation failures</strong>, even when embryos appear physically perfect under standard embryology microscopes. In women over 35, more than half of developing blastocysts carry numerical chromosomal abnormalities. Performing Preimplantation Genetic Testing for Aneuploidies (PGT-A) to verify and transfer a chromosomally normal (euploid) blastocyst elevates implantation rates to <strong className="text-white">65%–70%</strong> and cuts early miscarriage rates below 10%.
        </p>
      </div>
    ),
  },
  {
    question: "How does the Endometrial Receptivity Analysis (ERA) help in RIF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Around <strong className="text-white">25% to 30% of women with RIF</strong> have an altered or displaced “Window of Implantation” (WOI), meaning their uterine lining is either pre-receptive (needs 12–24 hours more progesterone) or post-receptive (needs less). The ERA test uses Next-Generation Sequencing across 248 receptivity genes to pinpoint this exact molecular receptive window, allowing a Personalised Frozen Embryo Transfer (pFET) that restores pregnancy rates to <strong className="text-white">55%–65%</strong>.
        </p>
      </div>
    ),
  },
  {
    question: "Can chronic endometritis cause repeated implantation failure?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. Chronic endometritis—a persistent, asymptomatic inflammation of the endometrial lining—is detected in up to <strong className="text-white">30% to 40% of patients with unexplained RIF</strong>. Often missed on routine scans, it is diagnosed via hysteroscopic biopsy and immunohistochemical staining for <strong className="text-white">CD138 syndecan-1 plasma cells</strong>. Targeted oral antibiotic regimens (such as Doxycycline or Metronidazole) cure the infection in <strong className="text-white">over 85% to 90% of cases</strong>, significantly restoring subsequent embryo implantation rates.
        </p>
      </div>
    ),
  },
  {
    question: "How does a thin endometrial lining affect implantation, and how is it treated?",
    answerContent: (
      <div className="space-y-3">
        <p>
          An endometrial lining measuring <strong className="text-white">under 7 mm</strong> with absent trilaminar architecture on the day of progesterone administration significantly drops implantation rates below <strong className="text-white">20% to 25%</strong>. Management protocols for unresponsive thin linings include:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Extended high-dose oral or transdermal estradiol priming with micronized vaginal sildenafil.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Intrauterine Platelet-Rich Plasma (PRP) infusions:</strong> Adds <strong className="text-white">1.5 to 2.5 mm of vascularized thickness</strong> within 48–72 hours via concentrated autologous growth factors.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Diagnostic hysteroscopy to lyse intrauterine synechiae or basal scar tissue (Asherman&apos;s syndrome).</p>
          </li>
        </ul>
      </div>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "What tests should a couple complete after multiple failed embryo transfers?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A structured post-RIF diagnostic workup investigates four primary domains:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Genetic / Parental:</strong> High-resolution parental karyotyping for balanced translocations; PGT-A for remaining embryos.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Anatomical / Cavity:</strong> 3D pelvic ultrasound or diagnostic hysteroscopy to rule out polyps, septa, or intrauterine adhesions.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Endometrial &amp; Microbiome:</strong> CD138 biopsy for chronic endometritis, and the EndomeTRIO panel (ERA, EMMA for Lactobacillus balance, and ALICE for pathogens).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Systemic &amp; Male Factors:</strong> High-sensitivity Sperm DNA Fragmentation Index (DFI &gt;30% impairs blastocyst viability), alongside antiphospholipid and thrombophilia screenings.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Does an untreated hydrosalpinx cause implantation failure?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. A hydrosalpinx (a distally occluded, fluid-filled fallopian tube) <strong className="text-white">reduces IVF implantation rates by 50%</strong> and doubles early pregnancy loss rates. The stagnant, embryotoxic tubal fluid drains retrograde into the uterine cavity, physically flushing embryos out and downregulating vital endometrial receptivity markers like integrin αvβ3. Laparoscopic clipping (occlusion) or salpingectomy (removal) before frozen transfer fully restores implantation success to baseline levels.
        </p>
      </div>
    ),
  },
  {
    question: "Can immunological or blood clotting disorders cause RIF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. Autoimmune conditions and thrombophilias contribute to roughly <strong className="text-white">10% to 15% of refractory RIF cases</strong>:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Thrombophilias (Factor V Leiden, Protein C/S deficiency, Antiphospholipid Syndrome - APLS):</strong> Micro-thrombi obstruct fragile spiral arterioles at the implantation site, starving the early trophoblast.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white">Elevated Uterine Natural Killer (uNK) Cells:</strong> In rare instances, hyperactive uNK cytotoxicity impedes trophoblast invasion.
            </p>
          </li>
        </ul>
        <p>
          Treatment with low-dose aspirin, low-molecular-weight heparin (LMWH), and short courses of corticosteroids or IVIG/Intralipids helps normalize this micro-environment.
        </p>
      </div>
    ),
  },
  {
    question: "What is the success rate of a frozen embryo transfer after treating RIF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          When an evidence-based diagnosis addresses the specific underlying barrier—transferring a confirmed PGT-A euploid blastocyst into an optimized cavity at an ERA-timed receptive window—cumulative clinical pregnancy rates rebound to <strong className="text-white">60% to 70% per transfer</strong>, with a <strong className="text-white">90%+ cumulative live birth rate</strong> over three targeted euploid transfers.
        </p>
      </div>
    ),
  },
  {
    question: "Does Laser-Assisted Hatching (LAH) improve outcomes in RIF cycles?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. In frozen transfer cycles or in older patients with a thick, vitrified, or hardened zona pellucida (&gt;15–18 μm), the embryo may struggle to hatch and break out into the endometrial stroma. Using a precise 1.48 μm non-contact infrared diode laser to thin or create a micro-aperture in the outer shell right before transfer improves hatching mechanics, increasing implantation rates by <strong className="text-white">10% to 15%</strong> in women with prior failed attempts.
        </p>
      </div>
    ),
  },
];

export default function RifFaq() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeft(openLeft === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRight(openRight === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section Header */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Frequently Asked Questions about
            <br className="hidden sm:inline" /> Recurrent Implantation Failure
          </h2>
        </Reveal>

        {/* 2-Column Accordion */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#e83e74]" : ""
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth accordion wrapper using CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answerContent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#091a3c]/70 backdrop-blur-md transition-all duration-300 hover:border-[#0047ca]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-white"
                  >
                    <span className="font-serif text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#e83e74]" : ""
                      }`}
                    >
                      <FaChevronDown className="size-3" />
                    </span>
                  </button>

                  {/* Smooth accordion wrapper using CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pt-3 pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                        {faq.answerContent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

