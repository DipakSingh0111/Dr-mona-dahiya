"use client";

import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question: "Can working professionals in Delhi fit IUI monitoring around work?",
    answer: (
      <p>
        We have slots available in the morning at our Lajpat Nagar Clinic for
        scanning so that you can complete your visits before going to work.
      </p>
    ),
  },
  {
    question: "What is the expected success rate of IUI in women under 35?",
    answer: (
      <p>
        If your tubes are patent and you have good sperm counts our IUI protocol
        can yield better results than what is normally quoted in the industry.
        However no clinic can promise you a baby. Chances increase with each
        monitored cycle.
      </p>
    ),
  },
  {
    question: "Is bed rest mandatory after IUI?",
    answer: (
      <p>
        After the procedure you can lie down for 15-20 mins. After that you can
        resume your normal routine. You do not need to stay in bed for a long
        time.
      </p>
    ),
  },
  {
    question: "When should couples move from IUI to IVF?",
    answer: (
      <p>
        Usually we advise to try IUI for 3 to 4 cycles. If you have any of the
        following factors it is best to move to IVF. Blocked Tubes, Severe
        Endometriosis or Male Factor.
      </p>
    ),
  },
  {
    question: "Where is the clinic located in Delhi?",
    answer: (
      <p>
        Our Delhi clinic is located at Building Number 41 First Floor Ring Road
        Block Q Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024. Close to Ring
        Road and Metro Station. You can also take an online consultation with
        us.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How is IUI different from IVF?",
    answer: (
      <p>
        During IUI we put prepared sperm in your uterus and allow it to happen
        naturally in your body. Whereas during IVF we remove your eggs,
        fertilize them in a lab and place the embryo in your uterus.
      </p>
    ),
  },
  {
    question: "What medicines are used during an IUI cycle?",
    answer: (
      <p>
        Most patients are put on Oral Medications to help one or two follicles
        mature. Some may require low dose gonadotropins as well. Once ovulation
        occurs a trigger shot is given. Progesterone is usually prescribed after
        IUI. Based on your report your doctor will advise what you need.
      </p>
    ),
  },
  {
    question: "How much does an IUI cycle cost in Delhi?",
    answer: (
      <p>
        Our IUI Cycle at Delhi Clinic with Dr. Mona Dahiya starts at Rs 15,000.
        The cost can vary based on medications used, number of scans and sperm
        wash and luteal support. Please ask for your quote when you book an
        appointment.
      </p>
    ),
  },
  {
    question: "When can I take a pregnancy test after IUI?",
    answer: (
      <p>
        We suggest taking a Blood Pregnancy Test after 14 days of your
        procedure. If you test earlier you may get a false reading.
      </p>
    ),
  },
  {
    question: "Can IUI be done with donor sperm?",
    answer: (
      <p>
        Yes. We can use Donor Sperm for IUI if required. We follow the
        guidelines set by the regulatory authorities when using Donor Sperm.
      </p>
    ),
  },
];

export default function IuiDelhiFaq() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="FAQ'S"
        title="Frequently Asked Questions About IUI In Delhi"
      />

      <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
    </TreatmentSection>
  );
}
