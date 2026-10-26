"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";

export default function AppointmentPage() {
  const [boutique, setBoutique] = useState("Casablanca — 42, Bd d'Anfa (Triangle d'Or)");
  const [motif, setMotif] = useState("Examen de la Vue 3D & Bilan Réfractif (25 min)");
  const [date, setDate] = useState("2026-11-04");
  const [time, setTime] = useState("11:30");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [hasPrescription, setHasPrescription] = useState(false);

  // Validation & Submission States
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [simulatedRef, setSimulatedRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!fullName.trim() || fullName.trim().length < 3) {
      setErrorMsg("Veuillez renseigner votre nom complet (au moins 3 caractères).");
      return;
    }

    // Phone validation for Moroccan format (06, 07, 05, +212...)
    const cleanPhone = phone.replace(/[\s.-]/g, "");
    if (!cleanPhone || cleanPhone.length < 9) {
      setErrorMsg("Veuillez renseigner un numéro de téléphone marocain valide (ex: 06 61 00 00 00).");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Veuillez renseigner une adresse email valide.");
      return;
    }

    // Generate simulated reference
    const refCode = "OPT-SIM-" + Math.floor(10000 + Math.random() * 90000);
    setSimulatedRef(refCode);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour OptiVision, je souhaite prendre rendez-vous pour : ${motif} à la boutique de ${boutique.split("—")[0].trim()}. Nom : ${fullName || "Client"}.`
  );

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#805C18] mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#B48628]" />
            <span>PRISE DE RENDEZ-VOUS OPTOMÉTRIQUE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            Réserver Votre Visite Privée
          </h1>

          <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
            Choisissez votre boutique et votre horaire souhaité pour un examen de la vue approfondi ou une séance d&apos;essayage de montures avec nos visagistes.
          </p>
        </div>

        {/* Form or Confirmation Card */}
        <div className="bg-white rounded-3xl border border-[#E8E5DF] p-6 sm:p-10 shadow-lg">
          {submitted ? (
            /* Honest Demonstration Confirmation Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B48628]">
                  SIMULATION ENREGISTRÉE AVEC SUCCÈS
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                  Demande de Rendez-vous Simulée
                </h2>
              </div>

              {/* Explicit Mandatory Demo Notice as requested */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-left text-xs text-[#92400E] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#78350F]">
                  <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Avis Transparent de Démonstration :</span>
                </div>
                <p className="leading-relaxed">
                  Ce site web est une réalisation de démonstration conçue dans le cadre du portfolio professionnel de <strong>Tariq Abala</strong>.
                  Cette soumission est une <strong>simulation interactive</strong> : aucune donnée n&apos;est transmise à un magasin physique réel et <strong>aucun créneau effectif n&apos;a été réservé en boutique</strong>.
                </p>
                <p className="leading-relaxed">
                  Pour contacter une véritable boutique ou tester l&apos;interaction WhatsApp, utilisez le bouton direct ci-dessous :
                </p>
              </div>

              {/* Simulated Summary Receipt */}
              <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-[#E8E5DF]">
                  <span className="text-[#6B7280]">Référence Simulation :</span>
                  <span className="font-mono font-bold text-[#B48628]">{simulatedRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E5DF]">
                  <span className="text-[#6B7280]">Client :</span>
                  <span className="font-semibold text-[#111827]">{fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E5DF]">
                  <span className="text-[#6B7280]">Boutique choisie :</span>
                  <span className="font-medium text-[#111827] text-right">{boutique}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E5DF]">
                  <span className="text-[#6B7280]">Prestation :</span>
                  <span className="font-medium text-[#111827] text-right">{motif}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E5DF]">
                  <span className="text-[#6B7280]">Date &amp; Heure :</span>
                  <span className="font-medium text-[#111827]">{date} à {time}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B7280]">Téléphone :</span>
                  <span className="font-mono text-[#111827]">{phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName("");
                    setPhone("");
                    setEmail("");
                  }}
                  className="px-6 py-2.5 rounded-full bg-white border border-[#E8E5DF] text-[#111827] text-xs font-semibold hover:bg-[#F5F3EF]"
                >
                  Effectuer un autre test de formulaire
                </button>

                <a
                  href={`https://wa.me/212661203040?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold hover:bg-[#D1FAE5]"
                >
                  <MessageCircle className="w-4 h-4 text-[#059669]" />
                  <span>Ouvrir WhatsApp avec ces informations</span>
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Demo Notice Banner */}
              <div className="p-3.5 rounded-xl bg-[#F5F3EF] border border-[#E8E5DF] flex items-start gap-2.5 text-xs text-[#4B5563]">
                <Info className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                <span>
                  <strong>Formulaire de démonstration :</strong> Renseignez vos coordonnées ci-dessous pour tester la validation. Une confirmation transparente vous sera affichée.
                </span>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Salon Boutique */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    1. Choix de la Boutique OptiVision *
                  </label>
                  <select
                    value={boutique}
                    onChange={(e) => setBoutique(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  >
                    <option value="Casablanca — 42, Bd d'Anfa (Triangle d'Or)">
                      Casablanca — 42, Bd d&apos;Anfa (Triangle d&apos;Or)
                    </option>
                    <option value="Rabat — 18, Av. Fal Ould Oumeir (Agdal)">
                      Rabat — 18, Av. Fal Ould Oumeir (Agdal)
                    </option>
                  </select>
                </div>

                {/* 2. Prestation */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    2. Motif de Consultation *
                  </label>
                  <select
                    value={motif}
                    onChange={(e) => setMotif(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  >
                    <option value="Examen de la Vue 3D & Bilan Réfractif (25 min)">
                      Examen de la Vue 3D &amp; Bilan Réfractif (25 min)
                    </option>
                    <option value="Essayage & Choix de Montures Solaires / Vue (30 min)">
                      Essayage &amp; Choix de Montures Solaires / Vue (30 min)
                    </option>
                    <option value="Bilan & Adaptation Lentilles de Contact (35 min)">
                      Bilan &amp; Adaptation Lentilles de Contact (35 min)
                    </option>
                    <option value="Ajustage, Nettoyage & Réparation Express (15 min)">
                      Ajustage, Nettoyage &amp; Réparation Express (15 min)
                    </option>
                    <option value="Renouvellement d'Ordonnance Médicale">
                      Renouvellement d&apos;Ordonnance Médicale
                    </option>
                  </select>
                </div>

                {/* 3. Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    3. Date Souhaitée *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min="2026-10-27"
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>

                {/* 4. Time */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    4. Créneau Horaire (Lun - Sam : 09h30 - 19h30) *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  >
                    <option value="09:30">09h30</option>
                    <option value="10:30">10h30</option>
                    <option value="11:30">11h30</option>
                    <option value="14:30">14h30</option>
                    <option value="16:00">16h00</option>
                    <option value="17:30">17h30</option>
                    <option value="18:30">18h30</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F5F3EF] grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    Nom &amp; Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mehdi Kabbaj"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    Téléphone (SMS de confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 06 61 23 45 67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre.email@domaine.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-2">
                    Modèle particulier recherché ou remarques (optionnel)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Je souhaite essayer la monture Lindberg en titane or"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>
              </div>

              {/* Checkbox Prescription */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="prescription"
                  checked={hasPrescription}
                  onChange={(e) => setHasPrescription(e.target.checked)}
                  className="rounded border-[#D8D3C8] text-[#B48628] focus:ring-[#B48628]"
                />
                <label htmlFor="prescription" className="text-xs text-[#4B5563] cursor-pointer">
                  Je dispose d&apos;une ordonnance ophtalmologiste de moins de 3 ans.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-[#F5F3EF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#6B7280]">
                  * Données traitées conformément à la loi marocaine 09-08 sur la protection des données.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B48628] via-[#C5A059] to-[#9B7120] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
                >
                  Confirmer la Demande de Rendez-vous
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
