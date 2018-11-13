
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
1542074247-1273	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	4800	0%	1000	120	5%
1542074226-1233	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/		Debilitating Distraction		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1542074201-1188	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare	Specialist	Irritator	4800	0%	1030	123	5%
1542074166-1114	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	830	106	5%
1542074220-1225	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	850	107	5%
1542074149-1082	https://metahub.info/jwa-dinodex/	Parasaurolophus	https://metahub.info/jwa-dinosaur/parasaurolophus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/05/Parasaurolophus.png	Common	Hatchling	Parasaurolophus	5100	0%	890	113	5%
1542074120-1024	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic	Specialist	Secodontosaurus	3300	0%	1210	114	5%
1542074295-1366	https://metahub.info/jwa-dinodex/	Ankylosaurus Gen 2	https://metahub.info/jwa-dinosaur/ankylosaurus-gen-2/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus-Gen-2.png	Common	Specialist	Ankylosaurus Gen 2	4410	25%	900	112	5%
1542074266-1312	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare	Specialist	Dilophosaurus	3870	0%	1100	124	5%
1542074251-1283	https://metahub.info/jwa-dinodex/	Diplocaulus	https://metahub.info/jwa-dinosaur/diplocaulus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus.png	Common	Hatchling	Diplocaulus	3000	0%	1100	124	5%
1542074176-1135	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary	Specialist	Monolometrodon	3930	0%	900	119	5%
1542074059-901	https://metahub.info/jwa-dinodex/	Velociraptor	https://metahub.info/jwa-dinosaur/velociraptor/		Pounce		https://metahub.info/wp-content/uploads/2018/05/Velociraptor.png	Common	Specialist	Velociraptor	1950	0%	1320	132	5%
1542074230-1241	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Cloak		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique	Apex	Erlidominus	3000	0%	1400	125	20%
1542074157-1098	https://metahub.info/jwa-dinodex/	Ophiacodon	https://metahub.info/jwa-dinosaur/ophiacodon/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Ophiacodon.png	Common	Hatchling	Ophiacodon	4200	0%	1000	107	40%
1542074239-1258	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare	Specialist	Echo	2700	0%	1300	128	5%
1542074068-918	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4200	0%	1650	104	20%
1542074199-1182	https://metahub.info/jwa-dinodex/	Irritator Gen 2	https://metahub.info/jwa-dinosaur/irritator-gen-2/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_GEN2_result.jpg	Common	Carcass	Irritator Gen 2	4200	0%	1000	122	20%
1542074262-1303	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique	Apex	Diloracheirus	3450	0%	1330	129	5%
1542074097-980	https://metahub.info/jwa-dinodex/	Suchomimus	https://metahub.info/jwa-dinosaur/suchomimus/			Swap In Wound	https://metahub.info/wp-content/uploads/2018/05/Suchomimus.png	Common	Specialist	Suchomimus	3630	0%	700	115	5%
1542074089-966	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare	Specialist	Tenontosaurus	4800	0%	850	109	5%
1542074099-981	https://metahub.info/jwa-dinodex/	Stygimoloch Gen 2	https://metahub.info/jwa-dinosaur/stygimoloch-gen-2/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch_GEN2.jpg	Common	Carcass	Stygimoloch Gen 2	3810	0%	1200	128	5%
1542074164-1109	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5250	40%	950	105	5%
1542074151-1085	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1110	121	5%
1542074134-1053	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/		Pounce		https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1542074266-1314	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/				https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare	Specialist	Dilophosaurus	3870	0%	1100	124	5%
1542074249-1279	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare	Specialist	Diplocaulus Gen 2	3900	0%	1130	125	5%
1542074216-1214	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare	Specialist	Gorgosaurus	3900	0%	1550	102	20%
1542074074-935	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	960	126	5%
1542074245-1270	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/		Instant Charge		https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1220	124	5%
1542074312-1402	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	Apex	Alankylosaurus	4200	30%	900	110	5%
1542074114-1012	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/		Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1542074224-1231	https://metahub.info/jwa-dinodex/	Euoplocephalus	https://metahub.info/jwa-dinosaur/euoplocephalus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Euoplocephalus.png	Common	Hatchling	Euoplocephalus	4500	40%	950	112	5%
1542074291-1358	https://metahub.info/jwa-dinodex/	Apatosaurus	https://metahub.info/jwa-dinosaur/apatosaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Apatosaurus.png	Common	Hatchling	Apatosaurus	6000	0%	870	101	5%
1542074089-963	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare	Specialist	Tenontosaurus	4800	0%	850	109	5%
1542074210-1202	https://metahub.info/jwa-dinodex/	Hatzegopteryx	https://metahub.info/jwa-dinosaur/hatzegopteryx/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Hatzegop.png	Common	Hatchling	Hatzegopteryx	4200	0%	930	114	0%
1542074114-1013	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1542074297-1369	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic	Specialist	Ankylosaurus	4800	30%	900	116	5%
1542074272-1323	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic	Specialist	Concavenator	3690	0%	1030	106	5%
1542074107-997	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1542074276-1332	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1542074235-1249	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Adrenaline Pulse		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3840	20%	1300	117	5%
1542074249-1281	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare	Specialist	Diplocaulus Gen 2	3900	0%	1130	125	5%
1542074124-1030	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1542074107-998	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1542074086-961	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary	Apex	Tragodistis	3810	40%	900	124	5%
1542074132-1052	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary	Apex	Pyrritator	3000	0%	1350	129	5%
1542074274-1326	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/		Critical Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1380	129	5%
1542074189-1164	https://metahub.info/jwa-dinodex/	Lythronax	https://metahub.info/jwa-dinosaur/lythronax/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Lythronax.png	Common	Hatchling	Lythronax	3900	0%	890	104	5%
1542074066-917	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/				https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1542074132-1051	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary	Apex	Pyrritator	3000	0%	1350	129	5%
1542074305-1389	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	Apex	Allosinosaurus	4500	15%	1500	106	20%
1542074130-1044	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	3900	0%	920	114	5%
1542074305-1391	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/				https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	Apex	Allosinosaurus	4500	15%	1500	106	20%
1542074232-1248	https://metahub.info/jwa-dinodex/	Einiosaurus	https://metahub.info/jwa-dinosaur/einiosaurus-2/				https://metahub.info/wp-content/uploads/2018/05/Eniosaurus.png	Common	Hatchling	Einiosaurus	4500	15%	1300	114	5%
1542074255-1292	https://metahub.info/jwa-dinodex/	Dimetrodon Gen 2	https://metahub.info/jwa-dinosaur/dimetrodon-gen-2/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon-Gen-2.png	Common	Specialist	Dimetrodon Gen 2	4200	0%	1000	112	5%
1542074241-1262	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare	Specialist	Dsungaripterus	3000	0%	850	110	5%
1542074155-1094	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1200	131	5%
1542074245-1272	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1220	124	5%
1542074214-1213	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/				https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1542074191-1166	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare	Specialist	Koolasuchus Gen 2	4290	0%	1500	124	5%
1542074262-1305	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique	Apex	Diloracheirus	3450	0%	1330	129	5%
1542074176-1136	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary	Specialist	Monolometrodon	3930	0%	900	119	5%
1542074232-1246	https://metahub.info/jwa-dinodex/	Einiosaurus	https://metahub.info/jwa-dinosaur/einiosaurus-2/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Eniosaurus.png	Common	Hatchling	Einiosaurus	4500	15%	1300	114	5%
1542074155-1095	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/		Evasive Strike		https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1200	131	5%
1542074216-1217	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/				https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare	Specialist	Gorgosaurus	3900	0%	1550	102	20%
1542074166-1113	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	830	106	5%
1542074136-1059	https://metahub.info/jwa-dinodex/	Purrusaurus Gen 2	https://metahub.info/jwa-dinosaur/purrusaurus-gen2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_GEN2_result.jpg	Common	Hatchling	Purrusaurus Gen 2	4200	10%	1000	111	20%
1542074128-1043	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary	Apex	Rajakylosaurus	4800	30%	900	104	5%
1542074312-1399	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Long Invicibility		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	Apex	Alankylosaurus	4200	30%	900	110	5%
1542074205-1195	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary	Apex	Indominus Rex	4200	0%	1200	107	20%
1542074201-1185	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare	Specialist	Irritator	4800	0%	1030	123	5%
1542074084-957	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/				https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare	Specialist	Triceratops	4200	20%	1240	115	5%
1542074299-1377	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare	Specialist	Ankylocodon	3900	25%	800	107	20%
1542074299-1376	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Short Defense		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare	Specialist	Ankylocodon	3900	25%	800	107	20%
1542074218-1218	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/		Bellow		https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	900	107	20%
1542074253-1286	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	4200	30%	900	108	5%
1542074107-1000	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/				https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1542074283-1342	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3900	0%	1000	123	20%
1542074226-1235	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1542074201-1186	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare	Specialist	Irritator	4800	0%	1030	123	5%
1542074203-1193	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/				https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique	Apex	Indoraptor	3750	0%	1400	128	20%
1542074187-1160	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique	Apex	Magnapyritor	3000	0%	1400	128	20%
1542074107-996	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1542074153-1091	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1542074228-1238	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1542074111-1010	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/				https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	2940	0%	1330	126	5%
1542074262-1306	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique	Apex	Diloracheirus	3450	0%	1330	129	5%
1542074218-1219	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/		Rampage		https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	900	107	20%
1542074076-937	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare	Specialist	Tuojiangosaurus	4500	0%	1000	112	5%
1542074222-1227	https://metahub.info/jwa-dinodex/	Gallimimus	https://metahub.info/jwa-dinosaur/gallimimus/		Evasive Strike		https://metahub.info/wp-content/uploads/2018/07/Gallimimus.png	Common	Specialist	Gallimimus	1800	0%	1200	130	5%
1542074301-1382	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Specialist	Amargocephalus	4290	40%	850	104	5%
1542074253-1285	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	4200	30%	900	108	5%
1542074283-1344	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3900	0%	1000	123	20%
1542074072-929	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare	Specialist	Tupandactylus	3000	0%	820	109	5%
1542074061-905	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1500	126	5%
1542074283-1343	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3900	0%	1000	123	20%
1542074093-971	https://metahub.info/jwa-dinodex/	Tanycolagreus	https://metahub.info/jwa-dinosaur/tanycolagreus/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/05/Tanycolagreus.png	Common	Alpha	Tanycolagreus	3210	0%	1500	130	5%
1542074220-1223	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	850	107	5%
1542074178-1143	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4350	0%	1000	115	5%
1542074255-1293	https://metahub.info/jwa-dinodex/	Dimetrodon Gen 2	https://metahub.info/jwa-dinosaur/dimetrodon-gen-2/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Dimetrodon-Gen-2.png	Common	Specialist	Dimetrodon Gen 2	4200	0%	1000	112	5%
1542074308-1393	https://metahub.info/jwa-dinodex/	Allosaurus	https://metahub.info/jwa-dinosaur/allosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Allosaurus.png	Common	Hatchling	Allosaurus	4500	0%	1650	104	20%
1542074199-1184	https://metahub.info/jwa-dinodex/	Irritator Gen 2	https://metahub.info/jwa-dinosaur/irritator-gen-2/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_GEN2_result.jpg	Common	Carcass	Irritator Gen 2	4200	0%	1000	122	20%
1542074260-1301	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1100	126	5%
1542074139-1063	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare	Specialist	Purrusaurus	4200	10%	1000	112	5%
1542074264-1308	https://metahub.info/jwa-dinodex/	Dilophosaurus Gen 2	https://metahub.info/jwa-dinosaur/dilophosaurus-gen-2/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus-Gen-2.png	Common	Hatchling	Dilophosaurus Gen 2	2700	0%	1220	121	5%
1542074243-1267	https://metahub.info/jwa-dinodex/	Dracorex Gen 2	https://metahub.info/jwa-dinosaur/dracorex-gen-2/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/Dracorex2.png	Common	Carcass	Dracorex Gen 2	3750	0%	1100	119	5%
1542074128-1041	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary	Apex	Rajakylosaurus	4800	30%	900	104	5%
1542074197-1179	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1542074310-1395	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/		Long Invicibility		https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Survivor	Alanqa	4200	0%	980	116	5%
1542074153-1092	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1542074210-1204	https://metahub.info/jwa-dinodex/	Hatzegopteryx	https://metahub.info/jwa-dinosaur/hatzegopteryx/			Swap In Defense	https://metahub.info/wp-content/uploads/2018/09/Hatzegop.png	Common	Hatchling	Hatzegopteryx	4200	0%	930	114	0%
1542074197-1178	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1542074187-1161	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique	Apex	Magnapyritor	3000	0%	1400	128	20%
1542074220-1222	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	850	107	5%
1542074103-988	https://metahub.info/jwa-dinodex/	Stegosaurus	https://metahub.info/jwa-dinosaur/stegosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Stegosaurus.png	Common	Hatchling	Stegosaurus	4050	15%	1150	116	5%
1542074249-1280	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare	Specialist	Diplocaulus Gen 2	3900	0%	1130	125	5%
1542074134-1054	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1542074120-1023	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic	Specialist	Secodontosaurus	3300	0%	1210	114	5%
1542074297-1370	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic	Specialist	Ankylosaurus	4800	30%	900	116	5%
1542074141-1066	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	112	5%
1542074180-1147	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	3900	0%	860	105	5%
1542074299-1374	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare	Specialist	Ankylocodon	3900	25%	800	107	20%
1542074247-1275	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	4800	0%	1000	120	5%
1542074063-910	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Apex	Utarinex	4200	0%	1330	126	5%
1542074139-1061	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare	Specialist	Purrusaurus	4200	10%	1000	112	5%
1542074185-1154	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1542074237-1256	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare	Specialist	Edmontosaurus	4920	0%	950	107	5%
1542074230-1243	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique	Apex	Erlidominus	3000	0%	1400	125	20%
1542074297-1371	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic	Specialist	Ankylosaurus	4800	30%	900	116	5%
1542074178-1142	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4350	0%	1000	115	5%
1542074084-956	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/		Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare	Specialist	Triceratops	4200	20%	1240	115	5%
1542074076-936	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare	Specialist	Tuojiangosaurus	4500	0%	1000	112	5%
1542074080-950	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique	Apex	Trykosaurus	4500	30%	1640	102	20%
1542074178-1144	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4350	0%	1000	115	5%
1542074162-1104	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare	Specialist	Nodosaurus	4500	25%	1000	115	5%
1542074164-1108	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Bellow		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5250	40%	950	105	5%
1542074287-1352	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5100	0%	1050	102	40%
1542074174-1134	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/				https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic	Specialist	Monolophosaurus	3000	0%	1240	127	5%
1542074182-1151	https://metahub.info/jwa-dinodex/	Majungasaurus	https://metahub.info/jwa-dinosaur/majungasaurus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/05/Majungasaurus.png	Common	Hatchling	Majungasaurus	3660	0%	860	105	5%
1542074251-1282	https://metahub.info/jwa-dinodex/	Diplocaulus	https://metahub.info/jwa-dinosaur/diplocaulus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus.png	Common	Hatchling	Diplocaulus	3000	0%	1100	124	5%
1542074164-1111	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5250	40%	950	105	5%
1542074187-1162	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/			Immunity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique	Apex	Magnapyritor	3000	0%	1400	128	20%
1542074214-1211	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1542074276-1333	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1542074207-1199	https://metahub.info/jwa-dinodex/	Iguanodon	https://metahub.info/jwa-dinosaur/iguanodon/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Iguanodon.png	Common	Hatchling	Iguanodon	4800	0%	850	108	5%
1542074280-1341	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/				https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1542074255-1291	https://metahub.info/jwa-dinodex/	Dimetrodon Gen 2	https://metahub.info/jwa-dinosaur/dimetrodon-gen-2/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon-Gen-2.png	Common	Specialist	Dimetrodon Gen 2	4200	0%	1000	112	5%
1542074080-947	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique	Apex	Trykosaurus	4500	30%	1640	102	20%
1542074103-990	https://metahub.info/jwa-dinodex/	Stegosaurus	https://metahub.info/jwa-dinosaur/stegosaurus/				https://metahub.info/wp-content/uploads/2018/05/Stegosaurus.png	Common	Hatchling	Stegosaurus	4050	15%	1150	116	5%
1542074063-911	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Instant Charge		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Apex	Utarinex	4200	0%	1330	126	5%
1542074301-1381	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Specialist	Amargocephalus	4290	40%	850	104	5%
1542074093-970	https://metahub.info/jwa-dinodex/	Tanycolagreus	https://metahub.info/jwa-dinosaur/tanycolagreus/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Tanycolagreus.png	Common	Alpha	Tanycolagreus	3210	0%	1500	130	5%
1542074147-1081	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1542074278-1337	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/				https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	10%
1542074076-939	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare	Specialist	Tuojiangosaurus	4500	0%	1000	112	5%
1542074134-1055	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/		Wounding Impact		https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1542074228-1237	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1542074235-1252	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3840	20%	1300	117	5%
1542074310-1396	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/		Rampage		https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Survivor	Alanqa	4200	0%	980	116	5%
1542074258-1294	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	4200	0%	1000	113	5%
1542074130-1046	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	3900	0%	920	114	5%
1542074289-1354	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	780	112	5%
1542074168-1119	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4200	30%	1300	117	20%
1542074312-1400	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Rampage		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	Apex	Alankylosaurus	4200	30%	900	110	5%
1542074268-1317	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1300	131	5%
1542074076-940	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/			Swap In Slow	https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare	Specialist	Tuojiangosaurus	4500	0%	1000	112	5%
1542074178-1141	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4350	0%	1000	115	5%
1542074160-1101	https://metahub.info/jwa-dinodex/	Nundasuchus	https://metahub.info/jwa-dinosaur/nundasuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Nundasuchus.png	Common	Specialist	Nundasuchus	3000	0%	1490	128	5%
1542074197-1180	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/		Ferocity Impact		https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1542074095-973	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4260	0%	1000	116	20%
1542074126-1038	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	900	104	20%
1542074080-948	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique	Apex	Trykosaurus	4500	30%	1640	102	20%
1542074264-1309	https://metahub.info/jwa-dinodex/	Dilophosaurus Gen 2	https://metahub.info/jwa-dinosaur/dilophosaurus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus-Gen-2.png	Common	Hatchling	Dilophosaurus Gen 2	2700	0%	1220	121	5%
1542074155-1097	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1200	131	5%
1542074287-1350	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5100	0%	1050	102	40%
1542074268-1316	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/		Pounce		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1300	131	5%
1542074095-974	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Lethal Wound		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4260	0%	1000	116	20%
1542074074-932	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	960	126	5%
1542074068-920	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4200	0%	1650	104	20%
1542074303-1384	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Hatchling	Amargasaurus	5400	0%	1060	103	5%
1542074126-1036	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	900	104	20%
1542074101-987	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3690	0%	1240	129	5%
1542074312-1401	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	Apex	Alankylosaurus	4200	30%	900	110	5%
1542074103-989	https://metahub.info/jwa-dinodex/	Stegosaurus	https://metahub.info/jwa-dinosaur/stegosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Stegosaurus.png	Common	Hatchling	Stegosaurus	4050	15%	1150	116	5%
1542074072-930	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare	Specialist	Tupandactylus	3000	0%	820	109	5%
1542074061-904	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1500	126	5%
1542074101-985	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/		Instant Charge		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3690	0%	1240	129	5%
1542074101-986	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/		Minor Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3690	0%	1240	129	5%
1542074116-1015	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/		Exploit Wound		https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1542074245-1269	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1220	124	5%
1542074212-1206	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic	Specialist	Gryposuchus	4200	20%	1000	116	20%
1542074276-1330	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1542074091-967	https://metahub.info/jwa-dinodex/	Tarbosaurus	https://metahub.info/jwa-dinosaur/tarbosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Tarbosaurus.png	Common	Hatchling	Tarbosaurus	4050	0%	1600	104	40%
1542074134-1056	https://metahub.info/jwa-dinodex/	Pyroraptor	https://metahub.info/jwa-dinosaur/pyroraptor/				https://metahub.info/wp-content/uploads/2018/05/Pyroraptor.png	Epic	Survivor	Pyroraptor	2250	0%	1350	129	10%
1542074197-1181	https://metahub.info/jwa-dinodex/	Kaprosuchus	https://metahub.info/jwa-dinosaur/kaprosuchus/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/05/Kaprosuchus.png	Rare	Survivor	Kaprosuchus	3900	0%	1000	123	5%
1542074074-931	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	960	126	5%
1542074195-1175	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1210	120	5%
1542074241-1263	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare	Specialist	Dsungaripterus	3000	0%	850	110	5%
1542074272-1324	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic	Specialist	Concavenator	3690	0%	1030	106	5%
1542074193-1170	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1542074182-1150	https://metahub.info/jwa-dinodex/	Majungasaurus	https://metahub.info/jwa-dinosaur/majungasaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Majungasaurus.png	Common	Hatchling	Majungasaurus	3660	0%	860	105	5%
1542074145-1075	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/		Ferocious Impact		https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1542074193-1173	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/				https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1542074162-1107	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/				https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare	Specialist	Nodosaurus	4500	25%	1000	115	5%
1542074266-1313	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare	Specialist	Dilophosaurus	3870	0%	1100	124	5%
1542074283-1345	https://metahub.info/jwa-dinodex/	Baryonyx Gen 2	https://metahub.info/jwa-dinosaur/baryonyx-gen-2/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/06/8689E7EC-3A11-4407-BF7E-CF4BC5A073B8.jpeg	Rare	Hatchling	Baryonyx Gen 2	3900	0%	1000	123	20%
1542074232-1247	https://metahub.info/jwa-dinodex/	Einiosaurus	https://metahub.info/jwa-dinosaur/einiosaurus-2/		Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Eniosaurus.png	Common	Hatchling	Einiosaurus	4500	15%	1300	114	5%
1542074258-1297	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	4200	0%	1000	113	5%
1542074143-1071	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare	Specialist	Proceratosaurus	3000	0%	1360	125	5%
1542074295-1367	https://metahub.info/jwa-dinodex/	Ankylosaurus Gen 2	https://metahub.info/jwa-dinosaur/ankylosaurus-gen-2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus-Gen-2.png	Common	Specialist	Ankylosaurus Gen 2	4410	25%	900	112	5%
1542074205-1194	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary	Apex	Indominus Rex	4200	0%	1200	107	20%
1542074116-1018	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/				https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1542074272-1325	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic	Specialist	Concavenator	3690	0%	1030	106	5%
1542074122-1029	https://metahub.info/jwa-dinodex/	Sarcosuchus	https://metahub.info/jwa-dinosaur/sarcosuchus-2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Sarcosuchus_result.jpg	Common	Hatchling	Sarcosuchus	4200	10%	1000	110	5%
1542074120-1026	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic	Specialist	Secodontosaurus	3300	0%	1210	114	5%
1542074253-1288	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	4200	30%	900	108	5%
1542074059-903	https://metahub.info/jwa-dinodex/	Velociraptor	https://metahub.info/jwa-dinosaur/velociraptor/				https://metahub.info/wp-content/uploads/2018/05/Velociraptor.png	Common	Specialist	Velociraptor	1950	0%	1320	132	5%
1542074230-1244	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Strike and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique	Apex	Erlidominus	3000	0%	1400	125	20%
1542074245-1271	https://metahub.info/jwa-dinodex/	Dracorex	https://metahub.info/jwa-dinosaur/dracorex/		Minor Stunning Strike		https://metahub.info/wp-content/uploads/2018/07/JWA_Profile_Dracorex.jpg	Rare	Hatchling	Dracorex	2850	0%	1220	124	5%
1542074260-1300	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1100	126	5%
1542074172-1130	https://metahub.info/jwa-dinodex/	Monolophosaurus Gen 2	https://metahub.info/jwa-dinosaur/monolophosaurus-gen-2/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus-Gen-2.png	Common	Hatchling	Monolophosaurus Gen 2	2400	0%	1200	126	5%
1542074151-1088	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Rampage and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1110	121	5%
1542074124-1031	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1542074082-952	https://metahub.info/jwa-dinodex/	Triceratops Gen 2	https://metahub.info/jwa-dinosaur/triceratops-gen2/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Triceratops-Gen-2.png	Common	Hatchling	Triceratops Gen 2	3600	10%	1150	112	5%
1542074153-1090	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1542074168-1118	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4200	30%	1300	117	20%
1542074203-1191	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique	Apex	Indoraptor	3750	0%	1400	128	20%
1542074111-1008	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Gashing Wound		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	2940	0%	1330	126	5%
1542074070-923	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4200	0%	1700	102	30%
1542074228-1240	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/				https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1542074105-994	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary	Apex	Stegodeus	5100	30%	1020	107	5%
1542074207-1200	https://metahub.info/jwa-dinodex/	Iguanodon	https://metahub.info/jwa-dinosaur/iguanodon/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Iguanodon.png	Common	Hatchling	Iguanodon	4800	0%	850	108	5%
1542074124-1033	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Lockdown Strike		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1542074299-1375	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare	Specialist	Ankylocodon	3900	25%	800	107	20%
1542074105-992	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary	Apex	Stegodeus	5100	30%	1020	107	5%
1542074122-1027	https://metahub.info/jwa-dinodex/	Sarcosuchus	https://metahub.info/jwa-dinosaur/sarcosuchus-2/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Sarcosuchus_result.jpg	Common	Hatchling	Sarcosuchus	4200	10%	1000	110	5%
1542074301-1379	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Impact		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Specialist	Amargocephalus	4290	40%	850	104	5%
1542074191-1168	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare	Specialist	Koolasuchus Gen 2	4290	0%	1500	124	5%
1542074111-1009	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	2940	0%	1330	126	5%
1542074166-1117	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	830	106	5%
1542074195-1174	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1210	120	5%
1542074191-1167	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare	Specialist	Koolasuchus Gen 2	4290	0%	1500	124	5%
1542074176-1137	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary	Specialist	Monolometrodon	3930	0%	900	119	5%
1542074126-1037	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	900	104	20%
1542074258-1295	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	4200	0%	1000	113	5%
1542074111-1007	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	2940	0%	1330	126	5%
1542074141-1067	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	112	5%
1542074203-1192	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Evasive Stance		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique	Apex	Indoraptor	3750	0%	1400	128	20%
1542074278-1335	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/		Rampage		https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	10%
1542074141-1064	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	112	5%
1542074136-1058	https://metahub.info/jwa-dinodex/	Purrusaurus Gen 2	https://metahub.info/jwa-dinosaur/purrusaurus-gen2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_GEN2_result.jpg	Common	Hatchling	Purrusaurus Gen 2	4200	10%	1000	111	20%
1542074082-951	https://metahub.info/jwa-dinodex/	Triceratops Gen 2	https://metahub.info/jwa-dinosaur/triceratops-gen2/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Triceratops-Gen-2.png	Common	Hatchling	Triceratops Gen 2	3600	10%	1150	112	5%
1542074130-1045	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/		Long Protection		https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	3900	0%	920	114	5%
1542074226-1236	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/				https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1542074176-1139	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/			Immunity	https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary	Specialist	Monolometrodon	3930	0%	900	119	5%
1542074147-1077	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Adrenaline Surge		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1542074230-1242	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique	Apex	Erlidominus	3000	0%	1400	125	20%
1542074078-942	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary	Apex	Tryostronix	3750	0%	1150	120	20%
1542074218-1221	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/			Swap In Slow	https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	900	107	20%
1542074095-975	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4260	0%	1000	116	20%
1542074237-1257	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare	Specialist	Edmontosaurus	4920	0%	950	107	5%
1542074086-958	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary	Apex	Tragodistis	3810	40%	900	124	5%
1542074287-1351	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/		Impact		https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5100	0%	1050	102	40%
1542074205-1196	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary	Apex	Indominus Rex	4200	0%	1200	107	20%
1542074193-1171	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1542074185-1152	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1542074109-1004	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Swoop		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary	Apex	Spinotasuchus	3750	0%	1270	129	20%
1542074212-1205	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic	Specialist	Gryposuchus	4200	20%	1000	116	20%
1542074143-1069	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare	Specialist	Proceratosaurus	3000	0%	1360	125	5%
1542074174-1133	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic	Specialist	Monolophosaurus	3000	0%	1240	127	5%
1542074109-1001	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Critical Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary	Apex	Spinotasuchus	3750	0%	1270	129	20%
1542074235-1250	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3840	20%	1300	117	5%
1542074057-900	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/				https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare	Specialist	Wuerhosaurus	4500	20%	1300	115	5%
1542074114-1011	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/		Lethal Wound		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1542074101-984	https://metahub.info/jwa-dinodex/	Stygimoloch	https://metahub.info/jwa-dinosaur/stygimoloch/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch.jpg	Epic	Survivor	Stygimoloch	3690	0%	1240	129	5%
1542074293-1364	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1542074305-1387	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	Apex	Allosinosaurus	4500	15%	1500	106	20%
1542074168-1122	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/				https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4200	30%	1300	117	20%
1542074168-1120	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4200	30%	1300	117	20%
1542074095-976	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4260	0%	1000	116	20%
1542074201-1187	https://metahub.info/jwa-dinodex/	Irritator	https://metahub.info/jwa-dinosaur/irritator/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_result.jpg	Rare	Specialist	Irritator	4800	0%	1030	123	5%
1542074310-1397	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Survivor	Alanqa	4200	0%	980	116	5%
1542074170-1123	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary	Apex	Monomimus	3600	0%	1300	129	5%
1542074305-1390	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Instant Charge		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	Apex	Allosinosaurus	4500	15%	1500	106	20%
1542074061-907	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1500	126	5%
1542074172-1129	https://metahub.info/jwa-dinodex/	Monolophosaurus Gen 2	https://metahub.info/jwa-dinosaur/monolophosaurus-gen-2/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus-Gen-2.png	Common	Hatchling	Monolophosaurus Gen 2	2400	0%	1200	126	5%
1542074270-1320	https://metahub.info/jwa-dinodex/	Deinocheirus	https://metahub.info/jwa-dinosaur/deinocheirus/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Deinocheirus.png	Common	Hatchling	Deinocheirus	3000	0%	1270	130	5%
1542074172-1128	https://metahub.info/jwa-dinodex/	Monolophosaurus Gen 2	https://metahub.info/jwa-dinosaur/monolophosaurus-gen-2/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus-Gen-2.png	Common	Hatchling	Monolophosaurus Gen 2	2400	0%	1200	126	5%
1542074114-1014	https://metahub.info/jwa-dinodex/	Spinosaurus Gen 2	https://metahub.info/jwa-dinosaur/spinosaurus-gen2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinosaurus_GEN2_result.jpg	Epic	Survivor	Spinosaurus Gen 2	3900	0%	1110	122	5%
1542074280-1338	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/		Pounce		https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1542074126-1035	https://metahub.info/jwa-dinodex/	Rajasaurus	https://metahub.info/jwa-dinosaur/rajasaurus/		Extended Critical Strike		https://metahub.info/wp-content/uploads/2018/05/Rajasaurus.png	Epic	Alpha	Rajasaurus	4020	0%	900	104	20%
1542074274-1329	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1380	129	5%
1542074128-1042	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary	Apex	Rajakylosaurus	4800	30%	900	104	5%
1542074187-1158	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique	Apex	Magnapyritor	3000	0%	1400	128	20%
1542074091-968	https://metahub.info/jwa-dinodex/	Tarbosaurus	https://metahub.info/jwa-dinosaur/tarbosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Tarbosaurus.png	Common	Hatchling	Tarbosaurus	4050	0%	1600	104	40%
1542074203-1189	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique	Apex	Indoraptor	3750	0%	1400	128	20%
1542074241-1264	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare	Specialist	Dsungaripterus	3000	0%	850	110	5%
1542074289-1357	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/			Swap In Invincibility	https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	780	112	5%
1542074293-1365	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1542074174-1131	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic	Specialist	Monolophosaurus	3000	0%	1240	127	5%
1542074139-1062	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare	Specialist	Purrusaurus	4200	10%	1000	112	5%
1542074086-959	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Long Invicibility		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary	Apex	Tragodistis	3810	40%	900	124	5%
1542074084-954	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare	Specialist	Triceratops	4200	20%	1240	115	5%
1542074185-1156	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1542074235-1251	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3840	20%	1300	117	5%
1542074057-899	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare	Specialist	Wuerhosaurus	4500	20%	1300	115	5%
1542074162-1105	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare	Specialist	Nodosaurus	4500	25%	1000	115	5%
1542074143-1072	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/				https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare	Specialist	Proceratosaurus	3000	0%	1360	125	5%
1542074285-1346	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1542074118-1019	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/		Instant Charge		https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	3900	25%	1250	116	5%
1542074176-1138	https://metahub.info/jwa-dinodex/	Monolometrodon	https://metahub.info/jwa-dinosaur/monolometrodon/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/09/Monomoletrodon.png	Legendary	Specialist	Monolometrodon	3930	0%	900	119	5%
1542074220-1226	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	850	107	5%
1542074164-1112	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5250	40%	950	105	5%
1542074180-1148	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	3900	0%	860	105	5%
1542074268-1318	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1300	131	5%
1542074301-1378	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Specialist	Amargocephalus	4290	40%	850	104	5%
1542074147-1078	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1542074105-991	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary	Apex	Stegodeus	5100	30%	1020	107	5%
1542074228-1239	https://metahub.info/jwa-dinodex/	Erlikosaurus	https://metahub.info/jwa-dinosaur/erlikosaurus/		Strike and Run		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus.png	Epic	Alpha	Erlikosaurus	3090	0%	1400	129	5%
1542074193-1172	https://metahub.info/jwa-dinodex/	Koolasuchus	https://metahub.info/jwa-dinosaur/koolasuchus/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Koolasuchus.png	Epic	Survivor	Koolasuchus	4500	0%	1000	125	5%
1542074187-1159	https://metahub.info/jwa-dinodex/	Magnapyritor	https://metahub.info/jwa-dinosaur/magnapyritor/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Magnapyritor_result.jpg	Unique	Apex	Magnapyritor	3000	0%	1400	128	20%
1542074160-1102	https://metahub.info/jwa-dinodex/	Nundasuchus	https://metahub.info/jwa-dinosaur/nundasuchus/		Strike		https://metahub.info/wp-content/uploads/2018/05/Nundasuchus.png	Common	Specialist	Nundasuchus	3000	0%	1490	128	5%
1542074191-1169	https://metahub.info/jwa-dinodex/	Koolasuchus Gen 2	https://metahub.info/jwa-dinosaur/koolasuchus-gen-2/				https://metahub.info/wp-content/uploads/2018/05/Koolasuchus-Gen-2.png	Rare	Specialist	Koolasuchus Gen 2	4290	0%	1500	124	5%
1542074251-1284	https://metahub.info/jwa-dinodex/	Diplocaulus	https://metahub.info/jwa-dinosaur/diplocaulus/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Diplocaulus.png	Common	Hatchling	Diplocaulus	3000	0%	1100	124	5%
1542074132-1049	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary	Apex	Pyrritator	3000	0%	1350	129	5%
1542074072-928	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare	Specialist	Tupandactylus	3000	0%	820	109	5%
1542074258-1296	https://metahub.info/jwa-dinodex/	Dimetrodon	https://metahub.info/jwa-dinosaur/dimetrodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Dimetrodon.png	Rare	Survivor	Dimetrodon	4200	0%	1000	113	5%
1542074164-1110	https://metahub.info/jwa-dinodex/	Nodopatotitan	https://metahub.info/jwa-dinosaur/nodopatotitan/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Nodopatitain.png	Legendary	Survivor	Nodopatotitan	5250	40%	950	105	5%
1542074070-925	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/				https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4200	0%	1700	102	30%
1542074249-1278	https://metahub.info/jwa-dinodex/	Diplocaulus Gen 2	https://metahub.info/jwa-dinosaur/diplocaulus-gen-2/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Diplocaulus-Gen-2.png	Rare	Specialist	Diplocaulus Gen 2	3900	0%	1130	125	5%
1542074266-1311	https://metahub.info/jwa-dinodex/	Dilophosaurus	https://metahub.info/jwa-dinosaur/dilophosaurus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus.png	Rare	Specialist	Dilophosaurus	3870	0%	1100	124	5%
1542074268-1315	https://metahub.info/jwa-dinodex/	Delta	https://metahub.info/jwa-dinosaur/delta/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Delta_Card.jpg	Rare	Survivor	Delta	2400	0%	1300	131	5%
1542074185-1157	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1542074270-1321	https://metahub.info/jwa-dinodex/	Deinocheirus	https://metahub.info/jwa-dinosaur/deinocheirus/				https://metahub.info/wp-content/uploads/2018/05/Deinocheirus.png	Common	Hatchling	Deinocheirus	3000	0%	1270	130	5%
1542074120-1025	https://metahub.info/jwa-dinodex/	Secodontosaurus	https://metahub.info/jwa-dinosaur/secodontosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Secodontosaurus.png	Epic	Specialist	Secodontosaurus	3300	0%	1210	114	5%
1542074285-1349	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/				https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1542074195-1176	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1210	120	5%
1542074109-1002	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Lethal Wound		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary	Apex	Spinotasuchus	3750	0%	1270	129	20%
1542074295-1368	https://metahub.info/jwa-dinodex/	Ankylosaurus Gen 2	https://metahub.info/jwa-dinosaur/ankylosaurus-gen-2/				https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus-Gen-2.png	Common	Specialist	Ankylosaurus Gen 2	4410	25%	900	112	5%
1542074297-1372	https://metahub.info/jwa-dinodex/	Ankylosaurus	https://metahub.info/jwa-dinosaur/ankylosaurus/				https://metahub.info/wp-content/uploads/2018/05/Ankylosaurus.png	Epic	Specialist	Ankylosaurus	4800	30%	900	116	5%
1542074109-1005	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary	Apex	Spinotasuchus	3750	0%	1270	129	20%
1542074278-1336	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	10%
1542074157-1099	https://metahub.info/jwa-dinodex/	Ophiacodon	https://metahub.info/jwa-dinosaur/ophiacodon/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/05/Ophiacodon.png	Common	Hatchling	Ophiacodon	4200	0%	1000	107	40%
1542074095-977	https://metahub.info/jwa-dinodex/	Suchotator	https://metahub.info/jwa-dinosaur/suchotator/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Suchotator_result.jpg	Rare	Alpha	Suchotator	4260	0%	1000	116	20%
1542074222-1229	https://metahub.info/jwa-dinodex/	Gallimimus	https://metahub.info/jwa-dinosaur/gallimimus/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Gallimimus.png	Common	Specialist	Gallimimus	1800	0%	1200	130	5%
1542074070-924	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4200	0%	1700	102	30%
1542074214-1210	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1542074107-999	https://metahub.info/jwa-dinodex/	Stegoceratops	https://metahub.info/jwa-dinosaur/stegoceratops/		Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Stegoceratops.png	Epic	Alpha	Stegoceratops	4440	25%	1300	110	5%
1542074289-1356	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	780	112	5%
1542074243-1268	https://metahub.info/jwa-dinodex/	Dracorex Gen 2	https://metahub.info/jwa-dinosaur/dracorex-gen-2/			Swap In Strike	https://metahub.info/wp-content/uploads/2018/06/Dracorex2.png	Common	Carcass	Dracorex Gen 2	3750	0%	1100	119	5%
1542074199-1183	https://metahub.info/jwa-dinodex/	Irritator Gen 2	https://metahub.info/jwa-dinosaur/irritator-gen-2/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Irritator_GEN2_result.jpg	Common	Carcass	Irritator Gen 2	4200	0%	1000	122	20%
1542074287-1353	https://metahub.info/jwa-dinodex/	Argentinosaurus	https://metahub.info/jwa-dinosaur/argentinosaurus/				https://metahub.info/wp-content/uploads/2018/05/Argentinosaurus.png	Rare	Survivor	Argentinosaurus	5100	0%	1050	102	40%
1542074089-965	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare	Specialist	Tenontosaurus	4800	0%	850	109	5%
1542074143-1070	https://metahub.info/jwa-dinodex/	Proceratosaurus	https://metahub.info/jwa-dinosaur/proceratosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Proceratosaurus.png	Rare	Specialist	Proceratosaurus	3000	0%	1360	125	5%
1542074312-1403	https://metahub.info/jwa-dinodex/	Alankylosaurus	https://metahub.info/jwa-dinosaur/alankylosaurus/			Swap In Invincibility	https://metahub.info/wp-content/uploads/2018/09/Alankylosaurus.png	Legendary	Apex	Alankylosaurus	4200	30%	900	110	5%
1542074124-1034	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/			Swap In Defense	https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1542074141-1068	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	112	5%
1542074207-1201	https://metahub.info/jwa-dinodex/	Iguanodon	https://metahub.info/jwa-dinosaur/iguanodon/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Iguanodon.png	Common	Hatchling	Iguanodon	4800	0%	850	108	5%
1542074185-1153	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1542074239-1260	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/		Strike		https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare	Specialist	Echo	2700	0%	1300	128	5%
1542074224-1230	https://metahub.info/jwa-dinodex/	Euoplocephalus	https://metahub.info/jwa-dinosaur/euoplocephalus/		Impact		https://metahub.info/wp-content/uploads/2018/05/Euoplocephalus.png	Common	Hatchling	Euoplocephalus	4500	40%	950	112	5%
1542074160-1103	https://metahub.info/jwa-dinodex/	Nundasuchus	https://metahub.info/jwa-dinosaur/nundasuchus/				https://metahub.info/wp-content/uploads/2018/05/Nundasuchus.png	Common	Specialist	Nundasuchus	3000	0%	1490	128	5%
1542074149-1084	https://metahub.info/jwa-dinodex/	Parasaurolophus	https://metahub.info/jwa-dinosaur/parasaurolophus/				https://metahub.info/wp-content/uploads/2018/05/Parasaurolophus.png	Common	Hatchling	Parasaurolophus	5100	0%	890	113	5%
1542074082-953	https://metahub.info/jwa-dinodex/	Triceratops Gen 2	https://metahub.info/jwa-dinosaur/triceratops-gen2/			Swap In Stun	https://metahub.info/wp-content/uploads/2018/05/Triceratops-Gen-2.png	Common	Hatchling	Triceratops Gen 2	3600	10%	1150	112	5%
1542074239-1261	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/				https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare	Specialist	Echo	2700	0%	1300	128	5%
1542074093-972	https://metahub.info/jwa-dinodex/	Tanycolagreus	https://metahub.info/jwa-dinosaur/tanycolagreus/				https://metahub.info/wp-content/uploads/2018/05/Tanycolagreus.png	Common	Alpha	Tanycolagreus	3210	0%	1500	130	5%
1542074293-1361	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1542074239-1259	https://metahub.info/jwa-dinodex/	Echo	https://metahub.info/jwa-dinosaur/echo/		Pounce		https://metahub.info/wp-content/uploads/2018/06/20C100B3-BD29-4C47-A7D2-F705A35FFDDA.jpeg	Rare	Specialist	Echo	2700	0%	1300	128	5%
1542074066-916	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1542074157-1100	https://metahub.info/jwa-dinodex/	Ophiacodon	https://metahub.info/jwa-dinosaur/ophiacodon/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Ophiacodon.png	Common	Hatchling	Ophiacodon	4200	0%	1000	107	40%
1542074264-1310	https://metahub.info/jwa-dinodex/	Dilophosaurus Gen 2	https://metahub.info/jwa-dinosaur/dilophosaurus-gen-2/			Swap In Distraction	https://metahub.info/wp-content/uploads/2018/05/Dilophosaurus-Gen-2.png	Common	Hatchling	Dilophosaurus Gen 2	2700	0%	1220	121	5%
1542074072-926	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare	Specialist	Tupandactylus	3000	0%	820	109	5%
1542074291-1359	https://metahub.info/jwa-dinodex/	Apatosaurus	https://metahub.info/jwa-dinosaur/apatosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Apatosaurus.png	Common	Hatchling	Apatosaurus	6000	0%	870	101	5%
1542074118-1020	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	3900	25%	1250	116	5%
1542074216-1215	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare	Specialist	Gorgosaurus	3900	0%	1550	102	20%
1542074214-1209	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1542074274-1328	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1380	129	5%
1542074205-1197	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/		Cloak		https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary	Apex	Indominus Rex	4200	0%	1200	107	20%
1542074145-1076	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/				https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1542074080-946	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique	Apex	Trykosaurus	4500	30%	1640	102	20%
1542074253-1289	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	4200	30%	900	108	5%
1542074299-1373	https://metahub.info/jwa-dinodex/	Ankylocodon	https://metahub.info/jwa-dinosaur/ankylocodon/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/07/Ankylocodon-1.png	Rare	Specialist	Ankylocodon	3900	25%	800	107	20%
1542074301-1380	https://metahub.info/jwa-dinodex/	Amargocephalus	https://metahub.info/jwa-dinosaur/amargocephalus-2/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Amargocephalus.png	Epic	Specialist	Amargocephalus	4290	40%	850	104	5%
1542074099-983	https://metahub.info/jwa-dinodex/	Stygimoloch Gen 2	https://metahub.info/jwa-dinosaur/stygimoloch-gen-2/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch_GEN2.jpg	Common	Carcass	Stygimoloch Gen 2	3810	0%	1200	128	5%
1542074130-1047	https://metahub.info/jwa-dinodex/	Quetzalcoatlus	https://metahub.info/jwa-dinosaur/quetzalcoatlus/			Swap In Defense	https://metahub.info/wp-content/uploads/2018/09/Quetzal-.png	Rare	Hatchling	Quetzalcoatlus	3900	0%	920	114	5%
1542074216-1216	https://metahub.info/jwa-dinodex/	Gorgosaurus	https://metahub.info/jwa-dinosaur/gorgosaurus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosaurus.png	Rare	Specialist	Gorgosaurus	3900	0%	1550	102	20%
1542074109-1003	https://metahub.info/jwa-dinodex/	Spinotasuchus	https://metahub.info/jwa-dinosaur/spinotasuchus/		Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Spinotasuchus_result.jpg	Legendary	Apex	Spinotasuchus	3750	0%	1270	129	20%
1542074274-1327	https://metahub.info/jwa-dinodex/	Charlie	https://metahub.info/jwa-dinosaur/charlie/		Pounce		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Charlie.jpg	Rare	Survivor	Charlie	2100	0%	1380	129	5%
1542074057-898	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare	Specialist	Wuerhosaurus	4500	20%	1300	115	5%
1542074151-1087	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1110	121	5%
1542074262-1304	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique	Apex	Diloracheirus	3450	0%	1330	129	5%
1542074241-1265	https://metahub.info/jwa-dinodex/	Dsungaripterus	https://metahub.info/jwa-dinosaur/dsungariptus/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/09/Dsungarip.png	Rare	Specialist	Dsungaripterus	3000	0%	850	110	5%
1542074237-1255	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/		Strike and Run		https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare	Specialist	Edmontosaurus	4920	0%	950	107	5%
1542074222-1228	https://metahub.info/jwa-dinodex/	Gallimimus	https://metahub.info/jwa-dinosaur/gallimimus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Gallimimus.png	Common	Specialist	Gallimimus	1800	0%	1200	130	5%
1542074132-1048	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary	Apex	Pyrritator	3000	0%	1350	129	5%
1542074180-1145	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	3900	0%	860	105	5%
1542074145-1074	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1542074089-964	https://metahub.info/jwa-dinodex/	Tenontosaurus	https://metahub.info/jwa-dinosaur/tenontosaurus/		Greater Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Tenontosaurus.png	Rare	Specialist	Tenontosaurus	4800	0%	850	109	5%
1542074212-1208	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/				https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic	Specialist	Gryposuchus	4200	20%	1000	116	20%
1542074285-1347	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/		Defense Shattering Rampage		https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1542074097-978	https://metahub.info/jwa-dinodex/	Suchomimus	https://metahub.info/jwa-dinosaur/suchomimus/		Gashing Wound		https://metahub.info/wp-content/uploads/2018/05/Suchomimus.png	Common	Specialist	Suchomimus	3630	0%	700	115	5%
1542074136-1057	https://metahub.info/jwa-dinodex/	Purrusaurus Gen 2	https://metahub.info/jwa-dinosaur/purrusaurus-gen2/		Lockdown Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_GEN2_result.jpg	Common	Hatchling	Purrusaurus Gen 2	4200	10%	1000	111	20%
1542074168-1121	https://metahub.info/jwa-dinodex/	Monostegotops	https://metahub.info/jwa-dinosaur/monostegotops/		Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Monostegotops.png	Legendary	Alpha	Monostegotops	4200	30%	1300	117	20%
1542074147-1079	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1542074189-1165	https://metahub.info/jwa-dinodex/	Lythronax	https://metahub.info/jwa-dinosaur/lythronax/			Counter-attack (1)	https://metahub.info/wp-content/uploads/2018/05/Lythronax.png	Common	Hatchling	Lythronax	3900	0%	890	104	5%
1542074272-1322	https://metahub.info/jwa-dinodex/	Concavenator	https://metahub.info/jwa-dinosaur/concavenator/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Concavenator.jpg	Epic	Specialist	Concavenator	3690	0%	1030	106	5%
1542074061-908	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/				https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1500	126	5%
1542074291-1360	https://metahub.info/jwa-dinodex/	Apatosaurus	https://metahub.info/jwa-dinosaur/apatosaurus/				https://metahub.info/wp-content/uploads/2018/05/Apatosaurus.png	Common	Hatchling	Apatosaurus	6000	0%	870	101	5%
1542074230-1245	https://metahub.info/jwa-dinodex/	Erlidominus	https://metahub.info/jwa-dinosaur/erlidominus/			Immunity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Erlidominus_result.jpg	Unique	Apex	Erlidominus	3000	0%	1400	125	20%
1542074170-1124	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Evasive Stance		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary	Apex	Monomimus	3600	0%	1300	129	5%
1542074061-906	https://metahub.info/jwa-dinodex/	Utasinoraptor	https://metahub.info/jwa-dinosaur/utasinoraptor/		Instant Charge		https://metahub.info/wp-content/uploads/2018/05/Utasinoraptor.png	Legendary	Alpha	Utasinoraptor	3000	15%	1500	126	5%
1542074111-1006	https://metahub.info/jwa-dinodex/	Spinotahraptor	https://metahub.info/jwa-dinosaur/spinotahraptor/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Spinotahraptor.png	Epic	Alpha	Spinotahraptor	2940	0%	1330	126	5%
1542074063-909	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Apex	Utarinex	4200	0%	1330	126	5%
1542074305-1388	https://metahub.info/jwa-dinodex/	Allosinosaurus	https://metahub.info/jwa-dinosaur/allosinosaurus/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Allosinosaurus.png	Legendary	Apex	Allosinosaurus	4500	15%	1500	106	20%
1542074237-1254	https://metahub.info/jwa-dinodex/	Edmontosaurus	https://metahub.info/jwa-dinosaur/edmontosaurus/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Edmontosaurus.png	Rare	Specialist	Edmontosaurus	4920	0%	950	107	5%
1542074260-1299	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Greater Stunning Rampage		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1100	126	5%
1542074147-1080	https://metahub.info/jwa-dinodex/	Postimetrodon	https://metahub.info/jwa-dinosaur/postimetrodon/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Postimetrodon.png	Epic	Alpha	Postimetrodon	4200	0%	1000	124	5%
1542074205-1198	https://metahub.info/jwa-dinodex/	Indominus Rex	https://metahub.info/jwa-dinosaur/indominus-rex/			Immunity	https://metahub.info/wp-content/uploads/2018/05/Indominus-Rex.png	Legendary	Apex	Indominus Rex	4200	0%	1200	107	20%
1542074182-1149	https://metahub.info/jwa-dinodex/	Majungasaurus	https://metahub.info/jwa-dinosaur/majungasaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Majungasaurus.png	Common	Hatchling	Majungasaurus	3660	0%	860	105	5%
1542074260-1302	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/				https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1100	126	5%
1542074243-1266	https://metahub.info/jwa-dinodex/	Dracorex Gen 2	https://metahub.info/jwa-dinosaur/dracorex-gen-2/		Impact and Run		https://metahub.info/wp-content/uploads/2018/06/Dracorex2.png	Common	Carcass	Dracorex Gen 2	3750	0%	1100	119	5%
1542074180-1146	https://metahub.info/jwa-dinodex/	Megalosaurus	https://metahub.info/jwa-dinosaur/megalosaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Megalosaurus.png	Rare	Hatchling	Megalosaurus	3900	0%	860	105	5%
1542074218-1220	https://metahub.info/jwa-dinodex/	Giraffatitan	https://metahub.info/jwa-dinosaur/giraffatitan/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/07/Giraffatitan.png	Rare	Survivor	Giraffatitan	5550	10%	900	107	20%
1542074151-1086	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/		Instant Charge		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1110	121	5%
1542074226-1234	https://metahub.info/jwa-dinodex/	Erlikosaurus Gen 2	https://metahub.info/jwa-dinosaur/erlikosaurus-gen-2/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/05/Erlikosaurus-Gen-2.png	Rare	Survivor	Erlikosaurus Gen 2	3150	0%	1280	128	5%
1542074066-914	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1542074278-1334	https://metahub.info/jwa-dinodex/	Brachiosaurus	https://metahub.info/jwa-dinosaur/brachiosaurus/		Bellow		https://metahub.info/wp-content/uploads/2018/07/Brachiosaurus-1.png	Epic	Alpha	Brachiosaurus	5700	10%	1050	111	10%
1542074128-1040	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary	Apex	Rajakylosaurus	4800	30%	900	104	5%
1542074153-1093	https://metahub.info/jwa-dinodex/	Ouranosaurus	https://metahub.info/jwa-dinosaur/ouranosaurus/				https://metahub.info/wp-content/uploads/2018/05/Ouranosaurus.png	Epic	Alpha	Ouranosaurus	4830	0%	1050	114	5%
1542074166-1116	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	830	106	5%
1542074308-1392	https://metahub.info/jwa-dinodex/	Allosaurus	https://metahub.info/jwa-dinosaur/allosaurus/		Armor Piercing Impact		https://metahub.info/wp-content/uploads/2018/05/Allosaurus.png	Common	Hatchling	Allosaurus	4500	0%	1650	104	20%
1542074078-943	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary	Apex	Tryostronix	3750	0%	1150	120	20%
1542074128-1039	https://metahub.info/jwa-dinodex/	Rajakylosaurus	https://metahub.info/jwa-dinosaur/rajakylosaurus/		Extended Critical Strike		https://metahub.info/wp-content/uploads/2018/05/Rajakylosaurus.png	Legendary	Apex	Rajakylosaurus	4800	30%	900	104	5%
1542074189-1163	https://metahub.info/jwa-dinodex/	Lythronax	https://metahub.info/jwa-dinosaur/lythronax/		Long Protection		https://metahub.info/wp-content/uploads/2018/05/Lythronax.png	Common	Hatchling	Lythronax	3900	0%	890	104	5%
1542074170-1126	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary	Apex	Monomimus	3600	0%	1300	129	5%
1542074303-1385	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Hatchling	Amargasaurus	5400	0%	1060	103	5%
1542074303-1383	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/		Decelerating Impact		https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Hatchling	Amargasaurus	5400	0%	1060	103	5%
1542074253-1287	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	4200	30%	900	108	5%
1542074235-1253	https://metahub.info/jwa-dinodex/	Einiasuchus	https://metahub.info/jwa-dinosaur/einiasuchus/				https://metahub.info/wp-content/uploads/2018/05/Einiasuchus.png	Rare	Survivor	Einiasuchus	3840	20%	1300	117	5%
1542074293-1362	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1542074080-949	https://metahub.info/jwa-dinodex/	Trykosaurus	https://metahub.info/jwa-dinosaur/trykosaurus/		Instant Invincibility		https://metahub.info/wp-content/uploads/2018/05/Trykosaurus.png	Unique	Apex	Trykosaurus	4500	30%	1640	102	20%
1542074151-1089	https://metahub.info/jwa-dinodex/	Paramoloch	https://metahub.info/jwa-dinosaur/paramoloch/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Paramoloch.jpg	Legendary	Alpha	Paramoloch	4800	0%	1110	121	5%
1542074285-1348	https://metahub.info/jwa-dinodex/	Baryonyx	https://metahub.info/jwa-dinosaur/baryonyx/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/012C3A16-3782-437F-A5DE-06A6FE1129C1.jpeg	Epic	Survivor	Baryonyx	3750	0%	1240	124	20%
1542074074-934	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Slowing Impact		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	960	126	5%
1542074074-933	https://metahub.info/jwa-dinodex/	Tuoramoloch	https://metahub.info/jwa-dinosaur/tuoramoloch/		Low Stunning Strike		https://metahub.info/wp-content/uploads/2018/07/Tuaromoloch.png	Unique	Alpha	Tuoramoloch	4800	0%	960	126	5%
1542074310-1398	https://metahub.info/jwa-dinodex/	Alanqa	https://metahub.info/jwa-dinosaur/alanqa/			Swap In Invincibility	https://metahub.info/wp-content/uploads/2018/09/Alanqa.png	Epic	Survivor	Alanqa	4200	0%	980	116	5%
1542074066-915	https://metahub.info/jwa-dinodex/	Utahraptor	https://metahub.info/jwa-dinosaur/utahraptor/		Pounce		https://metahub.info/wp-content/uploads/2018/05/Utahraptor.png	Rare	Survivor	Utahraptor	2520	0%	1350	128	5%
1542074210-1203	https://metahub.info/jwa-dinodex/	Hatzegopteryx	https://metahub.info/jwa-dinosaur/hatzegopteryx/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/09/Hatzegop.png	Common	Hatchling	Hatzegopteryx	4200	0%	930	114	0%
1542074280-1340	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/		Strike		https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1542074105-995	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary	Apex	Stegodeus	5100	30%	1020	107	5%
1542074068-919	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/		Armor Piercing Rampage		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4200	0%	1650	104	20%
1542074068-921	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex Gen 2	https://metahub.info/jwa-dinosaur/tyrannosaurus-gen2/				https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex-Gen-2.png	Rare	Hatchling	Tyrannosaurus Rex Gen 2	4200	0%	1650	104	20%
1542074174-1132	https://metahub.info/jwa-dinodex/	Monolophosaurus	https://metahub.info/jwa-dinosaur/monolophosaurus/		Distracting Strike		https://metahub.info/wp-content/uploads/2018/05/Monolophosaurus.png	Epic	Specialist	Monolophosaurus	3000	0%	1240	127	5%
1542074057-897	https://metahub.info/jwa-dinodex/	Wuerhosaurus	https://metahub.info/jwa-dinosaur/wuerhosaurus/		Crippling Distraction		https://metahub.info/wp-content/uploads/2018/05/Werhosaurus.png	Rare	Specialist	Wuerhosaurus	4500	20%	1300	115	5%
1542074247-1277	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/				https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	4800	0%	1000	120	5%
1542074124-1032	https://metahub.info/jwa-dinodex/	Sarcorixis	https://metahub.info/jwa-dinosaur/sarcorixis/		Greater Stunning Impact		https://metahub.info/wp-content/uploads/2018/07/Sarcorixi.png	Epic	Survivor	Sarcorixis	3840	15%	1300	117	5%
1542074178-1140	https://metahub.info/jwa-dinodex/	Megalosuchus	https://metahub.info/jwa-dinosaur/megalosuchus/		Critical Impact		https://metahub.info/wp-content/uploads/2018/05/Megalosuchus.png	Legendary	Alpha	Megalosuchus	4350	0%	1000	115	5%
1542074220-1224	https://metahub.info/jwa-dinodex/	Gigaspikasaur	https://metahub.info/jwa-dinosaur/gigaspikasaur/		Lockdown Strike		https://metahub.info/wp-content/uploads/2018/05/Gigaspikasaur.png	Legendary	Survivor	Gigaspikasaur	4650	40%	850	107	5%
1542074118-1021	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/		Stunning Impact		https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	3900	25%	1250	116	5%
1542074078-945	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/			Immunity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary	Apex	Tryostronix	3750	0%	1150	120	20%
1542074166-1115	https://metahub.info/jwa-dinodex/	Nodopatosaurus	https://metahub.info/jwa-dinosaur/nodopatasaurus/		Pinning Strike		https://metahub.info/wp-content/uploads/2018/05/Nodopatosaurus.png	Epic	Survivor	Nodopatosaurus	4800	25%	830	106	5%
1542074303-1386	https://metahub.info/jwa-dinodex/	Amargasaurus	https://metahub.info/jwa-dinosaur/amargasaurus/				https://metahub.info/wp-content/uploads/2018/05/Amargasaurus.png	Rare	Hatchling	Amargasaurus	5400	0%	1060	103	5%
1542074132-1050	https://metahub.info/jwa-dinodex/	Pyrritator	https://metahub.info/jwa-dinosaur/pyrritator/		Distracting Rampage		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Pyrritator_result.jpg	Legendary	Apex	Pyrritator	3000	0%	1350	129	5%
1542074247-1274	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Defense Shattering Strike		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	4800	0%	1000	120	5%
1542074289-1355	https://metahub.info/jwa-dinodex/	Arambourgiania	https://metahub.info/jwa-dinosaur/arambourgiania/		Short Defense		https://metahub.info/wp-content/uploads/2018/09/Arambourgiana.png	Rare	Survivor	Arambourgiania	4500	0%	780	112	5%
1542074078-941	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Armor Piercing Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary	Apex	Tryostronix	3750	0%	1150	120	20%
1542074118-1022	https://metahub.info/jwa-dinodex/	Sinoceratops	https://metahub.info/jwa-dinosaur/sinoceratops/				https://metahub.info/wp-content/uploads/2018/05/Sinoceratops.png	Epic	Survivor	Sinoceratops	3900	25%	1250	116	5%
1542074195-1177	https://metahub.info/jwa-dinodex/	Kentrosaurus	https://metahub.info/jwa-dinosaur/kentrosaurus/			Counter-Attack (0.5)	https://metahub.info/wp-content/uploads/2018/05/Kentrosaurus.png	Epic	Survivor	Kentrosaurus	4050	0%	1210	120	5%
1542074260-1298	https://metahub.info/jwa-dinodex/	Diloranosaurus	https://metahub.info/jwa-dinosaur/diloranosaurus/		Distracting Impact		https://metahub.info/wp-content/uploads/2018/07/Diloranosaurus.png	Legendary	Alpha	Diloranosaurus	4200	0%	1100	126	5%
1542074262-1307	https://metahub.info/jwa-dinodex/	Diloracheirus	https://metahub.info/jwa-dinosaur/diloracheirus/				https://metahub.info/wp-content/uploads/2018/09/Diloracherius.png	Unique	Apex	Diloracheirus	3450	0%	1330	129	5%
1542074212-1207	https://metahub.info/jwa-dinodex/	Gryposuchus	https://metahub.info/jwa-dinosaur/gryposuchus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/07/Gyprosuchus.png	Epic	Specialist	Gryposuchus	4200	20%	1000	116	20%
1542074063-913	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/				https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Apex	Utarinex	4200	0%	1330	126	5%
1542074155-1096	https://metahub.info/jwa-dinodex/	Ornithomimus	https://metahub.info/jwa-dinosaur/ornithomimus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/07/Ornithomimus.png	Rare	Survivor	Ornithomimus	2700	0%	1200	131	5%
1542074122-1028	https://metahub.info/jwa-dinodex/	Sarcosuchus	https://metahub.info/jwa-dinosaur/sarcosuchus-2/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Sarcosuchus_result.jpg	Common	Hatchling	Sarcosuchus	4200	10%	1000	110	5%
1542074224-1232	https://metahub.info/jwa-dinodex/	Euoplocephalus	https://metahub.info/jwa-dinosaur/euoplocephalus/				https://metahub.info/wp-content/uploads/2018/05/Euoplocephalus.png	Common	Hatchling	Euoplocephalus	4500	40%	950	112	5%
1542074214-1212	https://metahub.info/jwa-dinodex/	Gorgosuchus	https://metahub.info/jwa-dinosaur/gorgosuchus/		Ferocious Strike		https://metahub.info/wp-content/uploads/2018/05/Gorgosuchus.png	Epic	Survivor	Gorgosuchus	3600	0%	1360	120	20%
1542074145-1073	https://metahub.info/jwa-dinodex/	Postosuchus	https://metahub.info/jwa-dinosaur/postosuchus/		Adrenaline Pulse		https://metahub.info/wp-content/uploads/2018/05/Postosuchus.png	Rare	Survivor	Postosuchus	3600	0%	1400	126	5%
1542074070-922	https://metahub.info/jwa-dinodex/	Tyrannosaurus Rex	https://metahub.info/jwa-dinosaur/tyrannosaurus-rex/		Defense Shattering Impact		https://metahub.info/wp-content/uploads/2018/05/Tyrannosaurus-Rex.png	Epic	Alpha	Tyrannosaurus Rex	4200	0%	1700	102	30%
1542074203-1190	https://metahub.info/jwa-dinodex/	Indoraptor	https://metahub.info/jwa-dinosaur/indoraptor/		Cleansing Impact		https://metahub.info/wp-content/uploads/2018/06/F14BA6A0-C0DF-463E-94C6-92D8D5CFB80C.jpeg	Unique	Apex	Indoraptor	3750	0%	1400	128	20%
1542074293-1363	https://metahub.info/jwa-dinodex/	Ankyntrosaurus	https://metahub.info/jwa-dinosaur/ankyntrosaurus/		Nullifying Strike		https://metahub.info/wp-content/uploads/2018/05/Ankyntrosaurus.png	Legendary	Alpha	Ankyntrosaurus	5100	30%	1000	115	5%
1542074086-962	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/			Counter-Attack (0.25)	https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary	Apex	Tragodistis	3810	40%	900	124	5%
1542074170-1125	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/		Nullifying Impact		https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary	Apex	Monomimus	3600	0%	1300	129	5%
1542074280-1339	https://metahub.info/jwa-dinodex/	Blue	https://metahub.info/jwa-dinosaur/blue/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/6BC4BE77-037B-4F6E-A0CB-4B2622FDC948.jpeg	Epic	Alpha	Blue	3000	10%	1150	131	5%
1542074059-902	https://metahub.info/jwa-dinodex/	Velociraptor	https://metahub.info/jwa-dinosaur/velociraptor/		Strike		https://metahub.info/wp-content/uploads/2018/05/Velociraptor.png	Common	Specialist	Velociraptor	1950	0%	1320	132	5%
1542074141-1065	https://metahub.info/jwa-dinodex/	Pteranodon	https://metahub.info/jwa-dinosaur/pteranodon/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Pteranadon-.png	Epic	Survivor	Pteranodon	3000	0%	900	112	5%
1542074253-1290	https://metahub.info/jwa-dinodex/	Diorajasaur	https://metahub.info/jwa-dinosaur/diorajasaur/			Swap In Ferocity	https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Diorajasaur_result.jpg	Unique	Alpha	Diorajasaur	4200	30%	900	108	5%
1542074185-1155	https://metahub.info/jwa-dinodex/	Majundasuchus	https://metahub.info/jwa-dinosaur/majundasuchus/		Short Defense		https://metahub.info/wp-content/uploads/2018/05/Majundasuchus.png	Rare	Survivor	Majundasuchus	3360	0%	750	108	5%
1542074270-1319	https://metahub.info/jwa-dinodex/	Deinocheirus	https://metahub.info/jwa-dinosaur/deinocheirus/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/05/Deinocheirus.png	Common	Hatchling	Deinocheirus	3000	0%	1270	130	5%
1542074247-1276	https://metahub.info/jwa-dinodex/	Diplotator	https://metahub.info/jwa-dinosaur/diplotator/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/07/Diplotator.png	Rare	Survivor	Diplotator	4800	0%	1000	120	5%
1542074116-1017	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/		Strike		https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1542074099-982	https://metahub.info/jwa-dinodex/	Stygimoloch Gen 2	https://metahub.info/jwa-dinosaur/stygimoloch-gen-2/		Minimal Speedup Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stygimoloch_GEN2.jpg	Common	Carcass	Stygimoloch Gen 2	3810	0%	1200	128	5%
1542074162-1106	https://metahub.info/jwa-dinodex/	Nodosaurus	https://metahub.info/jwa-dinosaur/nodosaurus/		Vulnerability Strike		https://metahub.info/wp-content/uploads/2018/05/Nodosaurus.png	Rare	Specialist	Nodosaurus	4500	25%	1000	115	5%
1542074084-955	https://metahub.info/jwa-dinodex/	Triceratops	https://metahub.info/jwa-dinosaur/triceratops/		Minor Stunning Strike		https://metahub.info/wp-content/uploads/2018/05/Triceratops.png	Rare	Specialist	Triceratops	4200	20%	1240	115	5%
1542074072-927	https://metahub.info/jwa-dinodex/	Tupandactylus	https://metahub.info/jwa-dinosaur/tupandactylus/		Impact and Run		https://metahub.info/wp-content/uploads/2018/09/Tupandactylus.png	Rare	Specialist	Tupandactylus	3000	0%	820	109	5%
1542074076-938	https://metahub.info/jwa-dinodex/	Tuojiangosaurus	https://metahub.info/jwa-dinosaur/tuojiangosaurus/		Thagomizer		https://metahub.info/wp-content/uploads/2018/05/Tuojiangosaurus.png	Rare	Specialist	Tuojiangosaurus	4500	0%	1000	112	5%
1542074086-960	https://metahub.info/jwa-dinodex/	Tragodistis	https://metahub.info/jwa-dinosaur/tragodistis/		Rampage		https://metahub.info/wp-content/uploads/2018/05/Tragodistis.png	Legendary	Apex	Tragodistis	3810	40%	900	124	5%
1542074139-1060	https://metahub.info/jwa-dinodex/	Purrusaurus	https://metahub.info/jwa-dinosaur/purrusaurus/		Ferocity Impact		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Purussaurus_result.jpg	Rare	Specialist	Purrusaurus	4200	10%	1000	112	5%
1542074116-1016	https://metahub.info/jwa-dinodex/	Spinosaurus	https://metahub.info/jwa-dinosaur/spinosaurus/		Gashing Wound		https://metahub.info/wp-content/uploads/2018/05/Spinosaurus.png	Rare	Survivor	Spinosaurus	3900	0%	1000	122	5%
1542074078-944	https://metahub.info/jwa-dinodex/	Tryostronix	https://metahub.info/jwa-dinosaur/tryostronix/		Ready to Crush		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Tryostronix.jpg	Legendary	Apex	Tryostronix	3750	0%	1150	120	20%
1542074170-1127	https://metahub.info/jwa-dinodex/	Monomimus	https://metahub.info/jwa-dinosaur/monomimus/			Immunity	https://metahub.info/wp-content/uploads/2018/07/Monomimus.png	Legendary	Apex	Monomimus	3600	0%	1300	129	5%
1542074308-1394	https://metahub.info/jwa-dinodex/	Allosaurus	https://metahub.info/jwa-dinosaur/allosaurus/				https://metahub.info/wp-content/uploads/2018/05/Allosaurus.png	Common	Hatchling	Allosaurus	4500	0%	1650	104	20%
1542074105-993	https://metahub.info/jwa-dinodex/	Stegodeus	https://metahub.info/jwa-dinosaur/stegodeus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Stegodeus_result.jpg	Legendary	Apex	Stegodeus	5100	30%	1020	107	5%
1542074091-969	https://metahub.info/jwa-dinodex/	Tarbosaurus	https://metahub.info/jwa-dinosaur/tarbosaurus/				https://metahub.info/wp-content/uploads/2018/05/Tarbosaurus.png	Common	Hatchling	Tarbosaurus	4050	0%	1600	104	40%
1542074276-1331	https://metahub.info/jwa-dinodex/	Carnotaurus	https://metahub.info/jwa-dinosaur/carnotaurus/		Short Defense		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Carnotaur.jpg	Rare	Hatchling	Carnotaurus	4050	0%	900	104	5%
1542074097-979	https://metahub.info/jwa-dinodex/	Suchomimus	https://metahub.info/jwa-dinosaur/suchomimus/		Strike		https://metahub.info/wp-content/uploads/2018/05/Suchomimus.png	Common	Specialist	Suchomimus	3630	0%	700	115	5%
1542074063-912	https://metahub.info/jwa-dinodex/	Utarinex	https://metahub.info/jwa-dinosaur/utarinex/		Minimal Stunning Strike		https://metahub.info/wp-content/uploads/2018/06/JWA_Profile_Utarhinex.jpg	Unique	Apex	Utarinex	4200	0%	1330	126	5%
1542074149-1083	https://metahub.info/jwa-dinodex/	Parasaurolophus	https://metahub.info/jwa-dinosaur/parasaurolophus/		Superiority Strike		https://metahub.info/wp-content/uploads/2018/05/Parasaurolophus.png	Common	Hatchling	Parasaurolophus	5100	0%	890	113	5%
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


// http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities
// set Page Load Delay to 5000
// scroll the page after it loads so the images lazy load in so it will scrape the scr correctly
var Abilities = `
1542060979-887	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Bellow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	0	2	0	Reduce Target Speed 50% for 2 turns
1542060979-918	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Cripple	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	0	1	0	Act first
1542060979-940	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swoop	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	0	0	0	Auto-Swap to next Creature
1542060979-867	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Minimal Speedup Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/65/Icon_Attack_Speed.png/revision/latest/scale-to-width-down/60?cb=20180617152800	1x	0	0	Increase speed 10% for 3 turns
1542060979-873	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Superiority Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/73/Attack_Basic_Speed_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152753	1x	0	0	Cleanse Self
1542060979-878	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Pulse	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b4/Icon_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180626144100	0	3	0	Regenerate 25% HP
1542060979-892	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cloak	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8e/Icon_Cloak.png/revision/latest/scale-to-width-down/60?cb=20180617153711	0	3	0	Next attack will deal 2x damage
1542060979-962	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Swap_In_Wound.png/revision/latest/scale-to-width-down/60?cb=20180919161608	0	0	0	Unable to swap for 2 Turns
1542060979-863	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1x	0	0	Bypass Armor
1542060979-862	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1x	0	0	Destroy Shields
1542060979-939	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swoop	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	0	0	0	DoT 0.2x of target's max HP for 3 turns
1542060979-932	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ready to Crush	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	0	3	0	Increase Damage by 50% for next 3 turns
1542060979-901	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Distracting Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	2x	2	0	Target's damage is reduced by 50% for 2 turns
1542060979-877	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Pulse	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b4/Icon_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180626144100	0	3	0	Cleanse
1542060979-883	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/4b/Icon_Bypass_Armor_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	1.5x	2	0	Bypass armor
1542060979-864	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Evasive Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/60/Icon_Attack_Evasive_Strike.png/revision/latest/scale-to-width-down/60?cb=20180913124532	1x	0	0	Gain 50% chance to Dodge direct damage for 1 turn.
1542060979-866	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Low Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	20% Chance to stun for 1 turn
1542060979-910	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Greater Stunning Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/ed/Icon_Stun_1.png/revision/latest/scale-to-width-down/60?cb=20180626144243	1.5	3	1	75% Chance to stun 1 turn
1542060979-925	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Long Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/be/Icon_Invincibility_2.png/revision/latest/scale-to-width-down/60?cb=20180626144114	0	4	0	Shield 100% for 2 turns
1542060979-934	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Short Defense	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Shield_3.png/revision/latest/scale-to-width-down/60?cb=20180617154438	1x	2	0	50% shield for 2 turns
1542060979-917	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Charge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/c/cd/Icon_Stun_3.png/revision/latest/scale-to-width-down/60?cb=20180626144258	1x	2	1	Guaranteed stun 1 turn
1542060979-936	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Strengthening Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	1x	3	0	Increase damage 50% for 2 turns
1542060979-886	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Bellow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	0	2	0	Shield 50% for 1 turn
1542060979-951	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Ferocity	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/49/Icon_Swap_Ferocity.png/revision/latest/scale-to-width-down/60?cb=20180919161134	0	0	0	Increase Damage by 50% for 2 turns after swapping in
1542060979-870	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Nullifying Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/68/Icon_Attack_Scrub.png/revision/latest/scale-to-width-down/60?cb=20180617152758	1x	0	0	Remove Positive Effects
1542060979-865	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lesser Wounding Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	0	0	DoT 0.15x damage for 2 turnsTBC
1542060979-875	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Vulnerability Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/76/Icon_Attack_Vulnerablility.png/revision/latest/scale-to-width-down/60?cb=20180617153705	1x	0	0	Target is Vulnerable for 1 turn
1542060979-931	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Rampage and Run	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Swap.png/revision/latest/scale-to-width-down/60?cb=20180617152801	2x	1	1	Automatic Swap
1542060979-927	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Maiming Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	1	0	DoT 0.4x of target's max HP for 2 turns
1542060979-880	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Cleanse
1542060979-902	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Distracting Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	1x	2	0	Target's damage is reduced by 50% for 2 turns
1542060979-906	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Extended Critical Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/7c/Icon_Critical_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617153711	1x	3	0	Critical Chance +60% for 3 turns
1542060979-941	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Thagomizer	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	1.5x	3	0	Target's speed -50% for 3 turns
1542060979-948	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Defense	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Unable to swap for 2 Turns
1542060979-947	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Defense	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Gain 50% Shield for 2 turns after swapping in
1542060979-885	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Bellow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	0	2	0	Act First
1542060979-907	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ferocious Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	1.5x	3	0	Damage increased +50% for 3 turns
1542060979-895	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Decelerating Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8d/Icon_Speed_DeBuff_4.png/revision/latest/scale-to-width-down/60?cb=20180626144231	1.5x	1	0	Target’s speed is reduced 50% for 2 turns
1542060979-959	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Stun	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/3e/Icon_Swap_In_Stun.png/revision/latest/scale-to-width-down/60?cb=20180919161737	0	0	0	Gain 66% chance to stun for 1 turn after swapping in
1542060979-945	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Counter-Attack	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/2/20/Icon_Counter_attack.png/revision/latest/scale-to-width-down/60?cb=20180919160255	Varies	0	0	Deal ? damage after receiving but surviving damage
1542060979-949	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Distraction	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a7/Icon_Swap_In_Distraction.png/revision/latest/scale-to-width-down/60?cb=20180919161013	0	0	0	Reduce oponent's damage by 50% for 1 turn after swapping in
1542060979-955	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Slow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/48/Icon_Swap_In_Slow.png/revision/latest/scale-to-width-down/60?cb=20180919161343	0	0	0	Reduce oponent's speed by 50% for 1 turn after swapping in
1542060979-922	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lethal Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d2/Icon_Attack_Wound_Special_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	1x	2	0	DoT 0.33x of target's max HP per turn for 3 turns
1542060979-872	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/30/Icon_Attack.png/revision/latest/scale-to-width-down/60?cb=20180617151453	1x	0	0	No special effect
1542060979-954	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Unable to swap for 2 Turns
1542060979-937	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Strike and Run	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Swap.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	Automatic Swap
1542060979-896	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1.5x	2	0	Destroy Shields
1542060979-911	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Greater Stunning Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/c/cd/Icon_Stun_3.png/revision/latest/scale-to-width-down/60?cb=20180626144258	2x	3	1	75% Chance to stun 1 turn
1542060979-958	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/61/Icon_Swap_In_Strike.png/revision/latest/scale-to-width-down/60?cb=20180919161454	0	0	0	Unable to swap for 2 Turns
1542060979-944	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Wounding Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/3d/Icon_Attack_Wound_Special_1.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	1	0	DoT 0.15x of target's max HP for 2 turns
1542060979-928	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Nullifying Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/1/1e/Icon_Scrub_2.png/revision/latest/scale-to-width-down/60?cb=20180626144140	1.5x	2	0	Remove positive effects
1542060979-924	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lockdown Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/2/21/Icon_Swap_Prevention.png/revision/latest/scale-to-width-down/60?cb=20180626144312	1x	1	0	Cannot swap for 2 turns
1542060979-868	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Minimal Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	10% Chance to stun for 1 turn
1542060979-960	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Stun	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/3e/Icon_Swap_In_Stun.png/revision/latest/scale-to-width-down/60?cb=20180919161737	0	0	0	Unable to swap for 2 turns
1542060979-956	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Slow	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/48/Icon_Swap_In_Slow.png/revision/latest/scale-to-width-down/60?cb=20180919161343	0	0	0	Unable to swap for 1 turn
1542060979-893	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Critical Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/7c/Icon_Critical_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617153711	1.5	2	0	Chance of Critical attack increased by 40%
1542060979-926	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Long Protection	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Shield_3.png/revision/latest/scale-to-width-down/60?cb=20180617154438	1x	4	0	50% Defense for 4 turns
1542060979-952	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Ferocity	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/4/49/Icon_Swap_Ferocity.png/revision/latest/scale-to-width-down/60?cb=20180919161134	0	0	0	Unable to swap for 2 Turns
1542060979-908	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ferocious Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	1x	3	0	Damage increased +50% for 3 turns
1542060979-903	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Evasive Stance	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/32/Icon_Attack_Evasive_Stance.png/revision/latest/scale-to-width-down/60?cb=20180913124409	0	4	0	Act first.
1542060979-946	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Immunity	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d7/Icon_Debuff_Immune.png/revision/latest/scale-to-width-down/60?cb=20180919160545	0	0	0	All negative effects are deflected
1542060979-897	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/82/Icon_Bypass_Shield_2.png/revision/latest/scale-to-width-down/60?cb=20180617153709	1.5x	2	0	Bypass Armor
1542060979-861	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8d/Icon_Bypass-Armor.png/revision/latest/scale-to-width-down/60?cb=20180617153710	1x	0	0	Bypass armor
1542060979-942	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Wounding Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d2/Icon_Attack_Wound_Special_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	1.5x	1	0	DoT 0.15x of target's max HP for 2 turns
1542060979-938	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Stunning Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/53/Icon_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617154226	1.5x	2	1	33% Chance to stun opponent for 1 turn
1542060979-874	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Superiority Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/73/Attack_Basic_Speed_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152753	1x	0	0	Target: Reduce Speed 33% 1 turn
1542060979-933	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Ready to Crush	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e1/Icon_Attack_Buff.png/revision/latest/scale-to-width-down/60?cb=20180617152755	0	3	0	Increase Critical Chance by 30% for next 3 turns
1542060979-957	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/61/Icon_Swap_In_Strike.png/revision/latest/scale-to-width-down/60?cb=20180919161454	0	0	0	Deal 1x damage after swapping in
1542060979-912	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Greater Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/ed/Icon_Stun_1.png/revision/latest/scale-to-width-down/60?cb=20180626144243	1x	3	2	75% Chance to stun 1 turn
1542060979-935	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Slowing Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/69/Icon_Speed_DeBuff_2.png/revision/latest/scale-to-width-down/60?cb=20180626144219	1.5	4	0	Target's speed is reduced 50% for 3 turns
1542060979-891	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cloak	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8e/Icon_Cloak.png/revision/latest/scale-to-width-down/60?cb=20180617153711	0	3	0	Gain 50% chance of dodge for 2 turns
1542060979-890	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cloak	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/8e/Icon_Cloak.png/revision/latest/scale-to-width-down/60?cb=20180617153711	0	3	0	Act First
1542060979-905	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Expose Weak Spot	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/9/90/Icon_Vulnerability.png/revision/latest/scale-to-width-down/60?cb=20180626144337	1x	3	0	Target vulnerable this turn and next 3 turns
1542060979-921	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/be/Icon_Invincibility_2.png/revision/latest/scale-to-width-down/60?cb=20180626144114	0	3	1	Shield 100% for 1 turn
1542060979-961	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a6/Icon_Swap_In_Wound.png/revision/latest/scale-to-width-down/60?cb=20180919161608	0	0	0	DoT 0.25x target's max HP for 2 turns after swapping in
1542060979-943	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Wounding Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d2/Icon_Attack_Wound_Special_2.png/revision/latest/scale-to-width-down/60?cb=20180617153707	2x	1	0	DoT 0.15x of target's max HP for 2 turns
1542060979-882	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Regenerate 25% HP
1542060979-894	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Debilitating Distraction	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	1x	3	1	Target's damage reduced 75% 2 turns
1542060979-898	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e8/Icon_Bypass_Shield_4.png/revision/latest/scale-to-width-down/60?cb=20180617153710	2x	1	1	Destroy Shields
1542060979-889	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/63/Icon_Bypass_Armor_4.png/revision/latest/scale-to-width-down/60?cb=20180617153708	2x	1	1	Bypass Armor
1542060979-916	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Charge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/c/cd/Icon_Stun_3.png/revision/latest/scale-to-width-down/60?cb=20180626144258	1x	2	1	Act first
1542060979-871	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Pinning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/7/77/Icon_Attack_Swap_Prevented.png/revision/latest/scale-to-width-down/60?cb=20180617153704	1x	0	0	Cannot swap for 1 turn
1542060979-876	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Pulse	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b4/Icon_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180626144100	0	3	0	Act First
1542060979-881	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Increase damage to 1.25x for 4 turns
1542060979-920	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/be/Icon_Invincibility_2.png/revision/latest/scale-to-width-down/60?cb=20180626144114	0	3	1	Act first
1542060979-884	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Armor Piercing Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/6/63/Icon_Bypass_Armor_4.png/revision/latest/scale-to-width-down/60?cb=20180617153708	2x	1	1	Bypass Armor
1542060979-899	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Defense Shattering Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/e8/Icon_Bypass_Shield_4.png/revision/latest/scale-to-width-down/60?cb=20180617153710	2x	1	1	Bypass Armor
1542060979-879	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Adrenaline Surge	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/b/b7/Icon_Attack_Heal_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152757	0	3	0	Act First
1542060979-930	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Rampage	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d1/Icon_Attack_Special_3.png/revision/latest/scale-to-width-down/60?cb=20180617152800	2x	1	0	No special effect
1542060979-913	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/e/ed/Icon_Attack_Special_1.png/revision/latest/scale-to-width-down/60?cb=20180617152759	1.5x	2	0	No special effect
1542060979-869	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Minor Stunning Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Stun.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1x	0	0	15% Chance to stun for 1 turn
1542060979-914	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Impact and Run	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a2/Icon_Attack_Swap.png/revision/latest/scale-to-width-down/60?cb=20180617152801	1.5	1	1	Automatic Swap
1542060979-900	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Distracting Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	1.5x	2	0	Target's damage is reduced by 50% for 2 turns
1542060979-888	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Cleansing Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/f/f7/Icon_Attack_Impact_Cleanse.png/revision/latest/scale-to-width-down/60?cb=20180617152758	1.5x	2	0	Cleanse
1542060979-904	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Evasive Stance	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/3/32/Icon_Attack_Evasive_Stance.png/revision/latest/scale-to-width-down/60?cb=20180913124409	0	4	0	Gain 50% chance to Dodge direct damage for 3 turn.
1542060979-919	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Instant Cripple	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/ae/Icon_Attack_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617152756	0	1	0	Target’s damage is reduced 90% for 1 turn
1542060979-923	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Lockdown Impact	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/2/21/Icon_Swap_Prevention.png/revision/latest/scale-to-width-down/60?cb=20180626144312	1.5x	1	0	Cannot swap for 2 turns
1542060979-953	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Invincibility	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/5/5c/Icon_Swap_In_Defense.png/revision/latest/scale-to-width-down/60?cb=20180919160813	0	0	0	Become Invincible for 1 Turn after swapping in
1542060979-950	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Swap In Distraction	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/a/a7/Icon_Swap_In_Distraction.png/revision/latest/scale-to-width-down/60?cb=20180919161013	0	0	0	Unable to swap for 1 turn
1542060979-909	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Gashing Wound	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/8/80/Icon_Attack_Wound.png/revision/latest/scale-to-width-down/60?cb=20180617153706	1x	1	0	DoT 0.3x of target's max HP for 2 turns
1542060979-915	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Impairing Strike	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d0/Icon_Critical_Debuff.png/revision/latest/scale-to-width-down/60?cb=20180617153712	1x	2	0	No Critical Chance for 3 turns
1542060979-929	http://jurassic-world-alive.wikia.com/wiki/List_of_Abilities	Pounce	https://vignette.wikia.nocookie.net/jurassic-world-alive/images/d/d1/Icon_Attack_Special_3.png/revision/latest/scale-to-width-down/60?cb=20180617152800	2x	1	0	Reduce target's damage 50% for 1 turn
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



var Collection = [
	{ name: "Allosaurus", 				level: 5,	team: false },
	{ name: "Amargasaurus", 			level: 7,	team: true },
	{ name: "Ankylocodon", 				level: 0,	team: false },
	{ name: "Ankylosaurus", 			level: 0,	team: false },
	{ name: "Ankylosaurus Gen 2", 		level: 5,	team: false },
	{ name: "Apatosaurus", 				level: 0,	team: false },
	{ name: "Deinocheirus",				level: 3,	team: false },
	{ name: "Dilophosaurus", 			level: 0,	team: false },
	{ name: "Dilophosaurus Gen 2", 		level: 2,	team: false },
	{ name: "Dimetrodon", 				level: 0,	team: false },
	{ name: "Dimetrodon Gen 2", 		level: 5,	team: false },
	{ name: "Diplocaulus",		 		level: 4,	team: false },
	{ name: "Diplocaulus Gen 2", 		level: 7,	team: false },
	{ name: "Dracorex Gen 2",			level: 4,	team: false },
	{ name: "Edmontosaurus", 			level: 7,	team: true },
	{ name: "Einiasuchus", 				level: 0,	team: false },
	{ name: "Einiosaurus", 				level: 1,	team: false },
	{ name: "Euoplocephalus", 			level: 4,	team: true },
	{ name: "Gorgosaurus", 				level: 0,	team: false },
	{ name: "Hatzegopteryx",			level: 6,	team: false },
	{ name: "Iguanodon", 				level: 5,	team: false },
	{ name: "Kaprosuchus", 				level: 7,	team: false },
	{ name: "Kentrosaurus", 			level: 0,	team: false },
	{ name: "Koolasuchus Gen 2", 		level: 8,	team: false },
	{ name: "Lythronax", 				level: 7,	team: true },
	{ name: "Majungasaurus", 			level: 2,	team: false },
	{ name: "Megalosaurus", 			level: 7,	team: false },
	{ name: "Monolophosaurus Gen 2", 	level: 5,	team: false },
	{ name: "Nodosaurus", 				level: 6,	team: false },
	{ name: "Nundasuchus", 				level: 1,	team: false },
	{ name: "Ophiacodon", 				level: 5,	team: true },
	{ name: "Parasaurolophus", 			level: 6,	team: false },
	{ name: "Postosuchus", 				level: 6,	team: false },
	{ name: "Proceratosaurus", 			level: 7,	team: false },
	{ name: "Purussaurus Gen 2",		level: 7,	team: true },
	{ name: "Pyroraptor", 				level: 0,	team: false },
	{ name: "Rajasaurus", 				level: 0,	team: false },
	{ name: "Sarcosuchus",		 		level: 2,	team: false },
	{ name: "Sinoceratops", 			level: 0,	team: false },
	{ name: "Spinosaurus", 				level: 6,	team: false },
	{ name: "Stegosaurus", 				level: 8,	team: true },
	{ name: "Suchomimus", 				level: 4,	team: false },
	{ name: "Tanycolagreus", 			level: 0,	team: false },
	{ name: "Tarbosaurus", 				level: 2,	team: false },
	{ name: "Tenontosaurus", 			level: 0,	team: false },
	{ name: "Triceratops", 				level: 6,	team: true },
	{ name: "Triceratops Gen 2", 		level: 4,	team: false },
	{ name: "Tuojiangosaurus", 			level: 7,	team: false },
	{ name: "Tupandactylus", 			level: 6,	team: false },
	{ name: "Tyrannosaurus Rex", 		level: 0,	team: false },
	{ name: "Tyrannosaurus Rex Gen 2", 	level: 0,	team: false },
	{ name: "Utahraptor", 				level: 7,	team: false },
	{ name: "Velociraptor", 			level: 4,	team: false },
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
