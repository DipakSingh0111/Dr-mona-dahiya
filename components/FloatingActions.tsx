import { FaCheck, FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-end justify-between p-4 sm:p-6">
      {/* Left: Fertility Assessment Pill */}
      <a
        href="#book-appointment"
        aria-label="Take Fertility Assessment"
        className="pointer-events-auto group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#0c352e]/95 px-3.5 py-2.5 text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#0f4239] sm:gap-3 sm:px-4 sm:py-3"
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#f9a8b8] transition-transform duration-200 group-hover:scale-105 sm:size-5.5">
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
        className="pointer-events-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_22px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_8px_28px_rgba(37,211,102,0.6)] sm:size-14"
      >
        <FaWhatsapp className="size-6 sm:size-7" />
      </a>
    </div>
  );
}

