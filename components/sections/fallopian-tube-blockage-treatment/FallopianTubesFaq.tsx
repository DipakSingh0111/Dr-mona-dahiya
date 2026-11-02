"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How do I know if my tubes are blocked?",
    answer: (
      <div className="space-y-3">
        <p>
          Most women have no symptoms. A blockage is usually found when investigating why pregnancy has not occurred. An HSG (X-ray dye test) or SSG/HyCoSy (ultrasound dye test) is used to check whether the dye spills freely through each tube into the pelvis.
        </p>
      </div>
    ),
  },
  {
    question: "What is the difference between unilateral and bilateral blockage?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong className="text-white">Unilateral:</strong> One tube is blocked; the other is open. Natural conception or IUI is still possible from the open side, though it may take longer.
        </p>
        <p>
          <strong className="text-white">Bilateral:</strong> Both tubes are blocked. Eggs and sperm cannot meet naturally, and IVF is usually required unless the blockage is mild and surgically correctable.
        </p>
      </div>
    ),
  },
  {
    question: "Can blocked fallopian tubes be opened without surgery?",
    answer: (
      <div className="space-y-3">
        <p>
          A proximal blockage (near the uterus) can sometimes be cleared during the dye test itself (tubal flushing or oil-contrast effect) or by selective tubal cannulation. A blockage at the far end (fimbrial) or involving scarring and fluid (hydrosalpinx) generally cannot be resolved without surgical intervention or bypassing the tubes via IVF.
        </p>
      </div>
    ),
  },
  {
    question: "What is a hydrosalpinx, and why does it matter for IVF?",
    answer: (
      <div className="space-y-3">
        <p>
          A hydrosalpinx is a fallopian tube that is blocked at its outer end and filled with toxic, inflammatory fluid. This fluid can wash back into the uterine cavity, where it is toxic to embryos and significantly reduces IVF implantation rates (often by up to 50%). Doctors typically recommend clipping (tubal occlusion) or removing (salpingectomy) the affected tube before an embryo transfer.
        </p>
      </div>
    ),
  },
  {
    question: "Is laparoscopy or IVF better for tubal factor infertility?",
    answer: (
      <div className="space-y-3">
        <p>
          It depends on age, ovarian reserve, semen parameters, and the nature of the blockage:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Laparoscopy:</strong> Best for young women with mild, single-point distal adhesions or proximal blockages who desire natural conception and have good ovarian reserve and normal semen.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">IVF:</strong> Recommended when woman is &gt;35, has severe tubal damage, bilateral hydrosalpinx, concurrent male factor infertility, or reduced ovarian reserve, because IVF directly bypasses the tubes entirely.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What causes fallopian tubes to get blocked?",
    answer: (
      <div className="space-y-3">
        <p>Common causes include:</p>
        <ul className="space-y-1.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Pelvic Inflammatory Disease (PID) from infections such as Chlamydia or Gonorrhoea</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Endometriosis causing pelvic adhesions and tubal scarring</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Previous pelvic or abdominal surgeries (e.g., ruptured appendix, ovarian cyst removal)</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e83e74] select-none text-[13px] pt-1">•</span>
            <p>Past ectopic pregnancy or pelvic tuberculosis (common in India)</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is an HSG test painful?",
    answer: (
      <div className="space-y-3">
        <p>
          Most women experience brief cramping (like period cramps) for a few minutes while the dye is being injected into the uterus and tubes. Taking an anti-spasmodic or pain reliever 30–60 minutes prior helps significantly. The entire procedure usually takes under 15 minutes.
        </p>
      </div>
    ),
  },
  {
    question: "Can I get pregnant with only one fallopian tube?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. If you have one healthy, open tube and normal ovulation, you can conceive naturally. Even when ovulation occurs on the opposite ovary, the healthy tube can sometimes pick up the ovum across the pelvis. If conception does not occur within 6–12 months, assisted reproductive options like IUI or IVF can be considered.
        </p>
      </div>
    ),
  },
  {
    question: "Does tubal surgery increase the risk of ectopic pregnancy?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. Any condition or surgical repair that damages the delicate microscopic cilia lining inside the fallopian tube increases the risk of an embryo getting stuck along its journey to the uterus. If you conceive after tubal surgery, an early ultrasound at 5–6 weeks is essential to confirm an intrauterine pregnancy.
        </p>
      </div>
    ),
  },
  {
    question: "How long after tubal surgery should I wait before trying for a baby?",
    answer: (
      <div className="space-y-3">
        <p>
          Most specialists recommend trying for spontaneous conception starting the cycle following your procedure, once pelvic healing is complete. If pregnancy does not occur within 6 to 12 months post-surgery, moving to IVF without further delay is standard practice to preserve ovarian reserve.
        </p>
      </div>
    ),
  },
];

export default function FallopianTubesFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
          eyebrow="Frequently Asked Questions"
          title="Questions About Fallopian Tube Blockage"
          subtitle="Straightforward clinical answers on diagnostics, tubal surgery vs IVF, hydrosalpinx management, and pregnancy outcomes."
        />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
