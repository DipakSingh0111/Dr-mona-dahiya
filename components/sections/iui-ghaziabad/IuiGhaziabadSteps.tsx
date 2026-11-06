"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiGhaziabadSteps() {
  const steps = [
    {
      num: "1",
      title: "Diagnosis & Plan",
      desc: "We will diagnose you and do an ultrasound scan on day 2 or day 3 of your cycle.",
    },
    {
      num: "2",
      title: "Follicular Induction",
      desc: "Oral drugs will be given to induce follicular growth. Mild gonadotropins may be added if response is poor.",
    },
    {
      num: "3",
      title: "Follicular Monitoring",
      desc: "Ultrasound scan to monitor your growing follicle (around 18-20mm) and endometrium.",
    },
    {
      num: "4",
      title: "Trigger Shot",
      desc: "Once the follicle reaches maturity we administer a trigger shot to rupture it. This can be either Recombinant or Urinary HCG.",
    },
    {
      num: "5",
      title: "Sperm Washing",
      desc: "Your partner will be asked to provide a sample which is then washed using double density gradient. This removes the seminal fluid and dead/non-moving sperms.",
    },
    {
      num: "6",
      title: "Insemination",
      desc: "The sperms are injected into the uterus using a thin soft catheter. This is done 36-40 hours after your trigger shot.",
    },
    {
      num: "7",
      title: "Progesterone Support",
      desc: "Micronized progesterone will be given to you to aid in implantation. Beta HCG will be done after 14 days.",
    },
  ];

  return (
    <section id="iui-steps" className="relative overflow-hidden bg-[#f5f6f8] py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            How does the IUI procedure work?
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Steps involved in doing IUI
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
            Below are the steps Dr Mona will take you through during your IUI cycle.
          </p>
        </Reveal>

        {/* 7 Steps Cards Grid */}
        <Stagger className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.05}>
          {steps.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="card-highlight flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#fbcfe0] hover:bg-[#fff0f5] hover:shadow-md sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h3 className="text-[14.5px] font-bold text-ink sm:text-[15px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Button */}
        <Reveal variant="fadeUp" delay={0.2} className="mt-8">
          <a
            href="#iui-cost"
            className="inline-flex items-center justify-center rounded-full border border-blue/40 bg-white px-6 py-2.5 text-[13px] font-semibold text-blue shadow-sm transition-all duration-200 hover:border-blue hover:bg-blue hover:text-white active:scale-95 sm:text-[13.5px]"
          >
            See IUI Process Timetable
          </a>
        </Reveal>
      </div>
    </section>
  );
}
