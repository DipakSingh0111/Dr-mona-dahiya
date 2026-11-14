"use client";

import { useState, type FormEvent } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    clinic: "Noida Sector 49",
    preference: "In-Clinic Visit",
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
                  <div>
                    <label className="block text-[12.5px] font-semibold text-ink/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-[14px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13.5px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-ink/80">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 w-full rounded-[14px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13.5px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-ink/80">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 w-full rounded-[14px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13.5px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-ink/80">
                        Consultation Preference
                      </label>
                      <select
                        value={formData.preference}
                        onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                        className="mt-1 w-full rounded-[14px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13.5px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                      >
                        <option value="In-Clinic Visit">Option 1: In-Clinic Visit</option>
                        <option value="Online Consultation">Option 2: Online Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-ink/80">
                        Preferred Clinic Location
                      </label>
                      <select
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        className="mt-1 w-full rounded-[14px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13.5px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                      >
                        <option value="Noida Sector 49">Noida (Sector 49)</option>
                        <option value="Ghaziabad Raj Nagar">Ghaziabad (Raj Nagar)</option>
                        <option value="Delhi Lajpat Nagar">Delhi (Lajpat Nagar)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-ink/80">
                      Brief Medical Background / Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="E.g., trying to conceive for 2 years, previous IVF reports available, etc."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-1 w-full rounded-[14px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13.5px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-rose py-3 text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark active:scale-[0.99]"
                  >
                    Confirm Appointment Request
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

