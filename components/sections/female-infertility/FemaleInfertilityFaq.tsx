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
    question: "Does female infertility treatment always mean IVF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          In Vitro Fertilisation (IVF) is not the first or only answer; roughly 65% to 70% of couples conceive through less invasive therapies. Reproductive care follows a tiered clinical ladder tailored to the exact root cause:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Metabolic &amp; Lifestyle Calibration:</strong> Addressing insulin resistance, thyroid fluctuations, or hyperprolactinemia often restores spontaneous ovulatory cycles.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Targeted Ovulation Induction (OI):</strong> Oral aromatase inhibitors (such as Letrozole) paired with ultrasound tracking achieve successful conception in a large portion of anovulatory women.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Intrauterine Insemination (IUI):</strong> Concentrated, highly motile sperm is placed directly past the cervix at peak ovulation, bypassing mild male-factor or cervical barriers.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Minimally Invasive Endoscopic Surgery:</strong> Office hysteroscopy or laparoscopy to resect endometrial polyps, clear intrauterine synechiae (Asherman&apos;s), or treat mild endometriosis.
            </p>
          </li>
        </ul>
        <p>
          IVF is reserved for definitive indications: bilateral tubal occlusion, severe pelvic adhesions, significant ovarian reserve depletion in older reproductive years, or when less invasive treatments have failed.
        </p>
      </div>
    ),
  },
  {
    question: "Are irregular cycles a definitive indicator of infertility?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Irregular cycles (longer than 35 days, variable, or absent) signal disrupted ovulation (anovulation or oligo-ovulation), not permanent sterility. Ovulatory dysfunction accounts for nearly 25% to 30% of all female fertility evaluations, frequently stemming from Polycystic Ovary Syndrome (PCOS), hypothalamic stress, or subclinical thyroid disorders.
        </p>
        <p>
          Because the ovary does not mature and release an oocyte on a predictable timeline, fertile-window timing becomes difficult. Targeted medical ovulation induction successfully triggers predictable egg release in over 75% to 80% of these patients, allowing natural conception or simple IUI without complex interventions.
        </p>
      </div>
    ),
  },
  {
    question: "How significantly does female age influence treatment success?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Age dictates reproductive potential because females are born with a finite follicular pool that declines in both count and genetic health:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Under 35:</strong> High monthly fecundity (~20%–25% natural conception per cycle); IVF cumulative live birth rates often surpass 50%–60%.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">35 to 37:</strong> Accelerated follicular atresia begins; medical evaluation is advised after just 6 months of unsuccessful attempts.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">38 to 40:</strong> Over 50% to 60% of remaining oocytes carry chromosomal segregation errors (aneuploidy), translating to lower implantation rates and elevated spontaneous loss risks.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Above 40:</strong> Focus shifts toward rapid-intervention strategies, including embryo pooling/banking and Preimplantation Genetic Testing for Aneuploidies (PGT-A) to bypass maternal age-related genetic risks.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Which foundational fertility tests must be conducted first?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A thorough workup systematically examines the three biological pillars—ovarian reserve, uterine cavity integrity, and tubal patency:
        </p>
        <ol className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">1.</span>
            <p>
              <strong className="text-white font-semibold">Ovarian Biomarker Profile:</strong> Serum Anti-Müllerian Hormone (AMH) combined with an early follicular (Cycle Day 2–4) transvaginal ultrasound to measure Antral Follicle Count (AFC).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">2.</span>
            <p>
              <strong className="text-white font-semibold">Basal Pituitary-Ovarian Hormones:</strong> Day 2/3 FSH, LH, and Estradiol, along with TSH and Prolactin.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">3.</span>
            <p>
              <strong className="text-white font-semibold">Tubal Evaluation:</strong> Hysterosalpingography (HSG) or high-definition Sono-Salpingography (SSG) to verify bilateral patency.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">4.</span>
            <p>
              <strong className="text-white font-semibold">Cavity Screening:</strong> 3D pelvic sonography or diagnostic hysteroscopy to check for submucosal fibroids, polyps, or cavity distortions.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">5.</span>
            <p>
              <strong className="text-white font-semibold">Partner Semen Evaluation:</strong> Complete semen analysis and Sperm DNA Fragmentation Index (DFI), since male-factor contributions account for 40% to 50% of fertility challenges.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the typical cost of an initial female fertility evaluation in Delhi NCR?",
    answerContent: (
      <div className="space-y-3">
        <p>
          A standard diagnostic workup in Delhi, Noida, or Ghaziabad ranges between ₹8,000 and ₹18,000, depending on required diagnostic imaging:
        </p>
        <ul className="space-y-1.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p><strong className="text-white font-semibold">Hormonal &amp; AMH Blood Panel:</strong> ₹3,500 to ₹6,500</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p><strong className="text-white font-semibold">High-Resolution Transvaginal Ultrasound (TVS &amp; AFC):</strong> ₹1,500 to ₹2,500</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p><strong className="text-white font-semibold">Tubal Patency Test (HSG / Contrast Ultrasound):</strong> ₹2,500 to ₹4,500</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p><strong className="text-white font-semibold">Comprehensive Partner Semen Analysis:</strong> ₹1,000 to ₹2,000</p>
          </li>
        </ul>
        <p>
          Advanced diagnostics, such as an outpatient office hysteroscopy or expanded parental genetic screening, are billed separately if structural or chromosomal anomalies are suspected.
        </p>
      </div>
    ),
  },
  {
    question: "How many cycles of ovulation induction should be attempted before moving forward?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Clinical guidelines advise limiting simple ovulation induction (oral Letrozole or Clomiphene with timed intercourse) to 3 to 4 ovulatory cycles.
        </p>
        <p>
          If serial ultrasound tracking confirms consistent follicular rupture and an optimal endometrial lining, yet pregnancy does not occur across 3 to 4 cycles, the chance of success with identical treatment drops significantly. At that threshold, continuing identical cycles causes unnecessary delays; care should advance to Intrauterine Insemination (IUI) or a diagnostic laparoscopy/hysteroscopy to rule out silent tubal, peritoneal, or pelvic factors.
        </p>
      </div>
    ),
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "Can occluded or damaged fallopian tubes be resolved without IVF?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Feasibility depends entirely on the location and nature of the tubal damage:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Proximal Obstruction (junction of uterus and tube):</strong> Often opened without IVF via fluoroscopic transcervical tubal recanalization or hysteroscopic cannulation, achieving patency in over 50% to 60% of cases.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Distal Occlusion / Hydrosalpinx (fluid accumulation at the fimbrial end):</strong> Tubal reconstructive surgery yields poor spontaneous pregnancy rates because the delicate microscopic cilia required to propel eggs are permanently scarred. In these situations, IVF is the safest, most definitive path. Fluid-filled hydrosalpinges must be clipped or excised prior to transfer to prevent inflammatory back-flow into the endometrial cavity.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does body mass index (BMI) alter female reproductive potential?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Both elevated and deficient adipose stores interfere with the hypothalamic-pituitary-ovarian axis:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Elevated BMI (≥ 28–30 kg/m²):</strong> Adipose-driven peripheral estrone production and hyperinsulinemia increase ovarian androgen synthesis. This impairs follicular maturation and reduces endometrial receptivity. A modest weight reduction of 5% to 10% can restore spontaneous, ovulatory cycles in over 60% of affected women.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Low BMI (&lt; 18.5 kg/m²):</strong> Triggers functional hypothalamic amenorrhea; insufficient energy availability suppresses GnRH pulsation, preventing the pituitary from releasing adequate FSH and LH to develop follicles.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the telltale symptoms of endometriosis, and how does it prevent conception?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Endometriosis involves ectopic endometrial-like tissue growing across pelvic structures, triggering localized inflammation and scarring. Common symptoms include severe menstrual pain (dysmenorrhea), deep pelvic pain during intercourse (dyspareunia), painful bowel movements during menstruation, and persistent pelvic aching.
        </p>
        <p>
          It compromises fertility through several mechanisms:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Distorting pelvic anatomy with fibrous adhesions that physically trap the ovaries or prevent tubal pick-up.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Producing inflammatory cytokines that compromise egg quality and early embryonic development.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Forming ovarian endometriomas (&quot;chocolate cysts&quot;) that damage healthy ovarian cortex and deplete reserve.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can natural conception happen with a diminished AMH reserve?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Yes. Serum Anti-Müllerian Hormone reflects oocyte quantity, not individual oocyte competence. If a woman ovulates regularly each month, her probability of natural conception in any single cycle is primarily determined by her chronological age (which governs egg genetics), rather than her AMH number alone.
        </p>
        <p>
          A low AMH indicates that ovarian biological reserve is constrained; while conceiving naturally remains possible, waiting extended periods without a specialist evaluation risks missing the window when therapeutic intervention works best.
        </p>
      </div>
    ),
  },
  {
    question: "What causes unexplained infertility, and what is the best treatment strategy?",
    answerContent: (
      <div className="space-y-3">
        <p>
          Unexplained infertility is diagnosed when standard clinical investigations show clear tubal patency, regular ovulatory cycles, adequate ovarian reserve, and a normal semen analysis. It accounts for 15% to 25% of cases and typically stems from unseen molecular factors—such as elevated sperm DNA strand breaks, subclinical oocyte fertilization failure, or subtle endometrial receptivity mismatch.
        </p>
        <p>
          The treatment pathway follows an evidence-based escalation:
        </p>
        <ol className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">1.</span>
            <p>2 to 3 cycles of Superovulation paired with Intrauterine Insemination (IUI).</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] font-bold text-[13px] pt-0.5">2.</span>
            <p>
              If pregnancy is not achieved, moving to IVF/ICSI with extended blastocyst culture, which serves as both a diagnostic checkpoint (confirming fertilization and cleavage mechanics) and a therapeutic solution.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "Where can patients schedule a consultation with Dr. Mona Dahiya?",
    answerContent: (
      <div className="space-y-3">
        <p>
          In-person clinical evaluations, ultrasound scans, and advanced fertility procedures are conducted across three locations in Delhi NCR:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Noida Center:</strong> 3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Ghaziabad Center:</strong> 2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">South Delhi Center:</strong> Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function FemaleInfertilityFaq() {
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
        {/* Eyebrow & Title */}
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            Patient questions
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Top FAQs About Female
            <br className="hidden sm:inline" /> Infertility Treatment
          </h2>
        </Reveal>

        {/* 2 Column FAQ Grid */}
        <div className="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeft === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#091a3c]/70 transition-colors duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  >
                    <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`size-3 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f9a8d4]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 px-4 pt-3.5 pb-4.5 sm:px-5 sm:pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {faq.answerContent}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRight === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#091a3c]/70 transition-colors duration-200 hover:border-[#0047ca]/50 hover:bg-[#0c224e]/80"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  >
                    <span className="font-medium text-[13.5px] leading-snug text-white sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`size-3 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f9a8d4]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 px-4 pt-3.5 pb-4.5 sm:px-5 sm:pb-5 text-[13px] leading-relaxed text-slate-300 sm:text-[13.5px]">
                      {faq.answerContent}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
