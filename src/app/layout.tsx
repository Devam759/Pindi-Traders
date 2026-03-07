import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/common/ScrollToTop";
import PageTransition from "@/components/common/PageTransition";

export const metadata: Metadata = {
  title: "Pindi Traders | Luxury Sanitaryware & Bathroom Art",
  description: "Bikaner's premier destination for luxury bathroom fittings and premium sanitaryware. Redefining living with curated collections from Hindware and Cera.",
  keywords: [
    "Best Shop for Sanitary in Bikaner",
    "Best Bathroom Fittings Shop",
    "Sanitaryware Dealer Bikaner",
    "Pindi Traders Bikaner",
    "Premium Bathroom Showroom",
    "Hindware Best Shop Bikaner",
    "Cera Authorized Dealer Bikaner",
    "Luxury Sanitaryware Showroom",
    "Best Kitchen Sinks Shop",
    "Pindi Traders",
    "Pindi Traders Bikaner",
    "Pindi Traders Sanitaryware",
    "Pindi Traders Bathroom Fittings",
    "Pindi Traders Kitchen Sinks",
    "Pindi Traders Water Storage",
    "Pindi Traders Hindware",
    "Pindi Traders Cera",
    "Pindi Traders Luxury Sanitaryware",
    "Pindi Traders Premium Bathroom Showroom",
    "Pindi Traders Best Shop for Sanitary in Bikaner",
    "Pindi Traders Best Bathroom Fittings Shop",
    "Pindi Traders Sanitaryware Dealer Bikaner",
    "Pindi Traders Premium Bathroom Showroom",
    "Pindi Traders Hindware Best Shop Bikaner",
    "Pindi Traders Cera Authorized Dealer Bikaner",
    "Pindi Traders Luxury Sanitaryware Showroom",
    "Pindi Traders Best Kitchen Sinks Shop"
  ],
  authors: [{ name: "Pindi Traders" }],
  creator: "Pindi Traders",
  publisher: "Pindi Traders",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/Logos/logo_bg_remove.png",
  },
  openGraph: {
    title: "Pindi Traders | Luxury Sanitaryware & Bathroom Art",
    description: "Redefining high-end living in Bikaner with curated bathroom artifacts.",
    url: "https://pinditraders.com",
    siteName: "Pindi Traders",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pindi Traders | Premium Sanitaryware",
    description: "Bikaner's destination for luxury bathroom design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pinditraders.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pindi Traders",
  "image": "https://pinditraders.com/Logos/logo_bg_remove.png",
  "@id": "https://pinditraders.com",
  "url": "https://pinditraders.com",
  "telephone": "+91 93767 51264",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Rani Bazar Circle, Rani Bazar",
    "addressLocality": "Bikaner",
    "postalCode": "334001",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.0142,
    "longitude": 73.3155
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:30",
    "closes": "19:30"
  },
  "sameAs": [
    "https://www.instagram.com/pinditraders_bkn/"
  ],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
