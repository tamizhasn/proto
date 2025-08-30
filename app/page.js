'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80 },
            color: { value: '#000000' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

export default function Home() {
  return (
    <div>
      <div id="particles-js"></div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work />
      <Contact />
    </div>
  );
}
