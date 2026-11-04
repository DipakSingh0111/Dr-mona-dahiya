"use client";

import Link from "next/link";
import { FaSearch, FaUserMd, FaHospital, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SecondOpinionPathwayAndWhy() {
  const steps = [
    {
      step: "1",
      title: "Record review and timeline",
      desc: "Detailed look at past protocols, hormone curves and embryology logs.",
      color: "from-rose to-[#f43f5e]",
      border: "hover:border-rose/50",
    },
    {
      step: "2",
      title: "Uterine cavity evaluation",
      desc: (
        <>
          3D sonohysterography or{" "}
          <Link
            href="/treatments"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Operative Hysteroscopy
          </Link>{" "}
          for subtle septa, polyps or adhesions. Endometrial biopsy with CD138 staining for chronic endometritis.
        </>
      ),
      color: "from-blue to-[var(--blue)]",
      border: "hover:border-blue/50",
    },
    {
      step: "3",
      title: "Sperm diagnostics",
      desc: (
        <>
          Halosperm testing through the{" "}
          <Link
            href="/sperm-dna-fragmentation"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Sperm DNA Fragmentation Test
          </Link>
          .
        </>
      ),
      color: "from-[#8b5cf6] to-[#a855f7]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      step: "4",
      title: "Implantation window check",
      desc: (
        <>
          Deciding whether an{" "}
          <Link
            href="/treatments"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            ERA Test
          </Link>{" "}
          is needed after repeated blastocyst failure.
        </>
      ),
      color: "from-blue to-[var(--blue)]",
      border: "hover:border-blue/50",
    },
    {
      step: "5",
      title: "New protocol",
      desc: "Tailored next steps: DuoStim for low AMH, microfluidic ICSI for high DFI, or longer down-regulation for adenomyosis.",
      color: "from-[#ea580c] to-[#f97316]",
      border: "hover:border-[#ea580c]/50",
    },
  ];

  const whyPoints = [
    {
      title: "Find the cause before repeating",
      desc: "Dr. Dahiya identifies why earlier cycles failed before starting new treatment, instead of repeating the same protocol.",
      icon: FaSearch,
      iconColor: "text-rose",
      iconBg: "bg-rose/10",
      border: "hover:border-rose/40",
    },
    {
      title: "Direct physician care",
      desc: "Consultations, stimulation planning, scans and embryo transfers are handled by Dr. Dahiya herself.",
      icon: FaUserMd,
      iconColor: "text-blue",
      iconBg: "bg-blue/10",
      border: "hover:border-blue/40",
    },
    {
      title: "Cleanroom laboratory standards",
      desc: "Class 10,000 cleanroom labs with benchtop mini-incubators and laser systems for blastocyst culture.",
      icon: FaHospital,
      iconColor: "text-blue",
      iconBg: "bg-blue/10",
      border: "hover:border-blue/40",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        {/* Step-by-Step Second-Opinion Pathway */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            How it works
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Step-by-Step Second-Opinion Pathway
          </h2>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((st, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-gradient-to-br from-slate-50/70 to-white p-5 shadow-[0_4px_18px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${st.border}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-black shadow-sm bg-gradient-to-r ${st.color}`}
                  >
                    {st.step}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue transition-colors sm:text-[16px]">
                    {st.title}
                  </h3>
                </div>
                <div className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                  {st.desc}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Why Consult Dr. Mona Dahiya for a Second Opinion? */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Why Consult Dr. Mona Dahiya for a Second Opinion?
            </h2>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {whyPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`group flex flex-col gap-3 rounded-[18px] border border-slate-200/90 bg-slate-50/60 p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(0,30,80,0.07)] sm:flex-row sm:items-start sm:p-6 ${item.border}`}
                  >
                    <div
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue transition-colors sm:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

