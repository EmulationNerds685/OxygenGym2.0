import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const CTA = () => {
  const benefits = [
    '24/7 Gym Access',
    'Certified Trainers',
    'Premium Equipment',
    'Personalized Plans',
    'Nutrition Guidance',
    'Community Support'
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-red/10 via-black to-primary-red/10" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full border border-primary-red/10"
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Transform Your{' '}
              <span className="text-primary-red">Body.</span>{' '}
              Transform Your{' '}
              <span className="text-primary-red">Life.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 2000+ members who have achieved their fitness goals with Oxygen Gym
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800"
              >
                <FiCheckCircle className="text-primary-red text-xl" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#membership"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary-red text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-red-600 transition-all duration-200 shadow-lg shadow-primary-red/30 flex items-center gap-3"
            >
              Start Your Journey Today
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
            </motion.a>
            
            <motion.a
              href="tel:+918470899395"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-bold hover:border-primary-red hover:text-primary-red transition-all duration-200"
            >
              Free Consultation Call
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-800"
          >
            {[
              { value: '2000+', label: 'Active Members' },
              { value: '50+', label: 'Certified Trainers' },
              { value: '24/7', label: 'Open Hours' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-red mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;