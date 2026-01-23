"use client";

import { useState } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Mohon isi semua field!" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Email tidak valid!" });
      return;
    }

    // Simulate sending
    setTimeout(() => {
      setStatus({ type: "success", message: "Pesan berhasil dikirim! Terima kasih." });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section bg-white rounded-3xl dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-400/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title gradient-text animate-gradient-shift">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 animate-slide-up">Hubungi Saya</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card p-8 animate-slide-in-left hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <FaPaperPlane className="text-2xl text-primary" />
              <h3 className="text-xl font-semibold">Kirim Pesan</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium mb-2">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-[1.02] transition-all duration-300 outline-none hover:border-primary/50"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-[1.02] transition-all duration-300 outline-none hover:border-primary/50"
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-[1.02] transition-all duration-300 outline-none resize-none hover:border-primary/50"
                  placeholder="Tulis pesan Anda"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full justify-center group/btn hover:scale-105">
                <FaPaperPlane className="group-hover/btn:rotate-45 transition-transform duration-300" />
                <span>Kirim Pesan</span>
                <FaArrowRight className="ml-auto group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>

              {status.type && (
                <div
                  className={`p-4 rounded-lg text-center text-sm ${
                    status.type === "success"
                      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="card p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-semibold mb-6 relative z-10 group-hover:text-primary transition-colors duration-300">Informasi Kontak</h3>

              <div className="space-y-6 relative z-10">
                {/* Phone */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group/item border-2 border-transparent hover:border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="inline-block p-3 bg-primary/10 rounded-full group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 mb-3">
                      <FaPhone className="text-3xl text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">+62 899-8111-425</p>
                    <a
                      href="https://wa.me/628998111425"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    >
                      Chat di WhatsApp <FaArrowRight className="group-hover/item:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group/item border-2 border-transparent hover:border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="inline-block p-3 bg-primary/10 rounded-full group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 mb-3">
                      <FaEnvelope className="text-3xl text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">sulthonlptp@gmail.com</p>
                    <a
                      href="mailto:sulthonlptp@gmail.com"
                      className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    >
                      Kirim Email <FaArrowRight className="group-hover/item:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group/item border-2 border-transparent hover:border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="inline-block p-3 bg-primary/10 rounded-full group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 mb-3">
                      <FaMapMarkerAlt className="text-3xl text-primary group-hover/item:scale-110 group-hover/item:animate-bounce transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Depok, Jawa Barat
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
