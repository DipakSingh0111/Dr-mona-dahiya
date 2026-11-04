"use client";

import type { ReactNode } from "react";

export type NumberedCardItem = {
  number: string;
  title: string;
  description: ReactNode;
};

export function NumberedCard({ number, title, description }: NumberedCardItem) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-6">
      <div>
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-[15px] font-bold text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
            {number}
          </span>
          <h3 className="font-serif pt-0.5 text-[1.05rem] leading-snug font-semibold text-black sm:text-[1.12rem]">
            {title}
          </h3>
        </div>
        <p className="mt-3.5 text-[13px] leading-relaxed text-black sm:text-[13.5px]">
          {description}
        </p>
      </div>
    </div>
  );
}
