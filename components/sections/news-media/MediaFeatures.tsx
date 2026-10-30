"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface MediaArticle {
  publisher: string;
  headline: string;
  color: string;
  url?: string;
}

const mediaArticles: MediaArticle[] = [
  {
    publisher: "Mid-Day",
    headline: "Dr. Mona Dahiya: Meet the Top IVF Doctor in Noida",
    color: "from-[#ea580c] to-[#c2410c]",
  },
  {
    publisher: "Asianet News",
    headline: "Dr. Mona Dahiya | Redefining IVF Success in Ghaziabad",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "IPS News",
    headline: "Embrace Parenthood with the Best IVF Centre in Noida",
    color: "from-[#0047ca] to-[#0037a3]",
  },
  {
    publisher: "APN News",
    headline: "Little Angel IVF is the Leading IVF Centre in Ghaziabad",
    color: "from-[#c53658] to-[#9f1239]",
  },
  {
    publisher: "DNA India",
    headline: "Dr. Mona Dahiya is the Top IVF Doctor in Noida",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "Zee News",
    headline: "Discovering Hope with the Best IVF Doctor in Delhi",
    color: "from-[#6366f1] to-[#4f46e5]",
  },
  {
    publisher: "ThePrint",
    headline: "Dr. Mona Dahiya is the Best IVF Doctor in Ghaziabad",
    color: "from-[#1e293b] to-[#0f172a]",
  },
  {
    publisher: "DNA India",
    headline: "Dr. Mona Dahiya is the Best IVF Doctor in Ghaziabad",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "Republic World",
    headline: "Dr. Mona Dahiya: The Best IVF Doctor in Delhi",
    color: "from-[#be123c] to-[#9f1239]",
  },
  {
    publisher: "APN News",
    headline: "Dr. Mona Dahiya: Redefining IVF & Fertility Care in Ghaziabad",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "My Nation",
    headline: "Dr. Mona Dahiya: Ghaziabad's Best IVF Doctor",
    color: "from-[#ea580c] to-[#c2410c]",
  },
  {
    publisher: "DNA India",
    headline:
      "Dr. Mona Dahiya: Redefining Excellence as the Best IVF Doctor in Delhi",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "News Nation",
    headline:
      "Dr. Mona Dahiya: Revolutionizing Hope as Noida's Best IVF Specialist",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "Free Press Journal",
    headline: "Dr. Mona Dahiya - Best IVF Doctor in Delhi",
    color: "from-[#0284c7] to-[#0369a1]",
  },
  {
    publisher: "Zee Business",
    headline: "Dr. Mona Dahiya - The Best IVF Doctor in Delhi",
    color: "from-[#ea580c] to-[#c2410c]",
  },
  {
    publisher: "ThePrint",
    headline: "Dr. Mona Dahiya - The Best Fertility Doctor in Delhi",
    color: "from-[#1e293b] to-[#0f172a]",
  },
  {
    publisher: "The Tribune",
    headline: "Dr. Mona Dahiya - The Best IVF Doctor in Delhi",
    color: "from-[#1e3a8a] to-[#172554]",
  },
  {
    publisher: "Indian Television",
    headline: "Dr. Mona Dahiya: The Best IVF Doctor in Delhi",
    color: "from-[#c53658] to-[#9f1239]",
  },
  {
    publisher: "DNA India",
    headline: "The Best IVF Doctor in Delhi for Fertility & Reproductive Care",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "DNA India",
    headline:
      "The Best IVF Centre in Noida & Ghaziabad for Fertility Treatment",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "PTI News",
    headline: "Best IVF Treatment Doctor in Delhi",
    color: "from-[#0047ca] to-[#0037a3]",
  },
  {
    publisher: "APN News",
    headline: "Best Fertility Treatment Centre in Noida & Delhi NCR",
    color: "from-[#c53658] to-[#9f1239]",
  },
  {
    publisher: "Bhaskar Live",
    headline:
      "Little Angel IVF: Noida's Premier Destination for Infertility Treatment",
    color: "from-[#f59e0b] to-[#d97706]",
  },
  {
    publisher: "Daily Excelsior",
    headline: "Top 5 Fertility Clinics in India",
    color: "from-[#0284c7] to-[#0369a1]",
  },
  {
    publisher: "Free Press Journal",
    headline: "List of Top 5 IVF Doctors in Delhi",
    color: "from-[#0047ca] to-[#0037a3]",
  },
  {
    publisher: "The Pioneer",
    headline:
      "Pioneering the Future of Parenthood as the Best IVF Doctor in Delhi",
    color: "from-[#0284c7] to-[#0369a1]",
  },
  {
    publisher: "The Assam Tribune",
    headline: "Pioneering IVF Treatment in Ghaziabad",
    color: "from-[#c53658] to-[#9f1239]",
  },
  {
    publisher: "The Sentinel",
    headline: "Dr. Mona Dahiya is Delhi's Best IVF Doctor for Fertility Care",
    color: "from-[#0047ca] to-[#0037a3]",
  },
  {
    publisher: "Deccan Chronicle",
    headline: "Dr. Mona Dahiya is the Best IVF Doctor in Noida",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "DNA India",
    headline:
      "Little Angel IVF Provides Best IVF Treatment in Noida with 90% Success Rates",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "India Shorts",
    headline:
      "Dr. Mona Dahiya on IVF Support for Couples Deciding Parenthood Later",
    color: "from-[#ea580c] to-[#c2410c]",
  },
  {
    publisher: "CEO Insights India",
    headline:
      "Dr Mona Dahiya on Breaking Common Fertility Myths That Confuse Couples",
    color: "from-[#ea580c] to-[#c2410c]",
  },
  {
    publisher: "Feminism in India",
    headline: "Dr Mona Dahiya's Take on Rising Infertility Among India's Youth",
    color: "from-[#db2777] to-[#be185d]",
  },
  {
    publisher: "Business News This Week",
    headline:
      "When Time Becomes the Biggest Factor in Family Planning: Insights from Dr Mona Dahiya",
    color: "from-[#0047ca] to-[#0037a3]",
  },
  {
    publisher: "NewsX",
    headline:
      "How the Best IVF Doctor in Noida, Dr. Mona Dahiya, Simplifies Fertility Treatment",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "The Daily Guardian",
    headline: "What Makes Little Angel IVF the Best IVF Centre in Noida?",
    color: "from-[#1e3a8a] to-[#172554]",
  },
  {
    publisher: "The Second Angle",
    headline:
      "Best IVF Doctor in Delhi, Dr Mona Dahiya, on the New Psychology of Fertility Decision-Making",
    color: "from-[#0284c7] to-[#0369a1]",
  },
  {
    publisher: "The Sunday Guardian",
    headline:
      "Understanding Male Fertility Better with Little Angel IVF, Recognised as the Best IVF Centre in Ghaziabad",
    color: "from-[#881337] to-[#4c0519]",
  },
  {
    publisher: "Business Connect India",
    headline:
      "How Social Media is Changing Fertility Expectations in India - Perspective from the Best IVF Centre in Delhi",
    color: "from-[#0047ca] to-[#0037a3]",
  },
  {
    publisher: "India Pharma Outlook",
    headline:
      "Personalized Fertility Care at Little Angel IVF, Best IVF Centre in Delhi",
    color: "from-[#0284c7] to-[#0369a1]",
  },
  {
    publisher: "Zee News",
    headline:
      "Rising Infertility Fuels Demand for the Best IVF Doctor in Noida",
    color: "from-[#6366f1] to-[#4f46e5]",
  },
  {
    publisher: "DNA India",
    headline:
      "What Makes an IVF Specialist the Best IVF Doctor in Noida?",
    color: "from-[#e11d48] to-[#be123c]",
  },
  {
    publisher: "eMedicoDiary",
    headline:
      "Beyond One-Size-Fits-All: Insights from the Best IVF Doctor in Noida",
    color: "from-[#0ea5e9] to-[#0284c7]",
  },
];

export default function MediaFeatures() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section Header matching Screenshot */}
        <Reveal className="mb-10 sm:mb-12">
          <span className="text-[12px] font-bold tracking-[0.14em] text-[#e83e74] uppercase sm:text-[13px]">
            As featured in
          </span>

          <h2 className="font-display mt-2 text-[2rem] leading-[1.18] font-bold tracking-tight text-[#0f2438] sm:text-[2.65rem] lg:text-[2.85rem]">
            Media Features
          </h2>

          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Interviews and feature articles about Dr. Mona Dahiya and her
            fertility care in Delhi, Noida and Ghaziabad. Click a publication to
            read the article.
          </p>
        </Reveal>

        {/* 4-Columns Grid of Publication Cards */}
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5.5"
          stagger={0.03}
        >
          {mediaArticles.map((article, idx) => (
            <StaggerItem key={idx} variant="scaleIn" className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0047ca]/40 hover:shadow-lg">
                <div>
                  {/* Top Header Banner with Publisher Name */}
                  <div
                    className={`flex h-16 w-full items-center justify-center bg-gradient-to-r px-4 text-center shadow-xs ${article.color}`}
                  >
                    <span className="font-display text-[15px] font-bold tracking-tight text-white drop-shadow-xs sm:text-[16px]">
                      {article.publisher}
                    </span>
                  </div>

                  {/* Headline in Card Body */}
                  <div className="p-5 sm:p-5.5">
                    <h3 className="font-display text-[13.5px] leading-snug font-bold text-[#0f2438] transition-colors group-hover:text-[#0047ca] sm:text-[14px]">
                      {article.headline}
                    </h3>
                  </div>
                </div>

                {/* Read Article Link */}
                <div className="px-5 pb-5 pt-0 sm:px-5.5 sm:pb-5.5">
                  <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#e83e74] transition-colors group-hover:text-[#0047ca] group-hover:underline">
                    <span>Read article</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Highlighted Disclaimer Footer */}
        <div className="mt-10 flex flex-wrap items-center sm:mt-12">
          <div className="inline-flex items-center gap-2.5 rounded-2xl border border-[#0047ca]/20 bg-gradient-to-r from-[#eff6ff] via-[#f8fafc] to-[#fff1f5] px-4 py-2.5 text-[12.5px] font-medium text-[#1e293b] shadow-xs sm:rounded-full sm:px-5 sm:text-[13px]">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0047ca] text-[11px] font-bold text-white shadow-xs">
              i
            </span>
            <span>
              Articles open on the publisher&apos;s website. Publication names
              and logos belong to their respective owners.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

