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
        style={{
          background:
            "linear-gradient(90deg, var(--navy) 0%, var(--navy-mid) 50%, var(--navy) 100%)",
        }}
        className={`group inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-2.5 text-white shadow-[0_8px_26px_rgba(6,21,50,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/60 hover:shadow-[0_12px_32px_rgba(232,62,116,0.35)] sm:gap-2.5 sm:px-4 sm:py-3 ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Highlighted Badge: Shows "N" at rest, expands into glowing "New" highlight on hover */}
        <span className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-rose text-white text-[11px] font-extrabold shadow-sm transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(232,62,116,0.95)] group-hover:ring-2 group-hover:ring-white/70 h-5.5 min-w-[22px] px-1.5 group-hover:px-2.5">
          <span className="group-hover:hidden flex items-center justify-center">
            N
          </span>
          <span className="hidden group-hover:inline uppercase tracking-wider font-extrabold">
            New
          </span>
        </span>

        <span className="text-[12.5px] font-bold tracking-[0.01em] whitespace-nowrap text-white transition-colors duration-200 group-hover:text-white sm:text-[13.5px]">
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
