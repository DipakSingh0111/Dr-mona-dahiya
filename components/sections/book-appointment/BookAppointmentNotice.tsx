"use client";

import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";
import { FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

export default function BookAppointmentNotice() {
  const { notice } = siteData.bookAppointmentPage;

  return (
    <section className="relative overflow-hidden bg-pink py-6 sm:py-8 lg:py-10">
      <div className="page-container relative">
        <div className="w-full">
          <Reveal variant="fadeUp" className="text-left">
            <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
              {notice.eyebrow}
            </span>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.25] font-normal tracking-tight text-ink sm:text-[2rem] lg:text-[2.25rem]">
              {notice.title}
            </h2>
          </Reveal>

          {/* Warning Banner styled cleanly matching project design - full width aligned to logo */}
          <Reveal variant="fadeUp" delay={0.08} className="mt-5 sm:mt-6">
            <div className="relative w-full overflow-hidden rounded-[20px] border border-amber-300/80 bg-gradient-to-br from-amber-50/90 via-amber-50/50 to-white p-5 shadow-[0_6px_24px_rgba(217,119,6,0.08)] sm:p-6 lg:p-7">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <FaExclamationTriangle className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-[1.15rem] font-bold text-amber-950 sm:text-[1.25rem]">
                    {notice.alertTitle}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-amber-950/85 sm:text-[14px]">
                    {notice.alertText}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

