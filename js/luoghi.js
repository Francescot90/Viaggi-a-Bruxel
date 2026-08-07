/* Luoghi del viaggio.
   g = giorno (0 = punto fisso), z = zona, q = query per Google Maps */
var LUOGHI = [

  /* punti fissi */
  { n:"Bedford Hotel", g:0, z:"bxl", lat:50.8442326, lng:4.3474068,
    d:"la base", q:"Bedford Hotel & Congress Centre, Rue du Midi 135, 1000 Bruxelles" },
  { n:"Stazione Bruxelles-Central", g:0, z:"bxl", lat:50.845504, lng:4.3570964,
    d:"treni per Bruges", q:"Brussels Central Station, 1000 Bruxelles" },
  { n:"Gare du Midi", g:0, z:"bxl", lat:50.836155, lng:4.338181,
    d:"autobus e metro", q:"Bruxelles-Midi, 1060 Saint-Gilles" },

  /* sabato */
  { n:"Pistolet Original", g:1, z:"bxl", lat:50.8415065, lng:4.3530563,
    d:"pranzo", q:"Pistolet Original, Rue Joseph Stevens 26, 1000 Bruxelles" },
  { n:"Notre-Dame du Sablon", g:1, z:"bxl", lat:50.8404329, lng:4.3562526,
    d:"chiesa gotica", q:"Église Notre-Dame du Sablon, 1000 Bruxelles" },
  { n:"Mont des Arts", g:1, z:"bxl", lat:50.8437985, lng:4.3570733,
    d:"la vista", q:"Mont des Arts, 1000 Bruxelles" },
  { n:"Galeries Saint-Hubert", g:1, z:"bxl", lat:50.8480832, lng:4.3552506,
    d:"al coperto", q:"Galeries Royales Saint-Hubert, 1000 Bruxelles" },
  { n:"Grand Place", g:1, z:"bxl", lat:50.8467887, lng:4.3524356,
    d:"il cuore", q:"Grand Place, 1000 Bruxelles" },
  { n:"Manneken Pis", g:1, z:"bxl", lat:50.844993, lng:4.349989,
    d:"la statuetta", q:"Manneken Pis, 1000 Bruxelles" },
  { n:"9 et Voisins", g:1, z:"bxl", lat:50.848777, lng:4.3474128,
    d:"cena", q:"9 et Voisins, Rue Van Artevelde 1, 1000 Bruxelles" },
  { n:"Madame Moustache", g:1, z:"bxl", lat:50.851538, lng:4.3489755,
    d:"serata da ballo", q:"Madame Moustache, Quai au Bois à Brûler 5, 1000 Bruxelles" },

  /* domenica */
  { n:"Atomium", g:2, z:"bxl", lat:50.8948787, lng:4.3415547,
    d:"mattina", q:"Atomium, Place de l'Atomium 1, 1020 Bruxelles" },
  { n:"Fin de Siècle", g:2, z:"bxl", lat:50.8489127, lng:4.3470991,
    d:"pranzo · contanti", q:"Fin de Siècle, Rue des Chartreux 9, 1000 Bruxelles" },
  { n:"Meyboom · dove passa il corteo", g:2, z:"bxl", lat:50.8467887, lng:4.3524356,
    d:"fra le 13 e le 15", q:"Grand Place, 1000 Bruxelles" },
  { n:"Meyboom · dove piantano l'albero", g:2, z:"bxl", lat:50.8514196, lng:4.3588773,
    d:"prima delle 17", q:"Rue des Sables 1, 1000 Bruxelles" },
  { n:"Place Sainte-Catherine", g:2, z:"bxl", lat:50.8499559, lng:4.3482732,
    d:"pomeriggio", q:"Place Sainte-Catherine, 1000 Bruxelles" },
  { n:"Pizzeria da Michele", g:2, z:"bxl", lat:50.8497158, lng:4.3471299,
    d:"cena", q:"L'Antica Pizzeria da Michele, Rue Antoine Dansaert 53, 1000 Bruxelles" },

  /* lunedì — Bruges */
  { n:"Stazione di Brugge", g:3, z:"bru", lat:51.1976659, lng:3.2178509,
    d:"arrivo", q:"Brugge Station, Stationsplein, 8000 Brugge" },
  { n:"Minnewater", g:3, z:"bru", lat:51.2000104, lng:3.2247317,
    d:"il lago", q:"Minnewater, 8000 Brugge" },
  { n:"Beghinaggio", g:3, z:"bru", lat:51.2013447, lng:3.2227093,
    d:"silenzio", q:"Begijnhof Ten Wijngaerde, 8000 Brugge" },
  { n:"Chiesa di Nostra Signora", g:3, z:"bru", lat:51.20469, lng:3.2244474,
    d:"il Michelangelo", q:"Onze-Lieve-Vrouwekerk, Mariastraat, 8000 Brugge" },
  { n:"Imbarco del battello", g:3, z:"bru", lat:51.2036563, lng:3.2245984,
    d:"15 € · sul posto", q:"Katelijnestraat 4, 8000 Brugge" },
  { n:"Rozenhoedkaai", g:3, z:"bru", lat:51.207137, lng:3.2275063,
    d:"la cartolina", q:"Rozenhoedkaai, 8000 Brugge" },
  { n:"DE Reien", g:3, z:"bru", lat:51.2070815, lng:3.2275235,
    d:"pranzo", q:"DE Reien, Rozenhoedkaai 5, 8000 Brugge" },
  { n:"Burg", g:3, z:"bru", lat:51.2085062, lng:3.2268383,
    d:"piazza storica", q:"Burg, 8000 Brugge" },
  { n:"Markt e Belfort", g:3, z:"bru", lat:51.2081466, lng:3.2248011,
    d:"piazza grande", q:"Markt, 8000 Brugge" },
  { n:"La Caneva", g:3, z:"bxl", lat:50.8454692, lng:4.3482438,
    d:"cena a Bruxelles", q:"La Caneva, Rue des Grands Carmes 9, 1000 Bruxelles" },

  /* martedì */
  { n:"Place du Jeu de Balle", g:4, z:"bxl", lat:50.8372263, lng:4.3455158,
    d:"mercato delle pulci", q:"Place du Jeu de Balle, 1000 Bruxelles" },
  { n:"Ascensore delle Marolles", g:4, z:"bxl", lat:50.8380049, lng:4.3510848,
    d:"gratis", q:"Ascenseur des Marolles, Place Poelaert, 1000 Bruxelles" },
  { n:"Place Poelaert", g:4, z:"bxl", lat:50.8380049, lng:4.3510848,
    d:"il belvedere", q:"Place Poelaert, 1000 Bruxelles" },
  { n:"Petit Sablon", g:4, z:"bxl", lat:50.8410000, lng:4.3572000,
    d:"giardino all'ombra", q:"Square du Petit Sablon, 1000 Bruxelles" },
  { n:"Palazzo Reale", g:4, z:"bxl", lat:50.8420026, lng:4.3623406,
    d:"ingresso ore 15:00", q:"Palais Royal de Bruxelles, Rue Brederode 16, 1000 Bruxelles" },
  { n:"Cattedrale di San Michele", g:4, z:"bxl", lat:50.8479083, lng:4.3601497,
    d:"al ritorno", q:"Cathédrale Saints-Michel-et-Gudule, 1000 Bruxelles" },

  /* mercoledì */
  { n:"MIM · Museo degli strumenti", g:5, z:"bxl", lat:50.8428875, lng:4.3590038,
    d:"mattina", q:"Musical Instruments Museum, Rue Montagne de la Cour 2, 1000 Bruxelles" },
  { n:"Café Capitale", g:5, z:"bxl", lat:50.8465315, lng:4.3498725,
    d:"colazione e pranzo", q:"Café Capitale, Rue du Midi 45, 1000 Bruxelles" },

  /* friterie, sempre utili */
  { n:"Fritkot Chouke", g:0, z:"bxl", lat:50.8502336, lng:4.3472278,
    d:"patatine", q:"Fritkot Chouke, Rue du Vieux Marché aux Grains 2, 1000 Bruxelles" },
  { n:"Fritland", g:0, z:"bxl", lat:50.8474174, lng:4.3506551,
    d:"patatine", q:"Fritland, Rue Henri Maus 49, 1000 Bruxelles" },
  { n:"La maison des gaufres", g:0, z:"bxl", lat:50.8463385, lng:4.3544158,
    d:"gaufre", q:"La maison des gaufres, Rue du Marché aux Herbes 109, 1000 Bruxelles" }
];
