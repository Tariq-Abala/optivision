import React from "react";
import Link from "next/link";
import {
  Glasses,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Bonjour OptiVision, je souhaite me renseigner sur vos collections de montures et verres optiques."
  );

  return (
    <footer className="bg-[#F5F3EF] border-t border-[#E8E5DF] pt-16 pb-12 text-sm text-[#4B5563]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E8E5DF]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B48628] to-[#805C18] flex items-center justify-center text-white shadow-md">
                <Glasses className="w-5 h-5 text-white stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-[#111827] tracking-wider">
                  OPTIVISION
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#B48628] font-bold">
                  Haute Lunetterie
                </p>
              </div>
            </div>

            <p className="text-xs text-[#6B7280] leading-relaxed">
              Maison d&apos;optique de référence à Casablanca et Rabat. Nous allions l&apos;exigence médicale de l&apos;optométrie moderne à la noblesse de la haute lunetterie internationale.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#065F46] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>Opticiens &amp; Optométristes Diplômés d&apos;État</span>
            </div>
          </div>

          {/* Col 2: Casablanca Boutique */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#111827] tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B48628]" />
              <span>Boutique Casablanca</span>
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              42, Boulevard d&apos;Anfa (Angle Triangle d&apos;Or)
              <br />
              20000 Casablanca, Maroc
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B48628]" />
                <a href="tel:+212522203040" className="hover:text-[#111827] font-medium">
                  +212 5 22 20 30 40
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B48628]" />
                <span>Lun - Sam : 09h30 - 19h30</span>
              </div>
            </div>
          </div>

          {/* Col 3: Rabat Boutique */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#111827] tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B48628]" />
              <span>Boutique Rabat</span>
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              18, Avenue Fal Ould Oumeir (Quartier Agdal)
              <br />
              10080 Rabat, Maroc
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B48628]" />
                <a href="tel:+212537778899" className="hover:text-[#111827] font-medium">
                  +212 5 37 77 88 99
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B48628]" />
                <span>Lun - Sam : 09h30 - 19h30</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#111827] tracking-wide">
              Navigation &amp; Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/catalogue" className="hover:text-[#B48628] transition-colors">
                  Catalogue Montures &amp; Solaires
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#B48628] transition-colors">
                  Examen de Vue 3D &amp; Lentilles
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="hover:text-[#B48628] transition-colors">
                  Prendre Rendez-vous en Ligne
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[#B48628] transition-colors">
                  Notre Histoire &amp; Savoir-faire
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-[#B48628] transition-colors">
                  Mentions Légales &amp; Données Société
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-[#B48628] transition-colors">
                  Politique de Confidentialité (Loi 09-08)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit and Notice */}
        <div className="pt-8 border-t border-[#E8E5DF] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#6B7280]">
          <div className="space-y-1">
            <p className="font-semibold text-[#111827] flex items-center gap-1.5">
              <span>Développé par</span>
              <a
                href="https://tariqabala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B48628] hover:text-[#805C18] font-bold underline decoration-[#B48628]/40 hover:decoration-[#805C18] transition-colors"
              >
                Tariq Abala
              </a>
            </p>
            <p className="text-[11px] font-medium text-[#374151]">
              Web Development &amp; Digital Solutions
            </p>
            <p className="text-[10px] text-[#6B7280] font-mono">
              Professional Websites • Business Applications • Custom Admin Panels
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-[11px]">
            <div className="flex flex-wrap items-center gap-2 text-[#374151]">
              <span className="font-semibold">© 2026 TARIQ ABALA. Tous droits réservés.</span>
              <span className="text-[#D1D5DB]">•</span>
              <span>OptiVision Maroc SARL</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[#6B7280]">
              <Link href="/mentions-legales" className="hover:text-[#111827] transition-colors">
                Mentions Légales
              </Link>
              <span>•</span>
              <Link href="/confidentialite" className="hover:text-[#111827] transition-colors">
                Confidentialité
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-[#111827] transition-colors">
                Plan d&apos;accès
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
