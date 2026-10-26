import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OptiVision | Centre Optique Premium",
  description:
    "OptiVision — Votre centre optique de confiance à Casablanca et Rabat. Lunettes de vue de créateurs, solaires de luxe, lentilles de contact et examens de vue 3D.",
  keywords: ["opticien", "lunettes", "optique", "lentilles", "examen de vue", "OptiVision", "Casablanca", "Rabat"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
