import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      title: 'Call Us',
      info: '+91 84708 99395',
      link: 'tel:+918470899395'
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      info: 'info@oxygengym.com',
      link: 'mailto:info@oxygengym.com'
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      info: 'Oxygen Gym, behind Baleshwar Mandir, Ballia, UP-277001'
    },
    {
      icon: <FiClock />,
      title: 'Open Hours',
      info: '5:00 AM – 10:00 AM & 4:00 PM – 10:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Get In <span className="text-primary-red">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-primary-red/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-primary-red transition-colors duration-200"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-gray-300">{item.info}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-red to-red-800 p-8 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <motion.a
                href="tel:+918470899395"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-200"
              >
                <FiPhone className="text-xl" />
                Call Now: +91 84708 99395
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-primary-red focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-primary-red focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-primary-red focus:outline-none transition-colors duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-primary-red focus:outline-none transition-colors duration-200"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-red text-white py-4 rounded-lg font-bold hover:bg-red-600 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FiSend />
                Send Message
              </motion.button>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              We'll get back to you within 24 hours. Your fitness journey starts here!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;