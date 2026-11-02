"use client";

import { FaAward, FaHospital, FaBarcode, FaComments } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtProtocolAndWhy() {
  const steps = [
    {
      step: "1",
      title: "Controlled Ovarian Stimulation (Cycle Days 2/3 to 12)",
      bullets: [
        "Personalized gonadotropin stimulation protocols to develop multiple mature follicles",
        "Monitored via serial high-resolution follicular ultrasound and serum estradiol (E2) levels",
      ],
      color: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
    },
    {
      step: "2",
      title: "Egg Retrieval & ICSI Fertilization (Cycle Day 13/14)",
      bullets: [
        "Transvaginal ultrasound-guided egg collection under light IV sedation",
        "ICSI is exclusively utilized—rather than conventional IVF—to avoid extraneous sperm cell DNA contamination on the outer embryo shell during genetic testing",
      ],
      color: "from-[#0047ca] to-[#0284c7]",
      border: "hover:border-[#0047ca]/50",
    },
    {
      step: "3",
      title: "Extended Blastocyst Culture (Cycle Days 14–19 • Culture Days 1 to 5/6)",
      bullets: [
        "Embryos develop in Class 10,000 cleanroom benchtop incubators to the multi-cellular blastocyst stage (100–150 cells)",
      ],
      color: "from-[#8b5cf6] to-[#a855f7]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      step: "4",
      title: "Laser-Assisted Trophectoderm Biopsy (Day 5/6)",
      bullets: [
        "Using a non-contact infrared diode laser, an expert embryologist breaches the zona pellucida and aspirates 4 to 6 cells from the trophectoderm layer",
      ],
      color: "from-[#0d9488] to-[#14b8a6]",
      border: "hover:border-[#0d9488]/50",
    },
    {
      step: "5",
      title: "Ultra-Rapid Vitrification (Day 5/6)",
      bullets: [
        "Biopsied blastocysts are instantly flash-frozen at -196°C in liquid nitrogen tanks with 100% electronic traceability",
        "They remain safely cryopreserved while genetic testing proceeds",
      ],
      color: "from-[#ea580c] to-[#f97316]",
      border: "hover:border-[#ea580c]/50",
    },
    {
      step: "6",
      title: "Genomic Analysis by NGS (2 to 3 Weeks)",
      bullets: [
        "Biopsied cell DNA is amplified and analyzed using high-resolution Next-Generation Sequencing (NGS)",
        "Embryos are categorised as Euploid (chromosomally normal), Aneuploid (abnormal), or Mosaic (mixed normal/abnormal cell populations)",
      ],
      color: "from-[#0284c7] to-[#0047ca]",
      border: "hover:border-[#0284c7]/50",
    },
    {
      step: "7",
      title: "Personalized Frozen Embryo Transfer (Subsequent Cycle)",
      bullets: [
        "A single euploid blastocyst is thawed and transferred into a prepared, receptive endometrium",
        "Done during a subsequent hormone replacement or natural cycle",
      ],
      color: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
    },
  ];

  const whyPoints = [
    {
      title: "25+ Years of Clinical Reproductive Mastery",
      desc: "Dr. Mona Dahiya is an acclaimed fertility specialist, holding an MBBS (Gold Medalist) from Lady Hardinge Medical College, MD from Maulana Azad Medical College (MAMC), and an advanced Fellowship in Reproductive Medicine from Singapore General Hospital. Over her career, she has guided more than 10,000 families to parenthood.",
      icon: FaAward,
      iconColor: "text-[#e83e74]",
      iconBg: "bg-[#e83e74]/10",
      border: "hover:border-[#e83e74]/40",
    },
    {
      title: "Dedicated High-Complexity Cleanroom Embryology Labs",
      desc: "Operating with modern benchtop incubators, 1.48 µm non-contact lasers, and micro-vibration-free micromanipulation systems, our labs minimize cellular stress and maintain high post-biopsy survival rates (>98%).",
      icon: FaHospital,
      iconColor: "text-[#0047ca]",
      iconBg: "bg-[#0047ca]/10",
      border: "hover:border-[#0047ca]/40",
    },
    {
      title: "Stringent Double-Witness & Barcode Security",
      desc: "Eliminates sample mix-ups through an unbroken electronic verification chain from cell biopsy to cryogenic storage and warming.",
      icon: FaBarcode,
      iconColor: "text-[#0d9488]",
      iconBg: "bg-[#0d9488]/10",
      border: "hover:border-[#0d9488]/40",
    },
    {
      title: "Transparent Genetic Counseling",
      desc: "Every PGT report is interpreted directly with patients to explain mosaicism thresholds, segmental anomalies, and individual implantation probabilities clearly and honestly.",
      icon: FaComments,
      iconColor: "text-[#ea580c]",
      iconBg: "bg-[#ea580c]/10",
      border: "hover:border-[#ea580c]/40",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Step-by-Step PGT Treatment Protocol */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            How it works
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            Step-by-Step PGT Treatment Protocol
          </h2>
        </Reveal>

        <Stagger
          stagger={0.05}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((st, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-slate-50/60 p-5 shadow-[0_4px_18px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${st.border}`}
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

        {/* Why Consult Dr. Mona Dahiya for PGT */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Expertise &amp; authority
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              Why Consult Dr. Mona Dahiya for PGT in Delhi | Noida | Ghaziabad?
            </h2>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {whyPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div
                    className={`group flex flex-col gap-3 rounded-[18px] border border-slate-200/90 bg-gradient-to-br from-slate-50/60 to-white p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,30,80,0.07)] sm:flex-row sm:items-start sm:p-6 ${item.border}`}
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

