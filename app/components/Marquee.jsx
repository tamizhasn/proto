'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div className="w-full bg-[#111827] text-white py-6 overflow-hidden border-y border-gray-800 relative z-20">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {/* Repeating text block for smooth loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center text-xl font-bold tracking-widest uppercase px-4">
            <span>WEB DESIGN</span>
            <span className="mx-8 text-sky-400">✦</span>
            <span>APP DESIGN</span>
            <span className="mx-8 text-sky-400">✦</span>
            <span>DEVELOPMENT</span>
            <span className="mx-8 text-sky-400">✦</span>
            <span>WEB FLOW</span>
            <span className="mx-8 text-sky-400">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}