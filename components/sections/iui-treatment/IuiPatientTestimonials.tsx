"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiPatientTestimonials() {
  const testimonials = [
    {
      title: "Compassionate Approach",
      review:
        "We are so grateful to Dr. Mona Dahiya for her exceptional care during our IUI treatment at Apollo Fertility Clinic in Noida. Her expertise and support made the process smooth and hopeful. Thanks to her guidance, the timing of the procedure aligned perfectly with our cycle. Dr. Mona's compassionate approach and the clinic's professionalism truly boosted our chances of pregnancy. We highly recommend her to anyone seeking IUI treatment. Thank you, Dr. Mona, for helping us on our journey to parenthood.",
      author: "Surja Lahar",
      initial: "S",
    },
    {
      title: "Exceptional Knowledge & Patience",
      review:
        "Our first online consultation with Dr. Mona was a game-changer. From the moment we connected, we felt a sense of comfort and trust that's rare in the fertility world. Dr. Mona's exceptional knowledge, patience, and thoroughness put us at ease, and her ability to explain complex concepts in a clear and concise manner was impressive. We appreciated her willingness to take the time to understand our unique situation and provide us with detailed options for moving forward. Her guidance was invaluable, and we're grateful for her knowledge. We're excited to embark on our first IUI cycle in December, and we're confident that Dr. Mona's care will help us achieve our goal to start a family with IUI Treatment. If you're seeking a fertility specialist who will treat you with concern and an intention to really help look no further than Dr. Mona Dahiya.",
      author: "Shashank Mishra",
      initial: "S",
    },
    {
      title: "Compassion & Care",
      review:
        "Dr. Mona Dahiya's expertise and compassionate care made our IVF journey a truly positive one. Her guidance throughout ovarian stimulation was exceptional. She clearly explained each step, addressed our concerns with patience, and her constant encouragement made all the difference. Thank you, Dr. Dahiya, for helping make our dream of parenthood a reality.",
      author: "Firoj khan",
      initial: "F",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-slate-100">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Testimonials
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            What our patients have to say.
          </h2>
        </Reveal>

        {/* 3 Testimonial Cards */}
        <Stagger
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6"
          stagger={0.06}
        >
          {testimonials.map((t, idx) => (
            <StaggerItem key={idx}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 shadow-sm transition-all duration-300 hover:border-rose/30 hover:bg-[#fff0f5] hover:shadow-md">
                <div>
                  <h3 className="font-serif text-[1.1rem] font-bold text-ink sm:text-[1.2rem]">
                    {t.title}
                  </h3>
                  <p className="mt-4 text-[12.5px] leading-relaxed text-slate-700 sm:text-[13px]">
                    {t.review}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#fde2ec]">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white shadow-sm">
                    {t.initial}
                  </span>
                  <div>
                    <h4 className="text-[13px] font-bold text-ink">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Google patient review
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal variant="fadeUp" delay={0.2} className="mt-8">
          <Link
            href="/best-ivf-patient-reviews"
            className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all duration-200 hover:border-blue hover:bg-blue hover:text-white active:scale-95 sm:text-[13.5px]"
          >
            All Reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
