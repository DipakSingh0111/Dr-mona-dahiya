"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaSubway, FaClock, FaDirections, FaExternalLinkAlt } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ContactClinicsSection() {
  const clinics = [
    {
      city: "Noida",
      area: "Sector 49",
      address:
        "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
      landmark: "Above the FirstCry store on Dadri Main Road.",
      gettingThere:
        "Sector 50 Metro (Aqua Line), then a 3-minute auto ride. Blue Line passengers can change at Sector 51/52.",
      hours: "Monday to Saturday, 10:00 AM to 5:00 PM",
      clinicHref: "/best-ivf-doctor-in-noida",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=3rd+Floor+K-06+above+FirstCry+Baraula+Sector+49+Noida",
    },
    {
      city: "Ghaziabad",
      area: "Raj Nagar",
      address:
        "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
      landmark: "In Raj Nagar District Centre (RDC), next to Bikanerwala.",
      gettingThere:
        "RRTS Ghaziabad station or Red Line Metro (Shaheed Sthal / New Bus Adda), then a 10-minute ride. Direct access via Hindon Elevated Road.",
      hours: "Monday to Saturday, 10:00 AM to 5:00 PM",
      clinicHref: "/best-ivf-doctor-in-ghaziabad",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=2nd+Floor+RDC+C-53A+near+Bikanerwala+Raj+Nagar+Ghaziabad",
    },
    {
      city: "Delhi",
      area: "Lajpat Nagar IV",
      address:
        "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
      landmark: "On the main Ring Road, Block Q, Lajpat Nagar IV.",
      gettingThere:
        "Lajpat Nagar Metro (Pink and Violet Lines), then a 5-minute walk.",
      hours: "Monday to Saturday, 10:00 AM to 5:00 PM",
      clinicHref: "/best-ivf-doctor-in-delhi",
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=Building+Number+41+First+Floor+Ring+Road+Block+Q+Lajpat+Nagar+IV+New+Delhi",
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 lg:py-20" style={{ background: "var(--pink)" }}>
      <div className="page-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal variant="fadeUp">
            <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
              Visit Dr. Mona
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
              Our Clinics in Delhi | Noida | Ghaziabad
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12}>
            <p className="mt-3 text-base text-ink/70">
              Open Monday to Saturday, 10:00 AM to 5:00 PM. Book a slot at the clinic closest to you.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clinics.map((clinic, idx) => (
            <StaggerItem key={idx}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-rose/15 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-rose/10 pb-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink">
                        {clinic.city}
                      </h3>
                      <span className="inline-block mt-0.5 rounded bg-rose/10 px-2 py-0.5 text-xs font-semibold text-rose">
                        {clinic.area}
                      </span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose/10 text-rose">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                  </div>

                  {/* Address */}
                  <p className="text-sm font-medium leading-relaxed text-ink/80">
                    {clinic.address}
                  </p>

                  {/* Landmark */}
                  <div className="mt-4 rounded-xl bg-pink/60 p-3 border border-rose/5">
                    <span className="block text-xs font-bold uppercase tracking-wider text-rose">
                      Landmark
                    </span>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/75">
                      {clinic.landmark}
                    </p>
                  </div>

                  {/* Getting there */}
                  <div className="mt-3 flex items-start gap-2 text-xs text-ink/75">
                    <FaSubway className="mt-0.5 shrink-0 text-blue" />
                    <div>
                      <strong className="text-ink">Getting there: </strong>
                      {clinic.gettingThere}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-ink/75">
                    <FaClock className="shrink-0 text-rose" />
                    <span>
                      <strong className="text-ink">Hours: </strong>
                      {clinic.hours}
                    </span>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-rose/10 pt-4">
                  <Link
                    href={clinic.clinicHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose hover:underline"
                  >
                    <span>Clinic page</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </Link>

                  <a
                    href={clinic.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-navy-mid"
                  >
                    <FaDirections className="text-xs" />
                    <span>Get directions</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
