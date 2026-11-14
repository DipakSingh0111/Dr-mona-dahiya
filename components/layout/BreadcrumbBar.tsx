"use client";

import { usePathname } from "next/navigation";
import Breadcrumb, { type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { getBlogPostBySlug } from "@/data/blogs";
import { getLocationPageBySlug } from "@/data/locations";

const ROUTE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  "/404": [{ label: "Error" }, { label: "Page Not Found" }],
  "/about-mona-dahiya": [
    { label: "About Dr. Mona", href: "/about-mona-dahiya" },
    { label: "Credentials & Bio" },
  ],
  "/art-compliance-ethics": [
    { label: "About Dr. Mona", href: "/about-mona-dahiya" },
    { label: "ART Compliance & Ethics Policy" },
  ],
  "/azoospermia-treatment": [
    { label: "Conditions Treated", href: "/male-infertility-treatment" },
    { label: "Azoospermia" },
  ],
  "/best-egg-freezing-center-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "Egg Freezing Center in Noida" },
  ],
  "/best-female-infertility-doctor-in-noida": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Female Infertility Doctor Noida" },
  ],
  "/best-iui-doctor-in-delhi": [
    { label: "Treatments", href: "/our-services" },
    { label: "IUI Doctor in Delhi" },
  ],
  "/best-iui-doctor-in-ghaziabad": [
    { label: "Treatments", href: "/our-services" },
    { label: "IUI Doctor in Ghaziabad" },
  ],
  "/best-iui-doctor-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "IUI Doctor in Noida" },
  ],
  "/best-ivf-doctor-in-delhi": [
    { label: "Treatments", href: "/our-services" },
    { label: "IVF Doctor in Delhi" },
  ],
  "/best-ivf-doctor-in-ghaziabad": [
    { label: "Treatments", href: "/our-services" },
    { label: "IVF Doctor in Ghaziabad" },
  ],
  "/best-ivf-doctor-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "IVF Doctor in Noida" },
  ],
  "/best-ivf-patient-reviews": [
    { label: "Success Stories", href: "/success-stories" },
    { label: "IVF patient reviews" },
  ],
  "/best-laparoscopic-surgeon-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "Best Laparoscopic Surgeon in Noida" },
  ],
  "/best-laser-assisted-hatching-doctor-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "Laser Assisted Hatching" },
  ],
  "/best-low-amh-treatment-in-noida": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Low AMH Treatment in Noida" },
  ],
  "/best-male-infertility-doctor-in-noida": [
    { label: "Conditions Treated", href: "/male-infertility-treatment" },
    { label: "Male Infertility Doctor Noida" },
  ],
  "/best-pcos-pcod-treatment-centre-in-noida": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "PCOS & PCOD Management" },
  ],
  "/blastocyst-transfer": [
    { label: "Treatments", href: "/our-services" },
    { label: "Blastocyst Transfer in Delhi NCR" },
  ],
  "/blog": [{ label: "Fertility & IVF Blog" }],
  "/book-appointment": [
    { label: "Patient Resources", href: "/ivf-faqs" },
    { label: "Book Appointment" },
  ],
  "/comprehensive-ivf-faqs": [
    { label: "Patient Resources", href: "/ivf-faqs" },
    { label: "Comprehensive IVF FAQs" },
  ],
  "/contact-us": [{ label: "Contact Dr. Mona Dahiya" }],
  "/donor-gametes": [
    { label: "Treatments", href: "/our-services" },
    { label: "Donor Gamete IVF in Delhi NCR" },
  ],
  "/embryo-cryopreservation": [
    { label: "Treatments", href: "/our-services" },
    { label: "Embryo Freezing (Cryopreservation)" },
  ],
  "/endometrial-receptivity-analysis-era-test-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "ERA Test in Noida" },
  ],
  "/endometriosis-fertility-treatment": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Endometriosis & Adenomyosis" },
  ],
  "/fallopian-tube-blockage-treatment": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Fallopian Tube Blockage" },
  ],
  "/female-infertility-treatment": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Female Infertility Treatment in Delhi NCR" },
  ],
  "/follicular-ultrasound": [
    { label: "Treatments", href: "/our-services" },
    { label: "Follicular Ultrasound Monitoring in Delhi NCR" },
  ],
  "/frozen-embryo-transfer": [
    { label: "Treatments", href: "/our-services" },
    { label: "Frozen Embryo Transfer (FET)" },
  ],
  "/gallery": [
    { label: "About Dr. Mona", href: "/about-mona-dahiya" },
    { label: "Gallery" },
  ],
  "/hysteroscopy-treatment": [
    { label: "Treatments", href: "/our-services" },
    { label: "Diagnostic & Operative Hysteroscopy" },
  ],
  "/international-ivf-patient": [
    { label: "Patient Resources", href: "/ivf-faqs" },
    { label: "International Patients" },
  ],
  "/intracytoplasmic-sperm-injection-icsi-treatment": [
    { label: "Treatments", href: "/our-services" },
    { label: "ICSI Treatment in Delhi NCR" },
  ],
  "/iui-stories": [
    { label: "Success Stories", href: "/success-stories" },
    { label: "IUI Success Stories" },
  ],
  "/iui-treatment": [
    { label: "Treatments", href: "/our-services" },
    { label: "IUI Treatment in Delhi NCR" },
  ],
  "/ivf-consultation-online": [
    { label: "Patient Resources", href: "/ivf-faqs" },
    { label: "Online Consultation" },
  ],
  "/ivf-cost-emi": [
    { label: "Treatments", href: "/our-services" },
    { label: "IVF Cost and EMI Financing in Delhi NCR" },
  ],
  "/ivf-cost-insurance-financing": [
    { label: "Treatments", href: "/our-services" },
    { label: "IVF Cost and EMI Financing in Delhi NCR" },
  ],
  "/ivf-faqs": [
    { label: "Patient Resources", href: "/ivf-faqs" },
    { label: "IVF FAQs" },
  ],
  "/ivf-stories": [
    { label: "Success Stories", href: "/success-stories" },
    { label: "IVF Success Stories" },
  ],
  "/ivf-treatment": [
    { label: "Treatments", href: "/our-services" },
    { label: "IVF Treatment in Delhi NCR" },
  ],
  "/location": [{ label: "Locations" }],
  "/low-amh-stories": [
    { label: "Success Stories", href: "/success-stories" },
    { label: "Low AMH Success Stories" },
  ],
  "/low-sperm-count-oligospermia": [
    { label: "Conditions Treated", href: "/male-infertility-treatment" },
    { label: "Low Sperm Count & Motility" },
  ],
  "/male-infertility-treatment": [
    { label: "Conditions Treated", href: "/male-infertility-treatment" },
    { label: "Male Infertility Treatment in Delhi | Noida | Ghaziabad" },
  ],
  "/medical-disclaimer": [
    { label: "Legal" },
    { label: "Medical Disclaimer" },
  ],
  "/minimal-stimulation-mini-ivf": [
    { label: "Treatments", href: "/our-services" },
    { label: "Mini IVF in Delhi NCR" },
  ],
  "/miscarriage-treatment-in-noida": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Recurrent Miscarriages (RPL)" },
  ],
  "/news-and-media": [
    { label: "About Dr. Mona", href: "/about-mona-dahiya" },
    { label: "News & Media" },
  ],
  "/oncofertility-cancer-fertility-preservation": [
    { label: "Treatments", href: "/our-services" },
    { label: "Oncofertility in Delhi NCR" },
  ],
  "/our-services": [{ label: "Our Services" }],
  "/pcos-stories": [
    { label: "Success Stories", href: "/success-stories" },
    { label: "PCOS Success Stories" },
  ],
  "/platelet-rich-plasma-prp-ivf-treatment-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "PRP IVF Treatment in Noida" },
  ],
  "/preimplantation-genetic-testing-pgt-center-in-noida": [
    { label: "Treatments", href: "/our-services" },
    { label: "Preimplantation Genetic Testing (PGT)" },
  ],
  "/privacy-policy": [{ label: "Legal" }, { label: "Privacy Policy" }],
  "/recurrent-implantation-failure-rif": [
    { label: "Conditions Treated", href: "/female-infertility-treatment" },
    { label: "Recurrent Implantation Failure (RIF)" },
  ],
  "/second-opinion-failed-ivf": [
    { label: "Treatments", href: "/our-services" },
    { label: "Second Opinion for Failed IVF in Delhi NCR" },
  ],
  "/semen-sperm-freezing": [
    { label: "Treatments", href: "/our-services" },
    { label: "Semen & Sperm Freezing" },
  ],
  "/sperm-dna-fragmentation-test": [
    { label: "Conditions Treated", href: "/male-infertility-treatment" },
    { label: "Sperm DNA Fragmentation Index (DFI)" },
  ],
  "/success-stories": [
    { label: "Success Stories", href: "/success-stories" },
    { label: "All Success Stories" },
  ],
  "/surgical-sperm-retrieval-tesa-pesa": [
    { label: "Treatments", href: "/our-services" },
    { label: "Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)" },
  ],
  "/terms-of-service": [{ label: "Legal" }, { label: "Terms of Service" }],
};

function formatSlugFallback(pathname: string): BreadcrumbItem[] {
  const segment = pathname.split("/").filter(Boolean).pop() ?? "";
  const label = segment
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
  return [{ label: label || "Page" }];
}

function getBreadcrumbItems(pathname: string): BreadcrumbItem[] | null {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  if (normalized === "/" || !normalized) {
    return null;
  }

  if (ROUTE_BREADCRUMBS[normalized]) {
    return ROUTE_BREADCRUMBS[normalized];
  }

  if (normalized.startsWith("/blog/")) {
    const slug = normalized.slice("/blog/".length);
    const post = getBlogPostBySlug(slug);
    if (post) {
      return [post.hero.breadcrumbParent, { label: post.hero.breadcrumbLabel }];
    }
    return [{ label: "Blog", href: "/blog" }, ...formatSlugFallback(normalized)];
  }

  if (normalized.startsWith("/location/")) {
    const slug = normalized.slice("/location/".length);
    const loc = getLocationPageBySlug(slug);
    if (loc) {
      return [loc.hero.breadcrumbParent, { label: loc.hero.breadcrumbLabel }];
    }
    return [{ label: "Locations", href: "/location" }, ...formatSlugFallback(normalized)];
  }

  return formatSlugFallback(normalized);
}

export default function BreadcrumbBar() {
  const pathname = usePathname() || "/";
  const items = getBreadcrumbItems(pathname);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full border-b border-[#fde2ec] bg-white py-2.5 sm:py-3">
      <div className="page-container">
        <Breadcrumb items={items} inline />
      </div>
    </div>
  );
}

