"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiDelhiRelated() {
  const items = [
    {
      title: "IUI treatment",
      desc: "The full procedure, timetable and cost.",
      href: "#iui-steps",
    },
    {
      title: "IVF doctor in Delhi",
      desc: "If IUI is not the right fit.",
      href: "/best-ivf-doctor-in-delhi",
    },
    {
      title: "IUI doctor in Noida",
      desc: "Dr. Mona's IUI page for Noida.",
      href: "/best-iui-doctor-in-noida",
    },
    {
      title: "IUI doctor in Ghaziabad",
      desc: "Dr. Mona's IUI page for Ghaziabad.",
      href: "#",
    },
    {
      title: "About Dr. Mona Dahiya",
      desc: "Her background and training.",
      href: "/about-mona-dahiya",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] sm:text-[13px]">
            Keep reading
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Related pages and articles
          </h2>
        </Reveal>

        <Stagger
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          stagger={0.05}
        >
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0047ca]/50 hover:bg-[#0c224e] sm:p-6"
              >
                <span className="absolute top-4 right-4 text-[#e83e74] transition-transform duration-200 group-hover:translate-x-0.5">
                  <FaArrowRight className="size-3" />
                </span>
                <div className="pr-8">
                  <h3 className="font-serif text-[1.1rem] font-medium text-white transition-colors group-hover:text-teal-300 sm:text-[1.2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
