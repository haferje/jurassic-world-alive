
var Collection = [
	{ name: "Allosaurus", 				level: 7,	team: false },
	{ name: "Amargasaurus", 			level: 9,	team: true },
	{ name: "Ankylocodon",		 		level: 9,	team: false },
	{ name: "Ankylosaurus Gen 2", 		level: 6,	team: false },
	{ name: "Apatosaurus", 				level: 5,	team: false },
	{ name: "Baryonyx", 				level: 11,	team: false },
	{ name: "Carnotaurus",				level: 6,	team: false },
	{ name: "Charlie",					level: 7,	team: false },
	{ name: "Deinocheirus",				level: 4,	team: false },
	{ name: "Delta",					level: 6,	team: false },
	{ name: "Dilophosaurus Gen 2", 		level: 5,	team: false },
	{ name: "Dimetrodon",		 		level: 6,	team: false },
	{ name: "Dimetrodon Gen 2", 		level: 7,	team: false },
	{ name: "Dimorphodon", 				level: 1,	team: false },
	{ name: "Diplocaulus",		 		level: 5,	team: false },
	{ name: "Diplocaulus Gen 2", 		level: 8,	team: false },
	{ name: "Dracorex",					level: 6,	team: false },
	{ name: "Dracorex Gen 2",			level: 7,	team: false },
	{ name: "Edmontosaurus", 			level: 8,	team: true },
	{ name: "Einiosaurus", 				level: 5,	team: false },
	{ name: "Euoplocephalus", 			level: 5,	team: true },
	{ name: "Gallimimus", 				level: 2,	team: false },
	{ name: "Giraffatitan",				level: 6,	team: false },
	{ name: "Gorgosaurus", 				level: 6,	team: false },
	{ name: "Hatzegopteryx",			level: 7,	team: false },
	{ name: "Iguanodon", 				level: 5,	team: false },
	{ name: "Irritator Gen 2", 			level: 5,	team: false },
	{ name: "Kaprosuchus", 				level: 8,	team: false },
	{ name: "Koolasuchus", 				level: 11,	team: false },
	{ name: "Koolasuchus Gen 2", 		level: 8,	team: false },
	{ name: "Lythronax", 				level: 9,	team: true },
	{ name: "Majungasaurus", 			level: 7,	team: false },
	{ name: "Megalosaurus", 			level: 8,	team: false },
	{ name: "Miragaia", 				level: 1,	team: false },
	{ name: "Monolophosaurus Gen 2", 	level: 6,	team: false },
	{ name: "Nodosaurus", 				level: 9,	team: false },
	{ name: "Nundasuchus", 				level: 2,	team: false },
	{ name: "Ophiacodon", 				level: 6,	team: true },
	{ name: "Ornithomimus",				level: 6,	team: false },
	{ name: "Parasaurolophus", 			level: 7,	team: false },
	{ name: "Postosuchus", 				level: 6,	team: false },
	{ name: "Proceratosaurus", 			level: 7,	team: false },
	{ name: "Purussaurus Gen 2",		level: 8,	team: true },
	{ name: "Sarcosuchus",		 		level: 4,	team: false },
	{ name: "Secodontosaurus",			level: 11,	team: false },
	{ name: "Sinoceratops",				level: 12,	team: false },
	{ name: "Spinosaurus", 				level: 7,	team: false },
	{ name: "Stegosaurus", 				level: 8,	team: true },
	{ name: "Suchomimus", 				level: 5,	team: false },
	{ name: "Suchotator", 				level: 6,	team: false },
	{ name: "Tanycolagreus", 			level: 5,	team: false },
	{ name: "Tarbosaurus", 				level: 5,	team: false },
	{ name: "Tenontosaurus",			level: 6,	team: false },
	{ name: "Triceratops", 				level: 7,	team: true },
	{ name: "Triceratops Gen 2", 		level: 4,	team: false },
	{ name: "Tuojiangosaurus", 			level: 8,	team: false },
	{ name: "Tupandactylus", 			level: 8,	team: false },
	{ name: "Tyrannosaurus Rex", 		level: 11,	team: false },
	{ name: "Tyrannosaurus Rex Gen 2", 	level: 8,	team: false },
	{ name: "Utahraptor", 				level: 8,	team: false },
	{ name: "Velociraptor", 			level: 8,	team: false },
	{ name: "Wuerhosaurus", 			level: 8,	team: false },
];



// A Tank:					Triceratops, Einosaurus, Euoplocephalus etc (Good at taking damage and Stun)
// Anti Tank:				Gorgosaurus, Dimetrodon, Tanycolagreus etc (Anything that bites away at armor)
// Glass Cannon:			Velociraptor, Suchomimus, Nundasuchas etc (A lot of damage and fast, but very little HP)
// Lucky/Annoying:			Parasaurolophus, Edmontosaurus, Koolasuchus etc (Relying on stun% chances and being fast)
// Speed Controllers:		Stegosaurus, Apatosaurus etc (Have moves that can slow down enemies, good for Lucky dinos and Glass Canon)
// General all Rounders:	Deinocheirus, Purrusaurus etc (Just good all round to have, can’t go wrong with having them)

// dodge
// evasive Strike
// Nullifying Strike
// Impact
// crits

// Don’t miss the special event incubators

// Quick-Use Abilities
// These moves are usable every turn with no cooldown times or delayed usage. Usually, they are lesser moves and rely entirely on the creature's damage stat.
// Charged-Use Abilities
// These moves are not necessarily usable every turn as there are usually cooldown times or delayed usage per action, in which case the creature using the move may have to wait a given number of turns to charge up the ability again. Usually, these are harder-hitting moves or have additional effects that will negatively affect the opponent or positively affect the creature using the move.
// Passive Abilities
// These abilities are not manually usable at all and instead act automatically in battle whenever required. While it may seem like some of these passive abilities unfairly take the place of an actual usable ability, these abilities may actually be more helpful than usable moves in many scenarios.
// Swap-in Abilities
// Some creatures now have access to Swap-In Abilities (or SIA for short). When you perform a SIA, you get the benefit of having swapped out your previous creature, having swapped in your new creature and performing an ability, all in a single action!



// HOW TO: run webscraper-metahub-dex.json in Chrome WebScraper extension and paste output here
var Dinos = `
1544723375-420	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare		Diplocaulus Gen 2	3900	0%	1130	125	5%
1544723323-319	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Evasive Stance		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique		Indoraptor	3900	0%	1400	128	20%
1544723373-416	https://metahub.info/jwa-dinodex/	Diplodocus	https://metahub.info/jwa-dinosaur/diplodocus/		Decelerating Rampage			Epic	To be determined	Diplodocus	5850	0%	1150	103	5%
1544723281-238	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Impact		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	900	106	5%
1544723225-129	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/				https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	3150	0%	1330	126	5%
1544723438-533	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Impact		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Survivor	Amargocephalus	4500	40%	950	104	5%
1544723304-287	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique		Magnapyritor	3000	0%	1400	128	20%
1544723252-181	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare		Purrusaurus	4200	10%	1000	112	5%
1544723183-42	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	1070	126	5%
1544723359-387	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/		Strike and Run		https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare		Edmontosaurus	5250	0%	1100	107	5%
1544723219-114	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary		Stegodeus	5400	30%	1020	107	5%
1544723432-520	https://metahub.info/jwa-dinodex/	Ankylosaurus Gen 2	https://metahub.info/jwa-dinosaur/ankylosaurus-gen-2/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus-Gen-2.png	Common		Ankylosaurus Gen 2	4410	25%	900	112	5%
1544723367-403	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/		Instant Charge		https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1280	124	5%
1544723206-91	https://metahub.info/jwa-dinodex/	Tanycolagreus	https://metahub.info/jwa-dinosaur/tanycolagreus/				https://metahub.info/wp-content/uploads/2018/05/Tanycolagreus.png	Common	Alpha	Tanycolagreus	3210	0%	1500	130	5%
1544723308-296	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/				https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare		Koolasuchus Gen 2	4500	0%	1500	124	5%
1544723446-552	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/			Swap In Invincibility	https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Omega	Alanqa	4200	0%	1000	120	5%
1544723340-350	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/		Bellow		https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	1150	107	20%
1544723352-376	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Strike and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique		Erlidominus	3000	0%	1500	129	20%
1544723392-452	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/				https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1200	126	5%
1544723200-79	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare		Tenontosaurus	4800	0%	1160	109	5%
1544723401-463	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare		Dilophosaurus	3750	0%	1200	124	5%
1544723397-457	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/				https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique		Diloracheirus	3450	0%	1450	129	5%
1544723267-209	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1130	126	5%
1544723342-358	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	900	109	5%
1544723308-295	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare		Koolasuchus Gen 2	4500	0%	1500	124	5%
1544723254-187	https://metahub.info/jwa-dinodex/	Purrolyth	https://metahub.info/jwa-dinosaur/purrolyth/			Armor Piercing Counter		Rare	To be determined	Purrolyth	3000	10%	1140	105	5%
1544723269-215	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1544723334-339	https://metahub.info/jwa-dinodex/	Grypolyth	https://metahub.info/jwa-dinosaur/grypolyth/		Long Protection			Unique	To be determined	Grypolyth	4020	20%	1000	106	5%
1544723262-204	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Regeneration		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1544723342-354	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	900	109	5%
1544723317-305	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1544723430-515	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1544723369-406	https://metahub.info/jwa-dinodex/	Dracoceratops	https://metahub.info/jwa-dinosaur/dracoceratops/		Cleansing Impact			Legendary	To be determined	Dracoceratops	4500	0%	1000	119	5%
1544723246-170	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary		Pyrritator	3000	0%	1350	129	5%
1544723308-293	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare		Koolasuchus Gen 2	4500	0%	1500	124	5%
1544723273-223	https://metahub.info/jwa-dinodex/	Ophiacodon	https://metahub.info/jwa-dinosaur/ophiacodon/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Ophiacodon.png	Common	Hatchling	Ophiacodon	4050	0%	1000	107	40%
1544723367-402	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1280	124	5%
1544723373-419	https://metahub.info/jwa-dinodex/	Diplodocus	https://metahub.info/jwa-dinosaur/diplodocus/			Swap In Slow		Epic	To be determined	Diplodocus	5850	0%	1150	103	5%
1544723196-68	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Long Invicibility		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary		Tragodistis	3990	40%	1000	124	5%
1544723256-188	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	127	5%
1544723185-46	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare		Tuojiangosaurus	4500	0%	1130	112	5%
1544723317-307	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/		Ferocity Impact		https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1544723436-530	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Short Defense		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare		Ankylocodon	3900	25%	800	107	20%
1544723346-362	https://metahub.info/jwa-dinodex/	Euoplocephalus	https://metahub.info/jwa-dinosaur/euoplocephalus/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Euoplocephalus.png	Common	Hatchling	Euoplocephalus	4500	40%	900	112	5%
1544723365-399	https://metahub.info/jwa-dinodex/	Dracorex Gen 2	https://metahub.info/jwa-dinosaur/dracorex-gen-2/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/Dracorex2.png	Common		Dracorex Gen 2	3000	0%	1140	108	5%
1544723365-400	https://metahub.info/jwa-dinodex/	Dracorex Gen 2	https://metahub.info/jwa-dinosaur/dracorex-gen-2/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/Dracorex2.png	Common		Dracorex Gen 2	3000	0%	1140	108	5%
1544723417-492	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/		Pounce		https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1544723344-359	https://metahub.info/jwa-dinodex/	Gallimimus	https://metahub.info/jwa-dinosaur/gallimimus/		Evasive Strike		https://metahub.info/wp-content/uploads/2018/07/Gallimimus.png	Common		Gallimimus	1800	0%	1280	130	5%
1544723357-383	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3870	20%	1300	117	5%
1544723188-50	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary		Tryostronix	3900	0%	1150	124	20%
1544723196-70	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary		Tragodistis	3990	40%	1000	124	5%
1544723171-13	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Tyrant	Utarinex	4200	0%	1420	126	5%
1544723407-472	https://metahub.info/jwa-dinodex/	Darwinopterus	https://metahub.info/jwa-dinosaur/darwinopterus/		Cleansing Impact			Epic	To be determined	Darwinopterus	3150	0%	1050	129	5%
1544723181-35	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare		Tupandactylus	3000	0%	820	126	5%
1544723375-423	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare		Diplocaulus Gen 2	3900	0%	1130	125	5%
1544723163-6	https://metahub.info/jwa-dinodex/	Velociraptor	https://metahub.info/jwa-dinosaur/velociraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Velociraptor.png	Common		Velociraptor	1950	0%	1320	132	5%
1544723210-97	https://metahub.info/jwa-dinodex/	Suchomimus	https://metahub.info/jwa-dinosaur/suchomimus/		Gashing Wound		https://metahub.info/wp-content/uploads/2018/05/Suchomimus.png	Common		Suchomimus	3630	0%	700	115	5%
1544723310-297	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1544723179-34	https://metahub.info/jwa-dinodex/	Tyrannolophosaur	https://metahub.info/jwa-dinosaur/tyrannolophosaur/					Legendary	To be determined	Tyrannolophosaur	4200	0%	1600	108	20%
1544723390-447	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	3990	0%	1000	113	5%
1544723399-460	https://metahub.info/jwa-dinodex/	Dilophosaurus Gen 2	https://metahub.info/jwa-dinosaur/dilophosaurus-gen-2/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus-Gen-2.png	Common	Hatchling	Dilophosaurus Gen 2	2700	0%	1100	121	5%
1544723306-292	https://metahub.info/jwa-dinodex/	Lythronax	https://metahub.info/jwa-dinosaur/lythronax/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Lythronax.png	Common	Hatchling	Lythronax	3900	0%	1000	104	5%
1544723392-449	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1200	126	5%
1544723390-444	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	3990	0%	1000	113	5%
1544723448-554	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Rampage		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	APEX	Alankylosaurus	4200	30%	900	114	5%
1544723319-309	https://metahub.info/jwa-dinodex/	Irritator Gen 2	https://metahub.info/jwa-dinosaur/irritator-gen-2/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_GEN2_result.jpg	Common		Irritator Gen 2	3750	0%	1000	122	20%
1544723308-294	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare		Koolasuchus Gen 2	4500	0%	1500	124	5%
1544723417-494	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/		Strike		https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1544723348-365	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/		Debilitating Distraction		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1544723254-184	https://metahub.info/jwa-dinodex/	Purrolyth	https://metahub.info/jwa-dinosaur/purrolyth/		Ferocious Strike			Rare	To be determined	Purrolyth	3000	10%	1140	105	5%
1544723237-149	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1544723260-197	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/		Adrenaline Pulse		https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1544723442-545	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/				https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	APEX	Allosinosaurus	4500	15%	1600	106	20%
1544723413-485	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1544723289-258	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/				https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic		Monolophosaurus	3000	0%	1240	127	5%
1544723241-158	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Extended Critical Strike		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary		Rajakylosaurus	4350	30%	900	104	5%
1544723175-22	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4350	0%	1700	104	20%
1544723204-88	https://metahub.info/jwa-dinodex/	Tarbosaurus	https://metahub.info/jwa-dinosaur/tarbosaurus/				https://metahub.info/wp-content/uploads/2018/05/Tarbosaurus.png	Common	Hatchling	Tarbosaurus	4650	0%	1600	104	40%
1544723300-277	https://metahub.info/jwa-dinodex/	Majungasaurus	https://metahub.info/jwa-dinosaur/majungasaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Majungasaurus.png	Common	Hatchling	Majungasaurus	3660	0%	1000	105	5%
1544723342-355	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Lockdown Strike		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	900	109	5%
1544723181-36	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare		Tupandactylus	3000	0%	820	126	5%
1544723446-550	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/		Rampage		https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Omega	Alanqa	4200	0%	1000	120	5%
1544723438-535	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Survivor	Amargocephalus	4500	40%	950	104	5%
1544723430-517	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1544723426-508	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	900	112	5%
1544723340-353	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/			Swap In Slow	https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	1150	107	20%
1544723252-179	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/		Ferocity Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare		Purrusaurus	4200	10%	1000	112	5%
1544723369-407	https://metahub.info/jwa-dinodex/	Dracoceratops	https://metahub.info/jwa-dinosaur/dracoceratops/		Greater Stunning Strike			Legendary	To be determined	Dracoceratops	4500	0%	1000	119	5%
1544723258-193	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare		Proceratosaurus	3000	0%	1360	125	5%
1544723423-506	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5400	0%	1150	102	20%
1544723212-100	https://metahub.info/jwa-dinodex/	Stygimoloch Gen 2	https://metahub.info/jwa-dinosaur/stygimoloch-gen-2/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch_GEN2.jpg	Common		Stygimoloch Gen 2	3000	0%	1300	128	5%
1544723367-404	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/		Minor Stunning Strike		https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1280	124	5%
1544723348-368	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/				https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1544723291-262	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary		Monolometrodon	3750	0%	1000	126	5%
1544723409-479	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/			Defense Shattering Counter	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic		Concavenator	3750	0%	1050	106	5%
1544723338-348	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare		Gorgosaurus	4200	0%	1600	102	20%
1544723271-218	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1400	131	5%
1544723409-476	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic		Concavenator	3750	0%	1050	106	5%
1544723444-547	https://metahub.info/jwa-dinodex/	Allosaurus	https://metahub.info/jwa-dinosaur/allosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Allosaurus.png	Common	Survivor	Allosaurus	5010	0%	1650	104	20%
1544723357-382	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3870	20%	1300	117	5%
1544723415-490	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	30%
1544723344-361	https://metahub.info/jwa-dinodex/	Gallimimus	https://metahub.info/jwa-dinosaur/gallimimus/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Gallimimus.png	Common		Gallimimus	1800	0%	1280	130	5%
1544723434-525	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic		Ankylosaurus	4800	30%	900	116	5%
1544723165-8	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1590	127	5%
1544723256-189	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	127	5%
1544723448-557	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/			Swap In Invincibility	https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	APEX	Alankylosaurus	4200	30%	900	114	5%
1544723265-208	https://metahub.info/jwa-dinodex/	Parasaurolophus	https://metahub.info/jwa-dinosaur/parasaurolophus/				https://metahub.info/wp-content/uploads/2018/05/Parasaurolophus.png	Common	Hatchling	Parasaurolophus	5100	0%	1200	113	5%
1544723426-510	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	900	112	5%
1544723323-318	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique		Indoraptor	3900	0%	1400	128	20%
1544723319-311	https://metahub.info/jwa-dinodex/	Irritator Gen 2	https://metahub.info/jwa-dinosaur/irritator-gen-2/			Swap-In Shattering Strike	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_GEN2_result.jpg	Common		Irritator Gen 2	3750	0%	1000	122	20%
1544723304-285	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique		Magnapyritor	3000	0%	1400	128	20%
1544723336-341	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1544723283-246	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/				https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4440	30%	1300	117	20%
1544723183-43	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	1070	126	5%
1544723369-410	https://metahub.info/jwa-dinodex/	Dracoceratops	https://metahub.info/jwa-dinosaur/dracoceratops/			Swap In Stun		Legendary	To be determined	Dracoceratops	4500	0%	1000	119	5%
1544723403-467	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1260	131	5%
1544723190-59	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique		Trykosaurus	4500	30%	1600	108	30%
1544723196-67	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary		Tragodistis	3990	40%	1000	124	5%
1544723185-48	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare		Tuojiangosaurus	4500	0%	1130	112	5%
1544723237-151	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1544723296-268	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4260	0%	1000	115	5%
1544723411-482	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1420	129	5%
1544723371-415	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/				https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	3000	0%	1300	127	5%
1544723361-390	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare		Echo	2700	0%	1300	128	5%
1544723229-134	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/		Exploit Wound		https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1544723239-154	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/		Extended Critical Strike		https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	1050	104	20%
1544723279-233	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5100	40%	1000	108	5%
1544723448-553	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Long Invicibility		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	APEX	Alankylosaurus	4200	30%	900	114	5%
1544723221-118	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1544723262-201	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1544723407-474	https://metahub.info/jwa-dinodex/	Darwinopterus	https://metahub.info/jwa-dinosaur/darwinopterus/		Swoop			Epic	To be determined	Darwinopterus	3150	0%	1050	129	5%
1544723323-317	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique		Indoraptor	3900	0%	1400	128	20%
1544723225-126	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	3150	0%	1330	126	5%
1544723334-340	https://metahub.info/jwa-dinodex/	Grypolyth	https://metahub.info/jwa-dinosaur/grypolyth/			Defense Shattering Counter		Unique	To be determined	Grypolyth	4020	20%	1000	106	5%
1544723419-496	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3510	0%	1000	123	20%
1544723350-369	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1544723401-462	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare		Dilophosaurus	3750	0%	1200	124	5%
1544723262-205	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1544723357-384	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3870	20%	1300	117	5%
1544723215-105	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/		Shielding Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3000	0%	1400	129	5%
1544723248-173	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/		Pounce		https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1544723423-504	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5400	0%	1150	102	20%
1544723223-122	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary		Spinotasuchus	3750	0%	1270	129	20%
1544723298-275	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	4200	0%	880	105	5%
1544723401-464	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/				https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare		Dilophosaurus	3750	0%	1200	124	5%
1544723405-470	https://metahub.info/jwa-dinodex/	Deinocheirus	https://metahub.info/jwa-dinosaur/deinocheirus/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Deinocheirus.png	Common	Hatchling	Deinocheirus	3000	0%	1300	131	5%
1544723361-392	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/		Strike		https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare		Echo	2700	0%	1300	128	5%
1544723248-174	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1544723298-273	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	4200	0%	880	105	5%
1544723428-514	https://metahub.info/jwa-dinodex/	Apatosaurus	https://metahub.info/jwa-dinosaur/apatosaurus/				https://metahub.info/wp-content/uploads/2018/05/Apatosaurus.png	Common	Hatchling	Apatosaurus	6000	0%	1000	101	5%
1544723421-502	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1544723171-15	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Instant Charge		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Tyrant	Utarinex	4200	0%	1420	126	5%
1544723165-11	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1590	127	5%
1544723198-73	https://metahub.info/jwa-dinodex/	Thoradolosaur	https://metahub.info/jwa-dinosaur/thoradolosaur/		Defense Shattering Rampage			Unique	To be determined	Thoradolosaur	4200	0%	1640	109	40%
1544723217-108	https://metahub.info/jwa-dinodex/	Stegosaurus	https://metahub.info/jwa-dinosaur/stegosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Stegosaurus.png	Common	Hatchling	Stegosaurus	4500	20%	1200	117	5%
1544723397-453	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique		Diloracheirus	3450	0%	1450	129	5%
1544723269-216	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1544723399-458	https://metahub.info/jwa-dinodex/	Dilophosaurus Gen 2	https://metahub.info/jwa-dinosaur/dilophosaurus-gen-2/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus-Gen-2.png	Common	Hatchling	Dilophosaurus Gen 2	2700	0%	1100	121	5%
1544723210-99	https://metahub.info/jwa-dinodex/	Suchomimus	https://metahub.info/jwa-dinosaur/suchomimus/			Swap In Wound	https://metahub.info/wp-content/uploads/2018/05/Suchomimus.png	Common		Suchomimus	3630	0%	700	115	5%
1544723233-142	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic		Secodontosaurus	3300	0%	1340	114	5%
1544723357-385	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/				https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3870	20%	1300	117	5%
1544723413-487	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/			Defense Shattering Counter	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1544723163-5	https://metahub.info/jwa-dinodex/	Velociraptor	https://metahub.info/jwa-dinosaur/velociraptor/		Pounce		https://metahub.info/wp-content/uploads/2018/05/Velociraptor.png	Common		Velociraptor	1950	0%	1320	132	5%
1544723181-39	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare		Tupandactylus	3000	0%	820	126	5%
1544723190-57	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Instant Distraction		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique		Trykosaurus	4500	30%	1600	108	30%
1544723181-37	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare		Tupandactylus	3000	0%	820	126	5%
1544723217-109	https://metahub.info/jwa-dinodex/	Stegosaurus	https://metahub.info/jwa-dinosaur/stegosaurus/				https://metahub.info/wp-content/uploads/2018/05/Stegosaurus.png	Common	Hatchling	Stegosaurus	4500	20%	1200	117	5%
1544723233-145	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic		Secodontosaurus	3300	0%	1340	114	5%
1544723173-19	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/		Pounce		https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1544723183-41	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	1070	126	5%
1544723275-227	https://metahub.info/jwa-dinodex/	Nundasuchus	https://metahub.info/jwa-dinosaur/nundasuchus/				https://metahub.info/wp-content/uploads/2018/05/Nundasuchus.png	Common		Nundasuchus	3000	0%	1490	128	5%
1544723179-33	https://metahub.info/jwa-dinodex/	Tyrannolophosaur	https://metahub.info/jwa-dinosaur/tyrannolophosaur/		Nullifying Strike			Legendary	To be determined	Tyrannolophosaur	4200	0%	1600	108	20%
1544723283-244	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4440	30%	1300	117	20%
1544723442-542	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	APEX	Allosinosaurus	4500	15%	1600	106	20%
1544723338-349	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/				https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare		Gorgosaurus	4200	0%	1600	102	20%
1544723354-380	https://metahub.info/jwa-dinodex/	Einiosaurus	https://metahub.info/jwa-dinosaur/einiosaurus-2/				https://metahub.info/wp-content/uploads/2018/05/Eniosaurus.png	Common	Hatchling	Einiosaurus	4500	15%	1400	114	5%
1544723244-164	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/		Long Protection		https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	4200	0%	1000	117	5%
1544723262-203	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1544723328-326	https://metahub.info/jwa-dinodex/	Iguanodon	https://metahub.info/jwa-dinosaur/iguanodon/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Iguanodon.png	Common	Hatchling	Iguanodon	4800	0%	1200	112	5%
1544723434-524	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic		Ankylosaurus	4800	30%	900	116	5%
1544723357-381	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Adrenaline Pulse		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3870	20%	1300	117	5%
1544723448-556	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	APEX	Alankylosaurus	4200	30%	900	114	5%
1544723350-372	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/				https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1544723448-555	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	APEX	Alankylosaurus	4200	30%	900	114	5%
1544723177-26	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4350	0%	1800	102	30%
1544723173-18	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1544723436-529	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare		Ankylocodon	3900	25%	800	107	20%
1544723177-29	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/				https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4350	0%	1800	102	30%
1544723215-104	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/		Instant Charge		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3000	0%	1400	129	5%
1544723363-394	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare		Dsungaripterus	3300	0%	850	125	5%
1544723302-280	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1544723202-81	https://metahub.info/jwa-dinodex/	Tenontorex	https://metahub.info/jwa-dinosaur/tenontorex/		Defense Shattering Impact			Unique	To be determined	Tenontorex	4500	0%	1640	109	20%
1544723181-38	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/			Armor Piercing Counter	https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare		Tupandactylus	3000	0%	820	126	5%
1544723350-371	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/		Strike and Run		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1544723434-523	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic		Ankylosaurus	4800	30%	900	116	5%
1544723344-360	https://metahub.info/jwa-dinodex/	Gallimimus	https://metahub.info/jwa-dinosaur/gallimimus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Gallimimus.png	Common		Gallimimus	1800	0%	1280	130	5%
1544723260-198	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1544723304-288	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique		Magnapyritor	3000	0%	1400	128	20%
1544723204-87	https://metahub.info/jwa-dinodex/	Tarbosaurus	https://metahub.info/jwa-dinosaur/tarbosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Tarbosaurus.png	Common	Hatchling	Tarbosaurus	4650	0%	1600	104	40%
1544723383-438	https://metahub.info/jwa-dinodex/	Dimodactylus	https://metahub.info/jwa-dinosaur/dimodactylus/		Pinning Strike			Epic	To be determined	Dimodactylus	3000	0%	820	126	5%
1544723436-528	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare		Ankylocodon	3900	25%	800	107	20%
1544723241-161	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary		Rajakylosaurus	4350	30%	900	104	5%
1544723241-162	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/			Armor Piercing Counter	https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary		Rajakylosaurus	4350	30%	900	104	5%
1544723315-304	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1400	120	5%
1544723285-251	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary		Monomimus	2700	0%	1300	129	5%
1544723432-522	https://metahub.info/jwa-dinodex/	Ankylosaurus Gen 2	https://metahub.info/jwa-dinosaur/ankylosaurus-gen-2/				https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus-Gen-2.png	Common		Ankylosaurus Gen 2	4410	25%	900	112	5%
1544723233-144	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic		Secodontosaurus	3300	0%	1340	114	5%
1544723262-202	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1544723223-120	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Critical Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary		Spinotasuchus	3750	0%	1270	129	20%
1544723277-231	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/				https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare		Nodosaurus	4350	25%	1000	115	5%
1544723289-255	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic		Monolophosaurus	3000	0%	1240	127	5%
1544723302-281	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1544723332-334	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic		Gryposuchus	3900	20%	1000	116	20%
1544723381-435	https://metahub.info/jwa-dinodex/	Dimorphodon	https://metahub.info/jwa-dinosaur/dimorphodon/			Swap In Wound		Common	To be determined	Dimorphodon	3000	0%	700	128	5%
1544723444-548	https://metahub.info/jwa-dinodex/	Allosaurus	https://metahub.info/jwa-dinosaur/allosaurus/				https://metahub.info/wp-content/uploads/2018/05/Allosaurus.png	Common	Survivor	Allosaurus	5010	0%	1650	104	20%
1544723235-147	https://metahub.info/jwa-dinodex/	Sarcosuchus	https://metahub.info/jwa-dinosaur/sarcosuchus-2/		Minimal Wounding Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Sarcosuchus_result.jpg	Common	Hatchling	Sarcosuchus	4200	10%	1000	110	5%
1544723248-175	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/				https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1544723239-157	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	1050	104	20%
1544723291-260	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary		Monolometrodon	3750	0%	1000	126	5%
1544723223-121	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Lethal Wound		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary		Spinotasuchus	3750	0%	1270	129	20%
1544723285-248	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Evasive Stance		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary		Monomimus	2700	0%	1300	129	5%
1544723229-135	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/		Gashing Wound		https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1544723315-301	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1400	120	5%
1544723385-443	https://metahub.info/jwa-dinodex/	Dimetrodon Gen 2	https://metahub.info/jwa-dinosaur/dimetrodon-gen-2/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Dimetrodon-Gen-2.png	Common		Dimetrodon Gen 2	3990	0%	1000	112	5%
1544723375-421	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare		Diplocaulus Gen 2	3900	0%	1130	125	5%
1544723237-153	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/			Swap In Defense	https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1544723165-9	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1590	127	5%
1544723221-119	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/				https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1544723440-538	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Survivor	Amargasaurus	5400	0%	1100	103	5%
1544723277-228	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare		Nodosaurus	4350	25%	1000	115	5%
1544723413-484	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1544723190-58	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique		Trykosaurus	4500	30%	1600	108	30%
1544723208-96	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4620	0%	1000	116	20%
1544723279-235	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5100	40%	1000	108	5%
1544723325-324	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Cloak		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary		Indominus Rex	4200	0%	1270	107	20%
1544723379-430	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	3900	30%	900	108	5%
1544723446-549	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/		Long Invicibility		https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Omega	Alanqa	4200	0%	1000	120	5%
1544723210-98	https://metahub.info/jwa-dinodex/	Suchomimus	https://metahub.info/jwa-dinosaur/suchomimus/		Strike		https://metahub.info/wp-content/uploads/2018/05/Suchomimus.png	Common		Suchomimus	3630	0%	700	115	5%
1544723231-141	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/				https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	4050	25%	1350	116	5%
1544723317-306	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1544723291-259	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary		Monolometrodon	3750	0%	1000	126	5%
1544723208-93	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Lethal Wound		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4620	0%	1000	116	20%
1544723417-495	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/				https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1544723442-541	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	APEX	Allosinosaurus	4500	15%	1600	106	20%
1544723273-224	https://metahub.info/jwa-dinodex/	Ophiacodon	https://metahub.info/jwa-dinosaur/ophiacodon/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Ophiacodon.png	Common	Hatchling	Ophiacodon	4050	0%	1000	107	40%
1544723227-133	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1544723409-478	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic		Concavenator	3750	0%	1050	106	5%
1544723444-546	https://metahub.info/jwa-dinodex/	Allosaurus	https://metahub.info/jwa-dinosaur/allosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Allosaurus.png	Common	Survivor	Allosaurus	5010	0%	1650	104	20%
1544723363-395	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare		Dsungaripterus	3300	0%	850	125	5%
1544723338-347	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare		Gorgosaurus	4200	0%	1600	102	20%
1544723383-440	https://metahub.info/jwa-dinodex/	Dimodactylus	https://metahub.info/jwa-dinosaur/dimodactylus/			Swap In Wound		Epic	To be determined	Dimodactylus	3000	0%	820	126	5%
1544723196-71	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary		Tragodistis	3990	40%	1000	124	5%
1544723340-351	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/		Rampage		https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	1150	107	20%
1544723442-544	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Instant Charge		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	APEX	Allosinosaurus	4500	15%	1600	106	20%
1544723165-10	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Instant Charge		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1590	127	5%
1544723248-172	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1544723354-378	https://metahub.info/jwa-dinodex/	Einiosaurus	https://metahub.info/jwa-dinosaur/einiosaurus-2/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Eniosaurus.png	Common	Hatchling	Einiosaurus	4500	15%	1400	114	5%
1544723383-439	https://metahub.info/jwa-dinodex/	Dimodactylus	https://metahub.info/jwa-dinosaur/dimodactylus/		Short Defense			Epic	To be determined	Dimodactylus	3000	0%	820	126	5%
1544723346-363	https://metahub.info/jwa-dinodex/	Euoplocephalus	https://metahub.info/jwa-dinosaur/euoplocephalus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Euoplocephalus.png	Common	Hatchling	Euoplocephalus	4500	40%	900	112	5%
1544723171-16	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Tyrant	Utarinex	4200	0%	1420	126	5%
1544723436-527	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare		Ankylocodon	3900	25%	800	107	20%
1544723328-328	https://metahub.info/jwa-dinodex/	Iguanodon	https://metahub.info/jwa-dinosaur/iguanodon/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Iguanodon.png	Common	Hatchling	Iguanodon	4800	0%	1200	112	5%
1544723221-115	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1544723165-12	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/				https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1590	127	5%
1544723336-345	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/				https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1544723371-412	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	3000	0%	1300	127	5%
1544723415-491	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/				https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	30%
1544723192-60	https://metahub.info/jwa-dinodex/	Triceratops Gen 2	https://metahub.info/jwa-dinosaur/triceratops-gen2/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Triceratops-Gen-2.png	Common	Hatchling	Triceratops Gen 2	4050	10%	1260	112	5%
1544723233-143	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic		Secodontosaurus	3300	0%	1340	114	5%
1544723385-441	https://metahub.info/jwa-dinodex/	Dimetrodon Gen 2	https://metahub.info/jwa-dinosaur/dimetrodon-gen-2/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon-Gen-2.png	Common		Dimetrodon Gen 2	3990	0%	1000	112	5%
1544723194-65	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/		Minor Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare		Triceratops	4770	20%	1200	115	5%
1544723423-505	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/		Extended Critical Strike		https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5400	0%	1150	102	20%
1544723267-210	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Instant Charge		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1130	126	5%
1544723430-519	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1544723409-477	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic		Concavenator	3750	0%	1050	106	5%
1544723325-325	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary		Indominus Rex	4200	0%	1270	107	20%
1544723231-138	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	4050	25%	1350	116	5%
1544723405-469	https://metahub.info/jwa-dinodex/	Deinocheirus	https://metahub.info/jwa-dinosaur/deinocheirus/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/05/Deinocheirus.png	Common	Hatchling	Deinocheirus	3000	0%	1300	131	5%
1544723281-237	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	900	106	5%
1544723354-379	https://metahub.info/jwa-dinodex/	Einiosaurus	https://metahub.info/jwa-dinosaur/einiosaurus-2/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Eniosaurus.png	Common	Hatchling	Einiosaurus	4500	15%	1400	114	5%
1544723302-282	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1544723246-168	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary		Pyrritator	3000	0%	1350	129	5%
1544723281-240	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	900	106	5%
1544723421-500	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1544723379-431	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/			Defense Shattering Counter	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	3900	30%	900	108	5%
1544723348-366	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1544723399-459	https://metahub.info/jwa-dinodex/	Dilophosaurus Gen 2	https://metahub.info/jwa-dinosaur/dilophosaurus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus-Gen-2.png	Common	Hatchling	Dilophosaurus Gen 2	2700	0%	1100	121	5%
1544723198-76	https://metahub.info/jwa-dinodex/	Thoradolosaur	https://metahub.info/jwa-dinosaur/thoradolosaur/					Unique	To be determined	Thoradolosaur	4200	0%	1640	109	40%
1544723215-106	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3000	0%	1400	129	5%
1544723250-176	https://metahub.info/jwa-dinodex/	Purrusaurus Gen 2	https://metahub.info/jwa-dinosaur/purrusaurus-gen2/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_GEN2_result.jpg	Common	Hatchling	Purrusaurus Gen 2	4500	10%	1000	111	20%
1544723183-44	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	1070	126	5%
1544723217-107	https://metahub.info/jwa-dinodex/	Stegosaurus	https://metahub.info/jwa-dinosaur/stegosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Stegosaurus.png	Common	Hatchling	Stegosaurus	4500	20%	1200	117	5%
1544723381-434	https://metahub.info/jwa-dinodex/	Dimorphodon	https://metahub.info/jwa-dinosaur/dimorphodon/		Pinning Strike			Common	To be determined	Dimorphodon	3000	0%	700	128	5%
1544723256-190	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	127	5%
1544723283-245	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4440	30%	1300	117	20%
1544723304-286	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique		Magnapyritor	3000	0%	1400	128	20%
1544723208-92	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4620	0%	1000	116	20%
1544723323-316	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique		Indoraptor	3900	0%	1400	128	20%
1544723325-321	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary		Indominus Rex	4200	0%	1270	107	20%
1544723208-94	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4620	0%	1000	116	20%
1544723244-163	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	4200	0%	1000	117	5%
1544723239-155	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	1050	104	20%
1544723310-299	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1544723258-194	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare		Proceratosaurus	3000	0%	1360	125	5%
1544723212-101	https://metahub.info/jwa-dinodex/	Stygimoloch Gen 2	https://metahub.info/jwa-dinosaur/stygimoloch-gen-2/		Shielding Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch_GEN2.jpg	Common		Stygimoloch Gen 2	3000	0%	1300	128	5%
1544723212-102	https://metahub.info/jwa-dinodex/	Stygimoloch Gen 2	https://metahub.info/jwa-dinosaur/stygimoloch-gen-2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch_GEN2.jpg	Common		Stygimoloch Gen 2	3000	0%	1300	128	5%
1544723419-497	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3510	0%	1000	123	20%
1544723315-302	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1400	120	5%
1544723323-320	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/				https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique		Indoraptor	3900	0%	1400	128	20%
1544723330-331	https://metahub.info/jwa-dinodex/	Hatzegopteryx	https://metahub.info/jwa-dinosaur/hatzegopteryx/			Swap In Defense	https://metahub.info/wp-content/uploads/2018/09/Hatzegop.png	Common	Hatchling	Hatzegopteryx	4500	0%	1140	114	5%
1544723413-486	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1544723352-374	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique		Erlidominus	3000	0%	1500	129	20%
1544723175-25	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/				https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4350	0%	1700	104	20%
1544723319-310	https://metahub.info/jwa-dinodex/	Irritator Gen 2	https://metahub.info/jwa-dinosaur/irritator-gen-2/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_GEN2_result.jpg	Common		Irritator Gen 2	3750	0%	1000	122	20%
1544723265-206	https://metahub.info/jwa-dinodex/	Parasaurolophus	https://metahub.info/jwa-dinosaur/parasaurolophus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/05/Parasaurolophus.png	Common	Hatchling	Parasaurolophus	5100	0%	1200	113	5%
1544723200-78	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare		Tenontosaurus	4800	0%	1160	109	5%
1544723225-128	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	3150	0%	1330	126	5%
1544723302-284	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1544723336-343	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1544723244-165	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	4200	0%	1000	117	5%
1544723258-196	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/				https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare		Proceratosaurus	3000	0%	1360	125	5%
1544723229-137	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/				https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1544723225-125	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	3150	0%	1330	126	5%
1544723202-83	https://metahub.info/jwa-dinodex/	Tenontorex	https://metahub.info/jwa-dinosaur/tenontorex/		Distracting Impact			Unique	To be determined	Tenontorex	4500	0%	1640	109	20%
1544723415-488	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/		Bellow		https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	30%
1544723392-450	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1200	126	5%
1544723440-540	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/				https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Survivor	Amargasaurus	5400	0%	1100	103	5%
1544723192-61	https://metahub.info/jwa-dinodex/	Triceratops Gen 2	https://metahub.info/jwa-dinosaur/triceratops-gen2/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Triceratops-Gen-2.png	Common	Hatchling	Triceratops Gen 2	4050	10%	1260	112	5%
1544723185-49	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/			Swap In Slow	https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare		Tuojiangosaurus	4500	0%	1130	112	5%
1544723177-28	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4350	0%	1800	102	30%
1544723183-40	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	1070	126	5%
1544723277-229	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare		Nodosaurus	4350	25%	1000	115	5%
1544723196-69	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary		Tragodistis	3990	40%	1000	124	5%
1544723405-471	https://metahub.info/jwa-dinodex/	Deinocheirus	https://metahub.info/jwa-dinosaur/deinocheirus/				https://metahub.info/wp-content/uploads/2018/05/Deinocheirus.png	Common	Hatchling	Deinocheirus	3000	0%	1300	131	5%
1544723221-117	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1544723300-278	https://metahub.info/jwa-dinodex/	Majungasaurus	https://metahub.info/jwa-dinosaur/majungasaurus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/05/Majungasaurus.png	Common	Hatchling	Majungasaurus	3660	0%	1000	105	5%
1544723321-313	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare		Irritator	4800	0%	1030	123	5%
1544723390-445	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	3990	0%	1000	113	5%
1544723379-428	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	3900	30%	900	108	5%
1544723352-373	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Cloak		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique		Erlidominus	3000	0%	1500	129	20%
1544723275-226	https://metahub.info/jwa-dinodex/	Nundasuchus	https://metahub.info/jwa-dinosaur/nundasuchus/		Strike		https://metahub.info/wp-content/uploads/2018/05/Nundasuchus.png	Common		Nundasuchus	3000	0%	1490	128	5%
1544723375-422	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare		Diplocaulus Gen 2	3900	0%	1130	125	5%
1544723407-473	https://metahub.info/jwa-dinodex/	Darwinopterus	https://metahub.info/jwa-dinosaur/darwinopterus/		Pinning Strike			Epic	To be determined	Darwinopterus	3150	0%	1050	129	5%
1544723198-75	https://metahub.info/jwa-dinodex/	Thoradolosaur	https://metahub.info/jwa-dinosaur/thoradolosaur/		Instant Charge			Unique	To be determined	Thoradolosaur	4200	0%	1640	109	40%
1544723325-323	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary		Indominus Rex	4200	0%	1270	107	20%
1544723304-289	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/			Immunity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique		Magnapyritor	3000	0%	1400	128	20%
1544723291-261	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary		Monolometrodon	3750	0%	1000	126	5%
1544723173-21	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/				https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1544723383-437	https://metahub.info/jwa-dinodex/	Dimodactylus	https://metahub.info/jwa-dinosaur/dimodactylus/		Lethal Wound			Epic	To be determined	Dimodactylus	3000	0%	820	126	5%
1544723177-27	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4350	0%	1800	102	30%
1544723227-130	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/		Lethal Wound		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1544723442-543	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	APEX	Allosinosaurus	4500	15%	1600	106	20%
1544723334-336	https://metahub.info/jwa-dinodex/	Grypolyth	https://metahub.info/jwa-dinosaur/grypolyth/		Defense Shattering Strike			Unique	To be determined	Grypolyth	4020	20%	1000	106	5%
1544723194-63	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare		Triceratops	4770	20%	1200	115	5%
1544723298-272	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	4200	0%	880	105	5%
1544723161-1	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare		Wuerhosaurus	4800	20%	1400	115	5%
1544723317-308	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1544723397-455	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Rampage and Run		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique		Diloracheirus	3450	0%	1450	129	5%
1544723397-454	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique		Diloracheirus	3450	0%	1450	129	5%
1544723279-234	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Long Protection		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5100	40%	1000	108	5%
1544723302-279	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1544723377-425	https://metahub.info/jwa-dinodex/	Diplocaulus	https://metahub.info/jwa-dinosaur/diplocaulus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus.png	Common	Hatchling	Diplocaulus	2700	0%	1100	124	5%
1544723302-283	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/			Armor Piercing Counter	https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1544723231-140	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	4050	25%	1350	116	5%
1544723334-337	https://metahub.info/jwa-dinodex/	Grypolyth	https://metahub.info/jwa-dinosaur/grypolyth/		Ferocious Strike			Unique	To be determined	Grypolyth	4020	20%	1000	106	5%
1544723227-131	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/		Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1544723179-32	https://metahub.info/jwa-dinodex/	Tyrannolophosaur	https://metahub.info/jwa-dinosaur/tyrannolophosaur/		Distracting Strike			Legendary	To be determined	Tyrannolophosaur	4200	0%	1600	108	20%
1544723342-357	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	900	109	5%
1544723377-426	https://metahub.info/jwa-dinodex/	Diplocaulus	https://metahub.info/jwa-dinosaur/diplocaulus/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Diplocaulus.png	Common	Hatchling	Diplocaulus	2700	0%	1100	124	5%
1544723202-84	https://metahub.info/jwa-dinodex/	Tenontorex	https://metahub.info/jwa-dinosaur/tenontorex/		Superiority Strike			Unique	To be determined	Tenontorex	4500	0%	1640	109	20%
1544723190-56	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique		Trykosaurus	4500	30%	1600	108	30%
1544723287-254	https://metahub.info/jwa-dinodex/	Monolophosaurus Gen 2	https://metahub.info/jwa-dinosaur/monolophosaurus-gen-2/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus-Gen-2.png	Common	Hatchling	Monolophosaurus Gen 2	2400	0%	1200	126	5%
1544723287-253	https://metahub.info/jwa-dinodex/	Monolophosaurus Gen 2	https://metahub.info/jwa-dinosaur/monolophosaurus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus-Gen-2.png	Common	Hatchling	Monolophosaurus Gen 2	2400	0%	1200	126	5%
1544723227-132	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1544723246-169	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary		Pyrritator	3000	0%	1350	129	5%
1544723363-396	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare		Dsungaripterus	3300	0%	850	125	5%
1544723254-185	https://metahub.info/jwa-dinodex/	Purrolyth	https://metahub.info/jwa-dinosaur/purrolyth/		Lockdown Strike			Rare	To be determined	Purrolyth	3000	10%	1140	105	5%
1544723219-112	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary		Stegodeus	5400	30%	1020	107	5%
1544723306-290	https://metahub.info/jwa-dinodex/	Lythronax	https://metahub.info/jwa-dinosaur/lythronax/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Lythronax.png	Common	Hatchling	Lythronax	3900	0%	1000	104	5%
1544723200-80	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare		Tenontosaurus	4800	0%	1160	109	5%
1544723265-207	https://metahub.info/jwa-dinodex/	Parasaurolophus	https://metahub.info/jwa-dinosaur/parasaurolophus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Parasaurolophus.png	Common	Hatchling	Parasaurolophus	5100	0%	1200	113	5%
1544723269-214	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1544723246-171	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary		Pyrritator	3000	0%	1350	129	5%
1544723252-182	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare		Purrusaurus	4200	10%	1000	112	5%
1544723411-480	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/		Critical Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1420	129	5%
1544723419-499	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3510	0%	1000	123	20%
1544723188-51	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary		Tryostronix	3900	0%	1150	124	20%
1544723225-127	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Gashing Wound		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	3150	0%	1330	126	5%
1544723428-513	https://metahub.info/jwa-dinodex/	Apatosaurus	https://metahub.info/jwa-dinosaur/apatosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Apatosaurus.png	Common	Hatchling	Apatosaurus	6000	0%	1000	101	5%
1544723407-475	https://metahub.info/jwa-dinodex/	Darwinopterus	https://metahub.info/jwa-dinosaur/darwinopterus/					Epic	To be determined	Darwinopterus	3150	0%	1050	129	5%
1544723192-62	https://metahub.info/jwa-dinodex/	Triceratops Gen 2	https://metahub.info/jwa-dinosaur/triceratops-gen2/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Triceratops-Gen-2.png	Common	Hatchling	Triceratops Gen 2	4050	10%	1260	112	5%
1544723175-24	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4350	0%	1700	104	20%
1544723161-3	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare		Wuerhosaurus	4800	20%	1400	115	5%
1544723188-53	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary		Tryostronix	3900	0%	1150	124	20%
1544723359-386	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare		Edmontosaurus	5250	0%	1100	107	5%
1544723401-461	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare		Dilophosaurus	3750	0%	1200	124	5%
1544723306-291	https://metahub.info/jwa-dinodex/	Lythronax	https://metahub.info/jwa-dinosaur/lythronax/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Lythronax.png	Common	Hatchling	Lythronax	3900	0%	1000	104	5%
1544723185-47	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare		Tuojiangosaurus	4500	0%	1130	112	5%
1544723365-401	https://metahub.info/jwa-dinodex/	Dracorex Gen 2	https://metahub.info/jwa-dinosaur/dracorex-gen-2/			Swap-In Shattering Rampage	https://metahub.info/wp-content/uploads/2018/06/Dracorex2.png	Common		Dracorex Gen 2	3000	0%	1140	108	5%
1544723369-409	https://metahub.info/jwa-dinodex/	Dracoceratops	https://metahub.info/jwa-dinosaur/dracoceratops/		Minimal Speedup Strike			Legendary	To be determined	Dracoceratops	4500	0%	1000	119	5%
1544723241-160	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary		Rajakylosaurus	4350	30%	900	104	5%
1544723340-352	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	1150	107	20%
1544723161-2	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare		Wuerhosaurus	4800	20%	1400	115	5%
1544723273-222	https://metahub.info/jwa-dinodex/	Ophiacodon	https://metahub.info/jwa-dinosaur/ophiacodon/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Ophiacodon.png	Common	Hatchling	Ophiacodon	4050	0%	1000	107	40%
1544723285-249	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary		Monomimus	2700	0%	1300	129	5%
1544723381-433	https://metahub.info/jwa-dinodex/	Dimorphodon	https://metahub.info/jwa-dinosaur/dimorphodon/		Gashing Wound			Common	To be determined	Dimorphodon	3000	0%	700	128	5%
1544723202-85	https://metahub.info/jwa-dinodex/	Tenontorex	https://metahub.info/jwa-dinosaur/tenontorex/					Unique	To be determined	Tenontorex	4500	0%	1640	109	20%
1544723256-192	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	127	5%
1544723271-219	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/		Evasive Strike		https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1400	131	5%
1544723287-252	https://metahub.info/jwa-dinodex/	Monolophosaurus Gen 2	https://metahub.info/jwa-dinosaur/monolophosaurus-gen-2/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus-Gen-2.png	Common	Hatchling	Monolophosaurus Gen 2	2400	0%	1200	126	5%
1544723300-276	https://metahub.info/jwa-dinodex/	Majungasaurus	https://metahub.info/jwa-dinosaur/majungasaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Majungasaurus.png	Common	Hatchling	Majungasaurus	3660	0%	1000	105	5%
1544723208-95	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4620	0%	1000	116	20%
1544723298-274	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	4200	0%	880	105	5%
1544723379-429	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	3900	30%	900	108	5%
1544723373-417	https://metahub.info/jwa-dinodex/	Diplodocus	https://metahub.info/jwa-dinosaur/diplodocus/		Pinning Strike			Epic	To be determined	Diplodocus	5850	0%	1150	103	5%
1544723267-211	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1130	126	5%
1544723411-483	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1420	129	5%
1544723330-329	https://metahub.info/jwa-dinodex/	Hatzegopteryx	https://metahub.info/jwa-dinosaur/hatzegopteryx/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Hatzegop.png	Common	Hatchling	Hatzegopteryx	4500	0%	1140	114	5%
1544723194-64	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare		Triceratops	4770	20%	1200	115	5%
1544723434-526	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/				https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic		Ankylosaurus	4800	30%	900	116	5%
1544723426-511	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/			Swap In Invincibility	https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	900	112	5%
1544723185-45	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare		Tuojiangosaurus	4500	0%	1130	112	5%
1544723296-271	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/			Armor Piercing Counter	https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4260	0%	1000	115	5%
1544723321-315	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare		Irritator	4800	0%	1030	123	5%
1544723332-332	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic		Gryposuchus	3900	20%	1000	116	20%
1544723285-250	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary		Monomimus	2700	0%	1300	129	5%
1544723258-195	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare		Proceratosaurus	3000	0%	1360	125	5%
1544723440-539	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Survivor	Amargasaurus	5400	0%	1100	103	5%
1544723206-89	https://metahub.info/jwa-dinodex/	Tanycolagreus	https://metahub.info/jwa-dinosaur/tanycolagreus/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Tanycolagreus.png	Common	Alpha	Tanycolagreus	3210	0%	1500	130	5%
1544723171-17	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Tyrant	Utarinex	4200	0%	1420	126	5%
1544723294-264	https://metahub.info/jwa-dinodex/	Miragaia	https://metahub.info/jwa-dinosaur/miragaia/		Regeneration			Common	To be determined	Miragaia	3000	0%	1350	117	5%
1544723367-405	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1280	124	5%
1544723421-501	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1544723321-312	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare		Irritator	4800	0%	1030	123	5%
1544723244-166	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/			Swap In Defense	https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	4200	0%	1000	117	5%
1544723219-113	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary		Stegodeus	5400	30%	1020	107	5%
1544723336-344	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1544723296-269	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4260	0%	1000	115	5%
1544723283-242	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4440	30%	1300	117	20%
1544723283-243	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4440	30%	1300	117	20%
1544723371-414	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	3000	0%	1300	127	5%
1544723315-303	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1400	120	5%
1544723161-4	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/				https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare		Wuerhosaurus	4800	20%	1400	115	5%
1544723342-356	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	900	109	5%
1544723173-20	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1544723430-516	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1544723250-177	https://metahub.info/jwa-dinodex/	Purrusaurus Gen 2	https://metahub.info/jwa-dinosaur/purrusaurus-gen2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_GEN2_result.jpg	Common	Hatchling	Purrusaurus Gen 2	4500	10%	1000	111	20%
1544723383-436	https://metahub.info/jwa-dinodex/	Dimodactylus	https://metahub.info/jwa-dinosaur/dimodactylus/		Impact and Run			Epic	To be determined	Dimodactylus	3000	0%	820	126	5%
1544723291-263	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/			Immunity	https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary		Monolometrodon	3750	0%	1000	126	5%
1544723446-551	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Omega	Alanqa	4200	0%	1000	120	5%
1544723206-90	https://metahub.info/jwa-dinodex/	Tanycolagreus	https://metahub.info/jwa-dinosaur/tanycolagreus/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/05/Tanycolagreus.png	Common	Alpha	Tanycolagreus	3210	0%	1500	130	5%
1544723330-330	https://metahub.info/jwa-dinodex/	Hatzegopteryx	https://metahub.info/jwa-dinosaur/hatzegopteryx/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Hatzegop.png	Common	Hatchling	Hatzegopteryx	4500	0%	1140	114	5%
1544723296-270	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4260	0%	1000	115	5%
1544723200-77	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare		Tenontosaurus	4800	0%	1160	109	5%
1544723419-498	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3510	0%	1000	123	20%
1544723411-481	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/		Pounce		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1420	129	5%
1544723267-213	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1130	126	5%
1544723294-265	https://metahub.info/jwa-dinodex/	Miragaia	https://metahub.info/jwa-dinosaur/miragaia/		Shielding Strike			Common	To be determined	Miragaia	3000	0%	1350	117	5%
1544723229-136	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/		Strike		https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1544723334-338	https://metahub.info/jwa-dinodex/	Grypolyth	https://metahub.info/jwa-dinosaur/grypolyth/		Lockdown Strike			Unique	To be determined	Grypolyth	4020	20%	1000	106	5%
1544723440-537	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/		Decelerating Rampage		https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Survivor	Amargasaurus	5400	0%	1100	103	5%
1544723403-465	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1260	131	5%
1544723363-398	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare		Dsungaripterus	3300	0%	850	125	5%
1544723194-66	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/				https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare		Triceratops	4770	20%	1200	115	5%
1544723423-507	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/				https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5400	0%	1150	102	20%
1544723188-54	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/			Immunity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary		Tryostronix	3900	0%	1150	124	20%
1544723239-156	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	1050	104	20%
1544723369-408	https://metahub.info/jwa-dinodex/	Dracoceratops	https://metahub.info/jwa-dinosaur/dracoceratops/		Impact and Run			Legendary	To be determined	Dracoceratops	4500	0%	1000	119	5%
1544723438-532	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Survivor	Amargocephalus	4500	40%	950	104	5%
1544723310-300	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/				https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1544723338-346	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare		Gorgosaurus	4200	0%	1600	102	20%
1544723392-448	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1200	126	5%
1544723277-230	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare		Nodosaurus	4350	25%	1000	115	5%
1544723235-146	https://metahub.info/jwa-dinodex/	Sarcosuchus	https://metahub.info/jwa-dinosaur/sarcosuchus-2/		Lockdown Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Sarcosuchus_result.jpg	Common	Hatchling	Sarcosuchus	4200	10%	1000	110	5%
1544723294-266	https://metahub.info/jwa-dinodex/	Miragaia	https://metahub.info/jwa-dinosaur/miragaia/			Armor Piercing Counter		Common	To be determined	Miragaia	3000	0%	1350	117	5%
1544723256-191	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/			Armor Piercing Counter	https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	127	5%
1544723237-150	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1544723179-30	https://metahub.info/jwa-dinodex/	Tyrannolophosaur	https://metahub.info/jwa-dinosaur/tyrannolophosaur/		Defense Shattering Impact			Legendary	To be determined	Tyrannolophosaur	4200	0%	1600	108	20%
1544723204-86	https://metahub.info/jwa-dinodex/	Tarbosaurus	https://metahub.info/jwa-dinosaur/tarbosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Tarbosaurus.png	Common	Hatchling	Tarbosaurus	4650	0%	1600	104	40%
1544723296-267	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4260	0%	1000	115	5%
1544723432-521	https://metahub.info/jwa-dinodex/	Ankylosaurus Gen 2	https://metahub.info/jwa-dinosaur/ankylosaurus-gen-2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus-Gen-2.png	Common		Ankylosaurus Gen 2	4410	25%	900	112	5%
1544723219-111	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary		Stegodeus	5400	30%	1020	107	5%
1544723430-518	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1544723279-236	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5100	40%	1000	108	5%
1544723269-217	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/				https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1544723289-256	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic		Monolophosaurus	3000	0%	1240	127	5%
1544723252-180	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare		Purrusaurus	4200	10%	1000	112	5%
1544723348-367	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1544723310-298	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1544723438-536	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Survivor	Amargocephalus	4500	40%	950	104	5%
1544723428-512	https://metahub.info/jwa-dinodex/	Apatosaurus	https://metahub.info/jwa-dinosaur/apatosaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Apatosaurus.png	Common	Hatchling	Apatosaurus	6000	0%	1000	101	5%
1544723254-186	https://metahub.info/jwa-dinodex/	Purrolyth	https://metahub.info/jwa-dinosaur/purrolyth/		Long Protection			Rare	To be determined	Purrolyth	3000	10%	1140	105	5%
1544723371-413	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	3000	0%	1300	127	5%
1544723231-139	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/		Instant Charge		https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	4050	25%	1350	116	5%
1544723223-124	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary		Spinotasuchus	3750	0%	1270	129	20%
1544723285-247	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary		Monomimus	2700	0%	1300	129	5%
1544723281-239	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	900	106	5%
1544723325-322	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary		Indominus Rex	4200	0%	1270	107	20%
1544723392-451	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1200	126	5%
1544723397-456	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique		Diloracheirus	3450	0%	1450	129	5%
1544723415-489	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/		Rampage		https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	30%
1544723179-31	https://metahub.info/jwa-dinodex/	Tyrannolophosaur	https://metahub.info/jwa-dinosaur/tyrannolophosaur/		Defense Shattering Rampage			Legendary	To be determined	Tyrannolophosaur	4200	0%	1600	108	20%
1544723188-52	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary		Tryostronix	3900	0%	1150	124	20%
1544723237-152	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Lockdown Strike		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1544723332-335	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/				https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic		Gryposuchus	3900	20%	1000	116	20%
1544723198-74	https://metahub.info/jwa-dinodex/	Thoradolosaur	https://metahub.info/jwa-dinosaur/thoradolosaur/		Defense Shattering Strike			Unique	To be determined	Thoradolosaur	4200	0%	1640	109	40%
1544723198-72	https://metahub.info/jwa-dinodex/	Thoradolosaur	https://metahub.info/jwa-dinosaur/thoradolosaur/		Defense Shattering Impact			Unique	To be determined	Thoradolosaur	4200	0%	1640	109	40%
1544723219-110	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary		Stegodeus	5400	30%	1020	107	5%
1544723352-377	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/			Immunity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique		Erlidominus	3000	0%	1500	129	20%
1544723336-342	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1544723421-503	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/				https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1544723163-7	https://metahub.info/jwa-dinodex/	Velociraptor	https://metahub.info/jwa-dinosaur/velociraptor/				https://metahub.info/wp-content/uploads/2018/05/Velociraptor.png	Common		Velociraptor	1950	0%	1320	132	5%
1544723438-534	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Survivor	Amargocephalus	4500	40%	950	104	5%
1544723246-167	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary		Pyrritator	3000	0%	1350	129	5%
1544723350-370	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1544723379-432	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	3900	30%	900	108	5%
1544723377-424	https://metahub.info/jwa-dinodex/	Diplocaulus	https://metahub.info/jwa-dinosaur/diplocaulus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus.png	Common	Hatchling	Diplocaulus	2700	0%	1100	124	5%
1544723321-314	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare		Irritator	4800	0%	1030	123	5%
1544723359-389	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare		Edmontosaurus	5250	0%	1100	107	5%
1544723359-388	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare		Edmontosaurus	5250	0%	1100	107	5%
1544723363-397	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/			Armor Piercing Counter	https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare		Dsungaripterus	3300	0%	850	125	5%
1544723202-82	https://metahub.info/jwa-dinodex/	Tenontorex	https://metahub.info/jwa-dinosaur/tenontorex/		Defense Shattering Rampage			Unique	To be determined	Tenontorex	4500	0%	1640	109	20%
1544723417-493	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1544723221-116	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1544723190-55	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique		Trykosaurus	4500	30%	1600	108	30%
1544723403-468	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1260	131	5%
1544723426-509	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	900	112	5%
1544723260-199	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/		Ferocious Impact		https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1544723241-159	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary		Rajakylosaurus	4350	30%	900	104	5%
1544723436-531	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare		Ankylocodon	3900	25%	800	107	20%
1544723352-375	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique		Erlidominus	3000	0%	1500	129	20%
1544723215-103	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3000	0%	1400	129	5%
1544723361-391	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/		Pounce		https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare		Echo	2700	0%	1300	128	5%
1544723250-178	https://metahub.info/jwa-dinodex/	Purrusaurus Gen 2	https://metahub.info/jwa-dinosaur/purrusaurus-gen2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_GEN2_result.jpg	Common	Hatchling	Purrusaurus Gen 2	4500	10%	1000	111	20%
1544723346-364	https://metahub.info/jwa-dinodex/	Euoplocephalus	https://metahub.info/jwa-dinosaur/euoplocephalus/				https://metahub.info/wp-content/uploads/2018/05/Euoplocephalus.png	Common	Hatchling	Euoplocephalus	4500	40%	900	112	5%
1544723279-232	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Bellow		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5100	40%	1000	108	5%
1544723379-427	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	3900	30%	900	108	5%
1544723254-183	https://metahub.info/jwa-dinodex/	Purrolyth	https://metahub.info/jwa-dinosaur/purrolyth/		Defense Shattering Strike			Rare	To be determined	Purrolyth	3000	10%	1140	105	5%
1544723390-446	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	3990	0%	1000	113	5%
1544723260-200	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/				https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1544723371-411	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	3000	0%	1300	127	5%
1544723289-257	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic		Monolophosaurus	3000	0%	1240	127	5%
1544723328-327	https://metahub.info/jwa-dinodex/	Iguanodon	https://metahub.info/jwa-dinosaur/iguanodon/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Iguanodon.png	Common	Hatchling	Iguanodon	4800	0%	1200	112	5%
1544723385-442	https://metahub.info/jwa-dinodex/	Dimetrodon Gen 2	https://metahub.info/jwa-dinosaur/dimetrodon-gen-2/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon-Gen-2.png	Common		Dimetrodon Gen 2	3990	0%	1000	112	5%
1544723403-466	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/		Pounce		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1260	131	5%
1544723267-212	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Rampage and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1130	126	5%
1544723271-220	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1400	131	5%
1544723175-23	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4350	0%	1700	104	20%
1544723361-393	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/				https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare		Echo	2700	0%	1300	128	5%
1544723223-123	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Swoop		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary		Spinotasuchus	3750	0%	1270	129	20%
1544723235-148	https://metahub.info/jwa-dinodex/	Sarcosuchus	https://metahub.info/jwa-dinosaur/sarcosuchus-2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Sarcosuchus_result.jpg	Common	Hatchling	Sarcosuchus	4200	10%	1000	110	5%
1544723171-14	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Tyrant	Utarinex	4200	0%	1420	126	5%
1544723373-418	https://metahub.info/jwa-dinodex/	Diplodocus	https://metahub.info/jwa-dinosaur/diplodocus/		Shield Advantage			Epic	To be determined	Diplodocus	5850	0%	1150	103	5%
1544723332-333	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic		Gryposuchus	3900	20%	1000	116	20%
1544723281-241	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	900	106	5%
1544723275-225	https://metahub.info/jwa-dinodex/	Nundasuchus	https://metahub.info/jwa-dinosaur/nundasuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Nundasuchus.png	Common		Nundasuchus	3000	0%	1490	128	5%
1544723271-221	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1400	131	5%
`;

// replace misspelled dino names
Dinos = Dinos.replace(/Purrusaurus/gm, "Purussaurus");

// extract all stats to JSON object string
Dinos= Dinos.replace(
	/(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)%\t(.*?)\t(.*?)\t(.*?)%\n/gm,
	'{ "order":"$1", "name":"$3", "ability":"$6", "passive":"$7", "image":"$8", "rarity":"$9", "tier":"$10", "health":$12, "armor":$13, "damage":$14, "speed":$15, "critical":$16  },\n'
);

// wrap in square brackets
Dinos = `[${Dinos}]`;

// remove ending comma
Dinos = Dinos.replace(
	/,(\n+\]$)/gm,
	'$1'
);

// parse into JSON object
Dinos = JSON.parse(Dinos);

// order the data so we can retrieve the abilities in order
Dinos = _.sortBy(Dinos, [
	function(o) { return o.order.replace(/-\d{1,}/, ''); },
	function(o) { return parseInt(o.order.replace(/\d{10}-/, '')); },
]);

// merge all records by dino name
Dinos = _.reduce(Dinos, function(result, entry) {
	var dino = _.find(result, { name: entry.name });
	if (!dino) {
		dino = _.omit(entry, ['order', 'ability', 'passive']);
		dino.abilities = [];
		dino.passives = [];
		result.push(dino);
	}

	if (!_.isEmpty(entry.ability))
		dino.abilities.push(entry.ability);

	if (!_.isEmpty(entry.passive))
		dino.passives.push(entry.passive);

	return result;
}, []);


// HOW TO: run webscraper-wikia-abilities.json in Chrome WebScraper extension and paste output here
// 1. set Page Load Delay to 5000
// 2. manually scroll the page after it loads, so the lazy loaded images correctly populate 'src' attribute
var Abilities = `
1544723792-841	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swoop	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	0	0	0	Auto-Swap to next Creature
1544723792-788	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Bellow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	0	2	0	Reduce Target Speed 50% for 2 turns
1544723792-802	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Distracting Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	2x	2	0	Target's damage is reduced by 50% for 2 turns
1544723792-834	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ready to Crush	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	0	3	0	Increase Critical Chance by 30% for next 3 turns
1544723792-771	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Nullifying Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/68/Icon_Attack_Scrub.png/revision/latest/scale-to-width-down/60?cb=20180617152758	1x	0	0	Remove Positive Effects
1544723792-854	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Become Invincible for 1 Turn after swapping in
1544723792-824	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lockdown Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/2/21/Icon_Swap_Prevention.png/revision/latest/scale-to-width-down/60?cb=20180626144312	1.5x	1	0	Cannot swap for 2 turns
1544723792-840	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swoop	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	0	0	0	DoT 0.2x of target's max HP for 3 turns
1544723792-806	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Expose Weak Spot	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/9/90/Icon_Vulnerability.png/revision/latest/scale-to-width-down/60?cb=20180626144337	1x	3	0	Target vulnerable this turn and next 3 turns
1544723792-833	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ready to Crush	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	0	3	0	Increase Damage by 50% for next 3 turns
1544723792-766	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lesser Wounding Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	0	0	DoT 0.15x damage for 2 turnsTBC
1544723792-765	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Evasive Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/60/Icon_Attack_Evasive_Strike.png/revision/latest/scale-to-width-down/60?cb=20180913124532	1x	0	0	Gain 50% chance to Dodge direct damage for 1 turn.
1544723792-837	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Strengthening Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	1x	3	0	Increase damage 50% for 2 turns
1544723792-785	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/63/Icon_Bypass_Armor_4.png/revision/latest/scale-to-width-down/60?cb=20180617153708	2x	1	1	Bypass Armor
1544723792-852	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Ferocity	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/49/Icon_Swap_Ferocity.png/revision/latest/scale-to-width-down/60?cb=20180919161134	0	0	0	Increase Damage by 50% for 2 turns after swapping in
1544723792-825	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lockdown Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/2/21/Icon_Swap_Prevention.png/revision/latest/scale-to-width-down/60?cb=20180626144312	1x	1	0	Cannot swap for 2 turns
1544723792-836	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Slowing Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	1.5	4	0	Target's speed is reduced 50% for 3 turns
1544723792-805	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Evasive Stance	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/32/Icon_Attack_Evasive_Stance.png/revision/latest/scale-to-width-down/60?cb=20180913124409	0	4	0	Gain 50% chance to Dodge direct damage for 3 turn.
1544723792-856	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Slow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/48/Icon_Swap_In_Slow.png/revision/latest/scale-to-width-down/60?cb=20180919161343	0	0	0	Reduce oponent's speed by 50% for 1 turn after swapping in
1544723792-793	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cloak	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8e/Icon_Cloak.png/revision/latest/scale-to-width-down/60?cb=20180617153711	0	3	0	Next attack will deal 2x damage
1544723792-853	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Ferocity	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/49/Icon_Swap_Ferocity.png/revision/latest/scale-to-width-down/60?cb=20180919161134	0	0	0	Unable to swap for 2 Turns
1544723792-781	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Cleanse
1544723792-826	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Long Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/be/Icon_Invincibility_2.png/revision/latest/scale-to-width-down/60?cb=20180626144114	0	4	0	Shield 100% for 2 turns
1544723792-846	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Counter-Attack	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/2/20/Icon_Counter_attack.png/revision/latest/scale-to-width-down/60?cb=20180919160255	Varies	0	0	Deal ? damage after receiving but surviving damage
1544723792-813	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Greater Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/ed/Icon_Stun_1.png/revision/latest/scale-to-width-down/60?cb=20180626144243	1x	3	2	75% Chance to stun 1 turn
1544723792-798	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1.5x	2	0	Bypass Armor
1544723792-809	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ferocious Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	1x	3	0	Damage increased +50% for 3 turns
1544723792-762	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8d/Icon_Bypass-Armor.png/revision/latest/scale-to-width-down/60?cb=20180617153710	1x	0	0	Bypass armor
1544723792-817	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Charge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/c/cd/Icon_Stun_3.png/revision/latest/scale-to-width-down/60?cb=20180626144258	1x	2	1	Act first
1544723792-844	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Wounding Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d2/Icon_Attack_Wound_Special_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	2x	1	0	DoT 0.15x of target's max HP for 2 turns
1544723792-792	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cloak	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8e/Icon_Cloak.png/revision/latest/scale-to-width-down/60?cb=20180617153711	0	3	0	Gain 50% chance of dodge for 2 turns
1544723792-799	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e8/Icon_Bypass_Shield_4.png/revision/latest/scale-to-width-down/60?cb=20180617153710	2x	1	1	Destroy Shields
1544723792-850	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Distraction	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a7/Icon_Swap_In_Distraction.png/revision/latest/scale-to-width-down/60?cb=20180919161013	0	0	0	Reduce oponent's damage by 50% for 1 turn after swapping in
1544723792-807	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Extended Critical Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/7c/Icon_Critical_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617153711	1x	3	0	Critical Chance +60% for 3 turns
1544723792-819	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Cripple	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	0	1	0	Act first
1544723792-784	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/4b/Icon_Bypass_Armor_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	1.5x	2	0	Bypass armor
1544723792-767	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Low Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	20% Chance to stun for 1 turn
1544723792-800	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e8/Icon_Bypass_Shield_4.png/revision/latest/scale-to-width-down/60?cb=20180617153710	2x	1	1	Bypass Armor
1544723792-848	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Defense	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Gain 50% Shield for 2 turns after swapping in
1544723792-823	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lethal Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d2/Icon_Attack_Wound_Special_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	1x	2	0	DoT 0.33x of target's max HP per turn for 3 turns
1544723792-845	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Wounding Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/3d/Icon_Attack_Wound_Special_1.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	1	0	DoT 0.15x of target's max HP for 2 turns
1544723792-822	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/be/Icon_Invincibility_2.png/revision/latest/scale-to-width-down/60?cb=20180626144114	0	3	1	Shield 100% for 1 turn
1544723792-816	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Impairing Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d0/Icon_Critical_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617153712	1x	2	0	No Critical Chance for 3 turns
1544723792-763	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1x	0	0	Destroy Shields
1544723792-820	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Cripple	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	0	1	0	Target’s damage is reduced 90% for 1 turn
1544723792-827	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Long Protection	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Shield_3.png/revision/latest/scale-to-width-down/60?cb=20180617154438	1x	4	0	50% Defense for 4 turns
1544723792-842	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Thagomizer	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	1.5x	3	0	Target's speed -50% for 3 turns
1544723792-801	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Distracting Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	1.5x	2	0	Target's damage is reduced by 50% for 2 turns
1544723792-847	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Immunity	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d7/Icon_Debuff_Immune.png/revision/latest/scale-to-width-down/60?cb=20180919160545	0	0	0	All negative effects are deflected
1544723792-851	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Distraction	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a7/Icon_Swap_In_Distraction.png/revision/latest/scale-to-width-down/60?cb=20180919161013	0	0	0	Unable to swap for 1 turn
1544723792-779	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Pulse	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b4/Icon_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180626144100	0	3	0	Regenerate 25% HP
1544723792-772	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Pinning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/77/Icon_Attack_Swap_Prevented.png/revision/latest/scale-to-width-down/60?cb=20180617153704	1x	0	0	Cannot swap for 1 turn
1544723792-859	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/61/Icon_Swap_In_Strike.png/revision/latest/scale-to-width-down/60?cb=20180919161454	0	0	0	Unable to swap for 2 Turns
1544723792-839	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Stunning Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/53/Icon_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617154226	1.5x	2	1	33% Chance to stun opponent for 1 turn
1544723792-830	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Pounce	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d1/Icon_Attack_Special_3.png/revision/latest/scale-to-width-down/60?cb=20180617152800	2x	1	0	Reduce target's damage 50% for 1 turn
1544723792-764	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1x	0	0	Bypass Armor
1544723792-815	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Impact and Run	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Swap.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1.5	1	1	Automatic Swap
1544723792-796	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Decelerating Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8d/Icon_Speed_DeBuff_4.png/revision/latest/scale-to-width-down/60?cb=20180626144231	1.5x	1	0	Target’s speed is reduced 50% for 2 turns
1544723792-821	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/be/Icon_Invincibility_2.png/revision/latest/scale-to-width-down/60?cb=20180626144114	0	3	1	Act first
1544723792-832	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Rampage and Run	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Swap.png/revision/latest/scale-to-width-down/60?cb=20180617152801	2x	1	1	Automatic Swap
1544723792-861	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Stun	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/3e/Icon_Swap_In_Stun.png/revision/latest/scale-to-width-down/60?cb=20180919161737	0	0	0	Unable to swap for 2 turns
1544723792-810	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Gashing Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	1	0	DoT 0.3x of target's max HP for 2 turns
1544723792-777	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Pulse	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b4/Icon_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180626144100	0	3	0	Act First
1544723792-773	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/30/Icon_Attack.png/revision/latest/scale-to-width-down/60?cb=20180617151453	1x	0	0	No special effect
1544723792-768	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Minimal Speedup Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/65/Icon_Attack_Speed.png/revision/latest/scale-to-width-down/60?cb=20180617152800	1x	0	0	Increase speed 10% for 3 turns
1544723792-829	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Nullifying Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/1/1e/Icon_Scrub_2.png/revision/latest/scale-to-width-down/60?cb=20180626144140	1.5x	2	0	Remove positive effects
1544723792-770	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Minor Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	15% Chance to stun for 1 turn
1544723792-808	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ferocious Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	1.5x	3	0	Damage increased +50% for 3 turns
1544723792-860	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Stun	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/3e/Icon_Swap_In_Stun.png/revision/latest/scale-to-width-down/60?cb=20180919161737	0	0	0	Gain 66% chance to stun for 1 turn after swapping in
1544723792-782	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Increase damage to 1.25x for 4 turns
1544723792-828	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Maiming Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	1	0	DoT 0.4x of target's max HP for 2 turns
1544723792-791	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cloak	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8e/Icon_Cloak.png/revision/latest/scale-to-width-down/60?cb=20180617153711	0	3	0	Act First
1544723792-863	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Swap_In_Wound.png/revision/latest/scale-to-width-down/60?cb=20180919161608	0	0	0	Unable to swap for 2 Turns
1544723792-783	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Regenerate 25% HP
1544723792-831	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d1/Icon_Attack_Special_3.png/revision/latest/scale-to-width-down/60?cb=20180617152800	2x	1	0	No special effect
1544723792-814	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/ed/Icon_Attack_Special_1.png/revision/latest/scale-to-width-down/60?cb=20180617152759	1.5x	2	0	No special effect
1544723792-795	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Debilitating Distraction	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	1x	3	1	Target's damage reduced 75% 2 turns
1544723792-843	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Wounding Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d2/Icon_Attack_Wound_Special_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	1.5x	1	0	DoT 0.15x of target's max HP for 2 turns
1544723792-786	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Bellow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	0	2	0	Act First
1544723792-776	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Vulnerability Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/76/Icon_Attack_Vulnerablility.png/revision/latest/scale-to-width-down/60?cb=20180617153705	1x	0	0	Target is Vulnerable for 1 turn
1544723792-857	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Slow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/48/Icon_Swap_In_Slow.png/revision/latest/scale-to-width-down/60?cb=20180919161343	0	0	0	Unable to swap for 1 turn
1544723792-774	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Superiority Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/73/Attack_Basic_Speed_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152753	1x	0	0	Cleanse Distraction
1544723792-787	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Bellow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	0	2	0	Shield 50% for 1 turn
1544723792-769	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Minimal Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	10% Chance to stun for 1 turn
1544723792-862	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Swap_In_Wound.png/revision/latest/scale-to-width-down/60?cb=20180919161608	0	0	0	DoT 0.25x target's max HP for 2 turns after swapping in
1544723792-780	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Act First
1544723792-803	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Distracting Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	1x	2	0	Target's damage is reduced by 50% for 2 turns
1544723792-812	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Greater Stunning Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/c/cd/Icon_Stun_3.png/revision/latest/scale-to-width-down/60?cb=20180626144258	2x	3	1	75% Chance to stun 1 turn
1544723792-858	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/61/Icon_Swap_In_Strike.png/revision/latest/scale-to-width-down/60?cb=20180919161454	0	0	0	Deal 1x damage after swapping in
1544723792-804	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Evasive Stance	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/32/Icon_Attack_Evasive_Stance.png/revision/latest/scale-to-width-down/60?cb=20180913124409	0	4	0	Act first.
1544723792-790	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/63/Icon_Bypass_Armor_4.png/revision/latest/scale-to-width-down/60?cb=20180617153708	2x	1	1	Bypass Armor
1544723792-811	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Greater Stunning Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/ed/Icon_Stun_1.png/revision/latest/scale-to-width-down/60?cb=20180626144243	1.5	3	1	75% Chance to stun 1 turn
1544723792-775	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Superiority Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/73/Attack_Basic_Speed_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152753	1x	0	0	Target: Reduce Speed 33% 1 turn
1544723792-835	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Short Defense	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Shield_3.png/revision/latest/scale-to-width-down/60?cb=20180617154438	1x	2	0	50% shield for 2 turns
1544723792-778	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Pulse	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b4/Icon_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180626144100	0	3	0	Cleanse
1544723792-818	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Charge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/c/cd/Icon_Stun_3.png/revision/latest/scale-to-width-down/60?cb=20180626144258	1x	2	1	Guaranteed stun 1 turn
1544723792-794	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Critical Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/7c/Icon_Critical_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617153711	1.5	2	0	Chance of Critical attack increased by 40%
1544723792-789	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cleansing Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/f/f7/Icon_Attack_Impact_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152758	1.5x	2	0	Cleanse
1544723792-855	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Unable to swap for 2 Turns
1544723792-797	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1.5x	2	0	Destroy Shields
1544723792-838	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Strike and Run	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Swap.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	Automatic Swap
1544723792-849	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Defense	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Unable to swap for 2 Turns
`;

// replace non-numerics in numeric columns
Abilities = Abilities.replace(/Varies/gm, "1");

// extract all stats to JSON object string
Abilities= Abilities.replace(
	/(.*?)\t(.*?)\t(.*?)\t(.*?)\t(.*?)x?\t(.*?)\t(.*?)\t(.*?)\n/gm,
	'{ "order": "$1", "name": "$3",\t\t\t\t\t\t\t"img": "$4",\t"damage": $5,\t"cooldown": $6,\t"delay": $7,\t"effect": "$8" },\n'
);

// wrap in square brackets
Abilities = `[${Abilities}]`;

// remove ending comma
Abilities = Abilities.replace(
	/,(\n+\]$)/gm,
	'$1'
);

// parse into JSON object
Abilities = JSON.parse(Abilities);

// order the data so we can retrieve the abilities in order
Abilities = _.sortBy(Abilities, [
	function(o) { return o.order.replace(/-\d{1,3}/, ''); },
	function(o) { return parseInt(o.order.replace(/\d{10}-/, '')); },
]);

// console.table(Abilities);

// merge all records by ability name
Abilities = _.reduce(Abilities, function(result, value, key) {
	var ability = _.find(result, { name: value.name });
	if (!ability)
		result.push(ability = { name: value.name, img: value.img, damage: value.damage, cooldown: value.cooldown, delay: value.delay, effects: [] });

	// if (value.damage)
	// 	ability.damage = ability.damage || value.damage;

	// if (value.cooldown)
	// 	ability.cooldown = ability.cooldown || value.cooldown;

	// if (value.delay)
	// 	ability.delay = ability.delay || value.delay;

	if (!_.isEmpty(value.effect))
		(ability.effects = (ability.effects || [])).push(value.effect);

	return result;
}, []);



// https://metahub.info/jurassic-world-alive/550/jwa-recipes-for-all-hybrids-what-dna-do-you-need/
var Fusions = `
`;
