"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What are the normal ranges for sperm count and motility?",
    answer: (
      <p>
        According to WHO guidelines, normal semen parameters require a sperm concentration of at least 15 million sperm/mL (or 39 million per ejaculate), at least 40% total motility, and a minimum of 32% progressive motility (sperm moving forward in straight lines or large circles).
      </p>
    ),
  },
  {
    question: "What is the difference between oligospermia and asthenozoospermia?",
    answer: (
      <p>
        Oligospermia refers specifically to a low sperm concentration (fewer than 15 million/mL). Asthenozoospermia indicates poor sperm motility (fewer than 32% progressively moving). When low count, sluggish motility, and abnormal morphology occur simultaneously, the condition is diagnosed as Oligoasthenoteratozoospermia (OAT).
      </p>
    ),
  },
  {
    question: "Can I get my partner pregnant naturally with low count and motility?",
    answer: (
      <p>
        Yes, spontaneous conception is possible because only one viable sperm fertilizes an egg. However, natural monthly odds decline sharply when total motile sperm counts fall below 10 million. If unassisted pregnancy does not occur within 6 to 12 months, assisted reproductive treatments are recommended.
      </p>
    ),
  },
  {
    question: "Can low sperm count and motility be improved naturally?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Yes. Adopting targeted lifestyle corrections can raise parameters within 72 to 90 days (one full spermatogenesis cycle):
        </p>
        <ul className="space-y-1.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p>Take daily antioxidants (CoQ10, L-Carnitine, Zinc, Vitamin E).</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p>Avoid excessive scrotal heat (saunas, hot tubs, tight underwear, laptops on laps).</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p>Eliminate smoking and limit alcohol.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p>Maintain a healthy BMI.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the leading medical causes of low sperm count and motility?",
    answer: (
      <div className="space-y-2.5">
        <p>Key etiologies include:</p>
        <ul className="space-y-1.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p><strong className="text-white font-semibold">Varicocele:</strong> Enlarged scrotal veins causing testicular overheating and hypoxia.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p><strong className="text-white font-semibold">Genital Infections:</strong> Epididymitis or prostatitis triggering oxidative stress.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p><strong className="text-white font-semibold">Hormonal Imbalances:</strong> Low testosterone, elevated prolactin, or thyroid dysfunction.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p><strong className="text-white font-semibold">Genetic Factors:</strong> Y-chromosome microdeletions or Klinefelter syndrome.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
            <p><strong className="text-white font-semibold">Environmental Toxins:</strong> Exposure to heavy metals, pesticides, or radiation.</p>
          </li>
        </ul>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "When should couples choose IUI vs. IVF/ICSI for male factor infertility?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
          <p>
            <strong className="text-white font-semibold">Intrauterine Insemination (IUI):</strong> Viable if the post-wash Total Motile Sperm Count (TMSC) is ≥ 5–10 million with normal female tubes.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[#e83e74] select-none text-[13px] pt-0.5">•</span>
          <p>
            <strong className="text-white font-semibold">IVF with ICSI:</strong> Strongly indicated if TMSC is &lt; 5 million, motility is severe (&lt; 10%), or previous IUI cycles failed, ensuring direct egg micro-injection.
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "How does a varicocele impact sperm count and motility?",
    answer: (
      <p>
        A varicocele causes retrograde pooling of venous blood, raising intratesticular temperatures and generating toxic reactive oxygen species (ROS). This disrupts spermatogenesis, lowering count, stripping progressive motility, and elevating DNA fragmentation. Microsurgical varicocelectomy successfully improves semen parameters in over 60% to 70% of affected men.
      </p>
    ),
  },
  {
    question: "How long does it take for medical treatments or supplements to show results?",
    answer: (
      <p>
        Spermatogenesis takes approximately 74 days, plus 10 to 14 days for epididymal transit. Therefore, any lifestyle modifications, hormonal treatments (like Clomiphene or hCG), or antioxidant therapy require a minimum of 3 full months (90 days) before improvements appear on a follow-up semen analysis.
      </p>
    ),
  },
  {
    question: "How does low motility affect fertilization during IVF?",
    answer: (
      <p>
        Sluggish or non-motile sperm often fail to penetrate the egg&apos;s outer shell (zona pellucida) in standard IVF. Using Intracytoplasmic Sperm Injection (ICSI), embryologists bypass motility issues entirely by selecting a single viable sperm under high magnification and injecting it directly into the egg, achieving 70%–80% fertilization rates.
      </p>
    ),
  },
  {
    question: "Does low sperm count or poor motility cause miscarriages or birth defects?",
    answer: (
      <p>
        Low count alone does not cause pregnancy loss, but severe poor motility is frequently linked to elevated Sperm DNA Fragmentation (DFI &gt; 30%). High DFI can trigger early embryonic arrest and first-trimester miscarriages, but it does not increase congenital birth defect rates in babies carried to term.
      </p>
    ),
  },
];

export default function LowSpermFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title={
          <>
            Top FAQs About Low
            <br className="hidden sm:inline" /> Sperm Count & Motility
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
