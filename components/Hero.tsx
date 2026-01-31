"use client";

import { useEffect, useState } from "react";
import { FaPaperPlane, FaDownload, FaInstagram, FaGithub, FaTiktok, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Front End Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/soullthn/", label: "Instagram" },
    { icon: FaGithub, href: "https://github.com/SlthnFabsh", label: "GitHub" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@su..........l", label: "TikTok" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sulthon-farizudin-al-bashir-020b7a3a7/", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6 animate-slide-in-left">
            <span className="text-lg text-gray-600 dark:text-gray-400 animate-fade-in inline-block">Hai, saya</span>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-gradient-shift animate-bounce-in">
              Sulthon Farizudin a.b
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 min-h-[40px]">
              {text}
              <span className="animate-pulse">|</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Saya adalah seorang siswa yang passionate dalam pengembangan website dan selalu bersemangat untuk
              belajar teknologi baru
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-primary hover-glow group">
                <FaPaperPlane className="group-hover:rotate-45 transition-transform duration-300" />
                <span>Hubungi Saya</span>
              </a>
              <a href="/CV Sulthon.pdf" download className="btn-secondary hover-glow group">
                <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-2 hover:rotate-12 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 animate-scale-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    aria-label={social.label}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light rounded-full animate-float opacity-90 blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse-glow opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 border-4 border-white dark:border-gray-700">
                <Image
                  src="/images/foto.jpg"
                  alt="Sulthon Farizudin a.b"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-bounce-in" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce-in" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
