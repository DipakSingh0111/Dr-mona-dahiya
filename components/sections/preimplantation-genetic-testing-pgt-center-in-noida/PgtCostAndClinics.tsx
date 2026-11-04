"use client";

import Link from "next/link";
import {
  FaSyringe,
  FaMicroscope,
  FaDna,
  FaVial,
  FaSnowflake,
  FaCalendarCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function PgtCostAndClinics() {
  const costFactors = [
    {
      title: "Cost of IVF/ICSI cycle",
      desc: "Which includes your stimulation meds, monitoring, egg collection and culture till day 5/6.",
      icon: FaSyringe,
    },
    {
      title: "Cost of Biopsy",
      desc: "There is a fee charged by our lab to biopsy your embryos using laser. It varies based on cycle.",
      icon: FaMicroscope,
    },
    {
      title: "Cost of Genetics Lab",
      desc: "This can vary based on how many embryos you are sending. If you send 4 to 8 it will be more expensive.",
      icon: FaDna,
    },
    {
      title: "Custom Probes for PGT-M",
      desc: "If you want to do PGT-M we need to design probes specific to your family. So this will add to your cost.",
      icon: FaVial,
    },
    {
      title: "Embryo Freezing Cost",
      desc: (
        <>
          Since you will need to freeze your blastocysts until you receive your
          result. You will pay for embryo freezing and storage. Read more about{" "}
          <Link
            href="/embryo-cryopreservation"
            className="font-medium text-blue underline underline-offset-2 hover:text-blue-dark"
          >
            Embryo Freezing
          </Link>
          .
        </>
      ),
      icon: FaSnowflake,
    },
    {
      title: "Frozen Embryo Transfer Cost",
      desc: "Finally you will need to do your Frozen Embryo transfer. This involves lining meds, scan and transferring the embryo.",
      icon: FaCalendarCheck,
    },
  ];

  const clinics = [
    {
      sector: "SECTOR 49",
      city: "Noida",
      address:
        "3rd Floor, K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
      mapUrl:
        "https://maps.google.com/?q=3rd+Floor+K-06+Sector+49+Noida+201301",
      clinicUrl: "/best-ivf-doctor-in-noida",
    },
    {
      sector: "RAJ NAGAR",
      city: "Ghaziabad",
      address:
        "2nd Floor, RDC, C-53A, near Bikanervala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
      mapUrl:
        "https://maps.google.com/?q=RDC+C-53A+Raj+Nagar+Ghaziabad+201002",
      clinicUrl: "/best-ivf-doctor-in-ghaziabad",
    },
    {
      sector: "LAJPAT NAGAR",
      city: "Delhi",
      address:
        "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024",
      mapUrl:
        "https://maps.google.com/?q=Building+41+Lajpat+Nagar+IV+New+Delhi+110024",
      clinicUrl: "/best-ivf-doctor-in-delhi",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{ background: "var(--pink)" }}
    >
      <div className="page-container relative">
        <Reveal className="mb-6 sm:mb-8">
          <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
            Cost of Preimplantation Genetic Testing
          </p>
          <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
            PGT Cost Factors &amp; Pricing Variables in Delhi | Noida |
            Ghaziabad
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
            IVF with PGT has various cost component. These include-
          </p>
        </Reveal>

        <Stagger
          stagger={0.05}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {costFactors.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="group flex h-full flex-col rounded-[20px] border border-[#fde2ec] bg-white p-5.5 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)]">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose text-white shadow-[0_4px_14px_rgba(232,62,116,0.35)]">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-3.5 text-[15px] font-bold text-ink transition-colors group-hover:text-rose sm:text-[16px]">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-[13px] leading-relaxed text-ink/75 sm:text-[13.5px]">
                    {item.desc}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-12 sm:mt-16">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-[12px] font-bold tracking-[0.14em] text-rose uppercase sm:text-[13px]">
              Visit Dr. Mona
            </p>
            <h2 className="font-serif mt-1 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.1rem] lg:text-[2.35rem]">
              Book a Consultation at Our Clinics
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
              Dr. Mona sees patients in Noida, Ghaziabad and Delhi, and offers
              online consultations.
            </p>
          </Reveal>

          <Stagger
            stagger={0.06}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {clinics.map((c) => (
              <StaggerItem key={c.city}>
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-[#fde2ec] bg-white p-6 shadow-[0_8px_24px_rgba(232,62,116,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rose/35 hover:shadow-[0_14px_36px_rgba(232,62,116,0.1)]">
                  <div>
                    <span className="text-[11.5px] font-bold tracking-wider text-rose uppercase">
                      {c.sector}
                    </span>
                    <h3 className="font-serif mt-1 text-[1.4rem] font-bold text-ink">
                      {c.city}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/75">
                      {c.address}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#fde2ec] pt-4">
                    <a
                      href={c.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue hover:underline"
                    >
                      <FaMapMarkerAlt className="size-3" />
                      Get directions
                    </a>
                    <span className="text-ink/30">•</span>
                    <Link
                      href={c.clinicUrl}
                      className="text-[12.5px] font-semibold text-ink/75 hover:text-rose"
                    >
                      Clinic page
                    </Link>
                    <a
                      href="#book-consultation"
                      className="mt-2 w-full rounded-full border border-rose/30 bg-white py-2 text-center text-[13px] font-semibold text-ink transition-colors hover:border-rose hover:bg-rose hover:text-white"
                    >
                      Book appointment
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
