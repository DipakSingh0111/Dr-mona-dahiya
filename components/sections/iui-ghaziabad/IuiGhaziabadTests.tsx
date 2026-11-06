"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiGhaziabadTests() {
  const tests = [
    {
      num: "1",
      title: "Check tubal status (HSG/HyCosy)",
      desc: "To check if your tubes are open or blocked",
    },
    {
      num: "2",
      title: "Detailed Semen Analysis",
      desc: "Check if there is sufficient total and progressive motility. Also check the TMSC post wash.",
    },
    {
      num: "3",
      title: "Check your ovarian reserve",
      desc: "AMH level and Day 2/3 FSH & LH levels. To help us dose your medication",
    },
    {
      num: "4",
      title: "Ultrasound Scan",
      desc: "We will look for any abnormalities in the uterine cavity such as fibroids/polyps/adenomyosis.",
    },
    {
      num: "5",
      title: "Blood Workup",
      desc: "To rule out any infections. HIV, HBsAg, HCV, VDRL etc",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14 border-t border-slate-100">
      <div className="page-container relative">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Know what you should do before you begin
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-bold tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
            Tests you need to do before starting IUI
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
            So that you don&apos;t waste your money on futile IUI cycles. At our Ghaziabad center we do all the following tests before you begin your IUI journey.
          </p>

          <h3 className="font-serif mt-7 text-[1.12rem] font-bold text-ink sm:text-[1.22rem]">
            What are these tests?
          </h3>
        </Reveal>

        {/* 5 Cards Grid */}
        <Stagger className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" stagger={0.06}>
          {tests.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="card-highlight flex h-full flex-col rounded-2xl border border-[#fde2ec] bg-gradient-to-br from-[#fff7fa] to-[#fff0f5] p-5 shadow-sm transition-all duration-300 hover:border-[#fbcfe0] hover:shadow-md sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h4 className="text-[14.5px] font-bold text-ink sm:text-[15px]">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
