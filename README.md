# OptiVision — Haute Lunetterie & Centre Optique

Site web vitrine premium pour une maison d'optique et de haute lunetterie à Casablanca (Triangle d'Or) & Rabat (Agdal).

Repository GitHub : [https://github.com/Tariq-Abala/optivision](https://github.com/Tariq-Abala/optivision)

## Présentation du Projet
OptiVision est une application web Next.js 16 de production conçue pour valoriser des montures de créateurs haut de gamme (Lindberg, Cartier, Tom Ford, Oliver Peoples, Masunaga...) et des services de santé visuelle (examens de réfraction 3D, verres progressifs Essilor/Zeiss sur-mesure, adaptation contactologie).

Le site adopte une direction artistique lumineuse et épurée inspirée des boutiques d'optique de luxe : fonds blanc et ivoire chaud, surfaces beige et gris perle, typographie soignée, photographies réelles haute résolution et accents dorés champagne.

### Fonctionnalités Clés
- **Design Lumineux & Épuré** : Palette ivoire chaud (`#FAFAF8`), blanc pur, gris perle et or champagne (`#B48628`), typographie serif élégante, micro-animations discrètes et aucun thème noir sombre.
- **Catalogue de Lunetterie Interactif (`/catalogue`)** :
  - Filtrage fonctionnel par catégorie : Tout, Optique / Vue, Solaires, Homme, Femme, Titane Ultra-Léger.
  - Recherche en temps réel par mot-clé (modèle, créateur, matière, forme).
  - Tri par prix (croissant / décroissant) ou nouveautés.
  - Tarifs affichés en Dirhams marocains (MAD TTC).
- **Fiche Produit Détaillée Interactive** : Modal détaillée avec photographie haute résolution, sélecteur dynamique de coloris, spécifications techniques (matière, calibre, pont, branches, poids en grammes), avantages inclus et bouton de demande d'essai direct via WhatsApp.
- **Services & Soins Optométriques (`/services`)** : Présentation du protocole de réfraction 3D, colonne de centrage digitalisée, contactologie, atelier de réparation sur place et conventions de tiers-payant mutuelles marocaines (CNSS, CNOPS, SAHAM, AXA, RMA, Wafa Assurance, Sanad).
- **Notre Maison (`/a-propos`)** : Histoire de la maison fondée en 2011, équipe d'optométristes diplômés d'État et 4 piliers d'engagement qualité.
- **Prise de Rendez-vous en Ligne (`/rendez-vous`)** :
  - Sélection de la boutique (Casablanca Anfa / Rabat Agdal), motif de consultation, date et créneau horaire.
  - Validation complète des champs et du numéro de téléphone marocain.
  - **Avis Transparent de Démonstration** : Indique clairement que la demande est une simulation dans le cadre du portfolio et qu'aucun créneau physique n'est bloqué sans confirmation réelle.
- **Boutiques & Contact (`/contact`)** : Informations complètes sur les deux salons de vente, adresses physiques, horaires d'ouverture (09h30 - 19h30), numéros de téléphone et lien direct WhatsApp avec message prérempli.
- **Pages Légales** :
  - **Mentions Légales (`/mentions-legales`)** : Données d'immatriculation marocaines éditables (RC, IF, ICE, Patente).
  - **Politique de Confidentialité (`/confidentialite`)** : Conforme aux dispositions de la Loi marocaine 09-08 (CNDP).

## Technologies Utilisées
- **Framework** : [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Rendu** : [React 19](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Assets** : Photographies haute résolution hébergées localement dans `public/images/`

---

## Installation & Démarrage Local

### Prérequis
- Node.js version 18.18+ ou 20+
- npm version 9+

### 1. Installation des Dépendances
```bash
cd optivision
npm install
```

### 2. Lancer le Serveur de Développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compiler pour la Production
```bash
npm run build
```

### 4. Démarrer le Serveur de Production
```bash
npm run start
```

---

## Déploiement sur Vercel
Ce projet est entièrement autonome avec son propre `package.json` et `package-lock.json` :
1. Poussez les modifications sur GitHub :
   ```bash
   git add .
   git commit -m "feat: enhance OptiVision with production light boutique design"
   git push origin main
   ```
2. Sur [Vercel](https://vercel.com/) :
   - Cliquez sur **Add New...** > **Project**
   - Importez le dépôt `Tariq-Abala/optivision`
   - Le framework Next.js est automatiquement détecté
   - Cliquez sur **Deploy**

---

## Auteur & Copyright
Développé par [**Tariq Abala**](https://tariqabala.com) — Web Development & Digital Solutions.
*Professional Websites • Business Applications • Custom Admin Panels*

© 2026 TARIQ ABALA. Tous droits réservés.
