var app = new Vue({
  el: '#app',
  data() {
    return {
      info: {
        logo: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/logo.png',
        baner: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/banner.jpg',
        hero1: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/hero1.jpeg',
        hero2: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/hero2.jpeg',
        akreditasi: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/akred.png',
        whistleblower: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/whistleblowericon.jpg',
        kuisicon1: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/smile-2.png',
        kuisicon2: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/smile-1.png'
      },
      tentang: [
        { title: 'Info Tempat Tidur' },
        { title: 'Reservasi Griya Husada' },
        { title: 'Reservasi Poliklinik Online' },
        { title: 'Registrasi PPDS' },
        { title: 'Dokter' },
        { title: 'Fatmawati Awards' },
        { title: 'Pelayanan Publik' },
        { title: 'Bagian Diklit' },
        { title: 'Antrian Online (Kemkes)' },
      ],
      links: [
        { title: 'Kementrian Kesehatan Republik' },
        { title: 'Kapasitas Tempat Tidur Online' },
        { title: 'e-Jurnal Penelitian Kesehatan' },
        { title: 'Advertorial' },
        { title: 'Fatmawati Hospital Journal' },
        { title: 'Whistleblowing Systems' }
      ],
      download: [
        { title: 'Cara Pendaftaran Online Rawat Jalan Umum' },
        { title: 'Download Jadwal Dokter Griya Husada' },
        { title: 'Download Jadwal Rawat Jalan Umum' },
        { title: 'Lihat Jadwal Dokter Griya Husada ' },
        { title: 'Cek Resep Farmasi Anda Hari Ini' },
      ],
      media: [
        { media: 'Facebook', icon: 'fab fa-facebook-f fa-2x fb-color' },
        { media: 'Twitter', icon: 'fab fa-twitter fa-2x tw-color' },
        { media: 'Youtube', icon: 'fab fa-youtube fa-2x yt-color' },
        { media: 'Instagram', icon: 'fab fa-instagram fa-2x ig-color' },
      ],
      alur: [
        {
          video: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/Alur%20SISRUTE.mp4',
          title: 'Alur SISRUTE (Sistem Rujukan Terintegrasi)',
          desc: 'Sistem Rujukan Terintegrasi (Sisrute) merupakan sebuah aplikasi untuk penyelenggaraan pelayanan kesehatan antar Fasilitas kesehatan. Sisrute Pelayanan kesehatan tingkat rujukan terdiri atas fasilitas kesehatan sekunder dan tersier. Sisrute mempunyai fungsi dalam menbantu Perumusan kebijakan strategis dan teknis dibidang kesehatan rujukan yang berkesinambungan dan mendukung penyelenggaraan pemerintahan daerah di bidang kesehatan. Sumber data yang digunakan adalah data sekunder yang sudah ada di rumah sakit.',
          descb: 'Aplikasi Sisrute sangat membantu percepatan pelayanan,  memudahkan informasi rujukan terkait kejelasan pasien dapat diterima oleh RS yang dirujuk, mudah melakukan konsultasi dalam penanganan pasien lebih terarah dan meminimalkan penolakan pasien dengan koordinasi dan komunikasi antara RS dengan RS yang ingin dirujuk/RS penerima. Kendala penggunaan Sisrute yaitu:   Server Internet tidak stabil dan  data-data pasien yang dirujuk tidak lengkap sesuai dengan form yang ada di sistem sehingga menyulitkan RS penerima menerima jawaban. Kelebihan penggunaan Sisrute yaitu yaitu perujuk bisa mengetahui tujuan Rumah Sakit sesuai kebutuhan pasien, memastikan pasien sudah mendapatkan perawatan dari RS yang dirujuk, perujuk bisa dapat kepastian terhadap pasien yang akan dirujuk.'
        },
        {
          video: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/Berobat%20Online.mp4',
          title: 'Alur Pendaftaran Online',
          desc: 'PASIEN yang akan melakukan konsultasi kesehatan di rumah sakit (manapun), pertama kali yang harus dilakukan adalah mendaftarkan diri di loket pendaftaran guna untuk mendapatkan pelayanan yang diinginkan. Dan ketika sampai di loket pendaftaran, petugas akan menginput data indentitas pasien sebagai administrasi rumah sakit, untuk selanjutnya menyiapkan rekam medis di kartu pendaftaran atau kartu berobat si pasien. Usai melakukan pendaftaran maka pasien akan mendapatkan kartu pendaftaran pasien (kartu berobat), sebagai tanda kartu sudah melakukan registrasi.',
          descb: 'Pada saat pendaftaran, lanjut dia, nantinya diperoleh data rekam medis dari pasien pendaftar, kemudian berkas rekam medis akan dikirim ke poliklinik oleh petugas rekam medis yang telah diberikan kewenangan untuk membawa berkasnya rekam medis.'
        }
      ],
      video: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/v-1.jpeg',
          video: 'http://rsupfatmawati.id//assets/uploads/video/1621480671LEBARANDIREKSI.mp4',
          modalid: 'basicExampleModal-2',
          modalidtarget: '#basicExampleModal-2',
          modalabel: 'exampleModalLabel-2',
          title: 'Minal Aidin Walfaizin Mohon Maaf Lahir dan Batin 1442 H',
          desc: 'RSUP Fatmawati mengucapkan Minal Aidin Walfaizin Mohon Maaf Lahir dan Batin 1442 H...',
          descb: 'Dewan Pengawas, Direksi dan Civitas Hospitalia RSUP Fatmawati mengucapkan Minal Aidin Walfaizin Mohon Maaf Lahir dan Batin 1442 H. Dipublikasikan oleh Humas RSUP Fatmawati #rsupfatmawati #yankes #kemenkes_ri #dinkesdki #ditjenyankes #lebaran #inforumahsakit #infokesehatan'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/v-2.jpg',
          video: 'http://rsupfatmawati.id//assets/uploads/video/1621480873WBKIRJBUYUNITA104.mp4',
          modalid: 'basicExampleModal-3',
          modalidtarget: '#basicExampleModal-3',
          modalabel: 'exampleModalLabel-3',
          title: 'Sistem Reservasi Online',
          desc: 'Sistem Reservasi Online Sistem Reservasi Online Terintegrasi dengan BPJS...',
          descb: 'Sistem Reservasi Online Sistem Reservasi Online Terintegrasi dengan BPJS. Tujuan Inovasi ini adalah 1.memudahkan akses Publik untuk datang ke RSUP Fatmawati. 2.Terjadi Transparansi 3.Pengaturan kunjungan para pelanggan menghindari penumpukkan 4. Tepat waktu 5. Efektif dan Efisien Dipublikasikan oleh Humas RSUP Fatmawati #rsupfatmawati #kemenkes_ri #yankes #dinkesdki #reservasionline #inforumahsakit #infokesehatan'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/v-3.jpg',
          video: 'http://rsupfatmawati.id//assets/uploads/video/1620794282IKLANLEBARANDILARANGMUDIK.mp4',
          modalid: 'basicExampleModal-4',
          modalidtarget: '#basicExampleModal-3',
          modalabel: 'exampleModalLabel-4',
          title: 'Sambut Hari Kemenangan dengan suasana gembira',
          desc: 'Jarak Bukan Halangan untuk Menyambut Idul Fitri...',
          descb: 'Jarak Bukan Halangan untuk Menyambut Idul Fitri. Sambut Hari Kemenangan dengan suasana gembira. Dipublikasikan oleh Humas RSUP Fatmawati #rsupfatmawati #yankes #kemenkes_ri #ditjenyankes #dinkesdki #idulfitri #harikemenangan #inforumahsakit #infokesehatan'
        },
        {
          id: 4,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/v-4.jpg',
          video: 'http://rsupfatmawati.id//assets/uploads/video/1616031132PERAWAT.mp4',
          modalid: 'basicExampleModal-5',
          modalidtarget: '#basicExampleModal-5',
          modalabel: 'exampleModalLabel-5',
          title: 'Selamat Ulang Tahun PPNI ke 47 Tahun',
          desc: 'Selamat Ulang Tahun Persatuan Perawat Nasional Indonesia yang ke 47 Tahun...',
          descb: 'Direksi dan Civitas Hospitalia RSUP Fatmawati Mengucapkan. Selamat Ulang Tahun Persatuan Perawat Nasional Indonesia yang ke 47 Tahun. Semoga tetap sehat dan semangat. Terus meningkatkan dan mengembangkan Ilmu pengetahuan serta Profesionalisme dalam memberikan asuhan keperawatan yang terbaik kepada masyarakat. #rsupfatmawati #yankes #dinkesdki #kemenkes_ri #ppniindonesia #perawatindonesia #germas #indonesiasehat'
        },
        {
          id: 5,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/v-5.jpg',
          video: 'http://rsupfatmawati.id//assets/uploads/video/1620632099DIABET.mp4',
          modalid: 'basicExampleModal-6',
          modalidtarget: '#basicExampleModal-6',
          modalabel: 'exampleModalLabel-6',
          title: 'Pelayanan Diagnostik Diabetes Melitus di RSUP Fatmawati',
          desc: 'Kerja insulin yang menyebabkan peningkatan kadar gula di dalam darah...',
          descb: 'dr. Marina Epriliawati, Sp.PD-KEMD Konsultan Endokrin Metabolik dan Diabetes Diabetes melitus / penyakit kencing manis / penyakit gula merupakan suatu penyakit tidak menular yang bersifat kronik, Diakibatkan oleh adanya kelainan dari produksi insulin / kerja insulin yang menyebabkan peningkatan kadar glukosa atau gula di dalam darah. Dipublikasikan oleh Humas RSUP Fatmawati #rsupfatmawati #kemenkes_ri #dinkesdki #yankes #ditjenyankes #diabetes #pldt #penyakitdiabetes #infokesehatan'
        },
        {
          id: 6,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/video/v-6.jfif',
          video: 'http://rsupfatmawati.id//assets/uploads/video/1620181715PRB2.mp4',
          modalid: 'basicExampleModal-7',
          modalidtarget: '#basicExampleModal-7',
          modalabel: 'exampleModalLabel-7',
          title: 'Progran Rujuk Balik Pasien JKN di RSUP Fatmawati',
          desc: 'Progran Rujuk Balik Pasien JKN di RSUP Fatmawati Program Rujuk Balik...',
          descb: 'Progran Rujuk Balik Pasien JKN di RSUP Fatmawati Program Rujuk Balik adalah salah satu program dari BPJS yang bertujuan untuk memudahkan akses pelayanan kesehatan bagi peserta BPJS yang menderita penyakit kronis dengan kondisi stabil. RSUP Fatmawati sebagai salah satu Rumah Sakit Rujukan, melaksanakan Program Rujuk Balik. Manfaat PRB bagi pasien, adalah memudahkan akses pelayanan serta memudahkan dalam mendapatkan obat yang dibutuhkan. #rsupfatmawati #kemenkes_ri #yankes #dinkesdki #ditjenyankes #pasienrujukbalik #bpjskesehatan #inforumahsakit #wbk #wbbm #wbkwbbm'
        }
      ],
      berita: [
        {
          id: 1,
          date: 'Humas : 26 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-1.jpeg',
          title: 'Selamat Memperingati Hari Raya Waisak',
          desc: 'Dewan Pengawas, Direksi dan Civitas Hospitalia RSUP Fatmawati Mengucapkan Selamat Memperingati Ha..'
        },
        {
          id: 2,
          date: 'Humas : 23 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-2.jpeg',
          title: 'Selamat Ulang Tahun Prof. Dr. Abdul Kadir, Ph.D, Sp.THT-KL(K), MARS Direktur Jenderal Pelayanan Kesehatan Kemenkes RI',
          desc: 'Dewan Pengawas, Direksi dan Civitas Hospitalia RSUP Fatmawati Mengucapkan Selamat Ulang TahunP..'
        },
        {
          id: 3,
          date: 'Humas : 20 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-3.jpeg',
          title: 'Selamat Memperingati Hari Kebangkitan Nasional 20 Mei 2021.',
          desc: 'Dewan Pengawas, Direksi dan Civitas Hospitalia RSUP Fatmawati Mengucapkan Selamat Memperingati Ha..'
        },
        {
          id: 4,
          date: 'Humas : 17 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-4.jpeg',
          title: 'Selamat Hari Hipertensi Sedunia',
          desc: 'Rumah Sakit Umum Pusat Fatmawati mengucapkan Selamat Hari Hipertensi Sedunia 17 mei 2021..'
        },
        {
          id: 5,
          date: 'Humas : 12 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-5.jpeg',
          title: 'Selamat Memperingati Hari Raya Idul Fitri 1442 H',
          desc: 'Dewan Pengawas, Direksi dan Civitas Hospitalia RSUP Fatmawati Mengucapkan Selamat Hari Raya idul Fitri 1442H Moh..'
        },
        {
          id: 6,
          date: 'Humas : 10 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-6.jpeg',
          title: 'Terus Jalin Silaturahmi Dimasa Pandemi',
          desc: 'Terus Jalin Silaturahmi di Masa Pandemi dengan Menerapkan 5M.- Mencuci Tangan dan Melaksanakan..'
        },
        {
          id: 7,
          date: 'Humas : 05 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-7.jpeg',
          title: 'Meningkatkan Kualitas Hidup Pasien Dialisis',
          desc: 'Dalam Rangka Memperingati HUT ke 60 RSUP FatmawatiDengan ini kami mengundang Bapak/Ibu dalam k..'
        },
        {
          id: 8,
          date: 'Humas : 03 / May, 2021',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/berita/berita-8.jpeg',
          title: 'Selamat Hari Pendidikan Nasional',
          desc: 'Direksi dan Civitas Hospitalia RSUP Fatmawati MengucapkanSelamat Memperingati Hari Pendidikan Nas...'
        }
      ],
      agenda: [
        {
          id: 1,
          date: 'Humas : 05 / Oct, 2020',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/agenda/agenda-1.jpeg',
          title: 'PELATIHAN ASEPTIC DISPENSING TECHNIQUE'
        },
        {
          id: 2,
          date: 'Humas : 19 / Aug, 2020',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/agenda/agenda-2.jpeg',
          title: 'PELATIHAN KEPERAWATAN INTENSIVE CARE UNIT KOMPREHENSIF'
        },
        {
          id: 3,
          date: 'Humas : 19 / Aug, 2020',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/agenda/agenda-3.jpeg',
          title: 'WEBINAR MANAJEMEN APD PADA PASIEN COVID-19'
        },
        {
          id: 4,
          date: 'Humas : 10 / Jun, 2020',
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/agenda/agenda-4.jpeg',
          title: 'PELATIHAN ASEPTIC DISPENSING TECHNIQUE'
        }
      ],
      informasi: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/informasi/info.jpg',
          date: 'Humas : 27 / Oct, 2020',
          title: 'PENGUMUMAN HASIL PENERIMAAN TENAGA PEREKAM MEDIS'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/informasi/info.jpg',
          date: 'Humas : 18/ Sep, 2020',
          title: 'PENERIMAAN PEGAWAI TIDAK TETAP TENAGA REKAM MEDIS RSUP FATMAWATI'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/informasi/info.jpg',
          date: 'Humas : 11 / Aug, 2020',
          title: 'PENGUMUMAN PEGAWAI TIDAK TETAP PETUGAS SPGDT TAHUN 2020'
        },
        {
          id: 4,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/informasi/info.jpg',
          date: 'Humas : 10 / Aug, 2020',
          title: 'RALAT PENGUMUMAN PENERIMAAN PEGAWAI TIDAK TETAP TEKNISI TRANFUSI DARAH TAHUN 2020'
        },
        {
          id: 5,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/informasi/info.jpg',
          date: 'Humas : 10 / Aug, 2020',
          title: 'PENGUMUMAN PENERIMAAN PEGAWAI TIDAK TETAP PROGRAMMER TAHUN 2020'
        },
        {
          id: 6,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/informasi/info.jpg',
          date: 'Humas : 10 / Aug, 2020',
          title: 'PENGUMUMAN PENERIMAAN PEGAWAI TIDAK TETAP TENAGA PERAWAT TAHUN 2020'
        },
      ],
      education: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/edukasi/edu-1.jpg',
          date: 'Humas : 13 / Mar, 2020',
          title: 'PENGGUNAAN TENSIMETER'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/edukasi/edu-2.jpg',
          date: 'Humas : 13 / Mar, 2020',
          title: 'TEKNIK PENYUNTIKAN INSULIN'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/edukasi/edu-1.jpg',
          date: 'Humas : 13 / Mar, 2020',
          title: 'PENGGUNAAN OBAT YANG EFEKTIF DAN AMAN'
        },
        {
          id: 4,
          img: 'https://raw.githubusercontent.com/ihmwhydn/repo-image/master/rsf/edukasi/edu-2.jpg',
          date: 'Humas : 13 / Mar, 2020',
          title: 'PENGGUNAAN OBAT YANG RASIONAL'
        }
      ],
      artikel: [
        {
          id: 1,
          date: 'Humas : 04 / Mar, 2021',
          title: 'Asuhan Keperawatan pada Bayi dengan Masalah Termoregulasi'
        },
        {
          id: 2,
          date: 'Humas : 23 / Apr, 2021',
          title: 'PENCEGAHAN DAN PENGENDALIAN INFEKSI UNTUK PENGUNJUNG RUMAH SAKIT'
        },
        {
          id: 3,
          date: 'Humas : 17 / Dec, 2020',
          title: 'Asuhan Keperawatan pada Bayi dengan Hiperbillirubinemia Patologis'
        },
        {
          id: 4,
          date: 'Humas : 25 / Aug, 2020',
          title: 'Perawatan Pasien Kanker Anak di Masa Pandemi Covid-19'
        },
        {
          id: 5,
          date: 'Humas : 28 / May, 2020',
          title: 'IMUNITAS PASIEN KANKER MENGHADAPI PANDEMI COVID-19'
        },
        {
          id: 6,
          date: 'Humas : 03 / Nov, 2020',
          title: 'ENDOMETRIOSIS (NYERI HAID)'
        }
      ]
    }
  }
})