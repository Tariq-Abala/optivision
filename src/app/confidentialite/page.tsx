import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ArrowLeft } from "lucide-react";

export default function ConfidentialitePage() {
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
              PROTECTION DES DONNÉES PERSONNELLES (LOI 09-08)
            </span>
            <h1 className="text-3xl font-serif font-bold text-[#111827] mt-2">
              Politique de Confidentialité
            </h1>
            <p className="text-xs text-[#6B7280] mt-1">
              Conformité CNDP • Dernière mise à jour : 26 Octobre 2026
            </p>
          </div>

          {/* Intro */}
          <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#E8E5DF] text-xs text-[#4B5563] leading-relaxed">
            OptiVision Maroc SARL attache une importance fondamentale à la préservation de la vie privée et de la confidentialité des données de ses patients et visiteurs. La présente politique détaille nos engagements conformément aux dispositions de la <strong>Loi n° 09-08</strong> relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel.
          </div>

          {/* Section 1: Données collectées */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B48628]" />
              <span>1. Données Collectées &amp; Finalités du Traitement</span>
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Dans le cadre de l&apos;utilisation de notre site vitrine et de nos formulaires interactifs, nous pouvons collecter :
            </p>
            <ul className="list-disc pl-5 text-xs text-[#4B5563] space-y-1">
              <li><strong>Données d&apos;identité :</strong> Nom, prénom, civilité.</li>
              <li><strong>Données de contact :</strong> Numéro de téléphone portable, adresse email.</li>
              <li><strong>Données relatives au rendez-vous :</strong> Boutique sélectionnée, date et créneau souhaités, type de consultation.</li>
              <li><strong>Données techniques de navigation :</strong> Horodatage, adresse IP anonymisée, type de navigateur.</li>
            </ul>
          </div>

          {/* Section 2: Utilisation des données */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              2. Utilisation &amp; Non-Cession des Données
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Vos informations sont strictement réservées à l&apos;usage interne d&apos;OptiVision pour assurer la prise en charge de vos demandes, l&apos;envoi de confirmations par SMS/email et le suivi de vos ordonnances optiques.
              <strong> OptiVision ne vend, ne loue et ne cède aucune donnée à des tiers commerciaux ou publicitaires.</strong>
            </p>
          </div>

          {/* Section 3: Sécurité */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#B48628]" />
              <span>3. Sécurité &amp; Confidentialité Médicale</span>
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Toutes les transmissions de données via notre site sont chiffrées selon le protocole de sécurité SSL/TLS (HTTPS). Nos dossiers de réfraction et mesures optométriques sont assujettis aux règles strictes du secret médical professionnel.
            </p>
          </div>

          {/* Section 4: Vos droits */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              4. Vos Droits d&apos;Accès, de Rectification et de Suppression
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Conformément à la Loi 09-08, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition pour motifs légitimes sur les données qui vous concernent. Vous pouvez exercer ces droits à tout moment en adressant un email à :
              <br />
              <strong className="text-[#111827]">contact@optivision.ma</strong> ou par courrier postal à : <em>OptiVision Maroc, 42 Boulevard d&apos;Anfa, 20000 Casablanca</em>.
            </p>
          </div>

          {/* Section 5: Cookies */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#111827]">
              5. Gestion des Cookies
            </h2>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Ce site web n&apos;utilise aucun cookie traceur tiers intrusif à vocation publicitaire. Seuls les cookies techniques strictement nécessaires au fonctionnement de la session et des préférences de navigation sont déposés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
