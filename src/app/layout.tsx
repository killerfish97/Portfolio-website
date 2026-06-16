import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nithinkr.dev"),
  title: {
    default: "Nithin K R | Full Stack Developer",
    template: "%s | Nithin K R",
  },
  description:
    "Full Stack Developer with 5+ years of experience building scalable web applications using Python, Django, ReactJS, REST APIs, and SQL. Open for freelancing.",
  keywords: [
    "Nithin K R",
    "Full Stack Developer",
    "Backend Developer",
    "PHP Developer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "REST API",
    "Bangalore",
    "Freelance Developer",
  ],
  authors: [{ name: "Nithin K R", url: "https://github.com/killerfish97" }],
  creator: "Nithin K R",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nithinkr.dev",
    siteName: "Nithin K R Portfolio",
    title: "Nithin K R | Full Stack Developer",
    description:
      "Building scalable, high-performance web applications with modern technologies.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Nithin K R Portfolio" }],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
