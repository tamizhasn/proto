'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tamizhasn/", icon: assets.linkedin },
  { name: "GitHub", url: "https://github.com/tamizhasn", icon: assets.github },
  { name: "Behance", url: "https://www.behance.net/tamilasn", icon: assets.behance },
];

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "d097b731-b539-4034-99f2-f911f4b4b97f"); // Your exact Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message Sent Successfully!");
        event.target.reset();
        
        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus("idle");
            setResult("");
        }, 5000);
      } else {
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 px-[5%] lg:px-[10%] bg-[#FAFAFA] relative overflow-hidden z-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-sky-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Info & Socials */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-bold tracking-widest uppercase text-gray-500">Contact</p>
            </div>
            <h2 className="text-6xl md:text-8xl font-extrabold text-[#111827] tracking-tighter leading-none mb-6">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Connect.</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-md">
              Whether you have a question about my ideas or projects, need a full-stack solution, or just want to say hi, feel free to reach out me. I'll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Direct Contact Details from Resume */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">📧</span>
                <a href="mailto:tamilarasanown@gmail.com" className="text-lg font-bold text-[#111827] hover:text-sky-600 transition-colors">
                  tamilarasanown@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                 <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">📍</span>
                 <span className="text-lg font-bold text-[#111827]">Erode, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Dock */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <Image src={social.icon} alt={social.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
        >
          {/* Form Success Overlay */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8"
              >
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} 
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                  <span className="text-4xl">✅</span>
                </motion.div>
                <h3 className="text-3xl font-extrabold text-[#111827] mb-2">Message Sent!</h3>
                <p className="text-gray-500">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input 
                  type="text" name="name" required placeholder=" " 
                  className="peer w-full pt-6 pb-2 border-b-2 border-gray-200 bg-transparent text-[#111827] font-medium focus:outline-none focus:border-sky-500 transition-colors placeholder-transparent"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-sm peer-focus:font-bold peer-focus:uppercase peer-focus:text-sky-500">
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" name="email" required placeholder=" " 
                  className="peer w-full pt-6 pb-2 border-b-2 border-gray-200 bg-transparent text-[#111827] font-medium focus:outline-none focus:border-sky-500 transition-colors placeholder-transparent"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-sm peer-focus:font-bold peer-focus:uppercase peer-focus:text-sky-500">
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea 
                name="message" rows="4" required placeholder=" " 
                className="peer w-full pt-6 pb-2 border-b-2 border-gray-200 bg-transparent text-[#111827] font-medium focus:outline-none focus:border-sky-500 transition-colors placeholder-transparent resize-none"
              ></textarea>
              <label className="absolute left-0 top-0 text-gray-400 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-500 peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-sm peer-focus:font-bold peer-focus:uppercase peer-focus:text-sky-500">
                Tell me about your idea
              </label>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-5 bg-[#111827] text-white rounded-full font-bold text-lg tracking-wide hover:shadow-[0_10px_30px_rgba(17,24,39,0.3)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === "loading" ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Image src={assets.right_arrow_white} alt="" className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-center mt-4 font-medium">{result}</p>
              )}
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}