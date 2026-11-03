"use client";

import Link from "next/link";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "How do I choose the right IVF doctor in Ghaziabad?",
    answer: (
      <p>
        An MD or DNB in gynecology who knows IVF and reproductive medicine is
        what you should look for. Also how many years they have been doing
        fertility treatment, lab facilities and plan of action with cost should
        be mentioned upfront. Dr Mona Dahiya has done her MBBS and MD with gold
        medals, is a DNB surgeon and has done her fellowship in IVF from
        Singapore General Hospital. She has 25+ years of experience.
      </p>
    ),
  },
  {
    question: "At what age should I consult an IVF specialist?",
    answer: (
      <p>
        Below 35 years - after 1 year of trying to conceive. Above 35 years -
        after 6 months. Above 40 years - sooner is better as age plays an
        important role.
      </p>
    ),
  },
  {
    question: "Does every couple dealing with infertility need IVF?",
    answer: (
      <p>
        Not everyone needs IVF. Some women conceive after changing lifestyle
        habits or with ovulation induction / IUI. We suggest IVF to women who
        have blocked tubes, severe male factor (low sperm count), low AMH,
        endometriosis or if they have failed 3-4 IUIs.
      </p>
    ),
  },
  {
    question: "What is the average cost of an IVF cycle in Ghaziabad?",
    answer: (
      <p>
        IVF cost in Ghaziabad is between 1.5 lakhs - 2.5 lakhs. It depends on
        how many medications you need, lab procedures, freezing of embryos and
        genetic testing. You will be quoted an approximate price after
        consultation.
      </p>
    ),
  },
  {
    question: "Can an IVF doctor or clinic guarantee a successful pregnancy?",
    answer: (
      <p>
        No doctor can guarantee you a baby or successful pregnancy. There are
        many factors which play a role. Like age, quality of egg and sperm,
        ovarian reserve and your past history.
      </p>
    ),
  },
  {
    question: "How important is the embryology lab compared to the doctor?",
    answer: (
      <p>
        Both are important. Doctor decides your plan and performs your embryo
        transfer. Lab will play an important role in how well your eggs and
        sperm fertilize and grow till blastocyst stage (day 5).
      </p>
    ),
  },
  {
    question: "Is the IVF procedure painful?",
    answer: (
      <p>
        No, it&apos;s a quick 15-20 minute procedure. You may feel some cramps
        after but no pain during egg retrieval.
      </p>
    ),
  },
  {
    question: "How successful is IVF with Dr. Mona Dahiya?",
    answer: (
      <p>
        Our success rate is above 90%. It will depend on your age, AMH and
        quality of sperms. Dr Dahiya will advise you after going through your
        reports.
      </p>
    ),
  },
  {
    question: "How long does one IVF cycle take?",
    answer: (
      <p>
        From first injection to pregnancy test will take around 4-5 weeks. Your
        stimulation period is 10-12 days, then egg collection and 5 days of
        embryo culture. Then we do a blood test after 14 days of transfer.
      </p>
    ),
  },
  {
    question: "Which tests are needed before starting IVF?",
    answer: (
      <p>
        Basic tests include - AMH and antral follicle count, Semen analysis,
        Uterus ultrasound, Hormonal profile and infection testing (HIV, HBsAg,
        Anti HCV and VDRL) in both partners.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is the starting cost of an IVF cycle in Ghaziabad?",
    answer: (
      <p>
        You can begin an IVF cycle from 1.5 lakhs. Depending on your requirement
        it can go up to 2.5 lakhs.
      </p>
    ),
  },
  {
    question:
      "Are zero-cost EMI or instalment options available for IVF in Ghaziabad?",
    answer: (
      <p>
        Since an IVF cycle can cost 1.5-2.5 lakhs we suggest you ask about
        installment option. Our team can help you know more about EMI plans at
        the time of your consultation.
      </p>
    ),
  },
  {
    question: "Is self-cycle IVF cheaper than donor-egg IVF?",
    answer: (
      <p>
        Yes. If you are doing a self cycle (using your eggs and sperms) the cost
        will be between 1.5-2.5 lakhs. If you require donor there will be an
        additional cost of screening the donor, stimulation of donor and consent
        forms. Donor eggs are suggested to women who have no eggs or poor
        quality eggs. (Very low AMH, premature ovarian failure etc)
      </p>
    ),
  },
  {
    question:
      "Does the doctor specialise in my condition (PCOS, low AMH, blocked tubes or male factor)?",
    answer: (
      <p>
        Make sure to ask if the doctor is experienced in your condition. Dr
        Dahiya has treated patients with PCOS, Low AMH, Blocked Tubes,
        Endometriosis, Male factor (Low sperm count, increased sperm DNA
        fragmentation, Azoospermia) and Recurrent implantation failure. Read
        more about{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="underline decoration-[#93c5fd]/50 underline-offset-2 text-[#93c5fd]"
        >
          Recurrent implantation failure
        </Link>
        ,{" "}
        <Link
          href="/fallopian-tube-blockage-treatment"
          className="underline decoration-[#93c5fd]/50 underline-offset-2 text-[#93c5fd]"
        >
          Blocked fallopian tubes
        </Link>{" "}
        and{" "}
        <Link
          href="/azoospermia-treatment"
          className="underline decoration-[#93c5fd]/50 underline-offset-2 text-[#93c5fd]"
        >
          Azoospermia
        </Link>
        .
      </p>
    ),
  },
  {
    question:
      "Does the clinic have a full-time embryologist and an in-house lab?",
    answer: (
      <p>
        Yes. It&apos;s important to know that your ICSI, 5 day culture and
        embryo freezing are being done in-house by a full time embryologist.
        Make sure you ask about the lab before deciding.
      </p>
    ),
  },
  {
    question: "What are the success rates for my specific age bracket?",
    answer: (
      <p>
        As your success rate decreases with age. Ask for the success rate of the
        age group you belong to. Our success rate is more than 90%. Dr Dahiya
        will inform you about the success rate of your age group after studying
        your AMH, scans and semen report.
      </p>
    ),
  },
  {
    question:
      "How much travel is involved if I choose a doctor in Indirapuram vs. Raj Nagar RDC?",
    answer: (
      <p>
        You will have to visit the clinic 4-6 times in the span of 10-12 days.
        For egg collection and transfer as well. If you stay in Indirapuram,
        Vaishali or Vasundhara our clinic is the closest to you out of all our
        three clinics. You can request for early morning slots for scans to
        avoid traffic.
      </p>
    ),
  },
  {
    question: "Will both partners need to attend every appointment?",
    answer: (
      <p>
        For most visits it&apos;s just the woman who has to come. Both partners
        have to come on the day of first visit to fill consent forms. On the day
        of egg collection your partner will have to come for sperm sample. But
        if he can&apos;t come we can use his frozen sample.
      </p>
    ),
  },
  {
    question: "What is the protocol if the first embryo transfer fails?",
    answer: (
      <p>
        We will assess the embryo and check the quality of embryo. We may
        perform hysteroscopy if 3D ultrasound suggests something. Also the
        thickness of the endometrium is assessed. If you have spare embryos you
        can transfer them in the coming cycles. Read more about{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="underline decoration-[#93c5fd]/50 underline-offset-2 text-[#93c5fd]"
        >
          Frozen embryo transfer
        </Link>
        .
      </p>
    ),
  },
];

export default function BestIvfGhaziabadFAQ() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ's"
        title="Frequently asked questions by IVF patients in Ghaziabad"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
