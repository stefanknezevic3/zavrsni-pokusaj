const images = [
    {
        title: "Ulična elegancija",
        category: "ljudi",
        description: "Crni kožni sako, kratke hlače i prazna gradska ulica. Sumračno svjetlo blago osvjetljava. vertikalni portret; niski kut; meka pozadina",
        location: "Zagreb, Hrvatska",
        date: "2024-04-15",
        coordinates: { lat: 45.8116690, lng: 15.9694270 },
        gradient: "linear-gradient(135deg, #ff7e5f, #feb47b)",
		image: "slike/slika1.jpeg",
        details: {
            "Kamera": "Sony A7 IV",
            "Žarišna duljina": "24mm",
            "Otvor blende": "f/8",
            "ISO": "100",
            "Brzina zatvarača": "1/60s",
            "Vrijeme": "19:30"
        }
    },
    {
        title: "Kamena obala",
        category: "priroda",
        description: "Sivi kameni blokovi uz mirnu obalu; nisko travnato brdo pod vedrim nebom. široki kadar; linije stijena vode pogled ",
        location: "Rabac, Hrvatska",
        date: "2024-08-03",
        coordinates: { lat: 45.0792, lng: 14.1583 },
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        image: "slike/slika2.jpeg",
        details: {
            "Uzvišenje": "247m",
            "Temperatura": "21°C",
            "Vrijeme": "Vedro nebo",
            "Dužina obale": "2 km",
            "Pristupačnost": "Izazovna",
            "Vrijeme": "06:17"
        }
    },
    {
        title: "Pula arena",
        category: "grad",
        description: "Kameni lukovi rimskog amfiteatra u toplom, niskom svjetlu; gradske fasade u pozadini. široki kadar; blago protusvjetlo",
        location: "Pula, Hrvatska",
        date: "2024-06-20",
        coordinates: { lat: 44.8732, lng: 13.8502 },
        gradient: "linear-gradient(135deg, #434343, #000000)",
        image: "slike/slika3.jpeg",
        details: {
            "Kamera": "Sony A7 IV",
            "Žarišna duljina": "35mm",
            "Otvor blende": "f/2.8",
            "ISO": "1600",
            "Brzina zatvarača": "1/30s",
            "Tripod": "Da"
        }
    },
    {
        title: "Dvorac Miramare",
        category: "priroda",
        description: "Palača od svijetlog kamena s vrtom, fontanama i pogledom prema moru. arhitektonski pejzaž; uravnotežena simetrija",
        location: "Trst, Italija",
        date: "2024-09-10",
        coordinates: { lat: 45.702555, lng: 13.712453 },
        gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
        image: "slike/slika4.jpeg",
        details: {
            "Godišnje doba": "Početak jeseni",
            "Strana": "Krilo A",
            "Udaljenost": "2 sata",
            "Vrijeme": "sunčano",
            "Gužve": "umjerene",
            "Najbolje vrijeme posjete": "Jutro"
        }
    },
    {
        title: "Degustacija",
        category: "hrana",
        description: "Tanjur s kvadratnim komadima pizze s rikotom, rajčicama, lukom i rukolom; ruke posežu za zalogajima. pogled odozgo; središnje kadriranje",
        location: "Zagreb, Hrvatska",
        date: "2024-07-28",
        coordinates: { lat: 45.8145, lng: 15.9787 },
        gradient: "linear-gradient(135deg, #74b9ff, #0984e3)",
        image: "slike/slika5.jpeg",
        details: {
            "Temperatura unutra": "21°C",
            "Temperatura vani": "35°C",
            "Vjetar": "Južni 5km/h",
            "Količina ljudi": "60+",
            "Trajanje eventa": "2.5h",
            "Promovirano": "Vina i hrana"
        }
    },
    {
        title: "¨Društvo¨",
        category: "priroda",
        description: "Dvije mačke na praznoj, kamenitoj cesti među svijetlim stijenama; kreću se jedna uz drugu. vertikalni kadar; puno negativnog prostora",
        location: "Šibenik, Hrvatska",
        date: "2024-05-12",
        coordinates: { lat: 43.7350, lng: 15.8952 },
        gradient: "linear-gradient(135deg, #d63031, #74b9ff)",
        image: "slike/slika6.jpeg",
        details: {
            "Kamera": "Sony A7 IV",
            "Style": "Gothic-Renaissance",
            "Nadmorska visina": "132m",
            "Vjetar": "Bura 15km/h",
            "Mjesto": "Okolica šibenske zaobilaznice",
            "Krajolik": "Kršno područje"
        }
    },
    {
        title: "Slatki trio",
        category: "ljudi",
        description: "Tri kolača na šarenim tanjurima, pogled odozgo.",
        location: "Zagreb, Hrvatska",
        date: "2024-04-15",
        coordinates: { lat: 45.8145, lng: 15.9787 },
        gradient: "linear-gradient(135deg, #8b4513, #d2b48c)",
        image: "slike/slika7.jpeg",
        details: {
            "Gastronomija": "kolači i deserti",
            "Stol": "keramički tanjuri, drvena podloga",
            "Perspektiva": "pogled odozgo",
            "Detalj": "dekor na vrhu kolača",
            "Boje": "pastelne nijanse",
            "Atmosfera": "intimno druženje"
        }
    },
    {
        title: "Koncert",
        category: "ljudi",
        description: "Gostovanje izvođača Nucci-a u Š.C. Višnjik.",
        location: "Zadar, Hrvatska",
        date: "2024-08-17",
        coordinates: { lat: 44.1198, lng: 15.2437 },
        gradient: "linear-gradient(135deg, #ff6b6b, #feca57)",
        image: "slike/slika8.jpeg",
        details: {
            "Scena": "koncertni nastup",
            "Izvođač": "muški vokal",
            "Rasvjeta": "reflektori i kontrasti",
            "Pokret": "pjevanje u akciji",
            "Boje": "plava, crna, bijela",
            "Ambijent": "urbana pozornica"
        }
    },
    {
        title: "Esencija",
        category: "priroda", //ljudi//
        description: "Žena u bijeloj haljini bosa na drvenom puteljku usred maglovitog, travnatog krajolika.",
        location: "Sljeme, Croatia",
        date: "2024-04-28",
        coordinates: { lat: 45.9144, lng: 15.9675 },
        gradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        image: "slike/slika9.jpeg",
        details: {
            "Uzvišenje": "1,035m",
            "Figura": "ženska silueta",
            "Prostor": "maglovito polje",
            "Kompozicija": "centralna os",
            "Svjetlo": "difuzno, oblačno",
            "Ugođaj": "melankolija"
        }
    },
    {
        title: "Odijelo",
        category: "ljudi",
        description: "Muškarac podešava kravatu; plavi sako s rupčićem u džepu.",
        location: "Vodice, Hrvatska",
        date: "2024-08-18",
        coordinates: { lat: 43.7596, lng: 15.7784 },
        gradient: "linear-gradient(135deg, #00b8d4, #0097a7)",
        image: "slike/slika10.jpeg",
        details: {
            "Odjeća": "sako i kravata",
            "Gesta": "podešavanje detalja",
            "Tekstura": "glatka tkanina",
            "Boje": "plava, crna, bijela",
            "Fokus": "ruka i torzo",
            "Simbol": "poslovna elegancija"
        }
    },
    {
        title: "Reflektori",
        category: "ljudi",
        description: "Sportski automobil frontalno; snažan odsjaj farova i zvjezdasti bljesak.",
        location: "Zagreb, Hrvatska",
        date: "2024-08-12",
        coordinates: { lat: 45.7779, lng: 15.9695 },
        gradient: "linear-gradient(135deg, #1a237e, #3949ab)",
        image: "slike/slika11.jpeg",
        details: {
            "Vozilo": "hatchback model",
            "Okruženje": "parkiralište",
            "Svjetlo": "bljesak fara",
            "Perspektiva": "frontalna simetrija",
            "Detalj": "maska i logo",
            "Atmosfera": "dinamika stroja"
        }
    },
    {
        title: "Cigleni ugao",
        category: "grad",
        description: "Ugao pročelja s bijelim profilacijama i cvjetnim balkonima.",
        location: "Barcelona, Španjolska",
        date: "2024-06-08",
        coordinates: { lat: 41.3874, lng: 2.1686 },
        gradient: "linear-gradient(135deg, #3498db, #2980b9)",
        image: "slike/slika12.jpeg",
        details: {
            "Arhitektura": "historicistička fasada",
            "Materijal": "opeka i kamen",
            "Ornamentika": "cvjetni balkon",
            "Perspektiva": "pogled prema gore",
            "Boje": "crveno, bijelo, zeleno",
            "Ambijent": "gradska elegancija"
        }
    },
    {
        title: "Magla",
        category: "grad",
        description: "Siluete nebodera i kranova u sivom, maglovitom jutru.",
        location: "Zagreb, Hrvatska",
        date: "2024-02-05",
        coordinates: { lat: 45.80, lng: 16.01 },
        gradient: "linear-gradient(135deg, #00d2ff, #928dab)",
        image: "slike/slika13.jpeg",
        details: {
            "Okruženje": "urbani horizont",
            "Vrijeme": "maglovito jutro",
            "Struktura": "neboderi i kranovi",
            "Boje": "sivo-plava paleta",
            "Atmosfera": "distancirano, mirno",
            "Fokus": "industrijski pejzaž"
        }
    },
    {
        title: "Kišni dan",
        category: "priroda",
        description: "Crveni kiosk uz parkirane automobile; plića lokva stvara odraz konstrukcije.",
        location: "Pag, Hrvatska",
        date: "2024-09-03",
        coordinates: { lat: 44.3240, lng: 15.2600 },
        gradient: "linear-gradient(135deg, #8e44ad, #3498db)",
        image: "slike/slika14.jpeg",
        details: {
            "Objekt": "kiosk",
            "Površina": "refleksija u vodi",
            "Boje": "crvena, zemljana",
            "Vrijeme": "sumrak",
            "Prostor": "kamenita periferija",
            "Ugođaj": "nostalgija"
        }
    },
    {
        title: "Portret",
        category: "priroda",
        description: "Smeđi konj gleda u objektiv; vidljiva bijela oznaka na čelu i njušci.",
        location: "Bled, Slovenija",
        date: "2024-04-15",
        coordinates: { lat: 46.3683, lng: 16.6983 },
        gradient: "linear-gradient(135deg, #9b59b6, #8e44ad)",
        image: "slike/slika15.jpeg",
        details: {
            "Životinja": "konj",
            "Detalj": "bijela oznaka na čelu",
            "Tekstura": "dlaka i uzda",
            "Boja": "smeđa, bijela",
            "Okruženje": "maglovito polje",
            "Atmosfera": "mirno i pitomo"
        }
    },
    {
        title: "Čamci",
        category: "priroda",
        description: "Privezani uz obalu na predivnom i maglovitom jezeru Bled",
        location: "Bled, Slovenija",
        date: "2024-04-16",
        coordinates: { lat: 46.3683, lng: 16.6983 },
        gradient: "linear-gradient(135deg, #e74c3c, #f39c12)",
        image: "slike/slika16.jpeg",
        details: {
            "Objekt": "drveni čamci",
            "Prostor": "obala jezera",
            "Boje": "plava, zelena, smeđa",
            "Perspektiva": "kadar kroz grane",
            "Atmosfera": "tišina i spokoj",
            "Simbol": "zastoj i mirovanje"
        }
    },
    {
        title: "Rovinj",
        category: "grad",
        description: "Zbijene kamene kuće i visoki crkveni toranj iznad grada na poluotoku; brodice na mirnom moru.",
        location: "Rovinj, Hrvatska",
        date: "2024-08-30",
        coordinates: { lat: 45.0812, lng: 13.6387 },
        gradient: "linear-gradient(135deg, #bdc3c7, #95a5a6)",
        image: "slike/slika17.jpeg",
        details: {
            "Arhitektura": "kamene kuće",
            "Dominanta": "crkveni zvonik",
            "Okruženje": "zaljev s brodicama",
            "Boje": "terakota, plava, zelena",
            "Atmosfera": "spokojno, ljetno",
            "Perspektiva": "pogled s visine"
        }
    },
    {
        title: "Šulekova ulica",
        category: "priroda",
        description: "Ružičasti cvjetovi i isprepletene grane na pozadini plavog neba.",
        location: "Zagreb, Hrvatska",
        date: "2024-05-12",
        coordinates: { lat: 45.8128, lng: 16.0051 },
        gradient: "linear-gradient(135deg, #27ae60, #2ecc71)",
        image: "slike/slika18.jpeg",
        details: {
            "Biljka": "magnolija",
            "Sezona": "proljetni cvat",
            "Boja": "ružičasta, svijetloplava",
            "Perspektiva": "pogled odozdo",
            "Atmosfera": "prozračno i svježe",
            "Detalj": "latice u prvom planu"
        }
    },
    {
        title: "Gitarist",
        category: "ljudi",
        description: "Glazbenik s električnom gitarom na pozornici; snopovi rasvjete i dim stvaraju energiju koncerta.",
        location: "Zadar, Croatia",
        date: "2024-05-18",
        coordinates: { lat: 44.1196, lng: 15.2455 },
        gradient: "linear-gradient(135deg, #d4a574, #c0956f)",
        image: "slike/slika19.jpeg",
        details: {
            "Glazbenik": "gitarist",
            "Instrument": "električna gitara",
            "Rasvjeta": "ljubičasto-plava scena",
            "Pokret": "sviranje",
            "Atmosfera": "energično, urbano",
            "Kontekst": "koncert"
        }
    },
    {
        title: "Street couture",
        category: "ljudi",
        description: "Žena u crnom krznenom kaputu, zelenom pletivu, kožnim kratkim hlačama i visokim čizmama; šešir zaokružuje izgled.",
        location: "Zagreb, Hrvatska",
        date: "2024-03-17",
        coordinates: { lat: 45.8065, lng: 15.9872 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika20.jpeg",
        details: {
            "Moda": "krzneni kaput i šešir",
            "Tekstura": "koža i vuna",
            "Figura": "samouvjerena poza",
            "Boje": "crna, zelena, bež",
            "Okruženje": "urbana terasa",
            "Atmosfera": "suvremenost i stil"
        }
    },
	{
        title: "Pozornica u plavom",
        category: "ljudi",
        description: "Gostovanje izvođačice Aleksandre Prijović u K.C. Areni",
        location: "Zadar, Hrvatska",
        date: "2024-08-23",
        coordinates: { lat: 44.7102, lng: 15.1444 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika21.jpeg",
        details: {
            "Tip prizora": "scenski spektakl",
            "Skala": "velika dvorana, masa",
            "Rasvjetna dramaturgija": "hladni plavi snopovi",
            "Točka gledišta": "visina, centralna os",
            "Vizualni akcent": "svjetlosni trokut iznad scene",
            "Atmosfera": "euforična, kinematična"
        }
    },
	{
        title: "Kupe",
        category: "ljudi",
        description: "Bijeli sportski kupe na praznom parkiralištu; toplo nisko svjetlo naglašava linije karoserije.",
        location: "Zagreb, Hrvatska",
        date: "2024-06-15",
        coordinates: { lat: 45.7779, lng: 15.9695 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika22.jpeg",
        details: {
            "Dizajn": "grand tourer, duga silueta",
            "Materijalnost": "lak, stakleni krov",
            "Svjetlo": "zlatni sat, dugi sjene",
            "Točka gledišta": "povišeni kut, tročetvrtinski pogled",
            "Ritam": "lukovi i uzdužne linije",
            "Ugođaj": "mirno, profinjeno"
        }
    },
	{
        title: "Silueta",
        category: "ljudi",
        description: "Osoba izranja iz vode u sumrak; tamna silueta na pastelnoj liniji horizonta.",
        location: "Umag, Hrvatska",
        date: "2024-08-15",
        coordinates: { lat: 45.4372, lng: 13.5257 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika23.jpeg",
        details: {
            "Kontrast": "silueta vs. pastelni zalaz",
            "Element": "vodena površina, valovi",
            "Kadar": "niska visina, blizina vode",
            "Tempo": "zadržani trenutak",
            "Paleta": "akvamarin, jantar, crna",
            "Atmosfera": "kontemplativno"
        }
    },
	{
        title: "Šetnja",
        category: "ljudi",
        description: "Muškarac u kaputu prelazi mostić uz gradski kanal; u pozadini lokalne trgovine i bicikli.",
        location: "Amsterdam, Nizozemska",
        date: "2024-09-25",
        coordinates: { lat: 52.3676, lng: 4.9041 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika24.jpeg",
        details: {
            "Medij": "crno-bijela fotografija",
            "Žanr": "street, svakodnevica",
            "Kompozicijski motiv": "figura u profilu",
            "Prostor": "kanal, gradska fasada",
            "Svjetlo": "oštra sunčeva traka",
            "Ritam": "vertikale drveća i stupova"
        }
    },
	{
        title: "Clash",
        category: "ljudi",
        description: "Žena u crnom blejzeru s prugama i bijelim naočalama stoji uz zelenilo i kamene lukove u pozadini.",
        location: "Zadar, Hrvatska",
        date: "2024-09-15",
        coordinates: { lat: 44.1170, lng: 15.2266 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika25.jpeg",
        details: {
            "Moda": "monokrom s akcentnim naočalama",
            "Kontrast konteksta": "suvremeni stil / povijesna kulisa",
            "Linije": "vertikale ograde i zida",
            "Svjetlo": "topli rubovi zalaska",
            "Stav": "mirna, samouvjerena",
            "Teksture": "vuna, kamen, vegetacija"
        }
    },
	{
        title: "Riva",
        category: "ljudi",
        description: "Par sjedi okrenut moru; dugi sjenoviti klin upada preko pločnika prema moru.",
        location: "Zadar, Hrvatska",
        date: "2024-09-15",
        coordinates: { lat: 44.1170, lng: 15.2266 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika26.jpeg",
        details: {
            "Motiv odnosa": "intimna tišina",
            "Geometrija": "klin sjene, vodoravni horizont",
            "Raspoloženje": "smireno, toplo",
            "Kontekst": "obala / promenada",
            "Tempo": "zastoj, promatranje",
            "Paleta": "zlatni sat, prigušene boje"
        }
    },
	{
        title: "Koktel",
        category: "ljudi",
        description: "Čaša koktela s pjenom u ruci; lica sugovornika izvan fokusa u pozadini.",
        location: "Motovun, Hrvatska",
        date: "2024-09-15",
        coordinates: { lat: 45.3369, lng: 13.8286 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika27.jpeg",
        details: {
            "Fokusni element": "čaša kupe s pjenom",
            "Događaj": "društveno okupljanje",
            "Dubinska oštrina": "selektivna, bokeh",
            "Materijalnost": "staklo, citrusna kora",
            "Komunikacija": "gesta ruke u razgovoru",
            "Atmosfera": "večernji interijer"
        }
    },
	{
        title: "Klupa i razgovor",
        category: "ljudi",
        description: "Dvije starije osobe sjede na narančastoj klupi uz kanal; toplo bočno svjetlo.",
        location: "Umag, Hrvatska",
        date: "2024-10-15",
        coordinates: { lat: 45.4372, lng: 13.5257 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika28.jpeg",
        details: {
            "Tema": "odmor i promatranje",
            "Boja akcenta": "narančasta klupa",
            "Linija pogleda": "prema vodi",
            "Svjetlo": "nisko popodnevno",
            "Ritam prostora": "praznina naspram zida",
            "Atmosfera": "tiho, refleksivno"
        }
    },
	{
        title: "Nightlife",
        category: "grad",
        description: "Panorama grada noću; toranj s žutim gornjim katovima dominira tamnim nebom.",
        location: "Zagreb, Hrvatska",
        date: "2024-09-15",
        coordinates: { lat: 45.8015, lng: 16.0156 },
        gradient: "linear-gradient(135deg, #2d5016, #68b347)",
        image: "slike/slika29.jpeg",
        details: {
            "Tip prizora": "noćna urbana panorama",
            "Dominanta": "tornjevi s istaknutim vrhom",
            "Rasvjeta": "umjetna, toplo/hladno miješanje",
            "Skala": "raspršena svjetla grada",
            "Paleta": "cijan, jantar, crna",
            "Atmosfera": "metropolitanska"
        }
    },
    {
        title: "Zima",
        category: "priroda",
        description: "Snježne padine zatvaraju mirno jezero; čisti odraz u vodi i veliko bijelo nebo.",
        location: "Biokovo, Croatia",
        date: "2025-01-12",
        coordinates: { lat: 46.3683, lng: 14.1146 },
        gradient: "linear-gradient(135deg, #0f0f23, #1a1a2e)",
        image: "slike/slika30.jpeg",
        details: {
            "Sezona": "zima, snijeg",
            "Minimalizam": "veliki negativni prostor",
            "Simetrija": "odraz krajolika",
            "Temperatura": "hladna paleta",
            "Tekstura": "led, grane pod snijegom",
            "Atmosfera": "tišina, čistoća"
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = images;

}
