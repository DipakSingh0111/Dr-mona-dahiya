"use client";

import { FaEnvelope, FaUserMd, FaClipboardList } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ContactRemoteConsultation() {
  const steps = [
    {
      number: "1",
      icon: FaEnvelope,
      title: "Email us your reports",
      desc: "Past semen reports, hormone levels and cycle summaries to info@drmonadahiya.com",
    },
    {
      number: "2",
      icon: FaUserMd,
      title: "Get a remote consultation",
      desc: "A confidential 30-minute online consultation with Dr. Mona Dahiya",
    },
    {
      number: "3",
      icon: FaClipboardList,
      title: "Receive your action plan",
      desc: "A personalised plan, so you can complete preliminary testing close to home before visiting Delhi, Noida or Ghaziabad",
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 lg:py-18 bg-white">
      <div className="page-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Reveal variant="fadeUp">
            <span className="inline-block rounded-full bg-rose/10 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-rose">
              If You Live Out Of Town
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
              Remote Consultations for Outstation &amp; International Patients
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="relative flex h-full flex-col rounded-2xl border border-rose/15 bg-gradient-to-b from-[#fff8fb] to-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose text-base font-bold text-white shadow-sm">
                    {step.number}
                  </span>
                  <step.icon className="text-xl text-rose/40" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
