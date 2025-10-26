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
    name: "Amigurumi Daisy Flower",
    description:
      "Boneka rajut amigurumi berbentuk bunga daisy yang lucu dan menggemaskan. Cocok sebagai hiasan atau hadiah untuk anak-anak.",
    price: 35000,
    category: "Aksesoris",
    image: "/images/Amigurumi Daisy Flower Rp 35.000.webp",
    images: ["/images/Amigurumi Daisy Flower Rp 35.000.webp"],
    featured: true,
    inStock: true,
    materials: ["Benang katun", "Dakron polyester"],
    dimensions: "8 x 8 x 10 cm",
    weight: "80g",
  },
  {
    id: "2",
    name: "Amigurumi White Bear",
    description:
      "Boneka rajut amigurumi beruang putih yang lembut dan menggemaskan. Sempurna sebagai teman bermain atau koleksi.",
    price: 45000,
    category: "Aksesoris",
    image: "/images/Amigurumi White Bear Rp. 45.000.webp",
    images: ["/images/Amigurumi White Bear Rp. 45.000.webp"],
    featured: true,
    inStock: true,
    materials: ["Benang wool halus", "Dakron berkualitas"],
    dimensions: "12 x 8 x 15 cm",
    weight: "120g",
  },
  {
    id: "3",
    name: "Daisy Bleky Hats",
    description:
      "Topi rajut dengan motif bunga daisy yang cantik dan stylish. Cocok untuk melindungi dari sinar matahari sekaligus tampil fashionable.",
    price: 80000,
    category: "Aksesoris",
    image: "/images/Daisy Bleky Hats Rp 80,000.webp",
    images: ["/images/Daisy Bleky Hats Rp 80,000.webp"],
    featured: false,
    inStock: true,
    materials: ["Benang katun premium", "Aksen benang warna"],
    dimensions: "Lingkar kepala 54-58 cm",
    weight: "90g",
  },
  {
    id: "4",
    name: "Daisy Crochet Bag",
    description:
      "Tas rajut crochet dengan motif bunga daisy yang elegan. Cocok untuk daily use dengan kapasitas yang cukup untuk barang-barang penting.",
    price: 125000,
    category: "Tas",
    image: "/images/Daisy Crochet bag Rp 125.000.webp",
    images: ["/images/Daisy Crochet bag Rp 125.000.webp"],
    featured: true,
    inStock: true,
    materials: ["Benang katun rajut", "Tali kulit sintetis"],
    dimensions: "25 x 20 x 8 cm",
    weight: "180g",
  },
  {
    id: "5",
    name: "Koko Layer Crochet",
    description:
      "Baju koko rajut crochet dengan desain layer yang unik dan modern. Cocok untuk acara formal maupun kasual dengan kenyamanan maksimal.",
    price: 95000,
    category: "Pakaian",
    image: "/images/Koko Layer Crochet Rp 95.000.webp",
    images: ["/images/Koko Layer Crochet Rp 95.000.webp"],
    featured: true,
    inStock: true,
    materials: ["Benang katun breathable", "Aksen rajut detail"],
    dimensions: "Fit to L (50cm lebar dada)",
    weight: "200g",
  },
  {
    id: "6",
    name: "Amigurumi Bear",
    description:
      "Boneka rajut amigurumi beruang yang sangat menggemaskan dan lembut. Teman bermain yang sempurna untuk anak-anak atau sebagai koleksi pribadi.",
    price: 45000,
    category: "Aksesoris",
    image: "/images/Amigurumi Bear, Harga Rp. 45.000.webp",
    images: ["/images/Amigurumi Bear, Harga Rp. 45.000.webp"],
    featured: false,
    inStock: true,
    materials: ["Benang wool premium", "Dakron berkualitas tinggi"],
    dimensions: "15 x 12 x 18 cm",
    weight: "150g",
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nurul Hikmah",
    location: "Makassar",
    rating: 5,
    comment:
      "Kualitas rajutan sangat bagus! Tas rajut yang saya beli awet dan motifnya unik. Pelayanan juga ramah dan pengiriman cepat.",
    avatar:
      "https://ui-avatars.com/api/?name=Nurul+Hikmah&background=f59e0b&color=fff&size=100",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Jack Matthew",
    location: "Makassar",
    rating: 5,
    comment:
      "Produk amigurumi yang saya pesan sangat menggemaskan! Kualitas rajutan premium dan detail yang sangat rapi. Recommended!",
    avatar:
      "https://ui-avatars.com/api/?name=Jack+Matthew&background=f59e0b&color=fff&size=100",
    date: "2024-01-10",
  },
  {
    id: "3",
    name: "Aldy Rasyidiq",
    location: "Makassar",
    rating: 4,
    comment:
      "Topi rajut daisy yang saya beli sangat stylish dan berkualitas. Harga juga terjangkau untuk kualitas sebagus ini. Akan order lagi!",
    avatar:
      "https://ui-avatars.com/api/?name=Aldy+Rasyidiq&background=f59e0b&color=fff&size=100",
    date: "2024-01-08",
  },
  {
    id: "4",
    name: "Afni Kaulan",
    location: "Makassar",
    rating: 5,
    comment:
      "Koko layer crochet yang saya pesan keren banget! Cocok untuk acara formal dan kasual. Packagingnya juga rapi dan menarik.",
    avatar:
      "https://ui-avatars.com/api/?name=Afni+Kaulan&background=f59e0b&color=fff&size=100",
    date: "2024-01-05",
  },
  {
    id: "5",
    name: "Eva Amalia Anwar",
    location: "Makassar",
    rating: 5,
    comment:
      "Pertama kali beli produk rajut online dan hasilnya memuaskan! Kualitas sesuai foto dan deskripsi. Terima kasih Maharajut!",
    avatar:
      "https://ui-avatars.com/api/?name=Eva+Amalia+Anwar&background=f59e0b&color=fff&size=100",
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
    src: "/images/Gallery Maharajut.webp",
    alt: "Koleksi produk rajut Maharajut",
    category: "Products",
    caption: "Koleksi produk rajut berkualitas dari Maharajut",
  },
  {
    id: "2",
    src: "/images/Gallery Maharajut (2).webp",
    alt: "Produk amigurumi dan aksesoris rajut",
    category: "Products",
    caption: "Berbagai produk amigurumi dan aksesoris rajut handmade",
  },
  {
    id: "3",
    src: "/images/Gallery Maharajut.jpg",
    alt: "Display produk Maharajut",
    category: "Products",
    caption: "Display produk-produk terbaik dari Maharajut",
  },
  {
    id: "4",
    src: "/images/Gallery Maharajut (2).jpg",
    alt: "Showcase kerajinan rajut",
    category: "Products",
    caption: "Showcase berbagai kerajinan rajut berkualitas tinggi",
  },
  {
    id: "5",
    src: "/images/Gallery Maharajut (3).jpg",
    alt: "Koleksi terbaru Maharajut",
    category: "Products",
    caption: "Koleksi terbaru produk rajut inovatif",
  },
  {
    id: "6",
    src: "/images/Gallery Maharajut.jpeg",
    alt: "Produk unggulan Maharajut",
    category: "Products",
    caption: "Produk unggulan dengan kualitas terjamin",
  },
];

// Categories Data
export const categories = [
  { name: "Tas", count: 1, icon: "ShoppingBag" },
  { name: "Pakaian", count: 1, icon: "Shirt" },
  { name: "Aksesoris", count: 4, icon: "Watch" },
];

// Company Info
export const companyInfo = {
  name: "Maharajut",
  tagline: "Kerajinan Rajut Nusantara",
  description:
    "UMKM kerajinan tangan bahan rajutan yang memadukan tradisi Indonesia dengan desain modern",
  address: "Sudiang Raya, Makassar",
  phone: "+62 857-0580-4948",
  email: "maharajut@gmail.com",
  supportEmail: "support@maharajut.my.id",
  instagram: "@maharajut.id",
  facebook: "Maharajut Indonesia",
  whatsapp: "+62 857-0580-4948",
  foundedYear: 2020,
  mission:
    "Melestarikan kerajinan rajut tradisional Indonesia dengan sentuhan modern yang berkualitas tinggi",
  vision: "Menjadi brand kerajinan rajut terdepan yang membanggakan Indonesia",
};
