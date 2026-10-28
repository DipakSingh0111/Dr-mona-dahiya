import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">{children}</body>
    </html>
  );
}
