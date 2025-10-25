"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  ChevronDown,
  ChevronUp,
  Menu,
  Mail,
  RotateCcw,
} from "lucide-react";
import { companyInfo } from "@/lib/data";
import { toast } from "sonner";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FloatingFAQChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Halo! Selamat datang di Maharajut 👋\n\nSaya di sini untuk membantu menjawab pertanyaan Anda seputar produk rajut kami. Silakan pilih pertanyaan di bawah ini:",
      timestamp: new Date(),
    },
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [showFAQMenu, setShowFAQMenu] = useState(true);
  const [customQuestion, setCustomQuestion] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "Bagaimana cara memesan produk?",
      answer:
        'Sangat mudah! Anda bisa:\n\n1. Pilih produk di halaman Katalog\n2. Klik tombol "Pesan"\n3. Atur jumlah yang diinginkan\n4. Klik "Konfirmasi Pesanan"\n5. Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan\n\nTim kami akan membantu Anda menyelesaikan proses pemesanan! 📱',
      category: "Pemesanan",
    },
    {
      id: "2",
      question: "Berapa lama waktu pembuatan produk?",
      answer:
        "Waktu pembuatan bervariasi tergantung jenis produk:\n\n• Aksesoris kecil: 2-3 hari kerja\n• Tas rajut: 3-5 hari kerja\n• Pakaian rajut: 5-7 hari kerja\n• Pesanan custom: 7-10 hari kerja\n\nWaktu ini belum termasuk pengiriman ya! ⏰",
      category: "Produksi",
    },
    {
      id: "3",
      question: "Apakah bisa pesan custom design?",
      answer:
        "Tentu bisa! 🎨\n\nKami menerima pesanan custom dengan:\n• Design sesuai keinginan Anda\n• Pilihan warna yang beragam\n• Ukuran yang disesuaikan\n• Motif khusus\n\nHubungi kami melalui WhatsApp untuk konsultasi design custom Anda!",
      category: "Custom",
    },
    {
      id: "4",
      question: "Bagaimana cara merawat produk rajut?",
      answer:
        "Tips merawat produk rajut agar awet:\n\n🧼 Pencucian:\n• Gunakan air dingin (max 30°C)\n• Deterjen khusus pakaian halus\n• Jangan diperas kuat\n\n🌤️ Pengeringan:\n• Jemur di tempat teduh\n• Hindari sinar matahari langsung\n• Letakkan dalam posisi datar\n\n📦 Penyimpanan:\n• Lipat rapi, jangan digantung\n• Simpan di tempat kering",
      category: "Perawatan",
    },
    {
      id: "5",
      question: "Apakah ada garansi produk?",
      answer:
        "Ya! Kami memberikan jaminan:\n\n✅ Garansi kualitas produk\n✅ Penggantian jika ada cacat produksi\n✅ Konsultasi perawatan gratis\n✅ After-sales service\n\nJika ada kendala dengan produk Anda, langsung hubungi kami ya! 🛡️",
      category: "Garansi",
    },
    {
      id: "6",
      question: "Berapa ongkos kirim ke seluruh Indonesia?",
      answer:
        "Ongkos kirim kami sangat terjangkau:\n\n📦 Dalam kota: Gratis (min. pembelian 2 item)\n📦 Luar kota: Mulai dari Rp 15.000\n📦 Luar pulau: Mulai dari Rp 25.000\n\nKami menggunakan ekspedisi terpercaya seperti JNE, J&T, dan SiCepat. Produk dikemas dengan aman! 🚚",
      category: "Pengiriman",
    },
    {
      id: "7",
      question: "Apakah bahan yang digunakan aman?",
      answer:
        "Sangat aman! 🌿\n\nKami menggunakan:\n• Benang katun berkualitas tinggi\n• Benang wool import yang soft\n• Pewarna ramah lingkungan\n• Bahan hypoallergenic\n• Aman untuk kulit sensitif\n\nSemua bahan telah melewati quality control yang ketat!",
      category: "Bahan",
    },
    {
      id: "8",
      question: "Apakah ada diskon untuk pembelian grosir?",
      answer:
        "Tentu ada! 🎉\n\nDiskon grosir:\n• 5-10 pcs: Diskon 10%\n• 11-20 pcs: Diskon 15%\n• 21+ pcs: Diskon 20%\n\nPlus benefit tambahan:\n✨ Gratis ongkir\n✨ Prioritas produksi\n✨ Konsultasi design gratis\n\nHubungi kami untuk penawaran khusus!",
      category: "Harga",
    },
    {
      id: "9",
      question: "Produk apa saja yang tersedia?",
      answer:
        "Kami memiliki berbagai produk rajut berkualitas:\n\n👜 TAS RAJUT:\n• Tas tote dengan motif batik\n• Tas selempang casual\n• Clutch untuk acara formal\n\n👕 PAKAIAN:\n• Sweater hangat\n• Cardigan stylish\n• Vest rajut\n\n🎒 AKSESORIS:\n• Syal dan pashmina\n• Topi rajut\n• Dompet kecil\n• Sarung tangan\n\nSemuanya dibuat dengan tangan oleh pengrajin berpengalaman!",
      category: "Produk",
    },
    {
      id: "10",
      question: "Apakah produk tahan lama?",
      answer:
        "Sangat tahan lama! 💪\n\nKualitas premium kami:\n• Benang pilihan grade A\n• Teknik rajut yang kuat\n• Finishing rapi dan presisi\n• Jahitan reinforcement di titik stress\n\nDengan perawatan yang tepat, produk kami bisa bertahan bertahun-tahun. Banyak pelanggan yang masih memakai produk dari 3 tahun lalu!",
      category: "Kualitas",
    },
    {
      id: "11",
      question: "Bisa COD (Cash On Delivery)?",
      answer:
        "Maaf, saat ini kami belum melayani COD. 📋\n\nMetode pembayaran yang tersedia:\n• Transfer bank (BCA, Mandiri, BRI)\n• E-wallet (OVO, DANA, GoPay)\n• QRIS\n• Virtual Account\n\nTapi tenang! Kami terpercaya dengan ratusan testimoni positif. Produk baru dikirim setelah pembayaran dikonfirmasi.",
      category: "Pembayaran",
    },
    {
      id: "12",
      question: "Ukuran produk bisa disesuaikan?",
      answer:
        "Bisa banget! 📏\n\nFleksibilitas ukuran:\n• Pakaian: XS sampai XXL\n• Tas: Bisa request ukuran khusus\n• Aksesoris: Adjustable\n• Custom size: +20% dari harga normal\n\nKami akan buatkan sesuai measurement Anda. Kirim ukuran detail via WhatsApp ya!",
      category: "Ukuran",
    },
  ];

  const handleQuestionClick = (faq: FAQItem) => {
    // Add user question
    const userMessage: Message = {
      id: Date.now().toString() + "_user",
      type: "user",
      text: faq.question,
      timestamp: new Date(),
    };

    // Add bot answer
    const botMessage: Message = {
      id: Date.now().toString() + "_bot",
      type: "bot",
      text: faq.answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setShowQuestions(false);
  };

  const handleBackToMenu = () => {
    setShowQuestions(true);
  };

  const handleContactWhatsApp = () => {
    const message = `Halo Maharajut! Saya ingin bertanya lebih lanjut tentang produk rajut Anda.`;
    const whatsappUrl = `https://wa.me/+6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCustomQuestion = () => {
    if (customQuestion.trim()) {
      // Add user question
      const userMessage: Message = {
        id: Date.now().toString() + "_user",
        type: "user",
        text: customQuestion,
        timestamp: new Date(),
      };

      // Add bot response for custom questions
      const botMessage: Message = {
        id: Date.now().toString() + "_bot",
        type: "bot",
        text: `Terima kasih atas pertanyaan Anda! 😊\n\nUntuk pertanyaan khusus yang tidak tercakup dalam FAQ, silakan hubungi tim support kami langsung:\n\n📧 Email: ${companyInfo.supportEmail}\n📱 WhatsApp: ${companyInfo.whatsapp}\n\nTim kami akan memberikan jawaban yang detail sesuai kebutuhan Anda dalam 1x24 jam.\n\nAda yang bisa saya bantu lainnya?`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);
      setCustomQuestion("");
      setShowQuestions(false);

      // Show success toast
      toast.success("Pertanyaan terkirim!", {
        description:
          "Tim support kami akan membalas melalui email dalam 1x24 jam.",
        duration: 4000,
      });
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleFAQMenu = () => {
    setShowFAQMenu(!showFAQMenu);
  };

  const resetChatHistory = () => {
    setMessages([
      {
        id: "1",
        type: "bot",
        text: "Halo! Selamat datang di Maharajut 👋\n\nSaya di sini untuk membantu menjawab pertanyaan Anda seputar produk rajut kami. Silakan pilih pertanyaan di bawah ini:",
        timestamp: new Date(),
      },
    ]);
    setShowQuestions(true);
    setShowAllQuestions(false);
    setShowFAQMenu(true);
    setCustomQuestion("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(true);
          setShowFAQMenu(true);
        }}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? "scale-0" : "scale-100"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: isOpen ? 0 : 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
      >
        <MessageCircle className="w-6 h-6" />

        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">!</span>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-20"></div>
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[32rem] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">FAQ Assistant</h3>
                      <p className="text-sm opacity-90">Maharajut Support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={resetChatHistory}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                      title="Reset Chat"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                      title="Close Chat"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                        message.type === "user"
                          ? "bg-amber-500 text-white rounded-br-md"
                          : "bg-white text-gray-800 rounded-bl-md shadow-sm border"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === "bot" && (
                          <Bot className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-line leading-relaxed">
                            {message.text}
                          </p>
                          <p
                            className={`text-xs mt-1 ${
                              message.type === "user"
                                ? "text-amber-100"
                                : "text-gray-500"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* Scroll target */}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions or Actions */}
              <div className="border-t border-gray-200 bg-white">
                <AnimatePresence mode="wait">
                  {showQuestions ? (
                    <motion.div
                      key="questions"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="p-4"
                    >
                      {/* FAQ Menu Toggle */}
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-gray-600 font-medium">
                          FAQ - Pertanyaan Umum
                        </p>
                        <button
                          onClick={toggleFAQMenu}
                          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                        >
                          {showFAQMenu ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          )}
                        </button>
                      </div>

                      {/* FAQ Questions - Collapsible */}
                      <AnimatePresence>
                        {showFAQMenu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 max-h-48 overflow-y-auto pr-2 mb-4"
                          >
                            {(showAllQuestions
                              ? faqData
                              : faqData.slice(0, 6)
                            ).map((faq) => (
                              <motion.button
                                key={faq.id}
                                onClick={() => handleQuestionClick(faq)}
                                className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-all duration-200 border hover:border-amber-200 hover:shadow-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start">
                                  <span className="text-amber-500 mr-2">•</span>
                                  <span className="flex-1">{faq.question}</span>
                                </div>
                              </motion.button>
                            ))}

                            {faqData.length > 6 && !showAllQuestions && (
                              <motion.button
                                onClick={() => setShowAllQuestions(true)}
                                className="w-full mt-3 p-2 text-sm text-amber-600 hover:bg-amber-50 rounded-lg transition-colors duration-200 flex items-center justify-center font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ChevronDown className="w-4 h-4 mr-1" />
                                Lihat {faqData.length - 6} Pertanyaan Lainnya
                              </motion.button>
                            )}
                            {showAllQuestions && (
                              <motion.button
                                onClick={() => setShowAllQuestions(false)}
                                className="w-full mt-3 p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center justify-center font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Sembunyikan Pertanyaan
                              </motion.button>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Custom Question Input */}
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-600 mb-3 font-medium">
                          Atau tulis pertanyaan Anda:
                        </p>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={customQuestion}
                            onChange={(e) => setCustomQuestion(e.target.value)}
                            placeholder="Ketik pertanyaan di sini..."
                            className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                handleCustomQuestion();
                              }
                            }}
                          />
                          <button
                            onClick={handleCustomQuestion}
                            disabled={!customQuestion.trim()}
                            className="p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="actions"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="p-4 space-y-2"
                    >
                      <button
                        onClick={() => {
                          handleBackToMenu();
                          setShowAllQuestions(false);
                          setShowFAQMenu(true);
                        }}
                        className="w-full p-3 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                      >
                        ↩️ Kembali ke Menu Utama
                      </button>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleContactWhatsApp}
                          className="flex-1 p-3 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </button>
                        <button
                          onClick={() =>
                            window.open(
                              `mailto:${companyInfo.supportEmail}`,
                              "_blank",
                            )
                          }
                          className="flex-1 p-3 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFAQChat;
