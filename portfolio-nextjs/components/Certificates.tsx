import { FaSearchPlus, FaBuilding, FaCalendar } from "react-icons/fa";
import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "Las Vegas Gambling World Championship",
      issuer: "World Gambling Championship",
      date: "2024",
      image: "/images/casino.jpg",
    },
    {
      title: "World Domino's God",
      issuer: "World Domino's Competition",
      date: "2024",
      image: "/images/piala1.png",
    },
    {
      title: "Poker World Championship",
      issuer: "World Poker Championship",
      date: "2024",
      image: "/images/poker.jpg",
    },
  ];

  return (
    <section id="certificates" className="section relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title gradient-text animate-gradient-shift">Certificates</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 animate-slide-up">Sertifikasi & Penghargaan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="card group hover:-translate-y-3 transition-all duration-500 animate-bounce-in hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Decorative ribbon */}
              <div className="absolute top-4 -right-10 w-32 bg-gradient-to-r from-primary to-purple-500 text-white text-xs py-1 text-center rotate-45 shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Verified
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden cursor-pointer">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <FaSearchPlus className="text-white text-4xl animate-pulse" />
                    <p className="text-white text-sm mt-2 font-medium">Lihat Detail</p>
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3 bg-white dark:bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:to-gray-900 transition-all duration-500">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary group-hover:scale-105 transition-all duration-300 origin-left">{cert.title}</h3>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm group-hover:text-primary transition-colors duration-300">
                  <FaBuilding className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{cert.issuer}</span>
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm group-hover:text-primary transition-colors duration-300">
                  <FaCalendar className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{cert.date}</span>
                </p>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
