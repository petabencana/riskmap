const id = {
    flood_flow_img: "/assets/icons/flood_flow_bi.png",
    close: "tutup",
    eq_flow_img: "/assets/icons/eq_flow_bi.png",
    wind_flow_img: "/assets/icons/wind_flow_bi.png",
    fire_flow_img: "/assets/icons/fire_flow_bi.png",
    haze_flow_img: "/assets/icons/haze_flow_bi.png",
    volcano_flow_img: "/assets/icons/volcano_flow_bi.png",
    report: "Laporkan",
    add_report: "Laporkan banjir",
    add_eq_report: "Laporkan gempa",
    add_haze_report: "Laporkan Kabut Asap",
    add_wind_report: "Laporkan Angin Kencang",
    add_volcano_report: "Laporkan Gunung Api",
    add_fire_report: "Laporkan Kebakaran Hutan",
    search_ph: "Cari",
    social_media_popup_header: "Lapor bencana melalui :",
    warning_banner_text: "Peringatan potensi hujan lebat BMKG yang dapat mengakibatkan dampak bencana di",
    banner_text:
        '<p> Laporkan bencana disekitarmu melalui <a class="social-media-link" href="https://bit.ly/BencanaBotWA">WhatsApp</a>,  <a class="social-media-link" href="https://m.me/petabencana.id">Facebook Messenger</a> ,  <a class="social-media-link"  href="https://t.me/bencanabot">Telegram</a>.</p>',
    training_banner_text: "<p>This is a Training Platform.</p>",
    popup_text: " Pilih provinsi untuk melihat laporan bencana :",
    popup_footer:
        'PetaBencana.id adalah peta <i>live</i> menampilkan informasi bencana <i>real-time</i>. Kunjungi <a href="https://info.petabencana.id/" target="_blank">info.petabencana.id</a> untuk melihat data historis.',
    search_header: "Pilih Wilayah",
    flood: "Banjir",
    eq: "Gempa",
    fire: "Kebakaran Hutan",
    haze: "Kabut Asap",
    wind: "Angin Kencang",
    volcano: "Gunung Api",
    comming_soon: "Segera Hadir",
    coming_soon_2020: "Segera Hadir!",
    reports_stats: "{reportsplaceholder} laporan aktif di {provinceplaceholder}",
    prep_menu: {
        btn_names: {
            drain: "Blocked Drains",
            desilting: "Desilting",
            canalrepair: "Canal Repairs",
            treeclearing: "Fallen Tree"
        }
    },
    web_menu: {
        tab_names: {
            report: "Laporkan",
            legend: "Legenda",
            notification: "NOTIFIKASI",
            about: "Tentang"
        }
    },
    report_info: {
        // 'share_msg': 'Saya%20baru%20saja%20ikutan%20%23SelfieDermawan%20%21%20Yuk%20ramein%20%40petabencana%20dengan%20selfie%20mu',
        share_msg: "Laporan%20banjir%20pada%20petabencana%2Eid",
        water_depth: "Tinggi Banjir:",
        disturbance_key: "Rusak:",
        access_key: "Akses Jalan:",
        structure_key: "Kerusakan Bangunan:",
        source: "Sumber",
        flagReport_Title: "Tandai ini sebagai laporan tidak benar",
        flagReport_button: "Beritahu kami",
        flagReport_email: "info@petabencana.id",
        share: "Bagikan laporan ini",
        accessability_failures: [
            "tidak bisa dilewati kendaraan",
            "Kendaraan roda dua",
            "Kendaraan roda empat kecil (Sedan)",
            "Kendaraan roda empat sedang (SUV)",
            "Kendaraan muatan berat (Truk)"
        ],
        conditions: ["Rusak ringan", "Rusak sedang", "Rusak berat"],
        structure_failures: ["Retak", "Roboh Sebagian", "Roboh Total"],
        visibilityKey: "Jarak Pandang:",
        visibilityValues: ["Baik", "Sedang/Cukup", "Buruk"],
        airQualityKey: "Kualitas Udara:",
        airQualityValues: ["", "Sedang / Cukup", "Buruk", "Parah", "Berbahaya"],
        impactKey: "Dampak:",
        impactValues: ["Ringan", "Sedang", "Berat"],
        signsKey: "Hasil Pengamatan:",
        signsValues: [
            "Kenaikan Suhu Signifikan",
            "Kekeringan/Kematian Tumbuh-tumbuhan",
            "Perilaku Hewan yang Tidak Biasa",
            "Getaran Gempabumi yang Sering",
            "Suara Gemuruh yang Sering"
        ],
        peopleKey: "Jumlah orang di sekitar:",
        evacuateKey: "Tahu arah Evakuasi:",
        evacuateVal: ["ya", "tidak"],
        peopleValues: ["", "< 5 orang", "5 - 50 orang", "> 50 orang"],
        fireextentKey: "Perkiraan Kebakaran",
        fireextentUnit: "hektar"
    },
    flood_info: {
        title: "Area terdampak banjir",
        level_hint: "Status ketinggian banjir",
        time_hint: "Diperbarui pada",
        state_codes: {
            1: {
                severity: "Tidak diketahui",
                description: "Ketinggian banjir tidak diketahui, harap berhati-hati"
            },
            2: {
                severity: "Rendah",
                description: "Banjir antara 10 sampai 70 cm"
            },
            3: {
                severity: "Sedang",
                description: "Banjir antara 71 sampai 150 cm"
            },
            4: {
                severity: "Parah",
                description: "Banjir di atas 150 cm"
            }
        }
    },
    earthquake_info: {
        effected_area: "Wilayah terdampak",
        zone: "Lokasi",
        magnitude: "Magnitude",
        updated: "Pembaharuan terkahir",
        source: "Sumber"
    },
    volcano_info: {
        title: "Nama Gunungapi",
        activity_level: "Level",
        visual: "Deskripsi",
        photo: "Foto",
        share_url: "link terkait",
        updated: "Pembaharuan terkahir",
        source: "Sumber"
    },
    guage_info: {
        title: "Peringatan",
        level: "Siaga"
    },
    need_info: {
        title: "Permintaan kebutuhan:",
        time: "Dibuat pada:",
        status: "terpenuhi ",
        give: "DONASI",

        productsList: [
            {
                title: "Air minum",
                units: "Liters",
                item_id: "1"
            },
            {
                title: "Beras",
                units: "Kgs",
                item_id: "2"
            },
            {
                title: "Makanan Siap Saji ",
                units: "Bungkus",
                item_id: "3"
            },
            {
                title: "Sembako",
                description: "",
                units: "Bungkus",
                item_id: "4"
            },
            {
                title: "Bahan Segar",
                units: "Kgs",
                item_id: "5"
            },
            {
                title: "Makanan bayi",
                units: "Bungkus",
                item_id: "6"
            },
            {
                title: "Pakaian Wanita",
                units: "Pcs",
                item_id: "7"
            },
            {
                title: "Pakaian Laki-laki",
                units: "Pcs",
                item_id: "8"
            },
            {
                title: "Alas kaki",
                units: "Pasang",
                item_id: "9"
            },
            {
                title: "Masker",
                units: "Pcs",
                item_id: "10"
            },
            {
                title: "Kacamata pelindung",
                units: "Pcs",
                item_id: "11"
            },
            {
                title: "Jas hujan",
                units: "Pcs",
                item_id: "12"
            },
            {
                title: "Pakaian Bayi & Anak ",
                units: "Pcs",
                item_id: "13"
            },
            {
                title: "Botol Bayi",
                units: "Pcs",
                item_id: "14"
            },
            {
                title: "Mainan Anak",
                units: "Pcs",
                item_id: "15"
            },
            {
                title: "Dot",
                units: "Pcs",
                item_id: "16"
            },
            {
                title: "Peralatan masak",
                units: "Pcs",
                item_id: "17"
            },
            {
                title: "Selimut",
                units: "Pcs",
                item_id: "18"
            },
            {
                title: "Alas tidur",
                units: "Pcs",
                item_id: "19"
            },
            {
                title: "Peralatan kebersihan",
                units: "Pcs",
                item_id: "20"
            },
            {
                title: "Senter",
                units: "Pcs",
                item_id: "21"
            },
            {
                title: "P3K",
                units: "Pcs",
                item_id: "22"
            },
            {
                title: "Obat Diare",
                units: "Strips",
                item_id: "23"
            },
            {
                title: "Obat anti jamur",
                units: "Pcs",
                item_id: "24"
            },
            {
                title: "Vitamin & Suplemen",
                units: "Strips",
                item_id: "25"
            },
            {
                title: "Parasetamol",
                units: "Strips",
                item_id: "26"
            },
            {
                title: "Minyak kayu putih",
                units: "Botol",
                item_id: "27"
            },
            {
                title: "Alat kesehatan",
                units: "Pcs",
                item_id: "28"
            },
            {
                title: "Kebersihan Wanita",
                units: "Pcs",
                item_id: "29"
            },
            {
                title: "Kebersihan Mulut",
                units: "Pcs",
                item_id: "30"
            },
            {
                title: "Peralatan Mandi",
                units: "Pcs",
                item_id: "31"
            }
        ]
    },

    map_helper: "Pilih kota:",
    report_content: {
        flood: {
            title: "Project overview",
            steps: []
        },
        youtube: {
            title: "Lihat Video Cara Melapor"
        },
        whatsapp: {
            title: "Laporkan melalui WhatsApp",
            steps: [
                'Kirim pesan ke +62858-4-BENCANA (+62 858-4-2362262) atau  <a href="https://bit.ly/BencanaBotWA">https://bit.ly/BencanaBotWA</a>',
                "BencanaBot akan mengirimkan tautan untuk melaporkan bencana.",
                "Buka tautan tersebut dan ikuti petunjuk untuk melaporkan lokasi, unggah foto dan deskripsi.",
                "BencanaBot akan mengirim balasan dengan tautan yang akan mengarahkan ke laporan Anda.",
                "Cek laman PetaBencana.id untuk melihat informasi bencana terkini."
            ]
        },
        twitter: {
            title: "Laporkan melalui Twitter",
            steps: [
                'Twit <a href="https://twitter.com/intent/tweet?text=@petabencana">@petabencana</a> dengan salah satu hashtag berikut:<ul><li>#banjir</li><li>#gempa</li><li>#kebakaranhutan</li><li>#kabutasap</li><li>#gunungapi</li></ul>',
                "@petabencana akan mengirimkan tautan untuk melaporkan bencana",
                " Buka tautan tersebut dan ikuti petunjuk untuk melaporkan lokasi, unggah foto dan deskripsi",
                "@petabencana akan mengirim balasan twit dengan tautan yang akan mengarahkan ke laporan Anda",
                "Cek laman PetaBencana.id untuk melihat informasi bencana terkini"
            ]
        },
        telegram: {
            title: "Laporkan melalui Telegram",
            steps: [
                'Cari <a href="https://t.me/bencanabot">@bencanabot</a>',
                "Klik “/mulai” dan pilih bencana yang ingin Anda laporkan",
                "@bencanabot akan mengirimkan tautan untuk melaporkan bencana",
                "Buka tautan tersebut dan ikuti petunjuk untuk melaporkan lokasi, unggah foto dan deskripsi",
                "@bencanabot akan mengirim balasan dengan tautan yang akan mengarahkan ke laporan Anda",
                "Cek laman PetaBencana.id untuk melihat informasi bencana terkini"
            ]
        },
        facebook: {
            title: "Laporkan melalui Facebook",
            steps: [
                'Cari <a href="https://m.me/petabencana.id">PetaBencana.id</a> di Facebook Massenger',
                "Klik “Get Started” dan pilih bencana yang ingin Anda laporkan",
                "PetaBencana.id akan mengirimkan tautan untuk melaporkan bencana",
                "Buka tautan tersebut dan ikuti petunjuk untuk melaporkan lokasi, unggah foto dan deskripsi",
                "PetaBencana.id akan mengirim balasan dengan tautan yang akan mengarahkan ke laporan Anda",
                "Cek laman PetaBencana.id untuk melihat informasi bencana terkini"
            ]
        },
        web: {
            title: "Laporkan melalui Web",
            steps: [
                "Buka laman Petabencana.id",
                "Klik ikon Laporkan pada kiri atas halaman dan pilih bencana yang ingin Anda laporkan",
                "Klik tombol Laporkan Bencana dan ikuti petunjuk untuk melaporkan lokasi, unggah foto dan deskripsi",
                "Cek laman PetaBencana.id untuk melihat informasi bencana terkini"
            ]
        }
    },
    notify_content: {
        youtube: {
            title: "Lihat video instruksi"
        },
        whatsapp: {
            title: "Daftar untuk mendapatkan notifikasi",
            steps: [
                'Kirim pesan WhatsApp dengan teks “mauinfo” ke <a target="_blank" href="https://bit.ly/BencanaBotWA">https://bit.ly/BencanaBotWA</a> (+62 858-4-2362262)',
                "BencanaBot akan mengirimikan tautan untuk mendapatkan notifikasi bencana",
                "Buka tautan dan ikuti petunjuk untuk memilih lokasi yang ingin Anda terima notifikasinya",
                "BencanaBot akan memberi tahu Anda apabila ada laporan bencana di wilayah Anda!",
                'Untuk berhenti berlangganan, kirim pesan WhatsApp dengan teks “stopinfo” ke <a target="_blank" href="https://bit.ly/BencanaBotWA">https://bit.ly/BencanaBotWA</a> (+62 858-4-2362262)'
            ]
        }
    },
    info_content: {
        intro: "PetaBencana.id adalah platform pemetaan bencana secara real-time untuk Indonesia. Sistem open-source ini menggunakan model chatbot kemanusiaan untuk mengumpulkan laporan bencana langsung dari masyarakat melalui media sosial. Laporan-laporan ini diverifikasi, disortir, dan ditampilkan pada peta berbasis web yang berfokus pada perangkat mobile secara real-time. Dengan menempatkan alat pengambilan keputusan langsung di tangan masyarakat, responden pertama, dan pemerintah daerah, PetaBencana.id membuka akses terhadap informasi bencana, sehingga semua orang dapat memperoleh informasi penting secara mudah.",
        infoLink: '<a href="https://info.petabencana.id/" target="_blank">Info lebih lanjut, kunjungi Yayasan Peta Bencana</a>',
        p1: 'Untuk informasi lebih lanjut, kunjungi <a href="https://info.petabencana.id/" target="_blank">https://info.petabencana.id</a>. Untuk umpan balik, komentar, atau permintaan kemitraan, hubungi <a href="mailto:info@petabencana.id" target="_blank">info@petabencana.id</a>',
        p2: 'Dijalankan oleh <a href="https://info.petabencana.id" target="_blank">  Disaster Map Foundation [Yayasan Peta Bencana]</a>, platform ini dapat terwujud melalui kolaborasi dengan beberapa mitra:',
        // p3: "PetaBencana.id mengumpulkan, menyortir, dan “memvisualisasikan” data menggunakan CogniCity Open Source Software - sebuah platform untuk manajemen kebencanaan - untuk mengubah kicauan di media sosial dan digital menjadi informasi penting bagi warga, komunitas, dan instansi pemerintah. Platform ini menggunakan paradigma “manusia sebagai sensor terbaik”, di mana laporan terkonfirmasi dikumpulkan secara langsung dari pengguna di lapangan, dengan metode yang memungkinkan pengolahan data yang cepat dengan biaya minimum. Kerangka kerja ini menghasilkan data real-time dan akurat, yang langsung tersedia untuk pengguna dan petugas darurat berwenang.",
        partners: {
            funding: "Mitra Donor",
            implementing: "Mitra Pelaksana",
            project: "Mitra Proyek",
            data: "Mitra Penyedia Data"
        },
        termsPopup: "Persetujuan pengguna &amp; Kebijakan privasi",
        mapCredits: "Peta Dasar",
        mapImproveLink: "Meningkatkan peta dasar di",
        browserStack: 'Ujicoba didukung oleh <a href="https://www.browserstack.com" target="_blank">BrowserStack</a>.',
        USAID: "Situs web ini dapat terselenggara dengan dukungan dari warga Amerika melalui USAID (U.S. Agency for International Development). Situs ini bukan merupakan situs resmi USAID atau Pemerintah Amerika Serikat. Konten situs ini seluruhnya merupakan tanggung jawab dari para pencipta dan belum tentu merefleksikan pandangan dari USAID dan Pemerintah Amerika Serikat."
    },
    legend: {
        title: "Legenda",
        flood_gauges: "Tinggi Muka Air",
        flood_depth: "Tinggi Banjir (cm)"
    },
    start_popup_content: "Cari Provinsi atau aktifkan geolokasi untuk melihat laporan di sekitar anda",
    termsContents: [
        {
            tab_key: "u_a",
            tab_name: "Persetujuan pengguna",
            tab_content:
                '<p class="header">Persetujuan Pengguna PetaBencana.id</p><p>Persetujuan ini mengatur akses Anda ke PetaBencana.id, penggunaan PetaBencana.id, dan informasi, konten, dan fungsionalitas dari Situs PetaBencana.id. Dengan menggunakan PetaBencana.id atau berkontribusi dalam segala informasi teks, tautan, grafis, foto, video, atau material lainnya (“Konten”) kepada PetaBencana.id, Anda setuju untuk diatur dengan persetujuan ini.</p><p class="header">1. Tentang PetaBencana.id</p><p>1.1. PetaBencana.id adalah sebuah proyek dari Yayasan Peta Bencana (YPB) dan dioperasikan melalui kolaborasi dengan Badan Nasional Penanggulangan Bencana (BNPB). YPB dan BNPB secara kolektif dalam persetujuan ini disebut sebagai “Kami”. PetaBencana.id didukung oleh USAID. <p>1.2. PetaBencana.id mengumpulkan Laporan Bencana dari pengguna dan instansi pemerintah Indonesia untuk memetakan . Tujuan dari PetaBencana.id adalah untuk menyediakan dan membagikan informasi terbaik mengenai lokasi  secara <i>real-time</i> untuk membantu penduduk dan pengambil keputusan dalam merespon  secara lebih baik. <p>1.3. Meskipun poin 1.2 adalah tujuan Kami, namun Konten dalam PetaBencana.id dapat bersifat tidak dapat diandalkan. Kami memercayakan kontributor untuk menyediakan informasi yang utuh dan akurat, namun tidak dapat mewakili atau menjamin keutuhan, keakuratan, dan keandalan dari Konten yang ditampilkan di PetaBencana.id. Kami tidak dapat mengambil tindakan untuk mengonfirmasi akurasi Konten Laporan Bencana. Segala penggunaan atau tindakan mengandalkan Konten lokasi  di PetaBencana.id, dengan demikian, sepenuhnya menjadi resiko dan tanggung jawab Anda.</p><p class="header">2. Laporan Bencana</p><p>2.1. Anda dapat melaporkan  melalui Kartu Laporan Bencana PetaBencana.id. Kartu Laporan dapat dipanggil dengan meminta Automated Program “Bot” PetaBencana.id untuk memberikan sebuah one-time-link melalui social messaging. Laporan Bencana yang Anda laporkan melalui PetaBencana.id ditambahkan ke peta  yang dapat diakses secara publik di <a href=https://petabencana.id/map>https://petabencana.id/map</a>. <p>2.2. Laporan Bencana dapat mencakup data berikut ini, yang dapat diakses secara publik: <ul> <li>Lokasi Anda pada saat melapor <li>Nama akun (username) social messaging atau user identification number</ul> <p>2.3. PetaBencana.id sewaktu-waktu dapat menolak atau menghapus segala Laporan Bencana dari Situs PetaBencana.id</p><p class="header">3. Konten Laporan Bencana</p><p>3.1. Anda sepenuhnya bertanggung jawab terhadap segala Konten yang Anda laporkan ke PetaBencana.id. Anda dilarang untuk menambahkan Konten yang dimiliki oleh orang lain, termasuk foto, tanpa izin yang jelas dari pemilik hak cipta. Dengan melaporkan Laporan Bencana, Anda menyatakan bahwa Anda memiliki seluruh hak, lisensi, persetujuan, dan izin yang diperlukan untuk melaporkan Konten dari Laporan Bencana, dan menghibahkan dan memberi kuasa kepada kami untuk memberikan lisensi berikut ini. <p>3.2. Kami tidak mengklaim kepemilikan dari Konten yang Anda laporkan dalam Laporan Bencana, namun dengan melaporkan Laporan Bencana, Anda menghibahkan Kami lisensi worldwide, tanpa royalti, non-exclusive, tanpa batas waktu, dan tidak dapat ditarik kembali, untuk menggunakan, membagikan, dan menampilkan Laporan Bencana Anda dan Konten yang terdapat dalam Laporan Bencana dan untuk memberikan sublisensi kepada Laporan Bencana Anda dan Konten di dalamnya di bawah Creative Commons Attribution 4.0 International License (untuk keterangan lebih lanjut, lihat lisensi tersebut dalam <a href=https://creativecommons.org/licenses/by/4.0/>https://creativecommons.org/licenses/by/4.0/ </a>). Hal ini berarti pihak lain dapat memperbanyak dan menggunakan Konten dari Laporan Bencana Anda.</p><p class="header">4. Hak Cipta Lainnya dan Perihal Lisensi</p><p>4.1. PetaBencana.id didukung oleh Open Source Software dan tersedia tanpa jaminan. Untuk detail lanjutan, silakan lihat <u>dokumentasi lisensi proyek</u> <u>(</u> <a href=https://github.com/petabencana/petabencana-meta/blob/master/petabencana.id/LICENSING.md>https://github.com/petabencana/petabencana-meta/blob/master/petabencana.id/LICENSING.md</a>). <p>4.2. Konten pada PetaBencana.id terlisensi di bawah Creative Commons Attribution 4.0 International License. <p>4.3. Apabila Anda yakin bahwa material yang memiliki hak cipta telah ditambahkan secara tidak pantas ke PetaBencana.id, harap hubungi agen hak cipta Kami di <a href=mailto:privacy@petabencana.id>privacy@petabencana.id</a> atau Yayasan Peta Bencana, Jl. Sumbing No.17, Guntur, Jakarta Selatan 12980, Indonesia. Pemberitahuan harap mencakup: <ul> <li>Identifikasi dari material yang memiliki hak cipta. <li>Identifikasi dari material yang diklaim telah dilanggar, termasuk informasi yang cukup untuk bagi Kami untuk melacak lokasi material (contohnya URL, alamat IP, nama komputer). <li>Informasi kontak Anda (contohnya alamat e-mail, nomor yang dapat dihubungi). <li>Pernyataan dari Anda bahwa Anda yakin penggunaan material tersebut tidak dikuasakan oleh pemilik hak cipta atau agen pemberi kuasa. <li>Pernyataan dari Anda bahwa informasi dalam pemberitahuan Anda adalah benar dan Anda adalah pemilik hak cipta atau diberi kuasa untuk bertindak atas nama pemilik hak cipta.</ul> <p class="header">5. Privasi Data</p><p>Kami menghargai privasi Anda. Untuk informasi dari data yang Kami kumpulkan dan bagaimana Kami menggunakan dan melindungi data Anda, silakan lihat Kebijakan Privasi Kami.</p><p class="header">6. <i>Disclaimer</i>; Batasan Tanggung Jawab</p><p>6.1. PETABENCANA.ID DAN SEGALA INFORMASI, KONTEN, ATAU LAYANAN YANG TERSEDIA PADA ATAU MELALUI PETABENCANA.ID DISEDIAKAN SECARA “SEBAGAIMANA ADANYA” (“<i>AS IS</i>”) DAN “SEBAGAIMANA TERSEDIA” (“<i>AS AVAILABLE</i>”) DAN KAMI MENYANGKAL SEGALA JAMINAN DALAM SEGALA BENTUK (PERNYATAAN, TERSIRAT, DAN LAINNYA), TERMASUK, TANPA BATASAN, SEGALA PEMBENARAN PENJUALBELIAN YANG TERSIRAT, KESESUAIAN UNTUK PENGGUNAAN TERTENTU DAN NON-PELANGGARAN DAN SEGALA PENJAMINAN BAHWA SITUS AKAN DIOPERASIKAN SECARA TIDAK TERINTERUPSI ATAU KONDISI BEBAS ERROR ATAU BEBAS VIRUS ATAU KOMPONEN BERBAHAYA LAINNYA, KECUALI SEJAUH SEGALA PENJAMINAN TERSEBUT DAPAT TIDAK DISANGKAL DI BAWAH HUKUM YANG BERLAKU. <p>6.2. KECUALI DILARANG DALAM HUKUM YANG BERLAKU, KAMI TIDAK BERTANGGUNG JAWAB UNTUK, DAN MENYATAKAN PENOLAKAN, TERHADAP SEGALA BENTUK KEHILANGAN, KECELAKAAN, KERUSAKAN, ATAU KERUGIAN YANG DISEBABKAN OLEH PENGGUNAAN PETABENCANA.ID DAN SEGALA KONTEN SITUS. PENIADAAN TANGGUNG JAWAB INI TERMASUK, DAN TIDAK TERBATAS PADA, SEGALA GANTI RUGI KHUSUS, TANPA SENGAJA, SEBAGAI AKIBAT, PENGHUKUMAN, ATAU DENDA, SEPERTI KEHILANGAN PENDAPATAN, DATA, PENDAPATAN YANG DIANTISIPASI, DALAM KONDISI APAPUN DAN KAPANPUN. PENIADAAN TANGGUNG JAWAB INI BERLAKU TERMASUK APABILA PEMBERI LISENSI MENGETAHUI ATAU DAPAT MENGETAHUI KEMUNGKINAN DARI KERUSAKAN TERSEBUT. <p>6.3. APABILA PENIADAAN TANGGUNG JAWAB TIDAK DAPAT DISANGKAL DI BAWAH HUKUM, SETIAP PERTANGGUNGJAWABAN KAMI TERBATAS PADA KEHILANGAN FINANSIAL YANG AKTUAL DAN LANGSUNG, YANG DAPAT DIBUKTIKAN BAHWA DIAKIBATKAN OLEH KELALAIAN KAMI SENDIRI.</p><p class="header">7. Ganti Rugi</p><p>7.1. Anda setuju untuk membela, membebaskan dan mengganti rugi setiap dari Kami, dan masing-masing cabang Kami, afiliasi, pejabat, petugas, fakultas, pelajar, anggota, anggota dewan yang menjabat, agen, dan pegawai dari dan terhadap segala klaim, aksi, atau permintaan pihak ketiga, yang keluar dari, disebabkan oleh, atau berhubungan dalam bentuk apapun terhadap pengunaan PetaBencana.id oleh Anda, termasuk segala bentuk tanggung jawab atau pengeluaran yang disebabkan segala dan seluruh klaim, kehilangan, kerugian (aktual atau sebagai akibat), perkara hukum, keputusan pengadilan, biaya proses pengadilan dan biaya pengacara, dalam segala bentuk dan kondisi. Dalam kondisi tersebut, salah satu dari Kami akan memberikan kepada Anda pemberitahuan tertulis terhadap klaim, perkara hukum, atau tindakan tersebut.</p><p class="header">8. Miscellaneous</p><p>8.1.  Persetujuan ini akan diatur dan diatur sesuai dengan hukum di Indonesia, tanpa memperhatikan segala konflik antarperaturan di antaranya. Apabila terdapat segala ketentuan dalam persetujuan ini yang ditemukan tidak dapat dilaksanakan, hal tersebut tidak mengubah pelaksanaan dari bagian lainnya dari Persetujuan ini. <p>8.2. Persetujuan ini, bersama dengan Kebijakan Privasi Kami, adalah persetujuan sepenuhnya antara Kami dan Anda dan menggantikan segala persetujuan yang ada sebelumnya atau berlaku bersamaan, baik tertulis, diucapkan, atau lainnya, yang berhubungan dengan subjek yang diatur dalam Persetujuan ini. Kami dapat mengubah Persetujuan ini sewaktu-waktu tanpa pemberitahuan, namun perubahan tersebut tidak akan mengubah penggunaan Anda atau kontribusi Anda terhadap Konten pada PetaBencana.id sebelum tanggal berlaku efektif dari perubahan tersebut. Anda dapat mengunjungi ulang Persetujuan ini setiap kali Anda menggunakan PetaBencana.id atau mengumpulkan Laporan Bencana untuk memastikan Anda memahami persetujuan yang berlaku untuk penggunaan atau pelaporan tersebut. <p>8.3. Kegagalan Kami dalam melaksanakan atau mengatur segala hak atau ketentuan dalam Ketentuan Layanan ini tidak diartikan mengabaikan segala hak atau ketentuan tersebut. Apabila terdapat ketentuan dalam Ketentuan Layanan ini ditemukan oleh pengadilan atau yurisdiksi yang berwenang bahwa tidak dapat dilaksanakan, pihak-pihak yang bersangkutan tetap setuju bahwa pengadilan harus mengusahakan tercapainya tujuan dari para pihak yang direfleksikan dalam ketentuan tersebut dan ketentuan lain dalam Ketentuan Layanan ini tetap berlaku sepenuhnya dan mengikat. <p>Tanggal Efektif Berlaku: 20 Februari 2020'
        },
        {
            tab_key: "p_p",
            tab_name: "Kebijakan privasi",
            tab_content:
                '<p class="header">Kebijakan Privasi PetaBencana.id</p><p>Selamat datang di PetaBencana.id, situs web yang mengumpulkan dan menyajikan informasi genangan dari warga dan lembaga pemerintah, membantu untuk mengurangi risiko selama kejadian bencana.  PetaBencana.id merupakan proyek dari Yayasan Peta Bencana (yang kemudian disebut “Kami”). Kami berkomitmen untuk menghargai privasi dari pengguna yang mengakses situs web PetaBencana.id (yang kemudian disebut sebagai “Situs”, termasuk di dalamnya seluruh bagian dari PetaBencana.id domain). <p>CATATAN DI WEB SERVER</p><p>Ketika Anda mengunjungi situs ini, termasuk ketika melaporkan kejadian genangan, situs kami akan menyimpan informasi-informasi berikut ini di dalam <i>server</i>: <ul> <li>Alamat IP anda, <li>URL yang Anda panggil untuk diakses, <li>Tanggal dan metode pemanggilan untuk akses, <li>Kode status dari pemanggilan Anda, <li>URL dari laman yang merujuk Anda pada Situs, <li>Jumlah <i>byte</i> yang ditransfer, <li>Web browser Anda dan sistem operasi platform Anda, <li>Lokasi Anda (apabila Anda menyediakan), <li>Pilihan bahasa Anda (berdasarkan pilihan dari browser), dan <li>Nama akun <i>social messaging</i> Anda atau nomor identifikasi user (User ID). </ul>Kami menggunakan informasi dalam catatan <i>server</i> untuk membantu mendiagnosa permasalahan yang terjadi dalam <i>server</i> kami dan untuk mengelola <i>website</i> kami dengan mengidentifikasi bagian mana dari Situs yang paling banyak digunakan. Kami juga menggunakan informasi ini untuk menyesuaikan konten Situs dengan kebutuhan pengguna dan untuk menghasilkan laporan statistik agregat. Catatan di web <i>server</i> disimpan secara temporer, selama konten catatan dapat diakses oleh administratur Situs, dan kemudian dihapus sepenuhnya dari sistem Kami. Kecuali dibutuhkan dalam proses hukum, kami tidak menghubungkan alamat IP dengan informasi apapun yang dapat mendeteksi identitas personal. Hal ini berarti sesi pengguna dapat ditelusuri melalui alamat IP, namun identitas pengguna akan tetap bersifat anonim. <p>Kami, pada umumnya,tidak membuka data penggunaan Situs berdasarkan alamat IP individual kepada pihak ketiga, namun Kami dapat melakukan hal tersebut dalam keadaan sangat terbatas untuk mengikuti proses hukum atau ketika bekerja dengan konsultan yang membantu kami untuk memperbaiki atau meningkatkan layanan Situs atau untuk memonitor dan memperbaiki keamanan dari jaringan Kami.</ul> <p class="header"><i>USER-GENERATED CONTENT</i></p><p>dikumpulkan melalui kartu laporan bencana. Anda dapat memanggil akses kartu laporan bencana melalui bot <i>social messaging</i> PetaBencana.id. Anda tidak perlu mendaftar untuk menggunakan kartu laporan bencana, meskipun informasi yang anda sediakan, termasuk nama akun (<i>username</i>) media sosial atau nomor ID, digunakan untuk menyediakan layanan ini dan mengontak Anda untuk mengkonfirmasi penerimaan dari laporan bencana Anda. <i>User-generated content</i> akan tersedia untuk seluruh pengunjung Situs untuk ditampilkan, dan akan mengidentifikasi Anda sebagai pelapor melalui <i>username</i> dari akun <i>social messaging</i> Anda. <p>Seluruh dan setiap <i>user-generated content</i> yang Anda kirim ke Situs akan tersedia secara publik kepada setiap pengunjung Situs, sehingga tidak diperbolehkan mengirim segala informasi yang Anda tidak ingin diketahui kepada publik. Informasi lebih lanjut terkait informasi yang dikumpulkan melalui kartu laporan dapat diakses di Persetujuan Pengguna (link to Persetujuan Pengguna). <p class="header">AKSES PENELITIAN TERHADAP DATA</p><p>Sebagai tambahan dari penyediaan informasi bencana kepada warga, pemerintah, dan instansi tanggap darurat, PetaBencana.id memfasilitasi penelitian akademis untuk pengurangan resiko. Segala konten yang Anda kirim ke Situs dapat digunakan untuk penelitian akademis. <p class="header"><i>PROGRAMMING ANALYTICS</i></p><p>Dalam rangka menyaring sumber daya yang ditawarkan melalui Situs dan mengoptimalkan programming PetaBencana.id, PetaBencana.id dapat melakukan internal <i>analytics</i> terhadap konten yang dikirimkan oleh pengguna. Segala langkah internal <i>analytics</i> akan dilakukan terhadap <i>user-generated content</i> yang anonim. <p class="header"><i>GOOGLE ANALYTICS</i></p><p>Kami menggunakan perangkat lunak Google <i>Analytics</i> untuk melakukan analisis penggunaan Situs. Google <i>Analytics</i> mengumpulkan informasi anonim dari pengguna untuk membantu kami menelusuri penggunaan Situs dan rujukan dari situs lainnya. Data ini digunakan terutama untuk mengoptimalkan <i>website</i> experience untuk pengguna Kami, namun Kami juga dpaat menggunakan data tersebut untuk membantu kami dalam mempromosikan Situs. <p>Informasi yang dikumpulkan dan diproses oleh Google <i>Analytics</i> mencakup alamat IP pengguna, lokasi jaringan, dan lokasi geografis. Google <i>Analytics</i> memperoleh seluruh informasi langsung dari pengguna, dengan memasang <i>cookie</i> (lihat di bawah) dalam komputer yang tersedia JavaScript. Situs tidak membagikan informasi apapun yang dikumpulkan kepada Google, dan Google tidak mengumpulkan informasi yang dapat mendeteksi identitas personal.<p class="header">PERSONALLY IDENTIFIABLE INFORMATION</p><p>Kami hanya mengumpulkan informasi kontak dari pengguna yang secara sukarela mendaftar untuk fitur notifikasi berbasis lokasi. Memberikan kami informasi kontak Anda selalu bersifat opsional dan sesuai kebijaksanaan Anda. Dengan mendaftar ke fitur ini, Anda menyetujui pengumpulan dan penggunaan informasi kontak Anda sebagaimana dijelaskan dalam Kebijakan Privasi ini. Informasi kontak yang kami kumpulkan terbatas pada hal-hal penting yang diperlukan untuk menyampaikan pemberitahuan terkait layanan yang Anda daftarkan. Kami tidak mengumpulkan detail pribadi, memastikan privasi Anda tetap terjaga. Kami tidak menggunakan informasi ini untuk tujuan lain apa pun tanpa izin tertulis dari Anda.Kami tidak menggabungkan serta menggunakan informasi ini dengan data atau laporan lain apa pun dari platform. Kami mengambil semua tindakan pencegahan untuk melindungi informasi kontak Anda dari kehilangan, akses, penggunaan, atau pengungkapan yang tidak sah. Anda dapat memilih keluar dari fitur notifikasi berbasis lokasi kapan saja, dan pada saat itu kami akan menghapus informasi kontak Anda.</p><p class="header"><i>COOKIES</i></p><p>s adalah bit unik dari data komputer yang ditransfer dari sebagian besar<i>website</i> kepada komputer Anda saat pertama kali Anda mengunjungi<i>website</i> tersebut, termasuk Situs. <i>Cookie</i>s disimpan dalam <i>hard drive</i> Anda dan dapat diakses oleh <i>website</i> untuk menelusuri penggunaan sebelumnya. Seperti disebutkan di atas, Google <i>Analytics</i> akan memasang <i>cookie</i> pada <i>hard drive</i> pengguna Situs. <p class="header">PENYINGKAPAN KEPADA PIHAK KETIGA</p><p>Kami tidak akan menjual, meminjamkan, atau menyingkap segala informasi yang dapat mendeteksi identitas personal yang Kami kumpulkan, kepada pihak ketiga,kecuali seperti telah disebutkan dalam Kebijakan ini atau dibutuhkan untuk proses hukum. Kami dapat membuka informasi kepada karyawan Yayasan Peta Bencana, konsultan, dan agen yang memiliki legitimasi untuk mengetahui informasi tersebut, dalam tujuan memperbaiki atau meningkatkan Situs atau untuk memonitor dan memperbaiki keamanan dari jaringan Kami. Kami juga dapat membuka informasi ini ketika keadaan khusus, seperti penyingkapan informasi diperlukan untuk proses hukum, atau ketika penyingkapan, dalam pertimbangan Kami, diperlukan untuk melindungi hak Kami di mata hukum, termasuk hak kekayaan intelektual. <p class="header"><i>WEBSITE</i> LAINNYA</p><p>Situs ini dapat mengandung tautan ke web lainnya, termasuk <i>website</i> organisasi selain Massachusetts Institute of Technology. <i>Website</i> yang ditautkan oleh Situs dapat memasang <i>cookie</i>s di komputer Anda, mencatat akses Anda ke <i>website</i> mereka, atau mengumpulkan informasi identifikasi pengguna (user-identifying information) secara langsung dari Anda, saat Anda mengakses situs mereka. Kami tidak bertanggung jawab untuk seluruh praktek privasi dari <i>website</i> lainnya yang ditautkan oleh Situs Kebijakan privasi dari <i>website</i>-<i>website</i> tersebut, apabila ada, dapat mengatur penggunaan Anda terhadap <i>website</i> tersebut. <p class="header">KEAMANAN DATA</p><p>Kami memiliki prosedur fisik, elektronik, dan manajerial untuk melindungi informasi yang Kami kumpulkan secara online. Bagaimanapun, seefektif apapun langkah-langkah tersebut, tidak ada sistem keamanan yang tidak dapat ditembus. Kami tidak dapat menjamin sepenuhnya keamanan dari database Kami, dan Kami tidak dapat menjamin informasi yang Anda kirimkan tidak akan disadap ketika dikirimkan kepada Kami melalui Internet. <p class="header">NOTIFIKASI PERUBAHAN KEBIJAKAN PRIVASI</p><p>Kami akan meninjau langkah-langkah pengamanan Kami dan Kebijakan Privasi secara periodik. Kami dapat mengubah Kebijakan Prviasi kami dari waktu ke waktu berdasarkan peninjauan ulang tersebut, atau dikarenakan Kami menambah atau mengubah layanan atau fitur. Apabila Kami mengubah Kebijakan Privasi, Kami akan mengunggah perubahan tersebut ke Situs. Kami menghimbau Anda untuk mengecek Kebijakan Privasi kami secara berkala. <p>Apabila terdapat pertanyaan terhadap Kebijakan Privasi ini, tata laksana Situs ini, atau transaksi terkait Situs ini, Anda dapat menghubungi <a href=mailto:contactprivacy@petabencana.id>contactprivacy@petabencana.id </a>atau Yayasan Peta Bencana, Jl. Sumbing No.17, Guntur, Jakarta Selatan 12980, Indonesia.'
        }
    ]
};
module.exports = id;
