"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDelhiTests() {
  const tests = [
    {
      num: "1",
      title: "Check If Fallopian Tubes Are Open (HSG/Laparoscopy)",
      desc: "This is to see if there is at least one patent tube which can pick up the egg.",
    },
    {
      num: "2",
      title: "Semen Analysis and Total Motile Count",
      desc: "Checks Volume, Morphology and Post Wash Count of sperm.",
    },
    {
      num: "3",
      title: "Blood Hormone Levels",
      desc: "FSH, LH and Estradiol on Day 2/3 and Anti Mullerian Hormone to check ovarian reserve.",
    },
    {
      num: "4",
      title: "Ultrasound Scan",
      desc: "Scan of the Pelvis to rule out any Sub Mucosal Fibroid or Polyp. To check size of Ovarian Cyst if present.",
    },
    {
      num: "5",
      title: "Serology",
      desc: "Both partners will be tested for HIV, HBsAg, HCV and VDRL.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#fde2ec] bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase sm:text-[13px]">
            Before You Begin
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Tests Required Before Starting IUI
          </h2>

          <p className="mt-2.5 max-w-3xl text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
            Dr Mona Dahiya would perform certain tests at her clinic in Delhi
            before she prescribes any stimulation. These tests help us identify
            if you are likely to get pregnant with IUI.
          </p>

          <h3 className="font-serif mt-7 text-[1.12rem] font-semibold text-black sm:text-[1.22rem]">
            Tests Performed
          </h3>
        </Reveal>

        <Stagger
          className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          stagger={0.06}
        >
          {tests.map((item) => (
            <StaggerItem key={item.num} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-rose/25 bg-white p-5 shadow-[0_0_20px_rgba(232,62,116,0.08)] backdrop-blur-md transition-all duration-300 hover:border-rose/45 hover:bg-[#fff0f5] sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_2px_10px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h4 className="text-[14.5px] font-bold leading-snug text-black sm:text-[15px]">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
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
