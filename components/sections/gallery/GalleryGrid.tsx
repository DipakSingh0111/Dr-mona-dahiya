"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "clinic-noida",
    title: "Noida IVF Centre",
    subtitle: "Advanced IVF Lab & Consultation Chambers",
    image: "/images/noida.jpeg",
  },
  {
    id: "award-times",
    title: "Times Network India Health Summit & Awards 2025",
    subtitle: "Felicitation for Excellence in IVF & Reproductive Medicine",
    image: "/images/publications/awards/times-health-award.jpg",
  },
  {
    id: "clinic-reception",
    title: "Patient Consultation & Reception",
    subtitle: "Nayra Fertility and IVF Centre",
    image: "/images/about-mona-dahiya/book-a-appointment.jpg",
  },
  {
    id: "clinic-delhi",
    title: "Delhi Lajpat Nagar Centre",
    subtitle: "State-of-the-art Fertility Care Facilities",
    image: "/images/delhi.png",
  },
  {
    id: "award-stage",
    title: "National Health Excellence Awards",
    subtitle: "Keynote Address on Advances in Reproductive Medicine",
    image: "/images/publications/awards/times-health-stage.jpg",
  },
  {
    id: "clinic-ghaziabad",
    title: "Ghaziabad Raj Nagar Centre",
    subtitle: "Full-service Infertility & Embryology Lab",
    image: "/images/ghaziabad.jpeg",
  },
  {
    id: "award-asia",
    title: "Asia Healthcare Leadership Summit",
    subtitle: "Honor for Over 25 Years of Clinical Excellence",
    image: "/images/publications/awards/asia-food-felicitation.jpg",
  },
  {
    id: "award-panel",
    title: "International IVF Expert Panel",
    subtitle: "Panel Discussion on Recurrent Implantation Failure",
    image: "/images/publications/awards/ivf-summit-panel.jpg",
  },
];

export default function GalleryGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-7 lg:py-8">
      <div className="page-container relative">
        {/* Gallery Grid */}
        <Stagger
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6.5"
          stagger={0.05}
        >
          {galleryItems.map((item) => (
            <StaggerItem key={item.id} variant="scaleIn" className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-[15px] font-bold text-black transition-colors group-hover:text-blue sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-black">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
