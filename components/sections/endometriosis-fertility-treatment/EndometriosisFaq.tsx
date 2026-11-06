"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question:
      "What is the fundamental difference between endometriosis and adenomyosis?",
    answer: (
      <div className="space-y-3">
        <p>
          They have similar pathology but differ anatomically. Both consist of
          endometrial tissue. Endometriosis tissue can be seen on various organs
          around the uterus. Like ovaries, fallopian tubes, pouch of douglas and
          pelvic surface. These can cause adhesions which can hinder the
          movement of fallopian tubes. Also toxic substances released by this
          tissue can harm your eggs.
        </p>
        <p>
          Adenomyosis causes the endometrial tissue to invade into the muscular
          layer of the uterus. This can make your uterus bulky and can affect
          implantation of the embryo.
        </p>
        <p>
          About 20%-40% of women can have both conditions at the same time.
        </p>
      </div>
    ),
  },
  {
    question: "Does endometriosis or adenomyosis always cause infertility?",
    answer: (
      <p>
        Not always. If you have mild disease i.e Endometriosis stage 1-2 or mild
        Adenomyosis you can conceive on your own. Around 50%-60% of these
        patients can get pregnant. But as the disease progresses the tubes may
        block off the egg. Also there is decreased quality of sperm due to
        inflammatory fluid.
      </p>
    ),
  },
  {
    question: "How does adenomyosis lower IVF success, and can it be corrected?",
    answer: (
      <div className="space-y-3">
        <p>
          If you have adenomyosis it can affect the junctional zone of your
          uterus. Causing the embryo to fail to implant.
        </p>
        <p>
          There are many reasons why adenomyosis affects pregnancy. It causes
          local hyper estrogenic environment and inflammation. Your junctional
          zone thickness increases. All of this can negatively impact pregnancy.
          Many studies have shown that we get better results if we don&apos;t
          transfer in the same cycle we retrieve. Hence we freeze your embryos
          and prepare your uterus with depot for 1-3 months. And do your
          transfer once your uterus is calm and your adenomyosis has reduced.
        </p>
      </div>
    ),
  },
  {
    question: "Is laparoscopic surgery mandatory before starting IVF?",
    answer: (
      <p>
        It depends on your AMH. If you have large endometriomas in your ovary
        then yes. We would remove the cyst and operate for any other deep
        infiltrating endometriosis that may be causing you issues. If there is
        water in your tube you will need surgery. If your AMH is less than 1.5
        or have adenomyosis. Then NO. Operating on your ovaries can affect your
        reserve permanently. So we would do IVF first and bank your eggs. Then
        give you medications to control your Adenomyosis.
      </p>
    ),
  },
  {
    question: "How long should you try to conceive before moving to IVF?",
    answer: (
      <p>
        If you have mild endometriosis i.e Stage 1&amp;2. You can try for 6-12
        months. Make sure your tubes are patent and try IUI for 2-3 months. If
        you are over 35 we would start you on IVF after 6 months of trying.
        Longer you wait more damage your reserve will suffer. You may require
        surgery.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question:
      "What are the earliest diagnostic signs of endometriosis and adenomyosis?",
    answer: (
      <div className="space-y-3">
        <p>
          Severe period pain which is not relieved by oral meds. Pain during
          intercourse. Pain in your bowels during your period.
        </p>
        <p>
          Your periods are heavy with clots. Last more than a week. You may feel
          bloated and painful in your lower belly. On examination your uterus
          may be enlarged.
        </p>
      </div>
    ),
  },
  {
    question: "How are endometriosis and adenomyosis accurately diagnosed?",
    answer: (
      <p>
        Ultrasound can diagnose if you have any cysts or adenomyosis. We can do
        an MRI to diagnose endometriosis/adenomyosis. It is very sensitive and
        specific. If we feel there may be minimal lesions then we can do a
        laparoscopy to diagnose.
      </p>
    ),
  },
  {
    question:
      'Does having an endometrioma ("chocolate cyst") ruin egg quality?',
    answer: (
      <p>
        Some research has shown that your egg quality may be compromised. But
        most of the time we are able to obtain good quality eggs from the
        healthy part of your ovary.
      </p>
    ),
  },
  {
    question: "Can pregnancy cure endometriosis or adenomyosis?",
    answer: (
      <p>
        Once you become pregnant your disease will go into remission.
        Progesterone levels will be high and suppress your estrogen production.
        No estrogen means no periods. Your endometrial implants will stop
        growing during pregnancy. And will regrow a few months after delivery.
      </p>
    ),
  },
  {
    question:
      "Does adenomyosis increase the risk of miscarriage or pregnancy complications?",
    answer: (
      <p>
        Yes there is a slight risk that one can suffer from miscarriages.
        Abnormal fetal growth and abnormal placentation can happen too. But by
        giving progesterone and monitoring your pregnancy we can avoid most of
        these problems.
      </p>
    ),
  },
];

export default function EndometriosisFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ"
        title={
          <>
            Frequently Asked Questions about
            <br className="hidden sm:inline" /> Endometriosis &amp; Adenomyosis
          </>
        }
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
