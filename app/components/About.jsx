'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';


const timelineEvents = [
  {
    role: "SDE Intern", 
    organization: "Bluestock Fintech", 
    duration: "12/2025 - 01/2026",
    description: "Assisted in full-stack development using React.js, Node.js, and PostgreSQL. Applied machine learning fundamentals for a stock value prediction module.", // [cite: 7, 8, 9]
    icon: "💻"
  },
  {
    role: "Web Development Intern",
    organization: "IDM Tech Park",
    duration: "05/2025 - 06/2025",
    description: "Built responsive web modules using React.js and REST APIs. Supported API integration and data validation for 200+ user test records.", // [cite: 12, 13]
    icon: "🌐"
  },
  {
    role: "UI/UX Design Intern", //
    organization: "Nitroware Technologies", //
    duration: "04/2025 - 05/2025", //
    description: "Successfully completed inplant training focusing on UI/UX Designing. Gained hands-on experience in user interface principles at the Coimbatore branch.", //
    icon: "🎨"
  }
];

const achievements = [
  {
    metric: "Co-Organizer",
    title: "Google Developer Group - On Campus", 
    context: "Orchestrated 5+ technical events, including TechSprint '26 Hackathon, for 250+ participants",
    glow: "shadow-purple-500/30"
  },
  {
    metric: "600+",
    title: "LeetCode Problems", 
    context: "Max Rating: 1710 | 4000+ points", 
    glow: "shadow-sky-500/30"
  },
  {
    metric: "Unique Project",
    title: "Nandha Innovation day '26", 
    context: "Our project \"Identix\" recognized as unique project",
    glow: "shadow-purple-500/30"
  },
  {
    metric: "Finalist", 
    title: "NextHackathon '25", 
    context: "Aakam 360, TN StartUp",
    glow: "shadow-purple-500/30"
  },
  {
    metric: "Achieved 96.04 percentile",
    title: "Young Turks '25", 
    context: "Naukri Campus",
    glow: "shadow-purple-500/30"
  },
  {
    metric: "Winner", // [cite: 60]
    title: "VYNFEST UI/UX", // [cite: 60]
    context: "National-Level Technical Fest", // [cite: 60, 61]
    glow: "shadow-emerald-500/30"
  }
];

const skillsList = [
  { name: "Python", key: "python" }, 
  { name: "Java", key: "java" }, 
  { name: "JavaScript", key: "javascript" }, 
  { name: "Tailwind CSS", key: "tailwind" }, 
  { name: "React.js", key: "react" }, 
  { name: "Next.js", key: "next_js" }, 
  { name: "Spring Boot", key: "springboot" },  
  { name: "PostgreSQL", key: "postgresql" }, 
  { name: "MongoDB", key: "mongodb" }, 
  { name: "Firebase", key: "firebase" }, 
];

export default function About() {
  const timelineRef = useRef(null);
  
  // Apple-style scroll progress for the timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-32 px-[5%] lg:px-[10%] bg-[#FAFAFA] relative overflow-hidden z-20">
      
      {/* 1. SECTION INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-sky-500 font-bold tracking-widest uppercase text-sm mb-4"
        >
          My Trajectory
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-[#111827] tracking-tight leading-tight"
        >
          Experience & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
            Evolution.
          </span>
        </motion.h2>
      </div>

      {/* 2. THE SINGLE TIMELINE CARD (Apple / MetaMask Vibe) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 mb-32 relative"
      >
        <div ref={timelineRef} className="relative">
          
          {/* The Animated Scroll Line */}
          <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div style={{ height: lineHeight }} className="w-full bg-sky-500 rounded-full" />
          </div>

          <div className="flex flex-col gap-16">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 shadow-md flex items-center justify-center z-10 transition-colors duration-500 hover:border-sky-500">
                      <span className="text-lg">{event.icon}</span>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full pl-20 md:pl-0 md:w-5/12 flex flex-col"
                  >
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl hover:bg-white transition-all duration-300 group cursor-pointer relative overflow-hidden">
                      {/* MetaMask style corner glow on hover */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-colors duration-500" />
                      
                      <span className="text-sky-600 font-bold text-sm tracking-widest uppercase mb-2 block">
                        {event.duration}
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#111827] mb-1 group-hover:text-sky-600 transition-colors">
                        {event.role}
                      </h3>
                      <h4 className="text-lg text-gray-800 font-semibold mb-4">
                        {event.organization}
                      </h4>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* 3. ACHIEVEMENTS & MILESTONES (Glowing Bento Grid) */}
      <div className="max-w-5xl mx-auto mb-32">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-10 text-center tracking-tight">
          Milestones & Recognition
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achieve, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-[#111827] p-10 rounded-[2rem] flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-xl transition-all duration-500 hover:${achieve.glow}`}
            >
               {/* Inner Glow matching MetaMask aesthetic */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-transparent to-white/5 pointer-events-none" />
               
               <h2 className="text-4xl font-extrabold text-white mb-4 relative z-10">
                 {achieve.metric}
               </h2>
               <h3 className="text-xl font-bold text-sky-400 mb-2 relative z-10">
                 {achieve.title}
               </h3>
               <p className="text-sm font-medium text-gray-400 relative z-10">
                 {achieve.context}
               </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. SKILLS GRID (Retained but elevated with subtle 3D hover) */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-10 text-center tracking-tight">
          Technical Arsenal
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skillsList.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, rotateX: 10 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="flex flex-col items-center justify-center gap-4 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                {assets[skill.key] ? (
                  <Image src={assets[skill.key]} alt={skill.name} width={56} height={56} className="object-contain" />
                ) : (
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold text-lg">
                    {skill.name[0]}
                  </div>
                )}
              </div>
              <h4 className="text-sm font-bold text-[#111827] text-center tracking-wide">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}