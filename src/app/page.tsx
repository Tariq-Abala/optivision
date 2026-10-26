"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Glasses,
  Eye,
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Award,
  SlidersHorizontal,
  Compass,
} from "lucide-react";
import { PRODUCTS, FrameProduct } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<FrameProduct | null>(null);

  // New arrivals & bestsellers for the homepage
  const featuredFrames = PRODUCTS.filter((p) => p.isNewArrival || p.isBestseller).slice(0, 6);

  const partnerBrands = [
    "Cartier Paris",
    "Lindberg Denmark",
    "Oliver Peoples",
    "Tom Ford Eyewear",
    "Gucci Firenze",
    "Persol Sartoria",
    "Chloé Paris",
    "Carl Zeiss Vision",
    "Essilor Varilux",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#E8E5DF]">
        {/* Subtle decorative gold glow background */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F7EEDC]/60 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#805C18]">
                <Sparkles className="w-3.5 h-3.5 text-[#B48628]" />
                <span>Haute Lunetterie &amp; Santé Visuelle à Casablanca &amp; Rabat</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#111827] leading-[1.15] tracking-tight">
                L’Art de Voir et{" "}
                <span className="italic font-normal text-[#B48628]">d’Être Vu</span> avec Élégance.
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                Depuis plus de 15 ans, OptiVision réunit les créateurs de lunetterie les plus exclusifs au monde avec l’exactitude médicale d’un examen de vue 3D de haute précision.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/catalogue"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#B48628] via-[#C5A059] to-[#9B7120] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#B48628]/25 hover:brightness-105 transition-all"
                >
                  <Glasses className="w-4 h-4" />
                  <span>Explorer le Catalogue</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E8E5DF] text-[#111827] text-xs font-bold uppercase tracking-wider hover:bg-[#F5F3EF] transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#B48628]" />
                  <span>Prendre Rendez-vous</span>
                </Link>
              </div>

              {/* Trust Indicators Bar */}
              <div className="pt-8 border-t border-[#E8E5DF] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="font-serif font-bold text-lg text-[#111827] block">15+ Ans</span>
                  <span className="text-[#6B7280]">D&apos;excellence optique</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-[#111827] block">100%</span>
                  <span className="text-[#6B7280]">Créateurs authentifiés</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-[#059669] block">Tiers-Payant</span>
                  <span className="text-[#6B7280]">Toutes mutuelles</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-[#B48628] block">24 Mois</span>
                  <span className="text-[#6B7280]">Garantie casse &amp; vue</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EFECE6]">
                <img
                  src="/images/boutique/hero-boutique.jpg"
                  alt="Showroom OptiVision Casablanca"
                  className="w-full h-full object-cover"
                />

                {/* Floating Glass Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E5DF] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F7EEDC] flex items-center justify-center text-[#B48628]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111827]">Stylisme Visagiste Offert</p>
                      <p className="text-[11px] text-[#6B7280]">Conseil personnalisé en boutique</p>
                    </div>
                  </div>
                  <Link
                    href="/rendez-vous"
                    className="p-2 rounded-full bg-[#B48628] text-white hover:bg-[#9B7120] transition-colors"
                    aria-label="Prendre rendez-vous stylisme"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRESTIGE BRANDS TICKER */}
      <section className="py-8 bg-[#F5F3EF] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#805C18] font-bold">
              Distributeur Agréé des Plus Grandes Manufactures
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-serif font-semibold text-[#4B5563] tracking-wider uppercase">
            {partnerBrands.map((brand, idx) => (
              <span key={idx} className="hover:text-[#B48628] transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS & NEW ARRIVALS */}
      <section className="py-20 bg-[#FAFAF8] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#B48628] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SÉLECTION HAUTE HORLOGERIE DU REGARD</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                Nouvelles Arrivées &amp; Icônes
              </h2>
              <p className="text-sm text-[#6B7280] mt-2 max-w-xl">
                Une sélection rigoureuse de montures en titane japonais, acétates façonnés à la main et verres solaires polarisés d’exception.
              </p>
            </div>

            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B48628] hover:text-[#805C18] transition-colors"
            >
              <span>Consulter l’ensemble du catalogue ({PRODUCTS.length} pièces)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFrames.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPTICAL SERVICES & EXPERTISE */}
      <section className="py-20 bg-[#F5F3EF] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-mono text-[#B48628] font-bold block mb-2">
              L’EXCELLENCE MÉDICALE AU SERVICE DE VOS YEUX
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
              Nos Services Optométriques &amp; Soins de la Vue
            </h2>
            <p className="text-sm text-[#6B7280] mt-3 leading-relaxed">
              Nos opticiens diplômés d’État mettent à votre disposition un plateau technique de pointe pour une précision visuelle au quart de dioptrie près.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] hover:border-[#B48628]/50 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F7EEDC] text-[#805C18] flex items-center justify-center mb-5 font-bold">
                  <Eye className="w-6 h-6 text-[#B48628]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111827] mb-2">
                  Examen de Réfraction 3D
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Bilan visuel complet de 25 minutes sur autorefractomètre haute définition Carl Zeiss. Dépistage des aberrations visuelles et acuité binoculaire.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5F3EF]">
                <span className="text-[11px] font-semibold text-[#059669]">
                  Offert à l&apos;achat d&apos;un équipement
                </span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] hover:border-[#B48628]/50 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F7EEDC] text-[#805C18] flex items-center justify-center mb-5 font-bold">
                  <Glasses className="w-6 h-6 text-[#B48628]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111827] mb-2">
                  Centrage Digitalisé Visioffice
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Mesure au dixième de millimètre des paramètres morphologiques (écart pupillaire, distance verre-œil, angle pantoscopique) pour des verres progressifs parfaits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5F3EF]">
                <span className="text-[11px] font-semibold text-[#B48628]">
                  Partenaire Essilor Varilux
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] hover:border-[#B48628]/50 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F7EEDC] text-[#805C18] flex items-center justify-center mb-5 font-bold">
                  <SlidersHorizontal className="w-6 h-6 text-[#B48628]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111827] mb-2">
                  Adaptation Contactologie
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Sélection et pose de lentilles de contact souples ou rigides. Séance d&apos;apprentissage personnalisée et pack de démarrage avec solution d&apos;entretien.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5F3EF]">
                <span className="text-[11px] font-semibold text-[#111827]">
                  Essai gratuit de 7 jours
                </span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] hover:border-[#B48628]/50 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F7EEDC] text-[#805C18] flex items-center justify-center mb-5 font-bold">
                  <ShieldCheck className="w-6 h-6 text-[#B48628]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111827] mb-2">
                  Prise en Charge Mutuelle
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Convention directe avec CNSS, CNOPS, Saham, AXA, RMA, Sanad et Wafa Assurance. Aucune avance de frais selon les conditions de votre police de soin.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5F3EF]">
                <span className="text-[11px] font-semibold text-[#059669]">
                  Gestion administrative complète
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E8E5DF] text-[#111827] text-xs font-bold uppercase tracking-wider hover:bg-[#F5F3EF] transition-all shadow-xs"
            >
              <span>En savoir plus sur nos examens &amp; équipements</span>
              <ArrowRight className="w-4 h-4 text-[#B48628]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE BOUTIQUE ATMOSPHERE SECTION */}
      <section className="py-20 bg-[#FAFAF8] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photos Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/boutique/boutique-storefront.jpg"
                  alt="Façade OptiVision Casablanca"
                  className="rounded-2xl shadow-md border border-[#E8E5DF] w-full aspect-[4/5] object-cover"
                />
                <img
                  src="/images/boutique/lens-crafting.jpg"
                  alt="Atelier de découpe des verres"
                  className="rounded-2xl shadow-md border border-[#E8E5DF] w-full aspect-square object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/boutique/optometrist.jpg"
                  alt="Cabinet d'examen de vue 3D"
                  className="rounded-2xl shadow-md border border-[#E8E5DF] w-full aspect-square object-cover"
                />
                <img
                  src="/images/boutique/consultation.jpg"
                  alt="Styliste visagiste OptiVision"
                  className="rounded-2xl shadow-md border border-[#E8E5DF] w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6">
              <span className="text-xs uppercase font-serif tracking-widest text-[#B48628] font-bold block">
                NOTRE MAISON D&apos;OPTIQUE
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight">
                Deux Salons d’Optique d’Exception à Casablanca &amp; Rabat.
              </h2>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                Conçus comme de véritables écrins feutrés au cœur du Triangle d’Or à Casablanca et dans le quartier d’Agdal à Rabat, nos espaces allient la confidentialité d’un cabinet médical privé au raffinement d’un salon de haute lunetterie.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#374151]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                  <span>
                    <strong>Consultation morphologique individuelle :</strong> Analyse experte de l’ossature de votre visage et des lignes de vos sourcils pour révéler votre expression.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                  <span>
                    <strong>Atelier d’ajustage &amp; meulage sur place :</strong> Découpe de vos verres en boutique pour une livraison en 48 heures ouvrées.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                  <span>
                    <strong>Café &amp; Thé marocain d&apos;accueil :</strong> Une expérience d&apos;achat sereine, sans précipitation, dans un cadre apaisant.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1F2937] transition-all"
                >
                  <span>Découvrir Notre Histoire</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E8E5DF] text-[#111827] text-xs font-bold uppercase tracking-wider hover:bg-[#F5F3EF] transition-all"
                >
                  <span>Horaires &amp; Adresses</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-[#F5F3EF] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-mono text-[#B48628] font-bold block mb-2">
              AVIS DE NOS CLIENTS
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#111827]">
              La Confiance de Nos Porteurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] shadow-xs">
              <div className="flex items-center gap-1 text-[#B48628] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed italic">
                &ldquo;J&apos;ai trouvé chez OptiVision Anfa ma monture Lindberg sur-mesure. La précision du centrage avec les verres progressifs Essilor est impressionnante : aucune période d&apos;adaptation nécessaire.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#F5F3EF]">
                <p className="font-bold text-xs text-[#111827]">Mehdi Benjelloun</p>
                <p className="text-[11px] text-[#6B7280]">Casablanca • Client Lindberg Titanium</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] shadow-xs">
              <div className="flex items-center gap-1 text-[#B48628] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed italic">
                &ldquo;Accueil d&apos;un raffinement rare à la boutique d&apos;Agdal. L&apos;examen de vue sur l&apos;appareil 3D est d&apos;une netteté bluffante. La prise en charge de ma mutuelle CNOPS s&apos;est faite en toute transparence.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#F5F3EF]">
                <p className="font-bold text-xs text-[#111827]">Pr. Souad Tazi</p>
                <p className="text-[11px] text-[#6B7280]">Rabat • Cliente Cartier Prestige</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E8E5DF] shadow-xs">
              <div className="flex items-center gap-1 text-[#B48628] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed italic">
                &ldquo;Les conseils de l&apos;opticienne pour choisir mes solaires Tom Ford étaient parfaits. Une vraie boutique de luxe avec un savoir-faire d&apos;artisan lunetier comme on en voit peu.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#F5F3EF]">
                <p className="font-bold text-xs text-[#111827]">Karim Amrani</p>
                <p className="text-[11px] text-[#6B7280]">Casablanca • Client Tom Ford Eyewear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPOINTMENT / CONTACT CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#FAFAF8] via-[#F7EEDC] to-[#EFECE6] border-b border-[#E8E5DF] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-white shadow-md mx-auto flex items-center justify-center text-[#B48628]">
            <Calendar className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
            Planifiez Votre Visite en Boutique
          </h2>

          <p className="text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Profitez d’un accueil privilégié sans attente. Nos optométristes vous réservent un créneau dédié de 30 minutes pour vos examens et essayages.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/rendez-vous"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B48628] via-[#C5A059] to-[#9B7120] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#B48628]/20 hover:brightness-105 transition-all"
            >
              Prendre Rendez-vous en Ligne
            </Link>

            <a
              href="https://wa.me/212661203040?text=Bonjour%20OptiVision,%20je%20souhaite%20planifier%20un%20rendez-vous%20en%20boutique."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#E8E5DF] text-[#065F46] text-xs font-bold uppercase tracking-wider hover:bg-[#ECFDF5] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
              <span>WhatsApp Secrétariat</span>
            </a>
          </div>

          <p className="text-[11px] text-[#6B7280]">
            Boutique Casablanca Triangle d&apos;Or : 05 22 20 30 40 • Boutique Rabat Agdal : 05 37 77 88 99
          </p>
        </div>
      </section>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
