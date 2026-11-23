import type { Metadata } from "next";
import localFont from "next/font/local";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HeaderHeightSync from "@/components/layout/HeaderHeightSync";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import BreadcrumbBar from "@/components/layout/BreadcrumbBar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import JsonLd from "@/components/seo/JsonLd";
import RouteSchema from "@/components/seo/RouteSchema";
import { getGlobalSchema } from "@/data/schemaData";
import "./globals.css";

const openSans = localFont({
  src: "./fonts/open-sans-latin.woff2",
  variable: "--font-open-sans",
  weight: "300 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmonadahiya.com"),
  title: "Dr. Mona Dahiya | Fertility & IVF Specialist",
  description:
    "Top rated fertility specialist in India. Pioneering IVF centre since 1993 with centres in New Delhi, Lajpat Nagar and Rohini.",
  keywords: [
    "Dr. Mona Dahiya",
    "IVF Specialist Noida",
    "Best IVF Doctor Delhi NCR",
    "Fertility Clinic Noida",
    "IUI Treatment",
    "ICSI Treatment",
    "Little Angel IVF",
  ],
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${openSans.variable} antialiased`}
    >
      <head>
        {/* Disable browser scroll restore so pages always open from top */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if("scrollRestoration" in history)history.scrollRestoration="manual";}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="flex min-h-screen flex-col font-sans">
        <JsonLd data={getGlobalSchema()} />
        <RouteSchema />
        <ScrollToTop />
        <HeaderHeightSync />

        <div className="site-header sticky top-0 z-[60] w-full shrink-0 border-b-0 bg-navy">
          <TopBar />
          <Navbar />
        </div>

        <BreadcrumbBar />

        {/* Page Content */}
        <div className="flex-1 flex flex-col">{children}</div>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating Actions */}
        <FloatingActions />
      </body>
    </html>
  );
}
