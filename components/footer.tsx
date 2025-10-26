"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "@/lib/data";
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const footerLinks = {
    company: [
      { href: "/tentang", label: "Tentang Kami" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blog", label: "Blog" },
      { href: "/kontak", label: "Kontak" },
    ],
    products: [
      { href: "/katalog?category=Tas", label: "Tas Rajut" },
      { href: "/katalog?category=Pakaian", label: "Pakaian Rajut" },
      { href: "/katalog?category=Aksesoris", label: "Aksesoris" },
      { href: "/katalog", label: "Semua Produk" },
    ],
    support: [
      { href: "/cara-pemesanan", label: "Cara Pemesanan" },
      { href: "/panduan-perawatan", label: "Panduan Perawatan" },
      { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
      { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
    ],
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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email diperlukan!", {
        description: "Mohon masukkan alamat email Anda.",
        duration: 3000,
      });
      return;
    }

    if (!email.includes("@")) {
      toast.error("Format email tidak valid!", {
        description: "Mohon masukkan alamat email yang benar.",
        duration: 3000,
      });
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      toast.success("Berlangganan berhasil!", {
        description: `Terima kasih! Kami akan mengirim update terbaru ke ${email}`,
        duration: 4000,
      });
    }, 1500);
  };

  return (
    <footer className="bg-gradient-to-br from-amber-50 via-white to-amber-50 border-t border-amber-100">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Newsletter Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Dapatkan Update Terbaru
            </h4>
            <p className="text-gray-600 mb-6">
              Berlangganan newsletter kami untuk mendapatkan info produk terbaru
              dan promo menarik
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                type="submit"
                disabled={isSubscribing}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: isSubscribing ? 1 : 1.05 }}
                whileTap={{ scale: isSubscribing ? 1 : 0.95 }}
              >
                {isSubscribing ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Berlangganan"
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/images/Logo Maharajut.jpg"
                  alt="Maharajut Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800">
                  {companyInfo.name}
                </h3>
                <p className="text-sm text-amber-600">{companyInfo.tagline}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <motion.a
                href={`https://instagram.com/${companyInfo.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`https://facebook.com/${companyInfo.facebook.replace("Maharajut ", "").toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center md:text-left">
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center md:text-left">
              Produk
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center md:text-left">
              Kontak
            </h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  {companyInfo.address}
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300 text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300 text-sm"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  Senin - Sabtu: 08:00 - 17:00
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              className="mt-6 flex justify-center md:justify-start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
