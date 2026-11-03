"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SecondOpinionWhenAndRecords() {
  const whenCards = [
    {
      num: "1",
      title: "1 or more failed blastocyst transfers",
      desc: (
        <>
          Good-grade embryos that did not implant in a lining that looked ready. See{" "}
          <Link
            href="/recurrent-implantation-failure"
            className="font-medium text-[#0047ca] underline underline-offset-2 hover:text-[#00369e]"
          >
            Recurrent Implantation Failure
          </Link>
          .
        </>
      ),
      color: "from-[#e83e74] to-[#f43f5e]",
      border: "hover:border-[#e83e74]/50",
    },
    {
      num: "2",
      title: "Embryos stopping between Day 3 and Day 5",
      desc: "Repeated arrest before the blastocyst stage, pointing to sperm DNA damage or embryo genome problems.",
      color: "from-[#0047ca] to-[#0284c7]",
      border: "hover:border-[#0047ca]/50",
    },
    {
      num: "3",
      title: "Unexplained poor fertilisation",
      desc: "Fertilisation below 50% despite a normal semen report.",
      color: "from-[#8b5cf6] to-[#a855f7]",
      border: "hover:border-[#8b5cf6]/50",
    },
    {
      num: "4",
      title: "Persistently thin lining",
      desc: "Cycles repeatedly cancelled because the lining stays under 7 mm.",
      color: "from-[#0d9488] to-[#14b8a6]",
      border: "hover:border-[#0d9488]/50",
    },
    {
      num: "5",
      title: "Repeatedly advised donor eggs",
      desc: (
        <>
          Told to use donor eggs without trying own-egg options such as DuoStim or micro-dose flare. See{" "}
          <Link
            href="/low-amh"
            className="font-medium text-[#0047ca] underline underline-offset-2 hover:text-[#00369e]"
          >
            Low AMH Treatment
          </Link>
          .
        </>
      ),
      color: "from-[#ea580c] to-[#f97316]",
      border: "hover:border-[#ea580c]/50",
    },
  ];

  const checklistItems = [
    {
      title: "Stimulation charts",
      desc: "daily injection doses, antagonist timing, estradiol levels and trigger type.",
    },
    {
      title: "Embryology records",
      desc: "eggs retrieved, maturity (MII vs MI), fertilisation (2PN) and Day-3 vs Day-5 progress.",
    },
    {
      title: "Surgery reports",
      desc: "any past laparoscopy, hysteroscopy or sonohysterography.",
    },
    {
      title: "Semen reports",
      desc: "computer-assisted analysis and sperm DNA fragmentation (Halosperm) results.",
    },
    {
      title: "Pelvic imaging",
      desc: "3D ultrasound reports on adenomyosis, the junctional zone or hydrosalpinx.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Part A: When Should You Get an Independent Second Opinion? */}
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            When to seek one
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            When Should You Get an Independent Second Opinion?
          </h2>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whenCards.map((item, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_18px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)] ${item.border}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white shadow-sm bg-gradient-to-r ${item.color}`}
                  >
                    {item.num}
                  </span>
                  <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#0047ca] transition-colors sm:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                  {item.desc}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Part B: What to Bring for Your Second-Opinion Review */}
        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
              Before your review
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
              What to Bring for Your Second-Opinion Review
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Bringing these records lets Dr. Dahiya review your past cycles without repeating tests.
            </p>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {checklistItems.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-start gap-3.5 rounded-[16px] border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-[0_4px_14px_rgba(0,20,60,0.03)] transition-all duration-300 hover:border-[#0047ca]/40 hover:shadow-[0_8px_22px_rgba(0,71,202,0.07)]">
                  <FaCheckCircle className="mt-1 size-5 shrink-0 text-[#0d9488]" />
                  <div className="text-[13.5px] leading-relaxed text-slate-700 sm:text-[14.5px]">
                    <strong className="font-bold text-slate-900">{item.title}:</strong>{" "}
                    {item.desc}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

