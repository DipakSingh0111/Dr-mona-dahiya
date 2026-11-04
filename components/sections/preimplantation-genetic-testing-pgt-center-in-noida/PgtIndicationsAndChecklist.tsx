"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtIndicationsAndChecklist() {
  const indications = [
    {
      num: "1",
      title: "If you are above 35 years of age",
      desc: "Your eggs start to have increased amount of chromosomal error as you age. From age 35 onwards around 50-70% of embryos may be chromosomally abnormal even if they look normal on the outside.",
    },
    {
      num: "2",
      title: "Repeated Failed IVF cycles (Failed Implantations)",
      desc: (
        <>
          If you have gone through 2 or more failed IVF cycles despite having
          good grade embryos.{" "}
          <Link
            href="/recurrent-implantation-failure-rif"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Read More on Failed Implantations
          </Link>
          .
        </>
      ),
    },
    {
      num: "3",
      title: "Male Factor Infertility",
      desc: "If you have very high level of DNA Fragmentation (above 30%) or low motility of sperm. There are increased chances of sperm being aneuploid as well.",
    },
    {
      num: "4",
      title: "Genetic Disorder",
      desc: "If you both are found to be carriers for any known genetic disease by pre-conception screening.",
    },
    {
      num: "5",
      title: "Translocation/Inversion",
      desc: "If one of the couple is found to be having inversion or translocation of chromosome by Karyotyping.",
    },
    {
      num: "6",
      title: "Want to do Single Embryo Transfer",
      desc: "Doing a single embryo transfer with PGT gives you better chances of having one baby rather than twins.",
    },
  ];

  const checklistItems = [
    {
      title: "Karyotyping of both Partners",
      desc: "To check if there is any inversion/translocation or other chromosomal error.",
    },
    {
      title: "Couples Carrier Screen by NGSs",
      desc: "To see if you are both are carriers for any autosomal or X linked disorders. (Needed to make probes for PGT-M)",
    },
    {
      title: "Check Your Ovarian Reserve",
      desc: "By doing your AMH and counting your baseline follicle count we can predict how many blastocysts you will likely form.",
    },
    {
      title: "Semen Analysis + Sperm DFI",
      desc: "To check shape and DNA fragmentation of your sperm.",
    },
    {
      title: "Evaluate Your Uterus",
      desc: (
        <>
          By doing a 3D SIS or Hysteroscopy we can ensure that your uterus will
          accept a frozen embryo in future. Read more about{" "}
          <Link
            href="/frozen-embryo-transfer"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Embryo transfer
          </Link>{" "}
          here.
        </>
      ),
    },
    {
      title: "If you want to do PGT-M",
      desc: "We need to collect your and your partner's samples to create genetic probes. It takes approx. 3 to 6 weeks to make custom probes for single gene disease.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            When to opt for PGT?
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
            Indications: Who Needs PGT Testing?
          </h2>
          <p className="mt-2 max-w-4xl text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
            With the help of PGT we can increase the success rate of your IVF
            treatment by selecting the best embryo. Dr Mona Dahiya advises her
            patients to consider doing PGT if you fall in any of these
            categories.
          </p>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {indications.map((item) => (
            <StaggerItem key={item.num}>
              <div className="group flex h-full flex-col rounded-[20px] border border-[#fde2ec] bg-white p-5.5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(232,62,116,0.35)]">
                    {item.num}
                  </span>
                  <h3 className="text-[15px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 text-[13.5px] leading-relaxed text-ink/75">
                  {item.desc}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              What tests do you need before starting?
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
              Diagnostic Checklist: Tests Required Before Starting PGT
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
              Dr Mona Dahiya follows following protocol before you begin PGT.
            </p>
          </Reveal>

          <Stagger stagger={0.06} className="space-y-3.5 sm:space-y-4">
            {checklistItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-3.5 rounded-[18px] border border-[#fde2ec] bg-white p-4.5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:border-rose/35 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)] sm:p-5">
                  <FaCheckCircle className="mt-1 size-5 shrink-0 text-rose" />
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink sm:text-[15.5px]">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                      {item.desc}
                    </div>
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
