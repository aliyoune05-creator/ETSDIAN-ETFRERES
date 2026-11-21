/* ═══════════════════════════════════════════════════════════════
   ETS DIANÉ & FRÈRES — Données du site
   ✏️  C'EST ICI QUE TOUT SE MODIFIE : coordonnées, réseaux,
       pièces et descriptions. Le site se met à jour tout
       seul, sans toucher au HTML ni au CSS.
   ═══════════════════════════════════════════════════════════════ */
window.ETS_DIANE = {

  /* ── MARQUE & COORDONNÉES ────────────────────────────────── */
  brand: {
    name: "ETS Diané & Frères",
    slogan: "L'excellence Mercedes, pièce par pièce",
    city: "Abidjan, Côte d'Ivoire",
    // WhatsApp — format international, chiffres uniquement
    waNumber: "2250140888885",
    waDisplay: "+225 01 40 88 88 85",
    // Téléphone cliquable (ligne directe)
    telNumber: "+2250707002353",
    telDisplay: "07 07 00 23 53",
    email: "contact@etsdiane.com",
    hours: "Lun – Dim : 8h00 – 18h00"
  },

  /* ── ATELIER / SHOWROOM ──────────────────────────────────── */
  showroom: {
    name: "Atelier-magasin ETS Diané & Frères",
    district: "Angré Château",
    address: "Angré Château, Cocody — face à la cité militaire, Abidjan, Côte d'Ivoire",
    mapsUrl: "https://maps.google.com/?q=Angr%C3%A9+Ch%C3%A2teau,+Cocody,+Abidjan"
  },

  /* ── RÉSEAUX SOCIAUX (remplacez par vos liens officiels) ── */
  socials: [
    { id: "tiktok",    name: "TikTok",    handle: "@etsdiane",    url: "https://tiktok.com/@etsdiane" },
    { id: "facebook",  name: "Facebook",  handle: "/etsdiane",    url: "https://www.facebook.com/etsdiane" },
    { id: "instagram", name: "Instagram", handle: "@etsdiane",    url: "https://instagram.com/etsdiane" },
    { id: "whatsapp",  name: "WhatsApp",  handle: "01 40 88 88 85", url: "https://wa.me/2250140888885?text=Bonjour%20ETS%20Dian%C3%A9%20%26%20Fr%C3%A8res%20!%20Je%20souhaite%20des%20informations%20sur%20vos%20pi%C3%A8ces." }
  ],

  /* ── CATÉGORIES DE LA GALERIE ────────────────────────────── */
  categories: ["tous", "moteur", "carrosserie", "eclairage", "roues", "interieur"],
  labels: {
    "tous": "Tous",
    "moteur": "Moteur & Mécanique",
    "carrosserie": "Carrosserie",
    "eclairage": "Éclairage & Optique",
    "roues": "Jantes & Freinage",
    "interieur": "Intérieur & Électronique"
  },

  /* ── LES 20 PIÈCES MERCEDES LES PLUS DEMANDÉES EN CI ─────── */
  gallery: [
    {
      src: "images/pce-01-v8-amg.webp",
      title: "Moteur AMG V8 Biturbo 4.0 L",
      cat: "moteur",
      desc: "Le cœur battant des G 63 et GLS 63 : 4,0 litres biturbo, 585 chevaux et un son qui ne s'oublie pas. Bloc complet inspecté, joints neufs, prêt à monter — votre V8 renaît comme à la première démarque."
    },
    {
      src: "images/pce-02-calandre-g63.webp",
      title: "Calandre chromée G 63 AMG",
      cat: "carrosserie",
      desc: "La calandre verticale signature, chrome miroir et triple étoile. Elle suffit à faire tourner la tête — montage direct, visserie et connectiques d'origine incluses."
    },
    {
      src: "images/pce-03-phare-matrix.webp",
      title: "Phare LED Matrix — E-Class W213",
      cat: "eclairage",
      desc: "Le phare intelligent qui scande la route : LED Matrix haute définition, signature d'allumage animée et feux de route adaptatifs. L'œil de votre Mercedes, relooké comme en usine."
    },
    {
      src: "images/pce-04-bouclier-amg.webp",
      title: "Bouclier avant AMG — GLS",
      cat: "carrosserie",
      desc: "Le bouclier AMG au large soubassement chromé : présence immédiate, flux d'air optimisé. Ajustement parfait, aucun écart — votre GLS affiche son rang dès le premier regard."
    },
    {
      src: "images/pce-05-jante-22.webp",
      title: "Jante forgée AMG 22 pouces",
      cat: "roues",
      desc: "Une jante forgée AMG de 22 pouces, usinée en une seule pièce et équilibrée à ±5 g. Légèreté, rigidité, éclat chrome-or : la roue que les caméras de rue suivent des yeux."
    },
    {
      src: "images/pce-06-echappement-amg.webp",
      title: "Échappement sport AMG",
      cat: "moteur",
      desc: "Système full-back AMG à vanne électronique : sonorité profonde à froid, rugissement maîtrisé en mode sport. Montage direct, sans découpe, sans adaptation — le son est légal, la fierté illimitée."
    },
    {
      src: "images/pce-07-volant-amg.webp",
      title: "Volant AMG cuir Nappa",
      cat: "interieur",
      desc: "Cuir Nappa perforé, surpiqûres contrastées, palettes en aluminium et bouton de démarrage central. La main y revient toute seule — le luxe commence au volant."
    },
    {
      src: "images/pce-08-mbux-128.webp",
      title: "Écran MBUX 12,8\" + tableau de bord digital",
      cat: "interieur",
      desc: "La double dalle incurvée de dernière génération : navigation 3D, reconnaissance vocale « Hey Mercedes » et instrumentation 100 % numérique. Votre tableau de bord, passé en très haute définition."
    },
    {
      src: "images/pce-09-aileron-carbone.webp",
      title: "Aileron arrière carbone — AMG",
      cat: "carrosserie",
      desc: "Aileron en carbone tissé, profil aérodynamique certifié et fixation d'origine. Discret avec vous, impitoyable à 180 km/h : la poignée de route en bonus."
    },
    {
      src: "images/pce-10-kit-carrosserie.webp",
      title: "Kit carrosserie AMG complet",
      cat: "carrosserie",
      desc: "Boucliers avant et arrière, bas de caisse et diffuseur : le kit AMG complet, prêt à peindre ou en fibre naturelle. Votre Mercedes devient une édition de collection, homologuée comme une série."
    },
    {
      src: "images/pce-11-frein-amg.webp",
      title: "Disques de frein AMG + étriers chromés",
      cat: "roues",
      desc: "Disques ventilés AMG et étriers chromés à 4 pistons : puissance de freinage renforcée et éclat qui ressort à chaque arrêt. Le confort d'esprit, en plus du style."
    },
    {
      src: "images/pce-12-suspension.webp",
      title: "Suspension sport calibrée",
      cat: "moteur",
      desc: "Amortisseurs pilotés ou ressorts sport : la caisse se pose, le comportement se précise, les virages se lissent. Réglage et diagnostic effectués sur place, après le montage."
    },
    {
      src: "images/pce-13-capot-carbone.webp",
      title: "Capot en carbone — AMG",
      cat: "carrosserie",
      desc: "Capot carbone à double nervure, 40 % plus léger que l'acier, avec ses fixations et joints d'origine. Il allège le train avant et habille le gabarit d'un air d'atelier de course."
    },
    {
      src: "images/pce-14-retroviseur-amg.webp",
      title: "Rétroviseurs AMG fibre de carbone",
      cat: "carrosserie",
      desc: "Bulbes de rétroviseurs en fibre de carbone, capteurs d'angle morts et clignotants LED intégrés. Le détail que les puristes repèrent avant que vous ne parliez."
    },
    {
      src: "images/pce-15-etoile-chrome.webp",
      title: "Étoile Mercedes chromée 140 mm",
      cat: "carrosserie",
      desc: "L'étoile de calandre en chrome miroir, 140 mm, avec son socle et ses fixations d'origine. Le symbole de la marque, poli main comme une pièce de bijouterie."
    },
    {
      src: "images/pce-16-antibrouillard-led.webp",
      title: "Optiques LED antibrouillard — C-Class",
      cat: "eclairage",
      desc: "Optiques de bas de caisse en LED signature, boîtier ABS chromé : plus de sécurité sous la pluie d'Abidjan, et un regard net à l'arrêt dans n'importe quelle cour."
    },
    {
      src: "images/pce-17-lavephares.webp",
      title: "Kit lave-phares Mercedes",
      cat: "eclairage",
      desc: "Le kit lave-phares complet : buses chauffantes, pompe et réservoir. Des optiques toujours nettes, même après la saison des pluies — la visibilité sans compromis."
    },
    {
      src: "images/pce-18-sellerie-nappa.webp",
      title: "Sellerie cuir Nappa — ensemble",
      cat: "interieur",
      desc: "L'ensemble de sellerie Nappa, cousu main, surpiqûres ton sur ton : sièges, portes, tunnel central. L'habitacle sent l'élégance avant même que la portière ne se referme."
    },
    {
      src: "images/pce-19-cam360.webp",
      title: "Caméra 360° + radars de stationnement",
      cat: "interieur",
      desc: "Vision 360° haute définition et radars avant/arrière : chaque centimètre du parking devient transparent. Installation et calibration de l'optique réalisées sur place."
    },
    {
      src: "images/pce-20-pedales.webp",
      title: "Pédalier sport + chromes d'habitacle",
      cat: "interieur",
      desc: "Pédalier sport en aluminium brossé et garnitures chromées d'habitacle : les détails que le pied et l'œil sentent avant même de mettre la clé en contact."
    }
  ]
};
