"use client";

const tickerItems = [
  "PGT",
  "IVF",
  "ICSI",
  "IUI",
  "Low AMH care",
  "PCOS",
  "Egg freezing",
  "Laparoscopy & hysteroscopy",
];

export default function ServicesTicker() {
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="services-ticker relative z-20 w-full shrink-0 select-none overflow-hidden border-t border-white/10 border-b border-white/25 bg-[#2a1f22] py-2.5 sm:py-3">
      <div className="animate-ticker flex w-max items-center whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="px-3 font-serif text-[14px] font-normal italic tracking-wide text-[#e8d5d8] sm:px-4 sm:text-[15px] md:text-[15.5px]">
              {item}
            </span>
            <span className="select-none px-1 text-[10px] leading-none text-[#e8d5d8]/75">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

