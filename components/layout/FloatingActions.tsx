"use client";

import Link from "next/link";
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
      <Link
        href="/book-appointment"
        aria-label="Take Fertility Assessment"
        tabIndex={visible ? 0 : -1}
        style={{
          background:
            "linear-gradient(90deg, var(--navy) 0%, var(--navy-mid) 50%, var(--navy) 100%)",
        }}
        className={`group inline-flex items-center rounded-full border border-white/25 px-3.5 py-2.5 text-white shadow-[0_8px_26px_rgba(6,21,50,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/65 hover:shadow-[0_12px_32px_rgba(232,62,116,0.35)] sm:px-4.5 sm:py-3 ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-rose ring-1 ring-white/15 sm:size-6.5">
          <FaCheck className="size-2.5 sm:size-3" />
        </span>

        <span className="ml-2.5 text-[13px] font-bold tracking-[0.01em] whitespace-nowrap text-white sm:text-[14px]">
          Fertility assessment
        </span>

        {/* NEW pill revealed smoothly on hover */}
        <span className="ml-0 inline-flex max-w-0 shrink-0 scale-75 items-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-2.5 group-hover:max-w-[72px] group-hover:scale-100 group-hover:opacity-100 group-focus-visible:ml-2.5 group-focus-visible:max-w-[72px] group-focus-visible:scale-100 group-focus-visible:opacity-100">
          <span className="inline-flex items-center rounded-full bg-rose px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-white uppercase shadow-[0_0_14px_rgba(232,62,116,0.75)]">
            NEW
          </span>
        </span>
      </Link>

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
