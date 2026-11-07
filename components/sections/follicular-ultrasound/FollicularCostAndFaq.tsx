"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard,
} from "@/components/ui/treatment";

const calendarIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const pillIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 text-white"
    aria-hidden
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

const costCards = [
  {
    icon: calendarIcon,
    title: "Full cycle of Follicular Monitoring",
    description:
      "It includes the initial scan on day 2/3 of cycle, 3-4 times of scanning and final scan to ensure your follicle has ruptured. The price will range between 3500 - 7000 rupees.",
  },
  {
    icon: checkIcon,
    title: "Individual Follicular Scan",
    description:
      "If you only want one scan done you can pay for that individually. It will cost around 1000 - 1800 per scan.",
  },
  {
    icon: pillIcon,
    title: "Medications used during follicular monitoring",
    description:
      "Includes cost of medication for ovulation and injection. Around 1500-3000 rupees.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How many scans does one monitoring cycle need?",
    answer:
      "Normally 4-6 times are done in one cycle of follicular monitoring. Initially you do a baseline scan on day 2 or 3 of your cycle. Then again on day 8, 10, 12 and 14. Finally we scan you to see if your follicle has ruptured.",
  },
  {
    question: "Is a transvaginal follicular scan painful?",
    answer:
      "No. A thin trans-vaginal probe is inserted which is covered with jelly. It takes 5-10 minutes and you can continue with your work. No pain or anesthesia is required.",
  },
  {
    question: "What is the ideal follicle size for pregnancy?",
    answer:
      "Your follicle should be around 18-22 mm. Your endometrium should be of at least 7.5-10 mm with a trilaminar (three layers) appearance.",
  },
  {
    question: "Where can I book follicular scans with Dr. Mona Dahiya?",
    answer:
      "You can visit us at our Noida Clinic, located at 3rd Floor, K-06 (above First Cry, Baraula, Sector 49 Noida, Uttar Pradesh 201301). Or at our Ghaziabad Clinic, located at 2nd Floor, RDC (Near Bikanerwala, Sector 15, C-53A Sector 10 Raj Nagar Ghaziabad, Uttar Pradesh 201002). Also at our Delhi Clinic located at Building No. 41, First floor Ring Road Block Q Lajpat Nagar IV Lajpat Nagar New Delhi 110024.",
  },
  {
    question: "How much does follicular monitoring cost?",
    answer:
      "It depends on the number of scans you need. Normally it will cost you somewhere between 3500-7000 rupees for one complete cycle. You can also opt to pay for individual scans which will cost around 1000-1800 rupees. Add another 1500-3000 rupees for your medication.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "When is the best time to have intercourse?",
    answer:
      "As mentioned earlier your follicle should rupture 36 hours after you take your HCG injection. So on the day you take injection and the next 2 days you can have intercourse.",
  },
  {
    question: "Are home ovulation kits as accurate?",
    answer:
      "No, they can give you false positive especially if you have PCOS. Also they cannot detect your endometrium and follicle size. Only follicular scan can do that for you.",
  },
  {
    question: "Can a follicle grow but not release an egg?",
    answer:
      "Yes, there is something called luteinized unruptured follicle (LUF). When we do follicular monitoring we can detect that. We will then trigger you with HCG to help release the egg from the follicle.",
  },
  {
    question: "How many monitored cycles should we try?",
    answer:
      "Ideally 3-6 cycles. If you are not getting pregnant after 3 cycles of well timed intercourse then its better to proceed with IUI or further evaluations.",
  },
];

export default function FollicularCostAndFaq() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="What factors determine cost of Follicular Monitoring?"
          title="What Affects the Cost of Follicular Monitoring"
          subtitle="Follicular Monitoring is one of the cheapest form of fertility treatment. Below are the approximate cost of each."
        />

        <Stagger
          delay={0.05}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {costCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <CostFactorCard {...card} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="FAQs"
          title="Top FAQs About Follicular Ultrasound Monitoring"
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>
    </>
  );
}
