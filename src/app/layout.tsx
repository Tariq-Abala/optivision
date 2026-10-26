import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OptiVision | Centre Optique Premium",
  description:
    "OptiVision — Votre centre optique de confiance. Lunettes de vue, solaires, lentilles de contact et examens de vue par des professionnels qualifiés.",
  keywords: ["opticien", "lunettes", "optique", "lentilles", "examen de vue", "OptiVision"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#0A0A0F] text-[#F8F6F0] antialiased">
        {children}
      </body>
    </html>
  );
}
