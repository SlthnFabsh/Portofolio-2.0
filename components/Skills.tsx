"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiPython,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const skills: SkillItem[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#a78bfa" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#818cf8" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#c4b5fd" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#a78bfa" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title gradient-text animate-gradient-shift">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 animate-slide-up">
            Teknologi & Tools yang saya gunakan
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative flex flex-col items-center justify-center gap-3 p-5 md:p-6
                  rounded-2xl cursor-default
                  bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm
                  border border-gray-200/60 dark:border-gray-700/50
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:scale-105
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 70}ms` : "0ms",
                  transitionProperty: "all",
                }}
              >
                {/* Colored glow behind icon on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                  style={{ backgroundColor: skill.color + "25" }}
                ></div>

                {/* Colored border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 25px ${skill.color}30, 0 0 50px ${skill.color}15, inset 0 0 25px ${skill.color}08`,
                  }}
                ></div>

                {/* Hover border color */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: skill.color + "50" }}
                ></div>

                {/* Icon */}
                <Icon
                  className="text-3xl md:text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-sm"
                  style={{ color: skill.color }}
                />

                {/* Skill Name */}
                <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
