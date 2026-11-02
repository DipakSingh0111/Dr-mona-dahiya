"use client";

import { FaCheck, FaPills, FaCalendarAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  type FaqItem,
  CostFactorCard
} from "@/components/ui/treatment";
const costCards = [
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Complete cycle package",
    description:
      "Baseline scan, 3 to 4 tracking visits and ovulation confirmation: ₹3,500 to ₹7,000.",
  },
  {
    icon: <FaCheck className="size-3.5" />,
    title: "Single scans",
    description: "Individual tracking visit: ₹1,000 to ₹1,800 per scan.",
  },
  {
    icon: <FaPills className="size-3.5" />,
    title: "Ovulation medicines",
    description: "Letrozole tablets and hCG trigger: ₹1,500 to ₹3,000.",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How many scans does one monitoring cycle need?",
    answer:
      "Usually 4 to 6: a baseline on Day 2 or 3, then Days 8, 10, 12 and 14, and a final scan to confirm the follicle has ruptured.",
  },
  {
    question: "Is a transvaginal follicular scan painful?",
    answer:
      "No. The probe is slim and lubricated, the scan takes 5 to 10 minutes with no anaesthesia, and you can go straight back to work.",
  },
  {
    question: "What is the ideal follicle size for pregnancy?",
    answer:
      "18 to 22 mm, with a lining of at least 7.5 to 10 mm that has a trilaminar (triple-layer) look.",
  },
  {
    question: "Where can I book follicular scans with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How much does follicular monitoring cost?",
    answer:
      "₹3,500 to ₹7,000 for a full cycle, or ₹1,000 to ₹1,800 per single scan. Medicines add ₹1,500 to ₹3,000.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "When is the best time to have intercourse?",
    answer:
      "On the day of the hCG trigger and the next 1 to 2 days, since ovulation happens about 36 hours after the trigger.",
  },
  {
    question: "Are home ovulation kits as accurate?",
    answer:
      "Not always. LH kits can give false positives, especially with PCOS, and cannot show follicle size or the lining. A scan confirms both.",
  },
  {
    question: "Can a follicle grow but not release an egg?",
    answer:
      "Yes. This is called luteinised unruptured follicle (LUF) syndrome. Monitoring detects it, and an hCG trigger can help release the egg.",
  },
  {
    question: "How many monitored cycles should we try?",
    answer:
      "Usually 3 to 6. If pregnancy has not happened after 3 well-timed cycles, IUI or further testing is advised.",
  },
];

export default function FollicularCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of Follicular Monitoring"
          subtitle="Follicular monitoring is one of the most affordable fertility services. A full cycle study costs ₹3,500 to ₹7,000."
        />

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {costCards.map((card) => (
              <StaggerItem key={card.title}>
              <CostFactorCard {...card} />
            </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <TreatmentSectionHeader
          eyebrow="Patient questions"
          title="Top FAQs About Follicular Ultrasound Monitoring"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
