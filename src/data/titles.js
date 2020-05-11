const titles = [
    'Cali Y El Dandee, Sebastián Yatra - Locura (Official Video)',
    'Ricky Martin, Farruko - Tiburones (Remix - Official Video)',
    'Cali Y El Dandee - Solamente Tú (Official Audio)',
    'Ricardo Arjona - Hongos (Cover)',
    'Little Mix - Break Up Song (Official Video)',
    'HICE COMIDA DE TIK TOK *food hacks* (de nuevo)',
    'Dua Lipa - Break My Heart (Animated Video)',
    'Jesse & Joy - Alguien Más (Video Oficial)',
    'El Dipy - Fuiste Vos (Video Lyric)',
    'Daniel El Travieso - La Caja Misteriosa. (TEMPORADA 2 - EPISODIO 12)',
    'tuneando mi ropa jeje',
    'LA COLECCION DE SNEAKERS DE MI BEBÉ😱',
    'La GUERRA de las ISLAS MALVINAS | Draw My Life',
    'BIG SOTO || BZRP Music Sessions #28',
    'David Gilmour - Live At Pompeii (Full Concert)',
    'Romantic Pop',
    'Argentinian Pop',
    'Hotlist Argentina',
    'Hotlist reggaeton',
    'Presenting Soda Stereo',
    'Cumbia Santafesina',
    'Cuarteto from Argentina',
    'Argentina Cumbia Classics',
    'Al Millón',
    'Argentina New Cumbia Hits',
    'Emisión en directo de Youtube C5N',
    'LUCHA LIBRE AAA: Lucha Fighter LIVE | EPISODIO 4 #QuédateEnCasa',
    'Steve Wozniak interview: Blockchain technology, AI, Crypto, Bitcoin BTC Halving 2020',
    '🔴 Robert Kiyosaki Live: Blockchain technology, Future of Crypto, Bitcoin BTC Halving 2020',
    'Camilo - Favorito (Official Video)',
    'SACA AL LEÓN SIN ROMPER NADA ¿¡PERO CÓMO!?',
    'Casados Con Hijos - La peluquería de Don Argento (1x38) [1080p] [HD] | Capítulo Completo',
    'typical | Hi I am German',
    'Los Redondos Estadio C.A. Huracán,  Buenos Aires 16 Y 17 De Diciembre 1994 (Fragmentos De Recital)',
    '09 - GORDILLO - Mi abuelo Joselino - GORDISHOW Teatro Opera 2016',
    'La Trilogía de El Planeta de los Simios | #TeLoResumoAsiNomas 213',
    'SORPRENDENTES HABITACIONES SECRETAS Y MUEBLES INTELIGENTES',
    'Peter Capusotto y sus Videos - Dandy Villanueva - 4º B Temporada  - Programa 7 (2009)',
    'MEJORES MOMENTOS DEL KUN EN TWITCH',
    'How To Build The Most Modern Underground Swimming Pools with Underground House',
    '10 Cosas que fueron creadas por accidente 😧',
    'J Balvin - Rojo (Official Video)',
    'EL CASO DE JASMINE RICHARDSON - NIÑA DE 12 AÑOS',
    'Así es la escuela más cara del mundo | HARVARD',
    'España vs Perú - Final - God Level fest 2019 Perú',
    'Cat William MEETS his baby kitten named Artist 😂😍',
    'Fabrico un GIROSCOPIO ¿Sabes para que sirve?',
    'BUSCO MI NOMBRE EN GOOGLE | I Google Myself',
    'Tinelli presenta a Guido Kaczka, Sofovich - Videomatch 98',
    'Así Nacía El Mito Ya  Leyenda Del Abogado Nivel Dios',
    'La música nos une #pesado2020',
    'LP - Lost On You [Live Session]',
    'LA MEJOR CARRERA DEL MUNDO! - GTA V ONLINE',
    'Cali Y El Dandee, Sebastián Yatra - Locura (Official Video)',
    'La GUERRA de las ISLAS MALVINAS | Draw My Life',
    'Cali Y El Dandee - Solamente Tú (Official Audio)',
    'tuneando mi ropa jeje',
    'HICE COMIDA DE TIK TOK *food hacks* (de nuevo)',
    'TURNING LETTERS INTO DRAWINGS | 10 CREATIVE DRAWINGS | HaroldArtist',
    'Dua Lipa - Break My Heart (Animated Video)',
    'Ricky Martin, Farruko - Tiburones (Remix - Official Video)',
    'Ricardo Arjona - Hongos (Cover)',
    'Little Mix - Break Up Song (Official Video)',
    'David Gilmour - Live At Pompeii (Full Concert)',
    'SNOBALLS o GRASITOS DE iCARLY - La Cooquette',
    'Jesse & Joy - Alguien Más (Video Oficial)',
    'Daniel El Travieso - La Caja Misteriosa. (TEMPORADA 2 - EPISODIO 12)',
    'LA COLECCION DE SNEAKERS DE MI BEBÉ😱',
    'J Balvin - Rojo (Official Video)',
    'Residente - René (Official Video)',
    'Aventura - Todavía (Sold Out At Madison Square Garden)',
    'Muévelo - Nicky Jam & Daddy Yankee',
    'J Balvin - Amarillo (Official Video)',
    'TINI, Sebastián Yatra - Oye',
    'Los Palmeras VS. Ráfaga - Todos los Éxitos Enganchados Cumbia Tube',
    'Safaera - Bad Bunny, Ñengo Flow, Jowell y Randy | Choreography Emir Abdul Gani🕺',
    'Feid & Justin Quiles - PORFA (Lyrics/Letra)',
    'TINI - Consejo de Amor (Official Video) ft. Morat',
    'J Balvin - Rosa (Official Video)',
    'TINI, Greeicy - 22',
    'Los Ángeles Azules - Y la Hice Llorar ft. Abel Pintos',
    'Paulo Londra - Solo Pienso en Ti ft. De La Ghetto, Justin Quiles (Official Video)',
    'Los Palmeras ft. Chaqueño Palavecino - Doble Vida',
    'Así es la escuela más cara del mundo | HARVARD',
    'Visitando un SUPERMERCADO EN CHINA!',
    'Visité el país donde NADIE vive | Ordos',
    'Así es el mercado de piratería más grande del mundo | TURQUÍA',
    'Compré un ROBOT INTELIGENTE que es tu asistente 🤖😱 | ¿Vale la pena?',
    '¿Por qué NUNCA terminé la universidad?',
    'Visité la ciudad donde solamente vive una persona | Epecuén, Argentina',
    '¿Cuál es el pastelillo MÁS DELICIOSO del mundo? 🍰😋',
    'España vs Perú - Final - God Level fest 2019 Perú',
    'Paulo Londra - Solo Pienso en Ti ft. De La Ghetto, Justin Quiles (Official Video)',
    'NICKI NICOLE || BZRP Music Sessions #13',
    'Feid, Justin Quiles - Porfa (Video Oficial)',
    'Daddy Yankee & Snow - Con Calma (Official Video)',
    'JD Pantoja & Khea - Se Motiva (Video Oficial)',
    'La Cama (Remix) - Lunay X Myke Towers X Ozuna ft. Chencho Corleone X Rauw Alejandro (Video Oficial)',
    'Reggaeton 2020 Lo Mas Nuevo ★ Becky G, Maluma, Ozuna, Wisin, Daddy Yankee, ROSALÍA, Bad Bunny.',
    'Nibal, Justin Quiles, Danny Ocean, Feid - Cuando Amanezca (Video Oficial)',
    'Aitana, Ana Guerra - Lo Malo (Remix) ft. Greeicy, TINI',
    'Cat William MEETS his baby kitten named Artist 😂😍',
    "I Know I'm Cute. But I'm Not A Kitty Okay",
    'Golden Retrievers and Husky Meeting Their Best Friends Newborn Kitten',
    'BUSCO MI NOMBRE EN GOOGLE | I Google Myself',
    'COMIDA EN COMERCIALES vs. COMIDA REAL',
    'EMOTIVOS REENCUENTROS DE ANIMALES CON SUS DUEÑOS',
    'ANIMALES Rescatando a OTROS ANIMALES !!',
    'SI TE RIES, REINICIA EL VIDEO !!!!!',
    'Si Eres Un Burro NO VAYAS A LA TELEVISION!!',
    'ESTO ES UN MILAGRO!!!! (mi primer victoria)',
    'Tinelli presenta a Guido Kaczka, Sofovich - Videomatch 98',
    'Videomatch   El padre de la novia 006',
    'Figuretti en la Fórmula 1 - Videomatch 97',
    '85 Minutos de Yayo !',
    'Cumbia noventosa con grupo Red y un invitado muy especial - Videomatch 99',
    'Yayo  - 120 minutos de chistes y piropos - Set completo Videomatch y Showmatch',
    'Messi vs Tinelli (Showmatch 2005)',
    'VideoMatch - Chistes Cacho Garay 2º Parte',
    'VideoMatch - Chistes de Cacho Garay 1º Parte',
    'El campeonato de Chiste:  Rubén de Jujuy  - Videomatch',
];

const random = (element) => {
    return Math.floor(Math.random() * element.length);
};

const randomNumber = (randomNumber) => {
    return 1 + Math.ceil(Math.random() * randomNumber - 1);
};

export function getTitle() {
    const title = titles[random(titles)];
    return title;
}

export function getChannelName() {
    const title = getTitle();
    const channelName = title.split(' ')[random(title.split(' '))];
    return channelName;
}

const viewSymbols = ['', 'K', 'M'];
const dateNames = ['hours', 'days', 'weeks', 'months', 'years'];

export function getVideoViews() {
    const videoViews = `${randomNumber(999)}${
        viewSymbols[random(viewSymbols)]
    } views`;
    return videoViews;
}

export function getVideoAge() {
    const videoAge = `${randomNumber(12)} ${dateNames[random(dateNames)]} ago`;
    return videoAge;
}

export default titles;
