"use client";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroBannerImage from "@/components/ui/HeroBannerImage";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function HysteroscopyHero() {
  const badges = [
    "Hysteroscopy Delhi",
    "Operative hysteroscopy Noida",
    "Uterine septum removal Ghaziabad",
    "Day-care procedure",
  ];

  return (
    <section
      className="relative overflow-hidden pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-9"
      style={{
        background:
          "var(--pink)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] -translate-x-1/4 translate-y-1/4 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,62,116,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="page-container relative grid grid-cols-1 items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <Breadcrumb
          items={[
            { label: "Treatments", href: "/our-services" },
            { label: "Diagnostic & Operative Hysteroscopy" }
          ]}
        />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              See inside the uterus, treat in the same sitting
            </p>

            <h1 className="font-serif mt-1.5 max-w-[40rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Diagnostic &amp; Operative Hysteroscopy in Delhi, Noida &amp;
              Ghaziabad
            </h1>

            <p className="mt-3.5 max-w-[36rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              Hysteroscopy lets Dr. Mona Dahiya look directly inside the uterine cavity
              with a thin telescope and, when needed, treat the problem in the same
              sitting. It is a day-care procedure that helps clear the way for natural
              conception, IUI or IVF.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(232,62,116,0.3)] transition-all hover:bg-rose-dark active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </a>
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </a>
          </div>

          <Stagger
            delay={0.05}
            className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {badges.map((badge) => (
              <StaggerItem key={badge}>
                <span className="inline-flex items-center rounded-full border border-rose/25 bg-white px-3 py-1 text-[11.5px] font-medium text-ink shadow-sm backdrop-blur-md sm:text-[12.5px]">
                  {badge}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <HeroBannerImage
          src="/images/about-mona-dahiya/hysteroscopy.jpg"
          alt="Dr. Mona Dahiya - Diagnostic & Operative Hysteroscopy"
        />
      </div>
    </section>
  );
}
