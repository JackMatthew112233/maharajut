"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  ShoppingBag,
  ArrowRight,
  Eye,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { products, categories } from "@/lib/data";

const KatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const allCategories = ["Semua", ...categories.map((cat) => cat.name)];
  const sortOptions = [
    { value: "name", label: "Nama A-Z" },
    { value: "price-low", label: "Harga Terendah" },
    { value: "price-high", label: "Harga Tertinggi" },
    { value: "newest", label: "Terbaru" },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Semua" || product.category === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return parseInt(b.id) - parseInt(a.id);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">
            Katalog <span className="text-decoration-maharajut">Produk</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi koleksi lengkap produk rajut berkualitas tinggi dengan
            desain tradisional dan modern
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* View Mode */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === "grid"
                    ? "bg-white text-amber-600 shadow-sm"
                    : "text-gray-600 hover:text-amber-600"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === "list"
                    ? "bg-white text-amber-600 shadow-sm"
                    : "text-gray-600 hover:text-amber-600"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Advanced Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Range Harga: {formatPrice(priceRange[0])} -{" "}
                      {formatPrice(priceRange[1])}
                    </label>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="25000"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            parseInt(e.target.value),
                            priceRange[1],
                          ])
                        }
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="25000"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value),
                          ])
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          <p className="text-gray-600">
            Menampilkan{" "}
            <span className="font-medium">{filteredProducts.length}</span>{" "}
            produk
            {selectedCategory !== "Semua" && (
              <span>
                {" "}
                dalam kategori{" "}
                <span className="font-medium">{selectedCategory}</span>
              </span>
            )}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                className={
                  viewMode === "grid"
                    ? "group card-maharajut overflow-hidden"
                    : "group bg-white border border-amber-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                }
              >
                {viewMode === "grid" ? (
                  // Grid View
                  <>
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
                          <span className="text-sm text-gray-600 ml-1">
                            4.9
                          </span>
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
                          {product.materials
                            .slice(0, 2)
                            .map((material, index) => (
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
                  </>
                ) : (
                  // List View
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

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

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-sm text-amber-600 font-medium">
                            {product.category}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                            {product.name}
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            4.9
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>

                      {/* Materials */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.materials.map((material, index) => (
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
                        <div className="text-2xl font-bold text-amber-600">
                          {formatPrice(product.price)}
                        </div>

                        <div className="flex items-center space-x-3">
                          <button
                            className={`p-2 transition-colors duration-300 ${
                              likedProducts.has(product.id)
                                ? "text-pink-500 hover:text-pink-600"
                                : "text-gray-600 hover:text-red-500"
                            }`}
                            onClick={() => toggleLike(product.id)}
                          >
                            <Heart
                              className={`w-5 h-5 ${likedProducts.has(product.id) ? "fill-current" : ""}`}
                            />
                          </button>
                          <Link
                            href={`/produk/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="group/btn inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300"
                          >
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            Pesan Sekarang
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Produk tidak ditemukan
            </h3>
            <p className="text-gray-600 mb-6">
              Coba ubah kata kunci pencarian atau filter yang digunakan
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Semua");
                setPriceRange([0, 1000000]);
              }}
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300"
            >
              Reset Filter
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default KatalogPage;
