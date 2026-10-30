"use client";

import { FaCalendarAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function AboutParenthoodCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#241424] via-[#2d182f] to-[#201122] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-[#e83e74]/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Headline */}
            <h2 className="font-display max-w-2xl text-[1.95rem] leading-[1.22] font-medium tracking-tight text-white sm:text-[2.4rem] lg:text-[2.75rem]">
              Take your first step towards parenthood with{" "}
              <span className="font-serif italic text-[#f472b6]">
                Dr. Mona Dahiya
              </span>
            </h2>

            {/* 3 Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Book Consultation */}
              <a
                href="#book-consultation"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#c53658] px-6 py-3.5 text-[14px] font-bold text-white shadow-md transition-all duration-200 hover:bg-[#a82946] hover:shadow-lg active:scale-95"
              >
                <FaCalendarAlt className="size-4" />
                <span>Book Consultation</span>
              </a>

              {/* WhatsApp Us */}
              <a
                href="https://wa.me/919267982924?text=Hello%20Dr.%20Mona%20Dahiya%2C%20I%20would%20like%20to%20inquire%20about%20a%20fertility%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#1b6b57] px-6 py-3.5 text-[14px] font-bold text-white shadow-md transition-all duration-200 hover:bg-[#145746] hover:shadow-lg active:scale-95"
              >
                <FaWhatsapp className="size-4.5" />
                <span>WhatsApp Us</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919267982924"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white backdrop-blur-xs transition-all duration-200 hover:border-white hover:bg-white/15 active:scale-95"
              >
                <FaPhoneAlt className="size-3.5" />
                <span>+91 92679 82924</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

