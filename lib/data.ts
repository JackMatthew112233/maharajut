// Mockup data for Maharajut website

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  materials: string[];
  dimensions?: string;
  weight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  readTime: number;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

// Products Data
export const products: Product[] = [
  {
    id: "1",
    name: "Tas Rajut Batik Modern",
    description:
      "Tas rajut dengan motif batik kontemporer yang memadukan tradisi dan modernitas. Cocok untuk acara formal maupun kasual.",
    price: 185000,
    category: "Tas",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    materials: ["Benang katun", "Furing kain"],
    dimensions: "30 x 25 x 10 cm",
    weight: "200g",
  },
  {
    id: "2",
    name: "Sweater Rajut Nusantara",
    description:
      "Sweater hangat dengan motif tenun tradisional Indonesia. Nyaman digunakan dan tahan lama dengan kualitas rajutan premium.",
    price: 285000,
    category: "Pakaian",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    materials: ["Wool berkualitas tinggi", "Aksen benang emas"],
    dimensions: "Fit to L (52cm lebar dada)",
    weight: "350g",
  },
  {
    id: "3",
    name: "Dompet Rajut Etnik",
    description:
      "Dompet kecil dengan rajutan halus dan motif etnik Nusantara. Praktis untuk dibawa kemana-mana dengan desain yang elegan.",
    price: 65000,
    category: "Aksesoris",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    materials: ["Benang rayon", "Resleting YKK"],
    dimensions: "12 x 8 x 2 cm",
    weight: "50g",
  },
  {
    id: "4",
    name: "Topi Rajut Songket",
    description:
      "Topi rajut dengan inspirasi motif songket Palembang. Memberikan kesan tradisional namun tetap stylish untuk daily wear.",
    price: 85000,
    category: "Aksesoris",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: true,
    materials: ["Benang katun", "Aksen benang metalik"],
    dimensions: "Lingkar kepala 54-58 cm",
    weight: "80g",
  },
  {
    id: "5",
    name: "Syal Rajut Tenun Ikat",
    description:
      "Syal rajut dengan motif tenun ikat khas Indonesia. Cocok sebagai fashion statement atau hadiah untuk orang terkasih.",
    price: 125000,
    category: "Aksesoris",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
    ],
    featured: true,
    inStock: true,
    materials: ["Benang premium", "Border benang emas"],
    dimensions: "180 x 30 cm",
    weight: "120g",
  },
  {
    id: "6",
    name: "Cardigan Rajut Tradisional",
    description:
      "Cardigan rajut dengan sentuhan tradisional Indonesia. Cocok untuk cuaca dingin dengan style yang tidak lekang waktu.",
    price: 325000,
    category: "Pakaian",
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    ],
    featured: false,
    inStock: false,
    materials: ["Wool import", "Kancing kayu jati"],
    dimensions: "Fit to XL (55cm lebar dada)",
    weight: "450g",
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sari Dewi",
    location: "Jakarta",
    rating: 5,
    comment:
      "Kualitas rajutan sangat bagus! Tas rajut batik yang saya beli awet dan motifnya unik. Pelayanan juga ramah dan pengiriman cepat.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Budi Santoso",
    location: "Surabaya",
    rating: 5,
    comment:
      "Sweater rajutnya hangat dan nyaman banget. Motif nusantaranya bikin bangga pakai produk lokal. Recommended!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-10",
  },
  {
    id: "3",
    name: "Maya Kusuma",
    location: "Bandung",
    rating: 4,
    comment:
      "Dompet rajut etniknya lucu dan praktis. Harga juga terjangkau untuk kualitas sebagus ini. Akan order lagi!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-08",
  },
  {
    id: "4",
    name: "Ahmad Rizki",
    location: "Yogyakarta",
    rating: 5,
    comment:
      "Syal rajut tenun ikatnya keren abis! Cocok banget buat hadiah. Packagingnya juga rapi dan menarik.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-05",
  },
  {
    id: "5",
    name: "Lina Wati",
    location: "Medan",
    rating: 5,
    comment:
      "Pertama kali beli produk rajut online dan hasilnya memuaskan! Kualitas sesuai foto dan deskripsi. Terima kasih Maharajut!",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-02",
  },
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Sejarah dan Perkembangan Rajut di Indonesia",
    excerpt:
      "Mengenal lebih dalam tentang sejarah kerajinan rajut di Indonesia dan bagaimana perkembangannya hingga saat ini.",
    content:
      "Kerajinan rajut di Indonesia memiliki sejarah panjang yang dimulai sejak zaman kolonial...",
    author: "Tim Maharajut",
    publishDate: "2024-01-20",
    category: "Sejarah",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    readTime: 5,
    tags: ["sejarah", "tradisi", "kerajinan"],
  },
  {
    id: "2",
    title: "Tips Merawat Produk Rajut Agar Awet",
    excerpt:
      "Panduan lengkap cara merawat produk rajut agar tetap awet, tidak mudah rusak, dan tahan lama.",
    content:
      "Produk rajut membutuhkan perawatan khusus agar tetap awet dan indah. Berikut tips lengkapnya...",
    author: "Sari Maharani",
    publishDate: "2024-01-18",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&h=400&fit=crop",
    readTime: 3,
    tags: ["perawatan", "tips", "rajut"],
  },
  {
    id: "3",
    title: "Motif Tradisional dalam Karya Rajut Modern",
    excerpt:
      "Bagaimana motif-motif tradisional Indonesia bisa dipadukan dengan desain rajut kontemporer.",
    content:
      "Menggabungkan motif tradisional dengan teknik rajut modern menciptakan karya yang unik...",
    author: "Dewi Artisania",
    publishDate: "2024-01-15",
    category: "Desain",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    readTime: 4,
    tags: ["motif", "tradisional", "modern"],
  },
  {
    id: "4",
    title: "Mengapa Memilih Produk Kerajinan Lokal?",
    excerpt:
      "Pentingnya mendukung produk kerajinan lokal untuk ekonomi kreatif Indonesia.",
    content:
      "Mendukung produk lokal bukan hanya soal kualitas, tetapi juga memberdayakan ekonomi kreatif...",
    author: "Budi Kreatif",
    publishDate: "2024-01-12",
    category: "Ekonomi",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
    readTime: 6,
    tags: ["lokal", "ekonomi", "kreatif"],
  },
];

// Gallery Images Data
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    alt: "Proses pembuatan rajut tradisional",
    category: "Process",
    caption: "Proses pembuatan rajut dengan teknik tradisional",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=600&h=400&fit=crop",
    alt: "Koleksi tas rajut beragam warna",
    category: "Products",
    caption: "Koleksi tas rajut dengan berbagai warna dan motif",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    alt: "Detail motif rajut etnik",
    category: "Details",
    caption: "Detail motif etnik pada produk rajut",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    alt: "Workshop rajut komunitas",
    category: "Community",
    caption: "Workshop rajut bersama komunitas",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=400&fit=crop",
    alt: "Koleksi pakaian rajut",
    category: "Products",
    caption: "Koleksi pakaian rajut untuk berbagai acara",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
    alt: "Aksesoris rajut premium",
    category: "Products",
    caption: "Aksesoris rajut premium dengan kualitas terbaik",
  },
];

// Categories Data
export const categories = [
  { name: "Tas", count: 2, icon: "ShoppingBag" },
  { name: "Pakaian", count: 2, icon: "Shirt" },
  { name: "Aksesoris", count: 3, icon: "Watch" },
];

// Company Info
export const companyInfo = {
  name: "Maharajut",
  tagline: "Kerajinan Rajut Nusantara",
  description:
    "UMKM kerajinan tangan bahan rajutan yang memadukan tradisi Indonesia dengan desain modern",
  address: "Jl. Kerajinan No. 123, Jakarta Selatan 12345",
  phone: "+62 812-3456-7890",
  email: "info@maharajut.id",
  supportEmail: "support@maharajut.my.id",
  instagram: "@maharajut.id",
  facebook: "Maharajut Indonesia",
  whatsapp: "+62 812-3456-7890",
  foundedYear: 2020,
  mission:
    "Melestarikan kerajinan rajut tradisional Indonesia dengan sentuhan modern yang berkualitas tinggi",
  vision: "Menjadi brand kerajinan rajut terdepan yang membanggakan Indonesia",
};
