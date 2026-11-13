"use client";

import { FaCheck } from "react-icons/fa";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function DisclaimerOversight() {
  const points = [
    {
      title: "Expert Clinical Guidance",
      text: "She holds an MBBS and MD with Gold Medal. She is also a DNB and has done her Fellowship at Singapore General Hospital. Registered with DMC, MCI and NMC.",
    },
    {
      title: "Evidence-Based Guidelines",
      text: "Articles published by ISAR/ESHRE/ASRM are used as information for our site.",
    },
    {
      title: "Regular Updates",
      text: "Pages are reviewed and updated as guidelines change.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16" style={{ background: "var(--pink)" }}>
      <div className="page-container relative z-10 max-w-4xl">
        <div className="mb-6">
          <Reveal variant="fadeUp">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose">
              Authoritative Information
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Physician Oversight &amp; Content Review
            </h2>
          </Reveal>
        </div>

        <Stagger className="space-y-3.5">
          {points.map((p, idx) => (
            <StaggerItem key={idx}>
              <div className="flex items-start gap-4 rounded-2xl border border-rose/15 bg-white p-5 sm:p-6 shadow-sm transition hover:border-rose/35 hover:shadow-md">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose text-white text-xs mt-0.5">
                  <FaCheck />
                </span>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-ink/75">
                    {p.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

