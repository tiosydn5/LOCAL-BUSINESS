window.SERVICE_ENGINE_CONFIG = {
  SUPABASE_URL:
    (window.__ENV__ && window.__ENV__.PUBLIC_SUPABASE_URL) ||
    "https://iiojetrkbfrfqbhnixuo.supabase.co",

  SUPABASE_ANON_KEY:
    (window.__ENV__ && window.__ENV__.PUBLIC_SUPABASE_ANON_KEY) ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpb2pldHJrYmZyZnFiaG5peHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNjU5MjksImV4cCI6MjEwODc0MTkyOX0.yUtKBqapX3DJrSxS6NLfIxvLaXZY1lZEmwFoNkq1I7c",

  STORAGE_BUCKET_NAME: "cafe-assets",
  STORAGE_KEY_PREFIX: "atelier_service_engine_v4_"
};

(function ensureSupabaseSdk() {
  if (typeof window.supabase === "undefined") {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    s.async = true;
    s.onload = () => {
      if (window.ServiceStore && window.ServiceStore.syncFromCloud) {
        window.ServiceStore.syncFromCloud();
      }
    };
    document.head.appendChild(s);
  }
})();

(function () {
  let cachedClient = null;

  // Industrial Tag Accents on Pure Monochrome Carbon / Paper Surfaces
  window.WORKSHOP_THEME_PRESETS = {
    crimson: {
      name: "Obsidian & Signal Vermilion",
      accent: "#D9381E",
      accentHover: "#B82B14",
      accentLight: "#FF6B52",
      accentSoft: "rgba(217, 56, 30, 0.14)",
      rgbAccent: "217 56 30",
      shellTint: "#161619",
      shellDark: "#0B0B0D",
      fgOnAccent: "#FFFFFF"
    },
    amber: {
      name: "Obsidian & Signal Amber",
      accent: "#D97706",
      accentHover: "#B45309",
      accentLight: "#FBBF24",
      accentSoft: "rgba(217, 119, 6, 0.14)",
      rgbAccent: "217 119 6",
      shellTint: "#161618",
      shellDark: "#0B0B0D",
      fgOnAccent: "#FFFFFF"
    },
    volt: {
      name: "Pure Monochrome Steel",
      accent: "#3F3F46",
      accentHover: "#27272A",
      accentLight: "#E4E4E7",
      accentSoft: "rgba(161, 161, 170, 0.14)",
      rgbAccent: "63 63 70",
      shellTint: "#161619",
      shellDark: "#0B0B0D",
      fgOnAccent: "#FFFFFF"
    },
    cobalt: {
      name: "Obsidian & Precision Cobalt",
      accent: "#2563EB",
      accentHover: "#1D4ED8",
      accentLight: "#60A5FA",
      accentSoft: "rgba(37, 99, 235, 0.14)",
      rgbAccent: "37 99 235",
      shellTint: "#15161A",
      shellDark: "#0B0B0D",
      fgOnAccent: "#FFFFFF"
    },
    emerald: {
      name: "Obsidian & Lab Teal",
      accent: "#0D9488",
      accentHover: "#0F766E",
      accentLight: "#34D399",
      accentSoft: "rgba(13, 148, 136, 0.14)",
      rgbAccent: "13 148 136",
      shellTint: "#141717",
      shellDark: "#0B0B0D",
      fgOnAccent: "#FFFFFF"
    }
  };

  // Curated Real-Camera Workshop Photo Bank (Sneakers Care & Motodetailing)
  window.CURATED_WORKSHOP_BANK = [
    {
      cat: "snk_wash",
      label: "Deep Clean & Fast Wash Sneakers",
      keywords: ["fast clean", "fast wash", "deep clean", "cuci sepatu", "daily wash", "upper", "insole", "mesh", "canvas", "sneakers"],
      urls: [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      cat: "snk_restore",
      label: "Unyellowing Midsole, Suede & Repaint",
      keywords: ["unyellowing", "uv", "midsole", "repaint", "restoration", "restorasi", "suede", "nubuck", "kulit", "leather", "reglue", "jahit"],
      urls: [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80"
      ]
    },
    {
      cat: "snk_protect",
      label: "Hydrophobic Nano Shield, Tas & Apparel",
      keywords: ["hydrophobic", "nano shield", "water repellent", "protection", "anti air", "tas", "bag", "backpack", "topi", "cap"],
      urls: [
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80"
      ]
    },
    {
      cat: "moto_detail",
      label: "Detailing Wash, Bongkar Bodi & Mesin Motor",
      keywords: ["detailing wash", "cuci detail", "dismantle", "bongkar bodi", "engine", "mesin", "cvt", "rangka", "velg", "asphalt", "tar"],
      urls: [
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=900&q=80"
      ]
    },
    {
      cat: "moto_coat",
      label: "Paint Correction & Nano Ceramic 9H Motor",
      keywords: ["ceramic", "9h", "polish", "poles", "paint correction", "coating", "big bike", "moge", "250cc", "vespa", "harley", "sport"],
      urls: [
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=900&q=80"
      ]
    },
    {
      cat: "helmet",
      label: "Helmet Spa, Sterilisasi Ozon & Coating Visor",
      keywords: ["helm", "helmet", "visor", "arai", "shoei", "agv", "ozon", "busa", "riding gear"],
      urls: [
        "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1575997759258-91792eaaf87b?auto=format&fit=crop&w=900&q=80"
      ]
    },
    {
      cat: "laundry",
      label: "Laundry Kiloan, Setrika Uap, Karpet & Sofa Care",
      keywords: ["laundry", "kiloan", "setrika", "steam", "karpet", "carpet", "sofa", "spring bed", "bed cover", "gordyn", "pakaian", "jas", "dry clean"],
      urls: [
        "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      cat: "barber",
      label: "Barbershop, Gentleman Haircut, Fade & Hot Towel",
      keywords: ["barber", "haircut", "cut", "fade", "taper", "potong rambut", "grooming", "beard", "shave", "kumis", "janggut", "pomade", "coloring", "perm", "smoothing"],
      urls: [
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      cat: "studio",
      label: "Interior Studio Sneakers & Detailing Garage",
      keywords: ["studio", "workshop", "bay", "garasi", "rak", "interior", "hero"],
      urls: [
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];

  window.resolveWorkshopServiceImage = function (serviceName, category, niche, itemIndex = 0) {
    const hay = `${serviceName || ""} ${category || ""}`.toLowerCase();
    let bestEntry = null;
    let maxScore = 0;

    for (const entry of window.CURATED_WORKSHOP_BANK) {
      if (entry.cat === "studio") continue;
      let score = 0;
      for (const kw of entry.keywords) {
        if (hay.includes(kw)) score += kw.length * 2;
      }
      if (score > maxScore) {
        maxScore = score;
        bestEntry = entry;
      }
    }

    if (!bestEntry) {
      if (niche === "moto_detailing") {
        bestEntry = window.CURATED_WORKSHOP_BANK.find(e => e.cat === "moto_detail");
      } else if (niche === "laundry_care") {
        bestEntry = window.CURATED_WORKSHOP_BANK.find(e => e.cat === "laundry");
      } else if (niche === "barber_studio") {
        bestEntry = window.CURATED_WORKSHOP_BANK.find(e => e.cat === "barber");
      } else {
        bestEntry = window.CURATED_WORKSHOP_BANK[0];
      }
    }

    const urls = bestEntry.urls;
    return urls[itemIndex % urls.length];
  };

  window.resolveWorkshopHeroImage = function (niche) {
    if (niche === "moto_detailing") {
      return "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80";
    }
    if (niche === "laundry_care") {
      return "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80";
    }
    if (niche === "barber_studio") {
      return "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80";
    }
    return "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80";
  };

  window.applyWorkshopTheme = function (themeKey) {
    const preset =
      window.WORKSHOP_THEME_PRESETS[themeKey] ||
      window.WORKSHOP_THEME_PRESETS.crimson;
    const root = document.documentElement;
    root.style.setProperty("--brand", preset.accent);
    root.style.setProperty("--brand-hover", preset.accentHover);
    root.style.setProperty("--brand-light", preset.accentLight || preset.accent);
    root.style.setProperty("--brand-soft", preset.accentSoft);
    root.style.setProperty("--brand-rgb", preset.rgbAccent);
    root.style.setProperty("--brand-fg", preset.fgOnAccent || "#FFFFFF");
    root.style.setProperty("--shell-tint", preset.shellTint);
    root.style.setProperty("--shell-dark", preset.shellDark);
    return preset;
  };

  window.NICHE_DEFINITIONS = {
    sneakers_care: {
      label: "Sneakers & Apparel Care",
      shortLabel: "Sneaker Lab",
      unitName: "Pasang",
      itemPlaceholder: "Salomon XT-6 / Nike Jordan 1 Low",
      steps: [
        {
          step: 1,
          code: "DROP",
          period: "Tahap 01",
          label: "Inspeksi Awal",
          desc: "Cek karakter bahan upper, insole, dan dokumentasi kondisi awal.",
          defaultNote: "Unit diterima di studio. Pengecekan material upper & midsole selesai."
        },
        {
          step: 2,
          code: "WASH",
          period: "Tahap 02",
          label: "Deep Cleaning",
          desc: "Cuci detail luar-dalam dengan larutan pH-netral sesuai bahan.",
          defaultNote: "Proses deep cleaning dengan cairan pH-netral dan sikat bulu kuda."
        },
        {
          step: 3,
          code: "TREAT",
          period: "Tahap 03",
          label: "Detailing / UV",
          desc: "Unyellowing midsole di UV chamber, repaint, atau nano coating.",
          defaultNote: "Sedang proses treatment khusus (UV unyellowing / nano shield)."
        },
        {
          step: 4,
          code: "QC",
          period: "Tahap 04",
          label: "Sterilisasi & QC",
          desc: "Pengeringan suhu ruang, fogging ozon antibakteri, dan cek QC.",
          defaultNote: "Pengeringan selesai. Sedang sterilisasi ozon & pengecekan QC."
        },
        {
          step: 5,
          code: "READY",
          period: "Tahap 05",
          label: "Siap Serah Terima",
          desc: "Dikemas rapi dengan silica gel. Siap diambil atau dikirim kurir.",
          defaultNote: "Lolos QC 100%. Sepatu sudah dikemas & siap diambil/dikirim."
        }
      ],
      addons: [
        { id: "express", label: "Express 24 Jam", desc: "Prioritas pengerjaan tanpa antre", price: 40000 },
        { id: "protect", label: "Hydrophobic Coat", desc: "Lapisan anti-air & noda 3 bulan", price: 35000 }
      ],
      inspectionZones: [
        {
          code: "ZN-01",
          title: "Upper Material",
          part: "Suede / Nubuck / Mesh",
          tool: "Horsehair Brush",
          detail: "Pembersihan lembut tanpa merusak serat suede atau rajutan."
        },
        {
          code: "ZN-02",
          title: "Midsole Rim",
          part: "Rubber / Boost Foam",
          tool: "UV-A Chamber",
          detail: "Angkat oksidasi kuning kembali putih bersih."
        },
        {
          code: "ZN-03",
          title: "Insole Cavity",
          part: "Footbed / Ortholite",
          tool: "Ozone Sterilizer",
          detail: "Bongkar insole total untuk eliminasi bakteri & bau."
        },
        {
          code: "ZN-04",
          title: "Outsole Tread",
          part: "Gum / Vibram Sole",
          tool: "Degreaser Brush",
          detail: "Angkat kerikil dan noda aspal di sela tapak bawah."
        }
      ],
      faqs: [
        {
          q: "Apakah aman untuk bahan Suede, Nubuck, atau Canvas?",
          a: "Aman. Bahan sensitif menggunakan metode dry-foam dan sikat bulu kuda khusus tanpa direndam air."
        },
        {
          q: "Bagaimana cara kerja layanan jemput-antar (Pick-Up)?",
          a: "Isi form booking di web, kurir kami menjemput ke lokasi Anda dan mengirimkan Nomor Nota untuk cek progres live."
        },
        {
          q: "Apakah ada garansi jika kurang bersih?",
          a: "Tersedia Garansi Re-Clean 24 jam gratis apabila masih ada noda non-permanen yang terlewat saat QC."
        }
      ]
    },
    moto_detailing: {
      label: "Motodetailing & Coating",
      shortLabel: "Detailing Bay",
      unitName: "Unit Motor",
      itemPlaceholder: "Vespa Sprint 150 / Kawasaki ZX-25R",
      steps: [
        {
          step: 1,
          code: "CHECK",
          period: "Tahap 01",
          label: "Inspeksi Cat",
          desc: "Cek ketebalan pernis dan pemetaan baret halus di bawah lampu.",
          defaultNote: "Unit masuk bay. Pengecekan kondisi cat & kelistrikan selesai."
        },
        {
          step: 2,
          code: "DECON",
          period: "Tahap 02",
          label: "Bongkar & Decon",
          desc: "Bongkar bodi halus, degreasing sela mesin, rangka, dan velg.",
          defaultNote: "Bodi dilepas. Sedang proses degreasing blok mesin & velg."
        },
        {
          step: 3,
          code: "POLISH",
          period: "Tahap 03",
          label: "Paint Correction",
          desc: "Poles multi-tahap untuk mengeliminasi swirl mark & kusam.",
          defaultNote: "Proses paint correction 2-tahap untuk mengembalikan kilap cat."
        },
        {
          step: 4,
          code: "COAT",
          period: "Tahap 04",
          label: "Nano Ceramic 9H",
          desc: "Aplikasi layer keramik 9H dan pematangan lampu infrared.",
          defaultNote: "Layer Nano Ceramic 9H diaplikasikan & proses curing infrared."
        },
        {
          step: 5,
          code: "READY",
          period: "Tahap 05",
          label: "Final QC & Siap",
          desc: "Perakitan kembali bodi presisi, lolos QC, siap serah terima.",
          defaultNote: "Bodi terpasang presisi & lolos QC. Motor siap diambil/towing."
        }
      ],
      addons: [
        { id: "express", label: "Fast Track Double-Tech", desc: "Dikerjakan 2 teknisi paralel", price: 120000 },
        { id: "protect", label: "Helmet Care + Coating", desc: "Detailing interior helm & visor", price: 75000 }
      ],
      inspectionZones: [
        {
          code: "BAY-01",
          title: "Fairing & Clear Coat",
          part: "Gloss / Matte Paint",
          tool: "Dual-Action Polisher",
          detail: "Koreksi baret halus hingga 90% sebelum pelapisan keramik."
        },
        {
          code: "BAY-02",
          title: "Engine & Inner Frame",
          part: "Crankcase / Chassis",
          tool: "Bodi Dismantle",
          detail: "Bongkar panel bodi untuk bersihkan kerak oli di rangka dalam."
        },
        {
          code: "BAY-03",
          title: "Wheels & Caliper",
          part: "Rim / Brake Caliper",
          tool: "Iron & Tar Remover",
          detail: "Luruhkan debu kampas rem dan bintik aspal pada velg."
        },
        {
          code: "BAY-04",
          title: "Cockpit & Plastic Trim",
          part: "Speedometer / Trim",
          tool: "UV Trim Restorer",
          detail: "Kembalikan warna hitam pekat pada plastik kasar & panel."
        }
      ],
      faqs: [
        {
          q: "Apakah bongkar bodi aman untuk kelistrikan dan klip?",
          a: "Aman. Seluruh baut disimpan di wadah bernomor per panel dan soket kelistrikan ditutup kedap air."
        },
        {
          q: "Berapa lama daya tahan lapisan Nano Ceramic 9H?",
          a: "Bertahan 12–24 bulan dengan efek daun talas (hydrophobic) dan proteksi sinar UV."
        },
        {
          q: "Apakah tersedia layanan Towing jemput-antar?",
          a: "Tersedia. Pilih opsi Towing pada kalkulator booking dan tim kami akan menjadwalkan penjemputan."
        }
      ]
    },
    laundry_care: {
      label: "Laundry Express, Carpet & Home Care",
      shortLabel: "Laundry & Care",
      unitName: "Kg / Unit",
      itemPlaceholder: "Pakaian 5 Kg / Karpet Turki / Sofa L",
      steps: [
        {
          step: 1,
          code: "SORT",
          period: "Tahap 01",
          label: "Timbang & Sortir",
          desc: "Penimbangan berat/ukuran, sortir warna pakaian, dan cek noda berat.",
          defaultNote: "Cucian diterima & ditimbang. Sudah disortir berdasarkan warna dan serat kain."
        },
        {
          step: 2,
          code: "WASH",
          period: "Tahap 02",
          label: "Washing & Extraction",
          desc: "Pencucian antibakteri atau vakum ekstraksi mendalam untuk sofa/karpet.",
          defaultNote: "Sedang proses pencucian utama dengan deterjen cair ramah serat & disinfektan."
        },
        {
          step: 3,
          code: "DRY",
          period: "Tahap 03",
          label: "Hygienic Drying",
          desc: "Pengeringan mesin suhu terkontrol bebas bau apek.",
          defaultNote: "Proses pengeringan higienis di mesin tumbler dryer suhu terukur."
        },
        {
          step: 4,
          code: "STEAM",
          period: "Tahap 04",
          label: "Setrika Uap & Parfum",
          desc: "Setrika uap boiler bertekanan tinggi dan pelipatan rapi.",
          defaultNote: "Sedang proses setrika uap (steam press), pemberian parfum grade A & pengemasan."
        },
        {
          step: 5,
          code: "READY",
          period: "Tahap 05",
          label: "Siap Antar / Ambil",
          desc: "Sudah dikemas plastik kedap debu. Siap diambil atau diantar kurir.",
          defaultNote: "Selesai dikemas rapi & wangi. Siap diambil atau dikirim kurir ke alamat Anda."
        }
      ],
      addons: [
        { id: "express", label: "Kilat Express 6 Jam", desc: "Selesai di hari yang sama (prioritas mesin)", price: 25000 },
        { id: "protect", label: "Anti-Tungau & Disinfektan", desc: "Cairan khusus pembasmi tungau & bakteri", price: 20000 }
      ],
      inspectionZones: [
        {
          code: "LN-01",
          title: "Pakaian Harian & Kemeja",
          part: "Katun / Linen / Rayon",
          tool: "1 Mesin 1 Pelanggan",
          detail: "Pakaian tidak pernah dicampur dengan cucian pelanggan lain."
        },
        {
          code: "LN-02",
          title: "Karpet & Permadani",
          part: "Bulu Tebal / Wol / Sintetis",
          tool: "Rotary Carpet Polisher",
          detail: "Sikat mesin putar dan bilas bertekanan tinggi hingga ke dasar karpet."
        },
        {
          code: "LN-03",
          title: "Sofa & Spring Bed",
          part: "Busa / Kain Fabric / Kulit",
          tool: "Hydro-Vacuum Extractor",
          detail: "Sedot debu tungau, noda keringat, dan kotoran membandel (panggilan ke rumah)."
        },
        {
          code: "LN-04",
          title: "Bed Cover & Gordyn",
          part: "Serat Tebal / King Size",
          tool: "Boiler Steam Press",
          detail: "Pencucian kapasitas besar dan uap panas agar serat kembali mengembang."
        }
      ],
      faqs: [
        {
          q: "Apakah pakaian saya dicampur dengan pelanggan lain?",
          a: "Tidak pernah. Kami menerapkan standar 1 Mesin 1 Nota Pelanggan untuk menjaga kebersihan dan mencegah pakaian tertukar."
        },
        {
          q: "Apakah cuci sofa dan spring bed dikerjakan di rumah pelanggan?",
          a: "Ya, untuk sofa dan spring bed tim teknisi kami datang membawa peralatan Hydro-Vacuum ke rumah Anda. Untuk karpet dan pakaian bisa dijemput kurir."
        },
        {
          q: "Bagaimana cara menghitung estimasi biaya di website?",
          a: "Pilih jenis layanan (Kiloan, Satuan, Karpet, atau Sofa) dan masukkan jumlah Kg/Unit pada kalkulator booking di bawah."
        }
      ]
    },
    barber_studio: {
      label: "Premier Barbershop & Men's Grooming",
      shortLabel: "Barber Studio",
      unitName: "Orang",
      itemPlaceholder: "Comma Hair / Taper Fade + Beard Trim (Capster: Rian)",
      steps: [
        {
          step: 1,
          code: "BOOK",
          period: "Tahap 01",
          label: "Jadwal Terkonfirmasi",
          desc: "Slot jam potong dan pilihan capster sudah dikunci di jadwal studio.",
          defaultNote: "Slot jadwal potong Anda sudah tercatat. Silakan datang 10 menit sebelum jam booking."
        },
        {
          step: 2,
          code: "LOUNGE",
          period: "Tahap 02",
          label: "Check-In & Konsultasi",
          desc: "Pelanggan tiba di studio, analisis bentuk wajah & arah tumbuh rambut.",
          defaultNote: "Pelanggan sudah check-in di kursi. Konsultasi gaya potongan dengan capster."
        },
        {
          step: 3,
          code: "CUT",
          period: "Tahap 03",
          label: "Precision Haircut",
          desc: "Eksekusi gunting, clipper fade presisi, dan perapihan janggut/kumis.",
          defaultNote: "Sedang proses potong rambut presisi (fade & texturizing) oleh capster."
        },
        {
          step: 4,
          code: "WASH",
          period: "Tahap 04",
          label: "Hair Wash & Hot Towel",
          desc: "Keramas bersih, handuk hangat relaksasi, dan pijat kepala-bahu.",
          defaultNote: "Proses keramas menyegarkan, kompres handuk hangat (hot towel) & pijat relaksasi."
        },
        {
          step: 5,
          code: "STYLE",
          period: "Tahap 05",
          label: "Pomade Styling & Selesai",
          desc: "Aplikasi hair tonic, blow-dry, styling pomade/powder, dan siap tampil.",
          defaultNote: "Sesi grooming selesai. Rambut sudah di-styling rapi."
        }
      ],
      addons: [
        { id: "express", label: "VIP Priority Slot (Tanpa Antre)", desc: "Kunci jam pasti tanpa tunggu walk-in", price: 15000 },
        { id: "protect", label: "Black Mask & Face Scrub", desc: "Angkat komedo & perawatan wajah pria", price: 35000 }
      ],
      inspectionZones: [
        {
          code: "BR-01",
          title: "Fade & Taper Precision",
          part: "Side & Back Gradation",
          tool: "Zero-Gap Clipper",
          detail: "Gradasi tipis bertahap yang bersih dan menyatu alami dengan bentuk kepala."
        },
        {
          code: "BR-02",
          title: "Top Texture & Volume",
          part: "Crown & Fringe",
          tool: "Japanese Thinning Scissors",
          detail: "Penyesuaian volume rambut atas agar mudah diatur setiap hari."
        },
        {
          code: "BR-03",
          title: "Beard & Mustache Sculpting",
          part: "Jawline & Facial Hair",
          tool: "Straight Razor & Hot Towel",
          detail: "Cukur garis rahang dengan handuk hangat dan pisau cukur steril sekali pakai."
        },
        {
          code: "BR-04",
          title: "Scalp & Hair Care",
          part: "Kulit Kepala & Akar Rambut",
          tool: "Cooling Tonic & Shiatsu",
          detail: "Keramas bersih dari sisa potongan rambut disertai pijat relaksasi leher."
        }
      ],
      faqs: [
        {
          q: "Bagaimana cara booking jam potong agar tidak mengantre lama?",
          a: "Pilih paket grooming di kalkulator bawah, tulis jam kedatangan dan nama capster pilihan Anda, lalu klik tombol Terbitkan Nota & Kirim WA."
        },
        {
          q: "Apakah semua paket sudah termasuk keramas dan pomade?",
          a: "Untuk paket Gentleman Cut ke atas sudah lengkap termasuk Hair Wash, Hot Towel, pijat bahu, dan styling pomade/clay."
        },
        {
          q: "Apakah alat cukur dijamin steril?",
          a: "Seluruh clipper disemprot disinfektan setiap selesai 1 pelanggan, dan silet cukur (razor blade) selalu diganti baru."
        }
      ]
    }
  };

  const INITIAL_SEED_TENANTS = {
    "kultur-kicks": {
      slug: "kultur-kicks",
      name: "KULTUR KICKS LAB",
      branch: "Margonda, Depok",
      niche: "sneakers_care",
      serviceMode: "pickup_delivery",
      themePreset: "crimson",
      whatsapp: "6281299887766",
      instagram: "@kulturkicks.depok",
      address: "Jl. Margonda Raya No. 412, Depok",
      hours: "Setiap Hari · 10.00 – 21.00 WIB",
      heroHeadline1: "Restorasi Presisi untuk",
      heroHeadline2: "Koleksi Sepatu Harian.",
      heroDesc: "Studio perawatan sepatu berstandar laboratorium. Lacak tahapan pengerjaan barang Anda secara langsung tanpa perlu menunggu balasan admin.",
      pickupPolicy: "Gratis jemput-antar radius 5 km area Depok (min. 2 pasang).",
      ratingScore: "4.9",
      services: [
        { id: "srv-1", name: "Fast Clean (Upper & Midsole)", category: "Daily Wash", price: 45000, promoPrice: null, isPromo: false, duration: "24 Jam", badge: "Kilat 24 Jam", available: true, desc: "Cuci cepat bagian luar upper dan midsole untuk pemakaian harian." },
        { id: "srv-2", name: "Deep Clean All Material", category: "Signature Treatment", price: 75000, promoPrice: 65000, isPromo: true, duration: "2–3 Hari", badge: "Terlaris", available: true, desc: "Pembersihan menyeluruh luar-dalam aman untuk Suede, Nubuck, Mesh, dan Leather." },
        { id: "srv-3", name: "Unyellowing + Deep Clean", category: "Restoration", price: 125000, promoPrice: null, isPromo: false, duration: "3–4 Hari", badge: "UV Chamber", available: true, desc: "Angkat oksidasi kuning pada midsole karet kembali putih bersih + cuci total." },
        { id: "srv-4", name: "Hydrophobic Nano Shield", category: "Protection", price: 95000, promoPrice: null, isPromo: false, duration: "2 Hari", badge: "Anti Air", available: true, desc: "Pelapisan pelindung cairan, lumpur, dan noda kopi tahan hingga 3 bulan." },
        { id: "srv-5", name: "Full Suede / Canvas Repaint", category: "Restoration", price: 190000, promoPrice: null, isPromo: false, duration: "5–7 Hari", badge: "Restorasi", available: true, desc: "Restorasi pigmen warna pudar menggunakan tinta khusus yang lembut di bahan." }
      ],
      orders: [
        { id: "ord-1", orderId: "KLK-2601", customerName: "Raka Pratama", phone: "081288990011", itemName: "Salomon XT-6 White Lunar", serviceName: "Deep Clean + Coating", price: 160000, stepIndex: 3, deliveryType: "Pick-Up Kurir", etaDate: "Besok · 18:00 WIB", techNote: "Mesh sudah bersih 100%. Sedang proses curing lapisan water repellent.", createdAt: "2026-11-02T09:30:00Z" },
        { id: "ord-2", orderId: "KLK-2602", customerName: "Nadia Vega", phone: "085711223344", itemName: "New Balance 550 White Grey", serviceName: "Unyellowing + Deep Clean", price: 125000, stepIndex: 5, deliveryType: "Drop-Off Studio", etaDate: "Siap Diambil", techNote: "Oksidasi midsole hilang sempurna. Sudah sterilisasi ozon & siap diambil.", createdAt: "2026-11-01T14:15:00Z" },
        { id: "ord-3", orderId: "KLK-2603", customerName: "Dimas Anggara", phone: "081366778899", itemName: "Jordan 1 Low Olive Suede", serviceName: "Deep Clean All Material", price: 65000, stepIndex: 2, deliveryType: "Pick-Up Kurir", etaDate: "05 Nov · 16:00 WIB", techNote: "Pembersihan suede dengan dry-foam pH netral & sikat bulu kuda.", createdAt: "2026-11-03T07:45:00Z" }
      ]
    },
    "apex-motoworks": {
      slug: "apex-motoworks",
      name: "APEX MOTODETAILING",
      branch: "Cinere, Depok",
      niche: "moto_detailing",
      serviceMode: "studio_slot",
      themePreset: "amber",
      whatsapp: "6281377889900",
      instagram: "@apexmotoworks.id",
      address: "Jl. Cinere Raya No. 88, Depok",
      hours: "Selasa – Minggu · 09.00 – 20.00 WIB",
      heroHeadline1: "Koreksi Cat & Proteksi",
      heroHeadline2: "Nano Ceramic Kelas Kontes.",
      heroDesc: "Workshop detailing motor & helm dengan pembongkaran bodi presisi. Pantau tahapan pengerjaan motor Anda langsung dari layar HP.",
      pickupPolicy: "Tersedia layanan Towing jemput-antar area Depok & Jaksel.",
      ratingScore: "4.9",
      services: [
        { id: "mtr-1", name: "Signature Detailing Wash", category: "Detailing Wash", price: 125000, promoPrice: null, isPromo: false, duration: "3–4 Jam", badge: "Cuci Detail", available: true, desc: "Cuci detail sela mesin, luruhkan aspal & kerak velg, plus carnauba wax." },
        { id: "mtr-2", name: "Full Body Dismantle Detailing", category: "Deep Detailing", price: 350000, promoPrice: 299000, isPromo: true, duration: "1 Hari", badge: "Bongkar Bodi", available: true, desc: "Bongkar seluruh bodi halus, degreasing rangka dalam, CVT, dan poles 1-step." },
        { id: "mtr-3", name: "2-Stage Polish + Ceramic 9H", category: "Nano Ceramic", price: 650000, promoPrice: null, isPromo: false, duration: "2 Hari", badge: "Garansi 1 Thn", available: true, desc: "Koreksi baret halus 90%, bongkar bodi total, dan aplikasi 2 layer Ceramic 9H." },
        { id: "mtr-4", name: "Big Bike 250cc+ Ceramic Pro", category: "Nano Ceramic", price: 1100000, promoPrice: null, isPromo: false, duration: "2–3 Hari", badge: "2 Layer 9H+", available: true, desc: "Paket lengkap 250cc ke atas termasuk coating bodi, velg, knalpot, dan visor." }
      ],
      orders: [
        { id: "ord-101", orderId: "APX-8801", customerName: "Bima Sakti", phone: "081233445566", itemName: "Vespa Sprint 150 I-Get Grey", serviceName: "2-Stage Polish + Ceramic 9H", price: 650000, stepIndex: 4, deliveryType: "Drop-Off Bengkel", etaDate: "Hari Ini · 17:00 WIB", techNote: "Layer ke-2 Nano Ceramic selesai diaplikasikan. Sedang curing infrared.", createdAt: "2026-11-02T10:00:00Z" },
        { id: "ord-102", orderId: "APX-8802", customerName: "Hendri Wijaya", phone: "081899001122", itemName: "Kawasaki ZX-25R Black", serviceName: "Big Bike Ceramic Pro", price: 1100000, stepIndex: 2, deliveryType: "Towing Pick-Up", etaDate: "Besok · 17:00 WIB", techNote: "Fairing dilepas. Sedang dekontaminasi kerak blok mesin dan rantai.", createdAt: "2026-11-03T08:10:00Z" }
      ]
    }
  };

  window.isSupabaseConfigured = function () {
    const cfg = window.SERVICE_ENGINE_CONFIG;
    if (!cfg || !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) return false;
    return !cfg.SUPABASE_URL.includes("MASUKKAN_PROJECT_URL");
  };

  window.getSupabaseClient = function () {
    if (cachedClient) return cachedClient;
    if (!window.isSupabaseConfigured()) return null;
    if (typeof window.supabase === "undefined" || !window.supabase.createClient) return null;
    const cfg = window.SERVICE_ENGINE_CONFIG;
    cachedClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
    return cachedClient;
  };

  window.getActiveMitraSlug = function () {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("mitra") || params.get("kafe") || localStorage.getItem("active_mitra_slug");
    if (s) return s.toLowerCase().trim().replace(/[^a-z0-9-]/g, "");
    return "kultur-kicks";
  };

  function getLocalStoreMap() {
    const key = window.SERVICE_ENGINE_CONFIG.STORAGE_KEY_PREFIX + "tenants";
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Object.keys(parsed).length > 0) return parsed;
      }
    } catch (e) {}
    localStorage.setItem(key, JSON.stringify(INITIAL_SEED_TENANTS));
    return JSON.parse(JSON.stringify(INITIAL_SEED_TENANTS));
  }

  function saveLocalStoreMap(mapObj) {
    const key = window.SERVICE_ENGINE_CONFIG.STORAGE_KEY_PREFIX + "tenants";
    localStorage.setItem(key, JSON.stringify(mapObj));
  }

  window.addEventListener("storage", function (e) {
    const key = window.SERVICE_ENGINE_CONFIG.STORAGE_KEY_PREFIX + "tenants";
    if (e.key === key || e.key === "active_mitra_slug") {
      window.dispatchEvent(new CustomEvent("ws-cloud-synced"));
    }
  });

  window.ServiceStore = {
    async syncFromCloud() {
      const sb = window.getSupabaseClient();
      if (!sb) return false;

      try {
        const [tRes, sRes, oRes] = await Promise.all([
          sb.from("ws_tenants").select("*"),
          sb.from("ws_services").select("*").order("sort_order", { ascending: true }),
          sb.from("ws_orders").select("*").order("created_at", { ascending: false })
        ]);

        if (tRes.error || !tRes.data || tRes.data.length === 0) return false;

        const currentMap = getLocalStoreMap();
        const newMap = { ...currentMap };

        tRes.data.forEach(row => {
          const customCfg = row.custom_config || {};
          const existingLocal = currentMap[row.slug] || {};
          newMap[row.slug] = {
            slug: row.slug,
            name: row.name,
            branch: row.branch,
            niche: row.niche || "sneakers_care",
            serviceMode: row.service_mode || "pickup_delivery",
            themePreset: row.theme_preset || "crimson",
            whatsapp: row.whatsapp || "6281299887766",
            instagram: row.instagram || "",
            address: row.address || "",
            hours: row.hours || "",
            heroHeadline1: row.hero_headline_1 || "Restorasi Presisi untuk",
            heroHeadline2: row.hero_headline_2 || "Koleksi Sepatu Harian.",
            heroDesc: row.hero_desc || "",
            pickupPolicy: row.pickup_policy || "",
            ratingScore: row.rating_score || "4.9",
            logoUrl: customCfg.logoUrl || existingLocal.logoUrl || "",
            heroImageUrl: customCfg.heroImageUrl || existingLocal.heroImageUrl || "",
            serviceImagesMap: customCfg.serviceImagesMap || {},
            services: [],
            orders: []
          };
        });

        (sRes.data || []).forEach(s => {
          if (newMap[s.tenant_slug]) {
            const imgMap = newMap[s.tenant_slug].serviceImagesMap || {};
            newMap[s.tenant_slug].services.push({
              id: s.id,
              name: s.name,
              category: s.category || "Treatment",
              price: Number(s.price) || 0,
              promoPrice: s.promo_price ? Number(s.promo_price) : null,
              isPromo: Boolean(s.is_promo),
              duration: s.duration || "2–3 Hari",
              badge: s.badge || "",
              available: s.available !== false,
              imageUrl: imgMap[s.name] || "",
              desc: s.description || ""
            });
          }
        });

        (oRes.data || []).forEach(o => {
          if (newMap[o.tenant_slug]) {
            newMap[o.tenant_slug].orders.push({
              id: o.id,
              orderId: o.order_id,
              customerName: o.customer_name,
              phone: o.phone,
              itemName: o.item_name,
              serviceName: o.service_name,
              price: Number(o.price) || 0,
              stepIndex: Number(o.step_index) || 1,
              deliveryType: o.delivery_type || "Drop-Off Studio",
              etaDate: o.eta_date || "Segera",
              techNote: o.tech_note || "",
              createdAt: o.created_at
            });
          }
        });

        saveLocalStoreMap(newMap);
        window.dispatchEvent(new CustomEvent("ws-cloud-synced"));
        return true;
      } catch (err) {
        return false;
      }
    },

    getAllTenants() {
      const map = getLocalStoreMap();
      return Object.values(map);
    },

    getTenant(slug) {
      const map = getLocalStoreMap();
      if (map[slug]) return map[slug];
      const cleanName = (slug || "studio").replace(/-/g, " ").toUpperCase();
      return {
        ...(map["kultur-kicks"] || Object.values(map)[0]),
        slug: slug,
        name: cleanName,
        branch: "Memuat...",
        heroHeadline1: cleanName,
        heroHeadline2: "Memuat Layanan...",
        heroDesc: "Sedang menyinkronkan katalog layanan dan data nota terbaru...",
        services: [],
        orders: []
      };
    },

    saveTenantProfile(slug, updatedFields) {
      const map = getLocalStoreMap();
      if (!map[slug]) return null;
      map[slug] = { ...map[slug], ...updatedFields };
      saveLocalStoreMap(map);

      const cur = map[slug];
      const serviceImagesMap = {};
      (cur.services || []).forEach(s => {
        if (s.name && s.imageUrl) serviceImagesMap[s.name] = s.imageUrl;
      });

      const sb = window.getSupabaseClient();
      if (sb) {
        sb.from("ws_tenants").update({
          name: cur.name,
          branch: cur.branch,
          niche: cur.niche,
          service_mode: cur.serviceMode || "pickup_delivery",
          theme_preset: cur.themePreset || "crimson",
          whatsapp: cur.whatsapp,
          instagram: cur.instagram,
          rating_score: cur.ratingScore || "4.9",
          address: cur.address,
          hours: cur.hours,
          hero_headline_1: cur.heroHeadline1,
          hero_headline_2: cur.heroHeadline2,
          hero_desc: cur.heroDesc,
          pickup_policy: cur.pickupPolicy,
          custom_config: {
            logoUrl: cur.logoUrl || "",
            heroImageUrl: cur.heroImageUrl || "",
            serviceImagesMap
          },
          updated_at: new Date().toISOString()
        }).eq("slug", slug).then(() => {});
      }
      return map[slug];
    },

    duplicateTenant(sourceSlug, newSlug, newName, newBranch, newNiche) {
      const map = getLocalStoreMap();
      const src = map[sourceSlug] || map["kultur-kicks"];
      const targetNiche = newNiche || src.niche;
      const templateDonor = Object.values(map).find(t => t.niche === targetNiche) || src;
      const prefixCode = newName.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase() || "MTR";

      const defaultMetaByNiche = {
        sneakers_care: {
          serviceMode: "pickup_delivery",
          themePreset: "crimson",
          h1: "Restorasi Presisi untuk",
          h2: "Koleksi Sepatu Harian.",
          desc: `Studio perawatan sepatu berstandar laboratorium di ${newBranch}. Lacak progres pengerjaan sepatu Anda secara real-time.`
        },
        moto_detailing: {
          serviceMode: "studio_slot",
          themePreset: "amber",
          h1: "Koreksi Cat & Proteksi",
          h2: "Nano Ceramic Kelas Kontes.",
          desc: `Workshop detailing motor & helm presisi di ${newBranch}. Lacak progres pengerjaan motor Anda langsung dari HP.`
        },
        laundry_care: {
          serviceMode: "pickup_delivery",
          themePreset: "emerald",
          h1: "Higienis 1 Mesin 1 Pelanggan",
          h2: "untuk Pakaian, Karpet & Sofa.",
          desc: `Layanan laundry express, setrika uap, serta cuci karpet & sofa panggilan di ${newBranch}. Pantau tahapan cucian Anda langsung dari HP.`
        },
        barber_studio: {
          serviceMode: "studio_slot",
          themePreset: "cobalt",
          h1: "Potongan Presisi & Grooming",
          h2: "Tanpa Antre di Kursi Studio.",
          desc: `Barbershop & men's grooming studio di ${newBranch}. Kunci jadwal jam potong serta capster pilihan Anda dan lacak antrean langsung dari HP.`
        }
      };
      const meta = defaultMetaByNiche[targetNiche] || defaultMetaByNiche.sneakers_care;

      map[newSlug] = {
        ...JSON.parse(JSON.stringify(templateDonor)),
        slug: newSlug,
        name: newName.toUpperCase(),
        branch: newBranch,
        niche: targetNiche,
        serviceMode: meta.serviceMode,
        themePreset: meta.themePreset,
        instagram: "@" + newSlug.replace(/-/g, "."),
        address: `Studio ${newName.toUpperCase()}, Area ${newBranch}`,
        heroHeadline1: meta.h1,
        heroHeadline2: meta.h2,
        heroDesc: meta.desc,
        services: JSON.parse(JSON.stringify(templateDonor.services)),
        orders: JSON.parse(JSON.stringify(templateDonor.orders)).map((o, i) => ({
          ...o,
          id: "ord-" + Date.now() + "-" + i,
          orderId: `${prefixCode}-260${i + 1}`
        }))
      };
      saveLocalStoreMap(map);

      const sb = window.getSupabaseClient();
      if (sb) {
        sb.rpc("duplicate_ws_tenant", {
          source_slug: sourceSlug,
          new_slug: newSlug,
          new_name: newName,
          new_branch: newBranch,
          new_niche: targetNiche
        }).then(() => this.syncFromCloud());
      }
      return map[newSlug];
    },

    deleteTenant(slug) {
      if (slug === "kultur-kicks" || slug === "apex-motoworks") return false;
      const map = getLocalStoreMap();
      delete map[slug];
      saveLocalStoreMap(map);

      const sb = window.getSupabaseClient();
      if (sb) {
        sb.from("ws_tenants").delete().eq("slug", slug).then(() => {});
      }
      return true;
    },

    upsertOrder(slug, orderPayload) {
      const map = getLocalStoreMap();
      const tenant = map[slug];
      if (!tenant) return null;
      const idx = tenant.orders.findIndex(o =>
        (orderPayload.id && o.id === orderPayload.id) ||
        (orderPayload.orderId && o.orderId === orderPayload.orderId)
      );
      if (idx >= 0) {
        tenant.orders[idx] = { ...tenant.orders[idx], ...orderPayload };
      } else {
        tenant.orders.unshift({
          id: "ord-" + Date.now(),
          createdAt: new Date().toISOString(),
          ...orderPayload
        });
      }
      saveLocalStoreMap(map);

      const sb = window.getSupabaseClient();
      if (sb) {
        const dbRow = {
          tenant_slug: slug,
          order_id: orderPayload.orderId,
          customer_name: orderPayload.customerName,
          phone: orderPayload.phone,
          item_name: orderPayload.itemName,
          service_name: orderPayload.serviceName,
          price: Number(orderPayload.price) || 0,
          step_index: Number(orderPayload.stepIndex) || 1,
          delivery_type: orderPayload.deliveryType || "Drop-Off Studio",
          eta_date: orderPayload.etaDate || "Segera",
          tech_note: orderPayload.techNote || ""
        };
        sb.from("ws_orders")
          .upsert(dbRow, { onConflict: "tenant_slug,order_id" })
          .then(() => this.syncFromCloud());
      }
      return tenant.orders;
    },

    updateOrderStep(slug, orderId, newStep, newNote) {
      const map = getLocalStoreMap();
      const tenant = map[slug];
      if (!tenant) return null;
      const ord = tenant.orders.find(o => o.id === orderId || o.orderId === orderId);
      if (ord) {
        ord.stepIndex = Math.min(Math.max(Number(newStep) || 1, 1), 5);
        if (newNote !== undefined) {
          ord.techNote = newNote;
        }
        if (ord.stepIndex === 5) {
          ord.etaDate = "Siap Diambil";
        }
        saveLocalStoreMap(map);

        const sb = window.getSupabaseClient();
        if (sb) {
          const q = sb.from("ws_orders").update({
            step_index: ord.stepIndex,
            eta_date: ord.etaDate,
            tech_note: ord.techNote,
            updated_at: new Date().toISOString()
          });
          if (!String(ord.id).startsWith("ord-")) {
            q.eq("id", ord.id).then(() => {});
          } else {
            q.eq("tenant_slug", slug).eq("order_id", ord.orderId).then(() => {});
          }
        }
      }
      return ord;
    },

    updateOrderNote(slug, orderId, newNote, newEta) {
      const map = getLocalStoreMap();
      const tenant = map[slug];
      if (!tenant) return null;
      const ord = tenant.orders.find(o => o.id === orderId || o.orderId === orderId);
      if (ord) {
        if (newNote !== undefined) ord.techNote = newNote;
        if (newEta !== undefined) ord.etaDate = newEta;
        saveLocalStoreMap(map);

        const sb = window.getSupabaseClient();
        if (sb) {
          const payload = {
            tech_note: ord.techNote,
            eta_date: ord.etaDate,
            updated_at: new Date().toISOString()
          };
          const q = sb.from("ws_orders").update(payload);
          if (!String(ord.id).startsWith("ord-")) {
            q.eq("id", ord.id).then(() => {});
          } else {
            q.eq("tenant_slug", slug).eq("order_id", ord.orderId).then(() => {});
          }
        }
      }
      return ord;
    },

    deleteOrder(slug, orderId) {
      const map = getLocalStoreMap();
      const tenant = map[slug];
      if (!tenant) return;
      const target = tenant.orders.find(o => o.id === orderId || o.orderId === orderId);
      tenant.orders = tenant.orders.filter(o => o.id !== orderId && o.orderId !== orderId);
      saveLocalStoreMap(map);

      const sb = window.getSupabaseClient();
      if (sb && target) {
        sb.from("ws_orders").delete().eq("tenant_slug", slug).eq("order_id", target.orderId).then(() => {});
      }
    },

    upsertService(slug, srvPayload) {
      const map = getLocalStoreMap();
      const tenant = map[slug];
      if (!tenant) return;
      const idx = tenant.services.findIndex(s =>
        (srvPayload.id && s.id === srvPayload.id) ||
        (srvPayload.name && s.name.toLowerCase() === srvPayload.name.toLowerCase())
      );
      if (idx >= 0) {
        tenant.services[idx] = { ...tenant.services[idx], ...srvPayload };
      } else {
        tenant.services.push({ id: "srv-" + Date.now(), available: true, ...srvPayload });
      }
      saveLocalStoreMap(map);

      const sb = window.getSupabaseClient();
      if (sb) {
        sb.from("ws_services").upsert({
          tenant_slug: slug,
          name: srvPayload.name,
          category: srvPayload.category || "Signature Treatment",
          price: Number(srvPayload.price) || 50000,
          promo_price: srvPayload.promoPrice ? Number(srvPayload.promoPrice) : null,
          is_promo: Boolean(srvPayload.isPromo),
          duration: srvPayload.duration || "2–3 Hari",
          badge: srvPayload.badge || null,
          available: srvPayload.available !== false,
          description: srvPayload.desc || ""
        }, { onConflict: "tenant_slug,name" }).then(() => this.syncFromCloud());
      }
    },

    deleteService(slug, srvId) {
      const map = getLocalStoreMap();
      const tenant = map[slug];
      if (!tenant) return;
      const target = tenant.services.find(s => s.id === srvId);
      tenant.services = tenant.services.filter(s => s.id !== srvId);
      saveLocalStoreMap(map);

      const sb = window.getSupabaseClient();
      if (sb && target) {
        sb.from("ws_services").delete().eq("tenant_slug", slug).eq("name", target.name).then(() => {});
      }
    },

    resetSeedData() {
      const key = window.SERVICE_ENGINE_CONFIG.STORAGE_KEY_PREFIX + "tenants";
      localStorage.setItem(key, JSON.stringify(INITIAL_SEED_TENANTS));
      this.syncFromCloud();
    }
  };

  window.formatRupiah = function (num) {
    return "Rp " + Math.round(Number(num) || 0).toLocaleString("id-ID");
  };
})();
