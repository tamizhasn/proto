'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#EFEFEF] text-[#111827]"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          Tamilarasan.
        </motion.h1>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        className="h-[2px] bg-[#111827] mt-6"
      />
    </motion.div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen selection:bg-[#111827] selection:text-white relative">
      
      {/* Custom Cursor initialized at the top level so it is 
        active over the preloader and the entire application 
      */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Header />
          <Marquee />
          <About />
          <Work />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}