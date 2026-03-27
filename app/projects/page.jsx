'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';

// Extended data for the pop-ups
const allProjects = [
  {
    id: "identix",
    title: "IDentiX", // [cite: 15]
    category: "Web3 & Blockchain",
    short: "Decentralized Certificate Management System.", // [cite: 15]
    fullDesc: "A decentralized identity (dID) platform using Next.js, Solidity, and Ethereum Sepolia for tamper-proof credential management. Delivered a blockchain issuance system supporting secure minting and instant public verification for 50+ digital assets. Optimized IPFS retrieval, reducing transaction costs by 40%.", // [cite: 15, 16, 18]
    tech: ["Next.js", "Solidity", "IPFS", "MetaMask"], // [cite: 15, 17, 18]
    glow: "bg-sky-500",
    link: "#"
  },
  {
    id: "ipo-pulse",
    title: "IPO Pulse", // [cite: 19]
    category: "Data Analytics",
    short: "Stock Market Dashboard & Prediction Platform.", // [cite: 19]
    fullDesc: "Designed a financial analytics dashboard tracking post-listing KPIs and engineered stock price forecasting models leveraging 5+ years of historical datasets. Analyzed data from 30+ listed companies to identify trends and short-term predictions.", // [cite: 19, 20, 21, 22]
    tech: ["Python", "Pandas", "NumPy", "Google Auth"], // [cite: 19, 23]
    glow: "bg-emerald-500",
    link: "#"
  },
  {
    id: "spicycode",
    title: "SpicyCode", // [cite: 24]
    category: "EdTech Platform",
    short: "Interactive Coding Learning & Practice Platform.", // [cite: 24]
    fullDesc: "Created a modular React.js learning platform featuring an in-browser compiler supporting 5+ programming languages. Implemented a scalable MongoDB-backed architecture, supporting 100+ test users, and established CI/CD pipelines via GitHub Actions.", // [cite: 24, 25, 27, 28]
    tech: ["React.js", "MongoDB", "GitHub Actions"], // [cite: 24, 27, 28]
    glow: "bg-orange-500",
    link: "#"
  },
  {
    id: "voice-ui",
    title: "Voice UI", // [cite: 29]
    category: "AI & Automation",
    short: "Desktop Voice Controlled Assistant UI.",
    fullDesc: "Built a desktop-based voice user interface automating 10+ system-level tasks through spoken input. Enabled real-time Text-to-Speech (TTS) with sub-second response latency using Python, PyQt, and the Gemini API, reducing manual steps by 40%.", // [cite: 29, 30, 31, 32]
    tech: ["Python", "Gemini API", "NLP"], 
    glow: "bg-purple-500",
    link: "#"
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] relative overflow-hidden selection:bg-[#111827] selection:text-white">
      <CustomCursor />

      {/* MetaMask-style Glowing Background Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-400/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 px-[5%] lg:px-[10%] pt-32 pb-24">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#111827] font-bold uppercase tracking-widest text-xs mb-8 transition-colors">
              <span className="text-lg leading-none">←</span> Return Home
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-extrabold text-[#111827] tracking-tighter leading-none"
            >
              The <br/> Archive.
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 font-medium max-w-md"
          >
            A complete collection of my software architecture, decentralized platforms, and machine learning integrations.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              layoutId={`card-${proj.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(proj)}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl cursor-pointer overflow-hidden transition-all duration-500"
            >
              {/* Dynamic Hover Glow */}
              <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${proj.glow}`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[250px]">
                <div>
                  <span className="px-4 py-1.5 bg-gray-100 text-[#111827] text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
                    {proj.category}
                  </span>
                  <motion.h2 layoutId={`title-${proj.id}`} className="text-4xl font-extrabold text-[#111827] mb-4 tracking-tight">
                    {proj.title}
                  </motion.h2>
                  <p className="text-gray-500 font-medium text-lg leading-relaxed">
                    {proj.short}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-10">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t} {i === 0 && '•'}</span>
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#111827] group-hover:border-[#111827] group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal (AnimatePresence handles entry/exit) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          >
            {/* Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-[#EFEFEF]/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-[#111827] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Color Accent & Tech */}
              <div className={`w-full md:w-1/3 p-10 flex flex-col justify-between relative overflow-hidden`}>
                <div className={`absolute inset-0 opacity-20 ${selectedProject.glow}`} />
                <div className="relative z-10">
                  <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-2 block">Category</span>
                  <h3 className="text-white font-bold text-xl">{selectedProject.category}</h3>
                </div>
                
                <div className="relative z-10 mt-10">
                  <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-4 block">Tech Stack</span>
                  <div className="flex flex-col gap-3">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-bold border border-white/10 backdrop-blur-md w-max">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-2/3 p-10 md:p-16 bg-white flex flex-col justify-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-100 hover:text-red-500 transition-colors font-bold"
                >
                  ✕
                </button>
                
                <motion.h2 layoutId={`title-${selectedProject.id}`} className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">
                  {selectedProject.title}
                </motion.h2>
                
                <p className="text-lg text-gray-600 font-medium leading-relaxed mb-10">
                  {selectedProject.fullDesc}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  <a href={selectedProject.link} className="px-8 py-4 bg-[#111827] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Live Preview
                  </a>
                  <a href="#" className="px-8 py-4 bg-gray-100 text-[#111827] rounded-full font-bold hover:bg-gray-200 transition-colors">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}