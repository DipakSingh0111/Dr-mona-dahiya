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
      "What clinical warning signs indicate blocked fallopian tubes?",
    answer: (
      <div className="space-y-3">
        <p>
          Usually women dont know they have blocked tubes. Around 90% of women
          will not have any symptoms. Your fallopian tubes do not affect your
          hormone levels so you will not notice anything about your periods.
          However if you are experiencing pain it could be due to:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              If you have a hydrosalpinx you may experience lower abdominal
              heaviness or pain.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              If you have had a pelvic infection you may have pain while having
              sex, bleeding in between your periods or feel a constant pain in
              your pelvis.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How are obstructed fallopian tubes accurately identified?",
    answer: (
      <div className="space-y-3">
        <p>
          You can know if your fallopian tubes are blocked by performing one of
          these tests. Make sure you get it done 7-10 days after your period.
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              By doing an HSG. We use x rays to see your uterus and fallopian
              tubes. The sensitivity of this test is 85% and accuracy of 90%.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              Using sonosalpingography. This uses an ultrasound to check if your
              fallopian tubes are blocked. No radiation is involved in this test.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              By performing a laparoscopy and chromopertubation. This allows us
              to see if your fallopian tubes are blocked. We can also see if you
              have endometriosis/adhesions.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Can tubal blockages be resolved without open or laparoscopic surgery?",
    answer: (
      <p>
        If your fallopian tube is blocked at the cornual end yes we can. By
        inserting a wire through your vagina. If your tubes are blocked
        distally we cannot open them without doing IVF or surgery.
      </p>
    ),
  },
  {
    question:
      "Is unassisted conception achievable with only one functioning fallopian tube?",
    answer: (
      <p>
        Yes if one of your fallopian tubes is functioning properly you can get
        pregnant naturally. Your chances will be lowered by about 30%-40% per
        cycle. If you do not get pregnant after trying for 6-9 cycles we
        recommend you to go for follicular studies and try to get pregnant via
        IUI/IVF.
      </p>
    ),
  },
  {
    question:
      "Why must a hydrosalpinx be addressed prior to an IVF embryo transfer?",
    answer: (
      <p>
        A hydrosalpinx is when water collects in your fallopian tube. This can
        decrease your chances of IVF by 50% and increase your risk of
        miscarriage. Removing your tube will increase your chances of success
        during IVF.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What are the leading clinical etiologies behind tubal damage?",
    answer: (
      <div className="space-y-3">
        <p>
          Blocked tubes can happen for several reasons but below are the top 4:
        </p>
        <ul className="space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              Pelvic infection. If you have had chlamydia or gonorrhea you can
              develop blocked tubes. Pelvic infection blocks your tubes 12% of
              the time.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              TB. Female genital tb can cause your tubes to get blocked
              5%-10% of the time.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              Endometriosis. Endometriosis can cause your fallopian tubes to get
              blocked.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose select-none text-[13px] pt-1">-</span>
            <p>
              Surgery. Any prior surgeries you may have had can cause your
              tubes to become blocked.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "How significantly does tubal compromise elevate ectopic pregnancy risks?",
    answer: (
      <p>
        Yes if your fallopian tubes are blocked/damaged you have a higher risk
        of ectopic pregnancy. Sperm can get past your tube but your egg may not
        be able to travel to your womb.
      </p>
    ),
  },
  {
    question:
      "What are the clinical success rates of tubal reconstructive surgery compared to IVF?",
    answer: (
      <p>
        If we perform microsurgery to open your fallopian tubes you have a
        20%-30% chance of conceiving. Also you have an 8%-15% chance of having
        an ectopic pregnancy after tubal surgery. In comparision to surgery,
        IVF has far higher success rates.
      </p>
    ),
  },
  {
    question:
      "Does tubal obstruction disrupt monthly ovulation or alter cycle regularity?",
    answer: (
      <p>
        The short answer is No since the purpose of fallopian tubes is for
        transporting the egg to a woman&apos;s womb. In simple words, both your
        periods and ovulation will remain unaffected.
      </p>
    ),
  },
  {
    question:
      "What is the approximate cost of managing tubal factor infertility in Delhi NCR?",
    answer: (
      <p>
        The cost depends on what kind of procedure you need. If you just need
        your tubes flushed it will cost you anywhere from Rs.2000-Rs.4000. If
        you need a laparoscopy done it will cost you anywhere from
        Rs.50,000-Rs.100,000. Lastly, if you need to go for IVF it will cost you
        approximately Rs.150,000.
      </p>
    ),
  },
];

export default function FallopianTubesFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions about Fallopian Tube Blockage"
      />
      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
