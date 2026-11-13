"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ContactFirstVisitChecklist() {
  const items = [
    "Any previous fertility treatment graphs, surgery details and ovarian stimulation worksheets.",
    "Latest semen analysis report and ultrasound scans.",
    "Bloodwork from the past 6-12 months (AMH, thyroid panel, prolactin, blood sugar etc).",
    "Photo identification of both partners as mandated by ART Act.",
  ];

  return (
    <section className="relative overflow-hidden py-14 lg:py-18" style={{ background: "var(--pink)" }}>
      <div className="page-container relative z-10 max-w-4xl">
        <div className="text-center mb-8">
          <Reveal variant="fadeUp">
            <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
              First Appointment
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
              What to Bring to Your First Consultation
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12}>
            <p className="mt-3 text-sm sm:text-base text-ink/75">
              Have these ready and Dr Dahiya can map out your treatment journey starting your first appointment.
            </p>
          </Reveal>
        </div>

        <Stagger className="space-y-3.5">
          {items.map((text, idx) => (
            <StaggerItem key={idx}>
              <div className="flex items-start gap-4 rounded-xl border border-rose/15 bg-white p-4 sm:p-5 shadow-sm transition hover:border-rose/40 hover:shadow-md">
                <FaCheckCircle className="mt-0.5 shrink-0 text-lg text-emerald-500" />
                <p className="text-sm sm:text-base font-medium text-ink/85 leading-relaxed">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
