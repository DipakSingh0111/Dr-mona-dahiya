"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function PgtFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is PGT in IVF and how does it work?",
      a: "As mentioned above we biopsy embryos formed during your IVF cycle and test them by NGS. This helps us know which of your embryos are Normal (Euploid) and which are Abnormal (Aneuploid). You can then choose to do FET of only Euploid embryos.",
    },
    {
      q: "What is the difference between PGT-A, PGT-M, and PGT-SR?",
      a: "PGT-A is used to check if embryo is chromosomally normal or not. PGT-M is used to find if embryo has a genetic mutation that can lead to single gene disorder. And PGT-SR is used to check if there is any translocation in the embryos.",
    },
    {
      q: "What is the cost of PGT testing in Delhi NCR?",
      a: "You can expect to pay for IVF cycle + biopsy cost + genetics lab. (Depends on number of embryos sent). If you want to do PGT-M there is a charge to design probes. Then you will pay for your Embryo Freezing cost + Frozen Embryo transfer. We will let you know after consulting with you.",
    },
    {
      q: "Does laser biopsy during PGT damage the developing embryo?",
      a: "As we only pick 4-6 cells from the outside of the embryo (which will later become your placenta) it has less than 1% chance of harming the embryo. Most embryo survive after biopsy as well.",
    },
    {
      q: "Can PGT guarantee a 100% successful pregnancy?",
      a: "Though it cannot guarantee you will get a 100% success rate. But it increases your chances of pregnancy from normal IVF to 65-70%. It also decreases your chances of miscarriage from 30% to less than 8-10%.",
    },
    {
      q: "Can PGT test for autism, gender, or all genetic diseases?",
      a: "No you cannot. PGT-A will only tell you if you have normal number of chromosomes. PGT-M will only test for that particular mutation. It won't test for all diseases. Also in India it is illegal to know gender of the embryo. We will never disclose the gender.",
    },
    {
      q: "How long does it take to get PGT genetic test results?",
      a: "It takes around 2 to 3 weeks for us to receive your embryo results from genetics. During this time your uterus will heal and you can do Frozen Embryo transfer next cycle.",
    },
    {
      q: "What is an embryo mosaicism result in PGT-A?",
      a: "Some embryos will be normal and some can have few cells that are abnormal. If they have low percentage of cells that are abnormal then they can self correct. And lead to healthy babies. We will discuss in detail with you what options you have with Mosaic Embryos.",
    },
    {
      q: "Can you do PGT testing on already frozen embryos?",
      a: "Yes if you have previously done IVF and your embryos weren't biopsied. Then we can thaw them and biopsy them and wait for results. Though the chance of your embryo surviving is lesser than those biopsied before freezing.",
    },
    {
      q: "Does PGT-A prevent miscarriages?",
      a: "Yes it can reduce your chance of miscarriages due to chromosomal errors. As most miscarriages happen because of this reason. But we will also evaluate you for other causes that can lead to miscarriage.",
    },
    {
      q: "Is PGT testing worth it for women under 35?",
      a: "If you don't have any problem and are young. Then we don't advise doing PGT. Because there will be less abnormal embryos anyway. But if you have had failed implantations, miscarriages, know that you are carrier for any disease or have male factor infertility. Then yes it can help.",
    },
    {
      q: "Where does Dr. Mona Dahiya offer PGT?",
      a: "We do PGT at our clinics located in Noida 3rd floor, K-06 above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh - 201301, Ghaziabad 2nd Floor, RDC, C-53A near Bikanerwala, Sector 15, Sector 10 Raj Nagar, Ghaziabad, Uttar Pradesh - 201002 and Delhi Building No- 41, 1st Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi - 110024. Mon- Sat from 10am - 5pm. We also do online consultation.",
    },
  ];

  const leftFaqs = faqs.slice(0, 6);
  const rightFaqs = faqs.slice(6, 12);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const renderCard = (faq: { q: string; a: string }, originalIdx: number) => {
    const isOpen = openIdx === originalIdx;
    return (
      <div
        key={originalIdx}
        className={`group rounded-[18px] border transition-all duration-300 ${
          isOpen
            ? "border-rose/40 bg-white shadow-[0_8px_24px_rgba(232,62,116,0.08)]"
            : "border-[#fde2ec] bg-white hover:border-rose/30 hover:shadow-sm"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(originalIdx)}
          className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
          aria-expanded={isOpen}
        >
          <span className="text-[14.5px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[15.5px]">
            {faq.q}
          </span>
          <span
            className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
              isOpen
                ? "rotate-180 bg-rose text-white"
                : "bg-rose/10 text-rose group-hover:bg-rose/20"
            }`}
          >
            <FaChevronDown className="size-3" />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-0 text-[13px] leading-relaxed text-ink/75 sm:px-6 sm:pb-6 sm:text-[13.5px]">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Questions Patients Ask Us
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
            Top FAQs About PGT in Delhi | Noida | Ghaziabad
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq, i) => renderCard(faq, i))}
          </div>
          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq, i) => renderCard(faq, i + 6))}
          </div>
        </div>
      </div>
    </section>
  );
}
