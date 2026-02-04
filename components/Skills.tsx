"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaServer } from "react-icons/fa";

interface Skill {
  name: string;
  percentage: number;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const frontendSkills: Skill[] = [
    { name: "HTML", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "TypeScript", percentage: 75 },
    { name: "Tailwind CSS", percentage: 80 },
  ];

  const backendSkills: Skill[] = [
    { name: "Express.js", percentage: 70 },
    { name: "Node.js", percentage: 75 },
    { name: "MySQL", percentage: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <div className="space-y-2 group" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold group-hover:text-primary group-hover:scale-110 transition-all duration-300">{skill.percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-primary-light rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/50"
          style={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient-shift"></div>
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
        {/* Particles effect */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: `${index * 0.2}s` }}></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="section relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title gradient-text animate-gradient-shift">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 animate-slide-up">Keahlian Teknis</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className="card p-8 hover:border-primary border-2 border-transparent transition-all duration-300 animate-slide-in-left hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group/card relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-primary/10 rounded-lg group-hover/card:bg-primary group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300">
                <FaCode className="text-3xl text-primary group-hover/card:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold group-hover/card:text-primary transition-colors duration-300">Frontend Development</h3>
            </div>
            <div className="space-y-6 relative z-10">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover/card:bg-primary/10 transition-colors duration-500"></div>
          </div>

          {/* Backend Skills */}
          <div className="card p-8 hover:border-primary border-2 border-transparent transition-all duration-300 animate-slide-in-right hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group/card relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-primary/10 rounded-lg group-hover/card:bg-primary group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300">
                <FaServer className="text-3xl text-primary group-hover/card:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold group-hover/card:text-primary transition-colors duration-300">Backend Development</h3>
            </div>
            <div className="space-y-6 relative z-10">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-tr-full group-hover/card:bg-primary/10 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
