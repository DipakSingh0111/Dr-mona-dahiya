"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  ReviewCard,
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";
import { BLOG_LISTING_REVIEWS } from "@/data/blogListing";

export default function BlogListingReviews() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="Patient reviews"
        title="What Patients Say About Dr. Mona"
        subtitle="Individual experiences in patients' own words."
      />

      <Stagger
        delay={0.04}
        className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
      >
        {BLOG_LISTING_REVIEWS.map((review) => (
          <StaggerItem key={review.author}>
            <ReviewCard
              title={review.title || undefined}
              review={review.quote}
              name={review.author}
              initial={review.author.charAt(0).toUpperCase()}
              source={review.role}
            />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-7">
        <Link
          href="/best-ivf-patient-reviews"
          className="inline-flex items-center justify-center rounded-full border border-rose/30 bg-white px-6 py-2.5 text-[13.5px] font-semibold text-ink shadow-xs transition-all hover:border-rose hover:bg-rose hover:text-white active:scale-95"
        >
          Read All Patient Reviews
        </Link>
      </div>
    </TreatmentSection>
  );
}
