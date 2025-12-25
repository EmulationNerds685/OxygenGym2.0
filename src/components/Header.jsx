import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { gsap } from 'gsap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Header animation on scroll
    gsap.to('.navbar', {
      backgroundColor: isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      duration: 0.3,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center">
              <span className="font-heading font-bold text-xl">OG</span>
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">
              OXYGEN <span className="text-primary-red">GYM</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="font-medium hover:text-primary-red transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-primary-red px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all duration-200"
            >
              <FiPhone />
              <span>Call Now</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg hover:text-primary-red transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 bg-primary-red px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all duration-200 mt-4"
                >
                  <FiPhone />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;