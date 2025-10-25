"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  ArrowLeft,
  ArrowRight,
  Filter,
  Grid,
  Camera,
} from "lucide-react";
import { galleryImages } from "@/lib/data";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];

  const filteredImages = useMemo(() => {
    return selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1,
      );
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Gallery Foto
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">
            Gallery <span className="text-decoration-maharajut">Maharajut</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat proses pembuatan, detail produk, dan momen-momen berharga
            dalam perjalanan kerajinan rajut Nusantara kami
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200"
              }`}
            >
              {category === "All" ? "Semua" : category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mx-auto"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative break-inside-avoid cursor-pointer block mx-auto"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  {image.caption && (
                    <p className="text-sm font-medium">{image.caption}</p>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada gambar
            </h3>
            <p className="text-gray-600">
              Tidak ada gambar dalam kategori yang dipilih
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300 z-10"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300 z-10"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                    {filteredImages[selectedImage]?.category}
                  </span>
                  <span className="text-sm text-gray-300">
                    {selectedImage + 1} / {filteredImages.length}
                  </span>
                </div>
                {filteredImages[selectedImage]?.caption && (
                  <p className="text-lg font-medium">
                    {filteredImages[selectedImage].caption}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Thumbnails */}
            {filteredImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                {filteredImages
                  .slice(Math.max(0, selectedImage - 2), selectedImage + 3)
                  .map((image, index) => {
                    const actualIndex = Math.max(0, selectedImage - 2) + index;
                    return (
                      <button
                        key={image.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(actualIndex);
                        }}
                        className={`w-12 h-12 rounded overflow-hidden transition-all duration-300 ${
                          actualIndex === selectedImage
                            ? "ring-2 ring-amber-400 scale-110"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="bg-amber-50 mt-16">
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Foto Produk</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                20+
              </div>
              <div className="text-gray-600">Proses Pembuatan</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                10+
              </div>
              <div className="text-gray-600">Detail Kerajinan</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                5+
              </div>
              <div className="text-gray-600">Momen Komunitas</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
