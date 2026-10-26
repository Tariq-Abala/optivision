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
  Sun,
  Moon,
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
  // Theme state: FALSE = Light Mode (Default as requested by user), TRUE = Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#0A0A0F] text-[#F8F6F0] selection:bg-[#D4A853]/30 selection:text-white" 
        : "bg-[#FAFAF8] text-[#111827] selection:bg-[#B48628]/25 selection:text-[#111827]"
    }`}>
      {/* Top Banner Notice */}
      <div className={`py-2 px-4 text-xs border-b transition-colors ${
        isDarkMode
          ? "bg-[#12121A] border-[#D4A853]/20 text-[#A09C94]"
          : "bg-[#F3EFE6] border-amber-200/60 text-[#5C5446]"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B48628] animate-pulse"></span>
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-[#1F1D19]"}`}>
              Boutiques Casablanca & Rabat
            </span>
            <span className="hidden sm:inline text-amber-600/50">|</span>
            <span className="hidden sm:inline">Partenaire Agréé Essilor & Zeiss</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+212522001122" className="flex items-center gap-1.5 hover:text-[#B48628] transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-[#B48628]" />
              <span>+212 522 00 11 22</span>
            </a>
            <span className="text-stone-300">|</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Tiers-Payant Mutuelles CNSS / CNOPS
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        isDarkMode 
          ? "bg-[#0A0A0F]/90 border-[#D4A853]/15" 
          : "bg-white/90 border-stone-200 shadow-xs"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4A853] via-[#B48628] to-[#7A5618] flex items-center justify-center shadow-md text-white">
              <Glasses className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-bold tracking-wider ${isDarkMode ? "text-[#F8F6F0]" : "text-[#1F1D19]"}`}>
                  OPTIVISION
                </span>
                <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#B48628]/15 text-[#B48628] font-bold border border-[#B48628]/30">
                  PREMIUM
                </span>
              </div>
              <p className={`text-[11px] font-mono tracking-tight ${isDarkMode ? "text-[#A09C94]" : "text-[#6B7280]"}`}>
                Haute Lunetterie & Optométrie
              </p>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
            <a href="#collections" className="hover:text-[#B48628] transition-colors">Collections</a>
            <a href="#expertise" className="hover:text-[#B48628] transition-colors">Examens & Verres</a>
            <a href="#boutiques" className="hover:text-[#B48628] transition-colors">Nos Boutiques</a>
            <a href="#contact" className="hover:text-[#B48628] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button (Light / Dark) */}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isDarkMode 
                  ? "bg-[#181824] text-amber-300 border-amber-500/30 hover:bg-[#202030]" 
                  : "bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200"
              }`}
              title={isDarkMode ? "Passer en mode clair (Blanc)" : "Passer en mode sombre"}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Clair</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-stone-600" />
                  <span className="hidden sm:inline">Sombre</span>
                </>
              )}
            </button>

            <a
              href="https://wa.me/212600000000?text=Bonjour%20OptiVision,%20je%20souhaite%20prendre%20un%20rendez-vous"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800/40 text-xs font-semibold hover:brightness-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#rdv"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#D4A853] to-[#B48628] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all"
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
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none ${
          isDarkMode ? "bg-[#D4A853]/10" : "bg-amber-300/15"
        }`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium mb-6 ${
              isDarkMode 
                ? "bg-[#1A1A24] border-[#D4A853]/30 text-[#D4A853]" 
                : "bg-amber-50 border-amber-200 text-[#8C6418]"
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-[#B48628]" />
              <span>Nouvelle Collection Créateurs 2026</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight ${
              isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"
            }`}>
              L’Élégance du Regard, <br />
              <span className="bg-gradient-to-r from-[#B48628] via-[#D4A853] to-[#966E1E] bg-clip-text text-transparent">
                La Précision Médicale.
              </span>
            </h1>

            <p className={`mt-6 text-base sm:text-lg leading-relaxed ${
              isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"
            }`}>
              OptiVision combine les montures de créateurs internationaux et l’expertise optométrique de pointe. 
              Examens réfractifs 3D et verres ophtalmiques de haute précision taillés sur mesure à Casablanca.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#rdv"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#B48628] to-[#966E1E] text-white font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver un Bilan Visuel</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#collections"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all ${
                  isDarkMode 
                    ? "bg-[#14141E] border-[#D4A853]/30 text-[#F8F6F0] hover:bg-[#1E1E2C]" 
                    : "bg-white border-stone-300 text-stone-800 hover:bg-stone-50 shadow-xs"
                }`}
              >
                <Glasses className="w-4 h-4 text-[#B48628]" />
                <span>Explorer la Collection</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t ${
              isDarkMode ? "border-[#D4A853]/15" : "border-stone-200"
            }`}>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#12121A]/80 border-slate-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B48628]">15+ Ans</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A09C94]" : "text-[#6B7280]"}`}>D’expertise optométrique</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#12121A]/80 border-slate-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B48628]">18 000+</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A09C94]" : "text-[#6B7280]"}`}>Patients équipés au Maroc</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#12121A]/80 border-slate-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B48628]">4.9 / 5</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A09C94]" : "text-[#6B7280]"}`}>Avis certifiés Google</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#12121A]/80 border-slate-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B48628]">100%</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A09C94]" : "text-[#6B7280]"}`}>Garantie adaptation verres</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className={`py-20 border-y transition-colors ${
        isDarkMode ? "bg-[#0E0E15] border-[#D4A853]/15" : "bg-[#F5F5F0] border-stone-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold mb-2 ${
                isDarkMode ? "bg-[#D4A853]/10 text-[#D4A853]" : "bg-amber-100 text-[#8C6418]"
              }`}>
                <span>CATALOGUE SÉLECTIF</span>
              </div>
              <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>
                Montures de Haute Lunetterie
              </h2>
              <p className={`text-sm mt-2 max-w-xl ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                Sélection rigoureuse des créateurs européens et japonais : titane d’orfèvrerie, acétates italiens polis à la main et solaires haute performance.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher marque, modèle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-xs rounded-xl border focus:outline-none focus:border-[#B48628] transition-colors ${
                  isDarkMode 
                    ? "bg-[#14141E] border-slate-800 text-[#F8F6F0] placeholder-[#A09C94]" 
                    : "bg-white border-stone-300 text-stone-900 placeholder-stone-400 shadow-xs"
                }`}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-2 mb-10 pb-4 border-b ${
            isDarkMode ? "border-slate-800" : "border-stone-300"
          }`}>
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
                    ? "bg-[#B48628] text-white font-bold shadow-sm"
                    : isDarkMode 
                      ? "bg-[#14141E] text-[#A09C94] hover:text-[#F8F6F0] hover:bg-slate-800 border border-slate-800" 
                      : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 shadow-xs"
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
                className={`group relative rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1 ${
                  isDarkMode 
                    ? "bg-[#12121A] border-slate-800 hover:border-[#D4A853]/50 shadow-lg" 
                    : "bg-white border-stone-200 hover:border-[#B48628] shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-mono tracking-wide px-2.5 py-0.5 rounded font-medium border ${
                      isDarkMode 
                        ? "bg-[#D4A853]/10 text-[#D4A853] border-[#D4A853]/20" 
                        : "bg-amber-50 text-[#8C6418] border-amber-200"
                    }`}>
                      {frame.categoryLabel}
                    </span>
                    {frame.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        {frame.badge}
                      </span>
                    )}
                  </div>

                  {/* Frame Visual Preview */}
                  <div className={`h-44 rounded-xl border flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors ${
                    isDarkMode 
                      ? "bg-gradient-to-b from-[#181824] to-[#0D0D14] border-slate-800 group-hover:border-[#D4A853]/30" 
                      : "bg-gradient-to-b from-stone-50 to-stone-100/60 border-stone-200 group-hover:border-amber-300"
                  }`}>
                    <Glasses className="w-20 h-20 text-[#B48628] group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-[10px] font-mono text-stone-500 mt-2">Forme: {frame.shape}</span>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs text-[#B48628] font-mono font-bold">{frame.brand}</div>
                    <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>{frame.name}</h3>
                    <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>{frame.description}</p>
                  </div>

                  <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                    isDarkMode ? "border-slate-800/60 text-[#A09C94]" : "border-stone-100 text-stone-500"
                  }`}>
                    <span>Matière :</span>
                    <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-stone-800"}`}>{frame.material}</span>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                  isDarkMode ? "border-slate-800" : "border-stone-200"
                }`}>
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Prix Boutique</span>
                    <span className="text-lg font-bold text-[#B48628]">{frame.price}</span>
                  </div>

                  <button
                    onClick={() => setSelectedFrame(frame)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      isDarkMode 
                        ? "bg-[#181824] hover:bg-[#D4A853] hover:text-[#0A0A0F] text-[#F8F6F0] border-[#D4A853]/30" 
                        : "bg-stone-50 hover:bg-[#B48628] hover:text-white text-stone-800 border-stone-200"
                    }`}
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
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold mb-3 ${
              isDarkMode ? "bg-[#D4A853]/10 text-[#D4A853]" : "bg-amber-100 text-[#8C6418]"
            }`}>
              <Eye className="w-3.5 h-3.5" />
              <span>SANTÉ VISUELLE & TECHNOLOGIE</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>
              Une Précision Réfractive au 1/100e de Dioptrie
            </h2>
            <p className={`text-sm mt-3 ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
              Notre salle d’optométrie dispose des instruments de diagnostic Zeiss et Essilor pour une analyse complète de vos besoins visuels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-7 rounded-2xl border transition-all ${
              isDarkMode ? "bg-[#12121A] border-slate-800" : "bg-white border-stone-200 shadow-sm"
            }`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#B48628] flex items-center justify-center mb-5 font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Examen Réfractif 3D Complet</h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                Mesure assistée par ordinateur de l’acuité visuelle de loin et de près, dépistage du kératocône et tests de vision binoculaire.
              </p>
              <ul className={`mt-4 space-y-2 text-xs ${isDarkMode ? "text-slate-300" : "text-stone-700"}`}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>Réfraction subjective & objective</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>Évaluation de la pression oculaire</span>
                </li>
              </ul>
            </div>

            <div className={`p-7 rounded-2xl border transition-all ${
              isDarkMode ? "bg-[#12121A] border-slate-800" : "bg-white border-stone-200 shadow-sm"
            }`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#B48628] flex items-center justify-center mb-5 font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Verres Progressifs Personnalisés</h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                Prise de colonne digitale de centrage mesurant l’angle pantoscopique, la distance vertex et les habitudes posturales de lecture.
              </p>
              <ul className={`mt-4 space-y-2 text-xs ${isDarkMode ? "text-slate-300" : "text-stone-700"}`}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>Champ de vision élargi jusqu’à +40%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>Adaptation garantie 3 mois</span>
                </li>
              </ul>
            </div>

            <div className={`p-7 rounded-2xl border transition-all ${
              isDarkMode ? "bg-[#12121A] border-slate-800" : "bg-white border-stone-200 shadow-sm"
            }`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#B48628] flex items-center justify-center mb-5 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Garantie & Entretien Offert</h3>
              <p className={`text-xs leading-relaxed ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                Ajustement ultrasons, remplacement de plaquettes et rééquilibrage de votre monture gratuits et illimités dans toutes nos boutiques.
              </p>
              <ul className={`mt-4 space-y-2 text-xs ${isDarkMode ? "text-slate-300" : "text-stone-700"}`}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>Garantie casse 2 ans sur monture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>Attestations pour mutuelle délivrées en 24h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="rdv" className={`py-20 border-t transition-colors ${
        isDarkMode ? "bg-[#0E0E15] border-[#D4A853]/15" : "bg-[#F5F5F0] border-stone-200"
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold mb-3 ${
              isDarkMode ? "bg-[#D4A853]/10 text-[#D4A853]" : "bg-amber-100 text-[#8C6418]"
            }`}>
              <Calendar className="w-3.5 h-3.5" />
              <span>PRISE DE RENDEZ-VOUS EN LIGNE</span>
            </div>
            <h2 className={`text-3xl font-extrabold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>
              Réservez Votre Consultation Optique
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
              Un optométriste dédié vous reçoit pendant 45 minutes pour un examen approfondi et un conseil personnalisé.
            </p>
          </div>

          <div className={`rounded-2xl border p-6 sm:p-10 shadow-xl ${
            isDarkMode ? "bg-[#12121A] border-[#D4A853]/30" : "bg-white border-stone-200"
          }`}>
            {bookingSuccess ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Rendez-vous Confirmé !</h3>
                <p className={`text-sm max-w-md mx-auto ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                  Merci <span className="font-semibold text-stone-900 dark:text-white">{clientName}</span>. Votre créneau du <span className="font-bold text-[#B48628]">{bookingDate} à {bookingTime}</span> à la boutique de <span>{bookingLocation}</span> a bien été réservé.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setClientName("");
                      setClientPhone("");
                    }}
                    className="px-5 py-2.5 rounded-lg bg-stone-100 dark:bg-[#1E1E2C] text-stone-800 dark:text-white text-xs font-semibold hover:bg-stone-200"
                  >
                    Réserver un autre créneau
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A09C94]" : "text-stone-700"}`}>
                      Motif du Rendez-vous
                    </label>
                    <select
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#B48628] ${
                        isDarkMode ? "bg-[#181824] border-slate-800 text-[#F8F6F0]" : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
                    >
                      <option value="Bilan visuel complet & Réfraction 3D">Bilan visuel complet & Réfraction 3D</option>
                      <option value="Choix de monture & Devis verres">Choix de monture & Devis verres</option>
                      <option value="Adaptation lentilles de contact">Adaptation lentilles de contact</option>
                      <option value="Contrôle de vue pour renouvellement">Contrôle de vue pour renouvellement</option>
                      <option value="Ajustement & Réparation express">Ajustement & Réparation express</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A09C94]" : "text-stone-700"}`}>
                      Boutique OptiVision
                    </label>
                    <select
                      value={bookingLocation}
                      onChange={(e) => setBookingLocation(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#B48628] ${
                        isDarkMode ? "bg-[#181824] border-slate-800 text-[#F8F6F0]" : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
                    >
                      <option value="Casablanca — Bd d'Anfa">Casablanca — Bd d&apos;Anfa</option>
                      <option value="Casablanca — Racine / Gauthier">Casablanca — Racine / Gauthier</option>
                      <option value="Rabat — Agdal Avenue Fal Ould Oumeir">Rabat — Agdal Avenue Fal Ould Oumeir</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A09C94]" : "text-stone-700"}`}>
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#B48628] ${
                        isDarkMode ? "bg-[#181824] border-slate-800 text-[#F8F6F0]" : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A09C94]" : "text-stone-700"}`}>
                      Créneau horaire
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#B48628] ${
                        isDarkMode ? "bg-[#181824] border-slate-800 text-[#F8F6F0]" : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
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
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A09C94]" : "text-stone-700"}`}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Youssef El Amrani"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#B48628] ${
                        isDarkMode ? "bg-[#181824] border-slate-800 text-[#F8F6F0]" : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A09C94]" : "text-stone-700"}`}>
                      Téléphone portable (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 61 00 00 00"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#B48628] ${
                        isDarkMode ? "bg-[#181824] border-slate-800 text-[#F8F6F0]" : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
                    />
                  </div>
                </div>

                <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isDarkMode ? "border-slate-800" : "border-stone-200"
                }`}>
                  <p className={`text-[11px] flex items-center gap-1.5 ${isDarkMode ? "text-[#A09C94]" : "text-stone-500"}`}>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Confirmation par SMS immédiate. Sans avance requise.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#B48628] to-[#966E1E] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
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
            <h2 className={`text-3xl font-extrabold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Nos Adresses au Maroc</h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
              Espaces modernes et accueillants avec salon d’essayage privé et parking réservé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl border flex flex-col justify-between ${
              isDarkMode ? "bg-[#12121A] border-slate-800" : "bg-white border-stone-200 shadow-sm"
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#B48628] uppercase tracking-wider">
                    Boutique Flagship
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 font-medium">
                    Ouvert Aujourd&apos;hui
                  </span>
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Casablanca — Boulevard d&apos;Anfa</h3>
                <p className={`text-xs mt-2 flex items-start gap-2 ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                  <MapPin className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                  <span>142 Boulevard d&apos;Anfa (Angle Rue Jean Jaurès), Casablanca</span>
                </p>

                <div className="mt-6 space-y-2 text-xs">
                  <div className={`flex items-center justify-between py-1 border-b ${isDarkMode ? "border-slate-800 text-slate-300" : "border-stone-100 text-stone-600"}`}>
                    <span>Lundi — Vendredi</span>
                    <span className="font-mono font-semibold text-stone-900 dark:text-white">09:30 — 19:30</span>
                  </div>
                  <div className={`flex items-center justify-between py-1 border-b ${isDarkMode ? "border-slate-800 text-slate-300" : "border-stone-100 text-stone-600"}`}>
                    <span>Samedi</span>
                    <span className="font-mono font-semibold text-stone-900 dark:text-white">10:00 — 20:00</span>
                  </div>
                  <div className={`flex items-center justify-between py-1 ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}>
                    <span>Dimanche</span>
                    <span className="font-mono text-stone-400">Sur rendez-vous</span>
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t flex items-center justify-between ${
                isDarkMode ? "border-slate-800" : "border-stone-200"
              }`}>
                <a href="tel:+212522001122" className="text-xs font-bold text-[#B48628] hover:underline">
                  +212 522 00 11 22
                </a>
                <a
                  href="#rdv"
                  className="px-3.5 py-1.5 rounded-lg bg-stone-100 dark:bg-[#1A1A24] text-xs text-stone-800 dark:text-[#F8F6F0] hover:bg-[#B48628] hover:text-white transition-all font-medium"
                >
                  Itinéraire GPS
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-2xl border flex flex-col justify-between ${
              isDarkMode ? "bg-[#12121A] border-slate-800" : "bg-white border-stone-200 shadow-sm"
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#B48628] uppercase tracking-wider">
                    Espace Haute Réfraction
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 font-medium">
                    Ouvert Aujourd&apos;hui
                  </span>
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>Rabat — Avenue Fal Ould Oumeir</h3>
                <p className={`text-xs mt-2 flex items-start gap-2 ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
                  <MapPin className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                  <span>58 Avenue Fal Ould Oumeir, Agdal, Rabat</span>
                </p>

                <div className="mt-6 space-y-2 text-xs">
                  <div className={`flex items-center justify-between py-1 border-b ${isDarkMode ? "border-slate-800 text-slate-300" : "border-stone-100 text-stone-600"}`}>
                    <span>Lundi — Vendredi</span>
                    <span className="font-mono font-semibold text-stone-900 dark:text-white">09:30 — 19:30</span>
                  </div>
                  <div className={`flex items-center justify-between py-1 border-b ${isDarkMode ? "border-slate-800 text-slate-300" : "border-stone-100 text-stone-600"}`}>
                    <span>Samedi</span>
                    <span className="font-mono font-semibold text-stone-900 dark:text-white">10:00 — 19:00</span>
                  </div>
                  <div className={`flex items-center justify-between py-1 ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}>
                    <span>Dimanche</span>
                    <span className="font-mono text-stone-400">Fermé</span>
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t flex items-center justify-between ${
                isDarkMode ? "border-slate-800" : "border-stone-200"
              }`}>
                <a href="tel:+212537002233" className="text-xs font-bold text-[#B48628] hover:underline">
                  +212 537 00 22 33
                </a>
                <a
                  href="#rdv"
                  className="px-3.5 py-1.5 rounded-lg bg-stone-100 dark:bg-[#1A1A24] text-xs text-stone-800 dark:text-[#F8F6F0] hover:bg-[#B48628] hover:text-white transition-all font-medium"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`rounded-2xl max-w-lg w-full p-6 sm:p-8 relative border shadow-2xl ${
            isDarkMode ? "bg-[#12121A] border-[#D4A853]/40" : "bg-white border-stone-200"
          }`}>
            <button
              onClick={() => setSelectedFrame(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 dark:hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <div className="text-xs font-mono text-[#B48628] mb-1 font-bold">{selectedFrame.brand}</div>
            <h3 className={`text-2xl font-bold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#111827]"}`}>{selectedFrame.name}</h3>
            <p className={`text-xs mt-2 ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>{selectedFrame.description}</p>

            <div className={`my-6 p-4 rounded-xl border space-y-2 text-xs ${
              isDarkMode ? "bg-[#181824] border-slate-800" : "bg-stone-50 border-stone-200"
            }`}>
              <div className="flex justify-between">
                <span className="text-stone-500">Catégorie :</span>
                <span className="font-medium text-stone-800 dark:text-stone-200">{selectedFrame.categoryLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Matière de la monture :</span>
                <span className="font-medium text-stone-800 dark:text-stone-200">{selectedFrame.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Forme :</span>
                <span className="font-medium text-stone-800 dark:text-stone-200">{selectedFrame.shape}</span>
              </div>
              <div className={`flex justify-between pt-2 border-t ${isDarkMode ? "border-slate-700/60" : "border-stone-200"}`}>
                <span className="text-[#B48628] font-bold">Prix indicatif monture :</span>
                <span className="text-base font-bold text-[#B48628]">{selectedFrame.price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedFrame(null);
                  const el = document.getElementById("rdv");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B48628] text-white font-bold text-xs text-center hover:brightness-110 shadow-sm"
              >
                Réserver un essai en boutique
              </button>
              <button
                onClick={() => setSelectedFrame(null)}
                className="px-4 py-3 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 text-xs hover:bg-stone-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className={`py-12 border-t transition-colors ${
        isDarkMode ? "bg-[#07070B] border-[#D4A853]/20" : "bg-[#F3EFE6] border-amber-200/50"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
            isDarkMode ? "border-slate-900" : "border-amber-200/60"
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B48628] flex items-center justify-center text-white font-bold">
                <Glasses className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`text-lg font-bold ${isDarkMode ? "text-[#F8F6F0]" : "text-[#1F1D19]"}`}>OPTIVISION MAROC</span>
                <p className={`text-[11px] ${isDarkMode ? "text-[#A09C94]" : "text-[#6B7280]"}`}>Haute Lunetterie & Réfraction 3D</p>
              </div>
            </div>

            <div className={`text-xs text-center md:text-right ${isDarkMode ? "text-[#A09C94]" : "text-[#4B5563]"}`}>
              <p className="font-semibold text-stone-800 dark:text-stone-200">Développé par Tariq Abala d&apos;une manière professionnelle</p>
              <p className="mt-1 text-stone-400 font-mono text-[10px]">
                Stack : Next.js 16 • React 19 • Tailwind CSS • TypeScript
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© 2026 OptiVision Maroc. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#collections" className="hover:text-stone-800 dark:hover:text-stone-300">Collections</a>
              <a href="#expertise" className="hover:text-stone-800 dark:hover:text-stone-300">Optométrie</a>
              <a href="#rdv" className="hover:text-stone-800 dark:hover:text-stone-300">Rendez-vous</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
