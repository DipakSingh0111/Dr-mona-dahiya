export const BASE_URL = "https://drmonadahiya.com";
export const SITEMAP_LAST_MODIFIED = "2026-11-21";

export type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapRouteItem = {
  href: string;
  label: string;
  priority: number;
  changeFrequency: SitemapChangeFrequency;
};

export type SitemapGroup = {
  title: string;
  description: string;
  items: SitemapRouteItem[];
};

export const SITEMAP_GROUPS: SitemapGroup[] = [
  {
    title: "Core Pages & Consultation",
    description: "Main clinic pages, doctor profile, appointments, and directories.",
    items: [
      { href: "/", label: "Home — Dr. Mona Dahiya | Fertility & IVF Specialist", priority: 1.0, changeFrequency: "weekly" },
      { href: "/about-mona-dahiya", label: "About Dr. Mona Dahiya (Credentials & Bio)", priority: 0.9, changeFrequency: "monthly" },
      { href: "/our-services", label: "All Fertility & IVF Services", priority: 0.9, changeFrequency: "weekly" },
      { href: "/book-appointment", label: "Book a Fertility Appointment", priority: 0.9, changeFrequency: "weekly" },
      { href: "/ivf-consultation-online", label: "Online IVF Consultation", priority: 0.9, changeFrequency: "weekly" },
      { href: "/contact-us", label: "Contact Dr. Mona Dahiya", priority: 0.9, changeFrequency: "monthly" },
      { href: "/location", label: "All Clinic Locations Directory", priority: 0.9, changeFrequency: "weekly" },
      { href: "/blog", label: "Fertility & IVF Blog", priority: 0.9, changeFrequency: "weekly" },
      { href: "/success-stories", label: "Patient Success Stories", priority: 0.9, changeFrequency: "weekly" },
      { href: "/fertility-assessment-quiz", label: "Fertility Assessment Quiz", priority: 0.85, changeFrequency: "monthly" },
    ],
  },
  {
    title: "IVF & Fertility Treatments",
    description: "Assisted reproductive technology, embryology, and surgical fertility procedures.",
    items: [
      { href: "/ivf-treatment", label: "IVF Treatment in Delhi NCR", priority: 0.85, changeFrequency: "monthly" },
      { href: "/intracytoplasmic-sperm-injection-icsi-treatment", label: "ICSI Treatment in Delhi NCR", priority: 0.85, changeFrequency: "monthly" },
      { href: "/iui-treatment", label: "IUI Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/frozen-embryo-transfer", label: "Frozen Embryo Transfer (FET)", priority: 0.85, changeFrequency: "monthly" },
      { href: "/blastocyst-transfer", label: "Blastocyst Transfer in Delhi NCR", priority: 0.85, changeFrequency: "monthly" },
      { href: "/minimal-stimulation-mini-ivf", label: "Minimal Stimulation (Mini) IVF", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-laser-assisted-hatching-doctor-in-noida", label: "Laser-Assisted Hatching in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-egg-freezing-center-in-noida", label: "Egg Freezing Center in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/semen-sperm-freezing", label: "Semen & Sperm Freezing", priority: 0.85, changeFrequency: "monthly" },
      { href: "/embryo-cryopreservation", label: "Embryo Cryopreservation & Banking", priority: 0.85, changeFrequency: "monthly" },
      { href: "/oncofertility-cancer-fertility-preservation", label: "Oncofertility & Cancer Fertility Preservation", priority: 0.85, changeFrequency: "monthly" },
      { href: "/preimplantation-genetic-testing-pgt-center-in-noida", label: "Preimplantation Genetic Testing (PGT) in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/platelet-rich-plasma-prp-ivf-treatment-in-noida", label: "PRP IVF Treatment in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/endometrial-receptivity-analysis-era-test-in-noida", label: "Endometrial Receptivity Analysis (ERA) in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/follicular-ultrasound", label: "Follicular Monitoring Ultrasound", priority: 0.85, changeFrequency: "monthly" },
      { href: "/sperm-dna-fragmentation-test", label: "Sperm DNA Fragmentation Test", priority: 0.85, changeFrequency: "monthly" },
      { href: "/hysteroscopy-treatment", label: "Hysteroscopy Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/donor-gametes", label: "Donor Gametes (Egg & Sperm)", priority: 0.85, changeFrequency: "monthly" },
      { href: "/surgical-sperm-retrieval-tesa-pesa", label: "Surgical Sperm Retrieval (TESA / PESA)", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-laparoscopic-surgeon-in-noida", label: "Best Laparoscopic Surgeon in Noida", priority: 0.85, changeFrequency: "monthly" },
    ],
  },
  {
    title: "Conditions Treated",
    description: "Specialized evaluation and treatment for female and male infertility conditions.",
    items: [
      { href: "/female-infertility-treatment", label: "Female Infertility Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/male-infertility-treatment", label: "Male Infertility Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-female-infertility-doctor-in-noida", label: "Best Female Infertility Doctor in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-male-infertility-doctor-in-noida", label: "Best Male Infertility Doctor in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-low-amh-treatment-in-noida", label: "Low AMH Treatment in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-pcos-pcod-treatment-centre-in-noida", label: "PCOS & PCOD Treatment Centre in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/endometriosis-fertility-treatment", label: "Endometriosis & Adenomyosis Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/fallopian-tube-blockage-treatment", label: "Fallopian Tube Blockage Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/recurrent-implantation-failure-rif", label: "Recurrent Implantation Failure (RIF)", priority: 0.85, changeFrequency: "monthly" },
      { href: "/azoospermia-treatment", label: "Azoospermia (Zero Sperm Count) Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/low-sperm-count-oligospermia", label: "Low Sperm Count (Oligospermia) Treatment", priority: 0.85, changeFrequency: "monthly" },
      { href: "/miscarriage-treatment-in-noida", label: "Recurrent Miscarriage Treatment in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/second-opinion-failed-ivf", label: "Second Opinion for Failed IVF", priority: 0.85, changeFrequency: "monthly" },
    ],
  },
  {
    title: "City Specialists (Noida, Delhi & Ghaziabad)",
    description: "Dedicated IVF and IUI specialist pages across Delhi NCR.",
    items: [
      { href: "/best-ivf-doctor-in-noida", label: "Best IVF Doctor in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-ivf-doctor-in-delhi", label: "Best IVF Doctor in Delhi", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-ivf-doctor-in-ghaziabad", label: "Best IVF Doctor in Ghaziabad", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-iui-doctor-in-noida", label: "Best IUI Doctor in Noida", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-iui-doctor-in-delhi", label: "Best IUI Doctor in Delhi", priority: 0.85, changeFrequency: "monthly" },
      { href: "/best-iui-doctor-in-ghaziabad", label: "Best IUI Doctor in Ghaziabad", priority: 0.85, changeFrequency: "monthly" },
    ],
  },
  {
    title: "Patient Resources, Stories & Financing",
    description: "Cost guides, FAQs, patient stories, international care, and media.",
    items: [
      { href: "/ivf-cost-emi", label: "IVF Cost & Zero-Cost EMI Options", priority: 0.75, changeFrequency: "monthly" },
      { href: "/ivf-cost-insurance-financing", label: "IVF Cost, Insurance & Financing", priority: 0.75, changeFrequency: "monthly" },
      { href: "/ivf-faqs", label: "IVF Frequently Asked Questions", priority: 0.75, changeFrequency: "monthly" },
      { href: "/comprehensive-ivf-faqs", label: "Comprehensive IVF FAQs", priority: 0.75, changeFrequency: "monthly" },
      { href: "/international-ivf-patient", label: "IVF for International Patients in India", priority: 0.75, changeFrequency: "monthly" },
      { href: "/best-ivf-patient-reviews", label: "Verified IVF Patient Reviews", priority: 0.75, changeFrequency: "monthly" },
      { href: "/ivf-stories", label: "IVF Success Stories", priority: 0.7, changeFrequency: "monthly" },
      { href: "/iui-stories", label: "IUI Success Stories", priority: 0.7, changeFrequency: "monthly" },
      { href: "/low-amh-stories", label: "Low AMH Success Stories", priority: 0.7, changeFrequency: "monthly" },
      { href: "/pcos-stories", label: "PCOS Success Stories", priority: 0.7, changeFrequency: "monthly" },
      { href: "/gallery", label: "Clinic & Awards Gallery", priority: 0.7, changeFrequency: "monthly" },
      { href: "/news-and-media", label: "News & Media", priority: 0.7, changeFrequency: "monthly" },
      { href: "/sitemap", label: "HTML Sitemap", priority: 0.5, changeFrequency: "weekly" },
    ],
  },
  {
    title: "Legal, Ethics & Policies",
    description: "ART compliance, medical disclaimer, privacy, and service policies.",
    items: [
      { href: "/art-compliance-ethics", label: "ART Compliance & Ethics Policy", priority: 0.4, changeFrequency: "yearly" },
      { href: "/medical-disclaimer", label: "Medical Disclaimer", priority: 0.4, changeFrequency: "yearly" },
      { href: "/privacy-policy", label: "Privacy Policy", priority: 0.4, changeFrequency: "yearly" },
      { href: "/refund-and-cancellation-policy", label: "Refund & Cancellation Policy", priority: 0.4, changeFrequency: "yearly" },
      { href: "/terms-of-service", label: "Terms of Service", priority: 0.4, changeFrequency: "yearly" },
    ],
  },
];
