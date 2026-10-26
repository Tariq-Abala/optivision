"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Glasses,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Renseignements sur une monture en catalogue");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Veuillez remplir tous les champs obligatoires (*).");
      return;
    }
    setErrorMsg("");
    setSent(true);
  };

  const whatsappInquiry = encodeURIComponent(
    "Bonjour OptiVision, je souhaite échanger avec un opticien concernant vos collections et disponibilités."
  );

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EF] border border-[#E8E5DF] text-xs font-mono font-semibold text-[#805C18] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#B48628]" />
            <span>NOS BOUTIQUES AU MAROC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827]">
            Nous Contacter &amp; Nous Trouver
          </h1>

          <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
            Nos opticiens vous accueillent du lundi au samedi dans nos salons de Casablanca et Rabat pour un service personnalisé.
          </p>
        </div>

        {/* Boutiques Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Boutique Casablanca */}
          <div className="bg-white rounded-3xl border border-[#E8E5DF] p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#B48628] uppercase tracking-wider">
                  Showroom Principal
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#111827] mt-1">
                  Boutique Casablanca Triangle d&apos;Or
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#F7EEDC] text-[#805C18] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#B48628]" />
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#4B5563]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                <span>42, Boulevard d&apos;Anfa (Angle Triangle d&apos;Or), 20000 Casablanca</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B48628] shrink-0" />
                <a href="tel:+212522203040" className="hover:text-[#111827] font-semibold text-sm text-[#111827]">
                  +212 5 22 20 30 40
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B48628] shrink-0" />
                <span>Lundi - Samedi : 09h30 - 19h30 (Dimanche : Fermé)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B48628] shrink-0" />
                <span>casablanca@optivision.ma</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5F3EF] flex flex-wrap gap-3">
              <Link
                href="/rendez-vous"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#111827] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1F2937]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Prendre RDV Anfa</span>
              </Link>

              <a
                href={`https://wa.me/212661203040?text=${whatsappInquiry}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold hover:bg-[#D1FAE5]"
              >
                <MessageCircle className="w-4 h-4 text-[#059669]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Boutique Rabat */}
          <div className="bg-white rounded-3xl border border-[#E8E5DF] p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#B48628] uppercase tracking-wider">
                  Salon Privé Rabat
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#111827] mt-1">
                  Boutique Rabat Agdal
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#F7EEDC] text-[#805C18] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#B48628]" />
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#4B5563]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B48628] shrink-0 mt-0.5" />
                <span>18, Avenue Fal Ould Oumeir (Quartier Agdal), 10080 Rabat</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B48628] shrink-0" />
                <a href="tel:+212537778899" className="hover:text-[#111827] font-semibold text-sm text-[#111827]">
                  +212 5 37 77 88 99
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B48628] shrink-0" />
                <span>Lundi - Samedi : 09h30 - 19h30 (Dimanche : Fermé)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B48628] shrink-0" />
                <span>rabat@optivision.ma</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5F3EF] flex flex-wrap gap-3">
              <Link
                href="/rendez-vous"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#111827] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1F2937]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Prendre RDV Agdal</span>
              </Link>

              <a
                href={`https://wa.me/212661203040?text=${whatsappInquiry}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-bold hover:bg-[#D1FAE5]"
              >
                <MessageCircle className="w-4 h-4 text-[#059669]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-[#111827]">
              Formulaire de Contact &amp; Renseignements
            </h2>
            <p className="text-xs text-[#6B7280] mt-1">
              Une question sur la disponibilité d&apos;une monture ou sur nos verres ? Écrivez-nous.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Message Transmis avec Succès</h3>
              <p className="text-xs text-[#6B7280] max-w-md mx-auto">
                Merci {name}. Nos opticiens reviendront vers vous sous 24h ouvrées. (Simulation de démonstration).
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-5 py-2 rounded-full bg-[#FAFAF8] border border-[#E8E5DF] text-xs font-semibold"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">Nom Complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Yasmine Alami"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="yasmine@domaine.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">Téléphone (Optionnel)</label>
                  <input
                    type="tel"
                    placeholder="06 61 00 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">Objet de votre demande</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                  >
                    <option value="Renseignements sur une monture en catalogue">Renseignements sur une monture en catalogue</option>
                    <option value="Disponibilité de verres progressifs Essilor/Zeiss">Disponibilité de verres progressifs</option>
                    <option value="Devis tiers-payant mutuelle (CNSS, CNOPS...)">Devis tiers-payant mutuelle</option>
                    <option value="Question sur un rendez-vous">Question sur un rendez-vous</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">Votre Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez votre besoin ou indiquez les références d'une monture..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAFAF8] border border-[#E8E5DF] text-xs text-[#111827] focus:outline-none focus:border-[#B48628]"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#B48628] to-[#9B7120] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105"
                >
                  Envoyer Votre Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
