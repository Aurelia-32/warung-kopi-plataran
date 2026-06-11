/* =========================================
   Menu data - based on photo menu
   ========================================= */

window.menuMakanan = [
  {
    key: "paket_sambelan",
    title: "Menu Paket Sambelan",
    subtitle: "ISI: NASI, LAUK, TEMPE GORENG, SAMBAL, PELAS",
    items: [
      { nama: "Ayam",        harga: 28000, best: false, has_photo: false,  photo: "" },
      { nama: "Iwak Pe",     harga: 27000, best: true,  has_photo: false,  photo: "" },
      { nama: "Udang",       harga: 34000, best: false, has_photo: true,  photo: "images/sambelan-udang.jpg" },
      { nama: "Daging Bumbu",harga: 38000, best: false, has_photo: false, photo: "" },
      { nama: "Cakalang",    harga: 26000, best: false, has_photo: true, photo: "images/sambelan-cakalang.jpg" },
      { nama: "Cumi",        harga: 34000, best: true,  has_photo: true,  photo: "images/sambelan-cumi.jpg" },
      { nama: "Paru",        harga: 32000, best: true,  has_photo: true, photo: "images/sambelan-paru.jpg" }
    ]
  },
  {
    key: "lauk_saja",
    title: "Lauk Saja",
    subtitle: "TANPA NASI, PORSI 2X LEBIH BANYAK",
    items: [
      { nama: "Ayam",        harga: 28000, best: false, has_photo: false, photo: "" },
      { nama: "Iwak Pe",     harga: 27000, best: false, has_photo: false, photo: "" },
      { nama: "Udang",       harga: 34000, best: false, has_photo: false, photo: "" },
      { nama: "Daging Bumbu",harga: 38000, best: false, has_photo: false, photo: "" },
      { nama: "Cakalang",    harga: 26000, best: false, has_photo: false, photo: "" },
      { nama: "Cumi",        harga: 34000, best: false, has_photo: false, photo: "" },
      { nama: "Paru",        harga: 32000, best: false, has_photo: false, photo: "" }
    ]
  },
  {
    key: "pecel",
    title: "Menu Pecel",
    subtitle: "ISI: NASI, SAYUR, MIE, OREK TEMPE, TEMPE MENDOAN, KERUPUK PULI",
    items: [
      { nama: "Nasi Pecel", harga: 12000, best: true, has_photo: false, photo: "" }
    ]
  },
  {
    key: "menu_lain",
    title: "Menu Lain",
    items: [
      { nama: "Nasi Penyet Ayam Goreng Kampung",  harga: 33000, best: false, has_photo: false, photo: "" },
      { nama: "Mangut Ikan Panggang (Tanpa Nasi)",harga: 25000, best: false, has_photo: true, photo: "images/mangut-ikan.jpg" },
      { nama: "Nasi Mangut Ikan Panggang",         harga: 30000, best: false, has_photo: false, photo: "" },
      { nama: "Nasi Kare Ayam Kampung",            harga: 35000, best: false, has_photo: false, photo: "", badge: "BARU" },
      { nama: "Kare Ayam Kampung (Tanpa Nasi)",    harga: 30000, best: false, has_photo: true, photo: "images/kare-ayam.jpg", badge: "BARU" }
    ]
  },
  {
    key: "pelengkap",
    title: "Pelengkap",
    items: [
      { nama: "Pelas Krispi", harga:  8000, best: false, has_photo: true, photo: "images/pelas.jpg" },
      { nama: "Telur Krispi", harga: 13000, best: false, has_photo: false, photo: "" },
      { nama: "Tahu Krispi",  harga:  8000, best: false, has_photo: true, photo: "images/tahu.jpg" },
      { nama: "Nasi Putih",   harga:  6000, best: false, has_photo: false, photo: "" },
      { nama: "Tempe Mendoan",harga:  8000, best: false, has_photo: true, photo: "images/tempe.jpg" }
    ]
  }
];

window.menuMinuman = [
  {
    key: "khas",
    title: "Khas Warung Kopi Plataran",
    items: [
      { nama: "Kopi Bakar",            harga: 26000, best: false, has_photo: true, photo: "images/kopi-bakar.jpg" },
      { nama: "Kopi Kothok Plataran",  harga: 15000, best: true,  has_photo: true,  photo: "images/kopi-kothok.jpg" }
    ]
  },
  {
    key: "kopi",
    title: "Kopi",
    items: [
      { nama: "Americano",           harga: 18000, best: false, has_photo: false, photo: "" },
      { nama: "Cappucino",           harga: 20000, best: false, has_photo: false, photo: "" },
      { nama: "Kopi Susu Gula Aren", harga: 22000, best: true,  has_photo: true,  photo: "" },
      { nama: "Kopi Susu Coklat",    harga: 22000, best: false, has_photo: false, photo: "" },
      { nama: "Kopi Susu Regal",     harga: 22000, best: false, has_photo: false, photo: "" },
      { nama: "Midnight Mojito (Non Alkohol)", harga: 22000, best: false, has_photo: false, photo: "" }
    ]
  },
  {
    key: "non_kopi",
    title: "Non Kopi",
    items: [
      { nama: "Susu Regal",         harga: 18000, best: true,  has_photo: false, photo: "" },
      { nama: "Susu Aren",          harga: 16000, best: false, has_photo: false, photo: "" },
      { nama: "Oreo Cookies & Cream", harga: 15000, best: true, has_photo: false, photo: "" }
    ]
  },
  {
    key: "tradisional",
    title: "Tradisional",
    items: [
      { nama: "Aneka Wedang (Uwuh, Bandrek, Sekoteng, Jahe Ginseng)", harga: 15000, best: false, has_photo: true, photo: "images/wedang-uwuh.jpg" },
      { nama: "Gulas Asam Soda",           harga: 20000, best: true, has_photo: false, photo: "" },
      { nama: "Gulas Asam Jawa (Tanpa Soda)", harga: 19000, best: false, has_photo: false, photo: "" }
    ]
  },
  {
    key: "choco",
    title: "Choco Series",
    items: [
      { nama: "Royal Chocolate (Panas / Dingin)", harga: 18000, best: true, has_photo: false, photo: "" },
      { nama: "Choco Regal",                       harga: 21000, best: false, has_photo: false, photo: "" }
    ]
  },
  {
    key: "lainnya",
    title: "Lainnya",
    items: [
      { nama: "Air Mineral",     harga: 6000, best: false, has_photo: false, photo: "" },
      { nama: "Teh Panas / Es",  harga: 6000, best: false, has_photo: false, photo: "" }
    ]
  }
];

window.formatRupiah = function (n) {
  return "Rp " + n.toLocaleString("id-ID");
};
