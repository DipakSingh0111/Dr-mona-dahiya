"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/treatment";

const linkClass =
  "font-medium text-blue underline underline-offset-2 hover:text-blue-dark";

type FaqItem = { q: string; a: ReactNode };

type FaqSection = {
  id: string;
  categoryLabel: string;
  title: string;
  left: FaqItem[];
  right: FaqItem[];
};

const sections: FaqSection[] = [
  {
    id: "clinical",
    categoryLabel: "Category 1",
    title: "Clinical Process & Expectations",
    left: [
      {
        q: "What is the difference between conventional IVF and ICSI?",
        a: (
          <>
            In Normal IVF your eggs are mixed with millions of washed sperm. In
            case of{" "}
            <Link
              href="/intracytoplasmic-sperm-injection-icsi-treatment"
              className={linkClass}
            >
              ICSI
            </Link>{" "}
            we select 1 sperm per egg that is retrieved and place that sperm
            inside the egg. Using ICSI can help if there is severe male factor
            and poor fertilization in past attempts.
          </>
        ),
      },
      {
        q: "How long does one complete IVF cycle take?",
        a: "It takes approx 12 to 14 days. You begin your stimulation on day 2 of your cycle till we retrieve your eggs. If you are opting for a frozen transfer you will require 2-3 weeks for preparation of your uterus lining and 1 more blood test after 14 days.",
      },
      {
        q: "Is egg retrieval painful?",
        a: "No. You are put to sleep for 15-20 minutes under IV sedation. There could be some cramps after your procedure which subside with regular medication.",
      },
      {
        q: "How many hormone injections are needed?",
        a: "It's given once a day. These are subcutaneous injections using very thin needles, as thin as the insulin needle that people who have diabetes use.",
      },
    ],
    right: [
      {
        q: "Do I need to stay in hospital?",
        a: "No. Both egg retrieval and embryo transfer are day care procedures. You may want to rest at home after but you should be in and out of our clinic within 2-3 hours.",
      },
      {
        q: "Which tests are needed before IVF?",
        a: "Scan of your eggs (antral follicle count), semen analysis for your husband, ultrasound to see your uterine cavity, blood tests to check your hormone levels (thyroid, prolactin etc.) and blood tests to rule out any infections for both of you.",
      },
      {
        q: "When will I know if IVF worked?",
        a: "After 14 days from transfer. Blood test (Beta-hCG) for pregnancy is done on the 14th day from date of fresh transfer (12-14 days for frozen blastocyst transfer).",
      },
    ],
  },
  {
    id: "transfer",
    categoryLabel: "Category 2",
    title: "Embryo Transfer, Bed Rest & Safety",
    left: [
      {
        q: "Is strict bed rest needed after embryo transfer?",
        a: 'NO! Studies have proven that resting does not help your embryos implant, and you also cannot "drop" your embryos Take some rest after your transfer at our clinic and return home to do normal activities. Just don\'t lift anything heavy for minimum 1 week.',
      },
      {
        q: "How many embryos should be transferred?",
        a: (
          <>
            Just 1 embryo. Dr. Dahiya does elective single{" "}
            <Link href="/blastocyst-transfer" className={linkClass}>
              blastocyst transfer
            </Link>{" "}
            whenever possible. This gives you the best chance of pregnancy and
            reduces the risk of multiple pregnancy and preterm births.
          </>
        ),
      },
      {
        q: "Are frozen transfers as effective as fresh transfers?",
        a: (
          <>
            YES! We use the vitrification method to freeze your embryos, which
            has given us survival rates of over 95%.{" "}
            <Link href="/frozen-embryo-transfer" className={linkClass}>
              Frozen transfers
            </Link>{" "}
            also have better IVF success rates than fresh cycles because we can
            optimize your uterine lining with medication without giving you high
            doses of hormones.
          </>
        ),
      },
      {
        q: "Does IVF increase the risk of birth defects?",
        a: "Approximately 95%. Risk of birth defect is slightly higher compared to natural pregnancy but we will explain this to you in detail during your visit.",
      },
    ],
    right: [
      {
        q: "What is OHSS and how is it prevented?",
        a: "OHSS means Ovarian Hyper Stimulating Syndrome. It occurs when your body responds too much to your stimulation drugs. By following antagonist protocol and using a lower dose of stimulation we can prevent OHSS. Also customizing your dose and trigger shot and doing a freeze-all will reduce the chances of getting OHSS.",
      },
      {
        q: "Can I work during IVF?",
        a: "Yes. Most of our patients take their injection and go to office/work on the same day. You might have to take 1 or 2 days leave for your retrieval.",
      },
      {
        q: "What should I avoid after transfer?",
        a: "Don't do any hard exercises or lift heavy weights, no smoking/alcohol and no hot baths till you have taken your pregnancy test.",
      },
    ],
  },
  {
    id: "complex",
    categoryLabel: "Category 3",
    title: "Complex Conditions, Success Rates & Costs",
    left: [
      {
        q: "Can I have IVF with my own eggs if my AMH is below 0.5 ng/mL?",
        a: (
          <>
            Yes we do. We test your egg reserve by doing a blood test called
            AMH. We can perform egg enhancement techniques such as DuoStim
            protocol or{" "}
            <Link href="/minimal-stimulation-mini-ivf" className={linkClass}>
              mini IVF
            </Link>{" "}
            to help you conceive with your own eggs.
          </>
        ),
      },
      {
        q: "What causes recurrent implantation failure?",
        a: (
          <>
            Some reasons can be chromosomal abnormality of your embryos, chronic
            endometritis (which we diagnose through CD138 test) or your uterine
            cavity being abnormal/wrong implantation window (
            <Link
              href="/endometrial-receptivity-analysis-era-test-in-noida"
              className={linkClass}
            >
              ERA Test
            </Link>
            ).
          </>
        ),
      },
      {
        q: "What is the success rate of IVF with Dr. Mona Dahiya?",
        a: "At package clinics the success rate is more than 90%. Individual women can achieve a success rate of more than 90% if their age is below 30 years. When we talk about frozen blastocyst transfer the success rates depend upon the clinic and range between 65% to 80% if the woman's age is below 35 years.",
      },
      {
        q: "How much does IVF cost?",
        a: (
          <>
            For most women we charge anywhere between ₹1.5L - ₹2.5L for 1 full
            IVF cycle (including fresh/frozen transfer). We offer EMI facility.
            Please{" "}
            <Link href="/ivf-cost-emi" className={linkClass}>
              click here for information on IVF Cost & EMI
            </Link>
            .
          </>
        ),
      },
    ],
    right: [
      {
        q: "Does age affect IVF success?",
        a: "Yes. Your chances of getting pregnant are highest below the age of 35. After 38-40 your fertility starts decreasing because your egg quality declines. This is another reason why you should come in for an infertility evaluation when you want to have a baby, instead of waiting for some time and realizing you are having irregular cycles.",
      },
      {
        q: "How many IVF cycles might I need?",
        a: "Most couples will achieve pregnancy using their fresh embryos in their first or second cycle of IVF. Your chances of getting pregnant increase with each cycle of IVF if you do fresh transfers and freeze your remaining embryos.",
      },
      {
        q: "Can PCOS or endometriosis affect IVF?",
        a: (
          <>
            Yes. Both{" "}
            <Link
              href="/best-pcos-pcod-treatment-centre-in-noida"
              className={linkClass}
            >
              IVF in PCOS
            </Link>{" "}
            and endometriosis give great results with IVF. There are special
            protocols used in PCOS IVF which help prevent OHSS. Endometriosis
            can be corrected prior to IVF using medications that preserve your
            eggs or through surgery.
          </>
        ),
      },
    ],
  },
  {
    id: "legal",
    categoryLabel: "Category 4",
    title: "Legal Rules, Consultations & Clinics",
    left: [
      {
        q: "Is sex selection allowed with IVF in India?",
        a: "No. Sex selection is not allowed in India. According to the ART Act and PC-PNDT Act it's not legal to provide or advise anyone to do sex selection.",
      },
      {
        q: "What are the age limits for IVF in India?",
        a: (
          <>
            Women can undergo IVF between the age of 21-50 years. Men can do IVF
            between age 21-55 years.
            <br />
            <Link href="/terms-of-service" className={linkClass}>
              Click here to read more about laws regarding ART.
            </Link>
          </>
        ),
      },
      {
        q: "Can I consult Dr. Dahiya online first?",
        a: (
          <>
            Yes. You can book an{" "}
            <Link href="/ivf-consultation-online" className={linkClass}>
              online appointment
            </Link>{" "}
            with us for ₹1,000 (if you are located in India) and $25 if
            you&apos;re watching this from outside India.
          </>
        ),
      },
    ],
    right: [
      {
        q: "Where can I consult Dr. Mona Dahiya?",
        a: "We are located in Noida/Ghaziabad/Delhi. Please click on clinic location above to find our phone number and address of individual clinic.",
      },
      {
        q: "Can single women have IVF in India?",
        a: "Yes, you can do IVF if you are a single woman using your own eggs in India. There are 2 conditions that you must fulfill: you must be an Indian citizen, with a female government issued ID proof that you were born as a female. If you are a single woman and are married and living overseas you can use donor sperm that has been imported from India from an ART licensed clinic.",
      },
      {
        q: "Does insurance cover IVF?",
        a: (
          <>
            Insurance does not pay for IVF as it is an elective procedure. A few
            good corporate/women friendly insurance companies are offering a
            limited amount towards IVF but they have a huge waiting period. See{" "}
            <Link href="/ivf-cost-emi" className={linkClass}>
              IVF Cost & EMI
            </Link>
            .
          </>
        ),
      },
    ],
  },
];

export default function IvfFaqsContent() {
  const { categories } = siteData.ivfFaqsPage;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="text-black">
      {/* Category Navigation (White) */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14 border-y border-[#fde2ec]/70">
        <div className="page-container relative">
          <Reveal className="mb-7 sm:mb-9">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Browse by topic
            </p>
            <h2 className="font-serif mt-2 text-[1.9rem] leading-tight font-bold tracking-tight text-black sm:text-[2.4rem]">
              Choose a Question Category
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollTo(cat.id)}
                className="card-highlight group flex h-full flex-col rounded-[20px] border border-[#fde2ec] bg-white p-5 text-left shadow-[0_8px_24px_rgba(232,62,116,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/45 hover:shadow-[0_14px_32px_rgba(232,62,116,0.15)]"
              >
                <h3 className="font-serif text-[1.15rem] font-semibold leading-snug text-black sm:text-[1.25rem]">
                  {cat.label}
                </h3>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-black">
                  {cat.meta}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating FAQ Categories: Even index = Pink, Odd index = White */}
      {sections.map((section, idx) => {
        const isWhite = idx % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-36 py-10 sm:py-12 lg:py-14 ${
              isWhite
                ? "bg-white border-y border-[#fde2ec]/70"
                : "bg-pink"
            }`}
          >
            <div className="page-container relative">
              <Reveal className="mb-7 sm:mb-9">
                <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
                  {section.categoryLabel}
                </p>
                <h2 className="font-serif mt-2 max-w-3xl text-[1.9rem] leading-tight font-bold tracking-tight text-black sm:text-[2.4rem]">
                  {section.title}
                </h2>
              </Reveal>

              <FaqAccordion
                leftItems={section.left.map((item) => ({
                  question: item.q,
                  answer: item.a,
                }))}
                rightItems={section.right.map((item) => ({
                  question: item.q,
                  answer: item.a,
                }))}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}
