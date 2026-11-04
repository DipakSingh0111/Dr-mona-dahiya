import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/treatments",
        destination: "/our-services",
        permanent: true,
      },
      {
        source: "/treatments/:path*",
        destination: "/our-services/:path*",
        permanent: true,
      },
      {
        source: "/icsi-treatment",
        destination: "/intracytoplasmic-sperm-injection-icsi-treatment",
        permanent: true,
      },
      {
        "source": "/icsi-treatment/:path*",
        "destination": "/intracytoplasmic-sperm-injection-icsi-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/mini-ivf",
        "destination": "/minimal-stimulation-mini-ivf",
        "permanent": true
      },
      {
        "source": "/mini-ivf/:path*",
        "destination": "/minimal-stimulation-mini-ivf/:path*",
        "permanent": true
      },
      {
        "source": "/laser-assisted-hatching",
        "destination": "/best-laser-assisted-hatching-doctor-in-noida",
        "permanent": true
      },
      {
        "source": "/laser-assisted-hatching/:path*",
        "destination": "/best-laser-assisted-hatching-doctor-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/egg-freezing",
        "destination": "/best-egg-freezing-center-in-noida",
        "permanent": true
      },
      {
        "source": "/egg-freezing/:path*",
        "destination": "/best-egg-freezing-center-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/sperm-freezing",
        "destination": "/semen-sperm-freezing",
        "permanent": true
      },
      {
        "source": "/sperm-freezing/:path*",
        "destination": "/semen-sperm-freezing/:path*",
        "permanent": true
      },
      {
        "source": "/embryo-freezing",
        "destination": "/embryo-cryopreservation",
        "permanent": true
      },
      {
        "source": "/embryo-freezing/:path*",
        "destination": "/embryo-cryopreservation/:path*",
        "permanent": true
      },
      {
        "source": "/oncofertility",
        "destination": "/oncofertility-cancer-fertility-preservation",
        "permanent": true
      },
      {
        "source": "/oncofertility/:path*",
        "destination": "/oncofertility-cancer-fertility-preservation/:path*",
        "permanent": true
      },
      {
        "source": "/pgt-testing",
        "destination": "/preimplantation-genetic-testing-pgt-center-in-noida",
        "permanent": true
      },
      {
        "source": "/pgt-testing/:path*",
        "destination": "/preimplantation-genetic-testing-pgt-center-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/prp-therapy",
        "destination": "/platelet-rich-plasma-prp-ivf-treatment-in-noida",
        "permanent": true
      },
      {
        "source": "/prp-therapy/:path*",
        "destination": "/platelet-rich-plasma-prp-ivf-treatment-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/era-test",
        "destination": "/endometrial-receptivity-analysis-era-test-in-noida",
        "permanent": true
      },
      {
        "source": "/era-test/:path*",
        "destination": "/endometrial-receptivity-analysis-era-test-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/follicular-monitoring",
        "destination": "/follicular-ultrasound",
        "permanent": true
      },
      {
        "source": "/follicular-monitoring/:path*",
        "destination": "/follicular-ultrasound/:path*",
        "permanent": true
      },
      {
        "source": "/sperm-dna-fragmentation",
        "destination": "/sperm-dna-fragmentation-test",
        "permanent": true
      },
      {
        "source": "/sperm-dna-fragmentation/:path*",
        "destination": "/sperm-dna-fragmentation-test/:path*",
        "permanent": true
      },
      {
        "source": "/laparoscopy-hysteroscopy",
        "destination": "/best-laparoscopic-surgeon-in-noida",
        "permanent": true
      },
      {
        "source": "/laparoscopy-hysteroscopy/:path*",
        "destination": "/best-laparoscopic-surgeon-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/hysteroscopy",
        "destination": "/hysteroscopy-treatment",
        "permanent": true
      },
      {
        "source": "/hysteroscopy/:path*",
        "destination": "/hysteroscopy-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/donor-gamete",
        "destination": "/donor-gametes",
        "permanent": true
      },
      {
        "source": "/donor-gamete/:path*",
        "destination": "/donor-gametes/:path*",
        "permanent": true
      },
      {
        "source": "/surgical-sperm-retrieval",
        "destination": "/surgical-sperm-retrieval-tesa-pesa",
        "permanent": true
      },
      {
        "source": "/surgical-sperm-retrieval/:path*",
        "destination": "/surgical-sperm-retrieval-tesa-pesa/:path*",
        "permanent": true
      },
      {
        "source": "/female-infertility",
        "destination": "/female-infertility-treatment",
        "permanent": true
      },
      {
        "source": "/female-infertility/:path*",
        "destination": "/female-infertility-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/low-amh",
        "destination": "/best-low-amh-treatment-in-noida",
        "permanent": true
      },
      {
        "source": "/low-amh/:path*",
        "destination": "/best-low-amh-treatment-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/pcos-treatment",
        "destination": "/best-pcos-prod-treatment-centre-in-noida",
        "permanent": true
      },
      {
        "source": "/pcos-treatment/:path*",
        "destination": "/best-pcos-prod-treatment-centre-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/endometriosis",
        "destination": "/endometriosis-fertility-treatment",
        "permanent": true
      },
      {
        "source": "/endometriosis/:path*",
        "destination": "/endometriosis-fertility-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/fallopian-tube-blockage",
        "destination": "/fallopian-tube-blockage-treatment",
        "permanent": true
      },
      {
        "source": "/fallopian-tube-blockage/:path*",
        "destination": "/fallopian-tube-blockage-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/recurrent-miscarriage",
        "destination": "/miscarriage-treatment-in-noida",
        "permanent": true
      },
      {
        "source": "/recurrent-miscarriage/:path*",
        "destination": "/miscarriage-treatment-in-noida/:path*",
        "permanent": true
      },
      {
        "source": "/recurrent-implantation-failure",
        "destination": "/recurrent-implantation-failure-rif",
        "permanent": true
      },
      {
        "source": "/recurrent-implantation-failure/:path*",
        "destination": "/recurrent-implantation-failure-rif/:path*",
        "permanent": true
      },
      {
        "source": "/male-infertility",
        "destination": "/male-infertility-treatment",
        "permanent": true
      },
      {
        "source": "/male-infertility/:path*",
        "destination": "/male-infertility-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/azoospermia",
        "destination": "/azoospermia-treatment",
        "permanent": true
      },
      {
        "source": "/azoospermia/:path*",
        "destination": "/azoospermia-treatment/:path*",
        "permanent": true
      },
      {
        "source": "/low-sperm-count",
        "destination": "/low-sperm-count-oligospermia",
        "permanent": true
      },
      {
        "source": "/low-sperm-count/:path*",
        "destination": "/low-sperm-count-oligospermia/:path*",
        "permanent": true
      },
      {
        "source": "/ivf-success-stories",
        "destination": "/ivf-stories",
        "permanent": true
      },
      {
        "source": "/ivf-success-stories/:path*",
        "destination": "/ivf-stories/:path*",
        "permanent": true
      },
      {
        "source": "/low-amh-success-stories",
        "destination": "/low-amh-stories",
        "permanent": true
      },
      {
        "source": "/low-amh-success-stories/:path*",
        "destination": "/low-amh-stories/:path*",
        "permanent": true
      },
      {
        "source": "/iui-success-stories",
        "destination": "/iui-stories",
        "permanent": true
      },
      {
        "source": "/iui-success-stories/:path*",
        "destination": "/iui-stories/:path*",
        "permanent": true
      },
      {
        "source": "/patient-reviews",
        "destination": "/best-ivf-patient-reviews",
        "permanent": true
      },
      {
        "source": "/patient-reviews/:path*",
        "destination": "/best-ivf-patient-reviews/:path*",
        "permanent": true
      },
      {
        "source": "/about",
        "destination": "/about-mona-dahiya",
        "permanent": true
      },
      {
        "source": "/about/:path*",
        "destination": "/about-mona-dahiya/:path*",
        "permanent": true
      },
      {
        "source": "/news-media",
        "destination": "/news-and-media",
        "permanent": true
      },
      {
        "source": "/news-media/:path*",
        "destination": "/news-and-media/:path*",
        "permanent": true
      },
      {
        "source": "/locations",
        "destination": "/location",
        "permanent": true
      },
      {
        "source": "/locations/:path*",
        "destination": "/location/:path*",
        "permanent": true
      },
      {
        "source": "/online-consultation",
        "destination": "/ivf-consultation-online",
        "permanent": true
      },
      {
        "source": "/online-consultation/:path*",
        "destination": "/ivf-consultation-online/:path*",
        "permanent": true
      },
      {
        "source": "/semen-and-sperm-freezing",
        "destination": "/semen-sperm-freezing",
        "permanent": true
      },
      {
        "source": "/semen-and-sperm-freezing/:path*",
        "destination": "/semen-sperm-freezing/:path*",
        "permanent": true
      },
      {
        "source": "/preimplantation-genetic-testing",
        "destination": "/preimplantation-genetic-testing-pgt-center-in-noida",
        "permanent": true
      },
      {
        "source": "/preimplantation-genetic-testing/:path*",
        "destination": "/preimplantation-genetic-testing-pgt-center-in-noida/:path*",
        "permanent": true
      }
    ];
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
