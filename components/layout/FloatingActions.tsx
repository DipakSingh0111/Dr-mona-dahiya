"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-end justify-between px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {/* Left: Fertility Assessment Pill */}
      <a
        href="#book-appointment"
        aria-label="Take Fertility Assessment"
        tabIndex={visible ? 0 : -1}
        className={`group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-gradient-to-r from-[#e83e74] via-[#ea4c80] to-[#c53658] px-3.5 py-2.5 text-white shadow-[0_8px_26px_rgba(232,62,116,0.4)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_rgba(232,62,116,0.55)] sm:gap-3 sm:px-4 sm:py-3 ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[#e83e74] shadow-sm transition-transform duration-200 group-hover:scale-110 sm:size-5.5">
          <FaCheck className="size-2.5 sm:size-3" />
        </span>

        <span className="text-[12.5px] font-bold tracking-[0.01em] whitespace-nowrap text-white sm:text-[13.5px]">
          Fertility assessment
        </span>
      </a>

      {/* Right: WhatsApp Floating Button */}
      <a
        href="https://wa.me/919267982924"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        tabIndex={visible ? 0 : -1}
        className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_22px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_8px_28px_rgba(37,211,102,0.6)] sm:size-14 ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <FaWhatsapp className="size-6 sm:size-7" />
      </a>
    </div>
  );
}
