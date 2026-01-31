import { FaGraduationCap, FaBriefcase, FaAward, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const infoBoxes = [
    {
      icon: FaGraduationCap,
      title: "Pendidikan",
      subtitle: "SMK Taruna Bhakti",
    },
    {
      icon: FaBriefcase,
      title: "Jurusan",
      subtitle: "RPL",
    },
    {
      icon: FaAward,
      title: "Projects",
      subtitle: "5+ Completed",
    },
  ];

  return (
    <section id="about" className="section rounded-3xl bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/5 to-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title gradient-text animate-gradient-shift">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 animate-slide-up">Perkenalan Singkat</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group animate-slide-in-left">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-2xl -rotate-3 group-hover:rotate-3 transition-transform duration-500"></div>
            
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-primary/30 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1 border-4 border-white dark:border-gray-700">
              <Image
                src="/images/foto_bareng1.jpg"
                alt="About Sulthon Farizudin a.b"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Info Boxes */}
            <div className="grid grid-cols-3 gap-4">
              {infoBoxes.map((box, index) => {
                const Icon = box.icon;
                return (
                  <div
                    key={index}
                    className="card p-4 text-center hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group animate-scale-in hover:border-2 hover:border-primary/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="text-3xl text-primary mx-auto mb-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">{box.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{box.subtitle}</p>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-justify">
              <p className="animate-fade-in hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300" style={{ animationDelay: '0.3s' }}>
                Saya Sulthon Farizudin a.b, siswa SMK Taruna Bhakti jurusan Rekayasa Perangkat Lunak
                (RPL). Saya memiliki ketertarikan besar dalam pengembangan website, terutama di bidang front-end
                development. Dengan keahlian dalam HTML, CSS, JavaScript, dan PHP, saya senang menciptakan desain
                web yang menarik dan responsif.
              </p>
              <p className="animate-fade-in hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300" style={{ animationDelay: '0.5s' }}>
                Selain itu, saya juga aktif mengikuti berbagai pelatihan dan sertifikasi untuk terus mengasah
                kemampuan saya di dunia teknologi. Melalui portfolio ini, saya berharap dapat menunjukkan karya
                dan keterampilan yang telah saya kembangkan selama proses belajar.
              </p>
            </div>

            {/* Download CV Button */}
            <a href="/CV Sulthon.pdf" download className="btn-primary inline-flex hover-glow group animate-bounce-in" style={{ animationDelay: '0.7s' }}>
              <FaDownload className="group-hover:translate-y-1 group-hover:scale-110 transition-transform duration-300" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
