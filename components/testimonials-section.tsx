"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-amber-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-300 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Testimoni Pelanggan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 mb-4">
            Apa Kata{" "}
            <span className="text-decoration-maharajut">Pelanggan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami.
            Lihat apa kata mereka tentang produk rajut Maharajut
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Large Featured Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-8 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Customer Info */}
              <motion.div
                variants={itemVariants}
                className="text-center lg:text-left"
              >
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24 border-4 border-amber-100">
                    <AvatarImage src={testimonials[currentIndex].avatar} />
                    <AvatarFallback className="bg-amber-100 text-amber-700 text-2xl font-semibold">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {testimonials[currentIndex].location}
                </p>

                <div className="flex justify-center lg:justify-start mb-3">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <p className="text-sm text-gray-500">
                  {formatDate(testimonials[currentIndex].date)}
                </p>
              </motion.div>

              {/* Testimonial Content */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                  &ldquo;{testimonials[currentIndex].comment}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 font-medium">
                      Verified Purchase
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Rating:</span>
                    <div className="flex">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 bg-white border border-amber-200 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-amber-600" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-amber-500"
                      : "bg-amber-200 hover:bg-amber-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 bg-white border border-amber-200 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5 text-amber-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200"
              >
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 border-2 border-amber-100 mr-3">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-amber-100 text-amber-700 font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>

                <blockquote className="text-gray-700 mb-3 line-clamp-3">
                  &ldquo;{testimonial.comment}&rdquo;
                </blockquote>

                <p className="text-xs text-gray-500">
                  {formatDate(testimonial.date)}
                </p>
              </motion.div>
            ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-heading mb-4">
              Bergabunglah dengan Ribuan Pelanggan Puas
            </h3>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Rasakan sendiri kualitas produk rajut terbaik dari Maharajut.
              Dapatkan diskon khusus untuk pembelian pertama Anda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/katalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-colors duration-300"
              >
                Belanja Sekarang
              </motion.a>

              <motion.a
                href="https://wa.me/+6281234567890"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Hubungi Kami
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
