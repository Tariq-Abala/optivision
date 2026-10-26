"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Glasses,
  Phone,
  Calendar,
  Menu,
  X,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Catalogue Lunettes", href: "/catalogue" },
    { label: "Services & Soins", href: "/services" },
    { label: "Notre Maison", href: "/a-propos" },
    { label: "Boutiques & Contact", href: "/contact" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Bonjour OptiVision, je souhaite obtenir des informations sur vos collections de lunettes et vos disponibilités en boutique."
  );

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E5DF] transition-all">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#F5F3EF] border-b border-[#E8E5DF] py-2 px-4 text-xs text-[#4B5563]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B48628] animate-pulse"></span>
            <span className="font-semibold text-[#111827]">OptiVision Haute Lunetterie</span>
            <span className="text-[#D8D3C8] hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#6B7280]">
              Boutiques Casablanca (Triangle d&apos;Or) &amp; Rabat (Agdal)
            </span>
            <span className="text-[#D8D3C8] hidden md:inline">|</span>
            <span className="hidden md:inline text-[#B48628] font-medium">
              Prise en charge mutuelles : CNSS • CNOPS • Saham • AXA • RMA
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+212522203040"
              className="flex items-center gap-1.5 font-medium text-[#111827] hover:text-[#B48628] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B48628]" />
              <span>+212 5 22 20 30 40</span>
            </a>
            <span className="text-[#D8D3C8] hidden sm:inline">|</span>
            <a
              href={`https://wa.me/212661203040?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#059669] hover:underline font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#059669]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#B48628] via-[#C5A059] to-[#805C18] flex items-center justify-center text-white shadow-md shadow-[#B48628]/20 group-hover:scale-105 transition-transform">
            <Glasses className="w-6 h-6 text-white stroke-[1.8]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#111827]">
                OPTIVISION
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#F7EEDC] text-[#805C18] border border-[#ECD9B6] font-bold">
                CASABLANCA
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-[#6B7280]">
              Maison d&apos;Optique &amp; Optométrie
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-[#B48628] font-bold"
                    : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B48628] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/rendez-vous"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B48628] via-[#C5A059] to-[#9B7120] text-white text-xs font-semibold tracking-wider uppercase shadow-md shadow-[#B48628]/20 hover:brightness-105 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Prendre RDV</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-[#E8E5DF] text-[#111827] hover:bg-[#F5F3EF] transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF8] border-b border-[#E8E5DF] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#F7EEDC] text-[#805C18] font-bold"
                      : "text-[#4B5563] hover:bg-[#F5F3EF] hover:text-[#111827]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8E5DF] flex flex-col gap-2.5">
            <Link
              href="/rendez-vous"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#B48628] to-[#9B7120] text-white text-xs font-bold tracking-wider uppercase shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver un Examen ou Essai en Ligne</span>
            </Link>

            <a
              href={`https://wa.me/212661203040?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold hover:bg-[#D1FAE5]"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
              <span>Contacter via WhatsApp (+212 6 61 20 30 40)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
