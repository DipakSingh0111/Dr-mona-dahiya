"use client";

import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

export type CostFactorItem = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
};

export function CostFactorCard({ title, description, icon }: CostFactorItem) {
  return (
    <div className="card-highlight relative flex h-full flex-col justify-between rounded-2xl border border-[#fde2ec] bg-white p-5 shadow-[0_10px_30px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b4cb] hover:shadow-[0_18px_40px_rgba(232,62,116,0.12)] sm:p-6">
      <div>
        <div className="flex items-center gap-3">
          <span className="card-badge flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose text-white shadow-[0_2px_8px_rgba(232,62,116,0.4)]">
            {icon ?? <FaCheck className="size-3.5" />}
          </span>
          <h3 className="font-serif text-[1rem] leading-snug font-semibold text-black sm:text-[1.0625rem]">
            {title}
          </h3>
        </div>
        <div className="mt-4 text-[13.5px] leading-relaxed text-black sm:text-[14px]">
          {description}
        </div>
      </div>
    </div>
  );
}
