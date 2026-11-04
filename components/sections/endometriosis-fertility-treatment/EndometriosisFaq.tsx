"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "What is the fundamental difference between endometriosis and adenomyosis?",
    answer: (
      <div className="space-y-3">
        <p>
          Both conditions involve endometrial-like tissue, but their anatomical locations differ:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Endometriosis:</strong> Tissue implants <strong className="text-white">outside</strong> the uterine cavity—most frequently across the ovaries, fallopian tubes, pouch of Douglas, and pelvic peritoneum. It causes pelvic adhesions, distorted tubal motility, and local inflammatory toxicity.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Adenomyosis:</strong> Endometrial glands and stroma infiltrate the <strong className="text-white">muscular wall (myometrium)</strong> of the uterus itself. This causes myometrial thickening, asymmetrical uterine enlargement, altered junctional zone dynamics, and defective embryo implantation.
            </p>
          </li>
        </ul>
        <p>
          They coexist in approximately <strong className="text-white">20% to 40% of patients</strong>, compounding pelvic pain and subfertility.
        </p>
      </div>
    ),
  },
  {
    question: "Does endometriosis or adenomyosis always cause infertility?",
    answer: (
      <div className="space-y-3">
        <p>
          No. An estimated <strong className="text-white">50% to 60% of women</strong> with mild endometriosis or early focal adenomyosis conceive without medical assistance. Infertility develops when moderate-to-severe disease compromises reproductive mechanics:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>Pelvic adhesions physically blocking the fimbriae from picking up eggs.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>Chronic cytokine-rich peritoneal fluid damaging sperm DNA and oocyte spindles.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>Disrupted peristalsis of the uterine junctional zone impairing blastocyst attachment.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does adenomyosis lower IVF success, and can it be corrected?",
    answer: (
      <div className="space-y-3">
        <p>
          Adenomyosis disrupts pregnancy rates by triggering localized hyperestrogenism, microvascular inflammation, and an enlarged, non-receptive inner uterine junctional zone (&gt;12 mm on MRI or 3D ultrasound).
        </p>
        <p>To overcome this, modern protocols avoid fresh embryo transfers:</p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Freeze-All Strategy:</strong> Blastocysts are vitrified during the retrieval cycle to prevent high stimulation hormones from inflaming the myometrium.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Downregulation:</strong> Pre-treating with <strong className="text-white">long-acting GnRH agonists (depot therapy for 1 to 3 months)</strong> shrinks the myometrial lesions and cools local inflammation before carrying out a primed Frozen Embryo Transfer (FET).
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is laparoscopic surgery mandatory before starting IVF?",
    answer: (
      <div className="space-y-3">
        <p>
          Surgery is <strong className="text-white">not universally required</strong> and must be evaluated against your ovarian reserve (AMH level):
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Surgical Excision is Advised:</strong> For large, painful ovarian endometriomas (&gt;4 cm), deep infiltrating endometriosis causing bowel/urinary obstruction, or hydrosalpinx (fluid-filled damaged tubes that must be clipped prior to transfer).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Surgery is Avoided / Deferred:</strong> In women with low AMH (&lt;1.5 ng/mL) or diffuse adenomyosis. Aggressive cyst stripping strips healthy ovarian cortex, permanently depleting egg reserve, while diffuse adenomyosis lacks clear surgical margins and risks uterine rupture. For these women, <strong className="text-white font-semibold">embryo banking first</strong>, followed by medical suppression, is the clinical standard.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long should you try to conceive before moving to IVF?",
    answer: (
      <div className="space-y-3">
        <p>Timeline guidelines depend on clinical stage and age:</p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Women under 35 with Stage I/II Endometriosis:</strong> Can attempt natural conception or 2 to 3 cycles of ovulation induction + IUI for <strong className="text-white">6 to 12 months</strong> if fallopian tubes are confirmed open and the semen analysis is normal.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">•</span>
            <p>
              <strong className="text-white font-semibold">Women 35 and older, or with Stage III/IV Endometriosis, Endometriomas, or Adenomyosis:</strong> Should move to <strong className="text-white font-semibold">IVF after 6 months</strong> of unassisted attempts. Prolonged waiting allows progressive endometriotic cysts to destroy remaining follicles and increases surgical recurrence risks.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What are the earliest diagnostic signs of endometriosis and adenomyosis?",
    answer: (
      <ul className="space-y-2.5 pl-1">
        <li className="flex items-start gap-2">
          <span className="text-rose select-none text-[13px] pt-1">•</span>
          <p>
            <strong className="text-white font-semibold">Endometriosis Clues:</strong> Severe secondary dysmenorrhea (painful periods unresponsive to routine painkillers), deep dyspareunia (pain during intercourse), chronic non-menstrual pelvic pain, and painful bowel movements during periods (dyschezia).
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose select-none text-[13px] pt-1">•</span>
          <p>
            <strong className="text-white font-semibold">Adenomyosis Clues:</strong> Menorrhagia (prolonged, heavy menstrual flow with blood clots), severe uterine cramping, a sensation of lower pelvic heaviness, and a diffusely enlarged, &quot;globular,&quot; tender uterus on clinical examination.
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "How are endometriosis and adenomyosis accurately diagnosed?",
    answer: (
      <ul className="space-y-2 pl-1">
        <li className="flex items-start gap-2">
          <span className="text-rose select-none text-[13px] pt-1">•</span>
          <p>
            <strong className="text-white font-semibold">High-Resolution Transvaginal Ultrasound (TVS):</strong> Identifies ovarian endometriomas (&quot;ground-glass&quot; cyst appearance) and classic adenomyosis signs (asymmetrical myometrial wall thickening, myometrial cysts, and linear striations).
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose select-none text-[13px] pt-1">•</span>
          <p>
            <strong className="text-white font-semibold">Pelvic MRI:</strong> The definitive non-invasive imaging method to map deep infiltrating endometriosis (DIE) nodules and quantify uterine junctional zone thickness for adenomyosis.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose select-none text-[13px] pt-1">•</span>
          <p>
            <strong className="text-white font-semibold">Diagnostic Laparoscopy:</strong> The gold standard for direct visual confirmation and histopathological staging of superficial peritoneal endometriosis.
          </p>
        </li>
      </ul>
    ),
  },
  {
    question: "Does having an endometrioma (\"chocolate cyst\") ruin egg quality?",
    answer: (
      <p>
        Endometriomas alter the surrounding ovarian cortex by generating oxidative stress, iron overload, and local fibrosis. While unoperated cysts can slightly reduce the total number of oocytes retrieved from the affected ovary, the eggs collected from the unaffected ovarian tissue or through tailored low-dose stimulation maintain <strong className="text-white">normal fertilization and chromosomal euploidy rates</strong> comparable to age-matched controls.
      </p>
    ),
  },
  {
    question: "Can pregnancy cure endometriosis or adenomyosis?",
    answer: (
      <p>
        Pregnancy does not cure either condition, but it creates temporary symptomatic remission. The continuous, high-dose progesterone environment produced by the placenta suppresses estrogen production, stopping menstrual cycles and leading to progressive decidualization and shrinkage of endometriotic and adenomyotic implants. However, because underlying tissue remnants persist, symptoms and lesions commonly re-emerge 6 to 12 months postpartum once regular ovulatory menstrual cycles resume.
      </p>
    ),
  },
  {
    question: "Does adenomyosis increase the risk of miscarriage or pregnancy complications?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Yes. Chronic myometrial inflammation and impaired vascular remodeling of the spiral arteries increase the baseline risk of:
        </p>
        <ul className="space-y-1.5 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-0.5">•</span>
            <p>
              <strong className="text-white font-semibold">First-trimester miscarriage</strong> (reduced to baseline when transfers follow GnRH agonist downregulation).
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-0.5">•</span>
            <p>
              <strong className="text-white font-semibold">Late-pregnancy complications:</strong> Preterm labor, fetal growth restriction (FGR), and placental malposition.
            </p>
          </li>
        </ul>
        <p className="text-[12.5px] text-black">
          High-risk obstetric surveillance, early cervical length screening, and prolonged luteal progesterone support throughout the first trimester manage these risks.
        </p>
      </div>
    ),
  },
];

export default function EndometriosisFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient questions"
        title={
          <>
            Frequently Asked Questions about
            <br className="hidden sm:inline" /> Endometriosis & Adenomyosis
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
