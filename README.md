# OptiVision — Centre Optique & Haute Lunetterie

Site web vitrine premium pour un centre d'optique et de lunetterie de luxe à Casablanca & Rabat.

## Présentation du Projet
OptiVision est une application web moderne et élégante conçue pour valoriser des montures de créateurs haut de gamme et des services de santé visuelle (bilans réfractifs 3D, verres progressifs sur mesure). Le site offre une expérience utilisateur raffinée, une navigation fluide, un catalogue interactif avec filtres et un module complet de prise de rendez-vous en ligne.

### Fonctionnalités Clés
- **Design Sombre & Luxueux** : Palette noir onyx (`#0A0A0F`), accents dorés (`#D4A853`), typographie soignée et animations subtiles.
- **Catalogue de Lunetterie Interactif** : Filtrage par catégorie (Optique Homme, Optique Femme, Solaires, Titane), recherche textuelle en temps réel et fiche détaillée de chaque monture.
- **Module de Prise de Rendez-vous** : Sélection du motif de consultation, de la boutique (Casablanca / Rabat), de la date et du créneau horaire avec confirmation interactive.
- **Section Expertise Médicale & Équipements** : Présentation des technologies d'examen 3D et des garanties verres Essilor/Zeiss.
- **Intégration Mobile First & WhatsApp** : Prise de contact instantanée et géolocalisation des boutiques.

## Technologies Utilisées
- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **UI & Rendu** : [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)

---

## Installation & Démarrage Local

### Prérequis
- Node.js version 18.18+ ou 20+
- npm version 9+

### 1. Installation des Dépendances
```bash
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

## Déploiement Indépendant

### Option A : Dépôt GitHub Séparé (Recommandé)

1. Initialisez un nouveau dépôt Git dans ce dossier :
   ```bash
   cd optivision
   git init
   git add .
   git commit -m "feat: initial commit of OptiVision project"
   ```
2. Créez un nouveau dépôt public ou privé sur GitHub nommé `optivision` :
   ```bash
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/optivision.git
   git branch -M main
   git push -u origin main
   ```
3. Connectez-vous sur [Vercel](https://vercel.com/) :
   - Cliquez sur **Add New...** > **Project**
   - Importez le dépôt `optivision`
   - Le framework Next.js est automatiquement détecté
   - Cliquez sur **Deploy**

### Option B : Déploiement Monorepo (depuis le dossier racine)
Si vous conservez tous les projets dans un seul dépôt :
- Sur Vercel, définissez **Root Directory** sur `optivision`.
- Les scripts de build et d'installation fonctionneront automatiquement.

---

## Variables d'Environnement
Ce projet ne requiert aucune variable d'environnement obligatoire pour fonctionner.

Si vous souhaitez connecter une passerelle d'envoi SMS ou de rendez-vous réelle :
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (Optionnel) : Numéro WhatsApp pour la réservation directe (ex: `212600000000`).

---

## Auteur
Développé par **Tariq Abala** d'une manière professionnelle.
