"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type BannerTone = "rose" | "blue" | "navy";

interface MediaArticle {
  publisher: string;
  headline: string;
  tone: BannerTone;
}

const bannerToneClass: Record<BannerTone, string> = {
  rose: "from-rose to-rose-dark",
  blue: "from-blue to-blue-dark",
  navy: "from-navy to-navy-mid",
};

const mediaArticles: MediaArticle[] = [
  {
    publisher: "Mid-Day",
    headline: "Dr. Mona Dahiya: Meet the Top IVF Doctor in Noida",
    tone: "rose",
  },
  {
    publisher: "Asianet News",
    headline: "Dr. Mona Dahiya | Redefining IVF Success in Ghaziabad",
    tone: "rose",
  },
  {
    publisher: "IPS News",
    headline: "Embrace Parenthood with the Best IVF Centre in Noida",
    tone: "blue",
  },
  {
    publisher: "APN News",
    headline: "Little Angel IVF is the Leading IVF Centre in Ghaziabad",
    tone: "rose",
  },
  {
    publisher: "DNA India",
    headline: "Dr. Mona Dahiya is the Top IVF Doctor in Noida",
    tone: "rose",
  },
  {
    publisher: "Zee News",
    headline: "Discovering Hope with the Best IVF Doctor in Delhi",
    tone: "blue",
  },
  {
    publisher: "ThePrint",
    headline: "Dr. Mona Dahiya is the Best IVF Doctor in Ghaziabad",
    tone: "navy",
  },
  {
    publisher: "DNA India",
    headline: "Dr. Mona Dahiya is the Best IVF Doctor in Ghaziabad",
    tone: "rose",
  },
  {
    publisher: "Republic World",
    headline: "Dr. Mona Dahiya: The Best IVF Doctor in Delhi",
    tone: "rose",
  },
  {
    publisher: "APN News",
    headline: "Dr. Mona Dahiya: Redefining IVF & Fertility Care in Ghaziabad",
    tone: "rose",
  },
  {
    publisher: "My Nation",
    headline: "Dr. Mona Dahiya: Ghaziabad's Best IVF Doctor",
    tone: "blue",
  },
  {
    publisher: "DNA India",
    headline:
      "Dr. Mona Dahiya: Redefining Excellence as the Best IVF Doctor in Delhi",
    tone: "rose",
  },
  {
    publisher: "News Nation",
    headline:
      "Dr. Mona Dahiya: Revolutionizing Hope as Noida's Best IVF Specialist",
    tone: "rose",
  },
  {
    publisher: "Free Press Journal",
    headline: "Dr. Mona Dahiya – Best IVF Doctor in Delhi",
    tone: "blue",
  },
  {
    publisher: "Zee Business",
    headline: "Dr. Mona Dahiya – The Best IVF Doctor in Delhi",
    tone: "rose",
  },
  {
    publisher: "ThePrint",
    headline: "Dr. Mona Dahiya – The Best Fertility Doctor in Delhi",
    tone: "navy",
  },
  {
    publisher: "The Tribune",
    headline: "Dr. Mona Dahiya – The Best IVF Doctor in Delhi",
    tone: "navy",
  },
  {
    publisher: "Indian Television",
    headline: "Dr. Mona Dahiya: The Best IVF Doctor in Delhi",
    tone: "rose",
  },
  {
    publisher: "DNA India",
    headline: "The Best IVF Doctor in Delhi for Fertility & Reproductive Care",
    tone: "rose",
  },
  {
    publisher: "DNA India",
    headline:
      "The Best IVF Centre in Noida & Ghaziabad for Fertility Treatment",
    tone: "rose",
  },
  {
    publisher: "PTI News",
    headline: "Best IVF Treatment Doctor in Delhi",
    tone: "blue",
  },
  {
    publisher: "APN News",
    headline: "Best Fertility Treatment Centre in Noida & Delhi NCR",
    tone: "rose",
  },
  {
    publisher: "Bhaskar Live",
    headline:
      "Little Angel IVF: Noida's Premier Destination for Infertility Treatment",
    tone: "rose",
  },
  {
    publisher: "Daily Excelsior",
    headline: "Top 5 Fertility Clinics in India",
    tone: "blue",
  },
  {
    publisher: "Free Press Journal",
    headline: "List of Top 5 IVF Doctors in Delhi",
    tone: "blue",
  },
  {
    publisher: "The Pioneer",
    headline:
      "Pioneering the Future of Parenthood as the Best IVF Doctor in Delhi",
    tone: "blue",
  },
  {
    publisher: "The Assam Tribune",
    headline: "Pioneering IVF Treatment in Ghaziabad",
    tone: "rose",
  },
  {
    publisher: "The Sentinel",
    headline: "Dr. Mona Dahiya is Delhi's Best IVF Doctor for Fertility Care",
    tone: "blue",
  },
  {
    publisher: "Deccan Chronicle",
    headline: "Dr. Mona Dahiya is the Best IVF Doctor in Noida",
    tone: "rose",
  },
  {
    publisher: "DNA India",
    headline:
      "Little Angel IVF Provides Best IVF Treatment in Noida with 90% Success Rates",
    tone: "rose",
  },
  {
    publisher: "India Shorts",
    headline:
      "Dr. Mona Dahiya on IVF Support for Couples Deciding Parenthood Later",
    tone: "rose",
  },
  {
    publisher: "CEO Insights India",
    headline:
      "Dr Mona Dahiya on Breaking Common Fertility Myths That Confuse Couples",
    tone: "rose",
  },
  {
    publisher: "Feminism in India",
    headline: "Dr Mona Dahiya's Take on Rising Infertility Among India's Youth",
    tone: "rose",
  },
  {
    publisher: "Business News This Week",
    headline:
      "When Time Becomes the Biggest Factor in Family Planning: Insights from Dr Mona Dahiya",
    tone: "blue",
  },
  {
    publisher: "NewsX",
    headline:
      "How the Best IVF Doctor in Noida, Dr. Mona Dahiya, Simplifies Fertility Treatment",
    tone: "rose",
  },
  {
    publisher: "The Daily Guardian",
    headline: "What Makes Little Angel IVF the Best IVF Centre in Noida?",
    tone: "navy",
  },
  {
    publisher: "The Second Angle",
    headline:
      "Best IVF Doctor in Delhi, Dr Mona Dahiya, on the New Psychology of Fertility Decision-Making",
    tone: "blue",
  },
  {
    publisher: "The Sunday Guardian",
    headline:
      "Understanding Male Fertility Better with Little Angel IVF, Recognised as the Best IVF Centre in Ghaziabad",
    tone: "rose",
  },
  {
    publisher: "Business Connect India",
    headline:
      "How Social Media is Changing Fertility Expectations in India – Perspective from the Best IVF Centre in Delhi",
    tone: "blue",
  },
  {
    publisher: "India Pharma Outlook",
    headline:
      "Personalized Fertility Care at Little Angel IVF, Best IVF Centre in Delhi",
    tone: "blue",
  },
  {
    publisher: "Zee News",
    headline:
      "Rising Infertility Fuels Demand for the Best IVF Doctor in Noida",
    tone: "navy",
  },
  {
    publisher: "DNA India",
    headline:
      "What Makes an IVF Specialist the Best IVF Doctor in Noida?",
    tone: "rose",
  },
  {
    publisher: "eMedicoDiary",
    headline:
      "Beyond One-Size-Fits-All: Insights from the Best IVF Doctor in Noida",
    tone: "blue",
  },
];

export default function MediaFeatures() {
  return (
    <section className="relative overflow-hidden bg-pink py-6 sm:py-8 lg:py-10">
      <div className="page-container relative">
        <Reveal className="mb-8 sm:mb-10">
          <p className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
            As featured in
          </p>

          <h2 className="font-serif mt-1.5 text-[2rem] leading-[1.18] font-normal tracking-tight text-ink sm:text-[2.5rem] lg:text-[2.75rem]">
            Media Features
          </h2>

          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-ink/80 sm:text-[14.5px]">
            Browse interviews and feature stories about Dr. Mona Dahiya and her
            approach to fertility care.
          </p>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
          stagger={0.025}
        >
          {mediaArticles.map((article, idx) => (
            <StaggerItem key={idx} variant="scaleIn" className="h-full">
              <article className="card-highlight group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-rose/20 bg-white shadow-[0_4px_18px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/45 hover:shadow-[0_12px_28px_rgba(232,62,116,0.14)]">
                <div>
                  <div
                    className={`flex h-20 w-full items-center justify-center bg-gradient-to-r px-4 text-center ${bannerToneClass[article.tone]}`}
                  >
                    <span className="font-display text-[15px] font-bold tracking-tight text-white sm:text-[16px]">
                      {article.publisher}
                    </span>
                  </div>

                  <div className="p-5 sm:p-5.5">
                    <h3 className="font-display text-[13.5px] leading-snug font-bold text-ink transition-colors group-hover:text-blue sm:text-[14px]">
                      {article.headline}
                    </h3>
                  </div>
                </div>

                <div className="px-5 pt-0 pb-5 sm:px-5.5 sm:pb-5.5">
                  <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-rose transition-colors group-hover:text-blue group-hover:underline">
                    <span>Read article</span>
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-6 text-[12px] leading-relaxed text-ink/70 sm:mt-8 sm:text-[12.5px]">
          Articles open on the publisher&apos;s website. Publication names and
          logos belong to their respective owners.
        </p>
      </div>
    </section>
  );
}
