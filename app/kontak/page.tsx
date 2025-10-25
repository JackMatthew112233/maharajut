"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { companyInfo } from "@/lib/data";
import { toast } from "sonner";

const KontakPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim()) {
      toast.error("Nama diperlukan!", {
        description: "Mohon masukkan nama lengkap Anda.",
        duration: 3000,
      });
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email diperlukan!", {
        description: "Mohon masukkan alamat email Anda.",
        duration: 3000,
      });
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Format email tidak valid!", {
        description: "Mohon masukkan alamat email yang benar.",
        duration: 3000,
      });
      return;
    }

    if (!formData.subject) {
      toast.error("Subjek diperlukan!", {
        description: "Mohon pilih subjek pertanyaan Anda.",
        duration: 3000,
      });
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Pesan diperlukan!", {
        description: "Mohon tulis pesan Anda.",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      toast.success("Pesan berhasil terkirim!", {
        description:
          "Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam.",
        duration: 4000,
      });
    }, 2000);
  };

  const whatsappMessage = `Halo Maharajut,%0A%0ASaya tertarik untuk mengetahui lebih lanjut tentang produk rajut Anda.%0A%0ATerima kasih!`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi Kami
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-4">
            Mari <span className="text-decoration-maharajut">Terhubung</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda dengan pertanyaan, pesanan khusus, atau
            kolaborasi. Jangan ragu untuk menghubungi tim Maharajut!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-heading text-gray-900 mb-6"
            >
              Kirim Pesan
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="nama@email.com"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-4"
              >
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="inquiry">Pertanyaan Umum</option>
                    <option value="order">Pemesanan Produk</option>
                    <option value="custom">Pesanan Khusus</option>
                    <option value="wholesale">Pembelian Grosir</option>
                    <option value="collaboration">Kolaborasi</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </motion.div>
            </form>

            {/* Alternative Contact */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 text-center mb-4">
                Atau hubungi kami langsung melalui:
              </p>
              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Business Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-heading text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telepon
                    </h4>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Jam Operasional
                    </h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Senin - Jumat: 08:00 - 17:00</p>
                      <p>Sabtu: 08:00 - 15:00</p>
                      <p>Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-heading text-gray-900 mb-6">
                Ikuti Kami
              </h3>

              <div className="space-y-4">
                <a
                  href={`https://instagram.com/${companyInfo.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 mr-3" />
                  <div className="flex-1">
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm opacity-90">
                      {companyInfo.instagram}
                    </div>
                  </div>
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </a>

                <a
                  href={`https://facebook.com/${companyInfo.facebook.replace("Maharajut ", "").toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <Facebook className="w-6 h-6 mr-3" />
                  <div className="flex-1">
                    <div className="font-semibold">Facebook</div>
                    <div className="text-sm opacity-90">
                      {companyInfo.facebook}
                    </div>
                  </div>
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </a>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="text-xl font-heading text-gray-900 mb-6">
                Pertanyaan Umum
              </h3>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Berapa lama waktu pembuatan produk?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Waktu pembuatan bervariasi, umumnya 3-7 hari kerja
                    tergantung kompleksitas produk.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Apakah bisa pesan custom design?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ya, kami menerima pesanan custom dengan design sesuai
                    keinginan Anda.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Bagaimana cara perawatan produk rajut?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cuci dengan air dingin, jangan diperas kuat, dan jemur di
                    tempat teduh.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KontakPage;
