import React from "react";
import Link from "next/link";
import {
  Glasses,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  Users2,
  HeartHandshake,
} from "lucide-react";

export default function AboutPage() {
  const commitments = [
    {
      title: "Indépendance & Sélection Exigeante",
      desc: "Nous sélectionnons nos montures auprès de maisons indépendantes reconnues pour leur savoir-faire (Lindberg au Danemark, Masunaga au Japon, Cartier à Paris). Aucune concession sur la qualité des alliages et des charnières.",
    },
    {
      title: "Précision Médicale Certifiée",
      desc: "Chaque examen de réfraction est conduit par un optométriste diplômé dans le respect scrupuleux des normes internationales d'ophtalmologie et de santé oculaire.",
    },
    {
      title: "Sur-Mesure Morphologique",
      desc: "Chaque visage est unique. Nous ajustons les montures à votre morphologie avec un façonnage minutieux des plaquettes et des branches pour éliminer tout point de pression.",
    },
    {
      title: "Garantie Totale de Satisfaction",
      desc: "Si vos verres progressifs ou unifocaux ne vous apportent pas un confort immédiat, nous les réadaptons gratuitement dans les 60 jours suivant la livraison.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#805C18] mb-3">
            <Award className="w-3.5 h-3.5 text-[#B48628]" />
            <span>NOTRE HISTOIRE &amp; ENGAGEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            La Maison OptiVision
          </h1>

          <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
            Depuis 2011, nous façonnons une vision singulière de l&apos;optique au Maroc : celle d&apos;un art de vivre où l&apos;acuité visuelle rime avec distinction et sérénité.
          </p>
        </div>

        {/* Narrative & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
              Une Passion Née de l’Excellence Lunetière
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Fondée à Casablanca au cœur du Triangle d&apos;Or par une équipe d&apos;optométristes passionnés par le design et la précision technique, OptiVision s&apos;est imposée comme l&apos;adresse de référence pour les esthètes du regard.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Face à la standardisation industrielle, nous avons choisi de célébrer les ateliers d&apos;exception : le titane travaillé à la main dans les manufactures de Fukui au Japon, l&apos;acétate de coton mûri en Italie, et la créativité audacieuse des studios parisiens et scandinaves.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-[#111827] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B48628]" />
                <span>Casablanca Triangle d&apos;Or</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B48628]" />
                <span>Rabat Agdal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF]">
            <img
              src="/images/boutique/casablanca-store.jpg"
              alt="Boutique OptiVision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars of Commitment */}
        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
              Nos Quatre Piliers d’Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((comm, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#E8E5DF] shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#F7EEDC] text-[#805C18] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111827]">{comm.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{comm.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="p-10 rounded-3xl bg-[#F5F3EF] border border-[#E8E5DF] text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-[#111827]">
            Venez Vivre l’Expérience en Boutique
          </h2>
          <p className="text-xs text-[#4B5563] max-w-lg mx-auto leading-relaxed">
            Nos opticiens se feront un plaisir de vous accueillir pour un café de bienvenue et un diagnostic de vos besoins visuels.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/rendez-vous"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#B48628] to-[#9B7120] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105"
            >
              Prendre Rendez-vous
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white border border-[#E8E5DF] text-[#111827] text-xs font-bold uppercase tracking-wider hover:bg-[#EFECE6]"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
