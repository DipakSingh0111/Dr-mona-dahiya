"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";

type RequestAppointmentCardProps = {
  /** Optional explicit default clinic; when omitted, inferred from the current route. */
  defaultClinic?: string;
  /** Optional className for the outer white card wrapper. */
  className?: string;
};

export default function RequestAppointmentCard({
  defaultClinic,
  className = "",
}: RequestAppointmentCardProps) {
  const pathname = usePathname() || "";
  const resolvedDefaultClinic =
    defaultClinic ??
    (/(?:delhi|vasant-kunj)/i.test(pathname)
      ? "Delhi"
      : /(?:ghaziabad|indirapuram|vaishali)/i.test(pathname)
        ? "Ghaziabad"
        : "Noida");

  const clinicOptions = [
    resolvedDefaultClinic,
    ...["Noida", "Ghaziabad", "Delhi"].filter(
      (c) => c !== resolvedDefaultClinic
    ),
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: resolvedDefaultClinic,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div
      className={`rounded-[26px] border border-[#fde2ec] bg-white p-6 shadow-xl sm:p-8 ${className}`}
    >
      <h3 className="font-serif text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">
        Request an appointment
      </h3>

      {submitted ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-blue/40 bg-[#f0f9ff] p-6 text-center text-blue">
          <FaCheckCircle className="size-12 text-blue" />
          <h4 className="mt-3 text-lg font-bold text-ink">
            Request Received!
          </h4>
          <p className="mt-1 text-sm text-slate-600">
            Our team will call you shortly at {formData.phone} to confirm your
            slot at {formData.clinic} clinic.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 cursor-pointer text-xs font-semibold text-rose underline underline-offset-2"
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
              <div className="mt-1.5 flex rounded-xl border border-slate-200 bg-[#f8fafc] transition-all focus-within:border-rose focus-within:bg-white focus-within:ring-1 focus-within:ring-rose/30">
                <div className="flex items-center gap-1.5 border-r border-slate-200 px-3 text-[13px] text-slate-600">
                  <span className="text-[15px] leading-none">🇮🇳</span>
                  <span className="font-semibold text-ink">+91</span>
                  <FaChevronDown className="size-2 text-slate-400" />
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
                className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
              >
                {clinicOptions.map((clinic) => (
                  <option key={clinic} value={clinic} className="bg-white text-ink">
                    {clinic}
                  </option>
                ))}
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
              placeholder="Share your query or preferred time (optional)"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full cursor-pointer rounded-[18px] bg-rose py-3.5 text-[14.5px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-rose-dark active:scale-[0.99]"
          >
            Request an appointment
          </button>
        </form>
      )}
    </div>
  );
}
