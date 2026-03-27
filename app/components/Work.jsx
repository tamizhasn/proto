'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "IDentiX",
    tag: "WEB3 / BLOCKCHAIN",
    desc: "A decentralized identity platform using Next.js and Solidity. Delivered a blockchain issuance system supporting secure minting and instant verification for 50+ digital assets.",
    fullDesc: "IDentiX is a pioneering Decentralized Identity (dID) solution architected on the Ethereum Sepolia network. It eliminates the need for centralized credential authorities by allowing institutions to issue tamper-proof, verifiable credentials directly to users' wallets. Features include IPFS-based metadata storage for gas optimization, MetaMask integration for seamless signing, and a verification portal that instantly validates credential authenticity via smart contract queries.",
    image: assets.identix || "/placeholder.jpg",
    tech: ["Next.js", "Solidity", "Hardhat", "IPFS", "Tailwind CSS"],
    link: "https://identix.vercel.app",
    github: "https://github.com/tamizhasn/IDentiX",
    reverse: false
  },
  {
    id: 2,
    title: "TelcoMind AI", 
    tag: "CONVERSATIONAL AI & TELECOM",
    desc: "Engineered an enterprise-grade, proactive voice AI agent featuring sub-second latency, predictive SLA modeling, and live Twilio cellular network integration.",
    fullDesc: "TelcoMind AI acts as a proactive virtual employee for telecom customer support. Powered by Llama 3.1 via Groq and Deepgram for real-time STT/TTS, it leverages SQLite memory to predict caller issues before they finish speaking. The system utilizes a fully asynchronous WebSocket FastAPI backend to handle live audio streams from Twilio, paired with a React dashboard that visualizes live sentiment analysis, intent tracking, and CRM telemetry.",
    image: assets.telcomind || "/placeholder.jpg",
    tech: ["React", "FastAPI", "Llama 3.1", "Twilio", "Deepgram", "WebSockets"],
    link: "#",
    github: "https://github.com/tamizhasn/TelcoMind-AI",
    reverse: true
  },
  {
    id: 3,
    title: "Voice UI",
    tag: "AI & NLP",
    desc: "Desktop voice-controlled assistant built with Python, PyQt, and the Gemini API. Automates system-level tasks with sub-second TTS latency.",
    fullDesc: "This Voice User Interface (VUI) redefines desktop interaction by bridging local system commands with Generative AI. Built on Python and PyQt5, it uses the Google Gemini API for natural language understanding, allowing users to execute complex system tasks (like file management, app launching, and web searches) through conversational commands. It features a custom wake-word detection engine and ultra-low latency Text-to-Speech response.",
    image: assets.vui || "/placeholder.jpg",
    tech: ["Python", "PyQt5", "Gemini API", "SpeechRecognition", "TTS"],
    link: "#",
    github: "https://github.com/tamizhasn/Voice-Assistant",
    reverse: false
  }
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 px-[5%] lg:px-[8%] bg-[#EFEFEF] relative">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-24">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />)}
        </div>
        <h2 className="text-5xl font-extrabold text-[#111827] tracking-tight mb-6">Projects</h2>
        <p className="text-gray-500 font-medium max-w-md mx-auto">
          Deep dives into complex systems involving Web3 architecture, predictive data modeling, and conversational AI.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="flex flex-col gap-32 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className={`flex flex-col ${proj.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
            
            {/* Image Container (Clickable) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              onClick={() => setSelectedProject(proj)}
              className="w-full md:w-1/2 relative h-[400px] bg-white p-4 shadow-lg cursor-pointer group"
            >
              <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                {proj.image ? (
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold">Image Not Found</div>
                )}
                {/* Overlay with "View Project" Text */}
                <div className="absolute inset-0 bg-[#111827]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-[#111827] font-bold uppercase tracking-widest text-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                    </span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: proj.reverse ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col items-start"
            >
              <span className="px-4 py-1.5 bg-[#111827] text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                {proj.tag}
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-6 tracking-tight">
                {proj.title}
              </h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                {proj.desc}
              </p>
              <button 
                onClick={() => setSelectedProject(proj)}
                className="font-bold text-[#111827] flex items-center gap-2 border-b-2 border-[#111827] pb-1 hover:text-sky-600 hover:border-sky-600 transition-colors"
              >
                See Details ↗
              </button>
            </motion.div>

          </div>
        ))}

        {/* Explore More Button */}
        <div className="mt-20 flex justify-center relative z-20">
          <a href="/projects" className="group relative inline-flex items-center justify-center px-10 py-5 font-extrabold text-white transition-all duration-300 bg-[#111827] rounded-full hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <span className="relative z-10 flex items-center gap-3">
              Explore Full Archive <span className="text-2xl leading-none group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>
      </div>

      {/* --- POP-UP PROJECT MODAL (Fixed Z-Index: 5000) --- */}
      <AnimatePresence>
        {selectedProject && (
          // CHANGED Z-INDEX FROM 9999 TO 5000 to allow Cursor (9999) to stay on top
          <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#111827] hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
              >
                ✕
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-200">
                 {selectedProject.image ? (
                    <Image 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        fill 
                        className="object-cover"
                    />
                 ) : null}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                 <div className="absolute bottom-4 left-4 text-white md:hidden">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                 </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto custom-scrollbar flex flex-col bg-white">
                 
                 <div className="hidden md:block">
                    <span className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-2 block">
                        {selectedProject.tag}
                    </span>
                    <h2 className="text-4xl font-extrabold text-[#111827] mb-6 leading-tight">
                        {selectedProject.title}
                    </h2>
                 </div>

                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {selectedProject.fullDesc}
                 </p>

                 <div className="mb-8">
                    <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wide mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md border border-gray-200">
                                {item}
                            </span>
                        ))}
                    </div>
                 </div>

                 <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <a 
                        href={selectedProject.link} 
                        target="_blank"
                        className="flex-1 py-3.5 px-6 bg-[#111827] text-white rounded-xl font-bold text-center hover:bg-sky-600 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Live Demo ↗
                    </a>
                    <a 
                        href={selectedProject.github} 
                        target="_blank"
                        className="flex-1 py-3.5 px-6 bg-white text-[#111827] border-2 border-gray-200 rounded-xl font-bold text-center hover:border-[#111827] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <Image src={assets.github} alt="GitHub" className="w-5 h-5 opacity-80" />
                        GitHub Repo
                    </a>
                 </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}