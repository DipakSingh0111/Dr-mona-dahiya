import Link from "next/link";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaCalendarCheck } from "react-icons/fa";

interface ClinicItem {
  city: string;
  subLocation: string;
  address: string;
  mapsUrl: string;
  clinicSlug: string;
}

const clinics: ClinicItem[] = [
  {
    city: "Noida",
    subLocation: "SECTOR 49",
    address: "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    mapsUrl: "https://maps.google.com/?q=Dr+Mona+Dahiya+Noida+Sector+49",
    clinicSlug: "/clinics/noida",
  },
  {
    city: "Ghaziabad",
    subLocation: "RAJ NAGAR",
    address: "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
    mapsUrl: "https://maps.google.com/?q=Dr+Mona+Dahiya+Ghaziabad+Raj+Nagar",
    clinicSlug: "/clinics/ghaziabad",
  },
  {
    city: "Delhi",
    subLocation: "LAJPAT NAGAR",
    address: "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
    mapsUrl: "https://maps.google.com/?q=Dr+Mona+Dahiya+Delhi+Lajpat+Nagar",
    clinicSlug: "/clinics/delhi",
  },
];

export default function IvfSuccessClinics() {
  return (
    <section className="relative overflow-hidden bg-[#061532] px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#0047ca]/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#e83e74]/15 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-[#e83e74] uppercase">
            Visit Dr. Mona
          </span>
          <h2 className="font-serif mt-1 text-[2.2rem] leading-[1.18] font-normal tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
            Book a Consultation at Our Clinics
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
            Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers online consultations.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
          {clinics.map((clinic) => (
            <div
              key={clinic.city}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0b1f48]/75 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#e83e74]/40 hover:bg-[#0b1f48] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <div>
                <div className="relative h-36 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050f24]">
                  <svg
                    className="absolute inset-0 h-full w-full opacity-35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id={`map-grid-${clinic.city}`} width="28" height="28" patternUnits="userSpaceOnUse">
                        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#map-grid-${clinic.city})`} />
                    <line x1="0" y1="120" x2="350" y2="20" stroke="rgba(232, 62, 116, 0.25)" strokeWidth="8" strokeLinecap="round" />
                    <line x1="60" y1="0" x2="280" y2="150" stroke="rgba(0, 71, 202, 0.35)" strokeWidth="5" strokeLinecap="round" />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-11 w-11 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e83e74]/40 opacity-75" />
                      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#e83e74] text-white shadow-lg">
                        <FaMapMarkerAlt className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-semibold tracking-wider text-[#e83e74] uppercase">
                    {clinic.subLocation}
                  </span>
                  <h3 className="font-serif mt-1 text-[22px] font-normal text-white">
                    {clinic.city}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                    {clinic.address}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-4 text-[13px] font-medium">
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300 hover:decoration-cyan-300"
                  >
                    <span>Get directions</span>
                    <FaExternalLinkAlt className="h-2.5 w-2.5 opacity-70" />
                  </a>
                  <Link
                    href={clinic.clinicSlug}
                    className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300 hover:decoration-cyan-300"
                  >
                    Clinic page
                  </Link>
                </div>
              </div>

              <div className="mt-5 pt-2">
                <a
                  href="#book-consultation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:border-[#e83e74] hover:bg-[#e83e74] hover:shadow-md"
                >
                  <FaCalendarCheck className="h-3.5 w-3.5 text-white/80" />
                  <span>Book appointment</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
