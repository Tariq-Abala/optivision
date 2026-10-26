"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Eye,
  Sparkles,
  Award,
} from "lucide-react";
import { FrameProduct } from "../data/products";

interface ProductDetailsModalProps {
  product: FrameProduct | null;
  onClose: () => void;
}

export default function ProductDetailsModal({
  product,
  onClose,
}: ProductDetailsModalProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) return null;

  const whatsappInquiry = encodeURIComponent(
    `Bonjour OptiVision, je souhaite essayer la monture ${product.brand} - ${product.name} (${product.priceFormatted}) dans votre boutique de Casablanca ou Rabat.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FAFAF8] rounded-3xl shadow-2xl border border-[#E8E5DF] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 border border-[#E8E5DF] text-[#111827] hover:bg-[#F5F3EF] transition-colors"
          aria-label="Fermer la vue produit"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Product Image Area */}
            <div className="relative aspect-square rounded-2xl bg-white border border-[#E8E5DF] p-6 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />

              {product.badge && (
                <span className="absolute top-4 left-4 text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#F7EEDC] text-[#805C18] border border-[#ECD9B6]">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info Area */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase font-serif tracking-widest text-[#B48628] font-bold">
                  {product.brand}
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#111827] mt-1">
                  {product.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono text-[#111827]">
                    {product.priceFormatted}
                  </span>
                  <span className="text-xs text-[#6B7280]">TTC (Verres de présentation inclus)</span>
                </div>
              </div>

              <p className="text-xs text-[#4B5563] leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <span className="text-xs font-semibold text-[#111827] block mb-2">
                  Coloris :{" "}
                  <span className="text-[#B48628]">
                    {product.colors[selectedColorIndex]?.name}
                  </span>
                </span>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                        selectedColorIndex === idx
                          ? "border-[#B48628] scale-110 shadow-sm"
                          : "border-transparent hover:scale-105"
                      }`}
                      title={color.name}
                    >
                      <span
                        className="w-full h-full rounded-full block border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="pt-3 border-t border-[#E8E5DF] space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-[#F5F3EF]">
                  <span className="text-[#6B7280]">Matériau monture :</span>
                  <span className="font-medium text-[#111827] text-right">{product.material}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5F3EF]">
                  <span className="text-[#6B7280]">Forme du visage :</span>
                  <span className="font-medium text-[#111827]">{product.shape}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F5F3EF]">
                  <span className="text-[#6B7280]">Calibre &amp; Pont :</span>
                  <span className="font-mono font-medium text-[#111827]">{product.dimensions}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B7280]">Poids de la monture :</span>
                  <span className="font-mono font-medium text-[#059669]">{product.weight}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="p-3 rounded-xl bg-[#F5F3EF] border border-[#E8E5DF] text-[11px] text-[#4B5563] space-y-1">
                <div className="flex items-center gap-1.5 text-[#111827] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#B48628]" />
                  <span>Avantages Inclus OptiVision :</span>
                </div>
                <p>• Examen de vue haute précision offert pour tout équipement optique.</p>
                <p>• Prise en charge directe mutuelles (CNSS, CNOPS, SAHAM, AXA...).</p>
                <p>• Garantie casse &amp; adaptation 24 mois avec ajustage gratuit en boutique.</p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/rendez-vous"
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#B48628] to-[#9B7120] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Réserver un Essai en Boutique</span>
                </Link>

                <a
                  href={`https://wa.me/212661203040?text=${whatsappInquiry}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold hover:bg-[#D1FAE5] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#059669]" />
                  <span>Essai via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
