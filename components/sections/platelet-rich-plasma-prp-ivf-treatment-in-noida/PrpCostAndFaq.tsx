"use client";

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
    title: "Lab processing and consumables",
    description:
      "Closed centrifugation tubes, separation gel and catheters: ₹10,000 to ₹18,000 per instillation",
  },
  {
    title: "Doppler monitoring",
    description:
      "2 to 3 scans of blood flow and lining thickness: ₹3,000 to ₹5,000",
  },
  {
    title: "Ovarian PRP, if needed",
    description:
      "Ultrasound-guided ovarian injection under sedation: ₹25,000 to ₹60,000",
  },
  {
    title: "Frozen transfer cycle",
    description: "Billed with the planned frozen embryo transfer",
  },
];

const leftFaqs: FaqItem[] = [
  {
    question: "How does intrauterine PRP help a thin lining?",
    answer:
      "PRP carries concentrated growth factors such as VEGF and TGF-β. In the uterus they grow new blood vessels and speed up cell growth in the basal layer, so the lining thickens, often from about 5 mm to 7.5 mm or more within 48 to 72 hours.",
  },
  {
    question: "Is intrauterine PRP painful?",
    answer:
      "No. It is a 5-minute outpatient procedure with no anaesthesia, using a soft catheter like an embryo transfer. It feels similar to a Pap smear.",
  },
  {
    question: "Can ovarian PRP increase my AMH?",
    answer:
      "Sometimes, and usually only for a while. Some women see a rise in AMH and antral follicle count over 2 to 6 months, but results depend on remaining reserve, so it is used as an add-on for poor responders.",
  },
  {
    question: "Where can I have PRP therapy with Dr. Mona Dahiya?",
    answer:
      "3 clinics: Noida (3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301), Ghaziabad (2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002) and Delhi (Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024).",
  },
  {
    question: "How many PRP sessions are needed?",
    answer:
      "Usually 1 or 2 instillations, 48 hours apart, in the same prepared cycle (typically days 10 and 12).",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Is PRP safe?",
    answer:
      "Yes. It uses your own blood (100% autologous), so there is no risk of allergy or rejection. Infection risk is very low with a sterile closed system.",
  },
  {
    question: "How much does PRP cost?",
    answer:
      "₹10,000 to ₹18,000 per intrauterine instillation, plus ₹3,000 to ₹5,000 for monitoring scans. Ovarian PRP costs ₹35,000 to ₹60,000.",
  },
  {
    question: "When is embryo transfer done after PRP?",
    answer:
      "Once the lining reaches 7.5 mm or more with a trilaminar pattern, usually 2 to 4 days after the last instillation, progesterone starts and the frozen transfer follows.",
  },
  {
    question: "Who is not suitable for PRP?",
    answer:
      "Women with low platelets (under 1,50,000/µL), active pelvic infection, untreated endometritis or blood cancers. These are screened for first.",
  },
];

export default function PrpCostAndFaq() {
return (
    <TreatmentSection>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <TreatmentSectionHeader
          eyebrow="Transparency"
          title="What Affects the Cost of PRP Therapy"
          subtitle="PRP is usually combined with a frozen embryo transfer cycle. The components below are itemised in your estimate."
        />

          <Stagger
            delay={0.05}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
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
          title="Top FAQs About PRP Therapy in IVF"
        />

          <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
        </div>
      </TreatmentSection>
  );
}
