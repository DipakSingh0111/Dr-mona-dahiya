import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HeaderHeightSync from "@/components/layout/HeaderHeightSync";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Mona Dahiya | Fertility & IVF Specialist",
  description:
    "Top rated fertility specialist in India. Pioneering IVF centre since 1993 with centres in New Delhi, Lajpat Nagar and Rohini.",
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
      className={`${poppins.variable} antialiased`}
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
        <ScrollToTop />
        <HeaderHeightSync />

        <div className="site-header sticky top-0 z-50 w-full shrink-0 border-b-0 bg-[#163f8a]">
          <TopBar />
          <Navbar />
        </div>

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
