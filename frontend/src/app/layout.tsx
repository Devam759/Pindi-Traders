import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Pindi Traders | Premium Sanitaryware & Bathroom Fittings",
  description: "Bikaner's finest collection of sanitaryware, bathroom fittings, kitchen sinks, and water tanks. Authorized dealer for Hindware, Cera, and more.",
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
