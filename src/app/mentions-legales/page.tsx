import React from "react";
import Link from "next/link";
import { Shield, Building, FileText, ArrowLeft } from "lucide-react";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#111827] mb-8 font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <div className="bg-white rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-[#E8E5DF] pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B48628]">
              INFORMATIONS JURIDIQUES &amp; ÉDITEUR DU SITE
            </span>
            <h1 className="text-3xl font-serif font-bold text-[#111827] mt-2">
              Mentions Légales
            </h1>
            <p className="text-xs text-[#6B7280] mt-1">
              Dernière mise à jour : 26 Octobre 2026
            </p>
          </div>

          {/* Section 1: Éditeur du site */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827] flex items-center gap-2">
              <Building className="w-4 h-4 text-[#B48628]" />
              <span>1. Identification de l&apos;Entreprise</span>
            </h2>
            <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#4B5563] space-y-1.5 leading-relaxed font-mono">
              <p><strong className="text-[#111827]">Raison Sociale :</strong> OptiVision Maroc SARL</p>
              <p><strong className="text-[#111827]">Activité :</strong> Vente au détail d&apos;articles d&apos;optique, lunetterie de précision et examens de réfraction</p>
              <p><strong className="text-[#111827]">Siège Social :</strong> 42, Boulevard d&apos;Anfa, Angle Triangle d&apos;Or, 20000 Casablanca, Maroc</p>
              <p><strong className="text-[#111827]">Registre du Commerce (RC) :</strong> Casablanca n° 384920</p>
              <p><strong className="text-[#111827]">Identifiant Fiscal (IF) :</strong> 24910482</p>
              <p><strong className="text-[#111827]">Identifiant Commun de l&apos;Entreprise (ICE) :</strong> 001928374000082</p>
              <p><strong className="text-[#111827]">Numéro de Patente :</strong> 35891204</p>
              <p><strong className="text-[#111827]">Téléphone Standard :</strong> +212 5 22 20 30 40</p>
              <p><strong className="text-[#111827]">Courrier Électronique :</strong> direction@optivision.ma</p>
            </div>
          </div>

          {/* Section 2: Directeur de la Publication */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              2. Directeur de la Publication &amp; Encadrement Technique
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Le directeur de la publication du site est le gérant statutaire d&apos;OptiVision Maroc SARL.
              L&apos;exercice de la profession d&apos;opticien-lunetier au Maroc est régi par les dispositions légales du Ministère de la Santé du Royaume du Maroc.
            </p>
          </div>

          {/* Section 3: Hébergement */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              3. Hébergement du Site Web
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Ce site web est hébergé sur l&apos;infrastructure cloud sécurisée de :
              <br />
              <strong>Vercel Inc.</strong> — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              <br />
              Plateforme certifiée ISO 27001 et SOC 2 Type II avec CDN mondial garantissant haute disponibilité et chiffrement TLS 1.3.
            </p>
          </div>

          {/* Section 4: Conception & Développement */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              4. Conception &amp; Développement Numérique
            </h2>
            <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E8E5DF] text-xs text-[#374151]">
              <p className="font-semibold text-[#111827]">
                Développé par Tariq Abala d&apos;une manière professionnelle
              </p>
              <p className="text-[11px] text-[#6B7280] mt-1">
                Architecture logicielle moderne avec Next.js 16 (App Router), React 19, TypeScript et Tailwind CSS.
                Site vitrine conçu à titre de démonstration pour le portfolio de l&apos;ingénieur développeur Tariq Abala.
              </p>
            </div>
          </div>

          {/* Section 5: Propriété intellectuelle */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              5. Propriété Intellectuelle &amp; Marques Déposées
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Les marques citées (Lindberg, Cartier, Tom Ford, Oliver Peoples, Gucci, Persol, Chloé, Zeiss, Essilor Varilux) sont la propriété exclusive de leurs détenteurs respectifs. OptiVision les commercialise en qualité de revendeur et distributeur agréé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
