"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function BookAppointmentSteps() {
  const { howToBook } = siteData.bookAppointmentPage;

  return (
    <section id="how-to-book" className="relative overflow-hidden bg-pink py-10 sm:py-12 lg:py-14">
      <div className="page-container relative">
        <Reveal variant="fadeUp" className="text-center">
          <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            {howToBook.eyebrow}
          </span>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            {howToBook.title}
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-[14px] leading-relaxed text-ink/75 sm:text-[14.5px]">
            {howToBook.subtitle}
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
          stagger={0.08}
        >
          {/* Step 1 with card-highlight (pink top line) */}
          <StaggerItem>
            <div className="card-highlight group relative flex h-full flex-col rounded-[22px] border border-rose/20 bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_16px_36px_rgba(232,62,116,0.12)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-rose text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)]">
                  {howToBook.steps[0].step}
                </span>
                <h3 className="font-serif text-[1.1rem] font-semibold text-ink sm:text-[1.15rem]">
                  {howToBook.steps[0].title}
                </h3>
              </div>

              <div className="mt-4 space-y-2.5 flex-1">
                <div className="rounded-[14px] border border-ink/10 bg-pink/60 p-3 text-[13px] leading-relaxed text-ink/80">
                  <p className="font-medium text-ink">
                    {howToBook.steps[0].options?.[0]?.label}
                  </p>
                </div>
                {howToBook.steps[0].options?.[1] && (
                  <div className="rounded-[14px] border border-rose/25 bg-rose/5 p-3 text-[13px] leading-relaxed text-ink/80">
                    <Link
                      href={howToBook.steps[0].options[1].href}
                      className="font-medium text-rose hover:underline"
                    >
                      {howToBook.steps[0].options[1].label} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </StaggerItem>

          {/* Step 2 with card-highlight (pink top line) */}
          <StaggerItem>
            <div className="card-highlight group relative flex h-full flex-col rounded-[22px] border border-rose/20 bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_16px_36px_rgba(232,62,116,0.12)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-rose text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)]">
                  {howToBook.steps[1].step}
                </span>
                <h3 className="font-serif text-[1.1rem] font-semibold text-ink sm:text-[1.15rem]">
                  {howToBook.steps[1].title}
                </h3>
              </div>

              <ul className="mt-4 space-y-2.5 flex-1 text-[13px] leading-relaxed text-ink/80">
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold mt-0.5">•</span>
                  <span>
                    Either by giving us a call or WhatsApp on{" "}
                    <a
                      href="tel:+919267982924"
                      className="font-semibold text-ink hover:text-rose transition-colors"
                    >
                      +91 92679 82924
                    </a>
                    , or
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose font-bold mt-0.5">•</span>
                  <span>
                    By sending an email to{" "}
                    <a
                      href="mailto:info@drmonadahiya.com"
                      className="font-semibold text-ink hover:text-rose transition-colors"
                    >
                      info@drmonadahiya.com
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href="https://wa.me/919267982924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-xs hover:opacity-95 transition-all"
                >
                  <FaWhatsapp className="size-3.5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919267982924"
                  className="inline-flex items-center gap-1.5 rounded-full bg-blue px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-xs hover:bg-blue-dark transition-all"
                >
                  <FaPhoneAlt className="size-3" />
                  Call
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Step 3 with card-highlight (pink top line) */}
          <StaggerItem>
            <div className="card-highlight group relative flex h-full flex-col rounded-[22px] border border-rose/20 bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_16px_36px_rgba(232,62,116,0.12)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-rose text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(232,62,116,0.3)]">
                  {howToBook.steps[2].step}
                </span>
                <h3 className="font-serif text-[1.1rem] font-semibold text-ink sm:text-[1.15rem]">
                  {howToBook.steps[2].title}
                </h3>
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-ink/80 flex-1">
                {howToBook.steps[2].description}
              </p>

              <div className="mt-4 rounded-[12px] bg-navy/5 p-3 text-[12px] text-ink/70">
                <span>Fast SMS &amp; WhatsApp Confirmation within 2 hours</span>
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Bottom Note */}
        <Reveal variant="fadeUp" delay={0.1} className="mt-6 text-center">
          <p className="text-[12.5px] font-medium text-ink/65 italic sm:text-[13px]">
            {howToBook.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

