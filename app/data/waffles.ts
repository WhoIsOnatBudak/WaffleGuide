export interface WaffleShop {
    id: number;
    name: string;
    rating: number | null; // null for "Ünlü waffle XX"
    comment: string;
    coords: [number, number]; // [lat, lng]
    image: string;
}

export const waffleShops: WaffleShop[] = [
    {
        id: 1,
        name: "Alice waffle",
        rating: 6.5,
        comment: "Açık konuşayım kötü değil ama diğer seçeneklerin yanında pahalı lezzet olarak çok şekerli ve kaliteli hissettirmiyor",
        coords: [41.095819, 29.005519],
        image: "/aliswaffle.jpg"
    },
    {
        id: 2,
        name: "Asian",
        rating: 7.5,
        comment: "Tabak şeklinde olanı denedim mandalina lezzeti baltalıyor ama iyi diyebilirim",
        coords: [41.086643, 29.045911],
        image: "/asia_waffle.jpg"
    },
    {
        id: 3,
        name: "Sade gurme mutfak",
        rating: 8,
        comment: "Bıçakla keserek yollamaları hoşuma gitti malzemesi bol güzeldi tavsiye ederim",
        coords: [41.095343, 29.031930],
        image: "/sadeGurmeMutfak.jpg"
    },
    {
        id: 4,
        name: "Akbar",
        rating: 8,
        comment: "Ustamın elinin lezzeti KAFAYI yedirtti lütfen yerine gidin yiyin sipariş vermeyin :D",
        coords: [41.119983, 29.036949],
        image: "/akbar.jpg"
    },
    {
        id: 5,
        name: "Belgium",
        rating: 8.5,
        comment: "Pahalı olmadığını ve fiyattan bağımsız olduğumuzu söyleyelim, fiyat performans olarak kötü ama lezeti denediğim en iyilerinden. Porsiyonu da küçük doyurmuyor ama malzemesi de az",
        coords: [41.093974, 29.045710],
        image: "/etilerBelgium.jpeg"
    },
    {
        id: 6,
        name: "WafflePort",
        rating: 7.5,
        comment: "Pahalı bi mekan malzemeleri hoşuma gitmedi ama kötü değil porsiyon olarak tam çeyrek kokoreç yiyip doymadıktan sonra yemelik ve doymalık bir porsiyon.",
        coords: [41.117121, 29.063536],
        image: "/waffleport.jpg"
    },
    {
        id: 7,
        name: "Rainbow waffle",
        rating: 7,
        comment: "Bonibon hoşuma gitti ama genel diğerlerine kıyasla kötü puanın sebebi çikolatanın fazla şekerli olması ama fiyat olarak çok iyi durumda o yüzden tavsiye ediyorum",
        coords: [41.117149, 29.033622],
        image: "/rainbowWaf.jpg"
    },
    {
        id: 8,
        name: "Çabuk wafle",
        rating: 7.75,
        comment: "bence baya iyiydi ama bardakta alın yiyin",
        coords: [41.013521, 28.961206],
        image: "/cubuk.jpg"
    },
    {
        id: 9,
        name: "Ünlü waffle XX",
        rating: null,
        comment: "Buna bir puan yazmıcam çünkü bu kadar ucuz bir waffle cı olamaz ustam şifa katıyor içine gidin yiyin önerin. (Sanırım vergi de kaçırıyorlar ama çaktırmayın)",
        coords: [41.014545, 28.959068],
        image: "/unluWaffle.jpg"
    },
];
