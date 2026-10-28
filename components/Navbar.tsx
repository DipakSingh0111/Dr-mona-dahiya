"use client";

import { useState } from "react";
import siteData from "@/data/site.json";
import {
  CalendarIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
} from "./Icons";

export default function Navbar() {
  const { brand, menu, cta } = siteData.navbar;
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 bg-transparent">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href={brand.href} className="min-w-0 shrink-0">
          <span className="font-display block text-[1.85rem] leading-none font-bold tracking-tight text-white sm:text-[2.1rem]">
            {brand.name}
          </span>
          <span className="mt-1 block text-[11px] font-medium text-white/80 tracking-wide">
            {brand.tagline}
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 lg:flex xl:gap-1.5"
          aria-label="Primary"
        >
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-white/95 uppercase transition-colors hover:text-white xl:px-3 xl:text-[11.5px]"
            >
              {item.label}
              {item.hasDropdown ? (
                <ChevronDownIcon className="size-3 opacity-70" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={cta.href}
            className="hidden items-center gap-2 rounded-xl bg-[#c54866] px-4 py-2.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase shadow-sm transition-all hover:bg-[#b03a55] sm:inline-flex xl:px-5"
          >
            <CalendarIcon className="size-3.5" />
            {cta.label}
          </a>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

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
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#b34562] px-5 py-3 text-[12px] font-bold tracking-[0.08em] text-white uppercase sm:hidden"
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
