"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  ChecklistRow,
  CostFactorCard,
  TreatmentSection,
  TreatmentSectionHeader,
} from "@/components/ui/treatment";

const linkClass =
  "font-semibold text-blue underline underline-offset-2 transition-colors hover:text-rose";

const pillar1 = [
  {
    title: "Scan for follicles",
    description: (
      <>
        We perform{" "}
        <Link href="/follicular-ultrasound" className={linkClass}>
          scan to monitor follicles
        </Link>{" "}
        during natural cycle or IUI cycles.
      </>
    ),
  },
  {
    title: "IUI",
    description: (
      <>
        This is performed for patients suffering from{" "}
        <Link href="/iui-treatment" className={linkClass}>
          unexplained and mild male factor infertility
        </Link>
        .
      </>
    ),
  },
  {
    title: "Ovulation Induction",
    description:
      "We will help you conceive by performing ovulation induction with letrozole in case of PCOD.",
  },
  {
    title: "Semen testing and sperm DNA fragmentation",
    description: (
      <>
        CASA and halo test. We will evaluate your partners report and help him
        with{" "}
        <Link href="/sperm-dna-fragmentation-test" className={linkClass}>
          sperm DNA fragmentation
        </Link>{" "}
        if indicated.
      </>
    ),
  },
  {
    title: "Hormone Evaluation",
    description:
      "This includes AMH, FSH, estradiol which will give us information about how many eggs you have left and their quality.",
  },
];

const pillar2 = [
  {
    title: "IVF",
    description: (
      <>
        If above mentioned treatments fail then we will help you with{" "}
        <Link href="/ivf-treatment" className={linkClass}>
          IVF
        </Link>{" "}
        which includes stimulation of ovaries to produce more eggs.
      </>
    ),
  },
  {
    title: "ICSI + Microfluidics",
    description: (
      <>
        If there is high male factor or sperm DNA fragmentation we will do{" "}
        <Link
          href="/intracytoplasmic-sperm-injection-icsi-treatment"
          className={linkClass}
        >
          ICSI
        </Link>
        .
      </>
    ),
  },
  {
    title: "Blastocyst Transfer",
    description: (
      <>
        We help you with{" "}
        <Link href="/blastocyst-transfer" className={linkClass}>
          blastocyst transfer
        </Link>{" "}
        which gives you chance of single embryo transfer.
      </>
    ),
  },
  {
    title: "Egg, embryo & Sperm Vitrification",
    description: (
      <>
        You can freeze your{" "}
        <Link href="/best-egg-freezing-center-in-noida" className={linkClass}>
          eggs
        </Link>
        ,{" "}
        <Link href="/embryo-cryopreservation" className={linkClass}>
          embryo
        </Link>{" "}
        and{" "}
        <Link href="/semen-sperm-freezing" className={linkClass}>
          sperms
        </Link>{" "}
        with us at any time.
      </>
    ),
  },
  {
    title: "PGT A / PGT M",
    description:
      "We will perform pgt if needed based on your evaluation.",
  },
];

const pillar3 = [
  {
    title: "Laparoscopy & hysteroscopy",
    description: (
      <>
        In this procedure we correct septum or polyps in your uterus. Read more
        about it{" "}
        <Link href="/hysteroscopy-treatment" className={linkClass}>
          here
        </Link>
        .
      </>
    ),
  },
  {
    title: "Clipping Of Hydrosalpinx",
    description:
      "This procedure helps increase pregnancy rate in IVF by blocking your tube and draining fluid from the blocked tube.",
  },
  {
    title: "Myomectomy And Cystectomy",
    description:
      "We remove fibroids and chocolate cysts from your uterus and ovaries but preserve your ovary as well.",
  },
  {
    title: "Intrauterine PRP",
    description: (
      <>
        This can be helpful if you are suffering from thin lining. Read more{" "}
        <Link
          href="/platelet-rich-plasma-prp-ivf-treatment-in-noida"
          className={linkClass}
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    title: "Endometrial receptivity assay",
    description: (
      <>
        <Link
          href="/endometrial-receptivity-analysis-era-test-in-noida"
          className={linkClass}
        >
          ERA test
        </Link>{" "}
        can be done in cases where embryo keeps failing to implant.
      </>
    ),
  },
];

const detailedServices = [
  {
    title: "IVF",
    href: "/ivf-treatment",
    desc: "If you want to have baby through IVF, we help you with proper drug dosages to stimulate your follicles and perform blastocyst transfer.",
  },
  {
    title: "ICSI",
    href: "/intracytoplasmic-sperm-injection-icsi-treatment",
    desc: "We inject sperm inside egg if there is high male factor or DNA frag.",
  },
  {
    title: "IUI",
    href: "/iui-treatment",
    desc: "This is first line of treatment we suggest to our patients who suffer from unexplained or cervix cause of infertility.",
  },
  {
    title: "Blastocyst Transfer",
    href: "/blastocyst-transfer",
    desc: "Helpful in transferring one embryo on Day 5.",
  },
  {
    title: "Mini IVF",
    href: "/minimal-stimulation-mini-ivf",
    desc: "Helps those patients who have low AMH and not able to bear higher dosage of drugs.",
  },
  {
    title: "Laser Assisted Hatching",
    href: "/best-laser-assisted-hatching-doctor-in-noida",
    desc: "Laser hatching can be performed on embryo whose shell is more thick than normal.",
  },
  {
    title: "Egg Freezing",
    href: "/best-egg-freezing-center-in-noida",
    desc: "Freeze your eggs if you are not planning on getting pregnant.",
  },
  {
    title: "Oncofertility",
    href: "/oncofertility-cancer-fertility-preservation",
    desc: "Freeze your eggs, sperm and embryo in case you are suffering from cancer.",
  },
  {
    title: "PRP Treatment",
    href: "/platelet-rich-plasma-prp-ivf-treatment-in-noida",
    desc: "We perform PRP in case you have low lining or low ovarian reserve.",
  },
  {
    title: "ERA Test",
    href: "/endometrial-receptivity-analysis-era-test-in-noida",
    desc: "Can help you know when is the right time for you to transfer embryo.",
  },
  {
    title: "Ultrasound To Monitor Follicles",
    href: "/follicular-ultrasound",
    desc: "We will help you get pregnant naturally by monitoring your follicles.",
  },
  {
    title: "Laparoscopy & Hysteroscopy",
    href: "/hysteroscopy-treatment",
    desc: "We correct abnormalities in pelvis by performing surgery.",
  },
  {
    title: "Donor Programme",
    href: "/donor-gametes",
    desc: "If you need egg or sperm we will perform donor egg or sperm cycle for you.",
  },
  {
    title: "Causes For Female Infertility",
    href: "/female-infertility-treatment",
    desc: "Let's identify why you are unable to conceive.",
  },
  {
    title: "Low AMH Treatment",
    href: "/best-low-amh-treatment-in-noida",
    desc: "You can still have your biological child with our help.",
  },
  {
    title: "PCOD/PCOS Treatment",
    href: "/best-pcos-pcod-treatment-centre-in-noida",
    desc: "We help you manage PCOD/PCOS so you don't develop complications while doing IVF.",
  },
  {
    title: "Recurrent Miscarriages",
    href: "/miscarriage-treatment-in-noida",
    desc: "If you lose multiple times in row we can help you identify the causes of miscarriage.",
  },
  {
    title: "Frozen Embryo Transfer",
    href: "/frozen-embryo-transfer",
    desc: "We will transfer your frozen embryos.",
  },
  {
    title: "Embryo Freezing",
    href: "/embryo-cryopreservation",
    desc: "We help you to freeze your leftover embryos after doing IVF.",
  },
  {
    title: "Sperm Freezing",
    href: "/semen-sperm-freezing",
    desc: "We help your partner to freeze his sperms.",
  },
  {
    title: "Azoospermia",
    href: "/azoospermia-treatment",
    desc: "We help you to retrieve sperm directly from scrotum and inject inside eggs using ICSI.",
  },
  {
    title: "Failure Of Implantation",
    href: "/recurrent-implantation-failure-rif",
    desc: "If your embryos fail to implant repeatedly we will evaluate all possible reasons for it.",
  },
];

function PillarGroup({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: ReactNode }[];
}) {
  return (
    <div className="mt-9">
      <h3 className="font-serif border-b border-ink/20 pb-2.5 text-[1.15rem] font-semibold text-ink sm:text-[1.25rem]">
        {title}
      </h3>
      <Stagger
        delay={0.04}
        className="mt-5 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {items.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <CostFactorCard
              title={item.title}
              icon={<FaCheck className="size-3.5" />}
              description={item.description}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default function OurServicesPillars() {
  return (
    <>
      {/* Our Services Across 3 Clinical Pillars */}
      <TreatmentSection className="bg-white">
        <TreatmentSectionHeader
          eyebrow="Services We Provide"
          title="Our Services Across 3 Clinical Pillars"
          subtitle="We have broken down all services into three categories. Each of these are interlinked with each other and take you to next set of procedure."
        />

        <PillarGroup
          title="Diagnostic Procedure and Primary Treatment"
          items={pillar1}
        />
        <PillarGroup title="Advanced Reproductive Medicine" items={pillar2} />
        <PillarGroup
          title="Treatment and Implantation Support"
          items={pillar3}
        />
      </TreatmentSection>

      {/* Detailed Clinical Service Pages */}
      <TreatmentSection className="bg-pink">
        <TreatmentSectionHeader
          eyebrow="All Services We Offer"
          title="Detailed Clinical Service Pages"
          subtitle="Click on any of these link for detailed information."
        />

        <Stagger
          delay={0.03}
          className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {detailedServices.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <Link
                href={service.href}
                className="card-highlight group flex h-full items-center justify-between gap-4 rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_16px_36px_rgba(232,62,116,0.12)]"
              >
                <div className="min-w-0">
                  <h3 className="font-serif text-[1rem] font-semibold text-ink transition-colors group-hover:text-rose sm:text-[1.0625rem]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/75 sm:text-[13px]">
                    {service.desc}
                  </p>
                </div>
                <FaArrowRight className="size-3.5 shrink-0 text-rose/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-rose" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>

      {/* Why Consult Dr. Mona Dahiya? */}
      <TreatmentSection className="bg-white">
        <TreatmentSectionHeader
          eyebrow="Know More About Us"
          title="Why Consult Dr. Mona Dahiya?"
        />

        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-3.5">
          <Reveal variant="fadeUp" delay={0.03}>
            <ChecklistRow>
              She is Gold Medalist in MBBS from Lady Hardinge. She got Gold
              Medal again when she finished md from Mamc. She completed her Dnb
              and was fellow at singapore general hospital. Has more than 25
              years of experience.
            </ChecklistRow>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.07}>
            <ChecklistRow>
              We have state of art lab with class 10000 filtered air. Incubators
              which help you with mini IVF and vitrification.
            </ChecklistRow>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.11}>
            <ChecklistRow>
              We have 3 locations for consultation. Noida · Ghaziabad · Delhi
            </ChecklistRow>
          </Reveal>
        </div>
      </TreatmentSection>
    </>
  );
}
