"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const whyPoints = [
  {
    title: "Convenient Location",
    desc: "Our clinic is located at Ring Road, Lajpat Nagar. Close to Violet/Pink Line metro station.",
  },
  {
    title: "Qualifications",
    desc: "Gold Medalist in MBBS & MD. Done DNB and Fellowship in Singapore General Hospital in IVF. More than 100 Publications to her name.",
  },
  {
    title: "Protocol customised to you",
    desc: "All protocols are based on your individual parameters like scan, hormonal levels etc.",
  },
];

export default function BestIvfDelhiWhy() {
  return (
    <section className="relative overflow-hidden bg-pink px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            About Us
          </p>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-black sm:text-[2.2rem] lg:text-[2.45rem]">
            Why Choose Dr. Mona Dahiya for IVF in Delhi?
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Stagger className="flex flex-col gap-4 lg:col-span-7" stagger={0.08}>
            {whyPoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-3.5 rounded-xl border border-[#fde2ec] bg-white px-4 py-3.5 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-[#fff0f5] sm:px-5 sm:py-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
                    <FaCheck className="size-3" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-semibold text-black sm:text-[1.05rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variant="scaleIn" className="lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[22px] border border-[#fde2ec] shadow-[0_20px_50px_rgba(0,10,40,0.4)]">
              <Image
                src="/images/about-mona-dahiya/iui-benefits-doctor.jpg"
                alt="Dr. Mona Dahiya - IVF in Delhi"
                width={600}
                height={587}
                className="h-auto w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
