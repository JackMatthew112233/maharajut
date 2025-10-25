"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Sparkles, TrendingUp } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const TentangPage = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Pelanggan Puas', color: 'from-blue-500 to-blue-600' },
    { icon: Award, value: '500+', label: 'Produk Terjual', color: 'from-green-500 to-green-600' },
    { icon: Sparkles, value: '50+', label: 'Design Unik', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, value: '3+', label: 'Tahun Berkembang', color: 'from-amber-500 to-amber-600' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Kualitas Premium',
      description: 'Setiap produk dibuat dengan teliti menggunakan bahan berkualitas tinggi dan teknik rajut tradisional terbaik.'
    },
    {
      icon: Award,
      title: 'Tradisi Nusantara',
      description: 'Memadukan motif dan filosofi budaya Indonesia dalam setiap karya untuk melestarikan warisan leluhur.'
    },
    {
      icon: Users,
      title: 'Kepuasan Pelanggan',
      description: 'Mengutamakan kepuasan pelanggan melalui pelayanan terbaik dan produk yang sesuai ekspektasi.'
    },
    {
      icon: Target,
      title: 'Inovasi Berkelanjutan',
      description: 'Terus berinovasi dalam design dan teknik untuk menghadirkan produk rajut yang modern namun otentik.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Memulai Perjalanan',
      description: 'Maharajut didirikan dengan visi melestarikan kerajinan rajut tradisional Indonesia dan membuatnya relevan untuk generasi modern.'
    },
    {
      year: '2021',
      title: 'Pengembangan Produk',
      description: 'Mengembangkan berbagai kategori produk mulai dari tas, pakaian, hingga aksesoris dengan design yang memadukan tradisi dan modernitas.'
    },
    {
      year: '2022',
      title: 'Ekspansi Digital',
      description: 'Meluncurkan platform digital untuk menjangkau lebih banyak pelanggan di seluruh Indonesia dan memudahkan proses pemesanan.'
    },
    {
      year: '2023',
      title: 'Komunitas Berkembang',
      description: 'Membangun komunitas pengrajin dan pelanggan yang solid, serta menjalin kerjasama dengan berbagai pihak untuk pengembangan bisnis.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Tentang Maharajut
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gray-900 mb-6">
              Cerita <span className="text-decoration-maharajut">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Maharajut lahir dari kecintaan terhadap kerajinan tradisional Indonesia dan semangat
              untuk menghadirkan produk rajut berkualitas tinggi yang memadukan warisan budaya
              dengan desain kontemporer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading text-gray-900 mb-6">
                Perjalanan Melestarikan Tradisi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Berawal dari kecintaan terhadap kerajinan tangan Nusantara, Maharajut hadir
                  sebagai jembatan antara tradisi dan modernitas. Kami percaya bahwa setiap
                  helai benang yang dirajut dengan penuh cinta dapat menceritakan kisah
                  indah tentang budaya Indonesia.
                </p>
                <p>
                  Dengan didukung oleh pengrajin-pengrajin berpengalaman dan bertalenta,
                  kami menciptakan produk-produk unik yang tidak hanya indah dipandang,
                  tetapi juga nyaman digunakan dan tahan lama. Setiap produk Maharajut
                  adalah hasil dari perpaduan sempurna antara keterampilan tradisional
                  dan inovasi modern.
                </p>
                <p>
                  Kami berkomitmen untuk terus mengembangkan dan melestarikan seni rajut
                  Indonesia, sambil memberikan nilai tambah kepada para pengrajin lokal
                  dan kepuasan maksimal kepada setiap pelanggan.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop"
                  alt="Proses pembuatan rajut tradisional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-amber-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">Since</div>
                  <div className="text-3xl font-bold text-gray-900">{companyInfo.foundedYear}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-amber-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-4">
              Visi & <span className="text-decoration-maharajut">Misi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komitmen kami dalam melestarikan budaya dan memberikan yang terbaik
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.vision}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-4">
              Nilai-Nilai <span className="text-decoration-maharajut">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah perjalanan Maharajut
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-4">
              Perjalanan <span className="text-decoration-maharajut">Maharajut</span>
            </h2>
            <p className="text-lg text-gray-600">
              Melihat kembali pencapaian dan milestone penting dalam perjalanan kami
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
              Mari Bergabung dengan Keluarga Maharajut
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Jadilah bagian dari perjalanan kami dalam melestarikan kerajinan rajut tradisional
              Indonesia dan rasakan pengalaman berbelanja yang tak terlupakan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/katalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-colors duration-300"
              >
                Jelajahi Produk Kami
              </motion.a>

              <motion.a
                href="/kontak"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Hubungi Kami
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TentangPage;
