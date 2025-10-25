"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, BookOpen } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import Link from 'next/link';

const ArticlePage = () => {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    if (params.slug) {
      const slug = params.slug as string;
      const foundArticle = blogPosts.find(post =>
        post.title.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-') === slug.toLowerCase()
      );

      if (foundArticle) {
        setArticle(foundArticle);

        // Get related articles from same category
        const related = blogPosts
          .filter(post => post.category === foundArticle.category && post.id !== foundArticle.id)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [params.slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
          <Link href="/blog" className="text-amber-600 hover:text-amber-700">
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link artikel telah disalin!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      <article className="max-w-4xl mx-auto container-padding section-padding">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali
          </button>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleShare}
                className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-300"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors duration-300">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(article.publishDate)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime} menit baca</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Featured Image */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {/* Expanded content based on the excerpt */}
              {article.id === "1" && (
                <>
                  <p>
                    Kerajinan rajut di Indonesia memiliki sejarah panjang yang dimulai sejak zaman kolonial Belanda.
                    Pada masa itu, teknik rajut diperkenalkan sebagai bagian dari pendidikan perempuan di sekolah-sekolah
                    misi dan rumah tangga kolonial.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Awal Mula Rajut di Nusantara</h2>
                  <p>
                    Meskipun teknik rajut modern datang dari Eropa, masyarakat Nusantara sebenarnya sudah lama mengenal
                    berbagai teknik anyaman dan pembuatan kain tradisional. Teknik tenun ikat, songket, dan berbagai
                    kerajinan tekstil lainnya telah menjadi bagian integral dari budaya Indonesia selama berabad-abad.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Perkembangan Modern</h2>
                  <p>
                    Seiring berjalannya waktu, kerajinan rajut di Indonesia mengalami perkembangan yang signifikan.
                    Para pengrajin lokal mulai mengadaptasi motif-motif tradisional Indonesia ke dalam teknik rajut modern,
                    menciptakan produk-produk unik yang memadukan tradisi dan modernitas.
                  </p>

                  <p>
                    Hari ini, industri rajut Indonesia tidak hanya melayani pasar domestik, tetapi juga mulai merambah
                    pasar internasional dengan produk-produk berkualitas tinggi yang menampilkan keunikan budaya lokal.
                  </p>
                </>
              )}

              {article.id === "2" && (
                <>
                  <p>
                    Produk rajut membutuhkan perawatan khusus agar tetap awet dan indah. Berbeda dengan pakaian biasa,
                    rajutan memiliki karakteristik serat yang lebih sensitif dan memerlukan penanganan yang hati-hati.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Tips Pencucian</h2>
                  <ul className="space-y-2">
                    <li>• Gunakan air dingin atau suam-suam kuku (maksimal 30°C)</li>
                    <li>• Pilih deterjen khusus untuk pakaian halus atau baby shampoo</li>
                    <li>• Jangan diperas atau digosok terlalu kuat</li>
                    <li>• Rendam maksimal 15 menit</li>
                  </ul>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Cara Pengeringan</h2>
                  <p>
                    Hindari menjemur langsung di bawah sinar matahari. Sebaiknya keringkan di tempat teduh dengan
                    ventilasi yang baik. Letakkan produk rajut dalam posisi datar di atas handuk bersih untuk
                    mencegah perubahan bentuk.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Penyimpanan yang Benar</h2>
                  <p>
                    Simpan produk rajut dengan cara dilipat rapi, bukan digantung, untuk mencegah peregangan.
                    Gunakan kantong kain atau kertas untuk penyimpanan jangka panjang dan pastikan tempat
                    penyimpanan kering dan bersih.
                  </p>
                </>
              )}

              {article.id === "3" && (
                <>
                  <p>
                    Menggabungkan motif tradisional dengan teknik rajut modern menciptakan karya yang unik dan
                    bermakna. Proses ini memerlukan pemahaman mendalam tentang filosofi budaya Indonesia serta
                    keterampilan teknis dalam merajut.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Motif-Motif Populer</h2>
                  <p>
                    Beberapa motif tradisional yang sering diadaptasi dalam rajut modern antara lain:
                  </p>
                  <ul className="space-y-2">
                    <li>• <strong>Motif Batik:</strong> Parang, kawung, dan mega mendung</li>
                    <li>• <strong>Motif Songket:</strong> Pucuk rebung dan limar</li>
                    <li>• <strong>Motif Tenun Ikat:</strong> Geometric patterns dari berbagai daerah</li>
                    <li>• <strong>Motif Ukiran:</strong> Toraja, Batak, dan Dayak</li>
                  </ul>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Teknik Adaptasi</h2>
                  <p>
                    Mengadaptasi motif tradisional ke dalam rajutan memerlukan kreativitas dalam menerjemahkan
                    pola-pola kompleks menjadi stitches yang dapat dieksekusi. Pengrajin harus mempertimbangkan
                    aspek teknis seperti ketebalan benang, jenis rajutan, dan proporsi motif.
                  </p>

                  <p>
                    Hasil akhirnya adalah produk rajut yang tidak hanya indah secara visual, tetapi juga
                    sarat dengan nilai budaya dan makna filosofis yang mendalam.
                  </p>
                </>
              )}

              {article.id === "4" && (
                <>
                  <p>
                    Mendukung produk lokal bukan hanya soal kualitas, tetapi juga tentang memberdayakan ekonomi
                    kreatif Indonesia dan melestarikan warisan budaya bangsa. Setiap pembelian produk kerajinan
                    lokal adalah kontribusi nyata untuk kemajuan UMKM Indonesia.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Dampak Ekonomi</h2>
                  <p>
                    Industri kerajinan tangan menyerap jutaan tenaga kerja di Indonesia, terutama di daerah
                    pedesaan. Dengan mendukung produk lokal, kita turut menciptakan lapangan kerja dan
                    meningkatkan kesejahteraan masyarakat.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Kualitas yang Tidak Kalah</h2>
                  <p>
                    Produk kerajinan Indonesia telah terbukti memiliki kualitas yang tidak kalah dengan
                    produk impor. Bahkan, keunikan desain dan sentuhan handmade memberikan nilai tambah
                    yang tidak bisa didapatkan dari produk massal.
                  </p>

                  <h2 className="text-2xl font-heading text-gray-900 mt-8 mb-4">Pelestarian Budaya</h2>
                  <p>
                    Setiap produk kerajinan lokal membawa cerita dan tradisi yang telah diwariskan turun-temurun.
                    Dengan memilih produk lokal, kita turut melestarikan kekayaan budaya Indonesia untuk
                    generasi mendatang.
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-gray-900">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full hover:bg-amber-100 transition-colors duration-300 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{article.author}</h3>
              <p className="text-gray-600">Content Writer di Maharajut</p>
              <p className="text-sm text-gray-500 mt-1">
                Passionate tentang kerajinan tradisional Indonesia dan sustainable lifestyle
              </p>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-amber-50 py-16">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading text-gray-900 mb-4">
                Artikel <span className="text-decoration-maharajut">Terkait</span>
              </h2>
              <p className="text-lg text-gray-600">
                Baca juga artikel menarik lainnya seputar kerajinan rajut
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(relatedArticle.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedArticle.readTime} min
                      </div>
                    </div>

                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                      {relatedArticle.category}
                    </span>

                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-amber-700 transition-colors duration-300 line-clamp-2">
                      {relatedArticle.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>

                    <Link
                      href={`/blog/${generateSlug(relatedArticle.title)}`}
                      className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300"
                    >
                      Baca Selengkapnya
                      <BookOpen className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Tertarik dengan Produk Rajut Kami?
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Jelajahi koleksi lengkap produk rajut berkualitas tinggi dari Maharajut
              dan rasakan keindahan kerajinan tradisional Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/katalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-colors duration-300"
              >
                Lihat Katalog Produk
              </motion.a>

              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Baca Artikel Lainnya
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
