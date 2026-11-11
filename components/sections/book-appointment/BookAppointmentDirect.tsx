"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import siteData from "@/data/site.json";
import { Reveal } from "@/components/ui/Reveal";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function BookAppointmentDirect() {
  const { directBooking } = siteData.bookAppointmentPage;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "Noida",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!directBooking) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="direct-booking" className="relative overflow-hidden bg-pink py-10 sm:py-12 lg:py-16">
      <div className="page-container relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal variant="slideLeft">
              <span className="text-[12px] font-semibold tracking-wide text-rose sm:text-[13px]">
                {directBooking.eyebrow}
              </span>
              <h2 className="font-serif mt-1 text-[1.85rem] leading-[1.2] font-normal tracking-tight text-ink sm:text-[2.2rem] lg:text-[2.45rem]">
                {directBooking.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
                {directBooking.subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={directBooking.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-rose/20 bg-white/75 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold text-ink shadow-[0_4px_14px_rgba(15,36,56,0.05)] transition-all hover:border-rose/50 hover:bg-white hover:text-rose hover:shadow-[0_8px_22px_rgba(232,62,116,0.14)] sm:text-[14px]"
                >
                  {directBooking.primaryCta.label}
                </a>
                <Link
                  href={directBooking.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,71,202,0.35)] transition-all hover:bg-blue-dark hover:shadow-[0_6px_20px_rgba(0,71,202,0.45)] sm:text-[14px]"
                >
                  {directBooking.secondaryCta.label}
                </Link>
              </div>

              {/* Two Fee Cards */}
              <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                {directBooking.fees.map((fee, idx) => (
                  <div
                    key={idx}
                    className="card-highlight relative overflow-hidden rounded-[18px] border border-rose/25 bg-white p-4 shadow-sm"
                  >
                    <span className="text-[10.5px] font-bold tracking-widest text-rose uppercase">
                      {fee.label}
                    </span>
                    <p className="font-serif mt-1 text-[1.6rem] font-bold tracking-tight text-ink sm:text-[1.75rem]">
                      {fee.price}
                    </p>
                    <p className="text-[12px] font-medium text-ink/70">
                      {fee.line1}
                    </p>
                    <p className="text-[11.5px] text-ink/50">
                      {fee.line2}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Contacts */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-[13.5px] sm:gap-6">
                <div>
                  <span className="block text-[11px] font-semibold text-ink/50 uppercase">Phone</span>
                  <a
                    href={`tel:${directBooking.contacts.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-ink hover:text-rose transition-colors"
                  >
                    {directBooking.contacts.phone}
                  </a>
                </div>
                <div className="h-8 w-px bg-ink/10" />
                <div>
                  <span className="block text-[11px] font-semibold text-ink/50 uppercase">Email</span>
                  <a
                    href={`mailto:${directBooking.contacts.email}`}
                    className="font-bold text-ink hover:text-rose transition-colors"
                  >
                    {directBooking.contacts.email}
                  </a>
                </div>
              </div>

              {/* Clinic Addresses List */}
              <div className="mt-6 space-y-2.5 rounded-[20px] border border-rose/20 bg-white/80 p-4 shadow-sm sm:p-5">
                {directBooking.addresses.map((addr, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink/80 sm:text-[13px]">
                    <span className="font-bold text-rose min-w-[75px] shrink-0">
                      {addr.city}:
                    </span>
                    <span>{addr.address}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Request an Appointment Form */}
          <div className="lg:col-span-5" id="request-appointment-form">
            <div className="card-highlight relative overflow-hidden rounded-[26px] border border-rose/30 bg-white p-6 shadow-[0_14px_36px_rgba(232,62,116,0.08)] sm:p-7">
              <h3 className="font-serif text-[1.35rem] font-bold text-ink sm:text-[1.5rem]">
                {directBooking.form.title}
              </h3>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-[18px] bg-rose/5 p-6 text-center">
                  <FaCheckCircle className="size-12 text-rose" />
                  <h4 className="font-serif mt-3 text-[1.2rem] font-bold text-ink">
                    Request Submitted!
                  </h4>
                  <p className="mt-1.5 text-[13px] text-ink/75">
                    Thank you, {formData.name}. Our clinic desk will contact you at{" "}
                    <strong>{formData.phone}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-ink/80">
                      {directBooking.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-[12px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-ink/80">
                      {directBooking.form.phoneLabel}
                    </label>
                    <div className="mt-1 flex rounded-[12px] border border-ink/20 bg-white overflow-hidden focus-within:border-rose focus-within:ring-1 focus-within:ring-rose">
                      <span className="flex items-center gap-1 bg-ink/5 px-3 text-[12.5px] font-semibold text-ink/70">
                        🇮🇳 +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 bg-transparent px-3 py-2.5 text-[13px] text-ink focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-ink/80">
                      {directBooking.form.clinicLabel}
                    </label>
                    <select
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="mt-1 w-full rounded-[12px] border border-ink/20 bg-white px-3.5 py-2.5 text-[13px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose"
                    >
                      {directBooking.form.clinics.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-ink/80">
                      {directBooking.form.notesLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details if you wish..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-1 w-full rounded-[12px] border border-ink/20 bg-white px-3.5 py-2 text-[13px] text-ink focus:border-rose focus:outline-hidden focus:ring-1 focus:ring-rose resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-rose py-3 text-[13.5px] font-semibold text-white shadow-[0_4px_16px_rgba(232,62,116,0.35)] transition-all hover:bg-rose-dark active:scale-[0.99]"
                  >
                    {directBooking.form.submitLabel}
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

