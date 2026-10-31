import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import ScrollToTop from "@/components/layout/ScrollToTop";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${poppins.variable} ${playfair.variable} antialiased`}
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

        {/* Sticky TopBar + Navbar across all pages */}
        <div className="sticky top-0 z-50 w-full shrink-0 shadow-[0_4px_20px_rgba(0,25,90,0.22)]">
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
