'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const socialLinks = [
  { alt: "GitHub", icon: assets.github, url: "https://github.com/tamizhasn" }, // [cite: 3]
  { alt: "LinkedIn", icon: assets.linkedin, url: "https://www.linkedin.com/in/tamizhasn/" }, // [cite: 3]
  { alt: "Behance", icon: assets.behance, url: "https://www.behance.net/tamilasn" },
];

const Header = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-[5%] lg:px-[8%] overflow-hidden">
      
      {/* Content Layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left: Typography & Actions */}
        <div className="lg:w-[55%] flex flex-col items-start z-20">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="text-4xl mb-4">
            👋
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-[85px] font-light text-[#111827] leading-none tracking-tight mb-4"
          >
            Hello! <span className="font-extrabold">I'm Tamilarasan</span> {/* [cite: 1] */}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-20 bg-[#111827]"></div>
            <h2 className="text-2xl md:text-3xl font-light text-gray-700">Software Engineer ✦</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 max-w-lg mb-8 leading-relaxed font-medium"
          >
            I enjoy turning big ideas into smooth, 
            high-performing web experiences by blending clean, intuitive design with powerful technology
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="space-y-3 mb-12 text-[#111827] font-semibold"
          >
            <li className="flex items-center gap-3"><span className="text-xl">✓</span> Pursuing a B.Tech in Information Technology</li>
            <li className="flex items-center gap-3"><span className="text-xl">✓</span> Built diverse projects across multiple industries</li> 
            <li className="flex items-center gap-3"><span className="text-xl">✓</span> Gained hands-on experience through professional internships</li>
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex items-center gap-8"
          >
            <a href="#contact" className="px-10 py-4 bg-[#111827] text-white rounded-full font-bold hover:scale-105 transition-transform duration-300">
              Let's Talk
            </a>
            <a href="https://drive.google.com/file/d/1hskmWyZTTpXT4pR3eLIfW80vLlB7vQfi/view?usp=sharing" className="font-bold text-[#111827] flex items-center gap-2 border-b-2 border-[#111827] pb-1 hover:text-sky-600 hover:border-sky-600 transition-colors">
              Check CV ↗
            </a>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9 }}
          className="mt-10 flex items-center gap-6"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mr-2">Connect:</span>
          
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-sky-200/50 hover:border-sky-300 transition-all duration-300 cursor-pointer group"
            >
              <Image 
                src={social.icon} 
                alt={social.alt} 
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" 
              />
            </motion.a>
          ))}
        </motion.div>
        </div>

        

        {/* Right: Profile Cutout & Background Blob */}
        <div className="lg:w-[45%] relative mt-20 lg:mt-0 flex justify-center items-center">
          
          {/* Colorful Gradient Blob from Reference 1 */}
          <div className="hero-blob"></div>

          {/* Floating Aesthetic Elements */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 left-10 w-24 h-24 border-2 border-dashed border-gray-400 rounded-full opacity-50 z-0" />
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-20 -left-10 w-32 h-32 bg-black rounded-full text-white flex items-center justify-center font-bold text-2xl z-20 shadow-2xl">
            Hello
          </motion.div>

          {/* 3D Stickers matching Reference 2 */}
          <motion.div whileHover={{ scale: 1.1 }} className="absolute top-10 right-0 z-30 bg-[#FFD700] text-black font-extrabold px-4 py-2 rounded-lg transform rotate-6 shadow-lg border-2 border-black">
             Discover My Work
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="absolute top-1/2 -right-12 z-30 bg-[#FF69B4] text-white font-extrabold px-4 py-2 rounded-lg transform -rotate-12 shadow-lg border-2 border-black">
            SCROLL DOWN !
          </motion.div>

          {/* Profile Image PlaceHolder - Adjust src to your cutout image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="relative z-10 w-[350px] h-[450px] md:w-[450px] md:h-[550px]"
          >
            <Image 
              src={assets.user_image || assets.profile_img} 
              alt="Tamilarasan" 
              layout="fill" 
              objectFit="contain" 
              className="drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Header;