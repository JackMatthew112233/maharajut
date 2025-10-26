"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Phone, Instagram, Facebook } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/katalog", label: "Katalog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                  <Image
                    src="/images/Logo Maharajut.jpg"
                    alt="Maharajut Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg lg:text-xl text-amber-800 transition-colors duration-300">
                    Maharajut
                  </span>
                  <span className="text-xs text-amber-600 transition-colors duration-300 -mt-1">
                    Kerajinan Nusantara
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors duration-300",
                      pathname === item.href
                        ? "text-amber-800"
                        : "text-gray-700 hover:text-amber-700",
                    )}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                        layoutId="navbar-indicator"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 shadow-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Pesan Sekarang</span>
                </Link>
              </motion.div>

              <div className="flex items-center space-x-2">
                <motion.a
                  href="https://instagram.com/maharajut.id"
                  target="_blank"
                  className="p-2 rounded-full text-gray-600 hover:text-amber-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://facebook.com/maharajut"
                  target="_blank"
                  className="p-2 rounded-full text-gray-600 hover:text-amber-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-700 transition-colors duration-300"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 w-full bg-white shadow-2xl z-50 lg:hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="p-6 space-y-6 text-center">
                {/* Mobile Navigation */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-300 text-center",
                          pathname === item.href
                            ? "bg-amber-50 text-amber-800"
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-700",
                        )}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    className="flex items-center justify-center space-x-2 w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 mx-auto max-w-xs"
                    onClick={toggleMenu}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Pesan Sekarang</span>
                  </Link>
                </motion.div>

                {/* Mobile Social */}
                <motion.div
                  className="flex justify-center space-x-6 pt-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="https://instagram.com/maharajut.id"
                    target="_blank"
                    className="p-3 text-gray-600 hover:text-amber-600 transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/maharajut"
                    target="_blank"
                    className="p-3 text-gray-600 hover:text-amber-600 transition-colors duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
