import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import PageTransition from "@/components/layout/PageTransition";
import FloatingInquiry from "@/components/layout/FloatingInquiry";

export const metadata: Metadata = {
  metadataBase: new URL('https://pinditraders.com'),
  title: "Pindi Traders | Best Price Bathroom Fitting & Sanitaryware in Bikaner",
  description: "Bikaner's authorised dealer for Hindware, Cera, Sona & more. We offer the best market prices with the widest variety of bathroom fittings, tiles, and sanitaryware.",
  keywords: [
    // Primary Store Intent
    "Best bathroom fittings shop in Bikaner",
    "Premium sanitaryware showroom near me",
    "Sanitaryware shop Rani Bazar",
    "Wholesale bathroom fittings Bikaner",
    "Best tiles shop Bikaner",
    "Bathroom accessories store near me",
    
    // Price & Value Intent (Professional alternatives to "cheap")
    "Best price sanitaryware Bikaner",
    "Affordable luxury bathroom fixtures",
    "Wholesale rate tiles and sanitary",
    "Budget-friendly bathroom fittings",
    "Pindi Traders Bikaner price list",
    
    // Brand Specific Intent
    "Hindware authorised dealer Bikaner",
    "Cera showroom near me",
    "Essco bath fittings dealer",
    "Plumber faucets Bikaner",
    "Sona sanitaryware Bikaner",
    "Orientbell tiles shop",
    "Sintex water tanks dealer",
    
    // Product Specific Intent
    "Designer wash basins Bikaner",
    "Kitchen sinks best price",
    "Water storage tanks Bikaner",
    "Luxury shower panels",
    "CP fittings and taps Bikaner",
    
    // Core Entity
    "Pindi Traders",
    "Pindi Traders Bikaner",
    "Main Rani Bazar sanitary shop"
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
    title: "Pindi Traders | Best Price & Widest Variety of Bathroom Brands",
    description: "Authorised dealer for top brands like Hindware & Cera. Best prices guaranteed on bathroom fittings in Bikaner.",
    url: "https://pinditraders.com",
    siteName: "Pindi Traders",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: '/Logos/logo_bg_remove.png',
        width: 1200,
        height: 630,
        alt: 'Pindi Traders — Premium Sanitaryware Showroom in Bikaner',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pindi Traders | Premium Sanitaryware",
    description: "Bikaner's destination for luxury bathroom design.",
    images: ['/Logos/logo_bg_remove.png'],
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
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
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
    "https://www.instagram.com/pinditraders_bkn/",
    "https://maps.app.goo.gl/YsMuX5XqXqk9NSfLA"
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
      <body style={{ position: 'relative' }}>
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
        <FloatingInquiry />
        <Analytics />
      </body>
    </html>
  );
}
