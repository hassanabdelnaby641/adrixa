'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Empowering Brands Through Influencer Marketing
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Connecting You with the Right Influencers for Maximum Impact
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#contact" className="btn-primary">
              Work With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;