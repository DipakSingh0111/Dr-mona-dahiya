"use client";

import { FaClock, FaSnowflake, FaMicroscope, FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SpermFreezingProtocolAndWhy() {
  const steps = [
    {
      step: "1",
      title: "Consultation",
      bullets: [
        "Reason for freezing and the number of samples needed",
        "Consent and storage terms explained",
      ],
      color: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
    },
    {
      step: "2",
      title: "Collection",
      bullets: [
        "Sample collected in a private room at the clinic",
        "Multiple samples may be advised",
      ],
      color: "from-[#0047ca] to-[#0284c7]",
      border: "hover:border-[#0047ca]/50",
    },
    {
      step: "3",
      title: "Processing",
      bullets: [
        "Sample assessed and mixed with a cryoprotectant",
        "Divided into labelled vials",
      ],
      color: "from-[#8b5cf6] to-[#a855f7]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      step: "4",
      title: "Freezing and storage",
      bullets: [
        "Vials stored in liquid nitrogen",
        "Tracked with a secure labelling system",
      ],
      color: "from-[#0d9488] to-[#14b8a6]",
      border: "hover:border-[#0d9488]/50",
    },
    {
      step: "5",
      title: "Later use",
      bullets: [
        "Thawed for IUI, IVF or ICSI",
        "Post-thaw quality checked before use",
      ],
      color: "from-[#ea580c] to-[#f97316]",
      border: "hover:border-[#ea580c]/50",
    },
  ];

  const whyPoints = [
    {
      title: "Rapid Access for Onco-Fertility & Urgent Medical Needs",
      desc: "Same-day, prioritized appointments ensure fast semen cryopreservation before chemotherapy, radiation, or surgery—avoiding any delay to medical care.",
      icon: FaClock,
      iconColor: "text-[#e83e74]",
      iconBg: "bg-[#e83e74]/10",
      border: "hover:border-[#e83e74]/40",
    },
    {
      title: "Advanced Cryopreservation for Maximum Post-Thaw Viability",
      desc: "Ultra-low temperature storage at -196°C protects sperm motility, morphology, and DNA integrity for reliable long-term security.",
      icon: FaSnowflake,
      iconColor: "text-[#0047ca]",
      iconBg: "bg-[#0047ca]/10",
      border: "hover:border-[#0047ca]/40",
    },
    {
      title: "Tailored Integration with Future IUI and IVF/ICSI Plans",
      desc: "Every sample is prepared with clear long-term storage terms and optimized for downstream treatments, from simple IUI to microfluidic ICSI cycles.",
      icon: FaMicroscope,
      iconColor: "text-[#0d9488]",
      iconBg: "bg-[#0d9488]/10",
      border: "hover:border-[#0d9488]/40",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section 1: Step-by-Step Treatment Protocol */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            How it works
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Step-by-Step Treatment Protocol
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            What to expect at each stage. The exact plan is set at your consultation.
          </p>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((st, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_18px_rgba(0,20,60,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${st.border}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white shadow-sm bg-gradient-to-r ${st.color}`}
                  >
                    {st.step}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                    {st.title}
                  </h3>
                </div>

                <ul className="mt-3.5 space-y-2 text-[13px] text-slate-600 sm:text-[13.5px]">
                  {st.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Section 2: Why Consult Dr. Mona Dahiya for Sperm Freezing? */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Why Consult Dr. Mona Dahiya for Sperm Freezing?
            </h2>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {whyPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`group flex flex-col gap-3 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,30,80,0.07)] sm:flex-row sm:items-start sm:p-6 ${item.border}`}
                  >
                    <div
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600 sm:text-[14px]">
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

