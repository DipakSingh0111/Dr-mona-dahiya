"use client";

import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaVideo } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ContactTeamCards() {
  const cards = [
    {
      icon: FaPhoneAlt,
      label: "CALL THE HELPLINE",
      value: "+91 92679 82924",
      subtext: "Appointments and general questions",
      href: "tel:+919267982924",
      accent: "rose",
      badgeClass: "bg-rose/10 text-rose",
      cardBorder: "border-rose/20 hover:border-rose/60",
    },
    {
      icon: FaWhatsapp,
      label: "WHATSAPP",
      value: "+91 92679 82924",
      subtext: "Share reports and book a slot",
      href: "https://wa.me/919267982924",
      accent: "emerald",
      badgeClass: "bg-emerald-500/10 text-emerald-600",
      cardBorder: "border-emerald-500/20 hover:border-emerald-500/60",
    },
    {
      icon: FaEnvelope,
      label: "EMAIL",
      value: "info@drmonadahiya.com",
      subtext: "Send records before your visit",
      href: "mailto:info@drmonadahiya.com",
      accent: "navy",
      badgeClass: "bg-navy/10 text-navy",
      cardBorder: "border-navy/20 hover:border-navy/60",
    },
    {
      icon: FaVideo,
      label: "ONLINE CONSULTATION",
      value: "₹1,000 · US$25 abroad",
      subtext: "30-minute online consultation",
      href: "/ivf-consultation-online",
      accent: "indigo",
      badgeClass: "bg-purple-500/10 text-purple-600",
      cardBorder: "border-purple-500/20 hover:border-purple-500/60",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white">
      <div className="page-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose/10 pb-6 mb-8">
          <div>
            <Reveal variant="fadeUp">
              <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
                Get in touch
              </span>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.06}>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                Contact Dr. Mona Dahiya&apos;s Team
              </h2>
            </Reveal>
          </div>
          <Reveal variant="fadeUp" delay={0.12}>
            <p className="text-sm sm:text-base text-ink/70 max-w-md">
              Bookings are handled directly by our own team, Monday to Saturday,
              10:00 AM to 5:00 PM.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={idx}>
                <a
                  href={card.href}
                  className={`group flex h-full flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${card.cardBorder}`}
                >
                  <div>
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.badgeClass} transition group-hover:scale-110`}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <span className="mt-4 block text-[11px] font-bold tracking-wider text-ink/60 uppercase">
                      {card.label}
                    </span>
                    <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-ink group-hover:text-rose transition break-words">
                      {card.value}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink/70 border-t border-rose/5 pt-3">
                    {card.subtext}
                  </p>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
