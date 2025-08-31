'use client';
import { useEffect } from 'react';
import { AuroraBackground } from '@/app/components';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {


  return (
    <AuroraBackground>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </AuroraBackground>
  );
}
