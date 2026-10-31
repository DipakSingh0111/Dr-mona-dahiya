"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaCalendarCheck, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

interface ClinicItem {
  city: string;
  subLocation: string;
  address: string;
  mapsUrl: string;
  clinicLinkText: string;
  clinicSlug: string;
}

const clinics: ClinicItem[] = [
  {
    city: "Noida",
    subLocation: "SECTOR 49",
    address: "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl: "https://maps.google.com/?q=Dr+Mona+Dahiya+Noida+Sector+49",
    clinicLinkText: "IVF in Noida",
    clinicSlug: "/clinics/noida",
  },
  {
    city: "Ghaziabad",
    subLocation: "RAJ NAGAR EXTENSION",
    address: "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl: "https://maps.google.com/?q=Dr+Mona+Dahiya+Ghaziabad+Raj+Nagar",
    clinicLinkText: "IVF in Ghaziabad",
    clinicSlug: "/clinics/ghaziabad",
  },
  {
    city: "Delhi",
    subLocation: "LAJPAT NAGAR",
    address: "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl: "https://maps.google.com/?q=Dr+Mona+Dahiya+Delhi+Lajpat+Nagar",
    clinicLinkText: "IVF in Delhi",
    clinicSlug: "/clinics/delhi",
  },
];

const relatedPages = [
  {
    title: "IVF stories",
    description: "Longer patient stories.",
    href: "/ivf-success-stories",
  },
  {
    title: "IUI stories",
    description: "Patient stories about IUI.",
    href: "/success-stories#iui",
  },
  {
    title: "IVF treatment",
    description: "How IVF works, step by step.",
    href: "/treatments",
  },
  {
    title: "About Dr. Mona Dahiya",
    description: "Her background and training.",
    href: "/about",
  },
  {
    title: "Online consultation",
    description: "Meet Dr. Mona by video.",
    href: "/online-consultation",
  },
];

const reviewsFaq = [
  {
    question: "How are the reviews grouped?",
    answer:
      "Reviews are organized by the specific diagnosis (such as Low AMH, PCOS, first-cycle success), treatment method (IVF, ICSI, IUI, egg freezing), clinic location (Noida, Ghaziabad, Delhi, India), and patient experience aspects.",
  },
  {
    question: "Is the wording of the reviews changed?",
    answer:
      "No. Reviews are presented in patients' own words as shared on verified Google Patient Reviews and direct written feedback, preserving authentic patient experiences.",
  },
  {
    question: "Will my result be the same as in these reviews?",
    answer:
      "Every fertility journey is unique. Individual success rates depend on factors like age, ovarian reserve, sperm parameters, and clinical history. Dr. Mona designs a tailored protocol for your specific reports.",
  },
  {
    question: "Can I have my first consultation online?",
    answer:
      "Yes. A 30-minute video consultation can be scheduled from anywhere in India or internationally to review your previous reports before visiting in person.",
  },
];

export default function PatientReviewsBottomSections() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col bg-[#061532] text-white">
      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="max-w-3xl">
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
              Visit Dr. Mona
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
              Book a consultation at a clinic near you
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online video consultation.
            </p>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {clinics.map((clinic) => (
              <div
                key={clinic.city}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0b1f48]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/40 hover:bg-[#0b1f48] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
              >
                <div>
                  <div className="relative h-32 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050f24]">
                    <svg className="absolute inset-0 h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`map-grid-bottom-${clinic.city}`} width="28" height="28" patternUnits="userSpaceOnUse">
                          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#map-grid-bottom-${clinic.city})`} />
                      <line x1="0" y1="110" x2="350" y2="20" stroke="rgba(232, 62, 116, 0.25)" strokeWidth="7" strokeLinecap="round" />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="relative flex h-10 w-10 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e83e74]/40 opacity-75" />
                        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#e83e74] text-white shadow-md">
                          <FaMapMarkerAlt className="h-3.5 w-3.5" />
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-[11px] font-semibold tracking-wider text-[#e83e74] uppercase">
                      {clinic.subLocation}
                    </span>
                    <h3 className="font-serif mt-1 text-[21px] font-normal text-white">
                      {clinic.city}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/70">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-[12.5px] font-medium">
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300"
                    >
                      <span>Get directions</span>
                      <FaExternalLinkAlt className="h-2.5 w-2.5 opacity-70" />
                    </a>
                    <Link
                      href={clinic.clinicSlug}
                      className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300"
                    >
                      {clinic.clinicLinkText}
                    </Link>
                  </div>
                </div>

                <div className="mt-5 pt-2">
                  <a
                    href="#book-consultation"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-2.5 text-[12.5px] font-medium text-white transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74]"
                  >
                    <FaCalendarCheck className="h-3 w-3 text-white/80" />
                    <span>Book appointment</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
              Keep reading
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
              Related pages
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1f48]/75 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e83e74]/50 hover:bg-[#0b1f48]"
              >
                <div>
                  <h3 className="font-bold text-[15px] text-white transition-colors group-hover:text-[#e83e74]">
                    {page.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-white/70">
                    {page.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <span className="text-[#e83e74] text-[13px] opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal className="mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
              Questions
            </span>
            <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
              About these reviews
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            {reviewsFaq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`group flex flex-col justify-start rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#e83e74]/50 bg-[#0b1f48] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                      : "border-white/10 bg-[#0b1f48]/70 hover:border-white/20 hover:bg-[#0b1f48]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between gap-3 p-4.5 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`text-[14.5px] font-bold transition-colors ${
                        isOpen ? "text-[#e83e74]" : "text-white group-hover:text-[#e83e74]"
                      }`}
                    >
                      {item.question}
                    </h3>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#e83e74] bg-[#e83e74] text-white rotate-180"
                          : "border-white/15 bg-white/5 text-white/70 group-hover:border-white/30 group-hover:text-white"
                      }`}
                    >
                      <FaChevronDown className="h-2.5 w-2.5" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-white/5 px-4.5 pb-4.5 pt-3 text-[13px] leading-relaxed text-white/75">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
