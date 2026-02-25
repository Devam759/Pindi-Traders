import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Pindi Traders",
  description: "Ranked as the best shop for sanitary in Bikaner, Pindi Traders offers a premium collection of luxury bathroom fittings, designer kitchen sinks, and water storage solutions. Your one-stop destination for Hindware, Cera, and more.",
  keywords: [
    "Best Shop for Sanitary in Bikaner",
    "Best Bathroom Fittings Shop",
    "Sanitaryware Dealer Bikaner",
    "Pindi Traders Bikaner",
    "Premium Bathroom Showroom",
    "Hindware Best Shop Bikaner",
    "Cera Authorized Dealer Bikaner",
    "Luxury Sanitaryware Showroom",
    "Best Kitchen Sinks Shop"
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
    icon: "/logo_bg_remove.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
