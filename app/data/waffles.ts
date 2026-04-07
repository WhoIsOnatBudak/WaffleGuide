export type ShopType = 'waffle' | 'burger';

export interface WaffleShop {
    id: number;
    name: string;
    rating: number | null; // null for "Ünlü waffle XX"
    comment: string;
    coords: [number, number]; // [lat, lng]
    image: string;
    type: ShopType;
}

export const waffleShops: WaffleShop[] = [
    {
        id: 1,
        name: "Alice waffle",
        rating: 6.5,
        comment: "Açık konuşayım kötü değil ama diğer seçeneklerin yanında pahalı lezzet olarak çok şekerli ve kaliteli hissettirmiyor",
        coords: [41.095819, 29.005519],
        image: "/aliswaffle.jpg",
        type: 'waffle'
    },
    {
        id: 2,
        name: "Asian",
        rating: 7.5,
        comment: "Tabak şeklinde olanı denedim mandalina lezzeti baltalıyor ama iyi diyebilirim",
        coords: [41.086643, 29.045911],
        image: "/asia_waffle.jpg",
        type: 'waffle'
    },
    {
        id: 3,
        name: "Sade gurme mutfak",
        rating: 8,
        comment: "Bıçakla keserek yollamaları hoşuma gitti malzemesi bol güzeldi tavsiye ederim",
        coords: [41.095343, 29.031930],
        image: "/sadeGurmeMutfak.jpg",
        type: 'waffle'
    },
    {
        id: 4,
        name: "Akbar",
        rating: 8,
        comment: "Ustamın elinin lezzeti KAFAYI yedirtti lütfen yerine gidin yiyin sipariş vermeyin :D",
        coords: [41.119983, 29.036949],
        image: "/akbar.jpg",
        type: 'waffle'
    },
    {
        id: 5,
        name: "Belgium",
        rating: 8.5,
        comment: "Pahalı olmadığını ve fiyattan bağımsız olduğumuzu söyleyelim, fiyat performans olarak kötü ama lezeti denediğim en iyilerinden. Porsiyonu da küçük doyurmuyor ama malzemesi de az",
        coords: [41.093974, 29.045710],
        image: "/etilerBelgium.jpeg",
        type: 'waffle'
    },
    {
        id: 6,
        name: "WafflePort",
        rating: 7.5,
        comment: "Pahalı bi mekan malzemeleri hoşuma gitmedi ama kötü değil porsiyon olarak tam çeyrek kokoreç yiyip doymadıktan sonra yemelik ve doymalık bir porsiyon.",
        coords: [41.117121, 29.063536],
        image: "/waffleport.jpg",
        type: 'waffle'
    },
    {
        id: 7,
        name: "Rainbow waffle",
        rating: 7,
        comment: "Bonibon hoşuma gitti ama genel diğerlerine kıyasla kötü puanın sebebi çikolatanın fazla şekerli olması ama fiyat olarak çok iyi durumda o yüzden tavsiye ediyorum",
        coords: [41.117149, 29.033622],
        image: "/rainbowWaf.jpg",
        type: 'waffle'
    },
    {
        id: 8,
        name: "Çabuk wafle",
        rating: 7.75,
        comment: "bence baya iyiydi ama bardakta alın yiyin",
        coords: [41.013521, 28.961206],
        image: "/cubuk.jpg",
        type: 'waffle'
    },
    {
        id: 9,
        name: "Ünlü waffle XX",
        rating: null,
        comment: "Buna bir puan yazmıcam çünkü bu kadar ucuz bir waffle cı olamaz ustam şifa katıyor içine gidin yiyin önerin. (Sanırım vergi de kaçırıyorlar ama çaktırmayın)",
        coords: [41.014545, 28.959068],
        image: "/unluWaffle.jpg",
        type: 'waffle'
    },
    {
        id: 10,
        name: "Aş'kım Waffle & Kumpir",
        rating: 7.5,
        comment: "Mustafa Bozdağan bey ile beraber sipariş verdik, bence fazla şekerliydi ve bonibon harbiden kötüydü. Tüm bunlara rağmen hala neden 7.5 diye düşünüyosanız kalite bazen kendini belli eder :)",
        coords: [41.116643, 28.998508],
        image: "/AskimWaf.png",
        type: 'waffle'
    },
    {
        id: 11,
        name: "White burger yeniköy",
        rating: 7,
        comment: "Bence sulu ve güzeldi arif çok beğenmedi o yüzden 7",
        coords: [41.118576, 29.067190],
        image: "/whiteBurgerYen.jpg",
        type: 'burger'
    },
    {
        id: 12,
        name: "White Burger Nişantaşı",
        rating: 7,
        comment: "Ata ben yunus gittik. Bence güzeldi 3 burgerli alın",
        coords: [41.050866, 28.993012],
        image: "/whiteBurgerNis.jpg",
        type: 'burger'
    },
    {
        id: 13,
        name: "Betro Burger Beşiktaş",
        rating: 8.5,
        comment: "Yediğim en iyi burgerlerden biriydi ama son yıllarda çok kötüleşti hatırasına bile yenir",
        coords: [41.043860, 29.002083],
        image: "/BetroBes.jpg",
        type: 'burger'
    },
    {
        id: 14,
        name: "Betro Burger Kadıköy",
        rating: 7.5,
        comment: "Bence şu anlık beşiktaştakinden daha iyi yicekseniz burda yiyin",
        coords: [40.988495, 29.027291],
        image: "/BetroKad.jpg",
        type: 'burger'
    },
    {
        id: 15,
        name: "Biber Burger Kadıköy",
        rating: 6,
        comment: "Biber adına yakışmıyor yediğim en kötü biber burger yani diğer her şube daha iyi",
        coords: [40.983236, 29.023679],
        image: "/biberKad.jpeg",
        type: 'burger'
    },
    {
        id: 16,
        name: "Biber Burger Bomonti",
        rating: 7.3,
        comment: "Bence en kaliteli biber burger burası gelin deneyin karamalize soğan <3",
        coords: [41.057565, 28.981783],
        image: "/biberBom.jpg",
        type: 'burger'
    },
    {
        id: 17,
        name: "Biber Burger Beşiktaş",
        rating: 7,
        comment: "Ata biladerim ile ilk başlarda yemiştik çok dolu oluyo ama hoş",
        coords: [41.042527, 29.008792],
        image: "/biberBes.jpg",
        type: 'burger'
    },
    {
        id: 18,
        name: "Akali Burger Beşiktaş",
        rating: 7.8,
        comment: "Burgeri falan iyi de o patates kızartması neydi öyle ya. Bi deneyin bunu okuyan olursa :)",
        coords: [41.043353, 28.999051],
        image: "/Akali.jpg",
        type: 'burger'
    },
    {
        id: 19,
        name: "Balta Burger",
        rating: 7,
        comment: "Puanı biraz yüksek çünkü fiyatı çok uygun ama o kadar kalite beklemeyin",
        coords: [41.044250, 29.003139],
        image: "/baltaB.jpeg",
        type: 'burger'
    },
    {
        id: 20,
        name: "depo burger",
        rating: 7,
        comment: "Özden hanım götürdü bence bi tık küçüktü ama lezzetliydi, özden beğenmedi ama napim",
        coords: [41.051121, 28.992127],
        image: "/depoBurger.jpeg",
        type: 'burger'
    },
    {
        id: 21,
        name: "basta street food",
        rating: 8,
        comment: "Kuzu yemiştim sanırım baya farklı geldi bi denemek lazım yüksek vericem",
        coords: [40.987702, 29.026227],
        image: "/basta.jpg",
        type: 'burger'
    },
    {
        id: 22,
        name: "salt fried chicken",
        rating: 7.5,
        comment: "Baya büyüktü burger tavuk olduğu için de ucuzdu takılmaya denenir",
        coords: [41.044251, 29.000937],
        image: "/salt.jpeg",
        type: 'burger'
    },
    {
        id: 23,
        name: "İTÜ Cajun Corner",
        rating: null,
        comment: "Bu da nadir özel dediğimiz yerlerden, okula tam böyle bir şey lazımdı mede açılan hiçbir mekan tutamadı bu tuttu çünkü ucuz ve hızlı.(Ramazanda iftara gitmeyin)",
        coords: [41.105551, 29.022959],
        image: "/cajunITU.jpeg",
        type: 'burger'
    },
    {
        id: 24,
        name: "Beşiktaş Cajun",
        rating: 7,
        comment: "İki defa yedim bir kere yanımda kolayı falan her içeceği boykot eden biri vardı gidip marketten ayran alıp geldiler gözüme girdiler.",
        coords: [41.042927, 29.004186],
        image: "/cajunBes.jpeg",
        type: 'burger'
    },
    {
        id: 25,
        name: "An Burger",
        rating: 9,
        comment: "Yakın zamanda yemedim ama yediğim en iyi burgerlerden biriydi. Çok yumuşaktı nasıl tarif edilir bilmiyom alın deneyin ama hafif pahalı ayık olun",
        coords: [41.106952, 29.039396],
        image: "/AnBurger.jpeg",
        type: 'burger'
    },
    {
        id: 26,
        name: "Burger Yiyelim Beşiktaş",
        rating: 6.9,
        comment: "Klasik burger işte denemeyin bence ama okey yani",
        coords: [41.043512, 29.007061],
        image: "/Byiyelim.jpg",
        type: 'burger'
    },
    {
        id: 27,
        name: "köfteci yusuf sanayi",
        rating: 6.99,
        comment: "Bursa fan boy olmama rağmen ve çok doyurucu olmasına rağmen 7 vermek istemedim",
        coords: [41.096082, 29.005683],
        image: "/yusuf.jpeg",
        type: 'burger'
    },
    {
        id: 28,
        name: "küçükev burger",
        rating: 6,
        comment: "Kötü ya baya kötü yani. Çok da abartmadan 6 verip geçiyom giderseniz çıtır tavku 10 lu alın selamımı söyleyin",
        coords: [41.104655, 29.019389],
        image: "/kucukEv.jpg",
        type: 'burger'
    },
        {
        id: 29,
        name: "Zapata Burger",
        rating: 9,
        comment: "An burger ile beraber yediğim en iyisi, Özden hanım ısmarladı unutamam beleşe yediğimi belki o yüzden güzeldir. Her ay yeni bir ayın burgeri var hepsini güzel yapıyolar diye duydum ama denemedim klasikleri güzel",
        coords: [40.987663, 29.025778],
        image: "/zapata.jpg",
        type: 'burger'
    }
];
