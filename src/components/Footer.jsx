import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FiInstagram />, label: 'Instagram', href: '#' },
    { icon: <FiFacebook />, label: 'Facebook', href: '#' },
    { icon: <FiTwitter />, label: 'Twitter', href: '#' },
    { icon: <FiYoutube />, label: 'YouTube', href: '#' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-xl">OG</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl">OXYGEN GYM</h3>
                <p className="text-gray-400 text-sm">A Complete Unisex Gym</p>
              </div>
            </div>
            <p className="text-gray-400">
              Premium fitness facility dedicated to helping you achieve your health and wellness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-red transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="text-white">Address:</strong> Oxygen Gym,behind Baleshwar Mandir, Ballia, UP-277001
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong>{' '}
                <a href="tel:+918470899395" className="hover:text-primary-red transition-colors duration-200">
                  +91 84708 99395
                </a>
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:info@oxygengym.com" className="hover:text-primary-red transition-colors duration-200">
                  info@oxygengym.com
                </a>
              </li>
              <li className="text-gray-400">
  <strong className="text-white">Hours:</strong> 5:00 AM – 10:00 AM & 4:00 PM – 10:00 PM
</li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl hover:bg-primary-red transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-xl hover:bg-red-600 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Oxygen Gym. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with ❤️ for fitness enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;