"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  CostFactorCard,
  ReviewCard,
} from "@/components/ui/treatment";

export default function MaleCostAndReviews() {
  return (
    <>
      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Transparency"
          title="Cost Factors"
          subtitle="Prices involved with treating Male Infertility."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
        >
          <StaggerItem>
            <CostFactorCard
              title="Basic Work up"
              description="We would require a Semen analysis + Sperm DNA Fragmentation + Scrotal USG to be done on you. This will cost around Rs. 4000-9000."
            />
          </StaggerItem>
          <StaggerItem>
            <CostFactorCard
              title="Antioxidants/Medication"
              description="Based on your semen analysis and blood hormone profile we will give you antioxidants and if needed medication for 3 months. Cost - Rs. 3000-7000."
            />
          </StaggerItem>
          <StaggerItem>
            <CostFactorCard
              title="Microfluidics"
              description="If we are planning to do ICSI with you and microfluidics is required the cost will be between Rs. 12000-18000."
            />
          </StaggerItem>
          <StaggerItem>
            <CostFactorCard
              title="PESA/TESA/micro TESE"
              description="If surgical sperm extraction is needed cost will vary from Rs. 25000-45000 depending upon whether the procedure is done under local or sedation."
            />
          </StaggerItem>
        </Stagger>
      </div>
      </TreatmentSection>

      <TreatmentSection>
        <div>
        <TreatmentSectionHeader
          eyebrow="Patient reviews"
          title="What Patients Say About Dr. Mona"
          subtitle="Individual experiences in patients' own words."
        />

        <Stagger
          delay={0.05}
          className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          <StaggerItem>
            <ReviewCard
              name="Kunal"
              initial="K"
              source="Google patient review"
              review="We are so grateful to Dr. Mona Dahiya for our baby born through ICSI. Her knowledge is fabulous and she gave us a lot of confidence. She explained everything simply and was always available for our doubts clarification. Her dedication is unmatched and we highly recommend her to anyone seeking any kind of fertility treatment."
            />
          </StaggerItem>
          <StaggerItem>
            <ReviewCard
              name="Vijender Yadav"
              initial="V"
              source="Google patient review"
              review="Dr. Mona Dahiya is the best male infertility doctor in Delhi! My poor sperm quality led us to her, and she recommended ICSI—injecting a single healthy sperm into the egg during IVF. Her expertise in this advanced technique gave us our miracle baby. Grateful for her precision and compassionate care!"
            />
          </StaggerItem>
          <StaggerItem>
            <ReviewCard
              name="Vishal Jatav"
              initial="V"
              source="Google patient review"
              review="Male infertility carries so much stigma, but Dr. Mona Dahiya normalized our struggle. Her thorough tests revealed low sperm DNA fragmentation, which previous clinics overlooked. With targeted treatments and ICSI, we welcomed our son. She doesn't just treat women—she heals couples."
            />
          </StaggerItem>
        </Stagger>

        <Reveal variant="fadeUp" delay={0.1} className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all hover:border-blue hover:bg-blue hover:text-white"
          >
            Read All Patient Reviews →
          </Link>
        </Reveal>
      </div>
      </TreatmentSection>
    </>
  );
}
