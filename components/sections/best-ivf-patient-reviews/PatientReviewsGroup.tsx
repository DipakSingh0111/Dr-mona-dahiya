"use client";

import { Reveal } from "@/components/ui/Reveal";

interface ReviewCard {
  title?: string;
  body: string;
  author: string;
  source: string;
  avatarLetter: string;
}

interface ReviewSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  col1: ReviewCard[];
  col2: ReviewCard[];
  col3: ReviewCard[];
}

export default function PatientReviewsGroup({
  id,
  eyebrow,
  title,
  subtitle,
  col1,
  col2,
  col3,
}: ReviewSectionProps) {
  const renderCard = (rev: ReviewCard, idx: number) => (
    <div
      key={idx}
      className="group flex flex-col justify-between rounded-[20px] border border-[#fde2ec] bg-white p-5 backdrop-blur-md transition-all duration-300 hover:border-rose/40 hover:bg-pink hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
    >
      <div>
        {rev.title ? (
          <h3 className="mb-2 text-[15px] font-bold text-black transition-colors group-hover:text-rose sm:text-[16px]">
            {rev.title}
          </h3>
        ) : null}
        <p className="text-[12.5px] leading-relaxed text-black sm:text-[13px]">
          {rev.body}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3 pt-1">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose text-[13px] font-bold text-white shadow-md">
          {rev.avatarLetter}
        </div>
        <div>
          <p className="text-[12.5px] font-bold text-black sm:text-[13px]">
            {rev.author}
          </p>
          <p className="text-[11px] text-black">
            {rev.source}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id={id} className="relative overflow-hidden bg-pink py-6 text-ink sm:py-7 lg:py-8 scroll-mt-24">
      <div className="page-container relative">
        <Reveal className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-rose uppercase">
            {eyebrow}
          </span>
          <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.18] font-bold tracking-tight text-black sm:text-[2.2rem] lg:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-black sm:text-[14.5px]">
            {subtitle}
          </p>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            {col1.map((item, idx) => renderCard(item, idx))}
          </div>

          <div className="flex flex-col gap-4">
            {col2.map((item, idx) => renderCard(item, idx))}
          </div>

          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            {col3.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
