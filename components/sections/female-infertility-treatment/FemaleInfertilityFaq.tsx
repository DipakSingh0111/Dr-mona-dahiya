"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Does female infertility treatment always mean IVF?",
    answer: (
      <div className="space-y-3">
        <p>
          No you can get pregnant by many ways other than IVF. Approximately
          65%- 70% of patients can get pregnant with various techniques we use
          to treat infertility.
        </p>
        <p className="font-semibold text-ink">They Are:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">
              Improve Lifestyle/Metabolic Problems:
            </span>{" "}
            Sometimes by changing your lifestyle or fixing hormonal imbalances
            you can ovulate on your own.
          </li>
          <li>
            <span className="font-semibold">Inducing Ovulation:</span> By using
            medication called letrozole we can get you to ovulate if you have an
            ovulatory problem. Then we monitor you on scans and give you the
            chance to get pregnant. Most of our patients who aren&apos;t
            ovulating can get pregnant with this.
          </li>
          <li>
            <span className="font-semibold">IUI:</span> Sperm is loaded into
            your uterus when you are ovulating to increase your chances of
            conceiving.
          </li>
          <li>
            <span className="font-semibold">Surgery:</span> Keyhole Surgeries Can
            Remove Polyps/Repair Your Uterus (Ashermans Syndrome) &amp; Remove
            Small Implants Of Endometriosis.
          </li>
        </ul>
        <p>
          If you have bilateral tubal blockage/severe pelvic adhesions or
          diminished ovarian reserve then you should go ahead and do IVF.
        </p>
      </div>
    ),
  },
  {
    question: "Are irregular cycles a definitive indicator of infertility?",
    answer: (
      <p>
        If your periods are not coming every 28-35 days you most likely
        aren&apos;t ovulating. Approximately 25%- 30% of people who have
        problems getting pregnant don&apos;t ovulate. This can happen if you
        have PCOS, Hypothalamus Dysfunction due to stress or Thyroid Problems.
        Your body needs to release an egg to become pregnant. If your body
        isn&apos;t producing one it&apos;s difficult to become pregnant. We can
        get you to produce an egg and increase your chances of conceiving. We
        have helped many women who haven&apos;t ovulated in years.
      </p>
    ),
  },
  {
    question: "How significantly does female age influence treatment success?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-ink">
          Age Does Play A Role When Becoming Pregnant.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">Under 35:</span> You have a good
            chance of getting pregnant each cycle(20%-25%). You will have good
            success rates with IVF as well.
          </li>
          <li>
            <span className="font-semibold">Between 35-37:</span> Your follicle
            count starts to decrease rapidly. Try to see a doctor after trying
            for 6 months if you&apos;re not pregnant.
          </li>
          <li>
            <span className="font-semibold">Over 40:</span> Start looking at
            treatments earlier than you would if you were younger. We offer many
            services for women that are older like storing many embryos &amp;
            PGT-A.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Which foundational fertility tests must be conducted first?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-ink">
          You will want to test your ovaries, tubes, cavity and partner.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">Test Your Ovaries:</span> Check Your
            AMH Levels &amp; Do A Baseline Ultrasound(Day 2-4) To Count Your
            Follicles
          </li>
          <li>
            <span className="font-semibold">Hormone Levels Day 2:</span> FSH, LH,
            E2, Thyroid, Prolactin
          </li>
          <li>
            <span className="font-semibold">Tubes:</span> Do An HSG/SSG(High
            Definition Ultrasound With Dye)
          </li>
          <li>
            <span className="font-semibold">Cavity:</span> 3D Ultrasound Or
            Hysteroscopy To Make Sure There Are No Fibroids Or Polyps
          </li>
          <li>
            <span className="font-semibold">
              Partner Should Also Be Tested:
            </span>{" "}
            Semen Analysis &amp; DFI
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What is the typical cost of an initial female fertility evaluation in Delhi NCR?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-ink">
          Testing Can Cost You 8k-18k Depending On What Work Up You Need Done.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">Hormones &amp; AMH:</span> 3500-6500
            Rs
          </li>
          <li>
            <span className="font-semibold">Ultrasound:</span> 1500-2500 Rs
          </li>
          <li>
            <span className="font-semibold">Tube Testing(HSG/SSG):</span>{" "}
            2500-4500 Rs
          </li>
          <li>
            <span className="font-semibold">Semen Analysis:</span> 1000-2000 Rs
          </li>
        </ul>
        <p>Other Tests May Be Needed.</p>
      </div>
    ),
  },
  {
    question:
      "How many cycles of ovulation induction should be attempted before moving forward?",
    answer: (
      <p>
        Try Doing Pills For 3-4 Months To See If You Can Get Pregnant. After 3-4
        Months We Will Want To Advance To The Next Step Which Would Be IUIS Or
        Keyhole Surgeries.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can occluded or damaged fallopian tubes be resolved without IVF?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-ink">
          It Depends On Where The Blockage Is On Your Tube.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            If you have a proximal blockage we can open it up and you don&apos;t
            have to do IVF. Our success rate is over 50%- 60%.
          </li>
          <li>
            If you have a distal blockage or hydrosalpinx you won&apos;t have
            great success rates. We recommend going straight to IVF if you have
            distal blockage. You will need to clip or remove your tube before
            doing IVF if you have a hydrosalpinx.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does body mass index (BMI) alter female reproductive potential?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes your BMI can effect your fertility. If your BMI is high or low you
          can have trouble getting pregnant.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">High BMI:</span> Can cause higher
            hormone levels that can stop you from ovulating and thin your
            endometrium.
          </li>
          <li>
            <span className="font-semibold">Low BMI:</span> Your body won&apos;t
            want to reproduce because it doesn&apos;t have enough nutrients.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What are the telltale symptoms of endometriosis, and how does it prevent conception?",
    answer: (
      <div className="space-y-3">
        <p>
          Pain Can Occur During Your Period/When Having Sex. You May Also Have
          Pain When Urinating. There are many reasons why endometriosis can
          cause infertility.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Causes Adhesions That Can Bind Your Tubes &amp; Ovaries Together
          </li>
          <li>Can Prevent Implantation Due To Immune Response</li>
          <li>
            Can Create Chocolate Cysts That Can Damage Healthy Ovaries
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can natural conception happen with a diminished AMH reserve?",
    answer: (
      <p>
        AMH Can Give Us An Idea Of Your Fertility But There Are Many Women Who
        Can Get Pregnant With Low AMH. See a doctor if you have a low AMH but
        don&apos;t give up hope.
      </p>
    ),
  },
  {
    question:
      "What causes unexplained infertility, and what is the best treatment strategy?",
    answer: (
      <p>
        When you don&apos;t have any obvious reason why you aren&apos;t getting
        pregnant you have unexplained infertility. You may have a high DFI which
        can cause infertility. So your husband should be tested as well.
      </p>
    ),
  },
  {
    question: "Where can patients schedule a consultation with Dr. Mona Dahiya?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-ink">
          Dr. Mona Has Locations All Over Delhi.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold">Noida Location:</span> K-06 3rd Floor
            Above First Cry Baraula Sec 49 Noida UP 201301
          </li>
          <li>
            <span className="font-semibold">Ghaziabad:</span> RDC C-53A Near
            Bikanerwala Sector 15 Raj Nagar Ghaziabad 201002
          </li>
          <li>
            <span className="font-semibold">New Delhi:</span> Lajpat Nagar-IV Q
            Block 41 Building First Floor Ring Road 110024
          </li>
        </ul>
      </div>
    ),
  },
];

export default function FemaleInfertilityFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Frequently Asked Questions About Female Infertility"
        title="Top FAQs About Female Infertility Treatment"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
