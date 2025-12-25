import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';

const plans = [
  {
    name: 'Monthly',
    price: '₹799',
    period: 'per month',
    registration: '+ ₹99 Registration',
    features: ['Full Gym Access', 'Cardio Zone', 'Locker Room', 'Basic Support'],
    popular: false,
    delay: 0.1
  },
  {
    name: 'Quarterly',
    price: '₹2099',
    period: 'for 3 months',
    registration: 'Free Registration',
    features: ['Everything in Monthly', 'Group Classes', 'Fitness Assessment', 'Priority Support'],
    popular: false,
    delay: 0.2
  },
  {
    name: 'Half Yearly',
    price: '₹3999',
    period: 'for 6 months',
    registration: 'Free Registration',
    features: ['Everything in Quarterly', 'Personal Trainer (2 sessions)', 'Nutrition Guide', '24/7 Access'],
    popular: false,
    delay: 0.3
  },
  {
    name: 'Yearly',
    price: '₹7899',
    period: 'for 12 months',
    registration: 'Free Registration + 1 Month Free',
    features: ['Everything in Half Yearly', 'Personal Trainer (12 sessions)', 'Premium Locker', 'VIP Lounge Access', 'Diet Plan'],
    popular: true,
    delay: 0.4
  },
  {
    name: 'Personal Training',
    price: '₹3000',
    period: 'per month',
    registration: '+ Gym Membership',
    features: ['One-on-One Training', 'Customized Workout Plan', 'Progress Tracking', 'Nutrition Counseling', 'Unlimited Sessions'],
    popular: false,
    delay: 0.5
  },
];

const Membership = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="membership" className="py-24 bg-gradient-to-b from-black/50 to-primary-charcoal">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Membership <span className="text-primary-red">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? 'lg:scale-105 lg:-translate-y-4 border-2 border-primary-red'
                  : 'border border-gray-800'
              } bg-gradient-to-b from-gray-900 to-black`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-red text-white px-4 py-2 rounded-bl-2xl font-bold flex items-center gap-2">
                  <FiStar />
                  Best Value
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="text-4xl font-bold mb-1">{plan.price}</div>
                  <div className="text-gray-400 text-sm">{plan.period}</div>
                  <div className="text-primary-red text-sm mt-1">{plan.registration}</div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary-red/20 rounded-full flex items-center justify-center">
                        <FiCheck className="text-primary-red text-sm" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full py-3 rounded-lg text-center font-bold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary-red hover:bg-red-600'
                      : 'bg-gray-800 hover:bg-primary-red'
                  }`}
                >
                  Join Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-400"
        >
          <p>* All plans include access to all gym facilities. Personal training requires separate membership.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;