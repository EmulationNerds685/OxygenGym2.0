import React from 'react';
import { motion } from 'framer-motion';
import {  FiHeart, FiUsers, FiWatch } from 'react-icons/fi';
import { Dumbbell } from 'lucide-react';
import { GiRunningShoe } from 'react-icons/gi';

const services = [
  {
    icon: <Dumbbell className="text-4xl"/>,
    title: 'Complete Equipment',
    description: 'State-of-the-art fitness equipment from leading brands',
    delay: 0.1
  },
  {
    icon: <GiRunningShoe className="text-4xl" />,
    title: 'Cardio Exercises',
    description: 'Advanced cardio machines with virtual training programs',
    delay: 0.2
  },
  {
    icon: <FiUsers className="text-4xl" />,
    title: 'Personal Training',
    description: 'Certified trainers for personalized workout plans',
    delay: 0.3
  },
  {
    icon: <FiHeart className="text-4xl" />,
    title: 'Fitness Programs',
    description: 'Specialized programs for all fitness levels',
    delay: 0.4
  },
  {
    icon: <FiWatch className="text-4xl" />,
    title: '24/7 Access',
    description: 'Round-the-clock gym access for all members',
    delay: 0.5
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-primary-red">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals in one premium facility
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-primary-red/50 transition-all duration-300"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Icon */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;