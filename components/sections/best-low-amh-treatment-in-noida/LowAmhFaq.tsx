"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Can I get pregnant naturally with low AMH?",
    answer: (
      <p>
        Yes. Anti-Müllerian Hormone (AMH) measures egg{" "}
        <strong className="font-semibold text-white">quantity</strong>, not
        quality. As long as you ovulate regularly, natural conception remains
        possible. Your monthly chance is driven mainly by age, not the AMH
        number alone.
      </p>
    ),
  },
  {
    question: "What is considered a low or critically low AMH level?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Normal Reserve:</strong>{" "}
            2.0 to 4.0 ng/mL
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Low Reserve:</strong> 1.0
            to 1.5 ng/mL
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Significantly Low Reserve:
            </strong>{" "}
            0.5 to 0.9 ng/mL
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Critically Low Reserve:
            </strong>{" "}
            Below 0.5 ng/mL (typically yields 1–3 eggs per IVF cycle)
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "Can low AMH levels be increased or reversed?",
    answer: (
      <p>
        No medical treatment regenerates new eggs. Protocols with CoQ10, DHEA
        and growth hormone (hGH) can support mitochondrial energy and egg
        quality before stimulation, but they do not reverse reserve decline.
      </p>
    ),
  },
  {
    question: "What is the success rate of IVF with low AMH?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Under 35:</strong> High
            (40% to 50%)
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Age 35–39:</strong> 25%
            to 35%
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Age 40 and above:
            </strong>{" "}
            10% to 15% (can improve with PGT-A and embryo banking)
          </p>
        </li>
      </ul>
    ),
  },
  {
    question:
      "What are the best IVF protocols for low AMH and poor ovarian response?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              DuoStim (Double Stimulation)
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Micro-Dose Flare or GnRH Antagonist
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Mild IVF / Mini-IVF
            </strong>
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "What is embryo banking, and why is it recommended for low AMH?",
    answer: (
      <p>
        Embryo banking means completing 2–3 consecutive retrievals and freezing
        Day 5/6 blastocysts before transfer. Pooling embryos raises cumulative
        success chances — often toward 90%+ over multiple cycles when age
        allows.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How much does low AMH IVF treatment cost in Delhi NCR?",
    answer: (
      <div className="space-y-3">
        <p>
          Plans typically range from ₹1,25,000 to ₹2,25,000 depending on
          medicines and lab steps. Main variables include:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">
              •
            </span>
            <p>
              <strong className="font-semibold text-white">
                Gonadotropin Injections & Priming
              </strong>
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">
              •
            </span>
            <p>
              <strong className="font-semibold text-white">
                ICSI & Blastocyst Culture
              </strong>
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="pt-1 text-[13px] text-[#e83e74] select-none">
              •
            </span>
            <p>
              <strong className="font-semibold text-white">
                Vitrification & Storage
              </strong>
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What causes low AMH in young women?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Endometriosis & Ovarian Cysts
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Genetic Factors</strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Previous Surgeries or Chemotherapy
            </strong>
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">
              Autoimmune Disorders
            </strong>
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "Does a low AMH level automatically mean I need donor eggs?",
    answer: (
      <p>
        No. Personalized stimulation and embryo banking often allow patients to
        use their own eggs. Donor eggs are considered only after own-egg options
        are fully explored.
      </p>
    ),
  },
  {
    question: "What is the difference between conventional IVF and DuoStim?",
    answer: (
      <p>
        Conventional IVF stimulates once per menstrual cycle. DuoStim
        stimulates twice in one cycle — follicular and luteal phases — so two
        retrievals can bank more oocytes faster when reserve is low.
      </p>
    ),
  },
  {
    question: "Does low AMH cause miscarriage?",
    answer: (
      <p>
        No. AMH reflects ovarian reserve, not pregnancy-loss risk. Miscarriage
        risk depends mainly on age and embryo chromosomes, not the AMH value
        alone.
      </p>
    ),
  },
  {
    question: "Where can I consult Dr. Mona Dahiya for low AMH?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Noida:</strong> 3rd
            Floor, K-06, above FirstCry, Baraula, Sector 49
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Ghaziabad:</strong> 2nd
            Floor, RDC, C-53A, near Bikanerwala, Sector 15
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="pt-1 text-[13px] text-[#e83e74] select-none">•</span>
          <p>
            <strong className="font-semibold text-white">Delhi:</strong> Building
            Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV
          </p>
        </li>
      </ul>
    ),
  },
];

export default function FaqCard() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title="Top FAQs About Low AMH Treatment"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
