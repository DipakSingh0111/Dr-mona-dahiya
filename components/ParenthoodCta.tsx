import Image from "next/image";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
  FaCalendarAlt,
} from "react-icons/fa";
import siteData from "@/data/site.json";

export default function ParenthoodCta() {
  const data = siteData.parenthoodCta;

  return (
    <section className="relative overflow-hidden bg-[#f4f0ea]">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt="Hands forming a heart on a baby bump"
          fill
          sizes="100vw"
          className="object-cover object-[72%_center]"
          priority
        />
      </div>

      {/* Cream gradient behind text — fades into the photo */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, #f4f0ea 0%, #f4f0ea 34%, rgba(244,240,234,0.92) 48%, rgba(244,240,234,0.45) 68%, transparent 88%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(244,240,234,0.96) 0%, rgba(244,240,234,0.82) 42%, rgba(244,240,234,0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[340px] w-full max-w-[1400px] items-center px-4 py-12 sm:min-h-[380px] sm:px-6 sm:py-14 lg:min-h-[420px] lg:px-8 lg:py-16 xl:px-10">
        <div className="w-full max-w-[720px]">
          <span className="mb-5 block h-[3px] w-11 rounded-full bg-[#c24663]" />

          <h2 className="font-display text-[1.75rem] leading-[1.28] font-bold tracking-tight text-[#1a2b4b] sm:text-[2.2rem] lg:text-[2.55rem]">
            {data.title}{" "}
            <span className="italic text-[#c24663]">{data.titleAccent}</span>
          </h2>

          <div className="mt-8 flex flex-nowrap items-center gap-2 sm:gap-3">
            <a
              href={data.book.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c24663] px-3.5 py-2.5 text-[12px] font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(194,70,99,0.28)] transition hover:bg-[#a83b55] sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-[13.5px]"
            >
              <FaCalendarAlt className="size-3.5" />
              {data.book.label}
              <FaArrowRight className="size-3.5" />
            </a>

            <a
              href={data.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#134e43] px-3.5 py-2.5 text-[12px] font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(19,78,67,0.28)] transition hover:bg-[#0f3f36] sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-[13.5px]"
            >
              <FaWhatsapp className="size-[18px]" />
              {data.whatsapp.label}
              <FaArrowRight className="size-3.5" />
            </a>

            <a
              href={data.phone.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#1a2b4b]/40 bg-transparent px-3.5 py-2.5 text-[12px] font-semibold whitespace-nowrap text-[#1a2b4b] transition hover:bg-white/60 sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-[13.5px]"
            >
              <FaPhoneAlt className="size-3.5" />
              {data.phone.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
