'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'My Projects', desc: 'See all of nice project i have done.', href: '#work' },
  { name: 'About Me', desc: 'Learn about my self what i do.', href: '#about' },
  { name: 'Contact me', desc: 'Let\'s talk', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // This ref prevents the scroll listener from overriding our manual click-scroll
  const isAutoScrolling = useRef(false);

  // 1. Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      // If we are auto-scrolling via click, ignore normal scroll events
      if (isAutoScrolling.current) return;
      
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Mobile Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 3. Lock Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // --- FIXED SCROLL HANDLER ---
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // This triggers the useEffect to unlock body scroll

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    // Lock the scroll listener immediately
    isAutoScrolling.current = true;

    // Update the visual state immediately
    if (targetId !== 'top') {
        setScrolled(true);
    } else {
        setScrolled(false);
    }

    // --- THE FIX IS HERE ---
    // We wait 100ms. This gives React time to run the useEffect that sets
    // document.body.style.overflow = 'unset'.
    // Without this wait, the browser ignores scrollTo because body is still locked.
    setTimeout(() => {
        if (element) {
            const yOffset = -80; // Header height offset
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        } else if (targetId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Release the lock after the scroll is likely finished
        setTimeout(() => {
            isAutoScrolling.current = false;
        }, 1000);
    }, 100); 
  };

  // --- ANIMATION VARIANTS ---
  const navContainerVariants = {
    top: {
      width: "100%",
      top: 0,
      borderRadius: "0px",
      padding: isMobile ? "1.5rem 5%" : "2rem 8%", 
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderBottom: "none",
      boxShadow: "none",
    },
    scrolled: {
      width: isMobile ? "90%" : "fit-content", 
      minWidth: isMobile ? "90%" : "500px",
      top: 20,
      borderRadius: "50px",
      padding: isMobile ? "1rem 1.5rem" : "0.75rem 2.5rem",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
    }
  };

  const menuVariants = {
    closed: { x: '100%', transition: { type: 'tween', ease: 'easeInOut', duration: 0.5 } },
    open: { x: '0%', transition: { type: 'tween', ease: 'easeInOut', duration: 0.5 } }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }
  };

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 z-[999] mx-auto flex justify-between items-center box-border"
        initial="top"
        animate={scrolled ? "scrolled" : "top"}
        variants={navContainerVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* LOGO */}
        <a 
          href="#top" 
          className="relative z-[1000] group shrink-0" 
          onClick={(e) => handleScrollTo(e, '#top')}
        >
          <h1 className={`font-bold tracking-tight text-[#111827] relative inline-block transition-all duration-300 ${scrolled ? 'text-xl' : 'text-3xl'}`}>
            tamil<span className="font-light">arasan</span>
            <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-[#111827] transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}></span>
          </h1>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-12 ml-8">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group shrink-0 cursor-pointer">
              <a 
                href={link.href} 
                className="block text-left"
                onClick={(e) => handleScrollTo(e, link.href)}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-[#111827] group-hover:text-sky-600 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-sm font-light text-gray-500">↗</span>
                </div>

                <motion.div
                  initial={{ height: "auto", opacity: 1 }}
                  animate={{ 
                    height: scrolled ? 0 : "auto", 
                    opacity: scrolled ? 0 : 0.7,
                    marginTop: scrolled ? 0 : 4
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-gray-500 font-medium max-w-[140px] leading-tight whitespace-normal">
                    {link.desc}
                  </p>
                </motion.div>
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER ICON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-[1000] w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
        >
          <span className={`h-[2px] bg-[#111827] transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2 bg-white' : 'w-6 group-hover:w-8'}`} />
          <span className={`h-[2px] bg-[#111827] transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4 group-hover:w-8'}`} />
          <span className={`h-[2px] bg-[#111827] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2 bg-white' : 'w-2 group-hover:w-8'}`} />
        </button>

      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#111827] z-[998] flex flex-col justify-center items-center text-white"
          >
            <ul className="flex flex-col gap-10 text-center px-4">
              {navLinks.map((link, i) => (
                <motion.li key={i} variants={mobileLinkVariants}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="block group"
                  >
                    <span className="text-4xl font-extrabold tracking-tight group-hover:text-sky-400 transition-colors">
                      {link.name}
                    </span>
                    <p className="text-sm text-gray-400 mt-2 font-medium tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
                      {link.desc}
                    </p>
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants} className="pt-12">
                 <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                   Based in Tamil Nadu
                 </p>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;