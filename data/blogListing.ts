export type BlogTopic = {
  id: string;
  title: string;
  description: string;
  accent: "rose" | "blue";
};

export type BlogListingArticle = {
  topic: string;
  title: string;
  date: string;
  href: string;
};

export type PillarGuide = {
  topic: string;
  title: string;
  date: string;
  href: string;
  description: string;
  accent: "rose" | "blue";
};

export const FEATURED_PILLAR_GUIDES: Record<string, PillarGuide> = {
  "Understanding Infertility & Diagnosis": {
    topic: "UNDERSTANDING INFERTILITY & DIAGNOSIS",
    title: "What is Infertility: Causes, Diagnosis, and Treatments",
    date: "14 Nov 2023",
    href: "/blog/what-is-infertility",
    description:
      "Start here: the most complete guide in this topic. Published 14 Nov 2023.",
    accent: "rose",
  },
  "ART & Advanced Procedures": {
    topic: "ART & ADVANCED PROCEDURES",
    title: "IVF Step by Step Procedure & How It Works",
    date: "9 Aug 2023",
    href: "/blog/ivf-process-step-by-step",
    description:
      "Start here: the most complete guide in this topic. Published 9 Aug 2023.",
    accent: "blue",
  },
  "Complex Conditions & Low Ovarian Reserve": {
    topic: "COMPLEX CONDITIONS & LOW OVARIAN RESERVE",
    title:
      "Can IVF Be Successful After Multiple Failed Cycles? A Complete Guide to Finding Hope After IVF Failure",
    date: "24 Jul 2026",
    href: "/blog/can-ivf-be-successful-after-multiple-failed-cycles",
    description:
      "Start here: the most complete guide in this topic. Published 24 Jul 2026.",
    accent: "rose",
  },
  "Diet, Lifestyle & Natural Fertility": {
    topic: "DIET, LIFESTYLE & NATURAL FERTILITY",
    title: "Preparing for IVF: Diet, Lifestyle & Medical Tips",
    date: "29 Jul 2026",
    href: "/blog/preparing-for-ivf-diet-lifestyle-medical-tips",
    description:
      "Start here: the most complete guide in this topic. Published 29 Jul 2026.",
    accent: "blue",
  },
  "Patient Guides, Regulations & FAQs": {
    topic: "PATIENT GUIDES, REGULATIONS & FAQS",
    title: "IVF Success Rates by Age: What Women Should Know in 2026",
    date: "21 Jul 2026",
    href: "/blog/ivf-success-rates-by-age",
    description:
      "Start here: the most complete guide in this topic. Published 21 Jul 2026.",
    accent: "rose",
  },
  "Choosing Your Doctor & Clinic": {
    topic: "CHOOSING YOUR DOCTOR & CLINIC",
    title:
      "Best IVF Doctor in Noida 2026: 15 Qualities Every Couple Should Look For Before Starting Treatment",
    date: "7 Jul 2026",
    href: "/blog/best-ivf-doctor-in-noida-2026",
    description:
      "Start here: the most complete guide in this topic. Published 7 Jul 2026.",
    accent: "rose",
  },
};

export const BLOG_TOPICS: BlogTopic[] = [
  {
    id: "understanding-infertility-diagnosis",
    title: "Understanding Infertility & Diagnosis",
    description:
      "Causes, symptoms, fertility tests, ovulation and male factor.",
    accent: "rose",
  },
  {
    id: "art-advanced-procedures",
    title: "ART & Advanced Procedures",
    description:
      "IVF, IUI, ICSI, embryo freezing, PGT-A and lab techniques.",
    accent: "blue",
  },
  {
    id: "complex-conditions-low-ovarian-reserve",
    title: "Complex Conditions & Low Ovarian Reserve",
    description: "Low AMH, PCOS, endometriosis, polyps and failed IVF.",
    accent: "rose",
  },
  {
    id: "diet-lifestyle-natural-fertility",
    title: "Diet, Lifestyle & Natural Fertility",
    description:
      "Nutrition, yoga, stress, preparing for IVF and natural tips.",
    accent: "blue",
  },
  {
    id: "patient-guides-regulations-faqs",
    title: "Patient Guides, Regulations & FAQs",
    description:
      "Success rates, safety, the law on gender selection and choosing IVF.",
    accent: "rose",
  },
  {
    id: "choosing-your-doctor-clinic",
    title: "Choosing Your Doctor & Clinic",
    description:
      "Finding the right IVF specialist in Noida, Delhi and Ghaziabad.",
    accent: "rose",
  },
];

export const BLOG_LISTING_ARTICLES: BlogListingArticle[] = [
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title:
      "Can You Work During IVF? A Practical Guide to Treatment-Day Planning",
    date: "2 Oct 2026",
    href: "/blog/can-you-work-during-ivf",
  },
  {
    topic: "ART & Advanced Procedures",
    title:
      "IUI Specialist in Noida – Complete Guide to Intrauterine Insemination (IUI)",
    date: "2 Aug 2026",
    href: "/blog/iui-specialist-in-noida-complete-guide-to-intrauterine-insemination-iui",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Know what secondary infertility is",
    date: "31 Jul 2026",
    href: "/blog/know-what-secondary-infertility-is",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title:
      "Male Infertility: Causes, Tests & Treatment Options (Complete Guide 2026)",
    date: "30 Jul 2026",
    href: "/blog/male-infertility-causes-tests-treatment-options",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "Preparing for IVF: Diet, Lifestyle & Medical Tips",
    date: "29 Jul 2026",
    href: "/blog/preparing-for-ivf-diet-lifestyle-medical-tips",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title:
      "Can IVF Be Successful After Multiple Failed Cycles? A Complete Guide to Finding Hope After IVF Failure",
    date: "24 Jul 2026",
    href: "/blog/can-ivf-be-successful-after-multiple-failed-cycles",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "PCOS and Pregnancy: The Complete Guide to Fertility & IVF",
    date: "22 Jul 2026",
    href: "/blog/pcos-and-pregnancy",
  },
  {
    topic: "Patient Guides, Regulations & FAQs",
    title: "IVF Success Rates by Age: What Women Should Know in 2026",
    date: "21 Jul 2026",
    href: "/blog/ivf-success-rates-by-age",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "Redefining Success in Diminished Ovarian Reserve (DOR)",
    date: "16 Jul 2026",
    href: "/blog/diminished-ovarian-reserve",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title:
      "PCOS Fertility Treatment in Noida: Expert Solutions for Every Stage of Your Pregnancy Journey",
    date: "15 Jul 2026",
    href: "/blog/pcos-fertility-treatment-in-noida-expert-solutions-for-every-stage-of-your-pregnancy-journey",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title:
      "Experienced IVF Doctor in Noida: Your Complete Guide to Choosing the Right Fertility Specialist",
    date: "15 Jul 2026",
    href: "/blog/expert-fertility-specialist-and-ivf-treatment-guide",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title:
      "Best Gynecologist for IVF in Noida – Why Dr. Mona Dahiya is a Trusted Choice for Fertility Care",
    date: "14 Jul 2026",
    href: "/blog/best-gynecologist-for-ivf-in-noida",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title:
      "Endometriosis and Infertility: How Hidden Inflammation Stops Implantation (And How to Fix It)",
    date: "14 Jul 2026",
    href: "/blog/endometriosis-and-infertility",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "Hysteroscopy Surgery in Delhi",
    date: "13 Jul 2026",
    href: "/blog/hysteroscopy-surgery-in-delhi",
  },
  {
    topic: "ART & Advanced Procedures",
    title:
      "The Science Behind Laser Assisted Hatching: Can It Fix Recurrent Embryo Implantation Failure?",
    date: "10 Jul 2026",
    href: "/blog/the-science-behind-laser-assisted-hatching",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title:
      "Best IVF Specialist in Noida: A Complete Guide to Finding the Right Fertility Expert",
    date: "8 Jul 2026",
    href: "/blog/best-ivf-specialist-in-noida-expert-fertility-care-and-advanced-ivf-treatment",
  },
  {
    topic: "ART & Advanced Procedures",
    title:
      "ICSI vs. IVF: How Precision Embryology Addresses Severe Male Factor Infertility",
    date: "8 Jul 2026",
    href: "/blog/icsi-vs-ivf",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title:
      "Best IVF Doctor in Noida 2026: 15 Qualities Every Couple Should Look For Before Starting Treatment",
    date: "7 Jul 2026",
    href: "/blog/best-ivf-doctor-in-noida-2026",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "What is PGT-A Testing, and Does Every IVF Cycle in India Need It?",
    date: "6 Jul 2026",
    href: "/blog/what-is-pgt-a-testing-in-india",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Everything You Should Know About The HSG Test",
    date: "23 Feb 2026",
    href: "/blog/everything-you-should-know-about-hsg-test",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "How to Get Pregnant Fast: 7 Tips for Boosting Fertility Naturally",
    date: "11 Jun 2025",
    href: "/blog/how-to-get-pregnant-fast",
  },
  {
    topic: "Patient Guides, Regulations & FAQs",
    title: "Can IVF Decide Gender of Baby?",
    date: "25 Dec 2024",
    href: "/blog/can-ivf-decide-gender-of-baby",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title: "Best IVF Clinic in Delhi | Little Angel IVF",
    date: "12 Dec 2024",
    href: "/blog/best-ivf-clinic-in-delhi",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title: "Best IVF Clinics in India | Dr Mona Dahiya",
    date: "1 Dec 2024",
    href: "/blog/best-ivf-clinics-in-india",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title: "Consult the Best Fertility Doctor in Noida",
    date: "22 May 2024",
    href: "/blog/consult-the-best-fertility-doctor-in-noida",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title:
      "Understanding Uterine Polyps: A Comprehensive Guide by Dr. Mona Dahiya",
    date: "9 May 2024",
    href: "/blog/understanding-uterine-polyps-a-comprehensive-guide-by-dr-mona-dahiya",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "Blastocyst Explained: Frequently Asked Questions",
    date: "20 Mar 2024",
    href: "/blog/blastocyst-explained-frequently-asked-questions",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "What is Healthy Eating? Nutrients, Tips, and More",
    date: "16 Nov 2023",
    href: "/blog/what-is-healthy-eating",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "What is Assisted Reproductive Technology (ART)?",
    date: "13 Nov 2023",
    href: "/blog/assisted-reproductive-technology",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "What is Infertility: Causes, Diagnosis, and Treatments",
    date: "14 Nov 2023",
    href: "/blog/what-is-infertility",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "PCOS and Infertility: Symptoms & Treatments",
    date: "10 Nov 2023",
    href: "/blog/pcos-and-infertility",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Infertility: Identifying Common Signs and Symptoms",
    date: "8 Nov 2023",
    href: "/blog/infertility-signs-and-symptoms",
  },
  {
    topic: "Patient Guides, Regulations & FAQs",
    title: "Infertility Treatment Options in India",
    date: "7 Nov 2023",
    href: "/blog/infertility-treatment-options",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Understanding Ovulation and Fertility",
    date: "5 Nov 2023",
    href: "/blog/ovulation-and-fertility",
  },
  {
    topic: "ART & Advanced Procedures",
    title:
      "Fertility Preservation: Who Should Consider It and What Are the Options?",
    date: "16 Oct 2023",
    href: "/blog/who-should-do-fertility-preservation",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "Role of Meditation for Fertility",
    date: "14 Oct 2023",
    href: "/blog/meditation-and-fertility",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "Connection Between Stress and Fertility",
    date: "13 Oct 2023",
    href: "/blog/stress-and-fertility",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "IVF With Low AMH? Possible or Not",
    date: "11 Oct 2023",
    href: "/blog/low-amh-ivf-treatment",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title: "Best Infertility Specialist in India",
    date: "10 Oct 2023",
    href: "/blog/best-infertility-specialist-in-india",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "Step-by-Step Guide to the ICSI Procedure",
    date: "9 Oct 2023",
    href: "/blog/icsi-ivf",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "How Aging Affects Fertility and Pregnancy?",
    date: "8 Oct 2023",
    href: "/blog/how-aging-affects-fertility-and-pregnancy",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "Fertility Yoga: 5 Yoga Poses to Increase Fertility",
    date: "7 Oct 2023",
    href: "/blog/fertility-yoga-5-yoga-poses-to-increase-fertility-in-females",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "Impact of Obesity on Fertility in Females",
    date: "6 Oct 2023",
    href: "/blog/impact-of-obesity-on-fertility-in-females-male",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "What is the Impact of Fertility on Sex?",
    date: "5 Oct 2023",
    href: "/blog/impact-of-fertility-on-sex",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "15 Best Fruits to Boost Fertility Naturally",
    date: "3 Oct 2023",
    href: "/blog/15-best-fruits-to-boost-fertility-naturally",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "10 Home Remedies to Increase Fertility",
    date: "3 Oct 2023",
    href: "/blog/home-remedies-to-increase-fertility",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "What are the Fertility Tests for Male & Female?",
    date: "2 Oct 2023",
    href: "/blog/fertility-tests-for-male-female",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "Embryo Freezing: Benefits & Success Rate",
    date: "30 Sep 2023",
    href: "/blog/embryo-freezing",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "IVF Embryo Transfer: Procedure, Risk & Cost",
    date: "27 Sep 2023",
    href: "/blog/ivf-embryo-transfer-procedure-risk-cost",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "7 Tips for Those Who Can't Get Pregnant",
    date: "22 Sep 2023",
    href: "/blog/7-tips-for-those-who-cant-get-pregnant",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "What is IVF and When is IVF Needed?",
    date: "17 Sep 2023",
    href: "/blog/what-is-ivf-and-when-is-ivf-needed",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "IUI Treatment Procedure Step by Step",
    date: "16 Sep 2023",
    href: "/blog/iui-treatment-procedure-step-by-step",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "Infertility Treatment by PRP in IVF",
    date: "13 Sep 2023",
    href: "/blog/infertility-treatment-by-prp-in-ivf",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "Find Best PCOS Treatment in Noida",
    date: "12 Sep 2023",
    href: "/blog/best-pcos-treatment-in-noida",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "ICSI IVF: Process, Success Rate & Benefits",
    date: "11 Sep 2023",
    href: "/blog/icsi-ivf-process-success-rate-benefits",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Causes of Infertility in Male & Female",
    date: "10 Sep 2023",
    href: "/blog/causes-of-infertility-in-male-female",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Can Female Infertility Be Cured?",
    date: "8 Sep 2023",
    href: "/blog/can-female-infertility-be-cured",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "How Much Does IUI Treatment Cost in Noida?",
    date: "2 Sep 2023",
    href: "/blog/iui-treatment-cost-in-noida",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "Why IUI Fails? | Causes & Signs of Failed IUI",
    date: "31 Aug 2023",
    href: "/blog/why-iui-fails-causes-signs-of-failed-iui-treatment",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "IVF Injections: Schedule, Cost & Pain Level",
    date: "30 Aug 2023",
    href: "/blog/ivf-injections-total-number-schedule-cost-pain-level",
  },
  {
    topic: "Patient Guides, Regulations & FAQs",
    title: "Can IVF Determine the Gender of a Baby?",
    date: "29 Aug 2023",
    href: "/blog/can-ivf-determine-the-gender-of-a-baby",
  },
  {
    topic: "Patient Guides, Regulations & FAQs",
    title: "Can IVF Be Done Twice? | Is IVF Safe?",
    date: "29 Aug 2023",
    href: "/blog/can-ivf-be-done-twice",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title: "Who is the Best IVF Doctor in Noida?",
    date: "26 Aug 2023",
    href: "/blog/who-is-the-best-ivf-doctor-in-noida",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "How Long Does IVF Take to Get Pregnant?",
    date: "26 Aug 2023",
    href: "/blog/how-long-does-ivf-take-to-get-pregnant",
  },
  {
    topic: "Patient Guides, Regulations & FAQs",
    title: "How Do I Know If IVF Is Right for Me?",
    date: "23 Aug 2023",
    href: "/blog/how-do-i-know-if-ivf-is-right-for-me",
  },
  {
    topic: "Understanding Infertility & Diagnosis",
    title: "Find Out Which Infertility Treatment is Best for You",
    date: "21 Aug 2023",
    href: "/blog/find-out-which-infertility-treatment-is-best-for-you",
  },
  {
    topic: "Diet, Lifestyle & Natural Fertility",
    title: "Improve Fertility Naturally by Eating Little Millet Rice",
    date: "17 Aug 2023",
    href: "/blog/improve-fertility-naturally-by-eating-little-millet-rice",
  },
  {
    topic: "Choosing Your Doctor & Clinic",
    title: "Best Infertility Treatment in Noida",
    date: "12 Aug 2023",
    href: "/blog/infertility-treatment-in-noida",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "How to Treat Your Low AMH Level?",
    date: "10 Aug 2023",
    href: "/blog/how-to-treat-low-amh-level",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "What is the Role of AMH Levels in Pregnancy?",
    date: "10 Aug 2023",
    href: "/blog/what-is-the-role-of-amh-levels-in-pregnancy",
  },
  {
    topic: "Complex Conditions & Low Ovarian Reserve",
    title: "How Low AMH Impacts Fertility",
    date: "10 Aug 2023",
    href: "/blog/how-low-amh-impact-fertility",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "IVF Step by Step Procedure & How It Works",
    date: "8 Aug 2023",
    href: "/blog/ivf-process-step-by-step",
  },
  {
    topic: "ART & Advanced Procedures",
    title: "10 Ways AI Is Changing Infertility Treatment",
    date: "8 Aug 2023",
    href: "/blog/10-ways-ai-impact-infertility-treatment",
  },
];

export const BLOG_LISTING_REVIEWS = [
  {
    title: "Compassion & Dedication",
    quote:
      "I had a fantastic experience with Dr. Mona Dahiya. From the moment we entered their IVF centre, I felt welcome and at ease. Dr. Mona was attentive, listened to my concerns, and explained my condition and treatment options clearly. Her professionalism and expertise shone through. I highly recommend Dr. Mona for her compassionate approach and dedication to patient care.",
    author: "Rajesh Shakya",
    role: "Patient review",
  },
  {
    title: "Compassion & Care",
    quote:
      "Dr. Mona Dahiya's expertise and compassionate care made our IVF journey a truly positive one. Her guidance throughout ovarian stimulation was exceptional. She clearly explained each step, addressed our concerns with patience, and her constant encouragement made all the difference. Thank you, Dr. Dahiya, for helping make our dream of parenthood a reality.",
    author: "Firoj khan",
    role: "Patient review",
  },
  {
    title: "",
    quote:
      "Dr. Mona Dahiya's reputation as a top IVF doctor is so well-deserved. Her expertise, combined with her genuine care and compassion, sets her apart. She treated us with respect, listened to our concerns, and empowered us to make informed decisions. Thanks to her, we're now proud parents, and our hearts are overflowing with gratitude.",
    author: "Manjesh Rajput",
    role: "Google patient review",
  },
];

