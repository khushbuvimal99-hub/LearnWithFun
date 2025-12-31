// Helper to get consistent educational icons
const getIcon = (name) => `https://img.icons8.com/color/96/${name.toLowerCase()}.png`;

// Full Hindi Varnmala
export const hindiVarnmala = [
    { char: 'अ', word: 'अनार', image: 'anar.png', sound: 'अ से अनार' },
    { char: 'आ', word: 'आम', image: 'mango.png', sound: 'आ से आम' },
    { char: 'इ', word: 'इमली', image: 'https://img.icons8.com/color/96/tamarind.png', sound: 'इ से इमली' },
    { char: 'ई', word: 'ईख', image: 'https://img.icons8.com/color/96/sugar-cane.png', sound: 'ई से ईख' },
    { char: 'उ', word: 'उल्लू', image: 'https://img.icons8.com/color/96/owl.png', sound: 'उ से उल्लू' },
    { char: 'ऊ', word: 'ऊन', image: 'https://img.icons8.com/color/96/wool-ball.png', sound: 'ऊ से ऊन' },
    { char: 'ऋ', word: 'ऋषि', image: 'https://img.icons8.com/color/96/guru.png', sound: 'ऋ से ऋषि' },
    { char: 'ए', word: 'एड़ी', image: 'https://img.icons8.com/color/96/foot-pain.png', sound: 'ए से एड़ी' },
    { char: 'ऐ', word: 'ऐनक', image: 'https://img.icons8.com/color/96/glasses.png', sound: 'ऐ से ऐनक' },
    { char: 'ओ', word: 'ओखली', image: 'https://img.icons8.com/color/96/mortar-and-pestle.png', sound: 'ओ से ओखली' },
    { char: 'औ', word: 'औरत', image: 'https://img.icons8.com/color/96/woman-profile.png', sound: 'औ से औरत' },
    { char: 'अं', word: 'अंगूर', image: 'grapes.png', sound: 'अं से अंगूर' },
    { char: 'अः', word: 'अः', image: 'https://img.icons8.com/color/96/om.png', sound: 'अः' },
    { char: 'क', word: 'कबूतर', image: 'https://img.icons8.com/color/96/pigeon.png', sound: 'क से कबूतर' },
    { char: 'ख', word: 'खरगोश', image: 'https://img.icons8.com/color/96/rabbit.png', sound: 'ख से खरगोश' },
    { char: 'ग', word: 'गमला', image: 'https://img.icons8.com/color/96/potted-plant.png', sound: 'ग से गमला' },
    { char: 'घ', word: 'घड़ी', image: 'https://img.icons8.com/color/96/clock.png', sound: 'घ से घड़ी' },
    { char: 'ङ', word: 'ङ', image: 'https://img.icons8.com/color/96/help.png', sound: 'ङ' },
    { char: 'च', word: 'चम्मच', image: 'https://img.icons8.com/color/96/spoon.png', sound: 'च से चम्मच' },
    { char: 'छ', word: 'छाता', image: 'https://img.icons8.com/color/96/umbrella.png', sound: 'छ से छाता' },
    { char: 'ज', word: 'जहाज', image: 'https://img.icons8.com/color/96/ship.png', sound: 'ज से जहाज' },
    { char: 'झ', word: 'झंडा', image: 'https://img.icons8.com/color/96/flag.png', sound: 'झ से झंडा' },
    { char: 'ञ', word: 'ञ', image: 'https://img.icons8.com/color/96/help.png', sound: 'ञ' },
    { char: 'ट', word: 'टमाटर', image: 'https://img.icons8.com/color/96/tomato.png', sound: 'ट से टमाटर' },
    { char: 'ठ', word: 'ठठेरा', image: 'https://img.icons8.com/color/96/hammer.png', sound: 'ठ से ठठेरा' },
    { char: 'ड', word: 'डमरू', image: 'https://img.icons8.com/color/96/drums.png', sound: 'ड से डमरू' },
    { char: 'ढ', word: 'ढक्कन', image: 'https://img.icons8.com/color/96/pot-side-view.png', sound: 'ढ से ढक्कन' },
    { char: 'ण', word: 'ण', image: 'https://img.icons8.com/color/96/help.png', sound: 'ण' },
    { char: 'त', word: 'तरबूज', image: 'https://img.icons8.com/color/96/watermelon.png', sound: 'त से तरबूज' },
    { char: 'थ', word: 'थर्मस', image: 'https://img.icons8.com/color/96/thermos-bottle.png', sound: 'थ से थर्मस' },
    { char: 'द', word: 'दवात', image: 'https://img.icons8.com/color/96/inkwell.png', sound: 'द से दवात' },
    { char: 'ध', word: 'धनुष', image: 'https://img.icons8.com/color/96/bow-and-arrow.png', sound: 'ध से धनुष' },
    { char: 'न', word: 'नल', image: 'https://img.icons8.com/color/96/faucet.png', sound: 'न से नल' },
    { char: 'प', word: 'पतंग', image: 'kite.png', sound: 'प से पतंग' },
    { char: 'फ', word: 'फल', image: 'https://img.icons8.com/color/96/fruits.png', sound: 'फ से फल' },
    { char: 'ब', word: 'बत्तख', image: 'https://img.icons8.com/color/96/duck.png', sound: 'ब से बत्तख' },
    { char: 'भ', word: 'भालू', image: 'https://img.icons8.com/color/96/bear.png', sound: 'भ से भालू' },
    { char: 'म', word: 'मछली', image: 'https://img.icons8.com/color/96/fish.png', sound: 'म से मछली' },
    { char: 'य', word: 'यज्ञ', image: 'https://img.icons8.com/color/96/fire.png', sound: 'य से यज्ञ' },
    { char: 'र', word: 'रथ', image: 'https://img.icons8.com/color/96/chariot.png', sound: 'र से रथ' },
    { char: 'ल', word: 'लट्टू', image: 'https://img.icons8.com/color/96/spinning-top.png', sound: 'ल से लट्टू' },
    { char: 'व', word: 'वकील', image: 'https://img.icons8.com/color/96/lawyer.png', sound: 'व से वकील' },
    { char: 'श', word: 'शलगम', image: 'https://img.icons8.com/color/96/beet.png', sound: 'श से शलगम' },
    { char: 'ष', word: 'षटकोण', image: 'https://img.icons8.com/color/96/hexagon.png', sound: 'ष से षटकोण' },
    { char: 'स', word: 'सपेरा', image: 'https://img.icons8.com/color/96/snake.png', sound: 'स से सपेरा' },
    { char: 'ह', word: 'हाथी', image: 'https://img.icons8.com/color/96/elephant.png', sound: 'ह से हाथी' },
    { char: 'क्ष', word: 'क्षत्रिय', image: 'https://img.icons8.com/color/96/sword.png', sound: 'क्ष से क्षत्रिय' },
    { char: 'त्र', word: 'त्रिशूल', image: 'https://img.icons8.com/color/96/trident.png', sound: 'त्र से त्रिशूल' },
    { char: 'ज्ञ', word: 'ज्ञानी', image: 'https://img.icons8.com/color/96/student-male.png', sound: 'ज्ञ से ज्ञानी' },
    { char: 'श्र', word: 'श्रमिक', image: 'https://img.icons8.com/color/96/worker-male.png', sound: 'श्र से श्रमिक' },
    { char: 'ड़', word: 'ड़', image: 'https://img.icons8.com/color/96/help.png', sound: 'ड़' },
    { char: 'ढ़', word: 'ढ़', image: 'https://img.icons8.com/color/96/help.png', sound: 'ढ़' }
];

// Map of words to Icons8 slug names for better matching
const englishMapping = {
    'A': { word: 'Apple', icon: 'apple.png' },
    'B': { word: 'Ball', icon: 'ball.png' },
    'C': { word: 'Cat', icon: 'cat.png' },
    'D': { word: 'Dog', icon: 'dog.png' },
    'E': { word: 'Elephant', icon: 'elephant' },
    'F': { word: 'Fish', icon: 'fish' },
    'G': { word: 'Grapes', icon: 'grapes.png' },
    'H': { word: 'Hat', icon: 'fedora' },
    'I': { word: 'Ice Cream', icon: 'ice-cream-cone' },
    'J': { word: 'Jug', icon: 'pitcher' },
    'K': { word: 'Kite', icon: 'kite.png' },
    'L': { word: 'Lion', icon: 'lion' },
    'M': { word: 'Monkey', icon: 'monkey' },
    'N': { word: 'Nest', icon: 'bird-nest' },
    'O': { word: 'Orange', icon: 'orange' },
    'P': { word: 'Parrot', icon: 'parrot' },
    'Q': { word: 'Queen', icon: 'queen' },
    'R': { word: 'Rabbit', icon: 'rabbit' },
    'S': { word: 'Sun', icon: 'sun' },
    'T': { word: 'Tiger', icon: 'tiger' },
    'U': { word: 'Umbrella', icon: 'umbrella' },
    'V': { word: 'Van', icon: 'truck' },
    'W': { word: 'Watch', icon: 'watch' },
    'X': { word: 'Xylophone', icon: 'xylophone' },
    'Y': { word: 'Yak', icon: 'yak' },
    'Z': { word: 'Zebra', icon: 'zebra' }
};

export const englishAlphabet = Object.keys(englishMapping).map(char => {
    const item = englishMapping[char];
    return {
        char,
        word: item.word,
        image: item.icon.endsWith('.png') ? item.icon : getIcon(item.icon),
        sound: `${char} for ${item.word}`
    };
});

// Full Numbers List (1-100)
export const numbersList = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    let image;
    
    if (num === 1) image = 'number_one.png';
    else if (num <= 10) image = `https://img.icons8.com/color/96/number-${num}.png`;
    else image = `https://img.icons8.com/fluency/96/circled-${num}.png`; // Fluency style for higher numbers

    return {
        char: num.toString(),
        word: '',
        image: image,
        sound: num.toString()
    };
});