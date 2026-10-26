import React from "react";
import Link from "next/link";
import {
  Eye,
  Glasses,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  ArrowRight,
  Clock,
  HeartPulse,
  SlidersHorizontal,
  HelpCircle,
} from "lucide-react";

export default function ServicesPage() {
  const servicesList = [
    {
      id: "examen-3d",
      title: "Examen de la Réfraction 3D & Bilan Visuel",
      subtitle: "Haute précision au 1/8e de dioptrie",
      description:
        "Réalisé dans notre cabinet dédié par des optométristes diplômés. Nous analysons l'acuité visuelle monoculaire et binoculaire, la réfraction automatique et la convergence oculaire pour un confort visuel absolu.",
      features: [
        "Réfraction automatisée haute résolution",
        "Test de vision des contrastes et du relief",
        "Dépistage des anomalies de convergence",
        "Protocole sanitaire rigoureux et désinfection UV",
      ],
      duration: "25 minutes",
      price: "Offert à l'achat d'un équipement (ou 250 MAD consultation seule)",
      image: "/images/boutique/eye-examination-hd.jpg",
    },
    {
      id: "centrage-digital",
      title: "Prise de Mesures Digitalisées & Verres Progressifs",
      subtitle: "Partenaire Certifié Essilor & Carl Zeiss",
      description:
        "La réussite d'un verre progressif dépend de son centrage au millimètre. Grâce à la colonne de prise de mesures vidéo, nous enregistrons votre posture naturelle, votre distance de lecture et vos mouvements oculaires.",
      features: [
        "Mesure de l'écart pupillaire au dixième de millimètre",
        "Prise en compte de la distance verre-œil et galbe",
        "Garantie d'adaptation totale de 60 jours",
        "Verres antireflet hydrophobes et oléophobes",
      ],
      duration: "15 minutes",
      price: "Inclus dans tout montage de verres",
      image: "/images/boutique/lens-crafting.jpg",
    },
    {
      id: "contactologie",
      title: "Adaptation Lentilles de Contact & Soins",
      subtitle: "Lentilles journalières, mensuelles & toriques",
      description:
        "Pour le sport, les sorties ou le quotidien, nos spécialistes évaluent la tolérance cornéenne et le film lacrymal pour sélectionner la géométrie de lentille la plus respectueuse de vos yeux.",
      features: [
        "Bilan lacrymal et kératométrique",
        "Séance d'apprentissage personnalisée à la pose/dépose",
        "Pack d'essai gratuit de 7 jours",
        "Solutions d'entretien stériles dernière génération",
      ],
      duration: "35 minutes",
      price: "Pack bilan + essai offert",
      image: "/images/boutique/optometrist.jpg",
    },
    {
      id: "atelier-reparation",
      title: "Atelier Express : Découpe, Ajustage & Entretien",
      subtitle: "Façonné sur place à Casablanca & Rabat",
      description:
        "Nos opticiens maîtres-artisans taillent vos verres en atelier avec des meules numériques de pointe. Nous assurons également le redressage gracieux de vos montures, le changement de plaquettes et de vis à vie.",
      features: [
        "Montage express sous 48h selon stock de verres",
        "Remplacement gratuit des plaquettes en silicone",
        "Nettoyage professionnel aux ultrasons",
        "Réparation d'urgence et soudures laser",
      ],
      duration: "Immédiat en boutique",
      price: "Service gracieux pour nos clients",
      image: "/images/boutique/consultation.jpg",
    },
  ];

  const mutuelles = [
    { name: "CNSS", desc: "Prise en charge directe AMO & compléments" },
    { name: "CNOPS", desc: "Convention secteur public & enseignement" },
    { name: "SAHAM Assurance", desc: "Tiers-payant automatisé en boutique" },
    { name: "AXA Assurance Maroc", desc: "Validation dématérialisée immédiate" },
    { name: "RMA Watanya", desc: "Prise en charge intégrale selon contrat" },
    { name: "Sanad & Wafa Assurance", desc: "Accords partenaires préférentiels" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#805C18] mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-[#B48628]" />
            <span>SANTÉ VISUELLE &amp; PROTOCOLES DE POINTE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            Services &amp; Soins Optométriques
          </h1>

          <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
            De l’examen de réfraction sur matériel Carl Zeiss à l’ajustage artisanal de vos montures, découvrez l’ensemble de nos prestations professionnelles.
          </p>
        </div>

        {/* Detailed Services Cards */}
        <div className="space-y-12">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-white border border-[#E8E5DF] overflow-hidden shadow-xs p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#F7EEDC] text-[#805C18] border border-[#ECD9B6]">
                    Service 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#B48628]">
                    {service.subtitle}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#374151]">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#F5F3EF] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs">
                    <span className="text-[#6B7280] block">Durée de consultation :</span>
                    <span className="font-bold text-[#111827]">{service.duration}</span>
                  </div>

                  <Link
                    href="/rendez-vous"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111827] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1F2937] transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Réserver ce service</span>
                  </Link>
                </div>
              </div>

              {/* Service Image */}
              <div
                className={`lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E5DF] ${
                  idx % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mutuelles Conventionnées Section */}
        <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#F5F3EF] border border-[#E8E5DF]">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B48628] block mb-2">
              CONVENTIONS &amp; TIERS-PAYANT
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
              Prise en Charge Directe avec Toutes les Mutuelles
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] mt-2">
              OptiVision simplifie vos démarches de remboursement en assurant la télétransmission et le tiers-payant directement en boutique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mutuelles.map((mut, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E8E5DF] shadow-2xs flex items-start gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs text-[#111827]">{mut.name}</h3>
                  <p className="text-[11px] text-[#6B7280]">{mut.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#6B7280]">
            Munissez-vous de votre carte d&apos;assuré et de votre ordonnance lors de votre passage en boutique.
          </div>
        </section>

        {/* Eye-Care Advice FAQ */}
        <section className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
              Conseils de Nos Optométristes
            </h2>
            <p className="text-xs text-[#6B7280] mt-2">
              Quelques repères simples pour préserver votre santé visuelle au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF]">
              <h3 className="font-serif font-bold text-sm text-[#111827] mb-2">
                À quelle fréquence faire vérifier sa vue ?
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Il est recommandé de faire contrôler sa vue tous les 2 ans chez l&apos;adulte, et annuellement après 45 ans pour dépister la presbytie ou surveiller l&apos;évolution de la vision binoculaire.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF]">
              <h3 className="font-serif font-bold text-sm text-[#111827] mb-2">
                Fatigue numérique &amp; écrans : que faire ?
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Appliquez la règle du 20-20-20 : toutes les 20 minutes, regardez à 20 pieds (6 mètres) pendant 20 secondes. Nos verres avec traitement filtre lumière bleue réduisent significativement les maux de tête.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF]">
              <h3 className="font-serif font-bold text-sm text-[#111827] mb-2">
                Pourquoi choisir des verres polarisés au Maroc ?
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Sous la forte luminosité atlantique et méditerranéenne, les verres polarisés bloquent 99% des reflets aveuglants sur l&apos;asphalte, le sable et l&apos;eau, améliorant les contrastes lors de la conduite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF]">
              <h3 className="font-serif font-bold text-sm text-[#111827] mb-2">
                Quelle est la durée de garantie de mes lunettes ?
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Toutes nos montures bénéficient d&apos;une garantie fabricant de 24 mois contre tout vice caché, avec ajustage et nettoyage à vie sans frais dans nos salons de Casablanca et Rabat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
