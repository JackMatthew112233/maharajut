"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowRight, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/data";

const FeaturedProducts = () => {
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6);

  const toggleLike = (productId: string) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Produk Unggulan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 mb-4">
            Koleksi <span className="text-decoration-maharajut">Terpilih</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan produk rajut terbaik kami yang telah dipercaya oleh ribuan
            pelanggan di seluruh Indonesia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group card-maharajut overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-product overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                      onClick={() =>
                        (window.location.href = `/produk/${product.name.toLowerCase().replace(/\s+/g, "-")}`)
                      }
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-white rounded-full shadow-lg transition-colors duration-300 ${
                        likedProducts.has(product.id)
                          ? "text-pink-500 hover:text-pink-600"
                          : "text-gray-700 hover:bg-red-50 hover:text-red-500"
                      }`}
                      onClick={() => toggleLike(product.id)}
                    >
                      <Heart
                        className={`w-5 h-5 ${likedProducts.has(product.id) ? "fill-current" : ""}`}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Stock status */}
                <div className="absolute top-3 right-3">
                  {product.inStock ? (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      Tersedia
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                      Habis
                    </span>
                  )}
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-amber-600 font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Materials */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.materials.slice(0, 2).map((material, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-md"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-amber-600">
                    {formatPrice(product.price)}
                  </div>

                  <Link
                    href={`/produk/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group/btn inline-flex items-center px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300"
                  >
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Pesan
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to view all products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/katalog"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Lihat Semua Produk
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-amber-300 rounded-full opacity-30 blur-lg" />
      </div>
    </section>
  );
};

export default FeaturedProducts;
