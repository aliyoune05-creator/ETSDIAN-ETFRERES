# 🔧 ETS DIANÉ & FRÈRES — Pièces Mercedes détachées, Angré, Abidjan

> **Spécialiste des pièces Mercedes** — L'excellence Mercedes, pièce par pièce.

Site vitrine statique (HTML · CSS · JS, zéro dépendance, zéro build),
style **Premium 6 étoiles**, livré avec **20 pièces Mercedes Ultra HD**
(moteur, carrosserie, éclairage, jantes & freinage, intérieur),
section **Custom & Tuning**, atelier-magasin **Angré Château** avec
carte 3D interactive, carte interactive d'Abidjan et **recherche
intelligente** de tout le contenu du site.

## 📦 Contenu de l'archive

```
├── index.html          → Structure complète du site (SEO intégré)
├── styles.css          → Design system premium (palette or / bleu perle / noir)
├── script.js           → Moteur immersif (16 systèmes interactifs)
├── content/
│   ├── content.js      → ★ TOUTES les pièces + coordonnées (modifiable)
│   └── README.md       → Guide de modification du contenu
├── images/
│   ├── logo.png                  → Logo officiel (décliné de la carte)
│   ├── pce-*.png (×20)           → Pièces Mercedes Ultra HD générées
├── GUIDE-MISE-EN-LIGNE.md        → Pas à pas de publication
└── README.md                     → Ce fichier
```

## 🎨 Choix de direction artistique appliqués

### Palette royale (exigée)
| Rôle | Couleur | Hex |
|---|---|---|
| Noir perle (puissance) | ⬛ | `#0A0A0A` |
| Or premium (prestige) | 🟨 | `#FFD700` |
| Blanc diamant (pureté) | ⬜ | `#FFFFFF` |
| Bleu perle (confiance) | 🟦 | `#4A7FB5` |
| Argent chrome (technologie) | ⬜ | `#C0C0C0` |

Le vert n'apparaît que comme **couleur de marque** (icônes WhatsApp) —
jamais dans l'interface.

### Typographie
- **Montserrat** (400→900) — corps, titres, interface : modernité mécanique.
- **Playfair Display** (italique) — accents de prestige (« Mercedes, »,
  « pièce par pièce », bandeau défilant) : élégance 6 étoiles.

### Logo
Votre carte a été déclinée en **lockup logo** (titre + sous-titre + étoile
Mercedes + 3 voitures) sur fond blanc arrondi : header, préloader et
footer. Fichier : `images/logo.png`.

### Animations & immersion
1. **Préloader** « Ouverture de l'atelier » (logo + barre or/bleu perle).
2. **Slogan animé** « L'excellence Mercedes, pièce par pièce » —
   décodage cybernétique + néon **or premium ↔ chrome** pulsant.
3. **Particules** or/chrome/bleu perle en canvas (pause hors-écran).
4. **Parallaxe** : fond hero (moteur V8), contenu hero, pièces de la galerie.
5. **Tilt 3D** des cartes services **et** des 6 cartes customisation
   + halo radial qui suit la souris.
6. **Panneaux holographiques** : balayage lumineux (scanline or/bleu
   perle) + grille de projection sur les 4 services.
7. **Galerie immersive** : filtres (Tous/Moteur/Carrosserie/Éclairage/
   Jantes & Freinage/Intérieur), hover zoom + description complète,
   **lightbox** clavier (←/→/Échap) + swipe.
8. **Recherche intelligente** : instantanée sur les 20 pièces, les 4
   services, les 6 personnalisations et les 6 sections ; Entrée pour le
   1ᵉʳ résultat, flèches pour naviguer.
9. **Carte 3D Angré Château** : inclinaison perspective qui suit la souris,
   marqueur atelier pulsant, POI au survol.
10. **Carte interactive Abidjan** : 11 communes survolables, panneau au
    clic, zoom molette/boutons, glisser-déposer, marqueur atelier pulsant.
11. **Compteurs** animés (5 000+ références, 100 % authentifiées,
    24h livraison, 7j/7 réponse).
12. **Curseur personnalisé** or + halo élastique (desktop).
13. **Bandeau marquee** or défilant des 6 univers de la maison.
14. **Formulaire** : labels flottants, validation live, succès animé +
    **relais WhatsApp** avec message pré-rempli.
15. **FAB WhatsApp** dernière génération : double anneau pulsant, infobulle.
16. **Réseaux sociaux** (TikTok, Facebook, Instagram, WhatsApp) en
    couleurs de marque officielles, générés depuis `content.js`.

### Contact (sur la carte fournie)
- **WhatsApp** : 01 40 88 88 85 (`wa.me/2250140888885`) — FAB, nav, cartes.
- **Téléphone** : 07 07 00 23 53 (`tel:+2250707002353`) cliquable.
- **Email** : contact@etsdiane.com — ⚠️ domaine complété par
  convention : confirmez-le dans `content/content.js` (champ `brand.email`).
- **Adresse** : Angré Château, Cocody — face à la cité militaire
  (lien Google Maps intégré).
- **Horaires** : Lun – Dim, 8h00 – 18h00 (à ajuster si besoin).

### Section Custom & Tuning (nouveau)
« Les personnalisations du marché » — 6 prestations : Kit carrosserie
AMG, Jantes forgées & pneus, Éclairage Xenon & LED, Échappement sport,
Suspension & châssis, Intérieur cuir & surpiqûres.

### SEO & accessibilité
- `<title>`, meta description, Open Graph, favicon, `lang="fr"`.
- HTML sémantique, `aria-label`, navigation clavier, focus visibles,
  `prefers-reduced-motion` respecté, `alt` sur toutes les images.

## ▶️ Lancer le site en local
- **Double-cliquer** sur `index.html` (fonctionne hors-ligne), ou
- `python3 -m http.server 8080` → `http://localhost:8080`.

## ✏️ Personnaliser avant mise en ligne
Dans `content/content.js` (5 minutes, sans toucher au reste) :
- `socials` — vos **liens officiels** TikTok / Facebook / Instagram.
- `brand.email` — confirmer le domaine.
- `gallery` — ajouter/retirer des pièces (format détaillé dans
  `content/README.md`).

## 📋 Note images
20 pièces générées IA Ultra HD dans la palette or/bleu perle/chrome :
moteur V8 AMG, calandre G 63, phare LED Matrix, bouclier AMG, jante
forgée 22", échappement, volant Nappa, MBUX 12,8", aileron carbone,
kit carrosserie, freins AMG, suspension, capot carbone, rétroviseurs,
étoile chromée, antibrouillard LED, lave-phares, sellerie Nappa,
caméra 360°, pédalier sport. L'œuvre est **intemporelle** : aucune date
n'apparaît sur le site. Si votre hébergeur limite le poids, compressez
les PNG en WebP via squoosh.app — le site resterait identique
visuellement.
