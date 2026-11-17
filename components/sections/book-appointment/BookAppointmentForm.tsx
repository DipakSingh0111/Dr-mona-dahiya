"use client";

import { useState, type FormEvent } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "Noida",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="book-consultation" className="relative overflow-hidden bg-pink py-10 sm:py-12 lg:py-16">
      <div className="page-container relative">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-rose/30 bg-white p-6 shadow-[0_16px_40px_rgba(232,62,116,0.08)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left info column */}
            <div className="lg:col-span-5">
              <Reveal variant="slideLeft">
                <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                  Direct Clinic Scheduling
                </span>
                <h3 className="font-serif mt-1.5 text-[1.65rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2rem]">
                  Schedule Your Appointment
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink/75 sm:text-[14px]">
                  Share your preferred date and clinic location. Our medical team will confirm your appointment via WhatsApp or SMS within 2 hours.
                </p>

                <div className="mt-6 space-y-3.5 text-[13px]">
                  <a
                    href="tel:+919267982924"
                    className="flex items-center gap-3 rounded-[14px] bg-pink/60 p-3 text-ink transition-colors hover:text-rose"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                      <FaPhoneAlt className="size-3.5" />
                    </div>
                    <div>
                      <p className="font-bold text-[13.5px]">+91 92679 82924</p>
                      <p className="text-[11.5px] text-ink/60">Direct Reception Call</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919267982924"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[14px] bg-[#25D366]/10 p-3 text-ink transition-colors hover:text-[#25D366]"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <FaWhatsapp className="size-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[13.5px]">WhatsApp Us</p>
                      <p className="text-[11.5px] text-ink/60">Instant Confirmation</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@drmonadahiya.com"
                    className="flex items-center gap-3 rounded-[14px] bg-pink/60 p-3 text-ink transition-colors hover:text-rose"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-white">
                      <FaEnvelope className="size-3.5" />
                    </div>
                    <div>
                      <p className="font-bold text-[13.5px]">info@drmonadahiya.com</p>
                      <p className="text-[11.5px] text-ink/60">Official Medical Desk</p>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-[20px] bg-rose/5 p-8 text-center">
                  <FaCheckCircle className="size-14 text-rose animate-bounce" />
                  <h4 className="font-serif mt-4 text-[1.4rem] font-bold text-ink">
                    Appointment Request Received!
                  </h4>
                  <p className="mt-2 text-[13.5px] text-ink/75">
                    Thank you, {formData.name}. Our clinic desk will contact you at{" "}
                    <strong>{formData.phone}</strong> within 2 hours to confirm your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all placeholder:text-slate-400 focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-slate-700">
                        Phone number
                      </label>
                      <div className="mt-1.5 flex rounded-xl border border-slate-200 bg-[#f8fafc] focus-within:border-rose focus-within:bg-white focus-within:ring-1 focus-within:ring-rose/30 transition-all">
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
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all focus:border-rose focus:bg-white focus:ring-1 focus:ring-rose/30 cursor-pointer"
                      >
                        <option value="Noida" className="bg-white text-ink">Noida</option>
                        <option value="Ghaziabad" className="bg-white text-ink">Ghaziabad</option>
                        <option value="Delhi" className="bg-white text-ink">Delhi</option>
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
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
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
          </div>
        </div>
      </div>
    </section>
  );
}

