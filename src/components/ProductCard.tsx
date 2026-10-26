"use client";

import React from "react";
import { Eye, MessageCircle, Sparkles } from "lucide-react";
import { FrameProduct } from "../data/products";

interface ProductCardProps {
  product: FrameProduct;
  onSelect: (product: FrameProduct) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const whatsappInquiry = encodeURIComponent(
    `Bonjour OptiVision, je souhaite me renseigner sur la disponibilité de la monture ${product.brand} - ${product.name} (${product.priceFormatted}).`
  );

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative bg-white rounded-2xl border border-[#E8E5DF] p-5 flex flex-col justify-between cursor-pointer hover:border-[#B48628]/60 hover:shadow-xl hover:shadow-[#B48628]/5 transition-all duration-300"
    >
      <div>
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#B48628]">
            {product.brand}
          </span>

          {product.badge && (
            <span className="text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F7EEDC] text-[#805C18] border border-[#ECD9B6]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Image */}
        <div className="relative aspect-[4/3] rounded-xl bg-[#FAFAF8] border border-[#F5F3EF] p-4 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-[#FCF9F2] transition-colors">
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-[#B48628]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#111827] text-[11px] font-semibold shadow-md border border-[#E8E5DF]">
              <Eye className="w-3.5 h-3.5 text-[#B48628]" />
              <span>Voir Détails</span>
            </span>
          </div>
        </div>

        {/* Title & Shape */}
        <h3 className="font-serif font-bold text-base text-[#111827] group-hover:text-[#B48628] transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-[#6B7280] mt-0.5">{product.shape}</p>

        {/* Material */}
        <p className="text-[11px] text-[#4B5563] mt-2 line-clamp-1">
          {product.material}
        </p>

        {/* Color Dots */}
        <div className="mt-3 flex items-center gap-1.5">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            ></span>
          ))}
          <span className="text-[10px] text-[#9CA3AF] ml-1">
            {product.colors.length} coloris
          </span>
        </div>
      </div>

      {/* Footer: Price & Quick Action */}
      <div className="mt-5 pt-3 border-t border-[#F5F3EF] flex items-center justify-between">
        <div>
          <span className="text-xs text-[#9CA3AF] block text-[10px] uppercase">Prix Boutique</span>
          <span className="font-mono font-bold text-sm sm:text-base text-[#111827]">
            {product.priceFormatted}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F5F3EF] hover:bg-[#F7EEDC] text-[#805C18] text-xs font-semibold border border-[#E8E5DF] transition-colors"
        >
          <span>Essayer</span>
        </button>
      </div>
    </div>
  );
}
