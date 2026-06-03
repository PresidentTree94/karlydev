import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import CronitorClient from "./CronitorClient";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const websiteTitle = "karly.dev - Freelance Junior Web Developer";
const websiteDescription = "Building custom Next.js websites on Vercel with Sanity CMS and Resend add-ons.";
const websiteURL = "https://karlydev.vercel.app";

export const metadata: Metadata = {
  title: websiteTitle,
  description: websiteDescription,
  alternates: {
    canonical: websiteURL,
  },
  openGraph: {
    title: websiteTitle,
    description: websiteDescription,
    url: websiteURL,
    images: ["/opengraph-image.png"],
    type: "website",
    locale: "en-US"
  },
  twitter: {
    card: "summary_large_image",
    title: websiteTitle,
    description: websiteDescription,
    images: ["/opengraph-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Suspense>
        <CronitorClient />
      </Suspense>
      <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Karly Sams",
                "jobTitle": "Freelance Junior Web Developer",
                "url": "https://karlydev.vercel.app",
                "sameAs": [
                  "https://github.com/PresidentTree94"
                ]
              }).replace(/</g, "\\u003c")
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://karlydev.vercel.app",
                "name": "karly.dev - Freelance Junior Web Developer",
                "description": "Building custom Next.js websites on Vercel with Sanity CMS and Resend add-ons."
              }).replace(/</g, "\\u003c")
            }}
          />
        </head>
        <body className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <footer className="bg-stone-100 text-xs text-stone-400 py-6 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p>&copy; {new Date().getFullYear()} karly.dev</p>
              <div className="flex justify-center flex-wrap gap-6">
                <Link href="/faq" className="transition-colors hover:text-stone-700">FAQ</Link>
                <Link href="/privacy-policy" className="transition-colors hover:text-stone-700">Privacy Policy</Link>
                <Link href="/terms-of-service" className="transition-colors hover:text-stone-700">Terms of Service</Link>
                <Link href="/accessibility" className="transition-colors hover:text-stone-700">Accessibility</Link>
              </div>
            </div>
          </footer>
          <Toaster position="bottom-center" />
          <Analytics />
        </body>
      </html>
    </>
  );
}
