"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Star,
  Heart,
  Share2,
} from "lucide-react";
import { products } from "@/lib/data";
import Link from "next/link";
import { toast } from "sonner";

const CheckoutPage = () => {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);

  // Convert slug to product name and find product
  useEffect(() => {
    if (params.slug) {
      const slug = params.slug as string;
      const productName = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const foundProduct = products.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase(),
      );
      setProduct(foundProduct);
    }
  }, [params.slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Produk tidak ditemukan
          </h1>
          <Link href="/katalog" className="text-amber-600 hover:text-amber-700">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = product.price * quantity;

  const handleConfirmOrder = () => {
    const message = `Halo Maharajut,%0A%0ASaya ingin memesan:%0A%0AProduk: ${product.name}%0AHarga: ${formatPrice(product.price)}%0AJumlah: ${quantity}%0ATotal: ${formatPrice(totalPrice)}%0A%0AMohon informasi lebih lanjut untuk proses pemesanan.%0A%0ATerima kasih!`;

    const whatsappUrl = `https://wa.me/+6281234567890?text=${message}`;
    window.open(whatsappUrl, "_blank");

    // Show success toast
    toast.success("Pesanan dikonfirmasi!", {
      description:
        "Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan.",
      duration: 4000,
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: product.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Produk berhasil dibagikan!", {
          description:
            "Link produk telah dibagikan melalui aplikasi pilihan Anda.",
          duration: 3000,
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link tersalin!", {
          description: "Link produk telah disalin ke clipboard.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.log("Error sharing:", error);
      // Additional fallback
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link tersalin!", {
          description: "Link produk telah disalin ke clipboard.",
          duration: 3000,
        });
      } catch (clipboardError) {
        console.log("Clipboard error:", clipboardError);
        toast.error("Gagal menyalin link", {
          description: "Terjadi kesalahan saat menyalin link produk.",
          duration: 3000,
        });
      }
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      <div className="max-w-7xl mx-auto container-padding section-padding">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Product Information - Left Side */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {/* Product Images */}
              <div className="mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={product.images?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image Thumbnails */}
                {product.images && product.images.length > 1 && (
                  <div className="flex space-x-2">
                    {product.images.map((img: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                          selectedImage === index
                            ? "border-amber-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleLike}
                      className={`p-2 transition-colors duration-300 ${
                        isLiked
                          ? "text-pink-500 hover:text-pink-600"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                      />
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl font-heading text-gray-900">
                  {product.name}
                </h1>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    (4.9 • 127 ulasan)
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Materials */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bahan:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map(
                      (material: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-md"
                        >
                          {material}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Spesifikasi:</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {product.dimensions && (
                      <div>
                        <span className="text-gray-600">Dimensi:</span>
                        <span className="font-medium ml-2">
                          {product.dimensions}
                        </span>
                      </div>
                    )}
                    {product.weight && (
                      <div>
                        <span className="text-gray-600">Berat:</span>
                        <span className="font-medium ml-2">
                          {product.weight}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
                  />
                  <span
                    className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}
                  >
                    {product.inStock ? "Tersedia" : "Stok Habis"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Summary - Right Side */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
              <h2 className="text-2xl font-heading text-gray-900 mb-6">
                Ringkasan Pesanan
              </h2>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {formatPrice(product.price)}
                </div>
                <p className="text-gray-600 text-sm">Harga per item</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Jumlah
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <div className="w-20 text-center">
                    <span className="text-xl font-semibold">{quantity}</span>
                  </div>

                  <button
                    onClick={increaseQuantity}
                    className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal ({quantity} item)
                  </span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ongkos Kirim</span>
                  <span className="font-medium text-green-600">Gratis</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-2xl font-bold text-amber-600">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Confirm Order Button */}
              <motion.button
                onClick={handleConfirmOrder}
                disabled={!product.inStock}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? "Konfirmasi Pesanan" : "Stok Habis"}
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Anda akan diarahkan ke WhatsApp untuk menyelesaikan pesanan
              </p>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Garansi kualitas produk
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Gratis ongkir untuk pembelian minimal 2 item
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Proses pembuatan 3-7 hari kerja
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-heading text-gray-900 mb-8">
            Produk Serupa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(
                (p) => p.category === product.category && p.id !== product.id,
              )
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/produk/${relatedProduct.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-amber-600 font-bold mt-2">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
