# ✏️ Modifier le contenu du site — ETS Diané & Frères

Toutes les données du site vivent dans **`content/content.js`**.
Modifiez ce fichier seul : le site se met à jour automatiquement.

## Coordonnées (`brand`)

```js
brand: {
  waNumber: "2250140888885",   // WhatsApp, chiffres uniquement (225…)
  waDisplay: "+225 01 40 88 88 85",
  telNumber: "+2250707002353", // lien tel:
  telDisplay: "07 07 00 23 53",
  email: "contact@etsdiane.com",
  hours: "Lun – Dim : 8h00 – 18h00"
}
```

## Réseaux sociaux (`socials`)

Remplacez par vos **liens officiels** :

```js
socials: [
  { id: "tiktok",    name: "TikTok",    handle: "@votrehandle", url: "https://tiktok.com/@votrehandle" },
  { id: "facebook",  name: "Facebook",  handle: "/VotrePage",   url: "https://www.facebook.com/votrepagne" },
  { id: "instagram", name: "Instagram", handle: "@votrehandle", url: "https://instagram.com/votrehandle" },
  { id: "youtube",   name: "YouTube",   handle: "@votrechaîne", url: "https://youtube.com/@votrechaîne" },
  { id: "whatsapp",  name: "WhatsApp",  handle: "01 40 88 88 85", url: "https://wa.me/2250140888885" }
]
```

Les 5 `id` sont fixes (`tiktok`, `facebook`, `instagram`, `youtube`,
`whatsapp`) — ce sont eux qui choisissent l'icône et la couleur de marque.

## Pièces Mercedes (`gallery`)

Une pièce = un bloc :

```js
{
  src: "images/pce-01-v8-amg.png",   // fichier dans /images
  title: "Moteur AMG V8 Biturbo 4.0 L", // titre affiché
  cat: "moteur",                     // moteur | carrosserie | eclairage | roues | interieur
  desc: "Votre description captivante ici…"
}
```

- **Ajouter** : copiez un bloc, changez `src` (placez l'image dans
  `images/`), `title`, `cat`, `desc` → insérez-le dans la liste.
- **Retirer** : supprimez le bloc.
- **Catégories** : définies dans `categories` / `labels` en haut du fichier.

## Showroom (`showroom`)

```js
showroom: {
  name: "Showroom ETS Diané & Frères",
  district: "Angré Château",
  address: "Angré Château, Cocody — Abidjan, Côte d'Ivoire",
  mapsUrl: "https://maps.google.com/?q=Angr%C3%A9+Ch%C3%A2teau,+Abidjan"
}
```

Générez un lien Google Maps : *Google Maps → votre adresse → Partager →
Copier le lien*, puis collez-le dans `mapsUrl`.

## Après chaque modification

Rechargez simplement la page du navigateur (Ctrl/Cmd + R).
Aucune compilation, aucun build.
