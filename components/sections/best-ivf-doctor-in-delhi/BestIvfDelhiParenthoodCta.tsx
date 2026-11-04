"use client";

import { FaCalendarAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function BestIvfDelhiParenthoodCta() {
  return (
    <section className="relative overflow-hidden bg-pink py-6 sm:py-7 lg:py-8">
      <div className="page-container relative z-10">
        <div className="flex flex-col items-start justify-between gap-7 rounded-[24px] bg-blue px-5 py-6 shadow-[0_12px_36px_rgba(0,71,202,0.28)] sm:px-7 sm:py-7 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
          <h2 className="font-display max-w-[36rem] text-[1.75rem] leading-[1.28] font-medium tracking-tight text-white sm:text-[2.15rem] lg:text-[2.35rem]">
            <span className="block">
              Take your first step towards parenthood
            </span>
            <span className="block">
              with{" "}
              <span className="font-serif italic text-[#ffb6cd]">
                Dr. Mona Dahiya
              </span>
            </span>
          </h2>

          <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto lg:shrink-0">
            <a
              href="#book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-bold whitespace-nowrap text-blue shadow-md transition-all duration-200 hover:bg-[#fff0f5] hover:text-rose hover:shadow-lg active:scale-95 sm:py-3.5 sm:text-[14px]"
            >
              <FaCalendarAlt className="size-3.5 shrink-0 sm:size-4" />
              Book Consultation
            </a>

            <a
              href="https://wa.me/919267982924?text=Hello%20Dr.%20Mona%20Dahiya%2C%20I%20would%20like%20to%20inquire%20about%20a%20fertility%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-3 text-[13px] font-bold whitespace-nowrap text-white shadow-md transition-all duration-200 hover:bg-rose-dark hover:shadow-lg active:scale-95 sm:py-3.5 sm:text-[14px]"
            >
              <FaWhatsapp className="size-4 shrink-0 sm:size-4.5" />
              WhatsApp Us
            </a>

            <a
              href="tel:+919267982924"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 text-[13px] font-bold whitespace-nowrap text-white backdrop-blur-xs transition-all duration-200 hover:border-white hover:bg-white/20 active:scale-95 sm:py-3.5 sm:text-[14px]"
            >
              <FaPhoneAlt className="size-3.5 shrink-0" />
              +91 92679 82924
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
