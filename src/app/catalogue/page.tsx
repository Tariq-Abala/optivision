"use client";

import React, { useState, useMemo } from "react";
import {
  Glasses,
  Search,
  SlidersHorizontal,
  X,
  Sparkles,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import { PRODUCTS, FrameProduct } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import ProductDetailsModal from "../../components/ProductDetailsModal";

type FilterCategory = "all" | "vue" | "solaire" | "homme" | "femme" | "titane";
type SortOption = "featured" | "price-asc" | "price-desc";

export default function CataloguePage() {
  const [selectedProduct, setSelectedProduct] = useState<FrameProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [activeSort, setActiveSort] = useState<SortOption>("featured");

  const categories: { id: FilterCategory; label: string }[] = [
    { id: "all", label: "Toutes les Collections" },
    { id: "vue", label: "Optique / Lunettes de Vue" },
    { id: "solaire", label: "Lunettes de Soleil" },
    { id: "homme", label: "Montures Homme" },
    { id: "femme", label: "Montures Femme" },
    { id: "titane", label: "Titane Ultra-Léger" },
  ];

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory === "vue" && product.category !== "vue") return false;
      if (activeCategory === "solaire" && product.category !== "solaire") return false;
      if (activeCategory === "titane" && product.category !== "titane") return false;
      if (activeCategory === "homme" && product.gender !== "homme" && product.gender !== "unisexe")
        return false;
      if (activeCategory === "femme" && product.gender !== "femme" && product.gender !== "unisexe")
        return false;

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesMaterial = product.material.toLowerCase().includes(query);
        const matchesShape = product.shape.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesMaterial && !matchesShape) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (activeSort === "price-asc") return a.priceMAD - b.priceMAD;
      if (activeSort === "price-desc") return b.priceMAD - a.priceMAD;
      // Default: featured / new arrivals first
      return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
    });
  }, [activeCategory, searchQuery, activeSort]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Breadcrumb Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#805C18] mb-3">
            <Glasses className="w-3.5 h-3.5 text-[#B48628]" />
            <span>COLLECTIONS HAUTE LUNETTERIE 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            Le Catalogue des Montures
          </h1>

          <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
            Explorez notre sélection de montures optiques et solaires de créateurs. Chaque pièce est essayable dans nos salons de Casablanca et Rabat.
          </p>
        </div>

        {/* Search Bar & Sort Row */}
        <div className="bg-white rounded-2xl border border-[#E8E5DF] p-4 sm:p-5 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par modèle, créateur (Lindberg, Cartier...), titane, forme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs">
            <ArrowUpDown className="w-4 h-4 text-[#B48628] shrink-0" />
            <span className="text-[#6B7280] hidden sm:inline">Trier par :</span>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value as SortOption)}
              className="px-3 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs font-semibold text-[#111827] focus:outline-none focus:border-[#B48628]"
            >
              <option value="featured">Sélection / Nouveautés</option>
              <option value="price-asc">Prix : Moins cher au plus cher</option>
              <option value="price-desc">Prix : Plus cher au moins cher</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  isActive
                    ? "bg-[#B48628] text-white border-[#B48628] shadow-sm"
                    : "bg-white text-[#4B5563] border-[#E8E5DF] hover:bg-[#F5F3EF] hover:text-[#111827]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#6B7280] mb-6 px-1">
          <span>
            {filteredProducts.length} modèle{filteredProducts.length > 1 ? "s" : ""} disponible{filteredProducts.length > 1 ? "s" : ""}
          </span>
          <span className="text-[11px] font-mono text-[#B48628] font-semibold">
            Tarifs affichés en Dirhams marocains (MAD TTC)
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E5DF] p-8 space-y-4 max-w-lg mx-auto">
            <Glasses className="w-12 h-12 text-[#D8D3C8] mx-auto" />
            <h3 className="text-lg font-serif font-bold text-[#111827]">
              Aucun modèle ne correspond à votre recherche
            </h3>
            <p className="text-xs text-[#6B7280]">
              Essayez d&apos;ajuster vos filtres de catégorie ou utilisez des mots-clés plus généraux.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-[#B48628] text-white text-xs font-semibold shadow-sm hover:bg-[#9B7120] transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
