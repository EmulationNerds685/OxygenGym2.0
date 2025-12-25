import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Membership from './components/Membership';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Section reveal animations
    sectionRefs.current.forEach((section) => {
      if (!section) return;
      
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-primary-charcoal text-white overflow-hidden">
      {/* Header and Hero are intentionally placed together without spacing */}
      <Header />
      <Hero />
      
      <main className="relative">
        <div ref={addToRefs}>
          <Services />
        </div>
        <div ref={addToRefs}>
          <Membership />
        </div>
        <div ref={addToRefs}>
          <CTA />
        </div>
        <div ref={addToRefs}>
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;