"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: "t-1",
    quote: "Dr. Mona has made our dream come true and we are very Grateful.",
    initials: "PR",
    author: "Priya & Rohit",
    type: "Patient testimonial",
  },
  {
    id: "t-2",
    quote: "We have been blessed with twin boys and have all praises for Dr Mona.",
    initials: "AS",
    author: "Anjali & Shivam",
    type: "Patient testimonial",
  },
  {
    id: "t-3",
    quote: "Thank You Dr. Mona for giving us a little one after 8 years.",
    initials: "MG",
    author: "Meena & Ganesh",
    type: "Patient testimonial",
  },
  {
    id: "t-4",
    quote: "Dr. Dahiya's guidance and support has given us precious twins.",
    initials: "NV",
    author: "Neha & Vikram",
    type: "Patient testimonial",
  },
  {
    id: "t-5",
    quote: "We are now a complete family.",
    initials: "SM",
    author: "Sunita & Madhav",
    type: "Patient testimonial",
  },
  {
    id: "t-6",
    quote: "Our family is complete because of her Magical Treatment.",
    initials: "SA",
    author: "Shikha & Amit",
    type: "Patient testimonial",
  },
  {
    id: "t-7",
    quote: "After multiple failures, we finally have our baby boy.",
    initials: "KP",
    author: "Kavita & Purnav",
    type: "Patient testimonial",
  },
  {
    id: "t-8",
    quote: "We have got Two little miracles!",
    initials: "PR",
    author: "Pooja & Rajiv",
    type: "Patient testimonial",
  },
  {
    id: "t-9",
    quote: "Her support and medical brilliance are exceptional.",
    initials: "DP",
    author: "Divya & Pratyaksh",
    type: "Patient testimonial",
  },
  {
    id: "t-10",
    quote: "Thanks to Dr. Mona, we have got the Child that we dreamt about.",
    initials: "AA",
    author: "Ameena & Ahmad",
    type: "Patient testimonial",
  },
  {
    id: "t-11",
    quote: "Dr. Mona's IUI treatment brought us our baby after years of heartbreak.",
    initials: "SR",
    author: "Sonal & Raghav",
    type: "Patient testimonial",
  },
  {
    id: "t-12",
    quote: "We have got Twins after one attempt!",
    initials: "NA",
    author: "Nidhi & Aman",
    type: "Patient testimonial",
  },
  {
    id: "t-13",
    quote: "After 5 years, we have our baby girl.",
    initials: "AP",
    author: "Arushi & Pratham",
    type: "Patient testimonial",
  },
  {
    id: "t-14",
    quote: "We have got our little Angel and we are elated.",
    initials: "RS",
    author: "Ritu & Sanjay",
    type: "Patient testimonial",
  },
  {
    id: "t-15",
    quote: "After a lot of struggles, we hold our baby boy.",
    initials: "AA",
    author: "Akansha & Ashish",
    type: "Patient testimonial",
  },
];

export default function PatientReviewsTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState({ left: 0, width: 20 });

  const updateProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress({ left: 0, width: 100 });
      return;
    }
    const visibleRatio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(visibleRatio * 100, 15);
    const scrollRatio = scrollLeft / maxScroll;
    const maxThumbLeft = 100 - thumbWidth;
    const thumbLeft = (scrollRatio * maxThumbLeft * 100) / thumbWidth;
    setScrollProgress({ left: thumbLeft, width: thumbWidth });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.clientWidth ?? 360;
    const scrollAmount = (cardWidth + 16) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-pink py-5 text-ink sm:py-6 lg:py-7">
      <div className="page-container relative">
        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-3 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="card-highlight flex w-[86vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-6 backdrop-blur-md transition-all duration-300 hover:border-[#fbcfe0] hover:bg-[#fff0f5] sm:w-[calc(50%-8px)] sm:min-w-[320px] lg:w-[calc(33.333%-11px)] lg:min-w-[360px]"
            >
              <div>
                <p className="font-serif text-[1.12rem] font-bold leading-snug text-black sm:text-[1.18rem] lg:text-[1.22rem]">
                  <span className="text-rose">“</span>
                  {item.quote}
                  <span className="text-rose">”</span>
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#381a28] text-[12.5px] font-bold text-rose">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-[14px] font-bold text-black sm:text-[14.5px]">
                    {item.author}
                  </h4>
                  <p className="text-[12px] text-black">{item.type}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom styled scrollbar matching image */}
        <div className="mt-3 flex items-center gap-2 sm:gap-3">
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10 sm:h-2.5">
            <div
              className="h-full rounded-full bg-white/40 transition-all duration-150 hover:bg-white/60"
              style={{
                width: `${scrollProgress.width}%`,
                transform: `translateX(${scrollProgress.left}%)`,
              }}
            />
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous testimonial"
              className="flex size-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-black transition-all hover:bg-white/20 hover:text-white active:scale-95 sm:size-7"
            >
              <FaChevronLeft className="size-2.5 sm:size-3" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next testimonial"
              className="flex size-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-black transition-all hover:bg-white/20 hover:text-white active:scale-95 sm:size-7"
            >
              <FaChevronRight className="size-2.5 sm:size-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

