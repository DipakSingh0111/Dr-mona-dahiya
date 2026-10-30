"use client";

import { useState } from "react";
import siteData from "@/data/site.json";
import {
  CalendarIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from "./Icons";
import { FaStar, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const { brand, menu, cta } = siteData.navbar;
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 bg-transparent">
      {/* Brand row — light gradient, minimal glow (no heavy blur) */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(105deg, #003db8 0%, #0047ca 50%, #0d55d0 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[40%] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 90% 50%, rgba(140,200,255,0.35) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-2 lg:px-8 xl:py-3">
          <a href={brand.href} className="min-w-0 shrink-0">
            <span className="font-display block text-[1.45rem] leading-none font-bold tracking-tight whitespace-nowrap text-white sm:text-[1.6rem] lg:text-[1.65rem] xl:text-[2.1rem]">
              {brand.name}
            </span>
            <span className="mt-1 block text-[10px] font-medium tracking-wide whitespace-nowrap text-white/85 xl:text-[11px]">
              {brand.tagline}
            </span>
          </a>

          <div className="hidden shrink-0 items-center gap-3.5 md:flex lg:gap-4 xl:gap-5">
            <a
              href="tel:+919267982924"
              className="flex shrink-0 items-center gap-2 text-[13px] font-semibold whitespace-nowrap text-white transition-opacity hover:opacity-90 xl:text-[15px]"
            >
              <PhoneIcon className="size-3.5 shrink-0 rotate-[-10deg] text-white/90 xl:size-4" />
              <span className="tracking-wide tabular-nums">+91 92679 82924</span>
            </a>

            <a
              href="https://wa.me/919267982924"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_0_16px_rgba(37,211,102,0.55)] transition-transform hover:scale-105 active:scale-95 xl:size-9"
            >
              <FaWhatsapp className="size-4.5 xl:size-5" />
            </a>

            <div
              className="flex shrink-0 items-center gap-2 rounded-xl border border-white/35 px-3 py-1 whitespace-nowrap shadow-sm xl:px-3.5 xl:py-1.5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,30,100,0.55) 0%, rgba(0,50,140,0.35) 100%)",
              }}
            >
              <div className="flex items-center gap-0.5 text-[#f5a524]">
                <FaStar className="size-2.5 fill-current xl:size-3" />
                <FaStar className="size-2.5 fill-current xl:size-3" />
                <FaStar className="size-2.5 fill-current xl:size-3" />
                <FaStar className="size-2.5 fill-current xl:size-3" />
                <FaStar className="size-2.5 fill-current xl:size-3" />
              </div>
              <span className="text-[11.5px] font-bold text-white xl:text-[12.5px]">4.9</span>
              <span className="text-[10.5px] font-medium text-white/85 xl:text-[11px]">
                Google patient reviews
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/919267982924"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-8 items-center justify-center rounded-full bg-[#25d366] text-white shadow-sm"
            >
              <FaWhatsapp className="size-4" />
            </a>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-white/20 text-white"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu row — Deep Royal Navy bar with subtle border & rose hover accent (desktop only) */}
      <div
        className="relative z-10 hidden border-y border-white/12 shadow-[0_4px_14px_rgba(4,18,48,0.25)] lg:block"
        style={{
          background:
            "linear-gradient(90deg, #061e52 0%, #09296e 50%, #061e52 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-4 py-1 sm:px-6 sm:py-1 lg:gap-4 lg:px-8 xl:py-1.5">
          <nav
            className="hidden items-center gap-1 lg:flex xl:gap-3"
            aria-label="Primary"
          >
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11.5px] font-semibold tracking-[0.05em] text-white/95 uppercase whitespace-nowrap transition-all hover:bg-white/8 hover:text-[#f9b4c4] xl:px-3.5 xl:py-2 xl:text-[13.5px] xl:tracking-[0.07em]"
              >
                <span>{item.label}</span>
                {item.hasDropdown ? (
                  <ChevronDownIcon className="size-3 shrink-0 opacity-70 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-[#f9b4c4] group-hover:opacity-100 xl:size-3.5" />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 py-0.5 lg:block xl:py-1">
            <a
              href={cta.href}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#c54866] px-4 py-2 text-[11.5px] font-bold tracking-[0.07em] text-white uppercase whitespace-nowrap shadow-[0_4px_14px_rgba(197,72,102,0.4)] transition-all hover:bg-[#b03a55] xl:px-6 xl:py-2.5 xl:text-[13.5px] xl:tracking-[0.08em]"
            >
              <CalendarIcon className="size-3.5 shrink-0 xl:size-4" />
              {cta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[rgba(8,33,73,0.96)] px-4 py-4 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-0.5" aria-label="Mobile">
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold tracking-wide text-white uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.hasDropdown ? (
                  <ChevronDownIcon className="size-4 opacity-70" />
                ) : null}
              </a>
            ))}
            <a
              href={cta.href}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#b34562] px-5 py-3 text-[12px] font-bold tracking-[0.08em] text-white uppercase"
              onClick={() => setOpen(false)}
            >
              <CalendarIcon className="size-3.5" />
              {cta.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
