"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";

const PAGE_YOUTUBE_MAP: Record<string, string> = {
  "/best-ivf-doctor-in-noida": "https://youtu.be/REnMRstrP9o?si=JwO5laKhf82E881E",
  "/best-ivf-doctor-in-ghaziabad": "https://youtu.be/SRdBLMtivE8?si=IsEFNXtN8HPK2BW4",
  "/best-ivf-doctor-in-delhi": "https://youtu.be/kJGVmM2YEQY?si=yUYE34aGD3YDc-8f",
  "/ivf-treatment": "https://youtu.be/G_pzHoh3vPA?si=d03_ul-PilqVmS9u",
  "/intracytoplasmic-sperm-injection-icsi-treatment": "https://www.youtube.com/@drmonadahiya",
  "/iui-treatment": "https://youtube.com/shorts/oTEn5KkzJuU?si=MHyxK0Qppl2PPbmI",
  "/frozen-embryo-transfer": "https://www.youtube.com/shorts/-zs1Yrfm2AM",
  "/blastocyst-transfer": "https://www.youtube.com/@drmonadahiya",
  "/minimal-stimulation-mini-ivf": "https://youtube.com/shorts/e4bbQ8PeOow?si=INfQBT6HsCAMSaIX",
  "/best-laser-assisted-hatching-doctor-in-noida": "https://www.youtube.com/@drmonadahiya",
  "/best-egg-freezing-center-in-noida": "https://www.youtube.com/watch?v=zCd6FB6IBGw&t=2s",
  "/semen-sperm-freezing": "https://www.youtube.com/@drmonadahiya",
  "/embryo-cryopreservation": "https://www.youtube.com/shorts/nc6iYhQ-aWw",
  "/oncofertility-cancer-fertility-preservation": "https://www.youtube.com/@drmonadahiya",
  "/preimplantation-genetic-testing-pgt-center-in-noida": "https://www.youtube.com/shorts/TRGjnXN0KJc",
  "/platelet-rich-plasma-prp-ivf-treatment-in-noida": "https://www.youtube.com/@drmonadahiya",
  "/endometrial-receptivity-analysis-era-test-in-noida": "https://www.youtube.com/shorts/-ZKoCH0oOBY",
  "/follicular-ultrasound": "https://www.youtube.com/shorts/yDszHrS9Lyc",
  "/sperm-dna-fragmentation-test": "https://www.youtube.com/@drmonadahiya",
  "/hysteroscopy-treatment": "https://www.youtube.com/shorts/mDfURxqIXZU",
  "/donor-gametes": "https://www.youtube.com/@drmonadahiya",
  "/surgical-sperm-retrieval-tesa-pesa": "https://www.youtube.com/@drmonadahiya",
  "/female-infertility-treatment": "https://youtube.com/shorts/RFQhH2fX9KY?si=w0HtiWND0wkMMPM_",
  "/best-low-amh-treatment-in-noida": "https://www.youtube.com/shorts/qQ_EowoSRiM",
  "/best-pcos-pcod-treatment-centre-in-noida": "https://youtu.be/h3Dm2VJx0ec?si=LSxhmxwIBMR7kt_W",
  "/endometriosis-fertility-treatment": "https://youtube.com/shorts/NaAM-mW8Pek?si=5_FpQq-ez-bif8SC",
  "/fallopian-tube-blockage-treatment": "https://www.youtube.com/@drmonadahiya",
  "/recurrent-implantation-failure-rif": "https://www.youtube.com/@drmonadahiya",
  "/male-infertility-treatment": "https://youtu.be/hwyQ0Pr1twE?si=V_XHGre3pt0XMs93",
  "/best-iui-doctor-in-noida": "https://youtube.com/shorts/oTEn5KkzJuU?si=MHyxK0Qppl2PPbmI",
  "/best-iui-doctor-in-delhi": "https://youtube.com/shorts/oTEn5KkzJuU?si=MHyxK0Qppl2PPbmI",
  "/best-iui-doctor-in-ghaziabad": "https://youtube.com/shorts/oTEn5KkzJuU?si=MHyxK0Qppl2PPbmI",
  "/second-opinion-failed-ivf": "https://www.youtube.com/@drmonadahiya",
};

export interface VideoInsightsSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  videoHref?: string;
  instagramHref?: string;
}

export default function VideoInsightsSection({
  title,
  imageSrc,
  imageAlt,
  videoHref,
  instagramHref = "https://www.instagram.com/drmonadahiya/",
}: VideoInsightsSectionProps) {
  const pathname = usePathname() || "/";
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const resolvedVideoHref =
    videoHref ?? PAGE_YOUTUBE_MAP[normalized] ?? "https://www.youtube.com/@drmonadahiya";
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <Reveal variant="slideLeft">
            <div>
              <p className="font-semibold tracking-wide text-rose">
                Video Insights
              </p>
              <h2 className="mt-2 max-w-md tracking-tight text-ink">
                {title}
              </h2>
            </div>
          </Reveal>

          <Reveal variant="slideRight" delay={0.06}>
            <div className="mx-auto w-full max-w-[600px] lg:mr-0 lg:ml-auto">
              <a
                href={resolvedVideoHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} — Watch video`}
                className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#fde2ec] bg-white shadow-[0_14px_38px_rgba(15,36,56,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-[0_20px_48px_rgba(232,62,116,0.16)]"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>

              <p className="mt-2.5 text-[11.5px] text-ink/70 sm:text-[12px]">
                Also watch on{" "}
                <a
                  href={resolvedVideoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink/85 underline-offset-2 hover:text-rose hover:underline"
                >
                  YouTube
                </a>{" "}
                and{" "}
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink/85 underline-offset-2 hover:text-rose hover:underline"
                >
                  Instagram
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
