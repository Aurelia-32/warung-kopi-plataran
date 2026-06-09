/* =========================================
   Menu spreads (book pages) - based on photo menu
   ========================================= */

(function () {
  const M = window.menuMakanan;
  const N = window.menuMinuman;

  const g   = (arr, key) => arr.find((x) => x.key === key);
  const itm = (grp, nama) => grp.items.find((i) => i.nama === nama);

  const sambelan   = g(M, "paket_sambelan");
  const laukSaja   = g(M, "lauk_saja");
  const pecel      = g(M, "pecel");
  const menuLain   = g(M, "menu_lain");
  const pelengkap  = g(M, "pelengkap");

  const khas        = g(N, "khas");
  const kopi        = g(N, "kopi");
  const nonKopi     = g(N, "non_kopi");
  const tradisional = g(N, "tradisional");
  const choco       = g(N, "choco");
  const lainnya     = g(N, "lainnya");

  window.spreads = [
    {
      id: "cover",
      left:  { kind: "cover" },
      right: { kind: "photo", item: itm(sambelan, "Cumi"), label: "Paket Sambelan" }
    },
    {
      id: "mak1",
      left:  { kind: "list", title: "Menu Makanan", groups: [sambelan] },
      right: { kind: "list", title: "Menu Makanan", groups: [laukSaja] }
    },
    {
      id: "mak2",
      left:  { kind: "photo", item: itm(menuLain, "Mangut Ikan Panggang (Tanpa Nasi)"), label: "Menu Lain" },
      right: { kind: "list", title: "Menu Makanan", groups: [pecel, menuLain] }
    },
    {
      id: "mak3",
      left:  { kind: "photo", item: itm(pelengkap, "Pelas Krispi"), label: "Pelengkap" },
      right: { kind: "list", title: "Menu Makanan", groups: [pelengkap] }
    },
    {
      id: "min1",
      left:  { kind: "photo", item: itm(khas, "Kopi Kothok Plataran"), label: "Khas Plataran" },
      right: { kind: "list", title: "Menu Minuman", groups: [khas, kopi] }
    },
    {
      id: "min2",
      left:  { kind: "photo", item: itm(tradisional, "Aneka Wedang (Uwuh, Bandrek, Sekoteng, Jahe Ginseng)"), label: "Tradisional" },
      right: { kind: "list", title: "Menu Minuman", groups: [nonKopi, tradisional] }
    },
    {
      id: "min3",
      left:  { kind: "photo", item: itm(khas, "Kopi Bakar"), label: "Kopi Bakar" },
      right: { kind: "list", title: "Menu Minuman", groups: [choco, lainnya] }
    },
    {
      id: "back",
      left:  { kind: "photo", item: itm(sambelan, "Udang"), label: "Paket Sambelan" },
      right: { kind: "back" }
    }
  ];
})();
