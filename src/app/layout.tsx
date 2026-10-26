import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OptiVision | Haute Lunetterie & Optométrie • Casablanca & Rabat",
  description:
    "Maison d'optique haut de gamme à Casablanca (Triangle d'Or) et Rabat (Agdal). Montures de créateurs, lunettes de soleil de luxe, verres progressifs Essilor et examens de vue 3D.",
  keywords: [
    "OptiVision",
    "opticien casablanca",
    "opticien rabat",
    "lunettes de luxe",
    "montures titane",
    "lindberg maroc",
    "cartier lunettes",
    "examen de vue casablanca",
    "verres progressifs",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#111827] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
