"use client";

import Link from "next/link";
import { FaCalendarAlt, FaCapsules, FaFlask } from "react-icons/fa";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  CostFactorCard,
  ReviewCard,
  TreatmentSection,
  TreatmentSectionHeader,
  type CostFactorItem,
  type ReviewCardItem,
} from "@/components/ui/treatment";

const reviews: ReviewCardItem[] = [
  {
    title: "Best IVF Success Rates.",
    review:
      "Dr Mona did our Egg retrieval herself and that too on a holiday. She is very good with ultrasound check-ups to find out any deviations. We did not feel any unease in the embryo transfer process. We had amazing results and a successful first transfer. My wife is 12 weeks pregnant and we would highly recommend Dr Mona's IVF Clinic in Delhi for best IVF success rates.",
    initial: "G",
    name: "Gaurav Baghel",
    source: "Patient review",
  },
  {
    review:
      "Dr Mona is a really good fertility doctor in Delhi. She has a very patient focussed approach which is unheard of these days with such famous doctors in Delhi. She came across as very genuine in every consultation. Her treatment was precise and it has resulted in a positive result in the First IVF Cycle.",
    initial: "B",
    name: "Brahm Prakash",
    source: "Google patient review",
  },
  {
    review:
      "Dr. Dahiya doesn't believe in a general approach for fertility treatment. She analyzed our case deeply and designed a tailored IVF plan that worked in the first IVF cycle. Her dedication makes her the Best Fertility Doctor in Ghaziabad. Thank you for our precious blessing and wish you infinite success.",
    initial: "A",
    name: "Arbaj khan",
    source: "Google patient review",
  },
];

const costItems: CostFactorItem[] = [
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "Follicular monitoring",
    description: "₹3,500 to ₹7,000 per cycle.",
  },
  {
    icon: <FaCalendarAlt className="size-3.5" />,
    title: "IUI",
    description: "₹15,000 per cycle.",
  },
  {
    icon: <FaCapsules className="size-3.5" />,
    title: "Mini IVF",
    description: "₹1,50,000 to ₹2,00,000 per cycle.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "IVF",
    description: "₹1.5 lakh to ₹2.5 lakh per cycle.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "Egg freezing",
    description: "₹1,25,000 to ₹1,80,000 per cycle, plus storage.",
  },
  {
    icon: <FaFlask className="size-3.5" />,
    title: "ERA test",
    description: "About ₹35,000 to ₹55,000 in total.",
  },
];

export function OurServicesReviews() {
  return (
    <TreatmentSection id="patient-reviews" className="bg-pink">
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Dr. Mona"
        subtitle="Individual experiences in patients' own words."
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {reviews.map((item) => (
          <StaggerItem key={item.name} className="h-full">
            <ReviewCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-7">
        <Link
          href="/best-ivf-patient-reviews"
          className="inline-flex items-center justify-center rounded-full border border-blue/35 bg-blue/10 px-5 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all hover:border-blue hover:bg-blue hover:text-white sm:text-[13.5px]"
        >
          Read All Patient Reviews
        </Link>
      </div>
    </TreatmentSection>
  );
}

export function OurServicesCost() {
  return (
    <TreatmentSection className="bg-pink">
      <TreatmentSectionHeader
        eyebrow="Know About Our Costs"
        title="Clear Cost Guidance"
        subtitle={
          <>
            There are no hidden charges while working with us. Each step is
            informed and costed. Generally our packages include following:
          </>
        }
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {costItems.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <CostFactorCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
