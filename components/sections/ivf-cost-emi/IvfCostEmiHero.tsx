"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroCounterBar from "@/components/ui/HeroCounterBar";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IvfCostEmiHero() {
  const badges = [
    "More than 25 years of experience",
    "Itemised quote before starting treatment",
    "Noida, Ghaziabad & Delhi",
    "Online or walk-in visit",
  ];

  return (
    <>
      <section
        className="relative overflow-hidden pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12"
      style={{ background: "var(--pink)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[8%] h-[280px] w-[280px] -translate-y-1/4 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(232,62,116,0.12) 50%, transparent 70%)",
        }}
      />

      <div className="page-container relative">
        <div className="max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Treatments", href: "/our-services" },
              { label: "IVF Cost and EMI Financing in Delhi NCR" },
            ]}
          />

          <Reveal variant="slideLeft">
            <p className="text-[12px] font-bold tracking-[0.12em] text-rose uppercase sm:text-[13px]">
              Cost of IVF and EMI plan
            </p>

            <h1 className="font-serif mt-1.5 max-w-[42rem] text-[1.65rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem] xl:text-[2.55rem]">
              Transparent IVF Cost &amp; Flexible EMI Medical Financing in Delhi,
              Noida &amp; Ghaziabad
            </h1>

            <p className="mt-3.5 max-w-[40rem] text-[13.5px] leading-relaxed text-ink/75 sm:text-[15px]">
              We know everyone wants low-cost IVF treatment. However, the
              quality of laboratory procedures cannot be compromised. We provide
              transparent medical costs of IVF treatment at Noida, Delhi and
              Ghaziabad by Dr Mona Dahiya. IVF with EMI plans is also available
              from various banks and NBFCs, some of which even offer
              interest-free loans.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book-consultation"
              className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 px-6 py-2.5 text-[13.5px] font-bold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] backdrop-blur-sm transition-all hover:border-rose/50 hover:bg-white hover:text-rose active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Book In-Clinic Consultation
            </a>
            <Link
              href="/ivf-consultation-online"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(0,71,202,0.35)] ring-1 ring-blue/20 transition-all hover:bg-blue-dark hover:brightness-110 active:scale-95 sm:px-7 sm:py-3 sm:text-[14px]"
            >
              Schedule Online Consultation
            </Link>
          </div>

          <Link
            href="/best-ivf-patient-reviews"
            className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink/90 transition-colors hover:text-rose sm:text-[14px]"
          >
            Read Dr Mona Dahiya&apos;s Reviews →
          </Link>

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
      </div>
    </section>

      <section className="relative overflow-hidden bg-white py-7 sm:py-9 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <HeroCounterBar
            items={[
              { target: 25000, suffix: "+", label: "families treated" },
              { target: 25, suffix: "+", label: "years' expertise" },
              { target: 90, suffix: "%+", label: "IVF success rates" },
              { target: 15000, suffix: "+", label: "IVF cycles" },
            ]}
          />
        </div>
      </section>
    </>
  );
}

