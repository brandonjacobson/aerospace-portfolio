import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import { display, sans } from "./fonts";

export const metadata: Metadata = {
  title: "Brandon Jacobson | Aerospace Engineer",
  description: "University of Florida Aerospace Engineering student specializing in flight software, control systems, and autonomous navigation. Building the future of spaceflight.",
  keywords: ["aerospace engineering", "flight software", "PX4", "control systems", "sensor fusion", "autonomous navigation"],
  authors: [{ name: "Brandon Jacobson" }],
  openGraph: {
    title: "Brandon Jacobson | Aerospace Engineer",
    description: "Aerospace Engineering student at University of Florida specializing in flight control and autonomous systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} font-sans antialiased`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
