"use client";

import React, { useState } from "react";
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
  SlidersHorizontal,
  Search,
  ArrowRight,
  MessageCircle,
  Award,
  Zap,
  HelpCircle,
} from "lucide-react";

interface FrameProduct {
  id: string;
  name: string;
  brand: string;
  category: "all" | "vue-homme" | "vue-femme" | "solaire" | "titane";
  categoryLabel: string;
  price: string;
  material: string;
  colors: string[];
  shape: string;
  badge?: string;
  description: string;
}

const FRAMES: FrameProduct[] = [
  {
    id: "opt-1",
    name: "Sovereign Titanium Gold",
    brand: "Lindberg Studio",
    category: "titane",
    categoryLabel: "Titane Ultra-Léger",
    price: "3 850 MAD",
    material: "Titane japonais pur & or 18k",
    colors: ["#D4A853", "#2C2C2C", "#C0C0C0"],
    shape: "Pantoscopique",
    badge: "Signature",
    description: "Poids plume de 2.7g. Usinage de haute précision sans vis ni soudures.",
  },
  {
    id: "opt-2",
    name: "Riviera Aviator Obsidian",
    brand: "Tom Ford Eyewear",
    category: "solaire",
    categoryLabel: "Solaire Luxe",
    price: "4 200 MAD",
    material: "Acétate Mazzucchelli & Métal doré",
    colors: ["#1A1A1A", "#8B4513", "#D4A853"],
    shape: "Pilote Moderne",
    badge: "Bestseller",
    description: "Verres polarisés Carl Zeiss haute définition avec filtre anti-reflet interne.",
  },
  {
    id: "opt-3",
    name: "Atelier Carré Ébène",
    brand: "Cartier Prestige",
    category: "vue-homme",
    categoryLabel: "Optique Homme",
    price: "5 400 MAD",
    material: "Bois précieux & Métal platiné",
    colors: ["#2B1B17", "#D4A853"],
    shape: "Rectangulaire Structuré",
    badge: "Édition Limitée",
    description: "Finition artisanale aux détails vis légendaires de la maison parisienne.",
  },
  {
    id: "opt-4",
    name: "Stella Cat-Eye Rosewood",
    brand: "Chloé Paris",
    category: "vue-femme",
    categoryLabel: "Optique Femme",
    price: "2 950 MAD",
    material: "Bio-acétate éco-responsable",
    colors: ["#B76E79", "#D4A853", "#4A3B32"],
    shape: "Papillon Féminin",
    badge: "Nouveauté",
    description: "Lignes douces et raffinées sublimant le regard. Compatible tous verres progressifs.",
  },
  {
    id: "opt-5",
    name: "Milano Minimalist Silver",
    brand: "Persol Sartoria",
    category: "vue-homme",
    categoryLabel: "Optique Homme",
    price: "2 650 MAD",
    material: "Acier chirurgical brossé",
    colors: ["#708090", "#1C1C1C"],
    shape: "Ronde Rétro-Chic",
    description: "Système Meflecto breveté pour un confort de port temporel absolu.",
  },
  {
    id: "opt-6",
    name: "Monaco Grand Prix Polarized",
    brand: "Serengeti Drivers",
    category: "solaire",
    categoryLabel: "Solaire Luxe",
    price: "3 400 MAD",
    material: "Nylon TR90 Ultra-résistant",
    colors: ["#1F2421", "#3E2723"],
    shape: "Sport Élégance",
    description: "Verres photochromiques minéraux adaptatifs pour conduite de jour et crépuscule.",
  },
];

export default function OptiVisionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFrame, setSelectedFrame] = useState<FrameProduct | null>(null);

  // Booking Form State
  const [bookingService, setBookingService] = useState("Bilan visuel complet & Réfraction 3D");
  const [bookingLocation, setBookingLocation] = useState("Casablanca — Bd d'Anfa");
  const [bookingDate, setBookingDate] = useState("2026-11-02");
  const [bookingTime, setBookingTime] = useState("11:00");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredFrames = FRAMES.filter((frame) => {
    const matchesCat = selectedCategory === "all" || frame.category === selectedCategory;
    const matchesSearch =
      frame.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      frame.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      frame.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8F6F0] selection:bg-[#D4A853]/30 selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#12121A] via-[#1F1B12] to-[#12121A] border-b border-[#D4A853]/20 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#A09C94]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse"></span>
            <span className="text-[#F8F6F0] font-medium">Boutiques Casablanca & Rabat</span>
            <span className="hidden sm:inline text-[#D4A853]/80">|</span>
            <span className="hidden sm:inline">Partenaire Agréé Essilor & Zeiss</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+212522001122" className="flex items-center gap-1.5 hover:text-[#D4A853] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4A853]" />
              <span>+212 522 00 11 22</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Tiers-Payant Mutuelles CNSS / CNOPS
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0A0A0F]/90 border-b border-[#D4A853]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4A853] via-[#B38734] to-[#7A5618] flex items-center justify-center shadow-lg shadow-[#D4A853]/20">
              <Glasses className="w-6 h-6 text-[#0A0A0F]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-wider text-[#F8F6F0]">OPTIVISION</span>
                <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#D4A853]/15 text-[#D4A853] border border-[#D4A853]/30">
                  PREMIUM
                </span>
              </div>
              <p className="text-[11px] text-[#A09C94] font-mono tracking-tight">Haute Lunetterie & Optométrie</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#A09C94]">
            <a href="#collections" className="hover:text-[#D4A853] transition-colors">Collections</a>
            <a href="#expertise" className="hover:text-[#D4A853] transition-colors">Examens & Verres</a>
            <a href="#boutiques" className="hover:text-[#D4A853] transition-colors">Nos Boutiques</a>
            <a href="#avis" className="hover:text-[#D4A853] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#D4A853] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/212600000000?text=Bonjour%20OptiVision,%20je%20souhaite%20prendre%20un%20rendez-vous"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-semibold hover:bg-emerald-900/60 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#rdv"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#D4A853] to-[#B38734] text-[#0A0A0F] text-xs font-bold shadow-md shadow-[#D4A853]/25 hover:brightness-110 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Prendre RDV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -top-12 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A24] border border-[#D4A853]/30 text-xs font-mono text-[#D4A853] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
              <span>Nouvelle Collection Créateurs 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8F6F0] leading-tight sm:leading-tight">
              L’Élégance du Regard, <br />
              <span className="bg-gradient-to-r from-[#D4A853] via-[#F5C563] to-[#D4A853] bg-clip-text text-transparent">
                La Précision Médicale.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#A09C94] leading-relaxed">
              OptiVision combine les montures de créateurs internationaux et l’expertise optométrique de pointe. 
              Examens réfractifs 3D et verres ophtalmiques de haute précision taillés sur mesure à Casablanca.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#rdv"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#F5C563] to-[#B38734] text-[#0A0A0F] font-bold text-sm shadow-xl shadow-[#D4A853]/20 hover:scale-[1.02] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver un Bilan Visuel</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#14141E] border border-[#D4A853]/30 text-[#F8F6F0] font-semibold text-sm hover:bg-[#1E1E2C] transition-all"
              >
                <Glasses className="w-4 h-4 text-[#D4A853]" />
                <span>Explorer la Collection</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#D4A853]/15">
              <div className="p-4 rounded-xl bg-[#12121A]/80 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4A853]">15+ Ans</div>
                <div className="text-xs text-[#A09C94] mt-1">D’expertise optométrique</div>
              </div>
              <div className="p-4 rounded-xl bg-[#12121A]/80 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4A853]">18 000+</div>
                <div className="text-xs text-[#A09C94] mt-1">Patients équipés au Maroc</div>
              </div>
              <div className="p-4 rounded-xl bg-[#12121A]/80 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4A853]">4.9 / 5</div>
                <div className="text-xs text-[#A09C94] mt-1">Avis certifiés Google</div>
              </div>
              <div className="p-4 rounded-xl bg-[#12121A]/80 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4A853]">100%</div>
                <div className="text-xs text-[#A09C94] mt-1">Garantie adaptation verres</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-[#0E0E15] border-y border-[#D4A853]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4A853]/10 text-xs font-mono text-[#D4A853] mb-2">
                <span>CATALOGUE SÉLECTIF</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
                Montures de Haute Lunetterie
              </h2>
              <p className="text-[#A09C94] text-sm mt-2 max-w-xl">
                Sélection rigoureuse des créateurs européens et japonais : titane d’orfèvrerie, acétates italiens polis à la main et solaires haute performance.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#A09C94] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher marque, modèle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-[#14141E] border border-slate-800 text-[#F8F6F0] placeholder-[#A09C94] focus:outline-none focus:border-[#D4A853]"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/60">
            {[
              { id: "all", label: "Toutes les Collections" },
              { id: "vue-homme", label: "Optique Homme" },
              { id: "vue-femme", label: "Optique Femme" },
              { id: "solaire", label: "Solaires d'Exception" },
              { id: "titane", label: "Titane & Poids Plume" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? "bg-[#D4A853] text-[#0A0A0F] font-bold shadow-md shadow-[#D4A853]/20"
                    : "bg-[#14141E] text-[#A09C94] hover:text-[#F8F6F0] hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrames.map((frame) => (
              <div
                key={frame.id}
                className="group relative rounded-2xl bg-[#12121A] border border-slate-800 hover:border-[#D4A853]/50 transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#D4A853]/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-wide px-2.5 py-0.5 rounded bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/20">
                      {frame.categoryLabel}
                    </span>
                    {frame.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {frame.badge}
                      </span>
                    )}
                  </div>

                  {/* Frame Visual Placeholder */}
                  <div className="h-44 rounded-xl bg-gradient-to-b from-[#181824] to-[#0D0D14] border border-slate-800/80 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:border-[#D4A853]/30 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4A853]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Glasses className="w-20 h-20 text-[#D4A853]/80 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-[10px] font-mono text-[#A09C94] mt-2">Forme: {frame.shape}</span>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs text-[#D4A853] font-mono font-semibold">{frame.brand}</div>
                    <h3 className="text-lg font-bold text-[#F8F6F0] mt-1">{frame.name}</h3>
                    <p className="text-xs text-[#A09C94] mt-2 leading-relaxed">{frame.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-[#A09C94]">
                    <span>Matière :</span>
                    <span className="text-slate-300 font-medium">{frame.material}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A09C94] block uppercase tracking-wider">Prix Boutique</span>
                    <span className="text-lg font-bold text-[#D4A853]">{frame.price}</span>
                  </div>

                  <button
                    onClick={() => setSelectedFrame(frame)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#181824] hover:bg-[#D4A853] hover:text-[#0A0A0F] text-[#F8F6F0] text-xs font-semibold border border-[#D4A853]/30 hover:border-transparent transition-all"
                  >
                    <span>Détails & Essai</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optometric Expertise Section */}
      <section id="expertise" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4A853]/10 text-xs font-mono text-[#D4A853] mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>SANTÉ VISUELLE & TECHNOLOGIE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
              Une Précision Réfractive au 1/100e de Dioptrie
            </h2>
            <p className="text-[#A09C94] text-sm mt-3">
              Notre salle d’optométrie dispose des instruments de diagnostic Zeiss et Essilor pour une analyse complète de vos besoins visuels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#12121A] border border-slate-800 hover:border-[#D4A853]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 text-[#D4A853] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F8F6F0] mb-2">Examen Réfractif 3D Complet</h3>
              <p className="text-xs text-[#A09C94] leading-relaxed">
                Mesure assistée par ordinateur de l’acuité visuelle de loin et de près, dépistage du kératocône et tests de vision binoculaire.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Réfraction subjective & objective</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Évaluation de la pression oculaire</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#12121A] border border-slate-800 hover:border-[#D4A853]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 text-[#D4A853] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F8F6F0] mb-2">Verres Progressifs Personnalisés</h3>
              <p className="text-xs text-[#A09C94] leading-relaxed">
                Prise de colonne digitale de centrage mesurant l’angle pantoscopique, la distance vertex et les habitudes posturales de lecture.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Champ de vision élargi jusqu’à +40%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Adaptation garantie 3 mois</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#12121A] border border-slate-800 hover:border-[#D4A853]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 text-[#D4A853] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F8F6F0] mb-2">Garantie & Entretien Offert</h3>
              <p className="text-xs text-[#A09C94] leading-relaxed">
                Ajustement ultrasons, remplacement de plaquettes et rééquilibrage de votre monture gratuits et illimités dans toutes nos boutiques.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Garantie casse 2 ans sur monture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Attestations pour mutuelle délivrées en 24h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="rdv" className="py-20 bg-[#0E0E15] border-t border-[#D4A853]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4A853]/10 text-xs font-mono text-[#D4A853] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>PRISE DE RENDEZ-VOUS EN LIGNE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#F8F6F0]">
              Réservez Votre Consultation Optique
            </h2>
            <p className="text-[#A09C94] text-xs sm:text-sm mt-2">
              Un optométriste dédié vous reçoit pendant 45 minutes pour un examen approfondi et un conseil personnalisé.
            </p>
          </div>

          <div className="rounded-2xl bg-[#12121A] border border-[#D4A853]/30 p-6 sm:p-10 shadow-2xl">
            {bookingSuccess ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F6F0]">Rendez-vous Confirmé !</h3>
                <p className="text-sm text-[#A09C94] max-w-md mx-auto">
                  Merci <span className="text-[#F8F6F0] font-semibold">{clientName}</span>. Votre créneau du <span className="text-[#D4A853] font-semibold">{bookingDate} à {bookingTime}</span> à la boutique de <span className="text-[#F8F6F0]">{bookingLocation}</span> a bien été réservé.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setClientName("");
                      setClientPhone("");
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#1E1E2C] text-[#F8F6F0] text-xs font-semibold hover:bg-[#2A2A3C]"
                  >
                    Réserver un autre créneau
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-[#A09C94] mb-2">
                      Motif du Rendez-vous
                    </label>
                    <select
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181824] border border-slate-800 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#D4A853]"
                    >
                      <option value="Bilan visuel complet & Réfraction 3D">Bilan visuel complet & Réfraction 3D</option>
                      <option value="Choix de monture & Devis verres">Choix de monture & Devis verres</option>
                      <option value="Adaptation lentilles de contact">Adaptation lentilles de contact</option>
                      <option value="Contrôle de vue pour renouvellement">Contrôle de vue pour renouvellement</option>
                      <option value="Ajustement & Réparation express">Ajustement & Réparation express</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A09C94] mb-2">
                      Boutique OptiVision
                    </label>
                    <select
                      value={bookingLocation}
                      onChange={(e) => setBookingLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181824] border border-slate-800 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#D4A853]"
                    >
                      <option value="Casablanca — Bd d'Anfa">Casablanca — Bd d&apos;Anfa</option>
                      <option value="Casablanca — Racine / Gauthier">Casablanca — Racine / Gauthier</option>
                      <option value="Rabat — Agdal Avenue Fal Ould Oumeir">Rabat — Agdal Avenue Fal Ould Oumeir</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A09C94] mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181824] border border-slate-800 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#D4A853]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A09C94] mb-2">
                      Créneau horaire
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181824] border border-slate-800 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#D4A853]"
                    >
                      <option value="09:30">09:30</option>
                      <option value="11:00">11:00</option>
                      <option value="14:30">14:30</option>
                      <option value="16:00">16:00</option>
                      <option value="17:30">17:30</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A09C94] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Youssef El Amrani"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181824] border border-slate-800 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#D4A853]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A09C94] mb-2">
                      Téléphone portable (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 61 00 00 00"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181824] border border-slate-800 text-xs text-[#F8F6F0] focus:outline-none focus:border-[#D4A853]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#A09C94] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Confirmation par SMS immédiate. Sans avance requise.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#F5C563] to-[#B38734] text-[#0A0A0F] font-bold text-xs shadow-lg shadow-[#D4A853]/25 hover:brightness-110 transition-all"
                  >
                    Confirmer le Rendez-vous
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Boutiques & Hours Section */}
      <section id="boutiques" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#F8F6F0]">Nos Adresses au Maroc</h2>
            <p className="text-[#A09C94] text-xs sm:text-sm mt-2">
              Espaces modernes et accueillants avec salon d’essayage privé et parking réservé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#12121A] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#D4A853] uppercase tracking-wider">
                    Boutique Flagship
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    Ouvert Aujourd&apos;hui
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F8F6F0]">Casablanca — Boulevard d&apos;Anfa</h3>
                <p className="text-xs text-[#A09C94] mt-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                  <span>142 Boulevard d&apos;Anfa (Angle Rue Jean Jaurès), Casablanca</span>
                </p>

                <div className="mt-6 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800">
                    <span>Lundi — Vendredi</span>
                    <span className="font-mono text-[#F8F6F0]">09:30 — 19:30</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800">
                    <span>Samedi</span>
                    <span className="font-mono text-[#F8F6F0]">10:00 — 20:00</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Dimanche</span>
                    <span className="font-mono text-[#A09C94]">Sur rendez-vous</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a href="tel:+212522001122" className="text-xs font-semibold text-[#D4A853] hover:underline">
                  +212 522 00 11 22
                </a>
                <a
                  href="#rdv"
                  className="px-3.5 py-1.5 rounded-lg bg-[#1A1A24] text-xs text-[#F8F6F0] hover:bg-[#D4A853] hover:text-[#0A0A0F] transition-all"
                >
                  Itinéraire GPS
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#12121A] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#D4A853] uppercase tracking-wider">
                    Espace Haute Réfraction
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    Ouvert Aujourd&apos;hui
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F8F6F0]">Rabat — Avenue Fal Ould Oumeir</h3>
                <p className="text-xs text-[#A09C94] mt-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                  <span>58 Avenue Fal Ould Oumeir, Agdal, Rabat</span>
                </p>

                <div className="mt-6 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800">
                    <span>Lundi — Vendredi</span>
                    <span className="font-mono text-[#F8F6F0]">09:30 — 19:30</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800">
                    <span>Samedi</span>
                    <span className="font-mono text-[#F8F6F0]">10:00 — 19:00</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Dimanche</span>
                    <span className="font-mono text-[#A09C94]">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a href="tel:+212537002233" className="text-xs font-semibold text-[#D4A853] hover:underline">
                  +212 537 00 22 33
                </a>
                <a
                  href="#rdv"
                  className="px-3.5 py-1.5 rounded-lg bg-[#1A1A24] text-xs text-[#F8F6F0] hover:bg-[#D4A853] hover:text-[#0A0A0F] transition-all"
                >
                  Itinéraire GPS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Detail Modal */}
      {selectedFrame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#12121A] border border-[#D4A853]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedFrame(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <div className="text-xs font-mono text-[#D4A853] mb-1">{selectedFrame.brand}</div>
            <h3 className="text-2xl font-bold text-[#F8F6F0]">{selectedFrame.name}</h3>
            <p className="text-xs text-[#A09C94] mt-2">{selectedFrame.description}</p>

            <div className="my-6 p-4 rounded-xl bg-[#181824] border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Catégorie :</span>
                <span className="text-slate-200 font-medium">{selectedFrame.categoryLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Matière de la monture :</span>
                <span className="text-slate-200 font-medium">{selectedFrame.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Forme :</span>
                <span className="text-slate-200 font-medium">{selectedFrame.shape}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-700/60">
                <span className="text-[#D4A853] font-bold">Prix indicatif monture :</span>
                <span className="text-base font-bold text-[#D4A853]">{selectedFrame.price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedFrame(null);
                  const el = document.getElementById("rdv");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 py-3 rounded-xl bg-[#D4A853] text-[#0A0A0F] font-bold text-xs text-center hover:brightness-110"
              >
                Réserver un essai en boutique
              </button>
              <button
                onClick={() => setSelectedFrame(null)}
                className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-[#07070B] border-t border-[#D4A853]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4A853] flex items-center justify-center text-[#0A0A0F] font-bold">
                <Glasses className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#F8F6F0]">OPTIVISION MAROC</span>
                <p className="text-[11px] text-[#A09C94]">Haute Lunetterie & Réfraction 3D</p>
              </div>
            </div>

            <div className="text-xs text-[#A09C94] text-center md:text-right">
              <p>Site de démonstration conçu & développé pour Tariq Abala Portfolio</p>
              <p className="mt-1 text-slate-500 font-mono text-[10px]">
                Stack : Next.js 16 • React 19 • Tailwind CSS • TypeScript
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 OptiVision Maroc. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#collections" className="hover:text-slate-400">Collections</a>
              <a href="#expertise" className="hover:text-slate-400">Optométrie</a>
              <a href="#rdv" className="hover:text-slate-400">Rendez-vous</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
