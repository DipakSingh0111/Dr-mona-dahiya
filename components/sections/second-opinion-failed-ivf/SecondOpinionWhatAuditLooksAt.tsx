"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SecondOpinionWhatAuditLooksAt() {
  const groups = [
    {
      groupTitle: "Embryo and sperm",
      cards: [
        {
          title: "Day of embryo arrest",
          desc: "Did embryos stop at Day 3 or reach Day 5?",
        },
        {
          title: "Sperm DNA fragmentation",
          desc: (
            <>
              DFI testing. See{" "}
              <Link
                href="/sperm-dna-fragmentation"
                className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
              >
                Sperm DNA Fragmentation Test
              </Link>
            </>
          ),
        },
        {
          title: "Chromosomal status",
          desc: "Whether PGT-A was done, and what it showed.",
        },
        {
          title: "Egg maturity and shape",
          desc: "MII rate and any abnormal-looking eggs.",
        },
      ],
    },
    {
      groupTitle: "Uterus and receptivity",
      cards: [
        {
          title: "Cavity check",
          desc: (
            <>
              3D sonography or{" "}
              <Link
                href="/treatments"
                className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
              >
                Hysteroscopy
              </Link>{" "}
              for subtle septa, polyps or adhesions.
            </>
          ),
        },
        {
          title: "Chronic endometritis",
          desc: "CD138 biopsy for hidden inflammation.",
        },
        {
          title: "Window of implantation",
          desc: (
            <>
              Whether an{" "}
              <Link
                href="/treatments"
                className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
              >
                ERA test
              </Link>{" "}
              is needed.
            </>
          ),
        },
        {
          title: "Thin lining",
          desc: (
            <>
              A lining under 7 mm. See{" "}
              <Link
                href="/treatments"
                className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
              >
                PRP Therapy
              </Link>
              .
            </>
          ),
        },
      ],
    },
    {
      groupTitle: "Hormones and protocol",
      cards: [
        {
          title: "Early progesterone rise",
          desc: "Progesterone above 1.5 ng/mL before trigger.",
        },
        {
          title: "Protocol choice",
          desc: "Antagonist, flare or DuoStim, matched to your reserve.",
        },
        {
          title: "Trigger and luteal support",
          desc: "Was the trigger timed and dosed well?",
        },
        {
          title: "Thyroid and prolactin",
          desc: "Subtle imbalances that affect implantation.",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Root-cause framework
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.35rem]">
            What a Failed IVF Audit Looks At
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-black sm:text-[15px]">
            Every review covers 3 areas, because most failures come from more than one factor.
          </p>
        </Reveal>

        <div className="space-y-8 sm:space-y-10">
          {groups.map((grp, gIdx) => (
            <div key={gIdx}>
              <h3 className="font-serif text-[18px] font-bold text-slate-900 sm:text-[20px] mb-4">
                {grp.groupTitle}
              </h3>

              <Stagger
                stagger={0.05}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {grp.cards.map((c, cIdx) => (
                  <StaggerItem key={cIdx}>
                    <div className="group flex h-full flex-col justify-start rounded-[18px] border border-slate-200/90 bg-gradient-to-br from-slate-50/70 to-white p-5 shadow-[0_4px_16px_rgba(0,20,60,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_12px_28px_rgba(0,30,80,0.08)]">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-rose to-[#f43f5e] text-white shadow-xs">
                          <FaCheck className="size-3" />
                        </span>
                        <h4 className="text-[14.5px] font-bold text-slate-900 group-hover:text-blue transition-colors sm:text-[15px]">
                          {c.title}
                        </h4>
                      </div>
                      <div className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                        {c.desc}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

