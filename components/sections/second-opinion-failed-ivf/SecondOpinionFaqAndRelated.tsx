"use client";

import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  FaqAccordion,
  RelatedTreatmentCompactCard,
  type FaqItem,
} from "@/components/ui/treatment";

const leftFaqs: FaqItem[] = [
  {
    question:
      "Why did my previous IVF cycle fail if the embryos were graded good quality?",
    answer:
      'When we grade embryos we see their morphological characteristics, like symmetry and speed of division. It\'s been found that more than 50% of these "good" grade embryos have abnormal chromosomes. Other reasons could be window of implantation being off, hidden chronic endometritis, undetected adenomyosis and high sperm DNA fragmentation.',
  },
  {
    question:
      "What is the difference between recurrent implantation failure (RIF) and a single failed IVF cycle?",
    answer: (
      <>
        You may not get pregnant from a good quality embryo just once. There can
        be random events that cause this failure. However when you have failed
        three good cleavage stage embryos or two top grade blastocysts then
        it&apos;s considered RIF. Here you need to look at more parameters to
        help you conceive. More about RIF{" "}
        <Link
          href="/recurrent-implantation-failure-rif"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    question:
      "How long should we wait after a failed IVF cycle before trying again?",
    answer:
      "After a failed IVF your body needs a minimum of one cycle (4-6 weeks) to regulate its hormones. However to find out the root cause you may want to take 1-2 months, so we can test for CD138 and treat for chronic endometritis. Your partner may also take antioxidant supplements for 60-90 days to reduce sperm DNA fragmentation.",
  },
  {
    question:
      "Can Dr. Mona Dahiya review records from another clinic without repeating all the tests?",
    answer:
      "Definitely, if you have recent valid tests. We will look at your profile and avoid doing duplicate work. If tests are missing like 3D sonography to check for adenomyosis, sperm DNA fragmentation or CD138, we can advise you on those.",
  },
  {
    question:
      "What role does sperm DNA fragmentation (DFI) play in repeated failure?",
    answer: (
      <>
        Routine semen analysis does not analyse sperm DNA damage. When
        it&apos;s higher than 25%-30% it can lead to day 3-day 5 arrest and non
        implantation. So it&apos;s advisable to get your sperm sorted either by
        doing MACS or using TESA sperm for ICSI. Find more about it{" "}
        <Link
          href="/sperm-dna-fragmentation-test"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    question:
      "I was advised donor eggs after a failed cycle. Is an own-egg cycle still possible?",
    answer: (
      <>
        As mentioned above there are various reasons for your IVF cycle failing.
        One is that you may have had a wrong protocol for your ovaries. There
        are newer treatments to boost egg growth. Using microdose flare/ DuoStim
        can increase chances of success for patients with low AMH or higher age.
        Check out{" "}
        <Link
          href="/best-low-amh-treatment-in-noida"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Low AMH Treatment
        </Link>
        .
      </>
    ),
  },
  {
    question: "What happens during a second-opinion consultation?",
    answer:
      "You can expect Dr Mona to study your record. She will go through your day-wise IVF cycles: what were your estradiol levels on day of trigger, progesterone before trigger, number and grade of embryos, how many fertilised, etc. If you are coming in person she will do a TVS scan of your cavity to check for defects in junctional zone or endometrial perfusion, and plan your treatment accordingly.",
  },
  {
    question: "Where can I book an in-person or video second opinion?",
    answer:
      "Our clinics are located at Noida: 3rd Floor, Plot No. K-06, above FirstCry, Baraula, Sector 49, Noida, Uttar Pradesh 201301; Ghaziabad: 2nd Floor, RDC plot C-53A, near Bikanerwala, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002; and Delhi: Building No 41, First Floor, Ring Road, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi 110024. If you can't travel to us, book an appointment on our number +91 92679 82924 or write to us at info@drmonadahiya.com.",
  },
  {
    question: "What is an ERA test, and do I need it after a failed transfer?",
    answer: (
      <>
        ERA test tells us if your endometrium was receptive, non receptive or
        had passed the window. Approximately 20%-25% of patients who suffer from
        RIF have a window of implantation which is off by 12-24 hrs. We would
        recommend doing an ERA if you had failed twice with good blastocyst and
        had lining &gt; 8 mm. Know more about it{" "}
        <Link
          href="/endometrial-receptivity-analysis-era-test-in-noida"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          here
        </Link>
        .
      </>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Why do my embryos keep stopping between Day 3 and Day 5?",
    answer:
      "From Day 1 to Day 3 your embryos are using the food source provided by the egg cell. After Day 3 the embryo starts to express its own DNA, from both male and female cell. This is called Embryonic Genome Activation. It could be caused by damaged sperm DNA or centrosome defect, or embryo with chromosome issues. Once we figure out what your cause is we can select better sperm or give mito support.",
  },
  {
    question:
      "What is chronic endometritis (CD138), and how does it stop implantation?",
    answer:
      "This occurs when your lining has signs of infection/inflammation. You won't have pain or feel feverish. But when an embryo implants it requires a special immune environment. Once we do CD138 biopsies we can give you antibiotics and have 85% clearance of this issue.",
  },
  {
    question:
      "Could silent adenomyosis or a hidden hydrosalpinx explain my failed IVF?",
    answer:
      "Yes! It goes undetected sometimes as well. Hydrosalpinx secretes toxins which can prevent your embryo from implanting. It's been found to decrease implantation rate by almost 50%. In case of adenomyosis we will look at your junctional zone and do surgery or give you 2-3 months of injectable down regulation.",
  },
  {
    question: "Why was my cycle cancelled for a thin lining (under 7 mm)?",
    answer: (
      <>
        There could be poor perfusion of your endometrium. You may have some
        degree of Asherman&apos;s if you&apos;ve had any previous D&amp;C
        procedures. Or you could be resistant to oral estrogen. By changing your
        protocol to remove adhesions or use patches and sildenafil or aspirin we
        can build your lining. You could even opt for intra-uterine{" "}
        <Link
          href="/platelet-rich-plasma-prp-ivf-treatment-in-noida"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          PRP
        </Link>
        .
      </>
    ),
  },
  {
    question:
      "Is a frozen embryo transfer better than a fresh transfer after a failed cycle?",
    answer: (
      <>
        In most cases yes. Because during your fresh IVF cycle you could have
        sky-rocketed estradiol levels or elevated progesterone on day of
        trigger. This could hinder your endometrium and the embryo. So
        it&apos;s advisable to freeze and then give your uterus a break. Know
        more about{" "}
        <Link
          href="/frozen-embryo-transfer"
          className="font-medium text-blue underline underline-offset-2 transition-colors hover:text-rose"
        >
          Frozen Embryo Transfers
        </Link>
        .
      </>
    ),
  },
  {
    question: "How much does a second opinion cost?",
    answer:
      "Consulting in person with Dr Mona will cost ₹1,500 to ₹2,500. You will also be doing a 3D scan if we decide to do it for you. For video calls it's $25 / ₹1,000.",
  },
  {
    question: "How many failed cycles before I should get a second opinion?",
    answer:
      "Once you fail with a blastocyst or have failed two IVF cycles we would suggest consulting someone else. Or if your embryo arrest and fertilization rates have been low you can visit us.",
  },
  {
    question: "What tests are most often missed after failed IVF?",
    answer:
      "Most commonly people ignore sperm DNA fragmentation, CD138, doing a hysteroscopy, and thyroid/ prolactin and progesterone level before trigger.",
  },
  {
    question: "Will a second opinion mean starting all over again?",
    answer:
      "Not always. In most cases you can continue using your current tests and frozen embryos. Just have to tweak the protocol and maybe do something on lab level.",
  },
];

const relatedTreatments = [
  { title: "Frozen Embryo Transfer", href: "/frozen-embryo-transfer" },
  { title: "Sperm DNA Fragmentation", href: "/sperm-dna-fragmentation-test" },
  { title: "Hysteroscopy", href: "/hysteroscopy-treatment" },
  { title: "Endometriosis", href: "/endometriosis-fertility-treatment" },
  {
    title: "Fallopian Tube Blockage",
    href: "/fallopian-tube-blockage-treatment",
  },
  {
    title: "Recurrent Implantation Failure",
    href: "/recurrent-implantation-failure-rif",
  },
  { title: "Azoospermia", href: "/azoospermia-treatment" },
  { title: "Low Sperm Count", href: "/low-sperm-count-oligospermia" },
  {
    title: "Surgical Sperm Retrieval",
    href: "/surgical-sperm-retrieval-tesa-pesa",
  },
  { title: "Sperm Freezing", href: "/semen-sperm-freezing" },
  { title: "Embryo Freezing", href: "/embryo-cryopreservation" },
  {
    title: "Oncofertility",
    href: "/oncofertility-cancer-fertility-preservation",
  },
];

export default function SecondOpinionFaqAndRelated() {
  return (
    <>
      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Got questions?"
          title={
            <>
              Frequently Asked Questions:
              <br />
              Second Opinion for Failed IVF
            </>
          }
          subtitle="We will help you find the right solution by answering all your doubts."
        />

        <FaqAccordion leftItems={leftFaqs} rightItems={rightFaqs} />
      </TreatmentSection>

      <TreatmentSection>
        <TreatmentSectionHeader
          eyebrow="Treatments"
          title="Related Fertility Treatments"
        />

        <Stagger
          delay={0.03}
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {relatedTreatments.map((item) => (
            <StaggerItem key={item.title}>
              <RelatedTreatmentCompactCard {...item} />
            </StaggerItem>
          ))}
        </Stagger>
      </TreatmentSection>
    </>
  );
}

