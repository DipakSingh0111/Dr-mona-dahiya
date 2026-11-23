import type { BlogPostData, InlineTextSegment } from "./blogTypes";
import type { LocationPageData } from "./locations";
import routeSchemaMeta from "./routeSchemaMeta.json";
import { BASE_URL } from "./sitemapData";

const TELEPHONE =
  process.env.NEXT_PUBLIC_TELEPHONE ||
  process.env.TELEPHONE ||
  "+91-92679-82924";

const EMAIL =
  process.env.NEXT_PUBLIC_EMAIL ||
  process.env.EMAIL ||
  "info@drmonadahiya.com";

const INSTAGRAM =
  process.env.NEXT_PUBLIC_INSTAGRAM ||
  process.env.INSTAGRAM ||
  "https://www.instagram.com/drmonadahiya/";

const YOUTUBE =
  process.env.NEXT_PUBLIC_YOUTUBE ||
  process.env.YOUTUBE ||
  "https://www.youtube.com/@drmonadahiya";

const LINKEDIN =
  process.env.NEXT_PUBLIC_LINKEDIN ||
  process.env.LINKEDIN ||
  "https://www.linkedin.com/company/littleangelivf/";

const SAME_AS = [INSTAGRAM, YOUTUBE, LINKEDIN].filter(Boolean);

export function getGlobalSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Dr. Mona Dahiya | Fertility & IVF Specialist",
        description:
          "25+ years in reproductive medicine. Gold medalist MBBS & MD, IVF fellowship at Singapore General Hospital, founder of Little Angel IVF.",
        inLanguage: "en-IN",
      },
      {
        "@type": "Physician",
        "@id": `${BASE_URL}/#physician`,
        name: "Dr. Mona Dahiya",
        url: BASE_URL,
        image: `${BASE_URL}/images/Confident-Doctor.png`,
        jobTitle: "Fertility & IVF Specialist",
        description:
          "25+ years in reproductive medicine. Gold medalist MBBS & MD, IVF fellowship at Singapore General Hospital, founder of Little Angel IVF.",
        medicalSpecialty: "Reproductive Medicine",
        telephone: TELEPHONE,
        email: EMAIL,
        sameAs: SAME_AS,
        worksFor: {
          "@id": `${BASE_URL}/#clinic`,
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${BASE_URL}/#clinic`,
        name: "Little Angel IVF — Dr. Mona Dahiya",
        url: BASE_URL,
        telephone: TELEPHONE,
        email: EMAIL,
        medicalSpecialty: "Reproductive Medicine",
        openingHours: "Mo-Sa 10:00-17:00",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "3rd Floor, K-06, above FirstCry, Baraula, Sector 49",
          addressLocality: "Noida",
          addressRegion: "UP",
          postalCode: "201301",
          addressCountry: "IN",
        },
        department: [
          {
            "@type": "MedicalClinic",
            name: "Little Angel IVF — Noida Sector 49",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "3rd Floor, K-06, above FirstCry, Baraula, Sector 49",
              addressLocality: "Noida",
              addressRegion: "UP",
              postalCode: "201301",
              addressCountry: "IN",
            },
          },
          {
            "@type": "MedicalClinic",
            name: "Little Angel IVF — Lajpat Nagar, South Delhi",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Building Number 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV",
              addressLocality: "New Delhi",
              addressRegion: "DL",
              postalCode: "110024",
              addressCountry: "IN",
            },
          },
          {
            "@type": "MedicalClinic",
            name: "Little Angel IVF — Raj Nagar, Ghaziabad",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "2nd Floor, RDC, C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar",
              addressLocality: "Ghaziabad",
              addressRegion: "UP",
              postalCode: "201002",
              addressCountry: "IN",
            },
          },
        ],
      },
    ],
  };
}

const PATIENT_REVIEWS = [
  {
    author: "Priya & Rohit",
    quote: "Dr. Mona has made our dream come true and we are very Grateful.",
  },
  {
    author: "Anjali & Shivam",
    quote:
      "We have been blessed with twin boys and have all praises for Dr Mona.",
  },
  {
    author: "Meena & Ganesh",
    quote: "Thank You Dr. Mona for giving us a little one after 8 years.",
  },
  {
    author: "Neha & Vikram",
    quote: "Dr. Dahiya's guidance and support has given us precious twins.",
  },
  {
    author: "Shikha & Amit",
    quote: "Our family is complete because of her Magical Treatment.",
  },
  {
    author: "Kavita & Purnav",
    quote: "After multiple failures, we finally have our baby boy.",
  },
  {
    author: "Divya & Pratyaksh",
    quote: "Her support and medical brilliance are exceptional.",
  },
  {
    author: "Sonal & Raghav",
    quote:
      "Dr. Mona's IUI treatment brought us our baby after years of heartbreak.",
  },
];

export function getReviewsPageSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${BASE_URL}/best-ivf-patient-reviews#webpage`,
        url: `${BASE_URL}/best-ivf-patient-reviews`,
        name: "Google Verified Patient Reviews | Dr. Mona Dahiya",
        description:
          "Read Google verified patient reviews of Dr. Mona Dahiya, grouped by theme — first cycle, compassion, ICSI, IUI, expertise, Noida, Ghaziabad, Delhi and more.",
        about: {
          "@id": `${BASE_URL}/#physician`,
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${BASE_URL}/#clinic`,
        name: "Little Angel IVF — Dr. Mona Dahiya",
        review: PATIENT_REVIEWS.map((item) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: item.author,
          },
          reviewBody: item.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
        })),
      },
    ],
  };
}

const PRICING_FAQS = [
  {
    question: "Is zero-interest EMI available for IVF?",
    answer:
      "You can get loans with no interest from healthcare NBFCs and banks. You can pay between 6 and 12 EMIs without paying interest (some allow up to 18 EMIs). They offer 0% interest during this period by absorbing the interest during a promotional offer. Processing fees will still be charged by the NBFC/bank.",
  },
  {
    question: "Who decides my loan eligibility and EMI?",
    answer:
      "Only the bank/NBFC you are applying to for the loan can tell you if you qualify and what your EMI amount will be.",
  },
  {
    question: "Can medicine costs be included in the EMI?",
    answer:
      "You can include injections and medicine in your loan. We can share an estimate of the entire cost, including medications, as well.",
  },
  {
    question: "Where can I get a cost estimate from Dr. Mona Dahiya?",
    answer:
      "Dr Mona Dahiya can be met at three centres for consultations and discussion on the cost of treatment in Noida (Sector 49), Ghaziabad (Raj Nagar), and Delhi (Lajpat Nagar IV).",
  },
  {
    question: "What is the total cost of one IVF cycle?",
    answer:
      "The cost of 1 IVF cycle including ICSI and blastocyst culture is between ₹1,25,000 and ₹1,75,000, and the cost of medicines ranges from ₹45,000 to ₹75,000. So the total will be around ₹1.5 – 2.5 lakh.",
  },
  {
    question: "What documents do I need for an IVF loan?",
    answer:
      "You need PAN, Aadhaar, bank statements for 3 months and salary slips (income tax return if self-employed).",
  },
  {
    question: "How quickly is an IVF loan approved?",
    answer:
      "It depends on the bank, but generally it's less than 24 hours once you share all documents with the bank/NBFC.",
  },
  {
    question: "Does health insurance cover IVF in India?",
    answer:
      "Generally, normal health insurance doesn't cover IVF treatment. But corporate group insurance and a few other policies cover IVF with a limit and a waiting period between 9 months and 3 years.",
  },
  {
    question:
      "Can our corporate policy cover fertility care if the HR handbook does not mention IVF?",
    answer:
      "If your corporate policy covers infertility, it might help with some of the charges related to IVF such as testing, hysteroscopy and other day-care procedures. Reach out to your company HR department or TPA.",
  },
  {
    question: "What does a frozen embryo transfer cost after IVF?",
    answer:
      "Frozen embryo transfer is an additional cost after completing an IVF cycle. It covers the cost of preparing the lining and thawing your embryo. We share an estimate of this if you have any extra embryos left after fresh transfer.",
  },
];

export function getPricingPageSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${BASE_URL}/ivf-cost-emi#webpage`,
        url: `${BASE_URL}/ivf-cost-emi`,
        name: "IVF Cost and EMI Financing in Delhi, Noida & Ghaziabad | Dr. Mona Dahiya",
        description:
          "Transparent medical costs of IVF treatment at Noida, Delhi and Ghaziabad by Dr Mona Dahiya, with health insurance details and flexible EMI plans from leading banks and NBFCs.",
        about: {
          "@id": `${BASE_URL}/#physician`,
        },
        mainEntity: {
          "@type": "OfferCatalog",
          name: "Estimated IVF Cost Tiers in Delhi, Noida & Ghaziabad",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Mild Stimulation or Natural IVF",
              description: "₹1,00,000, does not include injections.",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "100000",
                priceCurrency: "INR",
              },
            },
            {
              "@type": "Offer",
              name: "IVF + ICSI + Blastocyst Culture",
              description:
                "Between ₹1,25,000 and ₹1,75,000, plus injection costs ranging between ₹45,000 and ₹75,000.",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "125000",
                maxPrice: "175000",
                priceCurrency: "INR",
              },
            },
            {
              "@type": "Offer",
              name: "Monthly IVF EMI",
              description:
                "Ranges between ₹8,500 and ₹14,500 per month depending on EMI tenure and advance.",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                minPrice: "8500",
                maxPrice: "14500",
                priceCurrency: "INR",
                unitText: "MONTH",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/ivf-cost-emi#faq`,
        mainEntity: PRICING_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

function inlineSegmentsToText(segments: InlineTextSegment[]): string {
  return segments
    .map((seg) => {
      if (typeof seg === "string") return seg;
      if ("bold" in seg) return seg.bold;
      if ("text" in seg) return seg.text;
      return "";
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

export function getBreadcrumbSchema(
  pathname: string,
  items: { label: string; href?: string }[]
): Record<string, unknown> {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const listItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.label,
      item: item.href ? `${BASE_URL}${item.href}` : `${BASE_URL}${normalized}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };
}

export function getBlogPostSchema(post: BlogPostData): Record<string, unknown> {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const imageUrl = post.meta.image?.src
    ? post.meta.image.src.startsWith("http")
      ? post.meta.image.src
      : `${BASE_URL}${post.meta.image.src}`
    : `${BASE_URL}/images/Confident-Doctor.png`;

  const faqEntries: { question: string; answer: string }[] = [];
  for (const section of post.sections) {
    for (const block of section.blocks) {
      if (block.type === "faqs") {
        for (const item of block.items) {
          const question = inlineSegmentsToText(item.question);
          const answer = inlineSegmentsToText(item.answer);
          if (question && answer) {
            faqEntries.push({ question, answer });
          }
        }
      }
    }
  }

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      url,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      headline: post.hero.title,
      description: post.metadata.description,
      image: imageUrl,
      ...(post.meta.date ? { datePublished: post.meta.date } : {}),
      author: {
        "@id": `${BASE_URL}/#physician`,
      },
      publisher: {
        "@id": `${BASE_URL}/#clinic`,
      },
      inLanguage: "en-IN",
    },
  ];

  if (faqEntries.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqEntries.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getLocationPageSchema(
  page: LocationPageData
): Record<string, unknown> {
  const url = `${BASE_URL}/location/${page.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.metadata.title,
      description: page.metadata.description,
      about: {
        "@id": `${BASE_URL}/#clinic`,
      },
      inLanguage: "en-IN",
    },
  ];

  if (page.faq?.items?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faq.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getMedicalProcedureSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  const url = `${BASE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        about: {
          "@id": `${url}#procedure`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#procedure`,
        name,
        description,
        procedureType: "Therapeutic",
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Reproductive Medicine",
        },
        performer: {
          "@id": `${BASE_URL}/#physician`,
        },
      },
    ],
  };
}

const IVF_PAGE_FAQS = [
  {
    question: "What is the difference between conventional IVF and ICSI?",
    answer:
      "In Normal IVF your eggs are mixed with millions of washed sperm. In case of ICSI we select 1 sperm per egg that is retrieved and place that sperm inside the egg. Using ICSI can help if there is severe male factor and poor fertilization in past attempts.",
  },
  {
    question: "How long does one complete IVF cycle take?",
    answer:
      "It takes approx 12 to 14 days. You begin your stimulation on day 2 of your cycle till we retrieve your eggs. If you are opting for a frozen transfer you will require 2-3 weeks for preparation of your uterus lining and 1 more blood test after 14 days.",
  },
  {
    question: "Is egg retrieval painful?",
    answer:
      "No. You are put to sleep for 15-20 minutes under IV sedation. There could be some cramps after your procedure which subside with regular medication.",
  },
  {
    question: "How many hormone injections are needed?",
    answer:
      "It's given once a day. These are subcutaneous injections using very thin needles, as thin as the insulin needle that people who have diabetes use.",
  },
  {
    question: "Do I need to stay in hospital?",
    answer:
      "No. Both egg retrieval and embryo transfer are day care procedures. You may want to rest at home after but you should be in and out of our clinic within 2-3 hours.",
  },
  {
    question: "Which tests are needed before IVF?",
    answer:
      "Scan of your eggs (antral follicle count), semen analysis for your husband, ultrasound to see your uterine cavity, blood tests to check your hormone levels (thyroid, prolactin etc.) and blood tests to rule out any infections for both of you.",
  },
  {
    question: "When will I know if IVF worked?",
    answer:
      "After 14 days from transfer. Blood test (Beta-hCG) for pregnancy is done on the 14th day from date of fresh transfer (12-14 days for frozen blastocyst transfer).",
  },
  {
    question: "Is strict bed rest needed after embryo transfer?",
    answer:
      'NO! Studies have proven that resting does not help your embryos implant, and you also cannot "drop" your embryos. Take some rest after your transfer at our clinic and return home to do normal activities. Just don\'t lift anything heavy for minimum 1 week.',
  },
  {
    question: "How many embryos should be transferred?",
    answer:
      "Just 1 embryo. Dr. Dahiya does elective single blastocyst transfer whenever possible. This gives you the best chance of pregnancy and reduces the risk of multiple pregnancy and preterm births.",
  },
  {
    question: "Are frozen transfers as effective as fresh transfers?",
    answer:
      "YES! We use the vitrification method to freeze your embryos, which has given us survival rates of over 95%. Frozen transfers also have better IVF success rates than fresh cycles because we can optimize your uterine lining with medication without giving you high doses of hormones.",
  },
  {
    question: "Does IVF increase the risk of birth defects?",
    answer:
      "Approximately 95%. Risk of birth defect is slightly higher compared to natural pregnancy but we will explain this to you in detail during your visit.",
  },
  {
    question: "What is OHSS and how is it prevented?",
    answer:
      "OHSS means Ovarian Hyper Stimulating Syndrome. It occurs when your body responds too much to your stimulation drugs. By following antagonist protocol and using a lower dose of stimulation we can prevent OHSS. Also customizing your dose and trigger shot and doing a freeze-all will reduce the chances of getting OHSS.",
  },
  {
    question: "Can I work during IVF?",
    answer:
      "Yes. Most of our patients take their injection and go to office/work on the same day. You might have to take 1 or 2 days leave for your retrieval.",
  },
  {
    question: "What should I avoid after transfer?",
    answer:
      "Don't do any hard exercises or lift heavy weights, no smoking/alcohol and no hot baths till you have taken your pregnancy test.",
  },
  {
    question: "Can I have IVF with my own eggs if my AMH is below 0.5 ng/mL?",
    answer:
      "Yes we do. We test your egg reserve by doing a blood test called AMH. We can perform egg enhancement techniques such as DuoStim protocol or mini IVF to help you conceive with your own eggs.",
  },
  {
    question: "What causes recurrent implantation failure?",
    answer:
      "Some reasons can be chromosomal abnormality of your embryos, chronic endometritis (which we diagnose through CD138 test) or your uterine cavity being abnormal/wrong implantation window (ERA Test).",
  },
  {
    question: "What is the success rate of IVF with Dr. Mona Dahiya?",
    answer:
      "At package clinics the success rate is more than 90%. Individual women can achieve a success rate of more than 90% if their age is below 30 years. When we talk about frozen blastocyst transfer the success rates depend upon the clinic and range between 65% to 80% if the woman's age is below 35 years.",
  },
  {
    question: "How much does IVF cost?",
    answer:
      "For most women we charge anywhere between ₹1.5L - ₹2.5L for 1 full IVF cycle (including fresh/frozen transfer). We offer EMI facility.",
  },
  {
    question: "Does age affect IVF success?",
    answer:
      "Yes. Your chances of getting pregnant are highest below the age of 35. After 38-40 your fertility starts decreasing because your egg quality declines. This is another reason why you should come in for an infertility evaluation when you want to have a baby.",
  },
  {
    question: "How many IVF cycles might I need?",
    answer:
      "Most couples will achieve pregnancy using their fresh embryos in their first or second cycle of IVF. Your chances of getting pregnant increase with each cycle of IVF if you do fresh transfers and freeze your remaining embryos.",
  },
  {
    question: "Can PCOS or endometriosis affect IVF?",
    answer:
      "Yes. Both IVF in PCOS and endometriosis give great results with IVF. There are special protocols used in PCOS IVF which help prevent OHSS. Endometriosis can be corrected prior to IVF using medications that preserve your eggs or through surgery.",
  },
  {
    question: "Is sex selection allowed with IVF in India?",
    answer:
      "No. Sex selection is not allowed in India. According to the ART Act and PC-PNDT Act it's not legal to provide or advise anyone to do sex selection.",
  },
  {
    question: "What are the age limits for IVF in India?",
    answer:
      "Women can undergo IVF between the age of 21-50 years. Men can do IVF between age 21-55 years.",
  },
  {
    question: "Can I consult Dr. Dahiya online first?",
    answer:
      "Yes. You can book an online appointment with us for ₹1,000 (if you are located in India) and $25 if you're consulting from outside India.",
  },
  {
    question: "Where can I consult Dr. Mona Dahiya?",
    answer:
      "We are located in Noida, Ghaziabad, and Delhi.",
  },
  {
    question: "Can single women have IVF in India?",
    answer:
      "Yes, you can do IVF if you are a single woman using your own eggs in India. There are 2 conditions that you must fulfill: you must be an Indian citizen, with a female government issued ID proof that you were born as a female.",
  },
  {
    question: "Does insurance cover IVF?",
    answer:
      "Insurance does not pay for IVF as it is an elective procedure. A few good corporate/women friendly insurance companies are offering a limited amount towards IVF but they have a huge waiting period.",
  },
];

export function getIvfFaqsPageSchema(
  path: "/ivf-faqs" | "/comprehensive-ivf-faqs" = "/ivf-faqs"
): Record<string, unknown> {
  const url = `${BASE_URL}${path}`;
  const isComprehensive = path === "/comprehensive-ivf-faqs";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: isComprehensive
          ? "Comprehensive IVF FAQs | Answered by Dr. Mona Dahiya"
          : "IVF FAQs | Answered by Dr. Mona Dahiya",
        description:
          "IVF frequently asked questions answered by Dr. Mona Dahiya — clinical process, embryo transfer, success rates, costs, ART Act rules and clinic details.",
        about: {
          "@id": `${BASE_URL}/#physician`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: IVF_PAGE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

type RouteMetaEntry = {
  type: string;
  title: string;
  description: string;
};

const ROUTE_META = routeSchemaMeta as Record<string, RouteMetaEntry>;

export function getRoutePageSchema(
  pathname: string
): Record<string, unknown> | null {
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const entry = ROUTE_META[normalized];
  if (!entry) return null;

  const url = normalized === "/" ? BASE_URL : `${BASE_URL}${normalized}`;

  if (entry.type === "MedicalProcedure") {
    return getMedicalProcedureSchema({
      path: normalized,
      name: entry.title,
      description: entry.description,
    });
  }

  if (entry.type === "MedicalCondition") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": `${url}#webpage`,
          url,
          name: entry.title,
          description: entry.description,
          about: {
            "@id": `${url}#condition`,
          },
          inLanguage: "en-IN",
        },
        {
          "@type": "MedicalCondition",
          "@id": `${url}#condition`,
          name: entry.title,
          description: entry.description,
          relevantSpecialty: {
            "@type": "MedicalSpecialty",
            name: "Reproductive Medicine",
          },
        },
      ],
    };
  }

  if (entry.type === "AboutPage") {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      url,
      name: entry.title,
      description: entry.description,
      mainEntity: {
        "@id": `${BASE_URL}/#physician`,
      },
      inLanguage: "en-IN",
    };
  }

  if (entry.type === "ContactPage") {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${url}#webpage`,
      url,
      name: entry.title,
      description: entry.description,
      mainEntity: {
        "@id": `${BASE_URL}/#clinic`,
      },
      inLanguage: "en-IN",
    };
  }

  if (entry.type === "CollectionPage") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: entry.title,
      description: entry.description,
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      inLanguage: "en-IN",
    };
  }

  if (entry.type === "MedicalClinic") {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: entry.title,
      description: entry.description,
      about: {
        "@id": `${BASE_URL}/#clinic`,
      },
      mainEntity: {
        "@id": `${BASE_URL}/#physician`,
      },
      inLanguage: "en-IN",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": entry.type === "HomePage" ? "MedicalWebPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: entry.title,
    description: entry.description,
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
    about: {
      "@id": `${BASE_URL}/#physician`,
    },
    inLanguage: "en-IN",
  };
}
