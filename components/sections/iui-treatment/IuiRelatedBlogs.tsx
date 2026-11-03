"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function IuiRelatedBlogs() {
  const items = [
    {
      title: "IUI",
      desc: "Learn more about IUI. What to expect, timeline and costs.",
      href: "/best-iui-doctor-in-noida",
      isBlog: false,
    },
    {
      title: "IVF Doctor in Noida",
      desc: "Looking for IVF?",
      href: "/best-ivf-doctor-in-noida",
      isBlog: false,
    },
    {
      title: "About Dr. Mona Dahiya",
      desc: "Want to know more about Dr. Mona?",
      href: "/about-mona-dahiya",
      isBlog: false,
    },
    {
      title: "What is the IUI Procedure?",
      desc: "",
      href: "#",
      isBlog: true,
    },
    {
      title: "Why did my IUI Fail?",
      desc: "",
      href: "#",
      isBlog: true,
    },
    {
      title: "How much does IUI cost in Noida?",
      desc: "",
      href: "#",
      isBlog: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 border-t border-white/10">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal variant="fadeUp">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase sm:text-[13px]">
            Blog Posts
          </span>

          <h2 className="font-serif mt-2 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
            Things you may be interested in.
          </h2>
        </Reveal>

        {/* 6 Grid Cards */}
        <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5" stagger={0.05}>
          {items.map((item, idx) => (
            <StaggerItem key={idx}>
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#091a3c]/75 p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0047ca]/50 hover:bg-[#0c224e] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] sm:p-6"
              >
                <div>
                  <h3 className="font-serif text-[1.1rem] font-medium text-white transition-colors group-hover:text-teal-300 sm:text-[1.2rem]">
                    {item.title}
                  </h3>
                  {item.desc ? (
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-300">
                      {item.desc}
                    </p>
                  ) : null}
                  {item.isBlog ? (
                    <span className="mt-3 inline-block text-[11px] font-medium text-slate-400">
                      Blog Post
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex justify-end">
                  <span className="flex size-7 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-200 group-hover:bg-[#e83e74] group-hover:text-white">
                    <FaArrowRight className="size-2.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

