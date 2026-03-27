'use client';
import React from 'react';
import { motion } from 'framer-motion';

const aboutDetails = [
  { 
    title: "SOFTWARE ENGINEER", 
    desc: "Passionate about full-stack development, I build responsive web modules and scalable architectures using modern technologies like React.js and Node.js. [cite: 7, 8]", 
    icon: "💻",
    dark: true 
  },
  { 
    title: "ACADEMIC BACKGROUND", 
    desc: "Currently pursuing a B.Tech in Information Technology at Nandha College of Technology, Erode, maintaining an academic standard of 8.84 CGPA. [cite: 45]", 
    icon: "🎓",
    dark: false 
  },
  { 
    title: "COMPETITIVE CODER", 
    desc: "Dedicated problem solver with a strong analytical mindset, having solved over 550 problems on LeetCode with a Max Rating of 1710. [cite: 62]", 
    icon: "🏆",
    dark: false 
  },
];

export default function Services() {
  return (
    <section id="about" className="py-24 px-[5%] lg:px-[8%] bg-[#EFEFEF]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#111827]"></div>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500 border-b border-gray-400 pb-0.5">MY STORY ?</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#111827] leading-tight tracking-tight">WHO I <br/> AM</h2>
        </div>
        
        <div className="mt-8 md:mt-0 max-w-sm flex flex-col items-start md:items-end gap-6 text-left md:text-right">
          <p className="text-gray-600 font-medium">
            I am a dedicated developer focused on writing clean, efficient code and crafting thoughtful digital experiences that solve complex problems.
          </p>
          <a href="/Tamilarasan--Resume.pdf" download className="px-8 py-3 bg-[#111827] text-white rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-wider text-sm cursor-pointer">
            Download CV
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutDetails.map((detail, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -8 }}
            className={`p-10 min-h-[320px] flex flex-col border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer
              ${detail.dark ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
          >
            {/* Visual Icon */}
            <div className={`w-12 h-12 mb-auto flex items-center justify-center rounded-lg ${detail.dark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <span className="text-2xl">{detail.icon}</span>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-extrabold tracking-tight mb-3 leading-snug">{detail.title}</h3>
              <p className={`text-sm mb-8 font-medium leading-relaxed ${detail.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {detail.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                DISCOVER MORE <span className="text-lg leading-none">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}