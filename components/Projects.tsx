"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  category: string;
}

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedProjects(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects: Project[] = [
    {
      title: "Website SMK Taruna Bhakti",
      description: "Website PERPUSATKAAN SMK Taruna Bhakti yang saya buat sebagai project semester 1 akhir saya di SMK Taruna Bhakti, saya menggunakan next.js dan mysql untuk membuat website ini, website ini sudah sangat berfungsi dengan baik, dengan fitur murid bisa booking buku untuk dipinjam, dan website ini sudah dilengkapi middleware sederhana.",
      image: "/images/landing.png",
      tags: ["Next.Js", "MySQL", "Tailwind CSS",],
      liveUrl: "#home",
      codeUrl: "https://github.com/SlthnFabsh/projek-assesment",
      category: "Website",
    },
    {
      title: "Website e-commerce",
      description: "Website e-commerce yang saya buat untuk tugas sekolah dengan menggunakan bahasa pemrograman html dan tailwind css serta di lengkapi dengan API yang telah di sediakan, desain yang lebih modern dan fitur yang lumayan lengkap, dengan fitur cart, chekout dll",
      image: "/images/e-commers.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#home",
      codeUrl: "https://github.com/SlthnFabsh/Website_E-Commerce",
      category: "Website",
    },
    {
      title: "Website Portfolio 1.0",
      description: "Website portfolio pribadi yang saya buat untuk pertama kali, website dengan tampilan sederhana yang di buat hanya dengan html dan css tanpa fitur yang lengkap",
      image: "/images/portofolio-1.0.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#home",
      codeUrl: "https://github.com/SlthnFabsh/Portofolio",
      category: "Portfolio",
    },
  ];

  return (
    <section id="projects" className="section bg-white rounded-3xl dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title gradient-text animate-gradient-shift">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 animate-slide-up">Karya Terbaru</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card group hover:-translate-y-4 transition-all duration-500 animate-scale-in hover:shadow-2xl hover:shadow-primary/20 perspective-1000"
              style={{
                animationDelay: `${index * 0.15}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {project.category}
                  </span>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 bg-white dark:bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:to-gray-900 transition-all duration-500">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary group-hover:scale-105 transition-all duration-300 origin-left">{project.title}</h3>

                {/* Expandable Description */}
                <div className="space-y-2">
                  <p className={`text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all duration-300 ${expandedProjects.includes(index) ? '' : 'line-clamp-3'
                    }`}>
                    {project.description}
                  </p>

                  {/* Read More Button - Only show if description is long enough */}
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300 group/more"
                    >
                      <span>{expandedProjects.includes(index) ? 'Sembunyikan' : 'Lihat Selengkapnya'}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${expandedProjects.includes(index) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 group/btn"
                  >
                    <FaExternalLinkAlt className="group-hover/btn:rotate-45 group-hover/btn:scale-125 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 group/btn"
                  >
                    <FaGithub className="group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* 3D border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
