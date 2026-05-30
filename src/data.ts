import { ServiceItem, ProjectItem, TestimonialItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'undangan',
    title: 'Undangan Pernikahan',
    description: 'Undangan digital interaktif dengan desain elegan, RSVP otomatis, galeri foto, pencatatan tamu, dan background music yang memukau.',
    icon: 'favorite',
    badge: 'Popular',
    features: [
      'Desain Kostum & Responsive',
      'Manajemen Undangan & RSVP Otomatis',
      'Integrasi Musik Latar & Galeri Foto',
      'Buku Tamu Digital & Amplop Digital (QR Pay)',
      'Countdown Timer & Lokasi Google Maps'
    ],
    pricing: 'Mulai Rp 149.000',
    deliveryTime: '1-3 Hari Kerja'
  },
  {
    id: 'portfolio',
    title: 'Portofolio Kreatif',
    description: 'Tampilkan karya terbaik Anda dengan tata letak minimalis, performa super cepat, dan animasi ciamik untuk menonjolkan profesionalisme Anda.',
    icon: 'person',
    features: [
      'Navigasi Filter Kategori Karya',
      'Animasi Transisi Halus (Framer Motion)',
      'Optimasi Gambar & Kecepatan Muat',
      'Tautan Sosial Media & Resume Unduh',
      'Formulir Kontak Langsung'
    ],
    pricing: 'Mulai Rp 499.000',
    deliveryTime: '3-5 Hari Kerja'
  },
  {
    id: 'umkm',
    title: 'Bisnis UMKM',
    description: 'Website profil bisnis lokal yang dioptimalkan untuk SEO Google, integrasi katalog produk WhatsApp, dan peta lokasi interaktif.',
    icon: 'storefront',
    badge: 'Best Value',
    features: [
      'Struktur Ramah SEO Google',
      'Katalog Produk Interaktif',
      'Tombol Pintas WhatsApp Checkout',
      'Integrasi Google Maps & Jam Operasional',
      'Gratis Domain .com / .co.id (1 Tahun)'
    ],
    pricing: 'Mulai Rp 899.000',
    deliveryTime: '5-7 Hari Kerja'
  },
  {
    id: 'custom-app',
    title: 'Aplikasi Kustom',
    description: 'Sistem perangkat lunak berbasis web kustom yang kompleks (ERP, CRM, Reservasi, Inventory) disesuaikan dengan alur bisnis Anda.',
    icon: 'code',
    features: [
      'Dashboard Admin & Analitik Interaktif',
      'Manajemen Hak Akses Pengguna',
      'Integrasi API Pihak Ketiga',
      'Arsitektur Database Tangguh & Aman',
      'Dukungan Teknis & Pemeliharaan Berkala'
    ],
    pricing: 'Hubungi Kami (Kustom)',
    deliveryTime: 'Sesuai Cakupan Proyek'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Nexus Fintech Solution',
    category: 'Apps',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEgGhD94ckmeUnE7j8c_UKejoyeM4CUPXoaXM4Yrn5zaKnOC7MUTmZF-dKUSLvA6d4nD1P7IVbJ3H3fuSI3U2WuCfbJ48U2gaTEEc8bJcVhLmU9nAI_SDwLTVGdm0dvk4TTWWCacezAFhUoa2GRWqIewf3VKhaoRgB8-xXYfrsVcFrjSGZDqp9v9GZqvK4EEJblJeAHMqDaWjEvx9AaB1bZRQu5nlcFcJaQv8RNeVxYZSpRGfGpH7PPUucQRp3mJce9e1Mo58-hTc',
    description: 'Platform pembayaran finansial dengan latensi ultra rendah, dsitinguished 12-column grid system, dan dasbor analitik real-time yang mutakhir.',
    tags: ['React', 'Vite', 'Fintech', 'Micro Frontend'],
    link: 'https://nexus-fintech.example.com'
  },
  {
    id: 'proj-2',
    title: 'Eternal Love Digital',
    category: 'Wedding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd6qOvHD84lJo7sgl8YbIXBBpSdiGTYWEf9zol_gmiLKnHuktc91lm_JBm4LcAO-MPZGRaWB7Tl2zL-MJH8AzeRa0mZl54LVv7nC_i4yNH92Lt3mNTcH4WAclFvDFerzojsjAn3I_P0a8kubo7_TKdfZ1CqdcNz1a8nsstRLxhpHuInsy2bPz0Wb2fpQH5vbWRuyfTR_zaxbLvAjrmGMsGsNJ0GzUn0gIDKx9rXacPJw1MjZEaj_-qnlqfu8lc_aCakVZGCTn9r3k',
    description: 'Undangan pernikahan digital premium dengan tipografi serif elegan di atas latar belakang krem lembut, RSVP terintegrasi, galeri parallax, dan desain romantis klasik.',
    tags: ['Eternal Love', 'Serif Elegant', 'Botanical Line Art'],
    link: 'https://eternal-love-wedding.example.com'
  },
  {
    id: 'proj-3',
    title: 'Stellar Arch Studio',
    category: 'Business',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv9feIlh_CB1cNv9-I7q1mhK_bkyiEj_hS4APkNRd4i3ZM05exj8YsxnnU3m4srczegTR0nE3kYZLdXTX7_TaOHGnUtq0UQb9VVS0Zr1kgTc3QDJTOcT8KE7YEVq9z3MjWCod38m2V55LkMEUqbXMbIF4SEMB-Py9fhL8d4i0AKD464Q0Riq5p5nVdrGFGSZg_-uXqM1Maf3PpNi-0wUEcgzS28eLVeKYg1S8Bzbmkim1FAAy6gZ5hsMTrbOH1xkoKHIPX3806_hQ',
    description: 'Situs web portofolio korporasi untuk biro arsitektur modern berkelas tinggi dengan navigasi minimalis, gambar resolusi tinggi, dan visual gelap yang sangat presisi.',
    tags: ['Corporate Site', 'Architecture', 'Monochromatic'],
    link: 'https://stellar-arch.example.com'
  },
  {
    id: 'proj-4',
    title: 'Artisanal Visuals',
    category: 'Portfolio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0gqnqFCtHUUmL03DcFGzu79G_D7KaHm7C7cNnVXO3JVs0Y9Np4Qa4z6pHbIk7jakVJltH13X9kmOBX7xe_wO8peC2zxEJs4sR8CalPcRg4tIzaQPskvZr0e4Br3O33UX0MjFF0uGIYKGZEmUFzXpZmyjC5al4XwyOD7PMZwCqRNHvmUSwPwYL3nb15wWU4nrZrmscMWZnGwRmJvsexADokHiIPkL19vUGYeRNdsMFyGdNNx32JuGE10AnUj8SEdz8J_pDWq_Vysc',
    description: 'Portofolio interaktif asimetris untuk seniman digital 3D dengan visual dark-mode yang dinamis, glow effects, serta penekanan pada fungsionalitas murni kreatif.',
    tags: ['Digital Artist', 'Dark Mode', 'Creative Grid'],
    link: 'https://artisanal-visuals.example.com'
  },
  {
    id: 'proj-5',
    title: 'Apex Data Analytics',
    category: 'Business',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeLGDZTmfojWOBFT4suc7wod-UDFPmgOR33C791hA6EEGKURZjsjrZwI9f42CA5dNhmAhJZWKqmGt47YfhwNrGtFe8gnmcdK5PH3HKjQTxKqVPiNQb62AP-cc3qaLXEEXbGZSYCifYzMEV6hKxX-Fke4WTKac7VyAOOcmRibLG0eAWb3DFsrnumOUpIja5MOF55iHJxeeH_Y-HAWBhYpkweESij12Y7QC_EDpXvhgO_H-qcK_1Ef-6LgO8FMsMPFOG4AELAplDFBY',
    description: 'Dasbor analitik bisnis minimalis dengan visualisasi data interaktif, grafik performa bertenaga tinggi, dan integritas API instan yang memperkuat kredibilitas.',
    tags: ['Analytics Dashboard', 'Clean Data', 'Business Core'],
    link: 'https://apex-analytics.example.com'
  },
  {
    id: 'proj-6',
    title: 'The Signature Union',
    category: 'Wedding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY1eq-pgCNzITCEZelhv6glG58Yv9s1kbJxR7lb-HJeQTq8_sP1lIvmAulPUbbJMj1fVcJrZgxLvZOKEqZeBM3pQU0QEbI0Vy3xXvzfbEjjfwQVihENhHtCsyqndvUYvsFegtSrkklv2r49D74KK3VtD4e-craaDqsOeN9EGgTD_u6EnSXemt2-dJRkby3kq4QDrgvaF49mm_Y2U7IK9DwQ7v8UbGKDwTV_EnwyrX6bfOej9OL3hQZ6kNJYG3KyYZ203BFBJ-7cw8',
    description: 'Situs pendaftaran kado pernikahan & undangan sinematik mewah dengan latar belakang lembut, RSVP otomatis, dan alur interaksi multi-user yang transparan.',
    tags: ['Luxury Registry', 'Cinematic View', 'Ivory Accent'],
    link: 'https://signature-union.example.com'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Andi Wijaya',
    role: 'Co-Founder',
    company: 'Kopi Bumi Nusantara',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    text: 'Semenjak dipublikasikan oleh Nexatech, pesanan kopi kemasan kami meningkat pesat. Website-nya sangat cepat diakses dari ponsel sekalipun, dan navigasi katalognya benar-benar intuitif.'
  },
  {
    id: 'test-2',
    name: 'Dania Lestari',
    role: 'Pengantin Wanita',
    company: 'Sava & Dania Wedding',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    text: 'Sangat senang memilih layanan undangan digital di sini. Semua tamu memuji keindahan musik latar dan transisi galeri fotonya. RSVP tamu terpantau rapi sehingga hemat konsumsi.'
  },
  {
    id: 'test-3',
    name: 'Giri Pratama',
    role: 'Product Manager',
    company: 'Nexa Logistik',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    text: 'Pengkodean kustom mereka rapi sekali. Sesuai dengan slogan Precision Engineering. Dashboard analitik sangat responsif dan memudahkan tim operasional memantau status kontainer.'
  }
];
