"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaUsers,
  FaPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
  FaChevronDown,
  FaVideo,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import siteData from "@/data/site.json";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function BookAppointment() {
  const data = siteData.bookAppointment;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "Noida",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  }

  return (
    <section
      id="book-appointment"
      className="relative overflow-hidden py-6 sm:py-7 lg:py-8"
    >
      <div className="page-container">
      <div className="relative min-h-[640px] overflow-hidden rounded-[28px] sm:min-h-[680px]">
        {/* Background couple photo — visible on right like reference */}
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt="Happy couple consulting for IVF with Dr. Mona"
            fill
            priority
            sizes="100vw"
            className="scale-[1.02] object-cover object-[78%_center] blur-[1.5px]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(6,14,32,0.88) 0%, rgba(8,18,40,0.82) 34%, rgba(10,22,48,0.45) 58%, rgba(10,22,48,0.18) 78%, rgba(10,22,48,0.08) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.24fr)_minmax(330px,0.76fr)] lg:gap-8 lg:px-10 lg:py-14 xl:gap-10 xl:px-12">
          {/* Left */}
          <Reveal variant="slideLeft" className="w-full min-w-0 max-w-none">
            <div className="mb-4 flex items-center gap-2.5 sm:gap-3">
              <span className="h-px w-6 shrink-0 bg-rose sm:w-8" />
              <span className="text-[10.5px] font-bold tracking-[0.14em] text-rose uppercase sm:whitespace-nowrap sm:text-xs sm:tracking-[0.18em]">
                {data.eyebrow}
              </span>
              <span className="h-px w-6 shrink-0 bg-rose sm:w-8" />
            </div>

            <h2 className="font-display text-[1.9rem] leading-[1.15] font-bold text-white sm:text-[2.45rem] lg:text-[2.65rem] xl:text-[2.85rem]">
              <span className="block sm:whitespace-nowrap">
                {data.titleLine1}
              </span>
              <span className="text-rose sm:whitespace-nowrap">
                {data.titleAccent}
              </span>
            </h2>

            <p className="mt-3.5 max-w-md text-[13.5px] leading-relaxed text-white/75 sm:text-[15px]">
              {data.subtitle}
            </p>

            <div className="mt-9 sm:mt-11 flex flex-col gap-3 sm:flex-row sm:flex-nowrap">
              <a
                href={data.primaryCta.href}
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#f1f3f5] px-6 py-3.5 text-[13px] font-semibold whitespace-nowrap text-ink shadow-sm transition-all hover:bg-white active:scale-95 xl:text-[13.5px]"
              >
                <FaCalendarAlt className="size-3.5 shrink-0 text-ink" />
                {data.primaryCta.label}
                <FaArrowRight className="size-3.5 shrink-0 text-ink" />
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-blue px-6 py-3.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-[0_10px_28px_rgba(37,99,235,0.35)] transition-all hover:bg-blue-dark active:scale-95 xl:text-[13.5px]"
              >
                <FaVideo className="size-3.5 shrink-0 text-white" />
                {data.secondaryCta.label}
                <FaArrowRight className="size-3.5 shrink-0 text-white" />
              </a>
            </div>

            <Stagger
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              stagger={0.1}
            >
              {data.pricing.map((plan) => (
                <StaggerItem key={plan.id} variant="scaleIn">
                  <div className="rounded-2xl bg-[#f3f4f6]/95 p-4 shadow-sm backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full ${
                          plan.tone === "pink"
                            ? "bg-[#ffe4ee] text-rose"
                            : "bg-[#e8f2ff] text-[#3b82f6]"
                        }`}
                      >
                        {plan.icon === "plane" ? (
                          <FaPlane className="size-4" />
                        ) : (
                          <FaUsers className="size-4" />
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold tracking-[0.12em] whitespace-nowrap text-zinc-500 uppercase">
                          {plan.label}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1 font-display text-[1.6rem] leading-none font-bold whitespace-nowrap text-ink sm:text-[1.75rem]">
                          {plan.id === "foreign" ? (
                            <>
                              <span>US</span>
                              <FaDollarSign className="size-[0.82em] shrink-0" />
                              <span>25</span>
                            </>
                          ) : (
                            <>
                              <FaIndianRupeeSign className="size-[0.82em] shrink-0" />
                              <span>1,000</span>
                            </>
                          )}
                        </p>
                        <p className="mt-1.5 text-[11.5px] whitespace-nowrap text-zinc-500 xl:text-[12px]">
                          {plan.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger
              className="mt-8 flex flex-col gap-4 border-t border-[#fbcfe0] pt-6 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-3 lg:gap-4 xl:gap-7"
              stagger={0.08}
              delay={0.1}
            >
              {data.contacts.map((item) => {
                const Icon =
                  item.icon === "mail"
                    ? FaEnvelope
                    : item.icon === "clock"
                      ? FaClock
                      : FaPhoneAlt;
                const content = (
                  <div className="flex items-start gap-2.5 sm:shrink-0 lg:gap-2.5">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-rose text-white lg:size-9">
                      <Icon className="size-3 lg:size-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10.5px] font-semibold tracking-wide text-white/55 uppercase lg:text-[11px]">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-snug font-semibold text-white sm:whitespace-nowrap sm:text-[11.5px] lg:text-[12.5px]">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );

                return (
                  <StaggerItem key={item.id}>
                    {item.href ? (
                      <a href={item.href} className="hover:opacity-90">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>

          {/* Right form matching user design */}
          <Reveal
            variant="slideRight"
            className="w-full max-w-[480px] justify-self-center lg:justify-self-end"
          >
            <div className="rounded-[28px] border border-[#fde2ec] bg-white p-6 shadow-[0_24px_55px_rgba(6,20,40,0.3)] sm:rounded-[32px] sm:p-8">
              <h3 className="font-serif text-[22px] font-bold tracking-tight text-ink sm:text-[25px]">
                Request an appointment
              </h3>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-blue/40 bg-[#f0f9ff] p-6 text-center text-blue">
                  <FaCheckCircle className="size-12 text-blue" />
                  <h4 className="mt-3 text-lg font-bold text-ink">
                    Request Received!
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Our team will call you shortly at {formData.phone} to
                    confirm your slot at {formData.clinic} clinic.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        clinic: "Noida",
                        notes: "",
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-rose underline underline-offset-2 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-slate-700">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-slate-700">
                        Phone number
                      </label>
                      <div className="mt-1.5 flex rounded-xl border border-slate-200 bg-[#f8fafc] focus-within:border-rose focus-within:bg-white focus-within:ring-1 focus-within:ring-rose/30 transition-all">
                        <div className="flex items-center gap-1.5 border-r border-slate-200 px-3 text-[13px] text-slate-600">
                          <span className="font-semibold text-ink">IN</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Enter Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-transparent px-3 py-2.5 text-[14px] text-ink outline-none placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700">
                      Preferred clinic
                    </label>
                    <div className="relative mt-1.5">
                      <select
                        value={formData.clinic}
                        onChange={(e) =>
                          setFormData({ ...formData, clinic: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30 cursor-pointer"
                      >
                        <option value="Noida" className="bg-white text-ink">
                          Noida
                        </option>
                        <option value="Ghaziabad" className="bg-white text-ink">
                          Ghaziabad
                        </option>
                        <option value="Delhi" className="bg-white text-ink">
                          Delhi
                        </option>
                      </select>
                      <FaChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-3 -translate-y-1/2 text-slate-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-slate-700">
                      Anything you want us to know (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Anything you want us to know..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-[18px] bg-rose py-3.5 text-[14.5px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-rose-dark active:scale-[0.99] cursor-pointer"
                  >
                    Request an appointment
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  );
}
